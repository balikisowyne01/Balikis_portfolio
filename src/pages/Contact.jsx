import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { bioData } from "../data/bioData";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle2, 
  MessageSquare,
  Sparkles
} from "lucide-react";
import Swal from "sweetalert2";

export const Contact = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    serviceType: "Business Intelligence & Power BI",
    timeline: "Within 2-4 weeks",
    message: ""
  });

  const [submitting, setSubmitting] = useState(false);

  // Check URL query parameters for pre-selected service
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get("service");
    if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        serviceType: serviceParam,
        subject: `Inquiry regarding ${serviceParam}`
      }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      Swal.fire({
        title: "Required Fields Missing",
        text: "Please provide your name, valid email address, and a message description.",
        icon: "warning",
        confirmButtonColor: "#0284c7"
      });
      return;
    }

    setSubmitting(true);

    // Simulate sending email / submission
    setTimeout(() => {
      setSubmitting(false);
      Swal.fire({
        title: "Message Delivered Successfully!",
        text: `Thank you ${formData.name}. Your message regarding "${formData.serviceType}" has been logged. Nurudeen Balikis will get back to you shortly.`,
        icon: "success",
        confirmButtonColor: "#0284c7"
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        serviceType: "Business Intelligence & Power BI",
        timeline: "Within 2-4 weeks",
        message: ""
      });
    }, 1000);
  };

  return (
    <div className="bg-light-main min-vh-100 py-5">
      <div className="container px-3 px-md-4">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center mb-5">
          <span className="badge-category mb-2">Let's Collaborate</span>
          <h1 className="fw-bold display-5 mb-2" style={{ color: '#0f172a' }}>
            Get In Touch With Balikis
          </h1>
          <p className="text-secondary lead fs-6" style={{ maxWidth: '640px', margin: '0 auto' }}>
            Have a full-time role opening, a data analysis contract, or an executive BI dashboard project? I would love to connect.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          
          {/* ================= LEFT CONTACT INFO COLUMN ================= */}
          <div className="col-12 col-lg-5">
            <div className="card card-modern p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
              <div>
                <span className="badge-category mb-3">Direct Channels</span>
                <h3 className="fw-bold mb-3" style={{ color: '#0f172a' }}>
                  Contact Information
                </h3>
                <p className="text-secondary small mb-4 lh-base">
                  Feel free to reach out directly via email, phone, or connect through professional networks. I respond to all messages within 24 business hours.
                </p>

                <div className="d-flex flex-column gap-3 mb-4">
                  {/* Email */}
                  <div className="d-flex align-items-center gap-3 p-3 rounded-3 bg-light border">
                    <div 
                      className="p-2 rounded-circle d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: '#e0f2fe', color: '#0284c7' }}
                    >
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="text-muted d-block" style={{ fontSize: '0.72rem' }}>EMAIL</span>
                      <a href={`mailto:${bioData.email}`} className="text-dark fw-bold text-decoration-none small">
                        {bioData.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="d-flex align-items-center gap-3 p-3 rounded-3 bg-light border">
                    <div 
                      className="p-2 rounded-circle d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: '#ecfdf5', color: '#059669' }}
                    >
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="text-muted d-block" style={{ fontSize: '0.72rem' }}>PHONE / WHATSAPP</span>
                      <a href={`tel:${bioData.phone.replace(/\s+/g, '')}`} className="text-dark fw-bold text-decoration-none small">
                        {bioData.phone}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="d-flex align-items-center gap-3 p-3 rounded-3 bg-light border">
                    <div 
                      className="p-2 rounded-circle d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: '#eef2ff', color: '#4f46e5' }}
                    >
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="text-muted d-block" style={{ fontSize: '0.72rem' }}>LOCATION & TIMEZONE</span>
                      <span className="text-dark fw-bold small d-block">
                        {bioData.location}
                      </span>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="d-flex align-items-center gap-3 p-3 rounded-3 bg-light border">
                    <div 
                      className="p-2 rounded-circle d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: '#fef3c7', color: '#d97706' }}
                    >
                      <Clock size={20} />
                    </div>
                    <div>
                      <span className="text-muted d-block" style={{ fontSize: '0.72rem' }}>STATUS</span>
                      <span className="text-success fw-bold small d-block">
                        {bioData.availability}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-top">
                <span className="text-muted small fw-semibold d-block mb-2">Connect on Professional Platforms:</span>
                <div className="d-flex gap-2">
                  <a 
                    href={bioData.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-dark-pill"
                  >
                    <GithubIcon size={15} />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href={bioData.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary-gradient"
                  >
                    <LinkedinIcon size={15} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT FORM COLUMN ================= */}
          <div className="col-12 col-lg-7">
            <div className="card card-modern p-4 p-md-5 h-100">
              <span className="badge-category mb-2">Send an Inquiry</span>
              <h3 className="fw-bold mb-3" style={{ color: '#0f172a' }}>
                Project & Hiring Form
              </h3>
              <p className="text-muted small mb-4">
                Please fill in your project or role details below, and I will prepare a customized assessment or availability plan.
              </p>

              <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-semibold text-secondary">
                      Your Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g., Alex Johnson"
                      className="form-control form-control-modern"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-semibold text-secondary">
                      Work Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g., alex@company.com"
                      className="form-control form-control-modern"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-semibold text-secondary">
                      Service / Engagement Type
                    </label>
                    <select
                      name="serviceType"
                      className="form-select form-control-modern"
                      value={formData.serviceType}
                      onChange={handleChange}
                    >
                      <option value="Full-Time Data Analyst Role">Full-Time Data Analyst Role</option>
                      <option value="Power BI Interactive Dashboards">Power BI Interactive Dashboards</option>
                      <option value="SQL Database Querying (MySQL / PostgreSQL)">SQL Database Querying (MySQL / PostgreSQL)</option>
                      <option value="Python Data Cleaning (Pandas & NumPy)">Python Data Cleaning (Pandas & NumPy)</option>
                      <option value="Microsoft Excel Spreadsheet Modeling">Microsoft Excel Spreadsheet Modeling</option>
                      <option value="Executive Business Reports in Microsoft Word">Executive Business Reports in Microsoft Word</option>
                      <option value="Other / Contract Inquiry">Other / Contract Inquiry</option>
                    </select>
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label small fw-semibold text-secondary">
                      Project Timeline / Urgency
                    </label>
                    <select
                      name="timeline"
                      className="form-select form-control-modern"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="Immediate (< 1 week)">Immediate (&lt; 1 week)</option>
                      <option value="Within 2-4 weeks">Within 2-4 weeks</option>
                      <option value="Next Quarter">Next Quarter</option>
                      <option value="Flexible / General Inquiry">Flexible / General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="form-label small fw-semibold text-secondary">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g., Power BI Sales Dashboard Engagement"
                    className="form-control form-control-modern"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="form-label small fw-semibold text-secondary">
                    Project Scope / Role Requirements <span className="text-danger">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Briefly describe your dataset, business objectives, primary KPIs, or role specifics..."
                    className="form-control form-control-modern"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-primary-gradient px-4 py-2 w-100"
                  >
                    {submitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Submit Inquiry to Balikis</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
