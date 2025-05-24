
import React from 'react';
import { Mail, MessageSquare, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message sent successfully!",
      description: "Thanks for reaching out. We'll get back to you within 24 hours.",
    });
  };
  
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Let's Build Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Data Infrastructure</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to scale your data systems? Book a free consultation to discuss your startup's challenges and how we can help.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Email Us</h4>
                      <p className="text-slate-600">hello@ivdatasolutions.com</p>
                      <p className="text-sm text-slate-500">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Free Consultation</h4>
                      <p className="text-slate-600">30-minute video call with a senior data engineer</p>
                      <p className="text-sm text-slate-500">No sales pitch, just solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Response Time</h4>
                      <p className="text-slate-600">Same day response for urgent requests</p>
                      <p className="text-sm text-slate-500">We understand startup timelines</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-4">What to Expect</h4>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center">
                    <div className="h-2 w-2 bg-blue-400 rounded-full mr-3"></div>
                    <span>Discussion of your current data challenges</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 bg-blue-400 rounded-full mr-3"></div>
                    <span>Assessment of your technical requirements</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 bg-blue-400 rounded-full mr-3"></div>
                    <span>Custom recommendations for your use case</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 bg-blue-400 rounded-full mr-3"></div>
                    <span>Timeline and cost estimates</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Name *</label>
                    <Input id="name" placeholder="Your full name" required className="border-slate-300" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email *</label>
                    <Input id="email" type="email" placeholder="your@email.com" required className="border-slate-300" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-slate-700">Company</label>
                  <Input id="company" placeholder="Your startup name" className="border-slate-300" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Tell us about your data challenges *</label>
                  <Textarea 
                    id="message" 
                    placeholder="What are your goals? What problems are you facing? What's your current data volume and growth rate?" 
                    rows={5} 
                    required 
                    className="border-slate-300"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                  Book Free Consultation
                </Button>
                
                <p className="text-xs text-slate-500 text-center">
                  By submitting this form, you agree to our privacy policy. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
