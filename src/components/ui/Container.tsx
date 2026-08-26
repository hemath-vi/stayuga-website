import { ReactNode } from "react";
import clsx from "clsx";

/**
 * Mobile-first gutters: 16px on phones (was 24px, which wasted ~13% of a
 * 375px viewport), scaling up through tablet to desktop.
 */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12", className)}>
      {children}
    </div>
  );
}