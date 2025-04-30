
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    title: "Financial Services Data Transformation",
    description: "Helped a leading bank modernize their data architecture, reducing reporting time from days to hours.",
    industry: "Financial Services",
    results: ["70% reduction in data processing time", "99.9% data accuracy", "$2M annual cost savings"]
  },
  {
    title: "E-commerce Real-time Analytics",
    description: "Built a real-time data pipeline enabling instant insights into customer behavior and inventory management.",
    industry: "E-commerce",
    results: ["Real-time inventory tracking", "15% increase in conversion rates", "Personalized customer experience"]
  },
  {
    title: "Healthcare Data Integration Platform",
    description: "Developed a HIPAA-compliant data platform connecting disparate systems for a regional healthcare network.",
    industry: "Healthcare",
    results: ["Unified patient records across 12 facilities", "80% faster access to critical information", "Improved compliance reporting"]
  }
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Case <span className="gradient-text">Studies</span></h2>
          <p className="text-lg text-gray-600">
            Real results from our data engineering partnerships with industry leaders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="card-hover border-gray-200 flex flex-col h-full">
              <CardHeader>
                <div className="text-sm text-ivdata-secondary font-medium mb-2">{study.industry}</div>
                <CardTitle>{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base mb-4">
                  {study.description}
                </CardDescription>
                <div className="space-y-2">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-ivdata-primary"></div>
                      <span className="text-sm text-gray-600">{result}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant="ghost" className="text-ivdata-primary hover:bg-ivdata-primary/10 p-0 flex items-center">
                  Read full case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-ivdata-primary text-ivdata-primary hover:bg-ivdata-primary/10">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
