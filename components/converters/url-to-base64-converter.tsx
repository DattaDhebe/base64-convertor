'use client';

import { TextSourceConverter } from '@/components/converters/text-source-converter';
import { textToBase64 } from '@/lib/base64';

export function UrlToBase64Converter() {
  return (
    <TextSourceConverter
      inputLabel="Paste URL"
      inputDescription="Encode a full URL or query-heavy link into a Base64 string without fetching remote content."
      inputPlaceholder={`https://example.com/products?category=audio&sort=popular#details`}
      outputTitle="Base64 Output"
      outputDescription="This converter encodes the URL text itself, which is useful for transport and later decoding."
      emptyState="Paste a URL and run the conversion to generate Base64 output."
      downloadName="url"
      transform={textToBase64}
    />
  );
}
