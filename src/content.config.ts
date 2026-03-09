import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: 'src/content/projects' }),
  schema: z.object({
    lang: z.string(),
    title: z.string(),
    subtitle: z.string(),
    heroImage: z.string(),
    storyIntro: z.string(),
    organizer: z.object({
      name: z.string(),
      avatar: z.string(),
      role: z.string(),
      location: z.string(),
    }),
    trust: z.array(
      z.object({
        icon: z.string(),
        label: z.string(),
        description: z.string(),
      })
    ),
    funding: z.array(z.string()),
    recipientName: z.string(),
    stripeDescription: z.string(),
  }),
});

export const collections = { projects };
