import Link from "next/link";
import clsx from "clsx";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={clsx("inline-flex items-center gap-3", className)}>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-current font-display text-sm">
        S
      </span>
      <span className="font-display text-lg uppercase tracking-[0.25em]">Stayuga</span>
    </Link>
  );
}
