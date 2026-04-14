import type { MetadataRoute } from 'next';
import { toolPages } from '@/lib/tool-pages';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dhebe.com',
      lastModified: new Date('2026-04-14'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://dhebe.com/support',
      lastModified: new Date('2026-04-14'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...toolPages.map((tool) => ({
      url: `https://dhebe.com/tools/${tool.slug}`,
      lastModified: new Date('2026-04-14'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
