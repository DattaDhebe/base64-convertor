'use client';

import { Base64SourceDecoder } from '@/components/converters/base64-source-decoder';
import { base64ToText } from '@/lib/base64';

export function Base64ToHtmlDecoder() {
  return (
    <Base64SourceDecoder
      inputLabel="Paste Base64"
      inputDescription="Decode Base64 content back into HTML markup."
      inputPlaceholder="PGRpdiBjbGFzcz0iaGVybyI+QmFzZTY0IFN0dWRpbzwvZGl2Pg=="
      outputTitle="HTML Output"
      outputDescription="Recovered markup is shown as source so you can inspect and copy it safely."
      emptyState="Paste a Base64 value to decode HTML output."
      downloadName="html-output"
      transform={base64ToText}
    />
  );
}
