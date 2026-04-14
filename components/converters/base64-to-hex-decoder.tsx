'use client';

import { Base64SourceDecoder } from '@/components/converters/base64-source-decoder';
import { base64ToHex } from '@/lib/base64';

export function Base64ToHexDecoder() {
  return (
    <Base64SourceDecoder
      inputLabel="Paste Base64"
      inputDescription="Decode Base64 bytes and inspect them as hexadecimal."
      inputPlaceholder="iVBORw0KGgoAAAANSUhEUg=="
      outputTitle="Hex Output"
      outputDescription="Recovered bytes are shown as a hexadecimal string for debugging and analysis."
      emptyState="Paste a Base64 value to decode hex output."
      downloadName="hex-output"
      transform={base64ToHex}
    />
  );
}
