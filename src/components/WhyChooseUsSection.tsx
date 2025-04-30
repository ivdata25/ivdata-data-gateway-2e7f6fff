
import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: "Deep Technical Expertise",
    description: "Our team consists of seasoned data engineers with extensive experience across industries."
  },
  {
    title: "End-to-End Solutions",
    description: "From data strategy to implementation and maintenance, we provide comprehensive services."
  },
  {
    title: "Cloud-First Approach",
    description: "We leverage the latest cloud technologies to build scalable, cost-effective solutions."
  },
  {
    title: "Agile Methodology",
    description: "Our iterative approach ensures rapid delivery and adaption to changing requirements."
  },
  {
    title: "Focus on Business Value",
    description: "We align data solutions with your business objectives to maximize ROI."
  },
  {
    title: "Ongoing Support",
    description: "We're committed to your long-term success with dedicated maintenance and support."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Why Choose <span className="gradient-text">ivdata</span> for Your Data Engineering Needs</h2>
            <p className="text-lg text-gray-600 mb-8">
              We combine technical excellence with a deep understanding of business needs to deliver data solutions that drive real results.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex space-x-3">
                  <CheckCircle className="h-6 w-6 text-ivdata-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -right-20 bottom-20 w-64 h-64 bg-ivdata-secondary/20 rounded-full filter blur-3xl"></div>
            <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10 border border-gray-100">
              <div className="space-y-4">
                <div className="text-4xl font-bold text-ivdata-primary">98%</div>
                <p className="text-gray-600">Client satisfaction rate based on post-project surveys</p>
                <div className="border-t border-gray-200 my-4"></div>
                
                <div className="text-4xl font-bold text-ivdata-secondary">10x</div>
                <p className="text-gray-600">Average improvement in data processing efficiency</p>
                <div className="border-t border-gray-200 my-4"></div>
                
                <div className="text-4xl font-bold text-ivdata-accent">50+</div>
                <p className="text-gray-600">Successful data engineering projects delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
