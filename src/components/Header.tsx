import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ieeeLinks, nav } from "../data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-head">
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
        <div className="wrap nav-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark" aria-hidden="true">
              <span className="brand-orbit" />
              <span className="brand-core" />
            </span>
            <span className="brand-copy">
              <strong>IEEE Kerala Section</strong>
              <em>Consultants’ Network · CNAG</em>
            </span>
          </Link>

          <button
            className={`menu-btn ${open ? "is-open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>

          <nav className={`nav ${open ? "is-open" : ""}`}>
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
    </header>
  );
}
