import monthlyRevenueImg from "../assets/projects/monthly_revenue.png";
import revenueByProductImg from "../assets/projects/revenue_by_product.png";
import profitByProductImg from "../assets/projects/profit_by_product.png";
import revenueByRegionImg from "../assets/projects/revenue_by_region.png";

export const projectsData = [
  {
    id: 1,
    title: "Sales Performance Analysis",
    category: "python",
    categoryLabel: "Python (NumPy, Pandas & Matplotlib)",
    badge: "Verified GitHub Project",
    type: "Retail Sales & Profitability Analysis",
    period: "2026",
    client: "Sales Intelligence Case Study",
    image: monthlyRevenueImg,
    gallery: [monthlyRevenueImg, revenueByProductImg, profitByProductImg, revenueByRegionImg],
    summary: "End-to-end Python sales performance analysis utilizing NumPy for vectorized transaction calculations, Pandas for multi-dimensional data grouping, and Matplotlib for multi-chart visual reporting.",
    desc: "Engineered a complete retail sales analytics script in Python evaluating transactions across 3 products (Laptop, Phone, Tablet), 4 geographic sales regions (West, East, North, South), and a 4-month timeline (January to April). Leveraged NumPy array operations to compute total revenue ($14,800), total cost ($11,940), and net profit ($2,860). Programmatically exported tabular sales data to CSV and generated 4 publication-quality Matplotlib visualizations: monthly revenue trend lines, product profit horizontal bars, revenue contribution bar charts, and regional revenue share pie charts.",
    impact: "Pinpointed Laptop as the primary revenue ($6,000) and profit ($1,200) driver, highlighted March as the peak sales month, and mapped regional revenue distributions to guide marketing decisions.",
    features: [
      "Vectorized NumPy calculations for individual transaction revenue, unit cost, and profit margins",
      "Aggregated KPI metrics computing Total Revenue ($14.8K), Total Cost ($11.9K), and Total Profit ($2.86K)",
      "Pandas DataFrame modeling and multi-level GroupBy analysis on product and regional performance",
      "Exported 4 high-resolution Matplotlib charts: monthly revenue trend, product profit, product revenue, and regional pie chart",
      "Automated CSV export of structured sales data into clean data/sales_data.csv files"
    ],
    metrics: [
      { label: "Total Revenue", value: "$14,800" },
      { label: "Total Profit", value: "$2,860" },
      { label: "Top Product", value: "Laptop ($6K)" },
      { label: "Charts Built", value: "4 Plots" }
    ],
    techStack: ["Python", "NumPy", "Pandas", "Matplotlib", "CSV", "Git & GitHub"],
    tools: ["Python 3", "NumPy", "Pandas", "Matplotlib", "GitHub"],
    demoUrl: null,
    githubUrl: "https://github.com/balikisowyne01/Sales_Performance_analysis"
  },
  {
    id: 2,
    title: "Student Result Management System",
    category: "python",
    categoryLabel: "Python & OOP",
    badge: "Python Application",
    type: "Academic Performance Management",
    period: "2026",
    client: "Stephotech Computer Institute",
    summary: "Object-oriented Python application engineered to record, calculate, and manage student grades, GPAs, and class performance records with input validation.",
    desc: "Developed a modular student result processing system using Python's object-oriented programming (OOP) principles. The application encapsulates student profiles, validates subject score inputs, computes cumulative averages and grade classifications, and exports summary report cards.",
    impact: "Automated manual score recording and grade computations, eliminating calculation discrepancies and streamlining result compilation.",
    features: [
      "Object-oriented classes managing Student, Course, and Gradebook entities",
      "Dynamic GPA calculation and automated letter grade classification logic",
      "Input validation preventing invalid numeric scores or duplicate entries",
      "File handling for saving and retrieving student academic records",
      "Clean command-line interface with interactive menus and student search"
    ],
    metrics: [
      { label: "Core Language", value: "Python 3" },
      { label: "Architecture", value: "OOP Design" },
      { label: "Calculation", value: "100% Accurate" },
      { label: "Output", value: "Result Cards" }
    ],
    techStack: ["Python", "OOP", "File Handling", "Data Validation", "Git & GitHub"],
    tools: ["Python 3", "VS Code", "Git", "GitHub"],
    demoUrl: null,
    githubUrl: "https://github.com/balikisowyne01/"
  },
  {
    id: 3,
    title: "SQL Database Management & Query Architecture",
    category: "sql",
    categoryLabel: "SQL (MySQL & PostgreSQL)",
    badge: "Relational Database Management",
    type: "Database Querying & Administration",
    period: "2026",
    client: "Relational Database Project",
    summary: "Structured relational database management project writing complex SQL queries across MySQL and PostgreSQL, managing relational schemas, and establishing Python database connections.",
    desc: "Designed and queried normalized relational schemas using MySQL and PostgreSQL. Implemented primary and foreign key constraints, multi-table joins (INNER, LEFT, RIGHT), nested subqueries, and aggregations (GROUP BY, HAVING). Established programmatic connectivity connecting SQL databases directly to Python for automated data extraction.",
    impact: "Created clean, normalized database tables and optimized query pipelines ensuring high referential integrity and fast record retrieval.",
    features: [
      "Relational schema creation with verified primary and foreign key relationships",
      "Multi-table joins linking customer, transaction, and product tables",
      "Aggregations with GROUP BY and HAVING to summarize category volumes and totals",
      "Python-to-SQL database connectivity using Python database connectors",
      "Comprehensive SQL scripts version-controlled and documented on GitHub"
    ],
    metrics: [
      { label: "Dialects", value: "MySQL & Postgres" },
      { label: "Tables Modeled", value: "Normalized" },
      { label: "Integration", value: "Python + SQL" },
      { label: "Queries", value: "Optimized" }
    ],
    techStack: ["SQL", "MySQL", "PostgreSQL", "Python-SQL Connect", "Git & GitHub"],
    tools: ["MySQL Workbench", "pgAdmin", "Python", "GitHub"],
    demoUrl: null,
    githubUrl: "https://github.com/balikisowyne01/"
  },
  {
    id: 4,
    title: "Excel Data Analysis & Interactive Dashboard",
    category: "excel",
    categoryLabel: "Microsoft Excel",
    badge: "Interactive Dashboard",
    type: "Spreadsheet Analytics & Reporting",
    period: "2026",
    client: "Stephotech Computer Institute",
    summary: "Dynamic Microsoft Excel data analysis model and visual dashboard featuring interactive PivotTables, Pivot Charts, lookup formulas, and automated summary KPIs.",
    desc: "Constructed an end-to-end Microsoft Excel analytical dashboard consolidating multi-column datasets. Leveraged PivotTables, dynamic Pivot Charts with category slicers, lookup formulas (VLOOKUP, XLOOKUP, INDEX/MATCH), and conditional formatting to highlight performance benchmarks and trends.",
    impact: "Built visual dashboards utilized to train incoming intake students on business spreadsheet analytics, reporting automation, and data visualization.",
    features: [
      "Interactive PivotTables summarizing categorical metrics, totals, and averages",
      "Dynamic Pivot Charts with interactive slicers for instant data filtering",
      "Formula modeling using XLOOKUP, VLOOKUP, SUMIFS, and IF statements",
      "Conditional formatting highlighting KPI thresholds and performance outliers",
      "Clean executive dashboard layout optimized for business presentation"
    ],
    metrics: [
      { label: "Platform", value: "MS Excel" },
      { label: "Components", value: "Pivot & Slicers" },
      { label: "Formulas", value: "Advanced" },
      { label: "Interface", value: "Interactive" }
    ],
    techStack: ["Microsoft Excel", "PivotTables", "Pivot Charts", "XLOOKUP", "Data Validation"],
    tools: ["Microsoft Excel", "Spreadsheet Modeling"],
    demoUrl: null,
    githubUrl: "https://github.com/balikisowyne01/"
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "python", label: "Python (NumPy & Pandas)" },
  { id: "sql", label: "SQL (MySQL & PostgreSQL)" },
  { id: "excel", label: "Microsoft Excel" }
];
