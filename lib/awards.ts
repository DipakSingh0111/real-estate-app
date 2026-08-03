import type { Award, AwardStat } from "@/types/award";

export const awardStats: AwardStat[] = [
  { value: "5+", label: "AWARDS" },
  { value: "3", label: "YEARS" },
  { value: "2021 – 2023", label: "TIMELINE" },
];

export const awards: Award[] = [
  {
    id: "award-1",
    year: 2023,
    category: "CREDAI DELHI NCR",
    title: "Best Real Estate Consultant — Enterprise",
    issuer: "CREDAI",
    initials: "CR",
    iconVariant: "solid",
    iconColor: "#C4622D",
  },
  {
    id: "award-2",
    year: 2023,
    category: "REALTY AWARDS INDIA",
    title: "Top Property Advisory Firm",
    issuer: "Realty Awards",
    initials: "RA",
    iconVariant: "solid",
    iconColor: "#2D6A4F",
  },
  {
    id: "award-3",
    year: 2023,
    category: "NAREDCO EXCELLENCE",
    title: "Customer Service Excellence",
    issuer: "NAREDCO",
    initials: "NA",
    iconVariant: "solid",
    iconColor: "#1D4E89",
  },
  {
    id: "award-4",
    year: 2022,
    category: "DELHI NCR REALTY SUMMIT",
    title: "Best Luxury Listings Platform",
    issuer: "DNCR Summit",
    initials: "DN",
    iconVariant: "ghost",
    iconColor: "#78716C",
  },
  {
    id: "award-5",
    year: 2022,
    category: "INDIA PROPERTY AWARDS",
    title: "Most Trusted Broker — NCR",
    issuer: "IPA",
    initials: "IP",
    iconVariant: "solid",
    iconColor: "#7C3A5A",
  },
  {
    id: "award-6",
    year: 2021,
    category: "EMERGING BROKERS FORUM",
    title: "Emerging Broker of the Year",
    issuer: "EBF",
    initials: "EB",
    iconVariant: "ghost",
    iconColor: "#A8A29E",
  },
];

export const awardYears = [...new Set(awards.map((a) => a.year))].sort(
  (a, b) => b - a,
);
