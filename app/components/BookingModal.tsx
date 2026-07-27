"use client";

import { AnimatePresence, motion } from "framer-motion";
import { form } from "framer-motion/client";
import { CheckCircle2, X } from "lucide-react";
import { useState } from "react";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

const benefits = [
  "Verified Properties",
  "Schedule Visit",
  "Home Loan Assistance",
  "Personalized Property Support",
];

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    lookingFor: "",
    propertyType: "",
    budget: "",
    requirements: "",
  });

  // handleChange
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handleSubmit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Booking Form Data:", formData);

    // API call yaha kar sakte ho
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center mt-96 justify-center bg-black/50 backdrop-blur-sm"
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
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
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

              <div className="hidden bg-[#0F172A] p-6 text-white md:block">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-widest">
                  Elite Estates
                </span>

                <h2 className="mt-5 text-3xl font-bold leading-tight">
                  Schedule
                  <br />
                  Your Visit
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-300">
                  Fill in your details and our property expert will contact you
                  shortly to arrange the visit.
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

              <div className="p-5 md:p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Schedule Visit
                </h3>

                <p className="mt-1 mb-4 text-sm text-gray-500">
                  Our property advisor will contact you to schedule the visit.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-black"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-black"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-black"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <select
                      className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-black"
                      value={formData.lookingFor}
                      onChange={handleChange}
                      name="lookingFor"
                    >
                      <option>Looking For</option>
                      <option>Buy</option>
                      <option>Rent</option>
                    </select>

                    <select className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-black">
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
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-black"
                  />

                  <textarea
                    rows={2}
                    placeholder="Additional Requirements"
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-black"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#0F172A] py-3 font-semibold text-white transition hover:bg-[#1E293B]"
                  >
                    Schedule Visit
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
