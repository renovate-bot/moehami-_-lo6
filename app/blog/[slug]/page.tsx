// app/blog/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

const postsDirectory = path.join(process.cwd(), 'app/blog/content/posts');

async function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, content };
}

export async function generateStaticParams() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - My Blog',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.summary || post.description,
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 prose prose-lg">
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <p className="mt-4 text-muted-foreground">
        Published on: {new Date(post.date).toLocaleDateString()} By {post.author}
      </p>
      <article className="prose mt-4">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
}
