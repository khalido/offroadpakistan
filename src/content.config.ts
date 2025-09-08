import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog posts collection - posts are in subdirectories with index.md files
const postsCollection = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/index.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    wordpress_id: z.number().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

// Gallery collection - loads only gallery index.md files
const galleriesCollection = defineCollection({
  loader: glob({
    base: "./src/content/pictures",
    pattern: "**/index.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    picture_count: z.number().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

// Pictures collection - loads all picture files except index.md
const picturesCollection = defineCollection({
  loader: glob({
    base: "./src/content/pictures",
    pattern: ["**/*.{md,mdx}", "!**/index.{md,mdx}"],
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    gallery: z.string(),
    image: image(),
    thumbnail: image().optional(),
    order: z.number().optional(),
    photographer: z.string().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
  galleries: galleriesCollection,
  pictures: picturesCollection,
};
