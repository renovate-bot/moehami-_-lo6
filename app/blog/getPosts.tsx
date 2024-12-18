import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'app/blog/content/posts');

export async function getPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');

      const { data, content } = matter(fileContents); // Parse frontmatter
      const markdownContent = await remark().use(html).process(content);

      return {
        slug: filename.replace(/\.md$/, ''),
        frontmatter: data,
        content: markdownContent.toString(),
        summary: content.slice(0, 200) + '...', // Extract first 200 characters
      };
    })
  );

  return posts;
}

// Get a single post by slug
export async function getPostBySlug(slug: string) {
  const filenames = fs.readdirSync(postsDirectory);
  const filename = filenames.find(file => file.replace(/\.md$/, '') === slug);

  if (!filename) {
    return null; // No post found for the given slug
  }

  const filePath = path.join(postsDirectory, filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const markdownContent = await remark().use(html).process(content);

  return {
    slug: slug,
    frontmatter: data,
    content: markdownContent.toString(),
  };
}

// Metadata function for dynamic title
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug); // Ensure async call
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: post.frontmatter.title, // Access title from frontmatter
  };
}
