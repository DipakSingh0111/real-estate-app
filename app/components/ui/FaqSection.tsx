"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Search } from "lucide-react";

interface FAQItem {
  id: string;
  category: "Buying" | "Selling" | "Renting" | "Legal";
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    category: "Buying",
    question: "What documents are required to buy a property in India?",
    answer:
      "Essential documents include the Sale Deed, Title Deed, Encumbrance Certificate (EC), Building Approval Plan, Occupancy Certificate (OC), and Khata Certificate. Always ensure RERA registration details are verified.",
  },
  {
    id: "2",
    category: "Buying",
    question: "How do I check if a property is RERA approved?",
    answer:
      "You can verify RERA approval by visiting the official state RERA portal (e.g., UP-RERA, MahaRERA) and searching for the developer or project's unique RERA Registration Number.",
  },
  {
    id: "3",
    category: "Selling",
    question: "How is the market value of my property calculated?",
    answer:
      "Property valuation depends on location, connectivity, amenities, age of construction, demand-supply trends, and recent transaction prices of similar properties in your locality.",
  },
  {
    id: "4",
    category: "Selling",
    question: "What is Capital Gains Tax on property sale?",
    answer:
      "If you sell a property held for more than 24 months, Long Term Capital Gains (LTCG) tax applies. You can save tax by investing gains into another residential property under Section 54 or Capital Gains Bonds under Section 54EC.",
  },
  {
    id: "5",
    category: "Renting",
    question: "What is the standard tenure for a rental agreement?",
    answer:
      "The standard lease agreement tenure is typically 11 months to avoid mandatory registration requirements under state stamp duty laws. It can be renewed upon mutual agreement.",
  },
  {
    id: "6",
    category: "Legal",
    question:
      "What is the difference between carpet area and super built-up area?",
    answer:
      "Carpet area is the actual usable net floor space inside the walls. Super built-up area includes carpet area plus common spaces like lobbies, staircases, elevators, and corridors.",
  },
];

const categories = ["All", "Buying", "Selling", "Renting", "Legal"] as const;

export default function FaqSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openId, setOpenId] = useState<string | null>("1"); // First item open by default
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
    <section className="bg-[#FAF7F1] sm:py-8 lg:py-3">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#B8863D]/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#B8863D]">
            <HelpCircle size={13} />
            Got Questions?
          </div>
          <h2 className="font-display mt-1.5 text-2xl font-bold text-stone-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-stone-600">
            Everything you need to know about buying, selling, and renting real
            estate.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mt-5 max-w-md mx-auto">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400"
          />
          <input
            type="text"
            placeholder="Search questions (e.g. RERA, tax, rental)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-stone-200/90 bg-white py-2.5 pl-9 pr-4 text-xs sm:text-sm font-medium text-stone-800 placeholder-stone-400 outline-none transition focus:border-[#B8863D] focus:ring-1 focus:ring-[#B8863D]"
          />
        </div>

        {/* Category Tabs */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                selectedCategory === cat
                  ? "bg-[#B8863D] text-white shadow-xs"
                  : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="mt-6 space-y-2.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="overflow-hidden rounded-xl border border-stone-200/80 bg-white transition"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="flex w-full items-center justify-between p-3.5 sm:p-4 text-left transition hover:bg-stone-50/50"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-xs sm:text-sm font-bold text-stone-900 pr-3">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`flex-shrink-0 text-[#B8863D] transition-transform duration-300 ${
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
                        <div className="border-t border-stone-100 px-3.5 pb-3.5 pt-2 sm:px-4 sm:pb-4 text-xs sm:text-sm leading-relaxed text-stone-600">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="py-8 text-center text-xs text-stone-500">
              No matching questions found. Try searching with a different term.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
