'use client';

import { Base64SourceDecoder } from '@/components/converters/base64-source-decoder';
import { base64ToText } from '@/lib/base64';

export function Base64ToCssDecoder() {
  return (
    <Base64SourceDecoder
      inputLabel="Paste Base64"
      inputDescription="Decode Base64 content back into CSS source."
      inputPlaceholder="Ym9keSB7IGNvbG9yOiAjMGYxNzJhOyB9"
      outputTitle="CSS Output"
      outputDescription="Recovered stylesheet text is shown as source and can be copied or downloaded."
      emptyState="Paste a Base64 value to decode CSS output."
      downloadName="css-output"
      transform={base64ToText}
    />
  );
}
