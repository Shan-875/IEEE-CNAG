import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ieeeLinks, nav } from "../data";

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [open]);

  return (
    <header className={`site-head ${open ? "is-nav-open" : ""}`}>
      <div className="ieee-bar">
        <div className="wrap ieee-bar-inner">
          {ieeeLinks.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <div className="nav-shell">
        <div className="nav-scan" aria-hidden="true" />
        <div className="wrap nav-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark" aria-hidden="true">
              <img src={`${import.meta.env.BASE_URL}cnag-mark.svg`} alt="" />
            </span>
            <span className="brand-copy">
              <strong>IEEE Kerala Section</strong>
              <em>Consultants’ Network · CNAG</em>
            </span>
          </Link>

          <button
            type="button"
            className={`menu-btn ${open ? "is-open" : ""}`}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-line" />
            <span className="menu-line" />
            <span className="menu-line" />
          </button>

          <nav id="primary-nav" className={`nav ${open ? "is-open" : ""}`}>
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/join" className="nav-cta" onClick={() => setOpen(false)}>
              Join CNAG
            </Link>
          </nav>
        </div>
      </div>

      {open && (
        <div
          className="nav-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
