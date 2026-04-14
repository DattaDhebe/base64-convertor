import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Base64 Studio',
    short_name: 'Base64 Studio',
    description:
      'Free online Base64 encoder and decoder tools for text, images, files, PDFs, audio, URLs, HTML, CSS, and hex.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fffaf5',
    theme_color: '#0f172a',
    lang: 'en',
  };
}
