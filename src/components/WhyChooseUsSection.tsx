
import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: "Senior Expertise",
    description: "Work directly with experienced engineers, not account managers or junior staff."
  },
  {
    title: "Startup-Focused",
    description: "Solutions designed for growth-stage companies with cost-efficiency in mind."
  },
  {
    title: "Cloud-Native Approach",
    description: "Modern architectures that leverage the best of AWS and GCP capabilities."
  },
  {
    title: "No Lock-In",
    description: "Clean, documented code that your future team can easily maintain."
  },
  {
    title: "Practical Solutions",
    description: "We focus on business value, not overengineered systems that look impressive."
  },
  {
    title: "Knowledge Transfer",
    description: "We'll train your team to understand and operate the systems we build."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Why Choose <span className="gradient-text">IV Data Solutions</span></h2>
            <p className="text-lg text-gray-600 mb-8">
              We combine technical excellence with a deep understanding of startup challenges to deliver data systems that grow with your business.
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
                <div className="text-4xl font-bold text-ivdata-primary">60%</div>
                <p className="text-gray-600">Faster time-to-insight compared to building in-house</p>
                <div className="border-t border-gray-200 my-4"></div>
                
                <div className="text-4xl font-bold text-ivdata-secondary">40%</div>
                <p className="text-gray-600">Average reduction in cloud infrastructure costs</p>
                <div className="border-t border-gray-200 my-4"></div>
                
                <div className="text-4xl font-bold text-ivdata-accent">100%</div>
                <p className="text-gray-600">Startup-friendly pricing with flexible engagement models</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
