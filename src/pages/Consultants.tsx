import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { consultants } from "../data";
import { Reveal } from "../components/Reveal";

export function Consultants() {
  const [q, setQ] = useState("");
  const [activeDomain, setActiveDomain] = useState("all");
  const [selectedPractice, setSelectedPractice] = useState<(typeof consultants)[0] | null>(null);

  const domainList = ["all", "Energy", "Electronics", "Automation", "ESG", "Software", "Healthcare", "Buildings", "Management"];

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return consultants.filter((c) => {
      const matchDomain = activeDomain === "all" || c.domain.toLowerCase() === activeDomain.toLowerCase();
      const matchSearch =
        !s ||
        c.name.toLowerCase().includes(s) ||
        c.domain.toLowerCase().includes(s) ||
        c.focus.toLowerCase().includes(s) ||
        c.tags.some((t) => t.toLowerCase().includes(s));
      return matchDomain && matchSearch;
    });
  }, [q, activeDomain]);

  return (
    <main className="page">
      <header className="page-hero">
        <p className="eyebrow">Professional Directory</p>
        <h1 className="display">Find an Accredited Consultant</h1>
        <p className="lede">
          IEEE Kerala Section CNAG maintains a curated directory of accredited engineering consultants.
          Explore domain practice areas below or apply to list your consultancy practice on the roster.
        </p>

        <label className="search">
          <span className="sr">Search consultancy practices</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by domain, practice (Power, AI Hardware, ESG, SCADA, Cloud)..."
          />
        </label>
      </header>

      <section className="section">
        <div className="wrap">
          {/* Domain Filter Pills */}
          <div className="filter-tabs" style={{ marginBottom: "32px" }}>
            {domainList.map((d) => (
              <button
                key={d}
                className={`filter-tab ${activeDomain === d ? "active" : ""}`}
                onClick={() => setActiveDomain(d)}
              >
                {d === "all" ? "All Practice Areas" : d}
              </button>
            ))}
          </div>

          {/* Directory Cards Grid */}
          <div className="trio">
            {list.map((c, i) => (
              <Reveal key={c.id} delay={i * 60}>
                <article
                  className="card"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedPractice(c)}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span className="card-badge">{c.domain}</span>
                    <span style={{ fontSize: "0.72rem", color: "var(--ieee-blue)", fontWeight: 700, background: "var(--ieee-cyan-soft)", padding: "2px 8px", borderRadius: "4px" }}>
                      {c.status}
                    </span>
                  </div>

                  <h3>{c.name}</h3>
                  <p style={{ marginBottom: "16px" }}>{c.focus}</p>

                  <div style={{ marginTop: "auto", borderTop: "1px solid var(--border-subtle)", paddingTop: "14px" }}>
                    <div style={{ fontSize: "0.76rem", color: "var(--text-light)", marginBottom: "8px", fontWeight: 600 }}>
                      Practice Leads: {c.leads}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {c.tags.slice(0, 3).map((t) => (
                        <span key={t} className="execom-tag">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {list.length === 0 && (
            <p className="note" style={{ textAlign: "center", padding: "40px 0" }}>
              No practice areas found matching "{q}". Try clearing filters or searching another keyword.
            </p>
          )}

          <div style={{ marginTop: "48px", textAlign: "center" }}>
            <Link to="/join" className="btn gold">
              Enrol on the Consultant Roster →
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Details Modal */}
      {selectedPractice && (
        <div className="modal-overlay" onClick={() => setSelectedPractice(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedPractice(null)}>
              ✕
            </button>
            <div className="modal-header">
              <div>
                <span className="modal-badge">{selectedPractice.domain} Practice</span>
                <h3 className="modal-name">{selectedPractice.name}</h3>
                <p className="modal-affiliation">Lead Advisors: {selectedPractice.leads}</p>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <h4>Scope & Advisory Capabilities</h4>
                <p>{selectedPractice.focus}</p>
              </div>
              <div className="modal-section">
                <h4>Core Technical Focus Areas</h4>
                <div className="modal-tags">
                  {selectedPractice.tags.map((t) => (
                    <span key={t} className="modal-tag">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="modal-actions">
                <a
                  href={`mailto:ieeekerala@gmail.com?subject=Inquiry:%20${encodeURIComponent(selectedPractice.name)}`}
                  className="btn btn-primary"
                >
                  Request Technical Consultation
                </a>
                <Link to="/join" className="btn btn-outline">
                  Join this Practice
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
