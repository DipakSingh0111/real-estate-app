"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
      <div className="bg-black px-6 py-4 text-center text-white font-semibold">
        Send a Query
      </div>
      <div className="p-5 space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            className="mt-1 w-full rounded border border-slate-200 px-3 py-2 text-sm placeholder:text-slate-300"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="mt-1 w-full rounded border border-slate-200 px-3 py-2 text-sm placeholder:text-slate-300"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">
            Phone Number
          </label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Phone Number"
            className="mt-1 w-full rounded border border-slate-200 px-3 py-2 text-sm placeholder:text-slate-300"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your Message"
            className="mt-1 h-24 w-full rounded border border-slate-200 px-3 py-2 text-sm placeholder:text-slate-300"
          />
        </div>

        <div className="rounded border border-slate-200 p-3">
          <label className="inline-flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300"
            />
            I'm not a robot
          </label>
        </div>

        <button className="mt-2 w-full rounded-lg bg-rose-500 px-4 py-3 text-sm font-bold text-white hover:opacity-95">
          REQUEST CALLBACK
        </button>
      </div>
    </div>
  );
}
