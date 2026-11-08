export const projectsData = [
  {
    id: 1,
    title: "Sales & Profit Performance Dashboard",
    category: "powerbi",
    categoryLabel: "Power BI & DAX",
    badge: "Interactive Power BI Dashboard",
    type: "Business Intelligence & KPIs",
    period: "2024",
    client: "Retail & Sales Analytics",
    summary: "Interactive multi-page Power BI dashboard providing store managers with real-time visibility into monthly revenues, profit margins, product profitability, and regional sales distribution.",
    desc: "Structured sales datasets into a clean star-schema model in Power BI. Implemented DAX calculation measures for total revenue, profit margin percentages, and Year-over-Year (YoY) variance. Added interactive slicers filtering by region, product category, and timeframe.",
    impact: "Gives decision-makers immediate clarity on top-performing product lines and regional revenue distribution to optimize inventory allocation.",
    features: [
      "Dynamic DAX measures for Total Sales, Net Margin %, and Month-over-Month variance",
      "Interactive category slicers and timeframe filters for intuitive user exploration",
      "Executive KPI summary cards spotlighting total revenue, volume sold, and profit",
      "Clean star-schema data relationships between Customer, Product, and Sales tables",
      "Visual chart formatting with conditional color-coded indicators for target margins"
    ],
    metrics: [
      { label: "Data Records", value: "50,000+" },
      { label: "Sales Regions", value: "4 Zones" },
      { label: "DAX Measures", value: "12 Custom" },
      { label: "Refresh", value: "Interactive" }
    ],
    techStack: ["Power BI", "DAX", "Data Modeling", "Microsoft Excel"],
    tools: ["Power BI Desktop", "DAX Formulas", "Microsoft Excel"],
    demoUrl: "https://app.powerbi.com/",
    githubUrl: "https://github.com/nurudeen-balikis/sales-profit-powerbi-dashboard"
  },
  {
    id: 2,
    title: "Customer Order & Retention Query Audit",
    category: "sql",
    categoryLabel: "SQL (MySQL & PostgreSQL)",
    badge: "Relational SQL Queries",
    type: "Database Querying & Insights",
    period: "2024",
    client: "Financial Services Project",
    summary: "Relational database analysis querying transactional order records across MySQL and PostgreSQL using multi-table joins, subqueries, and aggregations to audit customer repeat purchases.",
    desc: "Constructed structured SQL queries across Customers, Orders, and Order_Items tables. Utilized INNER and LEFT JOINs, GROUP BY, and HAVING clauses to identify repeat customer purchase frequency, top spending brackets, and order fulfillment status.",
    impact: "Isolated active vs. inactive customer cohorts and calculated total customer order values to support targeted retention and follow-up campaigns.",
    features: [
      "Multi-table joins (INNER, LEFT) connecting customer profiles with purchase histories",
      "GROUP BY and HAVING queries aggregating total spend and order frequency tiers",
      "Date-based filtering to assess monthly order volume and seasonal purchasing trends",
      "Relational subqueries identifying customers with above-average lifetime spend",
      "Documented, reproducible SQL query scripts version-controlled on GitHub"
    ],
    metrics: [
      { label: "Records Queried", value: "100K+" },
      { label: "Tables Joined", value: "4 Relational" },
      { label: "Query Speed", value: "<1.0s" },
      { label: "Dialects", value: "MySQL / Postgres" }
    ],
    techStack: ["SQL", "PostgreSQL", "MySQL", "Multi-Table Joins", "Aggregations", "Git"],
    tools: ["PostgreSQL / pgAdmin", "MySQL Workbench", "Git & GitHub"],
    demoUrl: "https://github.com/nurudeen-balikis/customer-orders-sql-audit",
    githubUrl: "https://github.com/nurudeen-balikis/customer-orders-sql-audit"
  },
  {
    id: 3,
    title: "Exploratory Data Cleaning & EDA Pipeline",
    category: "python",
    categoryLabel: "Python (Pandas & NumPy)",
    badge: "Data Wrangling & Cleaning",
    type: "Python Exploratory Data Analysis",
    period: "2024",
    client: "E-Commerce Dataset Analysis",
    summary: "Python data cleaning and exploratory data analysis (EDA) pipeline processing raw multi-table CSV files using Pandas and NumPy in Jupyter Notebook.",
    desc: "Loaded raw CSV exports into Pandas DataFrames to perform systematic data cleaning. Handled missing entries, stripped duplicate rows, corrected corrupted timestamps, and applied vectorized NumPy calculations to summarize numerical distributions and percentiles.",
    impact: "Transformed an inconsistent, unformatted spreadsheet dataset into a verified, sanitized tabular dataset ready for Power BI dashboard reporting.",
    features: [
      "Pandas DataFrame wrangling: filtering, column renaming, and data type casting",
      "Missing value detection, handling nulls, and duplicate record elimination",
      "Vectorized NumPy calculations for fast summary metrics and order distributions",
      "GroupBy aggregations examining category order volumes and customer metrics",
      "Clean, reproducible Jupyter Notebook with step-by-step markdown explanations"
    ],
    metrics: [
      { label: "Rows Cleaned", value: "75,000" },
      { label: "Duplicates Purged", value: "3,400" },
      { label: "Execution Time", value: "<30s" },
      { label: "Data Accuracy", value: "100%" }
    ],
    techStack: ["Python", "Pandas", "NumPy", "Jupyter Notebook", "Git & GitHub"],
    tools: ["Python 3", "Jupyter Notebook", "Pandas", "NumPy", "GitHub"],
    demoUrl: "https://github.com/nurudeen-balikis/python-pandas-data-cleaning-pipeline",
    githubUrl: "https://github.com/nurudeen-balikis/python-pandas-data-cleaning-pipeline"
  },
  {
    id: 4,
    title: "Operational Performance & Supply Chain Tracker",
    category: "excel-word",
    categoryLabel: "Excel & Microsoft Word",
    badge: "Spreadsheet & Executive Brief",
    type: "Spreadsheet Modeling & Business Brief",
    period: "2024",
    client: "Operations & Inventory Management",
    summary: "Dynamic Microsoft Excel operational model with PivotTables, XLOOKUP formulas, and conditional alerts, paired with an executive business summary report authored in Microsoft Word.",
    desc: "Built a structured Excel workbook consolidating warehouse stock counts, daily sales drawdowns, and supplier replenishment lead times. Leveraged modern formulas (XLOOKUP, SUMIFS, IF, COUNTIF) and dynamic PivotTables with slicers to calculate reorder points and track safety stock buffers. Synthesized the findings into a formal executive Word document.",
    impact: "Provided operations supervisors with automated stockout warnings and equipped senior leadership with an executive decision brief.",
    features: [
      "Dynamic XLOOKUP and SUMIFS formulas linking product catalog prices with stock ledgers",
      "Automated conditional formatting highlighting critical low-stock thresholds in red/amber",
      "Interactive PivotTables and Pivot Charts categorizing turnover speed by inventory tier",
      "Data validation dropdowns ensuring error-free manual data entry",
      "Publication-ready executive summary document authored in Microsoft Word"
    ],
    metrics: [
      { label: "Items Modeled", value: "1,200 SKUs" },
      { label: "Stockout Alerts", value: "Automated" },
      { label: "Formulas", value: "XLOOKUP / SUMIFS" },
      { label: "Report Format", value: "Excel + Word" }
    ],
    techStack: ["Microsoft Excel", "PivotTables", "XLOOKUP", "Microsoft Word", "Documentation"],
    tools: ["Microsoft Excel 365", "Microsoft Word 365"],
    demoUrl: "https://github.com/nurudeen-balikis/excel-inventory-operations-model",
    githubUrl: "https://github.com/nurudeen-balikis/excel-inventory-operations-model"
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "powerbi", label: "Power BI & DAX" },
  { id: "sql", label: "SQL (MySQL & PostgreSQL)" },
  { id: "python", label: "Python (Pandas & NumPy)" },
  { id: "excel-word", label: "Excel & Word Reports" }
];
