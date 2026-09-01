import { useEffect, useState } from "react";

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
      <div className="pre-core">
        <div className="pre-ring" />
        <div className="pre-ring two" />
        <div className="pre-ring three" />
        <p>IEEE Kerala Section</p>
        <h1>CNAG</h1>
        <span>Consultants’ Network Affinity Group</span>
      </div>
    </div>
  );
}
