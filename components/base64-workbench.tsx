'use client';

import { useMemo, useState } from 'react';
import { Base64ToAsciiDecoder } from '@/components/converters/base64-to-ascii-decoder';
import { AudioToBase64Converter } from '@/components/converters/audio-to-base64-converter';
import { ComingSoonConverter } from '@/components/converters/coming-soon-converter';
import { CssToBase64Converter } from '@/components/converters/css-to-base64-converter';
import { FileToBase64Converter } from '@/components/converters/file-to-base64-converter';
import { HexToBase64Converter } from '@/components/converters/hex-to-base64-converter';
import { HtmlToBase64Converter } from '@/components/converters/html-to-base64-converter';
import { ImageToBase64Converter } from '@/components/converters/image-to-base64-converter';
import { PdfToBase64Converter } from '@/components/converters/pdf-to-base64-converter';
import { TextToBase64Converter } from '@/components/converters/text-to-base64-converter';
import { UrlToBase64Converter } from '@/components/converters/url-to-base64-converter';
import { converterOptions } from '@/lib/converters';
import { decoderOptions } from '@/lib/decoders';

const implementedConverters = {
  audio: AudioToBase64Converter,
  css: CssToBase64Converter,
  file: FileToBase64Converter,
  hex: HexToBase64Converter,
  html: HtmlToBase64Converter,
  image: ImageToBase64Converter,
  pdf: PdfToBase64Converter,
  text: TextToBase64Converter,
  url: UrlToBase64Converter,
} as const;

const implementedDecoders = {
  ascii: Base64ToAsciiDecoder,
} as const;

type ActiveTool =
  | { kind: 'converter'; id: string }
  | { kind: 'decoder'; id: string };

interface Base64WorkbenchProps {
  initialTool?: ActiveTool;
}

