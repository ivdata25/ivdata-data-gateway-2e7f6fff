
import React from 'react';

const AboutUsSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-4">About <span className="gradient-text">IV Data Solutions</span></h2>
            <p className="text-lg text-gray-600 mb-6">
              We're a team of senior data engineers with 10+ years of experience, passionate about helping startups build 
              scalable data infrastructure without the overhead of a full-time data engineering team.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To empower startups with enterprise-grade data capabilities through practical, 
                  cost-effective solutions that drive real business outcomes.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-ivdata-primary">Transparency</h4>
                    <p className="text-sm text-gray-600">
                      Clear communication and no hidden costs in everything we do
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-ivdata-primary">Ownership</h4>
                    <p className="text-sm text-gray-600">
                      We treat your data systems as if they were our own
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-ivdata-primary">Practicality</h4>
                    <p className="text-sm text-gray-600">
                      Simple, effective solutions over unnecessary complexity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-ivdata-primary/10 to-ivdata-secondary/10 p-8 sm:p-12">
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-ivdata-primary">10+</div>
                    <p className="text-gray-600">Years of combined experience</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4"></div>
                  <div>
                    <div className="text-4xl font-bold text-ivdata-secondary">50+</div>
                    <p className="text-gray-600">Data pipelines architected</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4"></div>
                  <div>
                    <div className="text-4xl font-bold text-ivdata-accent">40%</div>
                    <p className="text-gray-600">Average cost reduction for clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
