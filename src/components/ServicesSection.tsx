
import React from 'react';
import { Database, GitBranch, Zap, Warehouse, Settings, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Database,
    title: "Cloud Data Architecture",
    description: "AWS & GCP native architectures designed for scalability, security, and cost-efficiency. We design systems that grow with your business."
  },
  {
    icon: GitBranch,
    title: "ETL/ELT Pipeline Development", 
    description: "Robust data pipelines built with best practices using Airflow, dbt, and modern orchestration tools for reliability and maintainability."
  },
  {
    icon: Zap,
    title: "Real-time Data Processing",
    description: "Streaming solutions using Apache Spark and cloud-native services that deliver insights as events happen, not hours later."
  },
  {
    icon: Warehouse,
    title: "Data Lake & Warehouse Design",
    description: "Structured data repositories using Snowflake, BigQuery, and S3 that balance performance, accessibility, and governance."
  },
  {
    icon: Settings,
    title: "DevOps & Observability",
    description: "Automated monitoring, alerting, and deployment pipelines to ensure your data systems run smoothly 24/7 with minimal intervention."
  },
  {
    icon: DollarSign,
    title: "Cloud Cost Optimization",
    description: "Strategic approaches to reduce infrastructure costs by 30-50% without sacrificing performance through resource optimization."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Our Data Engineering <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-slate-600">
            End-to-end data solutions tailored to startup needs and budgets, delivered by senior engineers with proven track records.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-slate-200 bg-white">
              <CardHeader>
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-slate-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
