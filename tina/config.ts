import { defineConfig } from "tinacms";
import slugify from "slugify"; // For generating SEO-friendly filenames

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  client: {
    // Replace with your TinaCMS GraphQL API URL
    apiUrl: "https://content.tinajs.io/content/fe3620ca-485a-4632-b4e1-13e9f71174dd/github/main" || "http://localhost:4001/graphql",
    
  },
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        label: "Blog Posts",
        name: "posts",
        path: "app/blog/content/posts",
        format: "md",
        ui: {
          filename: {
            // Generate SEO-friendly filenames based on the title
            slugify: (values) => {
              return slugify(values.title || "untitled", {
                lower: true,
                strict: true,
              });
            },
          },
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            label: "Author",
            name: "author",
            required: true,
          },
          {
            type: "datetime",
            label: "Date",
            name: "date",
            required: true,
          },
          {
            type: "rich-text",
            label: "Content",
            name: "body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
