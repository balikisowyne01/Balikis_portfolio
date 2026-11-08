export const skillsData = {
  coreCategories: [
    {
      category: "SQL Database Querying (MySQL & PostgreSQL)",
      icon: "Database",
      description: "Extracting, filtering, and aggregating structured business data from relational databases using precise queries, multi-table joins, and grouping.",
      skills: [
        { name: "PostgreSQL Database Querying", level: 92, tag: "Database", badge: "Advanced" },
        { name: "MySQL Query Optimization & CRUD", level: 90, tag: "Database", badge: "Advanced" },
        { name: "Multi-Table Joins (INNER, LEFT, RIGHT)", level: 95, tag: "SQL Core", badge: "Expert" },
        { name: "Aggregations & Grouping (GROUP BY, HAVING)", level: 94, tag: "SQL Core", badge: "Expert" },
        { name: "Subqueries, Views & Filtering", level: 88, tag: "SQL", badge: "Proficient" },
        { name: "Relational Schema Understanding & Keys", level: 90, tag: "Data Design", badge: "Advanced" }
      ]
    },
    {
      category: "Python Data Wrangling (Pandas & NumPy)",
      icon: "Code2",
      description: "Automating data cleaning, transforming messy raw datasets, handling missing records, and computing statistical aggregations.",
      skills: [
        { name: "Pandas DataFrames & Series Manipulation", level: 92, tag: "Python", badge: "Expert" },
        { name: "NumPy Array Calculations & Numerical Ops", level: 88, tag: "Python", badge: "Advanced" },
        { name: "Data Cleaning, Null Handling & Deduplication", level: 95, tag: "Wrangling", badge: "Master" },
        { name: "Merging, Concatenating & Reshaping Data", level: 90, tag: "Pandas", badge: "Advanced" },
        { name: "Exploratory Data Analysis (EDA) Scripting", level: 88, tag: "Analytics", badge: "Advanced" },
        { name: "Jupyter Notebook Interactive Workflows", level: 94, tag: "Tools", badge: "Expert" }
      ]
    },
    {
      category: "Business Intelligence & Dashboards (Power BI)",
      icon: "BarChart3",
      description: "Building dynamic, interactive reporting dashboards that empower managers and leaders to track real-time KPIs and business trends.",
      skills: [
        { name: "Power BI Interactive Dashboard Design", level: 94, tag: "BI Core", badge: "Expert" },
        { name: "Data Modeling & Star Schema Relationships", level: 90, tag: "Architecture", badge: "Advanced" },
        { name: "DAX Measures (CALCULATE, SUM, RELATED)", level: 86, tag: "DAX", badge: "Proficient" },
        { name: "Interactive Slicers, Drill-Downs & Filters", level: 95, tag: "UI/UX", badge: "Expert" },
        { name: "Visual Data Storytelling & Executive Cards", level: 92, tag: "Presentation", badge: "Advanced" }
      ]
    },
    {
      category: "Spreadsheet Analytics & Modeling (Microsoft Excel)",
      icon: "FileSpreadsheet",
      description: "Analyzing tabular records, building dynamic calculation models, and summarizing performance metrics with precision.",
      skills: [
        { name: "PivotTables & Dynamic Pivot Charts", level: 95, tag: "Excel Core", badge: "Master" },
        { name: "Advanced Formulas (XLOOKUP, VLOOKUP, INDEX/MATCH)", level: 94, tag: "Formulas", badge: "Expert" },
        { name: "Data Cleaning, Text-to-Columns & Validation", level: 92, tag: "ETL", badge: "Advanced" },
        { name: "Conditional Formatting & KPI Highlighting", level: 95, tag: "Formatting", badge: "Expert" },
        { name: "Summary Reporting & Metric Scorecards", level: 90, tag: "Reporting", badge: "Advanced" }
      ]
    },
    {
      category: "Version Control & Project Repositories (Git & GitHub)",
      icon: "GitBranch",
      description: "Maintaining reproducible analytical code, managing version history for SQL scripts and notebooks, and collaborating via Git push, pull, and repository branches.",
      skills: [
        { name: "Git Version Control (clone, commit, push, pull)", level: 92, tag: "Git Core", badge: "Advanced" },
        { name: "GitHub Remote Repositories & Collaboration", level: 94, tag: "Collaboration", badge: "Expert" },
        { name: "Branching, Merging & Tracking Changes", level: 88, tag: "Workflow", badge: "Advanced" },
        { name: "SQL Script & Jupyter Notebook Code Versioning", level: 95, tag: "Reproducibility", badge: "Expert" }
      ]
    },
    {
      category: "Executive Reporting & Documentation (Microsoft Word)",
      icon: "FileText",
      description: "Synthesizing analytical findings into polished, publication-ready business reports, data dictionaries, and stakeholder briefs.",
      skills: [
        { name: "Analytical Executive Summaries & Findings", level: 95, tag: "Reporting", badge: "Master" },
        { name: "Business Requirement & KPI Documentation", level: 92, tag: "Documentation", badge: "Expert" },
        { name: "Data Dictionaries & Table Metadata Guides", level: 90, tag: "Governance", badge: "Advanced" },
        { name: "Stakeholder Presentation Briefs & Recommendations", level: 94, tag: "Communication", badge: "Expert" }
      ]
    }
  ],

  toolsCloud: [
    { name: "SQL", type: "Core Querying", color: "#0284c7" },
    { name: "MySQL", type: "Relational DB", color: "#0ea5e9" },
    { name: "PostgreSQL", type: "Relational DB", color: "#3b82f6" },
    { name: "Python", type: "Programming", color: "#6366f1" },
    { name: "Pandas", type: "Data Wrangling", color: "#10b981" },
    { name: "NumPy", type: "Numerical Computing", color: "#0d9488" },
    { name: "Power BI", type: "BI & Dashboards", color: "#f59e0b" },
    { name: "DAX", type: "BI Formulas", color: "#eab308" },
    { name: "Microsoft Excel", type: "Spreadsheet Modeling", color: "#16a34a" },
    { name: "PivotTables", type: "Data Summarization", color: "#15803d" },
    { name: "Microsoft Word", type: "Business Reporting", color: "#2563eb" },
    { name: "Git", type: "Version Control", color: "#f05032" },
    { name: "GitHub", type: "Code Hosting", color: "#0f172a" },
    { name: "Jupyter Notebook", type: "Analysis Environment", color: "#f97316" }
  ],

  workflowSteps: [
    {
      step: "01",
      title: "Business Problem & Data Scoping in Word",
      description: "Clarifying business objectives, scoping relevant metrics, and drafting initial KPI documentation in Microsoft Word."
    },
    {
      step: "02",
      title: "Data Extraction with SQL (MySQL / PostgreSQL)",
      description: "Querying relational database tables using multi-table joins, WHERE filters, and GROUP BY aggregations to pull raw datasets."
    },
    {
      step: "03",
      title: "Data Cleaning & Wrangling with Pandas & NumPy",
      description: "Handling missing values, removing duplicate records, correcting data types, and calculating new descriptive metrics in Python."
    },
    {
      step: "04",
      title: "Version Control & Tracking on GitHub",
      description: "Committing and pushing clean, reproducible SQL query scripts and Jupyter notebooks to GitHub for transparency and collaboration."
    },
    {
      step: "05",
      title: "Interactive Dashboard Engineering in Power BI & Excel",
      description: "Designing dynamic dashboards with table relationships, DAX formulas, interactive slicers, and Excel summary PivotTables."
    },
    {
      step: "06",
      title: "Executive Reporting & Delivery in Microsoft Word",
      description: "Translating dashboard findings into clear, structured executive documentation with actionable business recommendations."
    }
  ]
};
