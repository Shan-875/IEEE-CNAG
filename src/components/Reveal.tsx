import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, on } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${on ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
