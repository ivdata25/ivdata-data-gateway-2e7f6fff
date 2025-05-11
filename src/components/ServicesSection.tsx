
import React from 'react';
import { 
  Database, 
  Server, 
  Code,
  Settings,
  Chart_Line: ChartLine,
  Calendar 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Database,
    title: "Cloud Data Architecture",
    description: "AWS & GCP native architectures designed for scalability, security, and cost-efficiency."
  },
  {
    icon: Code,
    title: "ETL/ELT Pipeline Development",
    description: "Robust data pipelines built with best practices to ensure reliability and maintainability."
  },
  {
    icon: Calendar,
    title: "Real-time Data Processing",
    description: "Streaming solutions that deliver insights as events happen, not hours or days later."
  },
  {
    icon: Server,
    title: "Data Lake & Warehouse Design",
    description: "Structured repositories that balance performance, accessibility, and governance."
  },
  {
    icon: Settings,
    title: "DevOps & Observability",
    description: "Automated monitoring and alerting to ensure your data systems run smoothly 24/7."
  },
  {
    icon: ChartLine,
    title: "Cloud Cost Optimization",
    description: "Strategic approaches to reduce infrastructure costs without sacrificing performance."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our Data Engineering <span className="gradient-text">Services</span></h2>
          <p className="text-lg text-gray-600">
            We provide end-to-end data solutions tailored to startup needs and budgets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-gray-200">
              <CardHeader>
                <service.icon className="h-12 w-12 text-ivdata-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
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
