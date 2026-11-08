export const projectsData = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
  },
  {
    id: 4,
    title: "Data Analysis & Wrangling with Pandas & NumPy",
    category: "python",
    categoryLabel: "Python (Pandas & NumPy)",
    badge: "Data Wrangling & Cleaning",
    type: "Exploratory Data Analysis",
    period: "2026",
    client: "Data Analytics Project",
    summary: "Python data processing and exploratory analysis pipeline utilizing Pandas and NumPy to clean, reshape, and extract insights from CSV and JSON file formats.",
    desc: "Ingested heterogeneous datasets from CSV and JSON files into Pandas DataFrames. Handled missing records, eliminated duplicate rows, transformed data types, and applied vectorized NumPy calculations for statistical aggregation and distribution analysis.",
    impact: "Demonstrated reproducible data cleaning workflows converting messy raw file exports into structured, analysis-ready tabular data.",
    features: [
      "Pandas DataFrame wrangling: filtering, column indexing, sorting, and grouping",
      "Missing value detection, data cleaning strategies, and duplicate removal",
      "Vectorized NumPy calculations for numerical computing and statistical metrics",
      "Multi-format ingestion: working with both CSV and structured JSON files",
      "Jupyter Notebook execution with documented step-by-step analytical findings"
    ],
    metrics: [
      { label: "Libraries", value: "Pandas • NumPy" },
      { label: "File Types", value: "CSV & JSON" },
      { label: "Cleaning", value: "100% Verified" },
      { label: "Environment", value: "Jupyter" }
    ],
    techStack: ["Python", "Pandas", "NumPy", "CSV", "JSON", "Jupyter Notebook", "Git & GitHub"],
    tools: ["Python 3", "Pandas", "NumPy", "Jupyter Notebook", "GitHub"],
    demoUrl: null,
    githubUrl: "https://github.com/balikisowyne01/"
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "python", label: "Python (Pandas & NumPy)" },
  { id: "sql", label: "SQL (MySQL & PostgreSQL)" },
  { id: "excel", label: "Microsoft Excel" }
];
