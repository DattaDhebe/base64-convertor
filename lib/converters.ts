export const converterOptions = [
  {
    id: 'text',
    label: 'Text to Base64',
    description: 'Encode plain text using UTF-8 safe conversion.',
    longDescription:
      'Paste or type plain text and generate a clean Base64 representation for transport, storage, or testing.',
  },
  {
    id: 'image',
    label: 'Image to Base64',
    description: 'Generate Base64 data URIs from images.',
    longDescription:
      'Transform PNG, JPG, SVG, and other image assets into Base64 output for previews, APIs, or inline embeds.',
  },
  {
    id: 'url',
    label: 'URL to Base64',
    description: 'Encode URL strings into Base64 text.',
    longDescription:
      'Convert full URLs or query-rich addresses into Base64 so they can be stored, passed, or decoded elsewhere.',
  },
  {
    id: 'hex',
    label: 'Hex to Base64',
    description: 'Translate hexadecimal strings into Base64.',
    longDescription:
      'Paste hex-encoded data and transform it into Base64 output for APIs, debugging, and protocol tooling.',
  },
  {
    id: 'pdf',
    label: 'PDF to Base64',
    description: 'Encode PDF files for transfer or storage.',
    longDescription:
      'Convert PDF documents into Base64 strings suitable for API requests, database fields, or download workflows.',
  },
  {
    id: 'html',
    label: 'HTML to Base64',
    description: 'Encode markup fragments or full documents.',
    longDescription:
      'Convert HTML content into Base64 text when you need an encoded representation of your document source.',
  },
  {
    id: 'css',
    label: 'CSS to Base64',
    description: 'Encode stylesheet text and snippets.',
    longDescription:
      'Convert raw CSS into Base64 for transport, templating, or embedding in systems that expect encoded payloads.',
  },
  {
    id: 'file',
    label: 'File to Base64',
    description: 'Encode any supported local file.',
    longDescription:
      'Upload documents, assets, or arbitrary files and convert them into a Base64 payload without leaving the browser.',
  },
  {
    id: 'audio',
    label: 'Audio to Base64',
    description: 'Encode local audio files into Base64 data URLs.',
    longDescription:
      'Turn MP3, WAV, OGG, and other audio files into Base64 strings for upload payloads, inline previews, or storage workflows.',
  },
] as const;
