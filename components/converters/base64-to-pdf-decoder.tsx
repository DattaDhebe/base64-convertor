'use client';

import { Base64BinaryDecoder } from '@/components/converters/base64-binary-decoder';

export function Base64ToPdfDecoder() {
  return (
    <Base64BinaryDecoder
      inputLabel="Paste Base64"
      inputDescription="Decode Base64 PDF data into a live browser preview."
      inputPlaceholder="data:application/pdf;base64,JVBERi0xLjQKJ..."
      outputTitle="Recovered PDF"
      outputDescription="The PDF is reconstructed locally and can be previewed or downloaded."
      emptyState="Paste a Base64 value to recover a PDF."
      downloadName="decoded-document"
      defaultMimeType="application/pdf"
      previewLabel="PDF Preview"
      renderPreview={(blobUrl) => (
        <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50">
          <iframe src={blobUrl} title="Decoded PDF preview" className="h-[28rem] w-full" />
        </div>
      )}
    />
  );
}
