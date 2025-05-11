
import React from 'react';
import { Button } from '@/components/ui/button';
import { Database, Server, Code } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-bold tracking-tight">
              <span className="block">Data Infrastructure</span>
              <span className="gradient-text">Built for Startups</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-lg">
              We build scalable, cost-efficient data systems that grow with your business. 
              Expert data engineering without the overhead of a full-time team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">Book a Free Consultation</Button>
              <Button variant="outline" className="border-ivdata-primary text-ivdata-primary hover:bg-ivdata-primary/10">
                Our Services
              </Button>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-gray-500 mb-2">Trusted by innovative startups:</p>
              <div className="flex flex-wrap gap-6">
                <div className="text-gray-400 font-semibold">FinTech Co</div>
                <div className="text-gray-400 font-semibold">HealthAI</div>
                <div className="text-gray-400 font-semibold">EcoMetrics</div>
                <div className="text-gray-400 font-semibold">RetailFlow</div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-72 h-72 bg-ivdata-accent/20 rounded-full filter blur-3xl"></div>
            <div className="relative z-10 grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
                <Database className="h-8 w-8 text-ivdata-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Cloud-Native</h3>
                <p className="text-gray-600">AWS & GCP optimized architectures</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover mt-10">
                <Server className="h-8 w-8 text-ivdata-secondary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Cost-Efficient</h3>
                <p className="text-gray-600">Reduce cloud spending by 30-50%</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
                <Code className="h-8 w-8 text-ivdata-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">Scalable Pipelines</h3>
                <p className="text-gray-600">Built for future growth</p>
              </div>
              <div className="bg-gradient-to-br from-ivdata-primary to-ivdata-secondary p-6 rounded-xl shadow-lg card-hover mt-10">
                <h3 className="text-lg font-semibold mb-2 text-white">Ready to unlock your data?</h3>
                <p className="text-white/80">Book your free consultation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
