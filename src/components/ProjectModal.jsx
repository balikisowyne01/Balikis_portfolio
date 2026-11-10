import { X, ExternalLink, CheckCircle2, TrendingUp, Calendar, Building, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content-custom p-4 p-md-5 position-relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn btn-sm btn-light position-absolute top-0 end-0 m-3 rounded-circle p-2 border"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Header Tags */}
        <div className="d-flex align-items-center gap-2 mb-3 flex-wrap">
          <span className="badge-category">{project.categoryLabel}</span>
          <span className="badge-tech">{project.badge}</span>
        </div>

        {/* Title */}
        <h3 className="fw-bold mb-2" style={{ color: '#0f172a' }}>
          {project.title}
        </h3>

        {/* Sub Meta */}
        <div className="d-flex align-items-center gap-4 text-muted small mb-4 pb-3 border-bottom flex-wrap">
          <div className="d-flex align-items-center gap-1">
            <Building size={14} />
            <span>{project.client}</span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <Calendar size={14} />
            <span>{project.period}</span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <Layers size={14} />
            <span>{project.type}</span>
          </div>
        </div>

        {/* Business Impact Banner */}
        <div 
          className="p-3 rounded-3 mb-4 d-flex align-items-start gap-3 border"
          style={{ backgroundColor: '#ecfdf5', borderColor: '#a7f3d0' }}
        >
          <div 
            className="p-2 rounded-circle"
            style={{ backgroundColor: '#10b981', color: '#ffffff' }}
          >
            <TrendingUp size={18} />
          </div>
          <div>
            <span className="fw-bold d-block text-success" style={{ fontSize: '0.85rem' }}>
              Quantifiable Business Impact
            </span>
            <p className="mb-0 fw-semibold text-dark small">
              {project.impact}
            </p>
          </div>
        </div>

        {/* Key Metrics Strip */}
        {project.metrics && (
          <div className="row g-2 mb-4">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="col-6 col-md-3">
                <div className="metric-pill">
                  <div className="metric-val">{metric.value}</div>
                  <div className="metric-lbl">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Visual Gallery / Output Plots */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-4">
            <h6 className="fw-bold text-muted small text-uppercase mb-2">Project Visualizations & Charts</h6>
            <div className="row g-2">
              {project.gallery.map((imgSrc, i) => (
                <div key={i} className="col-12 col-sm-6">
                  <div className="border rounded-3 overflow-hidden bg-white shadow-sm p-1 text-center">
                    <img 
                      src={imgSrc} 
                      alt={`${project.title} visualization ${i + 1}`} 
                      className="img-fluid w-100" 
                      style={{ maxHeight: '180px', objectFit: 'contain' }}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Overview */}
        <div className="mb-4">
          <h5 className="fw-bold mb-2" style={{ color: '#0f172a' }}>Project Overview & Methodology</h5>
          <p className="text-secondary lh-base mb-3">
            {project.desc}
          </p>
        </div>

        {/* Key Features & Deliverables */}
        <div className="mb-4">
          <h5 className="fw-bold mb-2" style={{ color: '#0f172a' }}>Key Technical Deliverables</h5>
          <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
            {project.features.map((feature, idx) => (
              <li key={idx} className="d-flex align-items-start gap-2 text-secondary small">
                <CheckCircle2 size={16} className="text-primary mt-1 flex-shrink-0" style={{ color: '#0284c7' }} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools and Tech Stack */}
        <div className="mb-4">
          <h6 className="fw-bold text-muted small text-uppercase mb-2">Technologies & Tooling</h6>
          <div className="d-flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="badge-tech">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="d-flex justify-content-end gap-2 pt-3 border-top flex-wrap">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-dark-pill"
            >
              <GithubIcon size={16} />
              <span>GitHub Repository</span>
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary-gradient"
            >
              <span>Live Dashboard / Demo</span>
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
