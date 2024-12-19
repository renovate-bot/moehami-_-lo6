import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation'; // For 404 handling
import ReactMarkdown from 'react-markdown';

const postsDirectory = path.join(process.cwd(), 'app/blog/content/posts');

interface PostMetadata {
  title: string;
  summary?: string;
  description?: string;
  date: string;
  author: string;
}

interface Post {
  data: PostMetadata;
  content: string;
}

function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return { data: data as PostMetadata, content };
}

export async function generateStaticParams() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Await params
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found - My Blog',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.data.title, // Access metadata title
    description: post.data.summary || post.data.description, // Access metadata description or summary
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Await params
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    
    <div className="container mx-auto px-4 py-12">
  <h1 className="text-4xl font-bold mb-8">{post.data.title}</h1>
  <p className="mt-4 text-muted-foreground">
    Published on: {new Date(post.data.date).toLocaleDateString()} By {post.data.author}
  </p>
  <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:mb-4 prose-p:mb-4 prose-strong:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
    <ReactMarkdown>{post.content}</ReactMarkdown>
  </article>
</div>

  );
}
