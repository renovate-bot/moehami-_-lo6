
// plugins/internal-link-builder/index.ts

import { remark } from 'remark';
import strip from 'strip-markdown';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

// Define the type for the data object for clarity and type safety
interface PostData {
  slug: string;
  title: string;
  description: string;
  body: string;
}

// Define the type for the Netlify plugin event handlers
interface PluginArgs {
  constants: {
    PUBLISH_DIR: string;
    // Add other constants you might use
  };
  utils: {
    build: {
      failBuild: (message: string, options?: { error?: any }) => void;
    };
    // Add other utils you might use
  };
}

export default {
  /**
   * This is a Netlify Build Plugin event handler that runs after the main build is complete.
   * We use it to create a search index from all Markdown files.
   * @param {PluginArgs} args - The arguments provided by the Netlify Build system.
   */
  async onPostBuild({ constants, utils }: PluginArgs) {
    console.log('Building content search index for internal linking...');

    try {
      // Get the path to the content directory relative to the project root
      const contentDir = path.join(process.cwd(), 'content/posts');
      // Get the path for the output directory within the publish folder
      const outputDir = path.join(constants.PUBLISH_DIR, 'search-index');
      
      // Read all the file names from the posts directory asynchronously
      const files = await fs.readdir(contentDir);
      
      // Process each file to create a structured index
      const contentIndex: PostData[] = await Promise.all(
        files.map(async (file) => {
          const filePath = path.join(contentDir, file);
          const content = await fs.readFile(filePath, 'utf-8');
          
          // Use gray-matter to parse front matter and content
          const { data, content: body } = matter(content);
          
          // Use remark and strip-markdown to get plain text from the body
          const plainText = String(await remark().use(strip).process(body));
          
          return {
            slug: path.parse(file).name,
            title: data.title || '',
            description: data.description || '',
            body: plainText,
          };
        })
      );

      // Create the output directory if it doesn't exist
      await fs.mkdir(outputDir, { recursive: true });
      
      // Write the JSON index to a file in the publish directory
      await fs.writeFile(
        path.join(outputDir, 'content-index.json'),
        JSON.stringify(contentIndex, null, 2)
      );

      console.log('Internal linking search index created successfully!');
    } catch (error) {
      // Use the provided utility to gracefully fail the build and log the error
      utils.build.failBuild('Failed to build internal linking index.', { error });
    }
  },
};

