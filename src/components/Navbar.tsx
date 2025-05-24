
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IV</span>
              </div>
              <span className="text-xl font-bold text-slate-900">Data Solutions</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#technologies" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Technologies</a>
            <a href="#case-studies" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Case Studies</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
          </div>
          
          <div className="hidden md:flex">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Book Consultation
            </Button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              className="text-slate-600 hover:text-blue-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4 space-y-4">
            <a 
              href="#about" 
              className="block text-slate-600 hover:text-blue-600 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="block text-slate-600 hover:text-blue-600 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="#technologies" 
              className="block text-slate-600 hover:text-blue-600 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Technologies
            </a>
            <a 
              href="#case-studies" 
              className="block text-slate-600 hover:text-blue-600 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </a>
            <a 
              href="#contact" 
              className="block text-slate-600 hover:text-blue-600 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4"
              onClick={() => setIsOpen(false)}
            >
              Book Consultation
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
