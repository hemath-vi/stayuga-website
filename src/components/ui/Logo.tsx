interface LogoProps {
  className?: string;
  color?: string;
  size?: number;
}

export function Logo({ className = "", color = "#C49C79", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size * 1.6}
      viewBox="0 0 100 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 ${className}`}
    >
      {/* Keyhole body */}
      <path
        d="M50 0C63.8071 0 75 11.1929 75 25C75 34.4079 69.8033 42.6033 62.1816 46.8838L73.5 130H26.5L37.8184 46.8838C30.1967 42.6033 25 34.4079 25 25C25 11.1929 36.1929 0 50 0Z"
        fill={color}
      />
      {/* Inset 'S' curve cut */}
      <path
        d="M36 28C36 28 44 24 54 36C64 48 72 70 70 94C68 118 42 128 32 122"
        stroke="#281822"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Logo;