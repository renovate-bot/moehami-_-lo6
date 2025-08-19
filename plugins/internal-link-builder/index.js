// plugins/internal-link-builder/index.js

const fs = require('fs');
const path = require('path');
const { remark } = require('remark');
const strip = require('strip-markdown');

module.exports = {
  // The onPostBuild event is ideal for this task
  async onPostBuild({ constants, utils }) {
    console.log('Building content search index for internal linking...');

    // Constants provided by Netlify
    const contentDir = path.join(process.cwd(), 'content/posts');
    const outputDir = path.join(constants.PUBLISH_DIR, 'search-index');

    // 1. Read all markdown content
    const files = await utils.run.command(`ls -1 ${contentDir}`);
    const contentIndex = files.stdout.split('\n').filter(Boolean).map(file => {
      const filePath = path.join(contentDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');

      // 2. Extract relevant data and clean it up
      const { data, content: body } = JSON.parse(
        JSON.stringify(matter(content))
      );
      const plainText = String(remark().use(strip).processSync(body));

      return {
        slug: path.parse(file).name,
        title: data.title,
        description: data.description,
        body: plainText,
      };
    });

    // 3. Save the index as a JSON file in your build output
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }
    fs.writeFileSync(
      path.join(outputDir, 'content-index.json'),
      JSON.stringify(contentIndex)
    );

    console.log('Internal linking search index created successfully!');
  },
};
