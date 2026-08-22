import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className = "", width = 120, height = 36 }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo.svg"
        alt="Stayuga Logo"
        width={width}
        height={height}
        priority
      />
    </Link>
  );
}