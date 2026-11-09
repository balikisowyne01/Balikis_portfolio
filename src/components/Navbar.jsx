import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BarChart2, FileDown, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-light-glass sticky-top py-3">
      <div className="container">
        {/* Brand Logo */}
        <Link 
          className="navbar-brand d-flex align-items-center brand-title fs-4" 
          to="/" 
          onClick={closeNav}
        >
          <div 
            className="p-1 rounded-2 me-2 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: '#0284c7', color: '#ffffff' }}
          >
            <BarChart2 size={20} />
          </div>
          <span>Balikis</span>
          <span style={{ color: '#0284c7' }} className="ms-1 fw-bold">.Data</span>
        </Link>

        {/* Mobile Hamburger Toggler Button */}
        <button 
          className="navbar-toggler border-0 shadow-none p-1" 
          type="button" 
          onClick={() => setNavOpen(!navOpen)}
          aria-controls="navbarNav" 
          aria-expanded={navOpen} 
          aria-label="Toggle navigation"
        >
          {navOpen ? <X size={26} color="#0f172a" /> : <Menu size={26} color="#0f172a" />}
        </button>

        {/* Collapsible Links Container */}
        <div className={`collapse navbar-collapse ${navOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-1 gap-lg-2 my-3 my-lg-0">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`} 
                to="/"
                onClick={closeNav}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`} 
                to="/about"
                onClick={closeNav}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`} 
                to="/skills"
                onClick={closeNav}
              >
                Skills & Stack
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`} 
                to="/projects"
                onClick={closeNav}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`} 
                to="/services"
                onClick={closeNav}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`} 
                to="/contact"
                onClick={closeNav}
              >
                Contact
              </NavLink>
            </li>
            
            {/* Resume / CV CTA Button */}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a 
                href="/Nurudeen_Balikis_CV.pdf"
                download="Nurudeen_Balikis_CV.pdf"
                className="btn btn-primary-gradient btn-sm px-3 py-2 border-0 text-decoration-none"
                title="Download Nurudeen Balikis's CV"
                onClick={closeNav}
              >
                <FileDown size={15} />
                <span>Download CV</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
