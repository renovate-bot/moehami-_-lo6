// app/blog/page.tsx
import { getPosts } from './getPosts';
import BlogList from './BlogList';

// Keep the page component as a server component for data fetching
export default async function BlogPage() {
  const posts = await getPosts();
 
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });

  return <BlogList posts={sortedPosts} />;
}