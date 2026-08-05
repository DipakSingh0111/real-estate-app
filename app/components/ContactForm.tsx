"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, MessageSquareText } from "lucide-react";

interface ContactFormProps {
  propertyTitle?: string;
  agentPhone?: string;
}

export default function ContactForm({
  propertyTitle = "this property",
  agentPhone = "+919876543210",
}: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(
    `I'm interested in ${propertyTitle}. Please contact me with more details.`,
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = [
      `New property enquiry for: ${propertyTitle}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : "",
      `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const normalizedPhone = agentPhone.replace(/\D/g, "");
    window.open(
      `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  };

  return (
    <div
      id="property-enquiry"
      className="scroll-mt-32 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm"
    >
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-[#4a3a26] px-5 py-5 text-white">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#E6C687]">
            <MessageSquareText size={19} />
          </span>
          <div>
            <h2 className="font-heading text-xl font-bold">Request a callback</h2>
            <p className="mt-0.5 text-xs text-white/65">
              Get pricing and availability details
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 p-5">
        <div>
          <label
            htmlFor="enquiry-name"
            className="block text-xs font-semibold text-slate-700"
          >
            Name
          </label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#B8863D] focus:bg-white focus:ring-2 focus:ring-[#B8863D]/10"
          />
        </div>

        <div>
          <label
            htmlFor="enquiry-phone"
            className="block text-xs font-semibold text-slate-700"
          >
            Phone Number
          </label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#B8863D] focus:bg-white focus:ring-2 focus:ring-[#B8863D]/10"
          />
        </div>

        <div>
          <label
            htmlFor="enquiry-email"
            className="block text-xs font-semibold text-slate-700"
          >
            Email <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#B8863D] focus:bg-white focus:ring-2 focus:ring-[#B8863D]/10"
          />
        </div>

        <div>
          <label
            htmlFor="enquiry-message"
            className="block text-xs font-semibold text-slate-700"
          >
            Message
          </label>
          <textarea
            id="enquiry-message"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1.5 min-h-24 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm leading-relaxed text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#B8863D] focus:bg-white focus:ring-2 focus:ring-[#B8863D]/10"
          />
        </div>

        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#B8863D] px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#A37430] active:scale-[0.98]"
        >
          Send enquiry
          <ArrowRight
            size={17}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </button>

        <p className="text-center text-[11px] leading-relaxed text-slate-400">
          Your enquiry opens securely in WhatsApp for faster assistance.
        </p>

        {submitted && (
          <p
            role="status"
            className="flex items-center justify-center gap-1.5 text-xs font-medium text-emerald-600"
          >
            <CheckCircle2 size={14} />
            WhatsApp opened with your enquiry.
          </p>
        )}
      </form>
    </div>
  );
}
