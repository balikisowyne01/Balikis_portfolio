import { useState } from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, Activity, Percent, PackageCheck } from 'lucide-react';

export const DataVisualizer = () => {
  const [activeDataset, setActiveDataset] = useState('revenue');

  const datasets = {
    revenue: {
      title: "Quarterly Retail Sales & Margin Variance",
      subtitle: "Multi-branch sales performance and target margin tracking modeled in Power BI.",
      kpis: [
        { label: "Total Revenue", value: "$1.48M", change: "+16.4%", positive: true, icon: DollarSign },
        { label: "Net Margin", value: "31.8%", change: "+3.2%", positive: true, icon: Percent },
        { label: "Top Product Line", value: "Electronics", change: "42% Share", positive: true, icon: TrendingUp }
      ],
      bars: [
        { label: "Q1 Jan-Mar", value: 68, amount: "$280K", target: "$260K" },
        { label: "Q2 Apr-Jun", value: 84, amount: "$380K", target: "$350K" },
        { label: "Q3 Jul-Sep", value: 76, amount: "$340K", target: "$350K" },
        { label: "Q4 Oct-Dec", value: 96, amount: "$480K", target: "$440K" }
      ],
      insight: "Data Finding: Q4 seasonal bundles drove the highest gross margin with repeat retail shoppers."
    },
    orders: {
      title: "Customer Order Volume & Repeat Purchase Rates",
      subtitle: "Relational SQL query aggregations tracking order fulfillment and repeat buyer tiers.",
      kpis: [
        { label: "Total Orders", value: "32,450", change: "+12.1%", positive: true, icon: Users },
        { label: "Repeat Buyers", value: "68.4%", change: "+5.4%", positive: true, icon: Activity },
        { label: "Fulfillment Rate", value: "98.2%", change: "On Target", positive: true, icon: TrendingUp }
      ],
      bars: [
        { label: "Single Order", value: 32, amount: "31.6%", target: "<35%" },
        { label: "2 - 3 Orders", value: 65, amount: "42.8%", target: ">40%" },
        { label: "4 - 5 Orders", value: 82, amount: "18.2%", target: ">15%" },
        { label: "VIP (6+ Orders)", value: 94, amount: "7.4%", target: ">5%" }
      ],
      insight: "Data Finding: Repeat buyers ordering 3+ times contribute 58% of total annualized revenue."
    },
    inventory: {
      title: "Warehouse Inventory Stock & Reorder Points",
      subtitle: "Dynamic Microsoft Excel inventory control spreadsheet with safety stock alerts.",
      kpis: [
        { label: "Total SKUs", value: "1,200", change: "Active Catalog", positive: true, icon: PackageCheck },
        { label: "Stockout Risk", value: "0 SKUs", change: "-100% Risk", positive: true, icon: Percent },
        { label: "Avg Turnaround", value: "14 Days", change: "Optimal", positive: true, icon: TrendingUp }
      ],
      bars: [
        { label: "Fast Movers (A)", value: 95, amount: "420 SKUs", target: "Healthy" },
        { label: "Steady (B)", value: 75, amount: "540 SKUs", target: "Healthy" },
        { label: "Slow Movers (C)", value: 45, amount: "210 SKUs", target: "Review" },
        { label: "Critical Safety", value: 10, amount: "30 SKUs", target: "Reordered" }
      ],
      insight: "Data Finding: Automated conditional XLOOKUP formulas eliminated manual stockout calculations."
    }
  };

  const current = datasets[activeDataset];

  return (
    <div className="card card-modern p-4 p-md-5">
      {/* Header with Switcher Tabs */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 pb-3 mb-4 border-bottom">
        <div>
          <div className="d-flex align-items-center gap-2 mb-1">
            <span className="badge-category">Interactive BI Showcase</span>
            <span className="text-muted small">• Live Analytics Simulation</span>
          </div>
          <h4 className="fw-bold mb-1" style={{ color: '#0f172a' }}>{current.title}</h4>
          <p className="text-muted small mb-0">{current.subtitle}</p>
        </div>

        {/* Dataset Switcher Tabs */}
        <div className="d-flex gap-2 flex-wrap">
          <button
            onClick={() => setActiveDataset('revenue')}
            className={`btn btn-sm btn-tab-filter ${activeDataset === 'revenue' ? 'active' : ''}`}
          >
            Sales & Margin (Power BI)
          </button>
          <button
            onClick={() => setActiveDataset('orders')}
            className={`btn btn-sm btn-tab-filter ${activeDataset === 'orders' ? 'active' : ''}`}
          >
            Orders & Retention (SQL)
          </button>
          <button
            onClick={() => setActiveDataset('inventory')}
            className={`btn btn-sm btn-tab-filter ${activeDataset === 'inventory' ? 'active' : ''}`}
          >
            Inventory Tracker (Excel)
          </button>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="row g-3 mb-4">
        {current.kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div key={index} className="col-12 col-md-4">
              <div className="p-3 rounded-3 bg-light border d-flex justify-content-between align-items-center">
                <div>
                  <span className="text-muted small fw-semibold d-block text-uppercase">{kpi.label}</span>
                  <span className="fs-4 fw-bold" style={{ color: '#0f172a' }}>{kpi.value}</span>
                  <div className="small fw-bold text-success d-flex align-items-center gap-1 mt-1">
                    <TrendingUp size={13} />
                    <span>{kpi.change}</span>
                  </div>
                </div>
                <div 
                  className="p-3 rounded-circle d-flex align-items-center justify-content-center"
                  style={{ backgroundColor: '#e0f2fe', color: '#0284c7' }}
                >
                  <Icon size={20} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart Visualizer */}
      <div className="bg-light p-4 rounded-4 border mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="fw-bold small text-muted text-uppercase">Distribution & Benchmarking</span>
          <span className="badge-tech">Dynamic Scaled Metric</span>
        </div>

        <div className="row g-3 align-items-end" style={{ minHeight: '160px' }}>
          {current.bars.map((bar, idx) => (
            <div key={idx} className="col-3 text-center">
              <div className="d-flex flex-column align-items-center justify-content-end" style={{ height: '140px' }}>
                <span className="fw-bold small mb-1" style={{ color: '#0284c7' }}>{bar.amount}</span>
                <div 
                  className="w-100 rounded-3 shadow-sm transition-all"
                  style={{
                    height: `${bar.value}%`,
                    background: idx === current.bars.length - 1 
                      ? 'linear-gradient(180deg, #10b981 0%, #0d9488 100%)' 
                      : 'linear-gradient(180deg, #0ea5e9 0%, #0284c7 100%)',
                    transition: 'height 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                ></div>
              </div>
              <span className="d-block mt-2 small fw-semibold text-truncate" style={{ color: '#1e293b' }}>
                {bar.label}
              </span>
              <span className="text-muted" style={{ fontSize: '0.72rem' }}>
                Target: {bar.target}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Analytical Finding Callout */}
      <div 
        className="p-3 rounded-3 border d-flex align-items-start gap-3"
        style={{ backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }}
      >
        <span 
          className="badge rounded-circle p-2"
          style={{ backgroundColor: '#10b981', color: '#ffffff' }}
        >
          <BarChart3 size={16} />
        </span>
        <div>
          <span className="fw-bold d-block text-success" style={{ fontSize: '0.85rem' }}>
            Data Analyst Insight
          </span>
          <p className="small mb-0 text-dark fw-medium">
            {current.insight}
          </p>
        </div>
      </div>
    </div>
  );
};
