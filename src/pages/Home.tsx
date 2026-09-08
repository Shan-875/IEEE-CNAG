import { useState } from "react";
import { Link } from "react-router-dom";
import {
  audiences,
  domains,
  events,
  mission,
  executiveCommittee,
  officeBearers,
  generalExecomMembers,
  seniorAdvisors,
  vision,
  type CommitteeMember,
} from "../data";
import { NetworkCanvas } from "../components/NetworkCanvas";
import { Backwater } from "../components/Backwater";
import { Reveal } from "../components/Reveal";
import { ExecomModal } from "../components/ExecomModal";
import { HoloMeshCanvas } from "../components/HoloMeshCanvas";
import { LaserLine } from "../components/LaserLine";
import { TiltCard } from "../components/TiltCard";
import { FloatingBadges } from "../components/FloatingBadges";
import { Floating3DNames } from "../components/Floating3DNames";

export function Home() {
  const [activeFilter, setActiveFilter] = useState<"divided" | "officer" | "member" | "advisor">("divided");
  const [selectedMember, setSelectedMember] = useState<CommitteeMember | null>(null);
  const [contactToggled, setContactToggled] = useState(false);

  const renderMemberCard = (member: CommitteeMember, i: number) => (
    <Reveal key={member.id} delay={(i % 4) * 70}>
      <TiltCard
        maxRotation={12}
        glowColor={member.category === "officer" ? "gold" : "green"}
        hasLaser={true}
        className={`execom-card ${member.category}`}
        onClick={() => setSelectedMember(member)}
        tabIndex={0}
        role="button"
        aria-label={`View profile of ${member.name}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setSelectedMember(member);
          }
        }}
      >
        <div className="execom-top">
          <div className="execom-avatar">
            <span>{member.initials}</span>
          </div>
          <div>
            <span className="execom-role-badge">{member.role}</span>
          </div>
        </div>

        <h3 className="execom-name">{member.name}</h3>
        <p className="execom-affiliation">{member.affiliation}</p>

        <div className="execom-tags">
          {member.domains.slice(0, 2).map((d) => (
            <span key={d} className="execom-tag">
              #{d}
            </span>
          ))}
        </div>

        <div className="execom-footer">
          <span>{member.ieeeGrade.split(",")[0]}</span>
          <span className="execom-view-btn">View Profile →</span>
        </div>
      </TiltCard>
    </Reveal>
  );

  return (
    <>
      {/* Hero Section with Motion Graphics & 3D Depth */}
      <section className="hero">
        <NetworkCanvas />
        <div className="hero-veil" />
        <Backwater />
        <div className="wrap hero-copy">
          <Reveal>
            <p className="eyebrow">
              <span className="pulse-dot" />
              IEEE Kerala Section · Region 10 Affinity Group
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h1>
              <span className="word">Connect.</span>
              <span className="word delay">Ideate.</span>
              <span className="word delay2">Innovate.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="hero-sub">
              We are{" "}
              <span className="kinetic-badge">
                <span className="kinetic-wave">
                  <span />
                  <span />
                  <span />
                </span>
                IEEE Accredited
              </span>{" "}
              consultancy network in Kerala — uniting independent engineering practitioners,
              seasoned corporate advisors, and university leaders into a high-stakes problem-solving ecosystem.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <LaserLine color="green" width="280px" />
          </Reveal>

          <Reveal delay={180}>
            <div className="hero-actions">
              <Link to="/join" className="btn gold">
                Join as Consultant →
              </Link>
              <Link to="/consultants" className="btn ghost">
                Find a Consultant
              </Link>
              <a href="#moving-names-showcase" className="btn ghost">
                3D Leaders Matrix ↓
              </a>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="hero-meta">
              <div>
                <strong>250+</strong>
                <span>Consultants & Experts</span>
              </div>
              <div>
                <strong>12 Domains</strong>
                <span>Technical Practice Areas</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Peer-Reviewed Advisory</span>
              </div>
              <div>
                <strong>2024–2025</strong>
                <span>Current Active Term</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Domain Ticker Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...domains, ...domains].map((d, i) => (
            <span key={`${d}-${i}`}>{d}</span>
          ))}
        </div>
      </div>

      {/* =======================================================
          SCREEN 1: BOUTIQUE 3-PILLAR SECTION (Reel Image 2 Match)
         ======================================================= */}
      <section className="section boutique-hero-section">
        <div className="wrap">
          <Reveal>
            <h2 className="display" style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)", maxWidth: "880px", margin: "0 auto 20px" }}>
              We are{" "}
              <span className="kinetic-badge">
                <span className="kinetic-wave">
                  <span />
                  <span />
                  <span />
                </span>
                Accredited
              </span>{" "}
              independent engineering consultants
            </h2>
            <p style={{ maxWidth: "780px", margin: "0 auto 24px", color: "var(--taupe)", fontSize: "1.08rem", lineHeight: 1.8 }}>
              At IEEE Kerala Section CNAG, our expertise extends across diverse industries and sectors, including power transmission,
              clean energy microgrids, AI hardware, biomedical instrumentation, and ESG sustainability reporting. Our team's expertise is backed by
              the highest standards of IEEE certifications.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <LaserLine color="green" width="320px" />
            </div>
          </Reveal>

          <div className="boutique-pill-grid">
            <Reveal delay={80}>
              <TiltCard maxRotation={10} glowColor="green" hasLaser={true} className="boutique-card">
                <span className="boutique-num">[ 01 ] Experience</span>
                <h3>We have decades of experience</h3>
                <p>
                  Drawing from years of senior engineering leadership across KSEB, state energy boards, academic deanships,
                  and multinational tech firms to defend and grow critical assets.
                </p>
              </TiltCard>
            </Reveal>

            <Reveal delay={160}>
              <TiltCard maxRotation={10} glowColor="gold" hasLaser={true} className="boutique-card">
                <span className="boutique-num" style={{ color: "#d97706" }}>[ 02 ] Customization</span>
                <h3>We offer customized solutions</h3>
                <p>
                  Recognizing that each enterprise confronts unique challenges, we assemble specialized, tailor-made
                  multi-disciplinary advisory syndicates specific to project demands.
                </p>
              </TiltCard>
            </Reveal>

            <Reveal delay={240}>
              <TiltCard maxRotation={10} glowColor="cyan" hasLaser={true} className="boutique-card">
                <span className="boutique-num" style={{ color: "#0284c7" }}>[ 03 ] Up-To-Date</span>
                <h3>We stay standards compliant</h3>
                <p>
                  In the dynamic landscape of technological transitions, our focus is on staying ahead with peer-reviewed
                  IEEE standards, emerging AI VLSI, and net-zero sustainability frameworks.
                </p>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =======================================================
          SCREEN 2: 3D MOVING NAMES & LEADERSHIP STAGE (Reel Image 1 Match)
         ======================================================= */}
      <section className="section dim" id="moving-names-showcase">
        <div className="wrap split" style={{ alignItems: "center" }}>
          <Reveal>
            <p className="eyebrow">✦ 3D Interactive Leadership Matrix ✦</p>
            <h2 className="display">Our Certifications & Key Leaders</h2>
            <p className="lede">
              Move your cursor across the stage to interact with the 3D depth field. Click on any floating leader card
              to inspect full technical credentials, bio, and direct consultation contact.
            </p>
            <LaserLine color="green" width="260px" />
            <div style={{ marginTop: "24px" }}>
              <FloatingBadges />
            </div>
          </Reveal>

          <Reveal delay={120}>
            {/* 3D Floating Moving Names Stage */}
            <Floating3DNames
              members={executiveCommittee}
              onSelectMember={(m) => setSelectedMember(m)}
            />
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="wrap mv">
          <Reveal>
            <TiltCard maxRotation={8} glowColor="maroon">
              <article style={{ padding: "8px" }}>
                <p className="eyebrow">Our Mission</p>
                <p>{mission}</p>
              </article>
            </TiltCard>
          </Reveal>
          <Reveal delay={120}>
            <TiltCard maxRotation={8} glowColor="gold">
              <article style={{ padding: "8px" }}>
                <p className="eyebrow">Our Vision</p>
                <p>{vision}</p>
              </article>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* Who Can Join - 3D Tilt Cards */}
      <section className="section dim">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Membership Pathways</p>
            <h2 className="display">Three doors into the same room.</h2>
            <LaserLine color="green" width="180px" />
          </Reveal>
          <div className="trio">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 90}>
                <TiltCard maxRotation={10} glowColor="green" hasLaser={true} className="card">
                  <span className="card-badge">{a.badge}</span>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =======================================================
          DIVIDED EXECUTIVE COMMITTEE SECTION (Grid View)
         ======================================================= */}
      <section className="section" id="execom-showcase">
        <div className="wrap">
          <div className="execom-section-head">
            <Reveal>
              <p className="eyebrow">Governance & Committee Structure</p>
              <h2 className="display">Executive Committee 2024–2025</h2>
              <p className="lede">
                Structured under IEEE Region 10 and Kerala Section charter, dividing Core Office Bearers,
                Executive Committee members, and Senior Advisory Board.
              </p>
              <LaserLine color="gold" width="260px" />
            </Reveal>

            {/* Category Filter Tabs */}
            <Reveal delay={80}>
              <div className="filter-tabs" role="tablist" aria-label="Filter Committee Views">
                <button
                  className={`filter-tab ${activeFilter === "divided" ? "active" : ""}`}
                  onClick={() => setActiveFilter("divided")}
                >
                  Divided Full View ({executiveCommittee.length})
                </button>
                <button
                  className={`filter-tab ${activeFilter === "officer" ? "active" : ""}`}
                  onClick={() => setActiveFilter("officer")}
                >
                  Office Bearers · Core Leadership (4)
                </button>
                <button
                  className={`filter-tab ${activeFilter === "member" ? "active" : ""}`}
                  onClick={() => setActiveFilter("member")}
                >
                  Executive Committee Members (6)
                </button>
                <button
                  className={`filter-tab ${activeFilter === "advisor" ? "active" : ""}`}
                  onClick={() => setActiveFilter("advisor")}
                >
                  Senior Advisors & Past Chairs (2)
                </button>
              </div>
            </Reveal>
          </div>

          {/* Divided View or Filtered View */}
          {activeFilter === "divided" && (
            <>
              {/* Part 1: Core Leadership / Office Bearers */}
              <Reveal>
                <div className="execom-subheading">
                  <h3>Office Bearers · Core Executive Leadership</h3>
                  <span>Key Officers</span>
                </div>
              </Reveal>
              <div className="execom-officer-grid">
                {officeBearers.map((member, i) => renderMemberCard(member, i))}
              </div>

              {/* Part 2: Executive Committee Members */}
              <Reveal>
                <div className="execom-subheading">
                  <h3>Executive Committee Members</h3>
                  <span>Technical Leads</span>
                </div>
              </Reveal>
              <div className="execom-member-grid">
                {generalExecomMembers.map((member, i) => renderMemberCard(member, i))}
              </div>

              {/* Part 3: Senior Advisory Board */}
              <Reveal>
                <div className="execom-subheading">
                  <h3>Distinguished Senior Advisors & Mentors</h3>
                  <span>Advisory Board</span>
                </div>
              </Reveal>
              <div className="execom-member-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
                {seniorAdvisors.map((member, i) => renderMemberCard(member, i))}
              </div>
            </>
          )}

          {activeFilter === "officer" && (
            <div className="execom-officer-grid">
              {officeBearers.map((member, i) => renderMemberCard(member, i))}
            </div>
          )}

          {activeFilter === "member" && (
            <div className="execom-member-grid">
              {generalExecomMembers.map((member, i) => renderMemberCard(member, i))}
            </div>
          )}

          {activeFilter === "advisor" && (
            <div className="execom-member-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
              {seniorAdvisors.map((member, i) => renderMemberCard(member, i))}
            </div>
          )}

          <Reveal delay={120}>
            <div style={{ marginTop: "36px", textAlign: "center" }}>
              <Link to="/execom" className="btn ghost">
                View Full Governance Charter & Committee Details →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ConsulTalks & Recent Events with 3D Depth */}
      <section className="section dim">
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
            <Reveal>
              <p className="eyebrow">Knowledge Sharing</p>
              <h2 className="display">ConsulTalks & Technical Sessions</h2>
              <LaserLine color="green" width="220px" />
            </Reveal>
            <Reveal>
              <Link to="/events" className="text-link">
                View All Events Archive →
              </Link>
            </Reveal>
          </div>

          <div className="event-rail">
            {events.slice(0, 4).map((e, i) => (
              <Reveal key={e.id} delay={i * 80}>
                <TiltCard maxRotation={8} glowColor="green" hasLaser={true} className="event-card">
                  <div className="event-img">
                    <img src={e.image} alt={e.title} loading="lazy" />
                  </div>
                  <p className="tag">{e.tag}</p>
                  <h3>{e.title}</h3>
                  <time>{e.date}</time>
                  <p>{e.summary}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =======================================================
          SCREEN 3: 3D HOLOGRAM CONTACT & CTA (Reel Image 3 Match)
         ======================================================= */}
      <section className="cta-band">
        <NetworkCanvas />
        <div className="wrap cta-inner">
          <Reveal>
            {/* 3D Holographic Particle Simulation */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "-10px" }}>
              <HoloMeshCanvas color="green" size={280} particleCount={600} />
            </div>

            <p className="eyebrow">
              ✦ IEEE Kerala Section · CNAG Enrolment ✦
            </p>
            <h2 className="display" style={{ fontSize: "clamp(2.6rem, 6vw, 4.4rem)" }}>
              Contact us Today ✎
            </h2>
            <p style={{ maxWidth: "660px", margin: "0 auto 28px" }}>
              Whenever you have queries, require expert engineering advice, or need prompt technical support,
              our accredited independent consultants are just a click away.
            </p>

            <div className="cta-actions" style={{ marginBottom: "18px" }}>
              <Link to="/join" className="btn gold" style={{ padding: "14px 32px", fontSize: "1rem" }}>
                Enrol as a Consultant →
              </Link>
              <Link to="/consultants" className="btn ghost" style={{ padding: "14px 28px" }}>
                Search Expert Directory
              </Link>
            </div>

            {/* Interactive Toggle Switch (Image 3 Inspiration) */}
            <div>
              <div
                className="contact-toggle-pill"
                onClick={() => setContactToggled(!contactToggled)}
                role="button"
                tabIndex={0}
                title="Click to toggle hotline status"
              >
                <div
                  className="toggle-switch-icon"
                  style={{
                    background: contactToggled ? "#f59e0b" : "#10b981",
                  }}
                />
                <span className="toggle-label">
                  {contactToggled ? "Secretariat Direct Line: ieeekerala@gmail.com" : "Contact us Active"}
                </span>
              </div>
            </div>

            <p className="cta-help" style={{ marginTop: "20px" }}>
              Reach out directly to IEEE Kerala Section Secretariat at{" "}
              <a href="mailto:ieeekerala@gmail.com">ieeekerala@gmail.com</a>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Member Details Modal */}
      <ExecomModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </>
  );
}
