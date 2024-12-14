// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { client } from '@/tina/__generated__/client';


// Explicitly define the params type to match Next.js expectations
export type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  try {
    const postsResponse = await client.queries.postConnection();
    return postsResponse.data.postConnection.edges?.map((edge) => ({
      slug: edge?.node?._sys.filename || '',
    })).filter(param => param.slug !== '') || [];
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ 
  params 
}: Params): Promise<Metadata> {
  try {
    const postResponse = await client.queries.post({
      relativePath: `${params.slug}.md`
    });

    if (!postResponse.data.post) {
      return {
        title: 'Post Not Found - My Blog',
        description: 'The requested blog post could not be found.',
      };
    }

    return {
      title: postResponse.data.post.title || 'Blog Post',
      description: postResponse.data.post.summary || postResponse.data.post.description,
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post',
      description: 'Blog post details',
    };
  }
}

export default async function BlogPost({ params }: Params) {
  try {
    const postResponse = await client.queries.post({
      relativePath: `${params.slug}.md`
    });

    const post = postResponse.data.post;

    if (!post) {
      notFound();
    }

    return (
      <div className="container mx-auto px-4 py-12 prose prose-lg">
        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
        <p className="mt-4 text-muted-foreground">
          Published on: {post.date ? new Date(post.date).toLocaleDateString() : 'Unknown Date'} 
          {post.author && ` By ${post.author}`}
        </p>
        <article className="prose mt-4">
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </article>
      </div>
    );
  } catch (error) {
    console.error('Error fetching post:', error);
    notFound();
  }
}
