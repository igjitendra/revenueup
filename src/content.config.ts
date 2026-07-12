import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(), description: z.string(), publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(), author: z.string().default('RevenueUp Editorial'),
    category: z.string().default('Growth'), tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false), draft: z.boolean().default(false),
    cover: z.string().optional(), seoTitle: z.string().optional(), seoDescription: z.string().optional()
  })
});
export const collections = { blog };
