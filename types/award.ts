export interface Award {
  id: string;
  year: number;
  category: string;
  title: string;
  issuer: string;
  initials: string;
  iconVariant: "solid" | "ghost";
  iconColor: string;
}

export interface AwardStat {
  value: string;
  label: string;
}

export interface AwardsGridProps {
  awards: Award[];
  years: number[];
}
