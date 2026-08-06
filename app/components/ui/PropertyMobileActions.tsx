"use client";

import { MessageCircle, Phone, Send } from "lucide-react";

interface PropertyMobileActionsProps {
  agentPhone: string;
  propertyTitle: string;
}

export default function PropertyMobileActions({
  agentPhone,
  propertyTitle,
}: PropertyMobileActionsProps) {
  const phone = agentPhone.replace(/\D/g, "");
  const message = encodeURIComponent(
    `Hi, I'm interested in ${propertyTitle}. Please share more details.`,
  );

  const scrollToEnquiry = () => {
    document
      .getElementById("property-enquiry")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        <a
          href={`tel:${agentPhone}`}
          className="flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 transition active:scale-95"
        >
          <Phone size={16} className="text-[#B8863D]" />
          Call
        </a>
        <a
          href={`https://wa.me/${phone}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 text-xs font-bold text-emerald-700 transition active:scale-95"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={scrollToEnquiry}
          className="flex min-h-11 items-center justify-center gap-1.5 rounded-xl bg-[#B8863D] text-xs font-bold text-white transition active:scale-95"
        >
          <Send size={15} />
          Enquire
        </button>
      </div>
    </div>
  );
}
