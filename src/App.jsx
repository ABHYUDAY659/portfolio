import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#022c22_0%,#020617_70%)] text-white font-sans px-6 py-10">


      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-6xl font-bold text-mint">Abhyuday Sharma</h1>
        <p className="text-4xl mt-2 text-gray-300">Data & Business Analyst</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://github.com/ABHYUDAY659" target="_blank" rel="noreferrer" className="text-mint underline">GitHub</a>
          <a href="https://www.linkedin.com/in/abhyuday-sharma-713509314" target="_blank" rel="noreferrer" className="text-mint underline">LinkedIn</a>
        </div>
      </section>

      {/* About */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-mint mb-2">About Me</h2>
        <p className="text-gray-300">
          Aspiring Data & Business Analyst skilled in Excel, SQL, and Python. I specialize in transforming raw business data into meaningful insights that help improve sales, operations, and customer decisions.
        </p>
        <p className="mt-2 text-sm text-gray-400">📍Delhi NCR | 📧 sharmaabhyuday56@gmail.com | 📞 9289094471</p>
      </section>

      {/* Background */}
<section className="mb-12">
  <h2 className="text-2xl font-semibold text-mint mb-2">Background</h2>
  <p className="text-gray-300">
    I come from an entrepreneurial background where I have worked on real business problems involving  customer behavior, digital marketing, and growth strategies. This has helped me develop a strong problem-solving mindset focused on root-cause analysis rather than surface-level fixes.
  </p>
  <p className="mt-2 text-gray-300">
    Now, by combining this business-first mindset with modern Data & Business Analytics skills (Excel, SQL and Data Visualization), I aim to help companies make smarter decisions, optimize operations, and drive measurable growth.
  </p>
</section>

 {/* Core Skills */}
<section className="mb-12">
  <h2 className="text-2xl font-semibold text-mint mb-4">Core Skills</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-300">
    <div>Advanced Excel (Pivot Tables, Dashboards)</div>
    <div>Power Query (ETL & Data Transformation)</div>
    <div>Power BI (DAX Measures & KPIs)</div>
    <div>SQL (PostgreSQL)</div>
    <div>Joins, CTEs, Window Functions</div>
    <div>Data Cleaning & Validation</div>
    <div>Business Analysis & KPI Tracking</div>
    <div>Dashboard Design & Reporting</div>
    <div>Requirement Gathering & Documentation</div>
    <div>Stakeholder Communication</div>
    <div>Storytelling with Data</div>
  </div>
</section>


      {/* Projects */}
<section className="mb-12">
  <h2 className="text-2xl font-semibold text-mint mb-4">Projects</h2>

  <div className="bg-gray-800 p-6 rounded-xl text-center">
    <p className="text-gray-300 mb-3">
      I am currently building multiple real-world Business Analytics projects using
      Excel, SQL, and Power BI. These projects will be added here as they are completed.
    </p>

    <p className="text-gray-400 text-sm mb-4">
      Meanwhile, you can explore my coding and learning journey on GitHub:
    </p>

    <a
      href="https://github.com/ABHYUDAY659"
      target="_blank"
      rel="noreferrer"
      className="text-mint underline text-lg"
    >
      Visit My GitHub →
    </a>
  </div>
</section>




    {/* Learning Roadmap */}
<section className="mb-12">
  <h2 className="text-2xl font-semibold text-mint mb-4">Learning Roadmap</h2>
  <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
    <li>Advanced Excel for Business Reporting (Pivot Tables, Power Query, Dashboards, VLOOKUP/XLOOKUP, Data Validation)</li>
    <li>SQL for Business Analytics (Joins, Subqueries,  Group By, Window Functions)</li>
    <li>Power BI & Data Visualization (Power Query, DAX Measures, KPI Cards, Interactive Dashboards)</li>
    <li>Business Analysis & KPI Frameworks (Requirement Gathering, Performance Tracking, Reporting Standards)</li>
    <li>Data Cleaning & Transformation (Missing Data Handling, Outlier Treatment, Normalization)</li>
    <li>Stakeholder Communication & Business Reporting</li>
    <li>Problem Solving, Process Mapping & Business Documentation</li>
  </ul>
  <p className="mt-3 text-xs text-gray-400 italic">
    Designed and followed as part of my Business Analyst career preparation.
  </p>
</section>


      <footer className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © 2025 Abhyuday Sharma
      </footer>
    </div>
  );
}

export default App;
