import { useState } from "react";
import { projectsData, projectCategories } from "../data/projectsData";
import { ProjectModal } from "../components/ProjectModal";
import { GithubIcon } from "../components/SocialIcons";
import { 
  Search, 
  Eye, 
  ExternalLink, 
  Layers, 
  TrendingUp, 
  CheckCircle2,
  Filter
} from "lucide-react";

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Filter projects by category and search term
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = 
      selectedCategory === "all" || project.category === selectedCategory;
    
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      query === "" ||
      project.title.toLowerCase().includes(query) ||
      project.summary.toLowerCase().includes(query) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-light-main min-vh-100 py-5">
      <div className="container px-3 px-md-4">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center mb-5">
          <span className="badge-category mb-2">Applied Business Intelligence & SQL</span>
          <h1 className="fw-bold display-5 mb-2" style={{ color: '#0f172a' }}>
            Data Analytics Projects
          </h1>
          <p className="text-secondary lead fs-6" style={{ maxWidth: '680px', margin: '0 auto' }}>
            Explore real-world analytical projects covering sales performance in Power BI, relational database queries in MySQL & PostgreSQL, data cleaning with Pandas & NumPy, and operational tracking in Excel & Word.
          </p>
        </div>

        {/* ================= CONTROLS & FILTER BAR ================= */}
        <div className="card card-modern p-4 mb-5">
          <div className="row g-3 align-items-center justify-content-between">
            {/* Search Input */}
            <div className="col-12 col-md-5">
              <div className="position-relative">
                <Search 
                  size={18} 
                  className="position-absolute top-50 translate-middle-y ms-3 text-muted" 
                />
                <input
                  type="text"
                  placeholder="Search by tech (e.g., SQL, Power BI, Pandas, Excel, Word)..."
                  className="form-control form-control-modern ps-5"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="col-12 col-md-7">
              <div className="d-flex gap-2 flex-wrap justify-content-md-end">
                {projectCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`btn btn-sm btn-tab-filter ${selectedCategory === cat.id ? 'active' : ''}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= PROJECT COUNT INDICATOR ================= */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <span className="small text-muted fw-semibold">
            Showing <strong className="text-dark">{filteredProjects.length}</strong> of {projectsData.length} Projects
          </span>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")} 
              className="btn btn-sm btn-link text-decoration-none p-0 text-muted"
            >
              Clear search filter
            </button>
          )}
        </div>

        {/* ================= PROJECT CARDS GRID ================= */}
        {filteredProjects.length === 0 ? (
          <div className="card card-modern p-5 text-center my-4">
            <Layers size={40} className="text-muted mx-auto mb-3" />
            <h4 className="fw-bold text-dark mb-1">No Matching Projects Found</h4>
            <p className="text-muted small mb-3">
              No projects match your search query "{searchQuery}". Try searching for terms like "SQL", "Python", "Power BI", or "Excel".
            </p>
            <div>
              <button 
                onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }} 
                className="btn btn-outline-gradient btn-sm"
              >
                Reset Filters
              </button>
            </div>
          </div>
        ) : (
          <div className="row g-4">
            {filteredProjects.map((project) => (
              <div key={project.id} className="col-12 col-lg-6">
                <div className="card card-modern p-4 h-100 d-flex flex-column justify-content-between">
                  <div>
                    {/* Top Meta */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="badge-category">{project.categoryLabel}</span>
                      <span className="badge-tech">{project.badge}</span>
                    </div>

                    {/* Title */}
                    <h4 className="fw-bold mb-2" style={{ color: '#0f172a' }}>
                      {project.title}
                    </h4>

                    {/* Optional Project Visualization Thumbnail */}
                    {project.image && (
                      <div className="mb-3 rounded-3 overflow-hidden border bg-white p-1 text-center shadow-sm">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="img-fluid" 
                          style={{ maxHeight: '160px', objectFit: 'contain' }}
                          loading="lazy" 
                        />
                      </div>
                    )}

                    {/* Short Description */}
                    <p className="text-secondary small mb-3 lh-base">
                      {project.summary}
                    </p>

                    {/* Business Impact Box */}
                    <div 
                      className="p-3 rounded-3 mb-3 border small"
                      style={{ backgroundColor: '#ecfdf5', borderColor: '#a7f3d0' }}
                    >
                      <strong className="text-success d-block mb-1">Empirical Business Impact:</strong>
                      <span className="text-dark fw-medium">{project.impact}</span>
                    </div>

                    {/* Quantified Metrics */}
                    {project.metrics && (
                      <div className="row g-2 mb-3">
                        {project.metrics.map((m, idx) => (
                          <div key={idx} className="col-6 col-sm-3">
                            <div className="metric-pill">
                              <div className="metric-val">{m.value}</div>
                              <div className="metric-lbl">{m.label}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="d-flex flex-wrap gap-1 mb-4">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="badge-tech">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="d-flex justify-content-between align-items-center pt-3 border-top flex-wrap gap-2">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="btn btn-neutral-pill btn-sm"
                    >
                      <Eye size={15} />
                      <span>View Project Details</span>
                    </button>

                    <div className="d-flex gap-2">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-dark-pill btn-sm"
                        >
                          <GithubIcon size={14} />
                          <span>Code Repo</span>
                        </a>
                      )}
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
        )}

      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal 
        project={activeModalProject} 
        onClose={() => setActiveModalProject(null)} 
      />
    </div>
  );
};
