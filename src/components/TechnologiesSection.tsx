
import React from 'react';

const technologies = [
  {
    category: "Programming",
    items: ["Python", "SQL", "PySpark", "Java"]
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
    items: ["Looker", "Tableau", "Power BI", "Redash"]
  }
];

const TechnologiesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Technologies We <span className="gradient-text">Work With</span></h2>
          <p className="text-lg text-gray-600">
            Our team brings deep expertise across the modern data stack
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 card-hover">
              <h3 className="text-xl font-semibold mb-4 text-ivdata-primary">{tech.category}</h3>
              <div className="space-y-3">
                {tech.items.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="h-2 w-2 bg-ivdata-secondary rounded-full mr-3"></div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            And many more tools and frameworks in the modern data engineering ecosystem
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
