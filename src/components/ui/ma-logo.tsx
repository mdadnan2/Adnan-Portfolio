interface MALogoProps {
  size?: number;
  className?: string;
}

export function MALogo({ size = 48, className = "" }: MALogoProps) {
  return (
    <div
      className={`flex items-center justify-center font-bold text-white rounded-md bg-gradient-to-br from-purple-500 to-purple-700 ${className}`}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.45,
        letterSpacing: "-0.02em",
      }}
    >
      MA
    </div>
  );
}
