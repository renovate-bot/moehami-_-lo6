import { defineConfig } from "tinacms";
import slugify from "slugify"; // For generating SEO-friendly filenames

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io

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
          {
            name: "seo",
            label: "SEO",
            type: "object",
            fields: [
              { name: "metaTitle", label: "Meta Title", type: "string" },
              { name: "metaDescription", label: "Meta Description", type: "string" },
              { name: "canonicalUrl", label: "Canonical URL", type: "string" },
            ],
          }
          
        ],
      },
    ],
  },
});
