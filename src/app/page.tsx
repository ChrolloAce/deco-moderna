import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import AboutSection from './components/AboutSection';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import Footer from './components/Footer';
import React from 'react';

export const metadata = {
  title: 'Deco Moderna | Premium Renovation Services in Orlando, FL',
  description: 'Transform your home with Orlando\'s leading luxury remodeling company. Specializing in premium kitchen and bathroom renovations, custom cabinetry, and high-end flooring installation.',
  keywords: 'Deco Moderna Orlando, kitchen renovation Orlando FL, bathroom remodeling Orlando, custom cabinetry Orlando, premium renovation services, home improvement Orlando, Orlando contractors, high-end home renovation'
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <AboutSection />
      <Industries />
      <Testimonials />
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  );
} 