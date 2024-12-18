import { defineConfig } from "tinacms";
import slugify from "slugify"; // For generating SEO-friendly filenames

// Your hosting provider likely exposes this as an environment variable


export default defineConfig(
  {
  
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
    branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH! || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF! || // Vercel branch env
    process.env.HEAD!, // Netlify branch env
    token: process.env.TINA_TOKEN || "",



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
        ],
      },
    ],
  },
});
