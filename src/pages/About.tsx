import { Link } from "react-router-dom";
import { aboutLead, publicServices, mission, vision } from "../data";
import { Reveal } from "../components/Reveal";

export function About() {
  const pillars = [
    {
      num: "Pillar 01",
      title: "Ethical Practice & Standards",
      desc: "Operating strictly under the IEEE Code of Ethics and international engineering benchmarks (ISO/IEC/IEEE), ensuring transparent client engagements, verified qualifications, and conflict-free technical audits.",
    },
    {
      num: "Pillar 02",
      title: "Multi-Disciplinary Syndicates",
      desc: "Enabling independent domain experts to form collaborative advisory consortiums for large-scale enterprise RFPs, government tenders, utility grid modernization, and multi-tier tech validations.",
    },
    {
      num: "Pillar 03",
      title: "Capacity Building & Incubation",
      desc: "Providing structured pathways, contract pricing masterclasses, and peer review circles for IEEE Young Professionals and transitioning corporate engineers launching independent advisory practices.",
    },
    {
      num: "Pillar 04",
      title: "Global & Industry Linkages",
      desc: "Bridging Kerala practitioners with the IEEE-USA Alliance of IEEE Consultants Networks (AICN), IEEE Collabratec, regional industrial trade bodies, state energy boards, and academic research institutions.",
    },
  ];

  const practiceDomains = [
    {
      title: "Power Systems & Grid Modernization",
      desc: "Substation automation, transmission reliability, high voltage diagnostics, and power quality harmonic mitigation.",
    },
    {
      title: "AI Hardware & Embedded VLSI",
      desc: "Neuromorphic chip architectures, edge AI acceleration, analog VLSI, and hardware security verification.",
    },
    {
      title: "Industrial IoT & SCADA Automation",
      desc: "Telemetry, process optimization, Industry 4.0 modernization, and industrial cyber-physical security.",
    },
    {
      title: "Renewable Energy & ESG Advisory",
      desc: "Biogas power, solar PV grid integration, corporate carbon accounting, and SEBI BRSR compliance roadmaps.",
    },
    {
      title: "Net-Zero Built Environment",
      desc: "ECBC energy compliance, computational building simulation, HVAC optimization, and green building certifications.",
    },
    {
      title: "Cybersecurity & Cloud Systems",
      desc: "Enterprise zero-trust architecture, cloud migration reviews, data governance, and ISO 27001 advisory.",
    },
  ];

  return (
    <main className="page">
      {/* Page Hero */}
      <header className="page-hero">
        <p className="eyebrow">IEEE Region 10 · Kerala Section</p>
        <h1 className="display">About IEEE Kerala Consultants Network (CNAG)</h1>
        <p className="lede">{aboutLead}</p>

        <div className="facts-badge-group">
          <div className="fact-badge">
            <strong>Region 10</strong>
            <span>Asia-Pacific Section Network</span>
          </div>
          <div className="fact-badge">
            <strong>12 Domains</strong>
            <span>Accredited Engineering Practices</span>
          </div>
          <div className="fact-badge">
            <strong>100% Peer-Reviewed</strong>
            <span>IEEE Standards Compliance</span>
          </div>
        </div>
      </header>

      {/* Institutional Overview & Split */}
      <section className="section">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">Institutional Purpose</p>
            <h2 className="display">
              A trusted bridge between seasoned engineering counsel and regional enterprise growth.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lede">
              The Consultants Network Affinity Group of IEEE Kerala Section (CNAG-KS) was established to serve as the
              premier institutional home for independent engineering consultants, technical strategists, and specialized
              practitioners across Kerala.
            </p>
            <p className="lede" style={{ marginTop: "14px" }}>
              In an era of rapid technological disruption, enterprises, MSMEs, state utility agencies (KSEB, ANERT, EMC),
              and innovative startups require independent, vendor-neutral engineering counsel. CNAG-KS provides an accredited,
              transparent roster of verified professionals who deliver rigorous techno-commercial feasibility reviews,
              patents analysis, lifecycle engineering management, and policy advisory.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section dim">
        <div className="wrap mv">
          <Reveal>
            <article>
              <p className="eyebrow">Our Mission</p>
              <p>{mission}</p>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <article>
              <p className="eyebrow">Our Vision</p>
              <p>{vision}</p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Four Strategic Pillars */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Core Framework</p>
            <h2 className="display">Four Strategic Pillars of CNAG-KS</h2>
            <p className="lede">
              Our operational blueprint ensures that members maintain global consulting rigor while delivering tangible
              public and economic impact locally.
            </p>
          </Reveal>

          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <Reveal key={p.num} delay={i * 90}>
                <article className="pillar-card">
                  <span className="pillar-number">{p.num}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Practice Domains Matrix */}
      <section className="section dim">
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
            <Reveal>
              <p className="eyebrow">Technical Capabilities</p>
              <h2 className="display">Accredited Advisory Domains</h2>
            </Reveal>
            <Reveal>
              <Link to="/consultants" className="text-link">
                Explore Full Directory Roster
              </Link>
            </Reveal>
          </div>

          <div className="domains-matrix">
            {practiceDomains.map((d, i) => (
              <Reveal key={d.title} delay={i * 70}>
                <div className="domain-chip">
                  <h4>{d.title}</h4>
                  <p>{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Public & Industry Services */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Public Services & Deliverables</p>
            <h2 className="display">What the Network Delivers to Industry & Society</h2>
          </Reveal>

          <div className="trio">
            {publicServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <article className="card">
                  <span className="card-badge">Deliverable 0{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Operating Model */}
      <section className="section dim">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Governance Model</p>
            <h2 className="display">Institutional Governance & Operating Structure</h2>
            <p className="lede">
              CNAG-KS operates under the governance oversight of IEEE Kerala Section, adhering to rigorous IEEE Region 10
              affinity group constitutions.
            </p>
          </Reveal>

          <div className="governance-grid">
            <Reveal delay={60}>
              <article className="governance-card">
                <h3>Executive Council</h3>
                <p>
                  Elected Office Bearers (Chair, Vice-Chair, Secretary, Treasurer) who steer organizational strategy,
                  manage affinity group finances, coordinate annual general meetings, and liaise with IEEE Kerala Section leadership.
                </p>
              </article>
            </Reveal>
            <Reveal delay={120}>
              <article className="governance-card">
                <h3>Technical Review Board</h3>
                <p>
                  Senior professors, industry Fellows, and past section chairs who evaluate consultant applications, verify
                  domain credentials, and oversee technical quality for peer-reviewed roster publications.
                </p>
              </article>
            </Reveal>
            <Reveal delay={180}>
              <article className="governance-card">
                <h3>Ethics & Standards Panel</h3>
                <p>
                  Ensures all member consultants adhere strictly to the IEEE Code of Conduct, conflict-of-interest guidelines,
                  and client confidentiality protocols across all public and private consulting engagements.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Kerala Section Synergy & Headquarters */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div style={{ padding: "40px 36px", background: "linear-gradient(160deg, rgba(255, 255, 255, 0.94), rgba(251, 248, 243, 0.75))", borderRadius: "20px", border: "1px solid var(--line-gold)", boxShadow: "var(--shadow-soft)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "36px", alignItems: "center" }}>
                <div>
                  <p className="eyebrow" style={{ marginBottom: "12px" }}>Kerala Section Ecosystem</p>
                  <h3 style={{ fontSize: "1.8rem", color: "var(--ink)", margin: "0 0 14px", fontFamily: "var(--display)", fontWeight: 700 }}>
                    Collaborative Affinity Groups Synergy
                  </h3>
                  <p style={{ color: "var(--taupe)", margin: "0 0 16px", lineHeight: 1.8, fontSize: "1rem", fontWeight: 500 }}>
                    CNAG operates collaboratively alongside IEEE Kerala Section's renowned affinity groups — including
                    <strong> Women in Engineering (WIE)</strong>, <strong>Young Professionals (YP)</strong>,
                    <strong> SIGHT (Special Interest Group on Humanitarian Technology)</strong>, and <strong>Life Members</strong> —
                    serving as the specialized professional pillar for independent consulting practice and commercial technology deployment.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "24px" }}>
                    <Link to="/join" className="btn gold">
                      Join as Consultant →
                    </Link>
                    <Link to="/execom" className="btn ghost">
                      View Executive Committee
                    </Link>
                  </div>
                </div>

                <div style={{ padding: "26px 22px", background: "rgba(250, 247, 242, 0.8)", borderRadius: "14px", border: "1px solid var(--line)" }}>
                  <p style={{ fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--maroon)", fontWeight: 700, margin: "0 0 8px" }}>
                    Section Office
                  </p>
                  <h4 style={{ fontSize: "1.25rem", color: "var(--ink)", margin: "0 0 10px", fontFamily: "var(--display)", fontWeight: 700 }}>
                    HarmonIEEE Section Office
                  </h4>
                  <address style={{ fontStyle: "normal", color: "var(--taupe)", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "14px" }}>
                    1st Floor, Cherian’s Square, Ambujavilasam Rd
                    <br />
                    PB 77, GPO, Thiruvananthapuram, Kerala 695001
                  </address>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--maroon-deep)", fontWeight: 600 }}>
                    Email: <a href="mailto:ieeekerala@gmail.com" style={{ textDecoration: "underline" }}>ieeekerala@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
