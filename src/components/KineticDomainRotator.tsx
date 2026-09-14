import { useState, useEffect } from "react";
import { domains } from "../data";

export function KineticDomainRotator() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % domains.length);
        setFade(true);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="kinetic-rotator-container">
      <span className="rotator-prefix">Specialized Advisory in:</span>
      <span className={`rotator-badge ${fade ? "is-visible" : "is-fading"}`}>
        <span className="rotator-dot" />
        <strong className="rotator-text">{domains[index]}</strong>
      </span>
    </div>
  );
}
