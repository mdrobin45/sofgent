// keystatic.config.ts
import { collection, config, fields } from "@keystatic/core";

export default config({
   storage: {
      kind: "github",
      repo: {
         owner: "iean",
         name: "sofgent-web",
      },
   },
   collections: {
      posts: collection({
         label: "Posts",
         slugField: "title",
         path: "/public/blogs/*",
         format: { contentField: "content" },
         schema: {
            title: fields.slug({ name: { label: "Title" } }),
            excerpt: fields.text({ label: "Excerpt" }),
            author: fields.text({ label: "Author" }),
            date: fields.date({ label: "Post Date" }),
            imageUrl: fields.image({ label: "Thumbnail" }),
            readTime: fields.text({ label: "readTime" }),
            content: fields.markdoc({ label: "Content" }),
         },
      }),
   },
});
