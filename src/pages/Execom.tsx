import { useMemo, useState } from "react";
import {
  executiveCommittee,
  officeBearers,
  generalExecomMembers,
  seniorAdvisors,
  type CommitteeMember,
} from "../data";
import { Reveal } from "../components/Reveal";
import { ExecomModal } from "../components/ExecomModal";

export function Execom() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<"divided" | "officer" | "member" | "advisor">("divided");
  const [selectedMember, setSelectedMember] = useState<CommitteeMember | null>(null);

  const filterList = (list: CommitteeMember[]) => {
    const q = search.trim().toLowerCase();
    if (!q) return list;
    return list.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q) ||
        m.affiliation.toLowerCase().includes(q) ||
        m.domains.some((d) => d.toLowerCase().includes(q))
    );
  };

  const filteredOfficers = useMemo(() => filterList(officeBearers), [search]);
  const filteredMembers = useMemo(() => filterList(generalExecomMembers), [search]);
  const filteredAdvisors = useMemo(() => filterList(seniorAdvisors), [search]);
  const allFiltered = useMemo(() => filterList(executiveCommittee), [search]);

  const renderCard = (member: CommitteeMember, i: number) => (
    <Reveal key={member.id} delay={(i % 4) * 60}>
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
          {member.domains.slice(0, 3).map((d) => (
            <span key={d} className="execom-tag">
              #{d}
            </span>
          ))}
        </div>

        <div className="execom-footer">
          <span>{member.ieeeGrade}</span>
          <span className="execom-view-btn">View Profile →</span>
        </div>
      </article>
    </Reveal>
  );

  return (
    <main className="page">
      <header className="page-hero">
        <p className="eyebrow">Governance & Structure</p>
        <h1 className="display">Executive Committee 2024–2025</h1>
        <p className="lede">
          Governing council of the IEEE Kerala Section Consultants’ Network Affinity Group (CNAG-KS),
          comprising elected Office Bearers, Executive Committee members, and Senior Advisory mentors.
        </p>

        <label className="search">
          <span className="sr">Search Executive Committee</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, role (Chair, Secretary...), or domain (Power, VLSI, ESG)..."
          />
        </label>
      </header>

      <section className="section">
        <div className="wrap">
          {/* Filter Tabs */}
          <div className="filter-tabs" style={{ marginBottom: "36px" }}>
            <button
              className={`filter-tab ${activeCategory === "divided" ? "active" : ""}`}
              onClick={() => setActiveCategory("divided")}
            >
              Divided View ({executiveCommittee.length})
            </button>
            <button
              className={`filter-tab ${activeCategory === "officer" ? "active" : ""}`}
              onClick={() => setActiveCategory("officer")}
            >
              Office Bearers · Core Leadership (4)
            </button>
            <button
              className={`filter-tab ${activeCategory === "member" ? "active" : ""}`}
              onClick={() => setActiveCategory("member")}
            >
              Executive Committee Members (6)
            </button>
            <button
              className={`filter-tab ${activeCategory === "advisor" ? "active" : ""}`}
              onClick={() => setActiveCategory("advisor")}
            >
              Senior Advisors & Past Chairs (2)
            </button>
          </div>

          {/* Divided View */}
          {activeCategory === "divided" && (
            <>
              {/* Core Office Bearers */}
              {filteredOfficers.length > 0 && (
                <div style={{ marginBottom: "50px" }}>
                  <Reveal>
                    <div className="execom-subheading">
                      <h3>Core Leadership · Office Bearers (2024–2025)</h3>
                      <span>Executive Council</span>
                    </div>
                  </Reveal>
                  <div className="execom-officer-grid">
                    {filteredOfficers.map((m, i) => renderCard(m, i))}
                  </div>
                </div>
              )}

              {/* Executive Committee Members */}
              {filteredMembers.length > 0 && (
                <div style={{ marginBottom: "50px" }}>
                  <Reveal>
                    <div className="execom-subheading">
                      <h3>Executive Committee Members</h3>
                      <span>Domain Directors</span>
                    </div>
                  </Reveal>
                  <div className="execom-member-grid">
                    {filteredMembers.map((m, i) => renderCard(m, i))}
                  </div>
                </div>
              )}

              {/* Senior Advisory Board */}
              {filteredAdvisors.length > 0 && (
                <div>
                  <Reveal>
                    <div className="execom-subheading">
                      <h3>Senior Advisory Board & Mentors</h3>
                      <span>Policy Advisors</span>
                    </div>
                  </Reveal>
                  <div className="execom-member-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
                    {filteredAdvisors.map((m, i) => renderCard(m, i))}
                  </div>
                </div>
              )}
            </>
          )}

          {activeCategory === "officer" && (
            <div className="execom-officer-grid">
              {filteredOfficers.map((m, i) => renderCard(m, i))}
            </div>
          )}

          {activeCategory === "member" && (
            <div className="execom-member-grid">
              {filteredMembers.map((m, i) => renderCard(m, i))}
            </div>
          )}

          {activeCategory === "advisor" && (
            <div className="execom-member-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
              {filteredAdvisors.map((m, i) => renderCard(m, i))}
            </div>
          )}

          {allFiltered.length === 0 && (
            <p className="note" style={{ textAlign: "center", padding: "40px 0" }}>
              No committee members match your search query. Try another keyword.
            </p>
          )}
        </div>
      </section>

      {/* Governance Charter Section */}
      <section className="section dim">
        <div className="wrap split">
          <Reveal>
            <p className="eyebrow">Committee Charter</p>
            <h2 className="display">Roles & Responsibilities</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lede">
              The IEEE CNAG Kerala Executive Committee steers the affinity group according to IEEE Region 10 and
              Section bylaws. It oversees the accredited roster of consultants, validates technical ethics
              guidelines, coordinates the flagship ConsulTalks knowledge series, and maintains institutional linkages
              with industries, universities, and government development bodies.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Member Details Modal */}
      <ExecomModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </main>
  );
}
