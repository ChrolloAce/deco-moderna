'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "We primarily serve Orlando and surrounding areas. Our service area includes Orange County and nearby counties. Contact us to confirm if your location is within our service area."
        },
        {
      question: "How long does a typical remodeling project take?",
      answer: "Project timelines vary depending on the scope and complexity of the work. A kitchen remodel typically takes 4-8 weeks, while a full home renovation can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
        },
        {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer free initial consultations to discuss your remodeling needs. During this meeting, we'll assess your space, discuss your vision, and provide a preliminary estimate based on your requirements."
        },
        {
      question: "What types of remodeling services do you provide?",
      answer: "We offer comprehensive remodeling services including kitchen renovations, bathroom remodels, whole home renovations, custom cabinetry, historic home renovations, and commercial remodeling. Each project is customized to meet your specific needs and preferences."
        },
        {
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed and insured. We carry comprehensive liability insurance and workers' compensation coverage to protect both our clients and our team members during every project."
    },
    {
      question: "What is your payment structure?",
      answer: "We typically require a deposit to secure your project date, with progress payments throughout the project. We accept various payment methods including credit cards, checks, and bank transfers. Specific payment terms will be outlined in your contract."
        },
        {
      question: "Do you handle permits and inspections?",
      answer: "Yes, we handle all necessary permits and coordinate with local building inspectors. We ensure all work meets or exceeds local building codes and regulations."
        },
        {
      question: "What warranties do you offer?",
      answer: "We offer comprehensive warranties on our workmanship and materials. Specific warranty details vary by project type and will be clearly outlined in your contract. We stand behind our work and are committed to your satisfaction."
    },
        {
      question: "How do you handle project communication?",
      answer: "We maintain clear communication throughout your project. You'll have a dedicated project manager who will keep you updated on progress, handle any concerns, and ensure your vision is being realized. We also provide regular progress reports and are always available to answer your questions."
        },
        {
      question: "What makes Luxury Home Remodeling different from other remodeling companies?",
      answer: "Our commitment to excellence, attention to detail, and personalized service sets us apart. We combine years of experience with innovative design solutions, premium materials, and skilled craftsmanship. Our team is dedicated to delivering exceptional results that exceed expectations."
    }
  ];

  return (
    <>
      <Head>
        <title>Frequently Asked Questions | Luxury Home Remodeling Orlando</title>
        <meta name="description" content="Find answers to your questions about our Orlando remodeling services. Learn about our process, service areas, timeline, warranties, and what makes our Orlando renovation team unique." />
        <meta name="keywords" content="remodeling FAQ Orlando, renovation questions, home improvement FAQs, remodeling process, Orlando contractor questions, renovation timeline, remodeling cost Orlando, home renovation warranties, Orlando FL remodeling" />
      </Head>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-black">
          <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}>
          </div>
          <div className="container-custom relative z-10">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4"
              >
                Frequently Asked Questions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-200 max-w-3xl mx-auto"
              >
                Find answers to common questions about our remodeling services
              </motion.p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-black">{faq.question}</h3>
                      <svg
                        className={`w-6 h-6 text-gold-500 transform transition-transform duration-200 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                        </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-6 bg-white"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                      </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Still Have Questions?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We're here to help. Contact us today for a free consultation and let's discuss your remodeling project.
                </p>
                <a href="/contact" className="btn-gold">
                  Contact Us
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FAQPage; 