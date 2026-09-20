import { useMemo, useState } from "react";
import {
  professionalExecom,
  studentExecom,
  executiveCommittee,
  type CommitteeMember,
} from "../data";
import { Reveal } from "../components/Reveal";
import { ExecomModal } from "../components/ExecomModal";
import { TiltCard } from "../components/TiltCard";
import { LaserLine } from "../components/LaserLine";

export function Execom() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "professional" | "student">("all");
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

  const filteredProfessional = useMemo(() => filterList(professionalExecom), [search]);
  const filteredStudent = useMemo(() => filterList(studentExecom), [search]);
  const allFiltered = useMemo(() => filterList(executiveCommittee), [search]);

  const renderCard = (member: CommitteeMember, i: number) => (
    <Reveal key={member.id} delay={(i % 4) * 60}>
      <TiltCard
        maxRotation={10}
        glowColor={member.category === "officer" ? "gold" : member.category === "advisor" ? "maroon" : "green"}
        hasLaser={true}
        className="execom-card"
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
        <div className="execom-card-media">
          {member.image ? (
            <img src={member.image} alt={member.name} className="execom-card-img" />
          ) : (
            <div className="execom-card-placeholder">
              <span>{member.initials}</span>
            </div>
          )}
          <div className="execom-card-overlay">
            <span className="execom-role-badge">{member.role}</span>
          </div>
        </div>

        <div className="execom-card-body">
          <h3 className="execom-name">{member.name}</h3>
          <p className="execom-affiliation">{member.affiliation}</p>

          <div className="execom-contact-strip">
            {member.phone && (
              <a
                href={`tel:${member.phone.replace(/[^0-9+]/g, "")}`}
                onClick={(e) => e.stopPropagation()}
                className="execom-contact-chip execom-phone-chip"
                title={`Call ${member.name}`}
              >
                📞 {member.phone}
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}?subject=IEEE%20CNAG%20Kerala%20Inquiry`}
                onClick={(e) => e.stopPropagation()}
                className="execom-contact-chip execom-email-chip"
                title={`Email ${member.name}: ${member.email}`}
              >
                ✉️ {member.email}
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="execom-contact-chip execom-linkedin-chip"
                title={`${member.name} on LinkedIn`}
              >
                in LinkedIn
              </a>
            )}
          </div>

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
        </div>
      </TiltCard>
    </Reveal>
  );

  return (
    <main className="page">
      <header className="page-hero">
        <p className="eyebrow">Governance & Structure</p>
        <h1 className="display">Executive Committee 2026–2027</h1>
        <p className="lede">
          Governing council of the IEEE Kerala Section Consultants’ Network Affinity Group (CNAG-KS),
          comprising the Professional Executive Committee and Student Executive Committee coordinators.
        </p>

        <LaserLine color="gold" width="260px" />

        <label className="search">
          <span className="sr">Search Executive Committee</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, role (Chair, Secretary, Coordinator...), or domain..."
          />
        </label>
      </header>

      <section className="section">
        <div className="wrap">
          {/* Category Filter Tabs */}
          <div className="filter-tabs" style={{ marginBottom: "36px" }}>
            <button
              className={`filter-tab ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All Committee Members ({executiveCommittee.length})
            </button>
            <button
              className={`filter-tab ${activeTab === "professional" ? "active" : ""}`}
              onClick={() => setActiveTab("professional")}
            >
              Professional Execom ({professionalExecom.length})
            </button>
            <button
              className={`filter-tab ${activeTab === "student" ? "active" : ""}`}
              onClick={() => setActiveTab("student")}
            >
              Student Execom ({studentExecom.length})
            </button>
          </div>

          {/* All Tab: Professional Execom first, then Student Execom below */}
          {activeTab === "all" && (
            <>
              {filteredProfessional.length > 0 && (
                <div style={{ marginBottom: "54px" }}>
                  <div className="execom-subheading">
                    <h3>Professional Executive Committee (2026–2027)</h3>
                    <span>Core Section Leadership</span>
                  </div>
                  <div className="execom-lead-grid">
                    {filteredProfessional.map((m, i) => renderCard(m, i))}
                  </div>
                </div>
              )}

              {filteredStudent.length > 0 && (
                <div>
                  <div className="execom-subheading">
                    <h3>Student Executive Committee (2026–2027)</h3>
                    <span>Coordinators & Web Team</span>
                  </div>
                  <div className="execom-lead-grid">
                    {filteredStudent.map((m, i) => renderCard(m, i))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Professional Execom Tab */}
          {activeTab === "professional" && (
            <div>
              <div className="execom-subheading">
                <h3>Professional Executive Committee (2026–2027)</h3>
                <span>Core Section Leadership</span>
              </div>
              <div className="execom-lead-grid">
                {filteredProfessional.map((m, i) => renderCard(m, i))}
              </div>
            </div>
          )}

          {/* Student Execom Tab */}
          {activeTab === "student" && (
            <div>
              <div className="execom-subheading">
                <h3>Student Executive Committee (2026–2027)</h3>
                <span>Coordinators & Web Team</span>
              </div>
              <div className="execom-lead-grid">
                {filteredStudent.map((m, i) => renderCard(m, i))}
              </div>
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
