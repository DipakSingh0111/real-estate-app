"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Search } from "lucide-react";

import data from "../../../data/properties.json";
import type { FAQItem } from "@/types/property";

const faqData = (data?.faqs || []) as FAQItem[];

const categories = ["All", "Buying", "Selling", "Renting", "Legal"] as const;

export default function FaqSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openId, setOpenId] = useState<string | null>("1");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#FAF7F1] py-6 lg:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header — top center */}
        <div className="mb-6 max-w-2xl">
          <h2 className="font-heading mt-2 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
            Everything you need to know about buying, selling, and renting real
            estate properties.
          </p>

          {/* Category Filter Chips */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                suppressHydrationWarning
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#B8863D] text-white shadow-sm"
                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-2xs transition"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    suppressHydrationWarning
                    className="flex w-full items-center justify-between gap-3 p-4 sm:p-5 text-left transition-colors hover:bg-stone-50 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="min-w-0 flex-1 break-words text-xs sm:text-sm font-bold leading-snug text-stone-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[#B8863D] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="border-t border-stone-100 px-4 pb-4 pt-2 sm:px-5 sm:pb-5 text-xs sm:text-sm leading-relaxed text-stone-600">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="py-12 rounded-2xl border border-dashed border-stone-200 bg-white text-center text-xs text-stone-500">
              No matching questions found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
