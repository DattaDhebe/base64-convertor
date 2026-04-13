interface ComingSoonConverterProps {
  label: string;
  nextHint: string;
}

export function ComingSoonConverter({
  label,
  nextHint,
}: ComingSoonConverterProps) {
  return (
    <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
        In Progress
      </p>
      <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
        {label}
      </h3>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
        This converter is listed in the new sidebar and reserved for the next step in the build-out.
      </p>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-sky-700">
        {nextHint}
      </p>
    </div>
  );
}
