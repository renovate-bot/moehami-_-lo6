// plugins/internal-link-builder/index.js
import { remark } from 'remark';
import strip from 'strip-markdown';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default {
  async onPostBuild({ constants, utils }) {
    console.log('Building content search index for internal linking...');

    try {
      // Constants provided by Netlify
      const contentDir = path.join(process.cwd(), 'content/posts');
      const outputDir = path.join(constants.PUBLISH_DIR, 'search-index');

      // 1. Read all markdown content
      const files = await fs.promises.readdir(contentDir);
      const contentIndex = await Promise.all(files.map(async (file) => {
        const filePath = path.join(contentDir, file);
        const content = await fs.promises.readFile(filePath, 'utf-8');

        // 2. Extract relevant data and clean it up
        const { data, content: body } = matter(content);
        const plainText = String(await remark().use(strip).process(body));

        return {
          slug: path.parse(file).name,
          title: data.title,
          description: data.description || '',
          body: plainText,
        };
      }));

      // 3. Save the index as a JSON file in your build output
      await fs.promises.mkdir(outputDir, { recursive: true });
      await fs.promises.writeFile(
        path.join(outputDir, 'content-index.json'),
        JSON.stringify(contentIndex)
      );

      console.log('Internal linking search index created successfully!');
    } catch (error) {
      utils.build.failBuild('Failed to build internal linking index', { error });
    }
  },
};
