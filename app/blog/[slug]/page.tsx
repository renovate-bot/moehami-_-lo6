import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from 'next/image';
import { NextSeo } from "next-seo";

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
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found - My Blog',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.data.title,
    description: post.data.summary || post.data.description,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <NextSeo
        title="Test Title"
        description="Test Description"
        canonical="https://example.com"
      />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">{post.data.title}</h1>
        <p className="mt-4 text-muted-foreground py-10">
          Published on: {new Date(post.data.date).toLocaleDateString()}
        </p>

        <div className="text-sm leading-6">
          <figure className="relative flex flex-col-reverse bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
            <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
              <p>Crafting engaging narratives that spotlight the unique shopping experience of bin stores.</p>
            </blockquote>
            <figcaption className="flex items-center space-x-4">
              <Image
                src={`/authors/${post.data.author}.jpg`}
                alt={`Profile image for ${post.data.author}`}
                width={403}
                height={416}
                className="flex-none w-14 h-14 rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="flex-auto">
                <div className="text-base text-slate-900 font-semibold dark:text-slate-200">
                  {post.data.author}
                </div>
                <div className="mt-0.5 dark:text-slate-300">
                  Writer
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:mb-4 prose-p:mb-4 prose-strong:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
    </>
  );
}