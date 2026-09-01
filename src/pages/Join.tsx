import { useState, type FormEvent } from "react";
import { domains } from "../data";
import { Reveal } from "../components/Reveal";

export function Join() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    member: "",
    path: "Consultant",
    domain: domains[0],
    expertise: "",
    note: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = [
      `Full Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `IEEE Member Number: ${formData.member || "N/A"}`,
      `Joining As: ${formData.path}`,
      `Primary Domain: ${formData.domain}`,
      `Specific Expertise: ${formData.expertise}`,
      `Note / Background: ${formData.note}`,
    ].join("%0D%0A");

    window.location.href = `mailto:ieeekerala@gmail.com?subject=IEEE%20CNAG%20Kerala%20Consultant%20Enrolment&body=${body}`;
    setSent(true);
  };

  return (
    <main className="page">
      <header className="page-hero">
        <p className="eyebrow">Membership & Roster Enrolment</p>
        <h1 className="display">Join IEEE Kerala CNAG</h1>
        <p className="lede">
          IEEE members, practicing engineering consultants, and senior technology leaders are invited
          to associate with Kerala Section's Consultants Network Affinity Group.
        </p>
      </header>

      <section className="section">
        <div className="wrap join-grid">
          <Reveal>
            <ol className="steps">
              <li>
                <strong>IEEE Membership Foundation</strong>
                <span>
                  Hold active IEEE membership or obtain one through Kerala Section to enjoy full affinity group voting
                  and roster rights.
                </span>
              </li>
              <li>
                <strong>Define Practice & Credentials</strong>
                <span>
                  Submit your engineering specializations, years of independent consulting practice, and past client impact.
                </span>
              </li>
              <li>
                <strong>Accreditation & Roster Entry</strong>
                <span>
                  Gain formal listing on the IEEE CNAG Kerala directory and access multi-disciplinary project syndicates.
                </span>
              </li>
            </ol>

            <div style={{ marginTop: "32px", padding: "24px", background: "var(--surface-subtle)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-subtle)" }}>
              <h4 style={{ margin: "0 0 8px", color: "var(--ieee-navy)", fontWeight: 700 }}>
                Need IEEE Membership?
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", margin: "0 0 16px" }}>
                You can join IEEE online in minutes to unlock IEEE Xplore, Collabratec, and section affinity group privileges.
              </p>
              <a
                className="btn btn-outline"
                href="https://www.ieee.org/membership/join/index.html"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: "0.82rem", padding: "8px 18px" }}
              >
                Join IEEE Global Portal ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="join-form" onSubmit={onSubmit}>
              <h3 style={{ margin: "0 0 8px", fontSize: "1.3rem", fontWeight: 800, color: "var(--ieee-navy)" }}>
                Expression of Interest Form
              </h3>
              <p style={{ margin: "0 0 16px", fontSize: "0.86rem", color: "var(--text-muted)" }}>
                Fill in your details below to begin the onboarding process with the Secretariat.
              </p>

              <label>
                Full Name *
                <input
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Er. Rajesh Kumar"
                />
              </label>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <label>
                  Email Address *
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                  />
                </label>
                <label>
                  Contact Number
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                  />
                </label>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <label>
                  IEEE Member No. (If Member)
                  <input
                    name="member"
                    value={formData.member}
                    onChange={(e) => setFormData({ ...formData, member: e.target.value })}
                    placeholder="e.g. 94123456"
                  />
                </label>
                <label>
                  Joining Pathway *
                  <select
                    name="path"
                    value={formData.path}
                    onChange={(e) => setFormData({ ...formData, path: e.target.value })}
                  >
                    <option value="Consultant">Independent Consultant</option>
                    <option value="Professional">Industry Professional</option>
                    <option value="Student">Student / Researcher</option>
                  </select>
                </label>
              </div>

              <label>
                Primary Practice Domain *
                <select
                  name="domain"
                  value={formData.domain}
                  onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                >
                  {domains.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Specific Technical Expertise *
                <input
                  name="expertise"
                  required
                  value={formData.expertise}
                  onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
                  placeholder="e.g. Grid Synchronization, ESG Audits, Embedded Linux, SCADA"
                />
              </label>

              <label>
                Brief Professional Summary / Note
                <textarea
                  name="note"
                  rows={3}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="Tell us about your consulting practice, years in industry, or what you hope to achieve through IEEE CNAG..."
                />
              </label>

              <button className="btn gold" type="submit" style={{ marginTop: "8px" }}>
                Submit Application to IEEE Kerala CNAG
              </button>

              {sent && (
                <div style={{ padding: "14px 18px", background: "rgba(184, 137, 74, 0.12)", borderRadius: "12px", border: "1px solid var(--line-gold)", color: "var(--maroon-deep)", fontSize: "0.88rem", fontWeight: 600 }}>
                  ✓ Your email client has been prepared. If your mail client did not open automatically, please send your details directly to <strong>ieeekerala@gmail.com</strong>.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
