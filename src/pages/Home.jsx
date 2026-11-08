import { useState } from "react";
import { Link } from "react-router-dom";
import { AvatarPlaceholder } from "../components/AvatarPlaceholder";
import { DataVisualizer } from "../components/DataVisualizer";
import { ProjectModal } from "../components/ProjectModal";
import { projectsData } from "../data/projectsData";
import { bioData } from "../data/bioData";
import { 
  ArrowRight, 
  BarChart3, 
  Database, 
  FileSpreadsheet, 
  FileText,
  Code2,
  TrendingUp, 
  CheckCircle2, 
  ExternalLink, 
  Eye, 
  Award,
  Sparkles
} from "lucide-react";

export const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Take the first 4 featured projects
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <div className="bg-light-main min-vh-100 py-5">
      <div className="container px-3 px-md-4">
        
        {/* ================= HERO SECTION ================= */}
        <div className="row align-items-center justify-content-between min-vh-75 mb-5 py-4">
          
          {/* Profile Avatar Column */}
          <div className="col-12 col-lg-5 text-center mb-5 mb-lg-0 order-1 order-lg-2">
            <AvatarPlaceholder size={260} alt={bioData.name} />
            
            {/* Quick Tech Badge Below Avatar */}
            <div className="mt-4">
              <span className="badge-tech d-inline-block px-3 py-2 shadow-sm">
                SQL (MySQL & PostgreSQL) • Python (Pandas & NumPy) • Power BI • Excel • Word • Git & GitHub
              </span>
            </div>

            <p className="small text-muted mt-2 mb-0">
              Transforming complex data into executive clarity
            </p>
          </div>

          {/* Text Content Column */}
          <div className="col-12 col-lg-7 text-center text-lg-start order-2 order-lg-1">
            <div className="mb-3">
              <span className="pulse-badge">
                <span className="pulse-dot"></span>
                {bioData.availability}
              </span>
            </div>

            <h2 className="fw-bold mb-2 fs-5" style={{ color: '#0284c7' }}>
              Hello, I'm
            </h2>
            <h1 className="fw-bold mb-3 display-4" style={{ color: '#0f172a' }}>
              {bioData.name}
            </h1>
            
            <h3 className="fw-bold mb-3 fs-4 text-gradient-cyan">
              {bioData.title}
            </h3>

            <p className="lead mb-4 fs-6 lh-lg fw-normal text-secondary" style={{ maxWidth: '640px' }}>
              I query and extract relational databases using SQL (MySQL & PostgreSQL), clean and transform datasets with Python (Pandas & NumPy), track reproducible code with Git & GitHub, build interactive dashboards in Microsoft Power BI, and deliver clear, actionable reports in Microsoft Excel and Microsoft Word.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start gap-3 flex-wrap">
              <Link to="/projects" className="btn btn-primary-gradient px-4 py-2">
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline-gradient px-4 py-2">
                Get In Touch
              </Link>
              <Link to="/skills" className="btn btn-neutral-pill px-4 py-2">
                View Tech Stack
              </Link>
            </div>
          </div>

        </div>

        {/* ================= METRICS STRIP ================= */}
        <div className="row g-3 mb-5 text-center">
          {bioData.stats.map((stat, idx) => (
            <div key={idx} className="col-6 col-md-3">
              <div className="card card-modern p-3 h-100">
                <span className="fw-bold fs-3" style={{ color: '#0284c7' }}>{stat.value}</span>
                <span className="small fw-semibold text-secondary">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ================= INTERACTIVE DATA VISUALIZER ================= */}
        <div className="mb-5">
          <DataVisualizer />
        </div>

        {/* ================= CORE VALUE PILLARS ================= */}
        <div className="mb-5 py-4">
          <div className="text-center mb-5">
            <div className="d-inline-flex align-items-center gap-2 mb-2">
              <Sparkles size={16} style={{ color: '#0284c7' }} />
              <span className="badge-category">Core Expertise</span>
            </div>
            <h2 className="fw-bold display-6" style={{ color: '#0f172a' }}>
              How I Drive Business Impact
            </h2>
            <p className="text-secondary small" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Rigorous analytical methodology combined with business intuition to solve mission-critical operational challenges.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card card-modern p-4 h-100">
                <div 
                  className="p-3 rounded-circle d-inline-flex mb-3"
                  style={{ backgroundColor: '#e0f2fe', color: '#0284c7', width: 'fit-content' }}
                >
                  <BarChart3 size={24} />
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#0f172a' }}>Power BI & DAX</h5>
                <p className="text-muted small mb-0 lh-base">
                  Crafting accessible, interactive Power BI dashboards with table relationships, dynamic DAX calculation measures, and category slicers.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="card card-modern p-4 h-100">
                <div 
                  className="p-3 rounded-circle d-inline-flex mb-3"
                  style={{ backgroundColor: '#ecfdf5', color: '#059669', width: 'fit-content' }}
                >
                  <Database size={24} />
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#0f172a' }}>SQL (MySQL & PostgreSQL)</h5>
                <p className="text-muted small mb-0 lh-base">
                  Querying relational databases with multi-table joins (INNER, LEFT), subqueries, and aggregations (GROUP BY, HAVING) to extract business data.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="card card-modern p-4 h-100">
                <div 
                  className="p-3 rounded-circle d-inline-flex mb-3"
                  style={{ backgroundColor: '#eef2ff', color: '#4f46e5', width: 'fit-content' }}
                >
                  <Code2 size={24} />
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#0f172a' }}>Python (Pandas & NumPy)</h5>
                <p className="text-muted small mb-0 lh-base">
                  Automating data cleaning, handling missing values, eliminating duplicate rows, restructuring DataFrames, and computing numerical metrics.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="card card-modern p-4 h-100">
                <div 
                  className="p-3 rounded-circle d-inline-flex mb-3"
                  style={{ backgroundColor: '#fef3c7', color: '#d97706', width: 'fit-content' }}
                >
                  <FileSpreadsheet size={24} />
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#0f172a' }}>Excel & Word Documentation</h5>
                <p className="text-muted small mb-0 lh-base">
                  Building dynamic PivotTables and XLOOKUP models in Microsoft Excel, and authoring formal executive business summaries in Microsoft Word.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FEATURED PROJECTS SECTION ================= */}
        <div className="mb-5">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
            <div>
              <span className="badge-category mb-2">Portfolio Highlights</span>
              <h2 className="fw-bold display-6 mb-1" style={{ color: '#0f172a' }}>
                Featured Projects
              </h2>
              <p className="text-muted small mb-0">
                Deep analytical explorations backed by measurable business ROI and technical rigor.
              </p>
            </div>
            <Link to="/projects" className="btn btn-outline-gradient btn-sm mt-3 mt-md-0">
              <span>View All Projects</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="row g-4">
            {featuredProjects.map((project) => (
              <div key={project.id} className="col-12 col-lg-6">
                <div className="card card-modern p-4 h-100 d-flex flex-column justify-content-between">
                  <div>
                    {/* Header Badges */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="badge-category">{project.categoryLabel}</span>
                      <span className="badge-tech">{project.badge}</span>
                    </div>

                    {/* Title */}
                    <h4 className="fw-bold mb-2" style={{ color: '#0f172a' }}>
                      {project.title}
                    </h4>

                    {/* Summary */}
                    <p className="text-secondary small mb-3 lh-base">
                      {project.summary}
                    </p>

                    {/* Impact Box */}
                    <div 
                      className="p-3 rounded-3 mb-3 border small"
                      style={{ backgroundColor: '#ecfdf5', borderColor: '#a7f3d0' }}
                    >
                      <strong className="text-success d-block mb-1">Business Impact:</strong>
                      <span className="text-dark fw-medium">{project.impact}</span>
                    </div>

                    {/* Metrics Row */}
                    {project.metrics && (
                      <div className="row g-2 mb-3">
                        {project.metrics.slice(0, 3).map((m, i) => (
                          <div key={i} className="col-4">
                            <div className="metric-pill">
                              <div className="metric-val">{m.value}</div>
                              <div className="metric-lbl">{m.label}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Pills */}
                    <div className="d-flex flex-wrap gap-1 mb-4">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="badge-tech">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn btn-neutral-pill btn-sm"
                    >
                      <Eye size={15} />
                      <span>View Project Details</span>
                    </button>

                    <div className="d-flex gap-2">
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-primary-gradient btn-sm"
                        >
                          <span>Live Dashboard</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CERTIFICATIONS & BADGES STRIP ================= */}
        <div className="card card-modern p-4 p-md-5 mb-5 bg-white">
          <div className="row align-items-center">
            <div className="col-12 col-md-4 text-center text-md-start mb-3 mb-md-0">
              <span className="badge-category mb-2">Qualifications</span>
              <h3 className="fw-bold mb-1" style={{ color: '#0f172a' }}>
                Industry Certifications
              </h3>
              <p className="text-muted small mb-0">
                Verified expertise across Microsoft, Google, and Python standards.
              </p>
            </div>
            <div className="col-12 col-md-8">
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <div className="p-3 rounded-3 bg-light border d-flex align-items-center gap-3">
                    <Award size={28} style={{ color: '#0284c7' }} />
                    <div>
                      <div className="fw-bold small text-dark">Data Analytics & Computing</div>
                      <div className="text-muted" style={{ fontSize: '0.75rem' }}>Stephotech Computer Institute (2026)</div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="p-3 rounded-3 bg-light border d-flex align-items-center gap-3">
                    <Award size={28} style={{ color: '#059669' }} />
                    <div>
                      <div className="fw-bold small text-dark">Senior School Certificate (WAEC)</div>
                      <div className="text-muted" style={{ fontSize: '0.75rem' }}>Iganmode Grammar School (2021)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CALL TO ACTION STRIP ================= */}
        <div 
          className="p-5 rounded-4 text-center text-white position-relative overflow-hidden shadow-lg"
          style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0369a1 100%)' }}
        >
          <div className="position-relative z-1" style={{ maxWidth: '640px', margin: '0 auto' }}>
            <span className="badge-category bg-white text-primary mb-3">Ready to Collaborate?</span>
            <h2 className="fw-bold display-6 mb-3">
              Have a Dataset Waiting to Unlock Revenue?
            </h2>
            <p className="lead fs-6 mb-4 opacity-90">
              Whether you need automated C-suite reporting, a custom Power BI dashboard, or an exploratory audit of your relational database, let's talk.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/contact" className="btn btn-primary-gradient px-4 py-2">
                <span>Start a Conversation</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn btn-outline-light px-4 py-2 rounded-pill">
                Explore Services
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};
