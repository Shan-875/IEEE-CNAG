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
        <div className="nav-scan-wrapper" aria-hidden="true">
          <div className="nav-scan" />
        </div>
        <div className="wrap nav-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="IEEE Kerala Section CNAG Home">
            <img
              src={`${import.meta.env.BASE_URL}ieee-logo.svg`}
              alt="IEEE - Advancing Technology for Humanity"
              className="brand-ieee-logo"
            />
            <span className="brand-sep" aria-hidden="true" />
            <span className="brand-copy">
              <strong>IEEE Kerala Section</strong>
              <em>Consultants’ Network · CNAG</em>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav nav" aria-label="Desktop Navigation">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/join" className="nav-cta">
              Join CNAG
            </Link>
          </nav>

          {/* Mobile 3-line hamburger menu toggle button in right top corner */}
          <button
            type="button"
            className={`menu-btn ${open ? "is-open" : ""}`}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-line" />
            <span className="menu-line" />
            <span className="menu-line" />
          </button>
        </div>
      </div>

      {/* Dedicated Mobile Navigation Drawer */}
      <div
        id="mobile-nav"
        className={`mobile-nav-drawer ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="mobile-nav-scroll">
          <div className="mobile-nav-brand">
            <img
              src={`${import.meta.env.BASE_URL}ieee-logo.svg`}
              alt="IEEE Logo"
              className="mobile-brand-logo"
            />
            <div className="mobile-brand-text">
              <strong>IEEE Kerala Section</strong>
              <span>Consultants’ Network · CNAG</span>
            </div>
          </div>
          <div className="mobile-nav-links">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className="mobile-nav-link"
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
                <span className="mobile-arrow" aria-hidden="true">→</span>
              </NavLink>
            ))}
            <Link
              to="/join"
              className="mobile-nav-cta"
              onClick={() => setOpen(false)}
            >
              Join CNAG
            </Link>
          </div>

          <div className="mobile-nav-footer">
            <span className="mobile-footer-title">IEEE Quick Links</span>
            <div className="mobile-ieee-pills">
              {ieeeLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
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
