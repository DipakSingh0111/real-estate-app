"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronRight, IndianRupee, Percent, Calendar, TrendingUp } from "lucide-react";

export default function EMICalculatorPage() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const { emi, totalPayment, totalInterest } = useMemo(() => {
    const p = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    if (r === 0) return { emi: p / n, totalPayment: p, totalInterest: 0 };
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - p;
    return { emi, totalPayment, totalInterest };
  }, [loanAmount, interestRate, tenure]);

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(n);

  const principalPct = Math.round((loanAmount / (loanAmount + totalInterest)) * 100);
  const interestPct = 100 - principalPct;

  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      <section className="relative text-white overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop')" }} />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
          <nav className="mb-4 flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-[#C89234] transition-colors">Home</Link>
            <ChevronRight size={12} className="text-slate-600" />
            <span className="font-medium text-[#C89234]">EMI Calculator</span>
          </nav>
          <h1 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
            Home Loan <span className="text-[#C89234]">EMI Calculator</span>
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl">
            Calculate your monthly EMI, total interest payable, and plan your home loan repayment easily.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Inputs */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
            <h2 className="mb-6 text-base font-bold text-slate-900">Loan Details</h2>

            {/* Loan Amount */}
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-600">Loan Amount</label>
                <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5">
                  <IndianRupee size={12} className="text-slate-400" />
                  <span className="text-xs font-bold text-slate-900">{fmt(loanAmount)}</span>
                </div>
              </div>
              <input type="range" min={500000} max={50000000} step={100000}
                value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))}
                suppressHydrationWarning className="w-full accent-[#C89234]" />
              <div className="mt-1 flex justify-between text-[10px] text-slate-400">
                <span>₹5 Lakh</span><span>₹5 Cr</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-600">Interest Rate (p.a.)</label>
                <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5">
                  <Percent size={12} className="text-slate-400" />
                  <span className="text-xs font-bold text-slate-900">{interestRate}%</span>
                </div>
              </div>
              <input type="range" min={6} max={20} step={0.1}
                value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
                suppressHydrationWarning className="w-full accent-[#C89234]" />
              <div className="mt-1 flex justify-between text-[10px] text-slate-400">
                <span>6%</span><span>20%</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-600">Loan Tenure</label>
                <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5">
                  <Calendar size={12} className="text-slate-400" />
                  <span className="text-xs font-bold text-slate-900">{tenure} Yrs</span>
                </div>
              </div>
              <input type="range" min={1} max={30} step={1}
                value={tenure} onChange={(e) => setTenure(Number(e.target.value))}
                suppressHydrationWarning className="w-full accent-[#C89234]" />
              <div className="mt-1 flex justify-between text-[10px] text-slate-400">
                <span>1 Yr</span><span>30 Yrs</span>
              </div>
            </div>

            {/* Quick presets */}
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">Quick Presets</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "₹30L / 8.5% / 15Y", amount: 3000000, rate: 8.5, yr: 15 },
                  { label: "₹50L / 9% / 20Y", amount: 5000000, rate: 9, yr: 20 },
                  { label: "₹1Cr / 8.75% / 25Y", amount: 10000000, rate: 8.75, yr: 25 },
                ].map((p) => (
                  <button key={p.label} suppressHydrationWarning
                    onClick={() => { setLoanAmount(p.amount); setInterestRate(p.rate); setTenure(p.yr); }}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-600 transition hover:border-[#C89234] hover:text-[#C89234]">
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-[#C89234]/30 bg-gradient-to-br from-amber-50 to-white p-6 shadow-xs">
              <p className="text-xs font-semibold text-slate-500">Monthly EMI</p>
              <p className="mt-1 font-heading text-4xl font-extrabold text-slate-900">₹{fmt(emi)}</p>
              <p className="mt-1 text-[11px] text-slate-400">per month for {tenure} years</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">Loan Breakdown</h3>
              <div className="mb-3 flex h-3 w-full overflow-hidden rounded-full">
                <div className="bg-[#C89234] transition-all duration-500" style={{ width: `${principalPct}%` }} />
                <div className="bg-slate-200 flex-1" />
              </div>
              <div className="mb-4 flex items-center gap-4 text-[11px]">
                <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#C89234]" />Principal ({principalPct}%)</span>
                <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-slate-200" />Interest ({interestPct}%)</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Principal Amount", value: `₹${fmt(loanAmount)}`, color: "text-slate-900" },
                  { label: "Total Interest", value: `₹${fmt(totalInterest)}`, color: "text-rose-600" },
                  { label: "Total Payment", value: `₹${fmt(totalPayment)}`, color: "text-emerald-600" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between border-b border-slate-50 pb-3 last:border-0 last:pb-0">
                    <span className="text-xs text-slate-500">{row.label}</span>
                    <span className={`text-sm font-bold ${row.color}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-4">
              <div className="flex items-start gap-2">
                <TrendingUp size={14} className="mt-0.5 shrink-0 text-blue-500" />
                <p className="text-[11px] leading-relaxed text-slate-600">
                  A <strong>1% lower interest rate</strong> on ₹{fmt(loanAmount)} saves approximately <strong>₹{fmt(totalInterest * 0.11)}</strong> over {tenure} years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
