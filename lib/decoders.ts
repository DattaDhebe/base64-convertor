export const decoderOptions = [
  {
    id: 'text',
    label: 'Base64 to Text',
    description: 'Decode Base64 into UTF-8 text content.',
    longDescription:
      'Convert Base64 payloads back into readable UTF-8 text, including multi-language content and symbols.',
  },
  {
    id: 'image',
    label: 'Base64 to Image',
    description: 'Preview image content recovered from Base64.',
    longDescription:
      'Decode image-oriented Base64 strings or data URLs into a visual preview and save the recovered asset if needed.',
  },
  {
    id: 'url',
    label: 'Base64 to URL',
    description: 'Decode Base64 URL strings back into links.',
    longDescription:
      'Recover URL text from Base64 payloads so full addresses can be validated, copied, and reused.',
  },
  {
    id: 'hex',
    label: 'Base64 to Hex',
    description: 'Translate Base64-encoded bytes into hexadecimal.',
    longDescription:
      'Decode Base64 binary content and inspect the raw bytes as a hexadecimal string for diagnostics and protocol work.',
  },
  {
    id: 'pdf',
    label: 'Base64 to PDF',
    description: 'Recover a PDF document from Base64 text.',
    longDescription:
      'Decode Base64 or data URL input into a live PDF preview and downloadable document without leaving the browser.',
  },
  {
    id: 'html',
    label: 'Base64 to HTML',
    description: 'Decode Base64 content back into markup.',
    longDescription:
      'Recover HTML markup from Base64 strings so you can inspect, edit, or reuse the source safely.',
  },
  {
    id: 'css',
    label: 'Base64 to CSS',
    description: 'Decode Base64 stylesheet content back into CSS.',
    longDescription:
      'Recover stylesheet source from Base64 payloads for debugging, editing, or transport workflows.',
  },
  {
    id: 'file',
    label: 'Base64 to File',
    description: 'Convert Base64 payloads back into a downloadable file.',
    longDescription:
      'Decode Base64 or data URL input and download the recovered binary as a file directly from the browser.',
  },
  {
    id: 'audio',
    label: 'Base64 to Audio',
    description: 'Turn Base64 audio data back into playable media.',
    longDescription:
      'Decode Base64 audio payloads or data URLs into a browser-playable audio preview and downloadable file.',
  },
] as const;
