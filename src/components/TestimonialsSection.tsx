
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            What Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-slate-600">
            Trusted by innovative startups to build their data infrastructure foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-600 mb-4">
                "IV Data Solutions transformed our data chaos into a streamlined, cost-effective system. 
                Their expertise saved us months of trial and error."
              </blockquote>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">Sarah Chen</p>
                <p className="text-sm text-slate-500">CTO, TechFlow</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-600 mb-4">
                "The team's deep AWS expertise helped us scale from startup to enterprise-level data processing 
                without the typical growing pains."
              </blockquote>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">Michael Rodriguez</p>
                <p className="text-sm text-slate-500">Founder, DataDriven</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-600 mb-4">
                "Professional, transparent, and incredibly knowledgeable. They delivered exactly what they promised, 
                on time and under budget."
              </blockquote>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">Emily Watson</p>
                <p className="text-sm text-slate-500">VP Engineering, ScaleUp</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="bg-slate-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-slate-600 mb-6">
              See how we can help your startup build scalable, cost-efficient data infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm">
              <span>• 100% Client Satisfaction</span>
              <span>• On-Time Delivery</span>
              <span>• Transparent Pricing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
