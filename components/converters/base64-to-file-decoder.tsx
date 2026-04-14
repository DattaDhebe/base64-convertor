'use client';

import { Base64BinaryDecoder } from '@/components/converters/base64-binary-decoder';

export function Base64ToFileDecoder() {
  return (
    <Base64BinaryDecoder
      inputLabel="Paste Base64"
      inputDescription="Decode Base64 data back into a downloadable file."
      inputPlaceholder="data:application/octet-stream;base64,SGVsbG8="
      outputTitle="Recovered File"
      outputDescription="The binary payload is reconstructed locally and can be downloaded immediately."
      emptyState="Paste a Base64 value to recover a file."
      downloadName="decoded-file"
      defaultMimeType="application/octet-stream"
      previewLabel="File Summary"
    />
  );
}
