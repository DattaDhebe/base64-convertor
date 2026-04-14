'use client';

import { Base64BinaryDecoder } from '@/components/converters/base64-binary-decoder';

export function Base64ToAudioDecoder() {
  return (
    <Base64BinaryDecoder
      inputLabel="Paste Base64"
      inputDescription="Decode Base64 audio data back into playable media."
      inputPlaceholder="data:audio/mpeg;base64,SUQzAwAAAAAA..."
      outputTitle="Recovered Audio"
      outputDescription="The audio payload is reconstructed locally and can be previewed or downloaded."
      emptyState="Paste a Base64 value to recover an audio preview."
      downloadName="decoded-audio"
      defaultMimeType="audio/mpeg"
      previewLabel="Audio Preview"
      renderPreview={(blobUrl, mimeType) => (
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Preview</p>
          <audio controls className="mt-3 w-full">
            <source src={blobUrl} type={mimeType} />
            Your browser does not support inline audio playback.
          </audio>
        </div>
      )}
    />
  );
}
