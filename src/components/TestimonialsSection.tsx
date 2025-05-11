
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "IV Data Solutions helped us rebuild our entire data stack in just 6 weeks. Our analytics are now 10x faster and we've cut our AWS bill by 40%.",
    author: "Sarah L.",
    role: "CTO, FinTech Startup"
  },
  {
    quote: "Working with IV Data Solutions was refreshingly straightforward. No jargon, no overselling - just practical solutions that actually work for our scale.",
    author: "Michael R.",
    role: "CEO, Health Analytics Startup"
  },
  {
    quote: "They built us a data pipeline that hasn't failed once in 8 months. That reliability has been transformative for our business operations.",
    author: "Jamie T.",
    role: "Head of Product, E-commerce Platform"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">What Our <span className="gradient-text">Clients Say</span></h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from startups we've helped
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover border-gray-200 bg-white">
              <CardContent className="pt-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
