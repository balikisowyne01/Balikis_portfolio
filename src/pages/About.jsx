import { AvatarPlaceholder } from "../components/AvatarPlaceholder";
import { bioData, experienceData, educationData, certificationsData } from "../data/bioData";
import { 
  BarChart3, 
  Database, 
  Download, 
  GraduationCap, 
  Award, 
  Briefcase, 
  CheckCircle2, 
  Mail, 
  MapPin, 
  Calendar,
  Layers,
  HeartHandshake
} from "lucide-react";

export const About = () => {
  return (
    <div className="bg-light-main min-vh-100 py-5">
      <div className="container px-3 px-md-4">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="mb-5 text-center text-md-start">
          <span className="badge-category mb-2">Professional Background</span>
          <h1 className="fw-bold display-5 mb-2" style={{ color: '#0f172a' }}>
            About Nurudeen Balikis
          </h1>
          <p className="text-secondary lead fs-6" style={{ maxWidth: '680px' }}>
            Data Analyst & Business Intelligence Specialist transforming high-velocity data chaos into empirical strategic advantage.
          </p>
        </div>

        {/* ================= MAIN BIO & AVATAR ROW ================= */}
        <div className="row g-4 align-items-center mb-5 pb-4">
          <div className="col-12 col-lg-5 text-center">
            <div className="card card-modern p-4 text-center">
              <AvatarPlaceholder size={240} alt={bioData.name} className="mb-3" />
              <h4 className="fw-bold mb-1" style={{ color: '#0f172a' }}>{bioData.name}</h4>
              <p className="text-muted small mb-2">{bioData.title}</p>
              
              <div className="d-flex justify-content-center align-items-center gap-2 text-muted small mb-3">
                <MapPin size={14} style={{ color: '#0284c7' }} />
                <span>{bioData.location}</span>
              </div>

              <div className="d-flex justify-content-center gap-2">
                <a 
                  href="/Nurudeen_Balikis_CV.pdf"
                  download="Nurudeen_Balikis_CV.pdf"
                  className="btn btn-primary-gradient btn-sm px-3 py-2 text-decoration-none"
                  title="Download Nurudeen Balikis's CV"
                >
                  <Download size={14} />
                  <span>Download Resume (CV)</span>
                </a>
                <a href={`mailto:${bioData.email}`} className="btn btn-outline-gradient btn-sm px-3 py-2">
                  <Mail size={14} />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="card card-modern p-4 p-md-5">
              <h3 className="fw-bold mb-3" style={{ color: '#0f172a' }}>
                Turning Data Chaos into Executive Clarity
              </h3>

              <p className="text-secondary lh-lg mb-3">
                {bioData.bioIntro}
              </p>

              <p className="text-secondary lh-lg mb-4">
                {bioData.bioDetailed}
              </p>

              <div className="row g-3 pt-3 border-top">
                <div className="col-6 col-md-3">
                  <div className="fw-bold text-dark fs-5" style={{ color: '#0284c7' }}>SQL Databases</div>
                  <div className="small text-muted">MySQL & PostgreSQL</div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="fw-bold text-dark fs-5" style={{ color: '#0284c7' }}>Python Wrangling</div>
                  <div className="small text-muted">Pandas & NumPy</div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="fw-bold text-dark fs-5" style={{ color: '#0284c7' }}>BI & Office</div>
                  <div className="small text-muted">Power BI, Excel, Word</div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="fw-bold text-dark fs-5" style={{ color: '#0284c7' }}>Version Control</div>
                  <div className="small text-muted">Git & GitHub Workflow</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= ANALYTICAL VALUES ================= */}
        <div className="mb-5">
          <div className="text-center mb-4">
            <span className="badge-category mb-2">My Philosophy</span>
            <h3 className="fw-bold" style={{ color: '#0f172a' }}>The Pillars of My Analytical Work</h3>
          </div>

          <div className="row g-3">
            <div className="col-12 col-md-4">
              <div className="card card-modern p-4 h-100">
                <div className="p-2 rounded-2 bg-light text-primary d-inline-flex mb-3" style={{ width: 'fit-content' }}>
                  <Database size={22} style={{ color: '#0284c7' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#0f172a' }}>1. Uncompromising Data Integrity</h5>
                <p className="text-muted small mb-0 lh-base">
                  No analysis is credible without rigorous data sanitation. I audit source tables, flag anomalies, handle null values intentionally, and construct verified data dictionaries.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card card-modern p-4 h-100">
                <div className="p-2 rounded-2 bg-light text-primary d-inline-flex mb-3" style={{ width: 'fit-content' }}>
                  <BarChart3 size={22} style={{ color: '#059669' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#0f172a' }}>2. Business Context First</h5>
                <p className="text-muted small mb-0 lh-base">
                  Numbers without context are noise. I prioritize the underlying business objectives—whether reducing customer churn, optimizing freight logistics, or boosting marketing ROI.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card card-modern p-4 h-100">
                <div className="p-2 rounded-2 bg-light text-primary d-inline-flex mb-3" style={{ width: 'fit-content' }}>
                  <HeartHandshake size={22} style={{ color: '#4f46e5' }} />
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#0f172a' }}>3. Executive Storytelling</h5>
                <p className="text-muted small mb-0 lh-base">
                  Even the most sophisticated statistical regression is meaningless if leadership cannot digest it. I craft intuitive dashboards and concise narrative presentations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= WORK EXPERIENCE TIMELINE ================= */}
        <div className="mb-5">
          <div className="text-center text-md-start mb-4">
            <span className="badge-category mb-2">Track Record</span>
            <h3 className="fw-bold mb-1" style={{ color: '#0f172a' }}>
              Work Experience & Career Timeline
            </h3>
            <p className="text-muted small mb-0">
              Practical experience in data management, dashboard design, Excel instruction, and Python/SQL analytics.
            </p>
          </div>

          <div className="d-flex flex-column gap-3">
            {experienceData.map((item, index) => (
              <div key={index} className="card card-modern p-4">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
                  <div>
                    <h5 className="fw-bold mb-1" style={{ color: '#0f172a' }}>{item.role}</h5>
                    <div className="d-flex align-items-center gap-2 text-secondary small">
                      <span className="fw-semibold text-primary" style={{ color: '#0284c7' }}>{item.company}</span>
                      <span>•</span>
                      <span className="text-muted">{item.location}</span>
                    </div>
                  </div>
                  <div className="mt-2 mt-md-0">
                    <span className="badge-tech bg-light border px-3 py-1">
                      <Calendar size={13} className="me-1 inline" />
                      {item.period}
                    </span>
                  </div>
                </div>

                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  {item.highlights.map((point, i) => (
                    <li key={i} className="d-flex align-items-start gap-2 text-secondary small">
                      <CheckCircle2 size={16} className="text-success mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ================= EDUCATION & CERTIFICATIONS ================= */}
        <div className="row g-4">
          {/* Education */}
          <div className="col-12 col-md-6">
            <div className="card card-modern p-4 h-100">
              <div className="d-flex align-items-center gap-2 mb-3">
                <GraduationCap size={22} style={{ color: '#0284c7' }} />
                <h4 className="fw-bold mb-0" style={{ color: '#0f172a' }}>Education</h4>
              </div>

              {educationData.map((edu, idx) => (
                <div key={idx} className="p-3 bg-light rounded-3 border">
                  <h5 className="fw-bold fs-6 mb-1 text-dark">{edu.degree}</h5>
                  <div className="text-muted small mb-2">{edu.institution} • {edu.period}</div>
                  <p className="text-secondary small mb-0">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="col-12 col-md-6">
            <div className="card card-modern p-4 h-100">
              <div className="d-flex align-items-center gap-2 mb-3">
                <Award size={22} style={{ color: '#059669' }} />
                <h4 className="fw-bold mb-0" style={{ color: '#0f172a' }}>Verified Certifications</h4>
              </div>

              <div className="d-flex flex-column gap-2">
                {certificationsData.map((cert, idx) => (
                  <div key={idx} className="p-3 bg-light rounded-3 border d-flex justify-content-between align-items-center">
                    <div>
                      <div className="fw-bold small text-dark">{cert.name}</div>
                      <div className="text-muted" style={{ fontSize: '0.75rem' }}>{cert.issuer} • {cert.year}</div>
                    </div>
                    <span className="badge-tech bg-white border text-success fw-bold">
                      {cert.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
