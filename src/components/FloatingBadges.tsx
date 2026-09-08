interface BadgeItem {
  id: string;
  name: string;
  category: string;
  color?: string;
  accent?: "green" | "gold" | "cyan";
  delay?: string;
}

interface FloatingBadgesProps {
  badges?: BadgeItem[];
  className?: string;
}

const defaultBadges: BadgeItem[] = [
  { id: "1", name: "IEEE Standards", category: "Global Benchmark", accent: "green", delay: "0s" },
  { id: "2", name: "ISO / IEC Certified", category: "Audit Compliance", accent: "gold", delay: "1.2s" },
  { id: "3", name: "AICN Network", category: "IEEE-USA Accredited", accent: "cyan", delay: "2.4s" },
  { id: "4", name: "Kerala Section", category: "Region 10 Charter", accent: "green", delay: "0.6s" },
];

export function FloatingBadges({ badges = defaultBadges, className = "" }: FloatingBadgesProps) {
  return (
    <div className={`floating-badges-cluster ${className}`}>
      {badges.map((b) => (
        <div
          key={b.id}
          className={`floating-badge-item accent-${b.accent || "green"}`}
          style={{ animationDelay: b.delay }}
        >
          <div className="badge-glow-dot" />
          <div className="badge-inner">
            <span className="badge-cat">{b.category}</span>
            <strong className="badge-title">{b.name}</strong>
          </div>
          <div className="badge-shine" />
        </div>
      ))}
    </div>
  );
}
