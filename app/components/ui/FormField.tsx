import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  type TextareaHTMLAttributes,
} from "react";

interface FormFieldProps {
  children: ReactNode;
  htmlFor: string;
  label: string;
  optional?: boolean;
}

const controlClasses =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#B8863D] focus:bg-white focus:ring-2 focus:ring-[#B8863D]/10";

export function FormField({
  children,
  htmlFor,
  label,
  optional = false,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-xs font-semibold text-slate-700"
      >
        {label}
        {optional && (
          <span className="font-normal text-slate-400"> (optional)</span>
        )}
      </label>
      {children}
    </div>
  );
}

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function Input({ className = "", ...props }, ref) {
  return (
    <input
      ref={ref}
      className={`${controlClasses} ${className}`.trim()}
      {...props}
    />
  );
});

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className = "", ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={`${controlClasses} min-h-24 resize-y leading-relaxed ${className}`.trim()}
      {...props}
    />
  );
});
