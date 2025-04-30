
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
              <span className="block">Unlock the Power of</span>
              <span className="gradient-text">Your Data</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-lg">
              Modern data engineering solutions that transform raw data into 
              valuable insights, empowering your business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">Schedule a Consultation</Button>
              <Button variant="outline" className="border-ivdata-primary text-ivdata-primary hover:bg-ivdata-primary/10">
                Learn More
              </Button>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-gray-500 mb-2">Trusted by industry leaders:</p>
              <div className="flex flex-wrap gap-6">
                <div className="text-gray-400 font-semibold">ACME Corp</div>
                <div className="text-gray-400 font-semibold">TechGiant</div>
                <div className="text-gray-400 font-semibold">DataFlow</div>
                <div className="text-gray-400 font-semibold">InnovateCo</div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-72 h-72 bg-ivdata-accent/20 rounded-full filter blur-3xl"></div>
            <div className="relative z-10 grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
                <Database className="h-8 w-8 text-ivdata-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Data Pipelines</h3>
                <p className="text-gray-600">Automated flows that ensure data reliability</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover mt-10">
                <Server className="h-8 w-8 text-ivdata-secondary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Cloud Infrastructure</h3>
                <p className="text-gray-600">Scalable solutions for modern businesses</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
                <Code className="h-8 w-8 text-ivdata-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">Data Integration</h3>
                <p className="text-gray-600">Connect your systems seamlessly</p>
              </div>
              <div className="bg-gradient-to-br from-ivdata-primary to-ivdata-secondary p-6 rounded-xl shadow-lg card-hover mt-10">
                <h3 className="text-lg font-semibold mb-2 text-white">Ready to transform your data?</h3>
                <p className="text-white/80">Get started with ivdata today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
