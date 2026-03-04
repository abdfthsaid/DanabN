"use client";

import { PaymentCard } from "@/components/payment/PaymentCard";
export function PaymentScreen() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white px-4 py-8 transition-colors sm:py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-100px] top-[-80px] h-72 w-72 rounded-full bg-white" />
        <div className="absolute bottom-[-110px] right-[-70px] h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
      </div>

      <PaymentCard />
    </div>
  );
}
