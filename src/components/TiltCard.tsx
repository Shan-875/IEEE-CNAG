import React from "react";
import { useTilt } from "../hooks/useTilt";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number;
  glowColor?: "green" | "gold" | "maroon";
  hasLaser?: boolean;
}

export function TiltCard({
  children,
  className = "",
  maxRotation = 10,
  glowColor = "green",
  hasLaser = false,
  ...props
}: TiltCardProps) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>({
    maxRotation,
    perspective: 1100,
    scale: 1.025,
  });

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`tilt-card-container glow-${glowColor} ${className}`}
      {...props}
    >
      <div className="tilt-card-specular" />
      {hasLaser && <div className="tilt-card-laser" />}
      <div className="tilt-card-content">{children}</div>
    </div>
  );
}
