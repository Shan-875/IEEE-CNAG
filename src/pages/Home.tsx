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

export function Home() {
  const [activeFilter, setActiveFilter] = useState<"divided" | "officer" | "member" | "advisor">("divided");
  const [selectedMember, setSelectedMember] = useState<CommitteeMember | null>(null);

  const renderMemberCard = (member: CommitteeMember, i: number) => (
    <Reveal key={member.id} delay={(i % 4) * 70}>
      <article
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
      </article>
    </Reveal>
  );

  return (
    <>
      {/* Hero Section */}
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
              The professional home of independent engineering consultants in Kerala — a living
              network of practice, counsel, and public service, empowered by technology and
              driven by excellence.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="hero-actions">
              <Link to="/join" className="btn gold">
                Join as Consultant
              </Link>
              <Link to="/consultants" className="btn ghost">
                Find a Consultant
              </Link>
              <a href="#execom-showcase" className="btn ghost">
                Executive Leadership ↓
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

      {/* About Brief */}
      <section className="section">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">About CNAG Kerala</p>
            <h2 className="display">
              A Kerala Section platform for the consulting profession.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">
              CNAG-KS brings together certified IEEE members and industry leaders to build a trusted,
              transparent roster of consultants. We provide independent technical counsel to MSMEs, enterprises,
              and government stakeholders while nurturing the next generation of engineering advisors.
            </p>
            <Link to="/about" className="text-link">
              Read our mission & charter
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
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

      {/* Who Can Join */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Membership Pathways</p>
            <h2 className="display">Three doors into the same room.</h2>
          </Reveal>
          <div className="trio">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 90}>
                <article className="card">
                  <span className="card-badge">{a.badge}</span>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =======================================================
          DIVIDED EXECUTIVE COMMITTEE SECTION (User Request)
         ======================================================= */}
      <section className="section dim" id="execom-showcase">
        <div className="wrap">
          <div className="execom-section-head">
            <Reveal>
              <p className="eyebrow">Governance & Committee Structure</p>
              <h2 className="display">Executive Committee 2024–2025</h2>
              <p className="lede">
                Structured under IEEE Region 10 and Kerala Section charter, dividing Core Office Bearers,
                Executive Committee members, and Senior Advisory Board.
              </p>
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

      {/* ConsulTalks & Recent Events */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
            <Reveal>
              <p className="eyebrow">Knowledge Sharing</p>
              <h2 className="display">ConsulTalks & Technical Sessions</h2>
            </Reveal>
            <Reveal>
              <Link to="/events" className="text-link">
                View All Events Archive
              </Link>
            </Reveal>
          </div>

          <div className="event-rail">
            {events.slice(0, 4).map((e, i) => (
              <Reveal key={e.id} delay={i * 80}>
                <article className="event-card">
                  <div className="event-img">
                    <img src={e.image} alt={e.title} loading="lazy" />
                  </div>
                  <p className="tag">{e.tag}</p>
                  <h3>{e.title}</h3>
                  <time>{e.date}</time>
                  <p>{e.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band: High Prestige Membership Showcase */}
      <section className="cta-band">
        <NetworkCanvas />
        <div className="wrap cta-inner">
          <Reveal>
            <p className="eyebrow">
              ✦ IEEE Kerala Section · CNAG Enrolment ✦
            </p>
            <h2 className="display">
              Join the IEEE Kerala Consultants Network & Elevate Your Career
            </h2>
            <p>
              Whether you are an established engineering consultant, an IEEE professional expanding into independent advisory,
              or an organization seeking certified technical counsel, CNAG-KS provides the recognized accreditation and network you need.
            </p>

            <div className="cta-perks">
              <div className="cta-perk">
                <span>❖</span>
                <div>Accredited Roster of Independent Engineering Consultants</div>
              </div>
              <div className="cta-perk">
                <span>❖</span>
                <div>Access to Multi-Disciplinary Public & Private Project Syndicates</div>
              </div>
              <div className="cta-perk">
                <span>❖</span>
                <div>ConsulTalks Keynote Speaking & Thought Leadership Platform</div>
              </div>
              <div className="cta-perk">
                <span>❖</span>
                <div>Ethical Practice Charters & Standard IEEE Contract Templates</div>
              </div>
            </div>

            <div className="cta-actions">
              <Link to="/join" className="btn gold">
                Enrol as a Consultant →
              </Link>
              <Link to="/consultants" className="btn ghost">
                Search Expert Directory
              </Link>
            </div>

            <p className="cta-help">
              Have questions regarding membership or roster inclusion? Write to the Section Secretariat at{" "}
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
