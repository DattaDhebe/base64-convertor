'use client';

import { Base64SourceDecoder } from '@/components/converters/base64-source-decoder';
import { base64ToText } from '@/lib/base64';

export function Base64ToTextDecoder() {
  return (
    <Base64SourceDecoder
      inputLabel="Paste Base64"
      inputDescription="Decode a Base64 value back into readable UTF-8 text."
      inputPlaceholder="SGVsbG8gZnJvbSBCYXNlNjQgU3R1ZGlv"
      outputTitle="Text Output"
      outputDescription="Recovered UTF-8 text is shown locally and can be copied or downloaded."
      emptyState="Paste a Base64 value to decode text output."
      downloadName="text-output"
      transform={base64ToText}
    />
  );
}
