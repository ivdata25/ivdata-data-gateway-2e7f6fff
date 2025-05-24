
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Scale Your Data Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the startups who've transformed their data capabilities with our expert engineering team. 
            Get a free consultation to discuss your specific challenges.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center justify-center md:justify-start text-blue-100">
              <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              <span>Free 30-minute consultation</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-blue-100">
              <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              <span>No obligation or sales pressure</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-blue-100">
              <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              <span>Custom solution recommendations</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              View Case Studies
            </Button>
          </div>
          
          <p className="text-blue-200 text-sm mt-6">
            Join 50+ startups who've scaled their data infrastructure with our help
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
