export interface ToolPageEntry {
  slug: string;
  kind: 'converter' | 'decoder';
  id: string;
  label: string;
  description: string;
}

export const toolPages: ToolPageEntry[] = [
  {
    slug: 'text-to-base64',
    kind: 'converter',
    id: 'text',
    label: 'Text to Base64',
    description: 'Encode plain text into Base64 online using a fast browser-based converter.',
  },
  {
    slug: 'image-to-base64',
    kind: 'converter',
    id: 'image',
    label: 'Image to Base64',
    description: 'Convert PNG, JPG, SVG, WEBP, GIF, and other images to Base64 data URLs online.',
  },
  {
    slug: 'url-to-base64',
    kind: 'converter',
    id: 'url',
    label: 'URL to Base64',
    description: 'Encode URLs into Base64 strings online for storage, transport, and testing.',
  },
  {
    slug: 'hex-to-base64',
    kind: 'converter',
    id: 'hex',
    label: 'Hex to Base64',
    description: 'Convert hexadecimal strings to Base64 online with validation.',
  },
  {
    slug: 'pdf-to-base64',
    kind: 'converter',
    id: 'pdf',
    label: 'PDF to Base64',
    description: 'Convert PDF files to Base64 online for APIs, downloads, and storage workflows.',
  },
  {
    slug: 'html-to-base64',
    kind: 'converter',
    id: 'html',
    label: 'HTML to Base64',
    description: 'Encode HTML markup and full documents to Base64 online.',
  },
  {
    slug: 'css-to-base64',
    kind: 'converter',
    id: 'css',
    label: 'CSS to Base64',
    description: 'Encode CSS snippets and full stylesheets into Base64 online.',
  },
  {
    slug: 'file-to-base64',
    kind: 'converter',
    id: 'file',
    label: 'File to Base64',
    description: 'Convert files to Base64 online directly in your browser.',
  },
  {
    slug: 'audio-to-base64',
    kind: 'converter',
    id: 'audio',
    label: 'Audio to Base64',
    description: 'Convert audio files to Base64 online for embedding and API workflows.',
  },
  {
    slug: 'base64-to-text',
    kind: 'decoder',
    id: 'text',
    label: 'Base64 to Text',
    description: 'Decode Base64 into readable UTF-8 text online.',
  },
  {
    slug: 'base64-to-image',
    kind: 'decoder',
    id: 'image',
    label: 'Base64 to Image',
    description: 'Decode Base64 image data into a previewable image online.',
  },
  {
    slug: 'base64-to-url',
    kind: 'decoder',
    id: 'url',
    label: 'Base64 to URL',
    description: 'Decode Base64 URL strings back into usable links online.',
  },
  {
    slug: 'base64-to-hex',
    kind: 'decoder',
    id: 'hex',
    label: 'Base64 to Hex',
    description: 'Decode Base64 bytes into hexadecimal output online.',
  },
  {
    slug: 'base64-to-pdf',
    kind: 'decoder',
    id: 'pdf',
    label: 'Base64 to PDF',
    description: 'Decode Base64 PDF data into a previewable document online.',
  },
  {
    slug: 'base64-to-html',
    kind: 'decoder',
    id: 'html',
    label: 'Base64 to HTML',
    description: 'Decode Base64 back into HTML source online.',
  },
  {
    slug: 'base64-to-css',
    kind: 'decoder',
    id: 'css',
    label: 'Base64 to CSS',
    description: 'Decode Base64 back into CSS source online.',
  },
  {
    slug: 'base64-to-file',
    kind: 'decoder',
    id: 'file',
    label: 'Base64 to File',
    description: 'Convert Base64 back into a downloadable file online.',
  },
  {
    slug: 'base64-to-audio',
    kind: 'decoder',
    id: 'audio',
    label: 'Base64 to Audio',
    description: 'Decode Base64 audio payloads into playable audio online.',
  },
];

export function getToolPageBySlug(slug: string) {
  return toolPages.find((tool) => tool.slug === slug);
}
