'use client';

import { Base64BinaryDecoder } from '@/components/converters/base64-binary-decoder';

export function Base64ToImageDecoder() {
  return (
    <Base64BinaryDecoder
      inputLabel="Paste Base64"
      inputDescription="Decode Base64 image data into a previewable image asset."
      inputPlaceholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
      outputTitle="Recovered Image"
      outputDescription="The image is decoded locally, previewed in the browser, and can be downloaded."
      emptyState="Paste a Base64 value to recover an image preview."
      downloadName="decoded-image"
      defaultMimeType="image/png"
      previewLabel="Image Preview"
      renderPreview={(blobUrl) => (
        <div className="flex min-h-72 items-center justify-center rounded-[1.75rem] border border-slate-200 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.1),_transparent_34%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_100%)] p-6">
          <img
            src={blobUrl}
            alt="Decoded Base64 preview"
            className="max-h-80 w-auto rounded-2xl object-contain shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
          />
        </div>
      )}
    />
  );
}
