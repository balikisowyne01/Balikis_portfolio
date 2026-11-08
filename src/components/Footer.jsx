import { Link } from 'react-router-dom';
import { bioData } from '../data/bioData';
import { BarChart2, Mail, MapPin, Heart, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-top py-5 mt-auto">
      <div className="container">
        <div className="row g-4 justify-content-between mb-5">
          {/* Brand & Summary */}
          <div className="col-12 col-lg-5">
            <Link className="d-flex align-items-center brand-title fs-4 mb-3 text-decoration-none" to="/">
              <div 
                className="p-1 rounded-2 me-2 d-flex align-items-center justify-content-center"
                style={{ backgroundColor: '#0284c7', color: '#ffffff' }}
              >
                <BarChart2 size={20} />
              </div>
              <span className="fw-bold">{bioData.name}</span>
              <span style={{ color: '#0284c7' }} className="ms-1 fw-bold">.Data</span>
            </Link>
            <p className="text-secondary small mb-3 lh-base" style={{ maxWidth: '420px' }}>
              {bioData.tagline}
            </p>
            <div className="d-flex align-items-center gap-2 text-muted small mb-2">
              <MapPin size={15} style={{ color: '#0284c7' }} />
              <span>{bioData.location}</span>
            </div>
            <div className="d-flex align-items-center gap-2 text-muted small">
              <span className="pulse-dot"></span>
              <span className="fw-semibold text-success">{bioData.availability}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold text-dark small text-uppercase mb-3">Portfolio</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <Link to="/" className="text-decoration-none text-secondary hover-cyan">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-decoration-none text-secondary hover-cyan">About Balikis</Link>
              </li>
              <li>
                <Link to="/skills" className="text-decoration-none text-secondary hover-cyan">Technical Stack</Link>
              </li>
              <li>
                <Link to="/projects" className="text-decoration-none text-secondary hover-cyan">Projects</Link>
              </li>
              <li>
                <Link to="/services" className="text-decoration-none text-secondary hover-cyan">Analytics Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none text-secondary hover-cyan">Hire & Consult</Link>
              </li>
            </ul>
          </div>

          {/* Core Analytics Tech */}
          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="fw-bold text-dark small text-uppercase mb-3">Specializations</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary">
              <li>Power BI & DAX</li>
              <li>SQL (MySQL & PostgreSQL)</li>
              <li>Python (Pandas & NumPy)</li>
              <li>Microsoft Excel & PivotTables</li>
              <li>Microsoft Word Reports</li>
              <li>Git & GitHub Version Control</li>
            </ul>
          </div>

          {/* Direct Connect */}
          <div className="col-12 col-md-5 col-lg-3">
            <h6 className="fw-bold text-dark small text-uppercase mb-3">Get In Touch</h6>
            <p className="text-secondary small mb-3">
              Looking for a data analyst to evaluate metrics, construct KPI dashboards, or audit database models?
            </p>
            <div className="d-flex gap-2">
              <a 
                href={bioData.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-sm btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a 
                href={bioData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-sm btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a 
                href={`mailto:${bioData.email}`} 
                className="btn btn-sm btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-strip */}
        <div className="border-top pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 small text-muted">
          <div>
            © {currentYear} <strong>{bioData.name}</strong>. All rights reserved. Data Analyst & BI Specialist.
          </div>
          <div className="d-flex align-items-center gap-1">
            <span>Precision Data Engineering & Strategic Analytics</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
