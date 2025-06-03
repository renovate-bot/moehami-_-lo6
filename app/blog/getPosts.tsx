import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'app/blog/content/posts');

interface Frontmatter {
  title: string;
  date: string;
  author: string;
  image?: string; // Optional image field
}

export async function getPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');

      const { data, content } = matter(fileContents); // Parse frontmatter

      // Ensure frontmatter has the correct types, providing defaults if necessary
      const frontmatter: Frontmatter = {
        title: data.title || 'Untitled', // Provide default title if missing
        date: data.date || '', // Provide empty string if date is missing
        author: data.author || '',
        image: data.image || '', // Provide default empty string if image is missing
      };

      const markdownContent = await remark().use(html).process(content);

      return {
        slug: filename.replace(/\.md$/, ''),
        frontmatter, // Explicitly typed frontmatter
        content: markdownContent.toString(),
        author: data.author,
        summary: content.slice(0, 200) + '...', // Extract first 200 characters
      };
    })
  );

  return posts;
}
