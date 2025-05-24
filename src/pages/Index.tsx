
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutUsSection from '../components/AboutUsSection';
import TechnologiesSection from '../components/TechnologiesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <TechnologiesSection />
        <WhyChooseUsSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
