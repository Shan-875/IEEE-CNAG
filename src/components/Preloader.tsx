import { useEffect, useState } from "react";
import { Hero3DOrb } from "./Hero3DOrb";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [out, setOut] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t1 = window.setTimeout(() => setOut(true), reduce ? 200 : 1700);
    const t2 = window.setTimeout(onDone, reduce ? 280 : 2300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  return (
    <div className={`preloader ${out ? "is-out" : ""}`}>
      <Hero3DOrb className="preloader-orb" size={460} />
      <div className="pre-core">
        <img
          src={`${import.meta.env.BASE_URL}ieee-logo-white.svg`}
          alt="IEEE - Advancing Technology for Humanity"
          className="pre-full-logo"
        />
        <p>IEEE Kerala Section</p>
        <h1>CNAG</h1>
        <span>Consultants’ Network Affinity Group</span>
      </div>
    </div>
  );
}
