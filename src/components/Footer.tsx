import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap foot-grid">
        <div>
          <p className="foot-kicker">IEEE Kerala Section</p>
          <h2>Consultants’ Network Affinity Group (CNAG)</h2>
          <p className="foot-lead">
            The premier professional affinity group uniting independent consultants, certified engineering
            practitioners, and IEEE members across Kerala — Connect, Ideate, Innovate.
          </p>
        </div>
        <div>
          <p className="foot-kicker">Navigation</p>
          <Link to="/about">About CNAG-KS</Link>
          <Link to="/execom">Executive Committee</Link>
          <Link to="/consultants">Find a Consultant</Link>
          <Link to="/events">ConsulTalks & Events</Link>
          <Link to="/resources">Resources & Library</Link>
          <Link to="/join">Join as Consultant</Link>
        </div>
        <div>
          <p className="foot-kicker">Section Headquarters</p>
          <address>
            HarmonIEEE, 1st Floor, Cherian’s Square
            <br />
            Ambujavilasam Road, PB77, GPO
            <br />
            Thiruvananthapuram, Kerala 695001, India
          </address>
          <a href="mailto:ieeekerala@gmail.com">ieeekerala@gmail.com</a>
        </div>
        <div>
          <p className="foot-kicker">Global IEEE Links</p>
          <a href="https://www.ieee.org/" target="_blank" rel="noreferrer">
            IEEE.org ↗
          </a>
          <a href="https://ieeekerala.org/" target="_blank" rel="noreferrer">
            IEEE Kerala Section ↗
          </a>
          <a href="https://ieee-collabratec.ieee.org/" target="_blank" rel="noreferrer">
            IEEE Collabratec ↗
          </a>
          <a href="https://standards.ieee.org/" target="_blank" rel="noreferrer">
            IEEE Standards ↗
          </a>
          <a href="https://www.ieee.org/security-privacy.html" target="_blank" rel="noreferrer">
            Privacy Policy ↗
          </a>
        </div>
      </div>
      <div className="wrap foot-legal">
        <p>
          © {new Date().getFullYear()} IEEE Kerala Section Consultants’ Network Affinity Group (CNAG).
          All rights reserved. Use of this website signifies your agreement to IEEE Terms and Conditions.
          IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.
        </p>
      </div>
    </footer>
  );
}
