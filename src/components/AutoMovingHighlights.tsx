import { Link } from "react-router-dom";

export function AutoMovingHighlights() {
  const highlights = [
    {
      badge: "01 · ACCREDITATION",
      title: "IEEE Region 10 Verified Consultant Directory",
      desc: "Curated registry of senior engineering advisors, state utility chiefs, and research deans.",
      tag: "Verified Roster",
      to: "/consultants",
    },
    {
      badge: "02 · POWER & GRID",
      title: "Grid Modernization & High Voltage Diagnostics",
      desc: "Substation automation, harmonic mitigation, and electrical safety standards across Kerala.",
      tag: "Power Systems",
      to: "/consultants",
    },
    {
      badge: "03 · AI & VLSI",
      title: "Neuromorphic Chips & Edge AI Hardware",
      desc: "Brain-inspired analog VLSI and semiconductor acceleration with Digital University Kerala.",
      tag: "Semiconductors",
      to: "/consultants",
    },
    {
      badge: "04 · ESG COMPLIANCE",
      title: "MSME Decarbonization & BRSR Reporting",
      desc: "Carbon footprint accounting, clean biogas power, and SEBI sustainability disclosures.",
      tag: "ESG Frameworks",
      to: "/consultants",
    },
    {
      badge: "05 · KNOWLEDGE SERIES",
      title: "Flagship ConsulTalks & Masterclasses",
      desc: "Regular technical roundtables on engineering ethics, commercial bidding, and patent advisory.",
      tag: "ConsulTalks",
      to: "/events",
    },
    {
      badge: "06 · TENDER SYNDICATES",
      title: "Multi-Disciplinary Project Syndicates",
      desc: "Collaborative consortium bidding for large-scale public and private infrastructure RFPs.",
      tag: "PMO Governance",
      to: "/join",
    },
  ];

  return (
    <section className="auto-moving-section" aria-label="Important Practice Highlights">
      <div className="wrap auto-moving-header">
        <p className="eyebrow">
          <span className="pulse-dot" />
          Live Highlights · Core Offerings & Advisory Focus
        </p>
        <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: "0" }}>
          Important Capabilities & Practice Highlights
        </h2>
      </div>

      <div className="motion-rail-wrapper">
        <div className="motion-rail-track">
          {[...highlights, ...highlights].map((item, idx) => (
            <Link
              key={`${item.badge}-${idx}`}
              to={item.to}
              className="motion-card"
            >
              <div className="motion-card-top">
                <span className="motion-badge">{item.badge}</span>
                <span className="motion-tag">#{item.tag}</span>
              </div>
              <h3 className="motion-title">{item.title}</h3>
              <p className="motion-desc">{item.desc}</p>
              <div className="motion-footer">
                <span>Explore Details</span>
                <span className="motion-arrow">→</span>
              </div>
              <div className="motion-card-glow" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
