
import React from 'react';
import { 
  Database, 
  Server, 
  Globe, 
  TrendingUp, 
  Shield, 
  Code 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Database,
    title: "Data Pipeline Development",
    description: "Design and implement robust ETL/ELT processes to efficiently move and transform data across your organization."
  },
  {
    icon: Server,
    title: "Data Warehouse Solutions",
    description: "Build modern cloud data warehouses that scale with your business and provide a single source of truth."
  },
  {
    icon: Shield,
    title: "Data Governance & Security",
    description: "Implement proper controls and security measures to ensure data integrity, privacy, and compliance."
  },
  {
    icon: Globe,
    title: "Big Data Infrastructure",
    description: "Design and implement distributed processing systems capable of handling massive datasets efficiently."
  },
  {
    icon: TrendingUp,
    title: "Data Analytics & Insights",
    description: "Transform raw data into actionable intelligence with custom analytics solutions."
  },
  {
    icon: Code,
    title: "Custom Data Solutions",
    description: "Tailored software solutions for specialized data processing and unique business requirements."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our Data Engineering <span className="gradient-text">Services</span></h2>
          <p className="text-lg text-gray-600">
            We offer end-to-end data engineering solutions to help your business harness the full potential of your data assets.
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
