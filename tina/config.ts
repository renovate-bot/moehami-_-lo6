 // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  apiURL: process.env.NEXT_PUBLIC_APIURL,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
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
            type: "image",
            label: "Image",
            name: "image",
          },
        {
  type: 'rich-text',
  name: 'body',
  label: 'Body',
  isBody: true,
  templates: [
    {
      name: 'img',
      label: 'Image',
      fields: [
        {
          type: 'string',
          name: 'url',
          label: 'Image URL',
        },
        {
          type: 'string',
          name: 'alt',
          label: 'Alt Text',
        },
        {
          type: 'string',
          name: 'caption',
          label: 'Caption',
        }
      ]
    }
  ]
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
          },
        ],
      },
      {
        label: "State Texts",
        name: "stateTexts",
        path: "public/content/stateTexts",
        format: "md",
        ui: {
          filename: {
            // Use the state name as the filename
            slugify: (values) => {
              return slugify(values.state || "untitled", {
                lower: true,
                strict: true,
              });
            },
          },
        },
        fields: [
          {
            type: "string",
            label: "State",
            name: "state",
            isTitle: true,
            required: true,
          },
          {
            label: "Meta Title",
            name: "metaTitle",
            type: "string",
          },
          {
            label: "Meta Description",
            name: "metaDescription",
            type: "string",
          },
          {
            type: "rich-text",
            label: "Custom Text",
            name: "body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
