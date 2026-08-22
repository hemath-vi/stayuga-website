import clsx from "clsx";

export function Badge({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center bg-cream px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-ink",
        className
      )}
    >
      {children}
    </span>
  );
}
