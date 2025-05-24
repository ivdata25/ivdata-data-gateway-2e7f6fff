
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">IV Data Solutions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're a team of senior data engineers with 10+ years of experience, passionate about helping startups build 
              scalable data infrastructure without the overhead of a full-time data engineering team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Story</h3>
              <p className="text-slate-600 mb-6">
                Founded by engineers who've scaled data systems at high-growth startups, we understand the unique challenges 
                of building data infrastructure when resources are tight and requirements change rapidly.
              </p>
              <p className="text-slate-600">
                We've been in your shoes – dealing with exponential data growth, tight budgets, and the pressure to deliver 
                insights quickly. That's why we focus on practical, cost-effective solutions that grow with your business.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <p className="text-slate-600">Years Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-indigo-600">50+</div>
                  <p className="text-slate-600">Pipelines Built</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">40%</div>
                  <p className="text-slate-600">Avg Cost Reduction</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">24/7</div>
                  <p className="text-slate-600">System Reliability</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">Our Mission</h3>
              <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto">
                To empower startups with enterprise-grade data capabilities through practical, cost-effective solutions 
                that drive real business outcomes and eliminate data infrastructure bottlenecks.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Our Values</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">T</span>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Transparency</h4>
                  <p className="text-slate-600">
                    Clear communication, honest timelines, and no hidden costs in everything we do.
                  </p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-indigo-600 font-bold text-xl">O</span>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Ownership</h4>
                  <p className="text-slate-600">
                    We treat your data systems as if they were our own, ensuring long-term success.
                  </p>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold text-xl">P</span>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Practical Solutions</h4>
                  <p className="text-slate-600">
                    Simple, effective solutions over unnecessary complexity. Results that matter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
