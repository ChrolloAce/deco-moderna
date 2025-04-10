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
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Luxury Home Remodeling | Premium Renovation Services in Orlando, FL</title>
        <meta name="description" content="Transform your home with Orlando's leading luxury remodeling company. Specializing in premium kitchen and bathroom renovations, custom cabinetry, and high-end flooring installation." />
        <meta name="keywords" content="luxury home remodeling Orlando, kitchen renovation Orlando FL, bathroom remodeling Orlando, custom cabinetry Orlando, premium renovation services, home improvement Orlando, Orlando contractors, high-end home renovation" />
      </Head>
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
    </>
  );
} 