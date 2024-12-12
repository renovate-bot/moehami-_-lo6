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

// Metadata function for dynamic title
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: post.title,
  };
}
