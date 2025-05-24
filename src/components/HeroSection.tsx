
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Database, Cloud, BarChart3 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                Scalable Data Infrastructure for{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Startups
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl">
                Cloud-native. Cost-efficient. Designed for scale.
              </p>
              <p className="text-lg text-slate-500 max-w-2xl">
                We help startups build scalable, cost-efficient data infrastructure without the overhead of a full-time data engineering team.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg">
                View Our Services
              </Button>
            </div>
            
            <div className="pt-8">
              <p className="text-sm text-slate-500 mb-4">Trusted by innovative startups:</p>
              <div className="flex flex-wrap gap-8 text-slate-400 font-medium">
                <span>TechFlow</span>
                <span>DataDriven</span>
                <span>ScaleUp</span>
                <span>CloudFirst</span>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                  <Database className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Cloud-Native</h3>
                  <p className="text-slate-600">AWS & GCP optimized architectures</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                  <BarChart3 className="h-10 w-10 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Scalable</h3>
                  <p className="text-slate-600">Built for future growth</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                  <Cloud className="h-10 w-10 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Cost-Efficient</h3>
                  <p className="text-slate-600">Reduce cloud spending by 30-50%</p>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-xl shadow-lg text-white hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-2">Ready to scale your data?</h3>
                  <p className="text-blue-100">Book your free consultation today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
