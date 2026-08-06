import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#B8863D] text-white shadow-sm hover:bg-[#A37430] focus-visible:ring-[#B8863D]/30",
  secondary:
    "bg-slate-900 text-white shadow-sm hover:bg-slate-800 focus-visible:ring-slate-900/25",
  outline:
    "border border-stone-300 bg-white text-stone-800 hover:border-[#B8863D] hover:text-[#B8863D] focus-visible:ring-[#B8863D]/20",
  ghost:
    "bg-transparent text-stone-700 hover:bg-stone-100 focus-visible:ring-stone-300",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "rounded-lg px-3 py-2 text-xs",
  md: "rounded-xl px-4 py-2.5 text-sm",
  lg: "rounded-xl px-5 py-3 text-sm",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 font-bold transition focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
