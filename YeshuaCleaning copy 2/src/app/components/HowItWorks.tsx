'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Initial Consultation',
      description: "Schedule a free consultation with our design team to discuss your vision, requirements, and budget for your Miami remodeling project.",
      icon: '/images/quote-icon.svg',
      color: 'from-black to-black',
      bgColor: 'bg-white',
      shadowColor: 'shadow-lg',
      iconBg: 'bg-gold-50'
    },
    {
      number: 2,
      title: 'Design & Planning',
      description: 'Our expert team creates detailed designs and plans, including 3D renderings, material selections, and project timeline for your approval.',
      icon: '/images/calendar-icon.svg',
      color: 'from-black to-gold-500',
      bgColor: 'bg-white',
      shadowColor: 'shadow-lg',
      iconBg: 'bg-gold-50'
    },
    {
      number: 3,
      title: 'Expert Execution',
      description: 'Our skilled craftsmen bring your vision to life with precision and attention to detail, ensuring the highest quality throughout the remodeling process.',
      icon: '/images/sparkle-icon.svg',
      color: 'from-gold-400 to-gold-600',
      bgColor: 'bg-white',
      shadowColor: 'shadow-lg',
      iconBg: 'bg-gold-50'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden relative">
      {/* Subtle background elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-black/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="h-1 w-20 bg-gold-gradient mx-auto mb-6 rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Our Remodeling Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From initial consultation to final walkthrough, we ensure a seamless remodeling experience
          </p>
        </motion.div>

        <div className="relative">
          {/* Horizontal connecting line */}
          <div className="absolute top-24 left-0 w-full h-0.5 bg-gray-200 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step card */}
                <div className={`rounded-xl ${step.bgColor} p-6 md:p-8 ${step.shadowColor} border border-gray-100 hover:border-gold-200 transition-all duration-300 hover:-translate-y-1`}>
                  {/* Top circle with number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <motion.div 
                      className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${step.color} text-white shadow-lg font-bold text-xl border-2 border-white`}
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                    >
                      {step.number}
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="pt-6 text-center">
                    <h3 className="font-playfair text-2xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className={`p-4 ${step.iconBg} rounded-full w-16 h-16 flex items-center justify-center`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {step.number === 1 && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        )}
                        {step.number === 2 && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        )}
                        {step.number === 3 && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        )}
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Arrow to next step - only visible on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 -right-6 z-10">
                    <svg className="w-12 h-12 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link 
            href="/contact#booking" 
            className="btn-gold px-8 py-4 inline-flex items-center justify-center shadow-lg rounded-full"
          >
            <span>Start Your Project</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 