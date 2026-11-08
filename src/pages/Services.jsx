import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { 
  BarChart3, 
  Database, 
  Brain, 
  Code2,
  FileSpreadsheet, 
  FileText,
  TrendingUp, 
  LineChart, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  HelpCircle
} from "lucide-react";

export const Services = () => {
  const iconMap = {
    BarChart3: BarChart3,
    Database: Database,
    Brain: Brain,
    Code2: Code2,
    FileSpreadsheet: FileSpreadsheet,
    FileText: FileText,
    TrendingUp: TrendingUp,
    LineChart: LineChart
  };

  return (
    <div className="bg-light-main min-vh-100 py-5">
      <div className="container px-3 px-md-4">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center mb-5">
          <span className="badge-category mb-2">Offerings & Engagements</span>
          <h1 className="fw-bold display-5 mb-2" style={{ color: '#0f172a' }}>
            Data Analytics & BI Services
          </h1>
          <p className="text-secondary lead fs-6" style={{ maxWidth: '680px', margin: '0 auto' }}>
            Tailored analytical solutions designed to optimize operations, eradicate reporting bottlenecks, and provide leadership with undeniable empirical clarity.
          </p>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="row g-4 mb-5">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || BarChart3;
            return (
              <div key={service.id} className="col-12 col-lg-6">
                <div className="card card-modern p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
                  <div>
                    {/* Header */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div 
                        className="p-3 rounded-circle d-flex align-items-center justify-content-center"
                        style={{ backgroundColor: '#e0f2fe', color: '#0284c7' }}
                      >
                        <Icon size={24} />
                      </div>
                      <span className="badge-category">{service.badge}</span>
                    </div>

                    {/* Title */}
                    <h4 className="fw-bold mb-2" style={{ color: '#0f172a' }}>
                      {service.title}
                    </h4>

                    {/* Description */}
                    <p className="text-secondary small mb-4 lh-base">
                      {service.description}
                    </p>

                    {/* Deliverables List */}
                    <div className="mb-4">
                      <h6 className="fw-bold text-muted small text-uppercase mb-2">Key Deliverables</h6>
                      <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="d-flex align-items-start gap-2 text-secondary small">
                            <CheckCircle2 size={16} className="text-success mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For Callout */}
                    <div 
                      className="p-3 rounded-3 mb-4 bg-light border small"
                    >
                      <strong className="text-dark d-block mb-1">Target Fit:</strong>
                      <span className="text-muted">{service.idealFor}</span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 border-top">
                    <Link 
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="btn btn-outline-gradient btn-sm w-100"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= FAQ STRIP ================= */}
        <div className="card card-modern p-4 p-md-5 mb-5 bg-white">
          <div className="text-center mb-4">
            <span className="badge-category mb-2">Clarity & Expectations</span>
            <h3 className="fw-bold mb-1" style={{ color: '#0f172a' }}>
              Frequently Asked Questions
            </h3>
            <p className="text-muted small">
              Common questions on timelines, data security, and engagement models.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="p-3 rounded-3 bg-light border h-100">
                <h6 className="fw-bold text-dark mb-2">How do you ensure data confidentiality and privacy?</h6>
                <p className="text-secondary small mb-0 lh-base">
                  All raw data is governed under strict NDAs. Where applicable, sensitive customer identification records (PII) are anonymized or masked prior to exploratory modeling, and row-level security (RLS) is applied on final dashboards.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="p-3 rounded-3 bg-light border h-100">
                <h6 className="fw-bold text-dark mb-2">What is the typical timeline for an executive Power BI dashboard?</h6>
                <p className="text-secondary small mb-0 lh-base">
                  Standard BI dashboards generally take between 1 to 3 weeks depending on source data cleanliness, schema complexity, custom DAX metrics required, and stakeholder revision cycles.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="p-3 rounded-3 bg-light border h-100">
                <h6 className="fw-bold text-dark mb-2">Do you assist with ongoing dashboard maintenance and data refreshes?</h6>
                <p className="text-secondary small mb-0 lh-base">
                  Yes! I configure automated scheduled data refresh gateways and document comprehensive user manuals and data dictionaries so your internal team can operate independently.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="p-3 rounded-3 bg-light border h-100">
                <h6 className="fw-bold text-dark mb-2">Are you available for full-time employee roles as well as contract work?</h6>
                <p className="text-secondary small mb-0 lh-base">
                  Yes, I am actively open to full-time remote or hybrid Data Analyst / BI Reporting roles, as well as high-impact data consulting engagements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div 
          className="p-5 rounded-4 text-center text-white"
          style={{ background: 'linear-gradient(135deg, #0284c7 0%, #0f172a 100%)' }}
        >
          <h2 className="fw-bold display-6 mb-3">
            Have a Specific Analytical Challenge?
          </h2>
          <p className="lead fs-6 mb-4 opacity-90" style={{ maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            Schedule an initial consultation to discuss your reporting architecture, KPI targets, and analytics roadmap.
          </p>
          <Link to="/contact" className="btn btn-light px-4 py-2 rounded-pill fw-bold text-primary shadow">
            Get in Touch Today
          </Link>
        </div>

      </div>
    </div>
  );
};
