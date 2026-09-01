import { useState } from "react";
import { events } from "../data";
import { Reveal } from "../components/Reveal";

export function Events() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeEvent, setActiveEvent] = useState<(typeof events)[0] | null>(null);

  const categories = ["all", "ConsulTalks", "Career", "Industry", "Built Environment", "Energy", "Network"];

  const filteredEvents = events.filter((e) => {
    if (selectedCategory === "all") return true;
    return e.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <main className="page">
      <header className="page-hero">
        <p className="eyebrow">Programmes & Knowledge Exchange</p>
        <h1 className="display">ConsulTalks & Technical Sessions</h1>
        <p className="lede">
          Explore flagship seminars, industry roundtables, and technical masterclasses curated by
          IEEE Kerala Section Consultants’ Network Affinity Group.
        </p>
      </header>

      <section className="section">
        <div className="wrap">
          {/* Category Filter Tabs */}
          <div className="filter-tabs" style={{ marginBottom: "36px" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === "all" ? "All Sessions" : cat}
              </button>
            ))}
          </div>

          {/* Event Grid */}
          <div className="event-grid">
            {filteredEvents.map((e, i) => (
              <Reveal key={e.id} delay={i * 70}>
                <article
                  className="event-card tall"
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveEvent(e)}
                >
                  <div className="event-img">
                    <img src={e.image} alt={e.title} loading="lazy" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p className="tag">{e.tag}</p>
                    <span style={{ fontSize: "0.7rem", color: "var(--ieee-blue)", fontWeight: 700 }}>
                      {e.badge}
                    </span>
                  </div>
                  <h3>{e.title}</h3>
                  <time>{e.date}</time>
                  <p>{e.summary}</p>
                  {e.highlights && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "12px" }}>
                      {e.highlights.map((h) => (
                        <span key={h} className="execom-tag" style={{ fontSize: "0.68rem" }}>
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      {activeEvent && (
        <div className="modal-overlay" onClick={() => setActiveEvent(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveEvent(null)}>
              ✕
            </button>
            <div className="modal-header">
              <div>
                <span className="modal-badge">{activeEvent.tag} · {activeEvent.date}</span>
                <h3 className="modal-name">{activeEvent.title}</h3>
              </div>
            </div>
            <div className="modal-body">
              <div style={{ maxHeight: "200px", overflow: "hidden", borderRadius: "var(--radius-md)", marginBottom: "18px" }}>
                <img src={activeEvent.image} alt={activeEvent.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="modal-section">
                <h4>Overview & Abstract</h4>
                <p>{activeEvent.summary}</p>
              </div>
              {activeEvent.highlights && (
                <div className="modal-section">
                  <h4>Session Key Takeaways</h4>
                  <div className="modal-tags">
                    {activeEvent.highlights.map((h) => (
                      <span key={h} className="modal-tag">
                        ✦ {h}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="modal-actions">
                <a
                  href="mailto:ieeekerala@gmail.com?subject=ConsulTalks%20Session%20Inquiry"
                  className="btn btn-primary"
                >
                  Inquire for Past Recordings / Slides
                </a>
                <button className="btn btn-ghost" onClick={() => setActiveEvent(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
