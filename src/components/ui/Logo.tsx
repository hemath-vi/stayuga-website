import Link from "next/link";
import clsx from "clsx";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={clsx("inline-flex items-center", className)}>
      <span className="font-display text-lg uppercase tracking-[0.3em]">Stayuga</span>
    </Link>
  );
}
