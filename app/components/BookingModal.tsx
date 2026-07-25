"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

const benefits = [
  "Verified Properties",
  "Free Consultation",
  "Home Loan Assistance",
  "Schedule Site Visit",
];

export default function BookingModal({ open, onClose }: BookingModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm mt-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Close Button */}

            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 transition hover:bg-gray-200"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Left Side */}

              <div className="hidden bg-[#0F172A] p-8 text-white md:block">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-widest">
                  Elite Estates
                </span>

                <h2 className="mt-5 text-3xl font-bold leading-tight">
                  Find Your
                  <br />
                  Dream Property
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-300">
                  Fill in your details and our property expert will contact you
                  shortly with the best options according to your budget.
                </p>

                <div className="mt-8 space-y-4">
                  {benefits.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-green-400" />

                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side */}

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  Book Free Consultation
                </h3>

                <p className="mt-2 mb-6 text-sm text-gray-500">
                  Our property advisor will contact you within 24 hours.
                </p>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <select className="rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black">
                      <option>Looking For</option>
                      <option>Buy</option>
                      <option>Rent</option>
                    </select>

                    <select className="rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black">
                      <option>Property Type</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                      <option>Plot</option>
                      <option>Commercial</option>
                    </select>
                  </div>

                  <input
                    type="text"
                    placeholder="Budget"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                  />

                  <textarea
                    rows={3}
                    placeholder="Additional Requirements"
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#0F172A] py-3 font-semibold text-white transition hover:bg-[#1E293B]"
                  >
                    Book Free Consultation
                  </button>
                </form>

                <p className="mt-4 text-center text-xs text-gray-400">
                  Your information is 100% secure and confidential.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
