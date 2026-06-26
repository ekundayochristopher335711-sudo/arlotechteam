export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <span className={`relative inline-flex items-center justify-center rounded-full bg-emerald-400/10 text-emerald-200 ${className}`}>
      <svg viewBox="0 0 48 48" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="arlotech-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60e5bc" />
            <stop offset="100%" stopColor="#f9d56e" />
          </linearGradient>
        </defs>
        <path
          d="M12 16L24 8l12 8v16l-12 8-12-8V16Z"
          stroke="url(#arlotech-logo-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22l12 8 12-8"
          stroke="url(#arlotech-logo-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
