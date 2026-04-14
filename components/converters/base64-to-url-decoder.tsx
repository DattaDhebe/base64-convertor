'use client';

import { Base64SourceDecoder } from '@/components/converters/base64-source-decoder';
import { base64ToText } from '@/lib/base64';

function decodeUrl(input: string) {
  const decoded = base64ToText(input).trim();
  new URL(decoded);
  return decoded;
}

export function Base64ToUrlDecoder() {
  return (
    <Base64SourceDecoder
      inputLabel="Paste Base64"
      inputDescription="Decode Base64 content back into a URL string."
      inputPlaceholder="aHR0cHM6Ly9kaGViZS5jb20vdG9vbHMvdGV4dC10by1iYXNlNjQ="
      outputTitle="URL Output"
      outputDescription="Recovered URL text is validated before it is shown."
      emptyState="Paste a Base64 value to decode a URL."
      downloadName="url-output"
      transform={decodeUrl}
    />
  );
}
