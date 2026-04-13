import type { ChangeEvent, DragEvent, RefObject } from 'react';

interface FileDropZoneProps {
  accept: string;
  activeFileName: string | null;
  helperText: string;
  inputRef: RefObject<HTMLInputElement | null>;
  onSelect: (file: File | null) => void;
}

export function FileDropZone({
  accept,
  activeFileName,
  helperText,
  inputRef,
  onSelect,
}: FileDropZoneProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSelect(event.target.files?.[0] ?? null);
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onSelect(event.dataTransfer.files?.[0] ?? null);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleInputChange}
        className="hidden"
        id="converter-file-input"
      />
      <label
        htmlFor="converter-file-input"
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
        className="flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-10 text-center transition hover:border-orange-300 hover:bg-orange-50"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-8 w-8"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16V7m0 0-3 3m3-3 3 3M5 17.5A3.5 3.5 0 0 1 8.5 14H9a4 4 0 0 1 7.74-1.2A3.5 3.5 0 1 1 18.5 20H8.5A3.5 3.5 0 0 1 5 16.5v1Z"
            />
          </svg>
        </div>
        <p className="mt-5 text-lg font-semibold text-slate-950">
          {activeFileName ?? 'Drop a file here'}
        </p>
        <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">{helperText}</p>
      </label>
    </>
  );
}
