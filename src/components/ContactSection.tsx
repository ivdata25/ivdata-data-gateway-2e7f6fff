
import React from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message received",
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
  };
  
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-4">Ready to <span className="gradient-text">Transform</span> Your Data?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Get in touch with our team to discuss how our data engineering services can help your business unlock the full potential of your data.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-ivdata-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-ivdata-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email Us</h4>
                  <p className="text-gray-600">contact@ivdata.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-ivdata-primary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-ivdata-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Call Us</h4>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-ivdata-primary/10 p-3 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-ivdata-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Schedule a Consultation</h4>
                  <p className="text-gray-600">Book a free 30-minute consultation with our experts</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">Company</label>
                <Input id="company" placeholder="Your company" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="How can we help you?" rows={4} required />
              </div>
              
              <Button type="submit" className="w-full btn-primary">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
