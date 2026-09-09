import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export function FloatingDock() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(location.pathname !== "/" || window.scrollY > 220);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsVisible(true);
      return;
    }

    setIsVisible(window.scrollY > 220);
    const handleScroll = () => {
      setIsVisible(window.scrollY > 220);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const links = [
    { to: "/", label: "Home", icon: "⌂" },
    { to: "/about", label: "About", icon: "✦" },
    { to: "/execom", label: "Execom", icon: "❖" },
    { to: "/consultants", label: "Directory", icon: "◈" },
    { to: "/events", label: "ConsulTalks", icon: "⚡" },
    { to: "/join", label: "Enrol", icon: "→", highlight: true },
  ];

  return (
    <nav
      className={`floating-dock-wrapper ${isVisible ? "is-visible" : "is-hidden"}`}
      aria-label="Quick Dock Navigation"
    >
      <div className="floating-dock-pill">
        <div className="dock-status-beacon" title="IEEE CNAG Kerala Section Active Roster">
          <span className="beacon-pulse" />
          <span className="beacon-dot" />
        </div>

        <div className="dock-links">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`dock-link ${isActive ? "active" : ""} ${link.highlight ? "dock-cta" : ""}`}
              >
                <span className="dock-icon">{link.icon}</span>
                <span className="dock-label">{link.label}</span>
                {isActive && <span className="dock-active-glow" />}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
