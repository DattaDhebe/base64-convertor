export const decoderOptions = [
  {
    id: 'ascii',
    label: 'Base64 to ASCII',
    description: 'Decode Base64 payloads into plain ASCII text.',
    longDescription:
      'Paste a Base64 string or data URL and decode it into 7-bit ASCII text for inspection, debugging, or protocol work.',
  },
  {
    id: 'audio',
    label: 'Base64 to Audio',
    description: 'Turn Base64 audio data back into playable media.',
    longDescription:
      'Decode Base64 audio payloads or data URLs into a browser-playable audio preview and downloadable file.',
  },
  {
    id: 'basic-auth',
    label: 'Basic Auth Decode',
    description: 'Decode HTTP Basic authorization values.',
    longDescription:
      'Paste a Basic authorization header or just the Base64 portion to reveal the underlying username and password pair.',
  },
  {
    id: 'file',
    label: 'Base64 to File',
    description: 'Convert Base64 payloads back into a downloadable file.',
    longDescription:
      'Decode Base64 or data URL input and download the recovered binary as a file directly from the browser.',
  },
  {
    id: 'hex',
    label: 'Base64 to Hex',
    description: 'Translate Base64-encoded bytes into hexadecimal.',
    longDescription:
      'Decode Base64 binary content and inspect the raw bytes as a hexadecimal string for diagnostics and protocol work.',
  },
  {
    id: 'image',
    label: 'Base64 to Image',
    description: 'Preview image content recovered from Base64.',
    longDescription:
      'Decode image-oriented Base64 strings or data URLs into a visual preview and save the recovered asset if needed.',
  },
  {
    id: 'pdf',
    label: 'Base64 to PDF',
    description: 'Recover a PDF document from Base64 text.',
    longDescription:
      'Decode Base64 or data URL input into a live PDF preview and downloadable document without leaving the browser.',
  },
  {
    id: 'text',
    label: 'Base64 to Text',
    description: 'Decode Base64 into UTF-8 text content.',
    longDescription:
      'Convert Base64 payloads back into readable UTF-8 text, including multi-language content and symbols.',
  },
] as const;
