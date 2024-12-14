// app/blog/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation'; // For 404 handling
import ReactMarkdown from 'react-markdown';
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';

const postsDirectory = path.join(process.cwd(), 'app/blog/content/posts');

function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, content };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const paths = fileNames.map((fileName) => ({
    params: { slug: fileName.replace(/\.md$/, '') },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

interface Post {
  title: string;
  summary?: string;
  description?: string;
  date: string;
  author: string;
  content: string;
}

interface BlogPostProps {
  post: Post;
}

export default function BlogPost({ post }: BlogPostProps) {
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
