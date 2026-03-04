"use client";

import { cn } from "@/components/payment/helpers";

export function PhoneInput({
  value,
  onChange,
  placeholder,
  error,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
}) {
  return (
    <div className="mx-3 mt-5">
      <label className="mb-1 block text-sm font-semibold text-slate-700">Telefoon Numberka</label>
      <div
        className={cn(
          "flex overflow-hidden rounded-xl border shadow-sm focus-within:ring-2 focus-within:ring-pink-200",
          error
            ? "border-red-500"
            : "border-slate-300",
        )}
      >
        <span className="flex items-center gap-2 bg-slate-200 px-3 py-2 text-sm text-slate-700">
          <span aria-hidden="true">🇸🇴</span>
          +252
        </span>
        <input
          type="tel"
          inputMode="numeric"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full bg-transparent px-3 py-2 text-sm outline-none"
          placeholder={placeholder}
        />
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      <p className="mt-2 text-xs text-slate-500">Fadlan Gali Numberka lacagta la Dirayo</p>
    </div>
  );
}
