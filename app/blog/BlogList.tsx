'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
   image?: string;
  };
  author: string;
  content: string;
  summary: string;
  image?: string;
}
const BlogImage = ({ src, alt }: { src: string; alt: string }) => {
    const [imageError, setImageError] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const { ref, isVisible } = useIntersectionObserver();
  
    useEffect(() => {
  
    }, [src]);
  
    if (imageError) {
      return null;
    }
  
    const imagePath = src.startsWith('/') ? src : `/${src}`;
  
    return (
      <div ref={ref} className="relative h-48 w-full">
        <Image
          src={imagePath}
          alt={alt}
          fill
          className={`object-cover rounded-t-lg fade-in ${loaded && isVisible ? 'show' : ''}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={(e) => {
            console.error('Image failed to load:', imagePath);
            setImageError(true);
          }}
        />
      </div>
    );
  
  };
const BlogCard = ({ post }: { post: Post }) => {
  const imageSource = post.frontmatter.image;
  const author = post.author;
  const formattedDate = format(new Date(post.frontmatter.date), 'MMMM dd, yyyy');
  const { ref, isVisible } = useIntersectionObserver(); // Use intersection observer for summary
  // Debug post data
  useEffect(() => {

  }, [post]);

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
        {imageSource && <BlogImage src={imageSource} alt={post.frontmatter.title} />}
        <CardHeader>
          <CardTitle className="line-clamp-2">{post.frontmatter.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{formattedDate} | By: {author}</p>
        </CardHeader>
        <CardContent ref={ref} className={`fade-in ${isVisible ? 'show' : ''}`}> 
<div className="prose prose-sm dark:prose-invert line-clamp-3"> 
<ReactMarkdown>{post.summary}</ReactMarkdown>
 </div>
 </CardContent>
      </Card>
    </Link>
  );
};

export default function BlogList({ posts }: { posts: Post[] }) {
  // Debug all posts
  useEffect(() => {

  }, [posts]);

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
