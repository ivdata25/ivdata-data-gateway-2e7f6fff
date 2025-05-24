
import React from 'react';

const technologies = [
  {
    category: "Programming Languages",
    items: ["Python", "SQL", "PySpark", "Scala"]
  },
  {
    category: "Data Processing",
    items: ["Apache Spark", "Databricks", "Airflow", "dbt"]
  },
  {
    category: "Cloud Platforms",
    items: ["AWS", "GCP", "Azure", "Snowflake"]
  },
  {
    category: "Analytics & BI",
    items: ["Athena", "BigQuery", "Redshift", "Looker"]
  }
];

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Technologies We <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Master</span>
          </h2>
          <p className="text-xl text-slate-600">
            Our team brings deep expertise across the modern data stack, ensuring we choose the right tools for your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{tech.category}</h3>
              <div className="space-y-3">
                {tech.items.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="h-2 w-2 bg-indigo-400 rounded-full mr-3"></div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-500">
            And many more tools in the rapidly evolving data engineering ecosystem
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