export function Base64Workbench({ initialTool }: Base64WorkbenchProps) {
  const [activeTool, setActiveTool] = useState<ActiveTool>(
    initialTool ?? {
      kind: 'converter',
      id: converterOptions[0]?.id ?? 'text',
    },
  );

  const activeConverter = useMemo(
    () => converterOptions.find((option) => option.id === activeTool.id) ?? converterOptions[0],
    [activeTool.id],
  );

  const activeDecoder = useMemo(
    () => decoderOptions.find((option) => option.id === activeTool.id) ?? decoderOptions[0],
    [activeTool.id],
  );

  const isDecoderView = activeTool.kind === 'decoder';

  const ActiveComponent = isDecoderView
    ? implementedDecoders[activeTool.id as keyof typeof implementedDecoders] ?? null
    : implementedConverters[activeTool.id as keyof typeof implementedConverters] ?? null;

  const activeOption = isDecoderView ? activeDecoder : activeConverter;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.16),_transparent_32%),linear-gradient(180deg,_#fffaf5_0%,_#fff7ed_38%,_#fffdf8_100%)] text-slate-950">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col gap-6 px-4 py-6 xl:grid xl:grid-cols-[18rem_minmax(0,1fr)_18rem] xl:items-start xl:px-6">
        <WorkbenchRail
          title="Encoder Workbench"
          badgeLabel={`${Object.keys(implementedConverters).length}/${converterOptions.length} live`}
          sectionLabel="Encoders"
          description="Pick a converter from the left rail and generate Base64 directly in the browser."
          options={converterOptions}
          activeId={isDecoderView ? null : activeTool.id}
          readyIds={new Set(Object.keys(implementedConverters))}
          accentClasses={{
            eyebrow: 'text-orange-600',
            badge: 'bg-orange-100 text-orange-700',
            hover: 'hover:border-orange-300 hover:bg-orange-50',
          }}
          footerText="The encoder rail stays compact and scrollable so you can keep at least five tools visible."
          onSelect={(id) => setActiveTool({ kind: 'converter', id })}
        />

        <section className="min-w-0 rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
          <div className="mb-8 flex flex-col gap-4 border-b border-slate-200/80 pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-[0.3em] ${
                  isDecoderView ? 'text-cyan-600' : 'text-sky-600'
                }`}
              >
                {isDecoderView ? 'Active Decoder' : 'Active Converter'}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {activeOption.label}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                {activeOption.longDescription}
              </p>
            </div>

            <div className="grid gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Processing
                </p>
                <p className="mt-1 font-medium text-slate-900">Fully client-side</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Output
                </p>
                <p className="mt-1 font-medium text-slate-900">
                  {isDecoderView ? 'Preview, copy, or recover data' : 'Copy or download instantly'}
                </p>
              </div>
            </div>
          </div>

          {ActiveComponent ? (
            <ActiveComponent />
          ) : (
            <ComingSoonConverter
              label={activeOption.label}
              nextHint="I will wire this one up in its own commit next."
            />
          )}
        </section>

        <WorkbenchRail
          title="Decoder Workbench"
          badgeLabel={`${Object.keys(implementedDecoders).length}/${decoderOptions.length} live`}
          sectionLabel="Decoders"
          description="Use the right rail to recover text, media, or binary files from Base64 payloads."
          options={decoderOptions}
          activeId={isDecoderView ? activeTool.id : null}
          readyIds={new Set(Object.keys(implementedDecoders))}
          accentClasses={{
            eyebrow: 'text-cyan-600',
            badge: 'bg-cyan-100 text-cyan-700',
            hover: 'hover:border-cyan-300 hover:bg-cyan-50',
          }}
          footerText="The decoder rail mirrors the encoder sequence and keeps at least five tools visible."
          onSelect={(id) => setActiveTool({ kind: 'decoder', id })}
        />
      </div>
    </main>
  );
}

interface WorkbenchRailProps {
  title: string;
  badgeLabel: string;
  sectionLabel: string;
  description: string;
  options: ReadonlyArray<{
    id: string;
    label: string;
    description: string;
  }>;
  activeId: string | null;
  readyIds: Set<string>;
  accentClasses: {
    eyebrow: string;
    badge: string;
    hover: string;
  };
  footerText: string;
  onSelect: (id: string) => void;
}

function WorkbenchRail({
  title,
  badgeLabel,
  sectionLabel,
  description,
  options,
  activeId,
  readyIds,
  accentClasses,
  footerText,
  onSelect,
}: WorkbenchRailProps) {
  return (
    <aside className="w-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur xl:sticky xl:top-6 xl:flex xl:h-[calc(100vh-3rem)] xl:w-full xl:flex-col">
      <div className="border-b border-slate-200/80 pb-5">
        <p className={`text-xs font-semibold uppercase tracking-[0.32em] ${accentClasses.eyebrow}`}>
          Base64 Studio
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{title}</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      </div>

      <div className="mt-6 flex min-h-0 flex-1 flex-col">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            {sectionLabel}
          </h3>
          <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${accentClasses.badge}`}>
            {badgeLabel}
          </span>
        </div>

        <div className="min-h-0 overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-[linear-gradient(180deg,_rgba(255,255,255,0.96)_0%,_rgba(248,250,252,0.96)_100%)] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
          <nav className="max-h-[29rem] space-y-2 overflow-y-auto pr-1 xl:h-full xl:max-h-none">
            {options.map((option) => {
              const isActive = option.id === activeId;
              const isImplemented = readyIds.has(option.id);

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => onSelect(option.id)}
                  className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                    isActive
                      ? 'border-slate-950 bg-slate-950 text-white shadow-[0_18px_44px_rgba(15,23,42,0.18)]'
                      : `border-slate-200 bg-white text-slate-700 ${accentClasses.hover}`
                  } ${!isImplemented ? 'opacity-75' : ''}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold leading-5">{option.label}</p>
                      <p
                        className={`mt-1 text-xs leading-5 ${
                          isActive ? 'text-slate-200' : 'text-slate-500'
                        }`}
                      >
                        {option.description}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                        isImplemented
                          ? isActive
                            ? 'bg-white/15 text-white'
                            : 'bg-emerald-100 text-emerald-700'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {isImplemented ? 'Ready' : 'Soon'}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>

        <p className="mt-3 text-xs leading-5 text-slate-500">{footerText}</p>
      </div>
    </aside>
  );
}
