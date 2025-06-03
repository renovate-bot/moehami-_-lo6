import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from 'next/image';


const postsDirectory = path.join(process.cwd(), 'app/blog/content/posts');

interface PostMetadata {
  seo: { metaDescription: string; };
  title: string;
  summary?: string;
  description?: string;
  date: string;
  author: string;
  image: string;
  metaDescription: string;
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
    description: post.data.seo.metaDescription || 'bin stores',
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold">{post.data.title}</h1>

   <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 sm:py-4 rounded-lg">

       <Image
                priority={true}
src={`/authors/${post.data.author}.jpg`} 
alt={`${post.data.title}`}
className='w-10 lg:max-w-2l mx-auto h-91 rounded-full sm:mx-0 sm:shrink-0'
              /> 
          <div className="space-y-1 text-left sm:text-left">
    <div className="">
      <span className="text-base">Author: </span><span className="text-base text-blue-600">{post.data.author}</span>
      <span className="text-base"> | Published </span>   <span className="text-base text-muted-foreground">{new Date(post.data.date).toLocaleDateString()}</span>

    </div>

  </div>
</div>
     

        <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:mb-2 prose-p:mb-2 prose-strong:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">

            <div className='relative max-w-4xl lg:max-w-6xl mx-auto'>
                <Image
                priority={true}
                src={`${post.data.image}`}
alt={`${post.data.title}`}
                width={500}
                height={500}
                className='relative z-10 mx-auto block rounded-lg w-full h-auto opacity-100'
                style={{ maxWidth: '90vw' }}
              />
              </div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
   <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 rounded-lg shadow-lg outline outline-black/5">

       <Image
                priority={true}
src={`/authors/${post.data.author}.jpg`} 
alt={`${post.data.title}`}
className='w-16 lg:max-w-2l mx-auto h-91 rounded-lg sm:mx-0 sm:shrink-0'
              /> 
          <div className="space-y-2 text-center sm:text-left">
    <div className="">
      <span className="text-lg font-semibold text-black">About the author: </span><p className="text-xl font-semibold text-blue-600">{post.data.author}</p>

      <p className="font-medium text-gray-500">Crafting engaging narratives that spotlight the unique shopping experience of bin stores.</p>
    </div>

  </div>
</div>

          
        </article>
      </div>

  );
}
