'use client';

import Navbar from './components/Navbar';
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
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">
              Welcome to Luxury Home Remodeling
            </h1>
            <p className="text-xl text-center max-w-4xl mx-auto">
              Orlando's premier luxury home remodeling service. We're currently updating our website to serve you better.
            </p>
          </div>
        </div>
      </main>
    </>
  );
} 