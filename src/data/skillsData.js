export const skillsData = {
  coreCategories: [
    {
      category: "Python & Numerical Computing (Pandas & NumPy)",
      icon: "Code2",
      description: "Automating data cleaning, handling CSV and JSON files, computing numerical operations with NumPy, and exploratory data analysis with Pandas.",
      skills: [
        { name: "Pandas DataFrames & Series Manipulation", level: 92, tag: "Python", badge: "Expert" },
        { name: "NumPy Numerical Computing & Arrays", level: 88, tag: "Python", badge: "Advanced" },
        { name: "Data Cleaning, Null Handling & Deduplication", level: 95, tag: "Wrangling", badge: "Master" },
        { name: "Object-Oriented Programming (OOP) in Python", level: 85, tag: "Architecture", badge: "Proficient" },
        { name: "File Processing (CSV & JSON Workflows)", level: 92, tag: "File Handling", badge: "Advanced" },
        { name: "Connecting Python to SQL Databases", level: 88, tag: "Integration", badge: "Advanced" }
      ]
    },
    {
      category: "SQL Database Querying (MySQL & PostgreSQL)",
      icon: "Database",
      description: "Managing relational schemas, writing structured SQL queries across MySQL and PostgreSQL, multi-table joins, and aggregations.",
      skills: [
        { name: "PostgreSQL Database Querying", level: 90, tag: "Database", badge: "Advanced" },
        { name: "MySQL Query Writing & Data Management", level: 90, tag: "Database", badge: "Advanced" },
        { name: "Multi-Table Joins (INNER, LEFT, RIGHT)", level: 94, tag: "SQL Core", badge: "Expert" },
        { name: "Aggregations & Grouping (GROUP BY, HAVING)", level: 92, tag: "SQL Core", badge: "Expert" },
        { name: "Subqueries, Views & Filtering Logic", level: 86, tag: "SQL", badge: "Proficient" },
        { name: "Database Schema & Key Constraints", level: 88, tag: "Data Design", badge: "Advanced" }
      ]
    },
    {
      category: "Spreadsheet Analytics & Dashboards (Microsoft Excel)",
      icon: "FileSpreadsheet",
      description: "Building interactive dashboards, summarizing complex data with PivotTables and Pivot Charts, and formula modeling.",
      skills: [
        { name: "Interactive Excel Dashboard Design", level: 95, tag: "Excel Core", badge: "Master" },
        { name: "PivotTables & Dynamic Pivot Charts", level: 95, tag: "Data Summarization", badge: "Master" },
        { name: "Lookup Formulas (XLOOKUP, VLOOKUP, INDEX/MATCH)", level: 92, tag: "Formulas", badge: "Expert" },
        { name: "Conditional Formatting & KPI Highlighting", level: 94, tag: "Visualization", badge: "Expert" },
        { name: "Data Validation & Error Checking", level: 90, tag: "Data Quality", badge: "Advanced" }
      ]
    },
    {
      category: "Business Intelligence & Visualization (Power BI)",
      icon: "BarChart3",
      description: "Designing visual business intelligence reports, star-schema data models, and interactive dashboard views.",
      skills: [
        { name: "Power BI Interactive Visual Dashboards", level: 90, tag: "BI Core", badge: "Advanced" },
        { name: "Data Modeling & Table Relationships", level: 88, tag: "Architecture", badge: "Advanced" },
        { name: "DAX Measures & Calculations", level: 84, tag: "DAX", badge: "Proficient" },
        { name: "Interactive Category Slicers & Filters", level: 92, tag: "UI/UX", badge: "Advanced" }
      ]
    },
    {
      category: "Version Control & Project Collaboration (Git & GitHub)",
      icon: "GitBranch",
      description: "Managing version history for SQL scripts and Python programs, collaborative code sharing, and repository administration.",
      skills: [
        { name: "Git Version Control (clone, commit, push, pull)", level: 88, tag: "Git Core", badge: "Proficient" },
        { name: "GitHub Repository Management", level: 90, tag: "Collaboration", badge: "Advanced" },
        { name: "Code Versioning & Reproducible Repositories", level: 88, tag: "Workflow", badge: "Advanced" }
      ]
    },
    {
      category: "Office Suite, Design & Communication",
      icon: "FileText",
      description: "Synthesizing findings into executive Word reports, visual PowerPoint presentations, and creative design.",
      skills: [
        { name: "Microsoft Word (Business Reports & Documentation)", level: 95, tag: "Office", badge: "Master" },
        { name: "Microsoft PowerPoint (Data Presentations)", level: 90, tag: "Office", badge: "Advanced" },
        { name: "Graphic Design (CorelDraw & Adobe Photoshop)", level: 85, tag: "Creative", badge: "Proficient" },
        { name: "Analytical Thinking & Problem Solving", level: 95, tag: "Soft Skill", badge: "Master" },
        { name: "Detail-Oriented Communication", level: 92, tag: "Soft Skill", badge: "Expert" }
      ]
    }
  ],

  toolsCloud: [
    { name: "Microsoft Excel", type: "Spreadsheet & Dashboards", color: "#16a34a" },
    { name: "SQL", type: "Core Querying", color: "#0284c7" },
    { name: "Python", type: "Programming", color: "#6366f1" },
    { name: "NumPy", type: "Numerical Computing", color: "#0d9488" },
    { name: "Pandas", type: "Data Cleaning", color: "#10b981" },
    { name: "MySQL", type: "Relational DB", color: "#0ea5e9" },
    { name: "PostgreSQL", type: "Relational DB", color: "#3b82f6" },
    { name: "Power BI", type: "BI & Dashboards", color: "#f59e0b" },
    { name: "Git & GitHub", type: "Version Control", color: "#f05032" },
    { name: "Microsoft Word", type: "Documentation", color: "#2563eb" },
    { name: "Microsoft PowerPoint", type: "Presentations", color: "#ea580c" },
    { name: "CorelDraw", type: "Design", color: "#15803d" },
    { name: "Adobe Photoshop", type: "Design", color: "#0369a1" }
  ],

  workflowSteps: [
    {
      step: "01",
      title: "Data Sourcing & Ingestion (SQL, CSV, JSON, Web)",
      description: "Querying relational databases in MySQL or PostgreSQL, and ingesting raw multi-format CSV and JSON data files."
    },
    {
      step: "02",
      title: "Data Cleaning & Wrangling with Pandas & NumPy",
      description: "Eliminating duplicate records, handling null values, transforming data types, and calculating numerical metrics in Python."
    },
    {
      step: "03",
      title: "Version Control on GitHub",
      description: "Pushing clean, documented SQL scripts and Python notebooks to GitHub repositories for transparency and tracking."
    },
    {
      step: "04",
      title: "Interactive Analysis & Dashboarding (Excel & Power BI)",
      description: "Building interactive dashboards with PivotTables, Pivot Charts, lookup formulas, and dynamic slicers."
    },
    {
      step: "05",
      title: "Executive Reporting in Word & PowerPoint",
      description: "Synthesizing data findings into polished business summaries, KPI reports, and stakeholder presentations."
    }
  ]
};
