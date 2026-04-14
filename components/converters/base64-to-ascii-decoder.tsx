'use client';

import { Base64SourceDecoder } from '@/components/converters/base64-source-decoder';
import { base64ToAscii } from '@/lib/base64';

export function Base64ToAsciiDecoder() {
  return (
    <Base64SourceDecoder
      inputLabel="Paste Base64"
      inputDescription="Decode a Base64 string back into plain ASCII content."
      inputPlaceholder="SGVsbG8sIFdvcmxkIQ=="
      outputTitle="ASCII Output"
      outputDescription="Recovered ASCII text is shown locally and can be copied or downloaded."
      emptyState="Paste a Base64 value to decode ASCII output."
      downloadName="ascii-output"
      transform={base64ToAscii}
    />
  );
}
