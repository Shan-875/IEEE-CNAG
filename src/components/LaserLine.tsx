interface LaserLineProps {
  color?: "green" | "gold" | "cyan";
  className?: string;
  width?: string;
  glow?: boolean;
}

export function LaserLine({
  color = "green",
  className = "",
  width = "100%",
  glow = true,
}: LaserLineProps) {
  return (
    <div className={`laser-track ${color} ${className}`} style={{ width }}>
      <div className={`laser-beam ${glow ? "has-glow" : ""}`} />
      <div className="laser-flare" />
    </div>
  );
}
