
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="py-4 border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-ivdata-primary">iv</span>
              <span className="text-2xl font-bold text-ivdata-secondary">data</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-ivdata-primary transition-colors">Services</a>
            <a href="#why-us" className="text-gray-600 hover:text-ivdata-primary transition-colors">Why Choose Us</a>
            <a href="#case-studies" className="text-gray-600 hover:text-ivdata-primary transition-colors">Case Studies</a>
            <a href="#contact" className="text-gray-600 hover:text-ivdata-primary transition-colors">Contact</a>
          </div>
          
          <div className="hidden md:flex">
            <Button className="bg-ivdata-primary hover:bg-ivdata-primary/90 text-white">Get Started</Button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              className="text-gray-500 hover:text-ivdata-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <a 
              href="#services" 
              className="block text-gray-600 hover:text-ivdata-primary py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="#why-us" 
              className="block text-gray-600 hover:text-ivdata-primary py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Why Choose Us
            </a>
            <a 
              href="#case-studies" 
              className="block text-gray-600 hover:text-ivdata-primary py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </a>
            <a 
              href="#contact" 
              className="block text-gray-600 hover:text-ivdata-primary py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Button 
              className="w-full bg-ivdata-primary hover:bg-ivdata-primary/90 text-white"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
