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
            {member.image ? (
              <img src={member.image} alt={member.name} className="modal-avatar-img" />
            ) : (
              <span className="modal-initials">{member.initials}</span>
            )}
          </div>
          <div className="modal-title-group">
            <span className="modal-badge">{member.role}</span>
            <h3 className="modal-name">{member.name}</h3>
            <p className="modal-affiliation">{member.affiliation}</p>
            <span className="modal-grade">{member.ieeeGrade} · Term {member.year || "2026–2027"}</span>
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

          {(member.phone || member.email) && (
            <div className="modal-section">
              <h4>Direct Contact</h4>
              <div className="modal-contact-details">
                {member.phone && (
                  <p className="modal-contact-line">
                    <span className="modal-contact-label">Phone:</span>
                    <a href={`tel:${member.phone.replace(/[^0-9+]/g, "")}`} className="modal-contact-link">
                      📞 {member.phone}
                    </a>
                  </p>
                )}
                {member.email && (
                  <p className="modal-contact-line">
                    <span className="modal-contact-label">Email:</span>
                    <a href={`mailto:${member.email}?subject=IEEE%20CNAG%20Kerala%20Inquiry`} className="modal-contact-link">
                      ✉️ {member.email}
                    </a>
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="modal-actions">
            {member.phone && (
              <a
                href={`tel:${member.phone.replace(/[^0-9+]/g, "")}`}
                className="btn btn-primary"
              >
                Call: {member.phone}
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                LinkedIn Profile ↗
              </a>
            )}
            <button className="btn btn-ghost" onClick={onClose}>
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
