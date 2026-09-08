import { useState, useEffect, useRef } from "react";
import type { CommitteeMember } from "../data";

interface Floating3DNamesProps {
  members: CommitteeMember[];
  onSelectMember: (member: CommitteeMember) => void;
  className?: string;
}

export function Floating3DNames({
  members,
  onSelectMember,
  className = "",
}: Floating3DNamesProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      setMousePos({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // Predefined 3D spatial layout offsets for the floating badges
  const badgeOffsets = [
    { x: -160, y: -80, z: 40, delay: "0s", accent: "green" },
    { x: 120, y: -90, z: 70, delay: "0.8s", accent: "gold" },
    { x: -90, y: 40, z: 20, delay: "1.6s", accent: "cyan" },
    { x: 150, y: 50, z: 60, delay: "2.4s", accent: "green" },
    { x: 0, y: -20, z: 80, delay: "1.2s", accent: "gold" },
    { x: -180, y: 110, z: 30, delay: "3.0s", accent: "cyan" },
    { x: 100, y: 130, z: 50, delay: "2.0s", accent: "green" },
    { x: -40, y: -130, z: 35, delay: "1.5s", accent: "gold" },
  ];

  return (
    <div ref={containerRef} className={`floating-3d-names-stage ${className}`}>
      {/* Central Laser Beam Stream */}
      <div className="names-laser-stream">
        <div className="stream-glow" />
      </div>

      {/* Floating 3D Cards Matrix */}
      <div className="floating-3d-cluster">
        {members.slice(0, 8).map((m, idx) => {
          const config = badgeOffsets[idx % badgeOffsets.length];
          const depthFactor = (config.z / 100) * 18;
          const offsetX = config.x + mousePos.x * depthFactor;
          const offsetY = config.y + mousePos.y * depthFactor;
          const rotX = mousePos.y * -8;
          const rotY = mousePos.x * 8;

          return (
            <div
              key={m.id}
              className={`floating-3d-card accent-${config.accent}`}
              onClick={() => onSelectMember(m)}
              style={{
                transform: `translate3d(${offsetX}px, ${offsetY}px, ${config.z}px) rotateX(${rotX}deg) rotateY(${rotY}deg)`,
                animationDelay: config.delay,
              }}
              title={`Click to view profile of ${m.name}`}
            >
              <div className="card-beacon">
                <span className="beacon-core" />
              </div>
              <div className="card-info">
                <span className="card-role">{m.role}</span>
                <strong className="card-name">{m.name}</strong>
                <span className="card-domain">{m.domains[0]}</span>
              </div>
              <div className="card-3d-glare" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
