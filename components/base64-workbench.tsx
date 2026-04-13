'use client';

import { useMemo, useState } from 'react';
import { AudioToBase64Converter } from '@/components/converters/audio-to-base64-converter';
import { ComingSoonConverter } from '@/components/converters/coming-soon-converter';
import { CssToBase64Converter } from '@/components/converters/css-to-base64-converter';
import { FileToBase64Converter } from '@/components/converters/file-to-base64-converter';
import { HexToBase64Converter } from '@/components/converters/hex-to-base64-converter';
import { HtmlToBase64Converter } from '@/components/converters/html-to-base64-converter';
import { converterOptions } from '@/lib/converters';

const implementedConverters = {
  audio: AudioToBase64Converter,
  css: CssToBase64Converter,
  file: FileToBase64Converter,
  hex: HexToBase64Converter,
  html: HtmlToBase64Converter,
} as const;

export function Base64Workbench() {
  const [activeConverterId, setActiveConverterId] = useState('audio');

  const activeConverter = useMemo(
    () => converterOptions.find((option) => option.id === activeConverterId) ?? converterOptions[0],
    [activeConverterId],
  );

  const ActiveConverterComponent =
    implementedConverters[activeConverterId as keyof typeof implementedConverters] ?? null;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.16),_transparent_32%),linear-gradient(180deg,_#fffaf5_0%,_#fff7ed_42%,_#fffdf8_100%)] text-slate-950">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-6 px-4 py-6 lg:flex-row lg:px-6">
        <aside className="w-full rounded-[2rem] border border-white/70 bg-white/80 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:w-80">
          <div className="border-b border-slate-200/80 pb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-600">
              Base64 Studio
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Encoder Workbench
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Pick a converter from the sidebar and generate Base64 directly in the browser.
            </p>
          </div>

          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Encoders
              </h2>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-[11px] font-semibold text-orange-700">
                {Object.keys(implementedConverters).length}/{converterOptions.length} live
              </span>
            </div>

            <nav className="space-y-2">
              {converterOptions.map((option) => {
                const isActive = option.id === activeConverterId;
                const isImplemented = option.id in implementedConverters;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setActiveConverterId(option.id)}
                    className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                      isActive
                        ? 'border-slate-950 bg-slate-950 text-white shadow-[0_18px_44px_rgba(15,23,42,0.18)]'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-orange-300 hover:bg-orange-50'
                    } ${!isImplemented ? 'opacity-75' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold">{option.label}</p>
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
        </aside>

        <section className="flex-1 rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
          <div className="mb-8 flex flex-col gap-4 border-b border-slate-200/80 pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
                Active Converter
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {activeConverter.label}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                {activeConverter.longDescription}
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
                <p className="mt-1 font-medium text-slate-900">Copy or download instantly</p>
              </div>
            </div>
          </div>

          {ActiveConverterComponent ? (
            <ActiveConverterComponent />
          ) : (
            <ComingSoonConverter
              label={activeConverter.label}
              nextHint="I will wire this one up in its own commit next."
            />
          )}
        </section>
      </div>
    </main>
  );
}
