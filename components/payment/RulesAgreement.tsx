"use client";

import Link from "next/link";

import { cn } from "@/components/payment/helpers";

export function RulesAgreement({
  checked,
  error,
  onToggle,
}: {
  checked: boolean;
  error?: string;
  onToggle: () => void;
}) {
  return (
    <div className="mx-3 mt-5">
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "flex w-full items-center gap-3 rounded-xl border-2 p-3 text-left transition",
          checked
            ? "border-pink-400 bg-gradient-to-r from-pink-50 to-purple-50"
            : "border-slate-200 bg-white hover:border-pink-200",
          error && "border-red-400",
        )}
      >
        <span
          className={cn(
            "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2",
            checked
              ? "border-pink-500 bg-gradient-to-r from-pink-500 to-purple-500 text-white"
              : "border-slate-300 bg-white text-transparent",
          )}
        >
          ✓
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-semibold text-slate-700">Waan ogolahay</span>
          <Link
            href="/rules"
            target="_blank"
            onClick={(event) => event.stopPropagation()}
            className="text-xs font-medium text-pink-500 underline decoration-dotted underline-offset-2 hover:text-pink-600"
          >
            Shuruudaha iyo xeerarka isticmaalka Danab
          </Link>
        </span>
      </button>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
