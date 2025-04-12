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
  title: 'Deco Moderna | Premium Renovation Services in Louisville, KY',
  description: 'Transform your home with Louisville\'s leading luxury remodeling company. Specializing in premium kitchen and bathroom renovations, custom cabinetry, and high-end flooring installation in Kentucky.',
  keywords: 'Deco Moderna Louisville, kitchen renovation Louisville KY, bathroom remodeling Kentucky, custom cabinetry Louisville, premium renovation services, home improvement Kentucky, Louisville contractors, high-end home renovation'
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