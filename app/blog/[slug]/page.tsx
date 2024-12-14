import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

// Define types for better type safety
type PostFrontMatter = {
  title: string;
  date: string;
  author: string;
  summary?: string;
  description?: string;
};

type Post = PostFrontMatter & {
  content: string;
  slug: string;
};

const postsDirectory = path.join(process.cwd(), 'app/blog/content/posts');

function getPostBySlug(slug: string): Post | null {
  try {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) return null;
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      ...data,
      content,
      slug,
    } as Post;
  } catch (error) {
    console.error('Error reading post:', error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => ({
      slug: fileName.replace(/\.md$/, ''),
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
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

type BlogPostProps = {
  params: {
    slug: string;
  };
};

export default function BlogPost({ params }: BlogPostProps) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
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
