import { useState } from "react";
import { skillsData } from "../data/skillsData";
import { 
  BarChart3, 
  Database, 
  Code2, 
  FileSpreadsheet,
  FileText,
  GitBranch,
  TrendingUp, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Workflow 
} from "lucide-react";

export const Skills = () => {
  const [selectedToolFilter, setSelectedToolFilter] = useState("all");

  const iconMap = {
    BarChart3: BarChart3,
    Database: Database,
    Code2: Code2,
    FileSpreadsheet: FileSpreadsheet,
    FileText: FileText,
    GitBranch: GitBranch,
    TrendingUp: TrendingUp
  };

  const toolCategories = ["all", "Relational DB", "Data Wrangling", "BI & Dashboards", "Spreadsheet", "Reporting", "Version Control"];

  const filteredTools = selectedToolFilter === "all"
    ? skillsData.toolsCloud
    : skillsData.toolsCloud.filter(t => t.type.toLowerCase().includes(selectedToolFilter.toLowerCase()));

  return (
    <div className="bg-light-main min-vh-100 py-5">
      <div className="container px-3 px-md-4">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center mb-5">
          <span className="badge-category mb-2">Technical Capabilities</span>
          <h1 className="fw-bold display-5 mb-2" style={{ color: '#0f172a' }}>
            Data Analytics Skills & Tooling
          </h1>
          <p className="text-secondary lead fs-6" style={{ maxWidth: '640px', margin: '0 auto' }}>
            A rigorous technical stack engineered for data ingestion, relational modeling, advanced statistics, and executive reporting.
          </p>
        </div>

        {/* ================= CATEGORIZED SKILL CARDS WITH PROGRESS BARS ================= */}
        <div className="row g-4 mb-5">
          {skillsData.coreCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || BarChart3;
            return (
              <div key={idx} className="col-12 col-lg-6">
                <div className="card card-modern p-4 p-md-5 h-100">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div 
                      className="p-3 rounded-circle d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: '#e0f2fe', color: '#0284c7' }}
                    >
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="fw-bold mb-1" style={{ color: '#0f172a' }}>{cat.category}</h4>
                      <p className="text-muted small mb-0">{cat.description}</p>
                    </div>
                  </div>

                  <div className="d-flex flex-column gap-3 mt-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx}>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <div className="d-flex align-items-center gap-2">
                            <span className="fw-semibold small text-dark">{skill.name}</span>
                            <span className="badge-tech py-0 px-2" style={{ fontSize: '0.68rem' }}>
                              {skill.badge}
                            </span>
                          </div>
                          <span className="text-muted small fw-bold">{skill.level}%</span>
                        </div>
                        <div className="progress-modern">
                          <div 
                            className="progress-bar-modern h-100"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= INTERACTIVE TOOLING CLOUD ================= */}
        <div className="card card-modern p-4 p-md-5 mb-5">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4 pb-3 border-bottom">
            <div>
              <span className="badge-category mb-1">Ecosystem</span>
              <h3 className="fw-bold mb-0" style={{ color: '#0f172a' }}>
                Technology & Tooling Matrix
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="d-flex gap-1 flex-wrap">
              {toolCategories.map((type, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedToolFilter(type)}
                  className={`btn btn-sm btn-tab-filter text-capitalize ${selectedToolFilter === type ? 'active' : ''}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="row g-3">
            {filteredTools.map((tool, idx) => (
              <div key={idx} className="col-6 col-sm-4 col-md-3">
                <div className="p-3 rounded-3 bg-light border text-center transition-all h-100 d-flex flex-column justify-content-center align-items-center">
                  <div 
                    className="mb-2"
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: tool.color
                    }}
                  ></div>
                  <span className="fw-bold text-dark small d-block mb-1">{tool.name}</span>
                  <span className="text-muted" style={{ fontSize: '0.72rem' }}>{tool.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 6-STEP ANALYTICAL WORKFLOW ================= */}
        <div className="mb-5">
          <div className="text-center mb-5">
            <div className="d-inline-flex align-items-center gap-2 mb-2">
              <Workflow size={18} style={{ color: '#0284c7' }} />
              <span className="badge-category">Process Architecture</span>
            </div>
            <h2 className="fw-bold display-6" style={{ color: '#0f172a' }}>
              My 6-Stage Analytical Lifecycle
            </h2>
            <p className="text-secondary small" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Every data project follows a battle-tested roadmap ensuring accuracy, reproducible logic, and stakeholder alignment.
            </p>
          </div>

          <div className="row g-4">
            {skillsData.workflowSteps.map((item, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div className="card card-modern p-4 h-100 position-relative overflow-hidden">
                  <div 
                    className="position-absolute top-0 end-0 m-3 fw-bold display-6 text-light"
                    style={{ color: '#e2e8f0', userSelect: 'none', zIndex: 0 }}
                  >
                    {item.step}
                  </div>
                  <div className="position-relative z-1">
                    <span 
                      className="badge rounded-pill mb-3 px-3 py-1 fw-bold"
                      style={{ backgroundColor: '#e0f2fe', color: '#0369a1' }}
                    >
                      Step {item.step}
                    </span>
                    <h5 className="fw-bold mb-2" style={{ color: '#0f172a' }}>
                      {item.title}
                    </h5>
                    <p className="text-muted small mb-0 lh-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
