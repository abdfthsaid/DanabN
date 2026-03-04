"use client";

import { ArchiveIcon } from "@/components/payment/Icons";

export function PaymentHeader() {
  return (
    <header className="mb-5 flex items-center justify-center px-1">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 shadow-md">
        <ArchiveIcon className="h-9 w-9 text-pink-500" />
      </div>
    </header>
  );
}
