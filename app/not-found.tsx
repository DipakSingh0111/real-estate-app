import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-6 py-32 text-center">
      <p className="eyebrow text-brass">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink">
        We Couldn&apos;t Find This Property
      </h1>
      <p className="mt-3 text-ink/60">
        The listing may have been removed, or the link might be incorrect.
      </p>
      <Link
        href="/properties"
        className="mt-8 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-ink-light"
      >
        Browse All Properties
      </Link>
    </div>
  );
}
