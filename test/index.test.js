import test from 'ava';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { onPostBuild } from '../index.js';

// Convert import.meta.url to a directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to create a temporary directory for tests
async function setupTempDir(testTitle) {
  const tempDir = path.join(__dirname, 'temp', testTitle.replace(/\s/g, '-'));
  await fs.mkdir(tempDir, { recursive: true });
  return tempDir;
}

// Helper function to create mock markdown files
async function createMockFiles(dir) {
  const files = {
    'post-1.md': `---
title: "First Blog Post"
---
# Welcome to the blog

This is the content of the first post. It has some **bold** text and a link to [another page](/page-2/).`,
    'page-2.md': `---
title: "About Us"
---
This is a page about our company.`,
    'notes/draft-3.md': `---
title: "A Draft Post"
---
This should not be included. It's in a notes directory.`,
    'image.png': 'This is not a markdown file.',
  };

  await fs.mkdir(path.join(dir, 'notes'), { recursive: true });

  for (const [filename, content] of Object.entries(files)) {
    await fs.writeFile(path.join(dir, filename), content, 'utf8');
  }
}

test('builds a search index from markdown files', async t => {
  // 1. Setup a temporary directory to act as the build output (publish) directory
  const publishDir = await setupTempDir(t.title);

  // 2. Create mock markdown files inside the temporary directory
  await createMockFiles(publishDir);

  // 3. Mock the Netlify Build Plugin environment objects
  const mockConstants = {
    PUBLISH_DIR: publishDir,
  };
  const mockNetlifyConfig = {};
  const mockUtils = {
    status: {
      show: (status) => {
        // Log the status for debugging, but don't perform a real action
        console.log(`[Mock Status] ${status.title}: ${status.summary}`);
      }
    }
  };

  // 4. Run the plugin's onPostBuild event handler
  // The plugin's logic should read the files from the mock publishDir
  // and write a new index file back to that same directory.
  await onPostBuild({
    constants: mockConstants,
    netlifyConfig: mockNetlifyConfig,
    utils: mockUtils
  });

  // 5. Read the generated search index file
  const indexPath = path.join(publishDir, 'search-index.json');
  const indexExists = await fs.stat(indexPath).then(() => true).catch(() => false);

  t.true(indexExists, 'The search-index.json file should be created.');

  const fileContent = await fs.readFile(indexPath, 'utf8');
  const searchIndex = JSON.parse(fileContent);

  // 6. Define the expected output
  const expectedIndex = [{
    url: '/post-1',
    title: 'First Blog Post',
    content: 'Welcome to the blog This is the content of the first post. It has some bold text and a link to another page/.'
  }, {
    url: '/page-2',
    title: 'About Us',
    content: 'This is a page about our company.'
  }];

  // 7. Assert that the generated index matches the expected output
  // We use t.deepEqual to compare the contents of the objects and arrays.
  t.deepEqual(searchIndex, expectedIndex, 'The generated search index should match the expected data.');

  // 8. Clean up the temporary directory after the test runs
  await fs.rm(publishDir, { recursive: true, force: true });
});
