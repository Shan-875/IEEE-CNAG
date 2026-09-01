import { resources } from "../data";
import { Reveal } from "../components/Reveal";

export function Resources() {
  return (
    <main className="page">
      <header className="page-hero">
        <p className="eyebrow">Practice Library & Links</p>
        <h1 className="display">Consultant Resources & Repositories</h1>
        <p className="lede">
          Access essential IEEE guidelines, international standards, research repositories, and global
          consultancy network tools to empower your independent technical practice.
        </p>
      </header>

      <section className="section">
        <div className="wrap resource-list">
          {resources.map((r, i) => (
            <Reveal key={r.href} delay={i * 50}>
              <a className="resource" href={r.href} target="_blank" rel="noreferrer">
                <div>
                  <span style={{ fontSize: "0.72rem", color: "var(--ieee-blue)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>
                    {r.category}
                  </span>
                  <h3>{r.title}</h3>
                  <p>{r.note}</p>
                </div>
                <span aria-hidden="true">↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
