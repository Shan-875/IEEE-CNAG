import type { CommitteeMember } from "../data";

interface ExecomModalProps {
  member: CommitteeMember | null;
  onClose: () => void;
}

export function ExecomModal({ member, onClose }: ExecomModalProps) {
  if (!member) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal-header">
          <div className="modal-avatar">
            <span className="modal-initials">{member.initials}</span>
          </div>
          <div className="modal-title-group">
            <span className="modal-badge">{member.role}</span>
            <h3 className="modal-name">{member.name}</h3>
            <p className="modal-affiliation">{member.affiliation}</p>
            <span className="modal-grade">{member.ieeeGrade} · Term {member.year || "2024–2025"}</span>
          </div>
        </div>

        <div className="modal-body">
          {member.bio && (
            <div className="modal-section">
              <h4>Profile & Experience</h4>
              <p>{member.bio}</p>
            </div>
          )}

          {member.domains && member.domains.length > 0 && (
            <div className="modal-section">
              <h4>Advisory Domains & Focus</h4>
              <div className="modal-tags">
                {member.domains.map((d) => (
                  <span key={d} className="modal-tag">
                    #{d}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="modal-actions">
            {member.email && (
              <a
                href={`mailto:${member.email}?subject=IEEE%20CNAG%20Kerala%20Consultancy%20Inquiry`}
                className="btn gold"
              >
                Contact Member
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn ghost"
              >
                LinkedIn Profile ↗
              </a>
            )}
            <button className="btn ghost" onClick={onClose}>
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
