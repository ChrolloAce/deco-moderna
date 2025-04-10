'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaAward, FaHandshake, FaStar, FaUsers, FaLeaf } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

const AboutPage = () => {
  // Company stats
  const stats = [
    { number: '10+', text: 'Years in Miami' },
    { number: '2,500+', text: 'Happy Clients' },
    { number: '99%', text: 'Satisfaction Rate' },
    { number: '24/7', text: 'Customer Support' },
  ];

  // Company values
  const values = [
    {
      icon: <FaAward className="w-6 h-6 text-gold-500" />,
      title: 'Excellence',
      description: 'We strive for perfection in every detail, ensuring your space exceeds your expectations.'
    },
    {
      icon: <FaStar className="w-6 h-6 text-gold-500" />,
      title: 'Reliability',
      description: 'Count on our punctual, consistent service that delivers the same high quality every time.'
    },
    {
      icon: <FaHandshake className="w-6 h-6 text-gold-500" />,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and respect for your property and privacy.'
    },
    {
      icon: <FaUsers className="w-6 h-6 text-gold-500" />,
      title: 'Community',
      description: 'Proud to serve and support our local Miami community with jobs and partnerships.'
    },
    {
      icon: <FaLeaf className="w-6 h-6 text-gold-500" />,
      title: 'Sustainability',
      description: 'Using eco-friendly products and practices to protect your health and our environment.'
    }
  ];

  // Why choose us points
  const whyChooseUs = [
    'Experienced, background-checked professionals',
    'Customized cleaning plans tailored to your needs',
    'Premium eco-friendly cleaning products',
    'Attention to detail in every corner',
    'Flexible scheduling to fit your lifestyle',
    'Comprehensive insurance coverage',
    'Satisfaction guaranteed with every clean',
    'Specialized in Miami\'s unique property needs'
  ];

  return (
    <>
      <Head>
        <title>About Luxury Home Remodeling | Expert Renovation Team in Orlando</title>
        <meta name="description" content="Learn about Luxury Home Remodeling's 15+ years of experience delivering premium renovation services in Orlando. Discover our values, mission, and commitment to quality craftsmanship." />
        <meta name="keywords" content="about luxury home remodeling, remodeling experts Orlando, Orlando renovation company, premium contractors, home improvement specialists Orlando, luxury home renovation Orlando, custom remodeling services Florida" />
      </Head>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-black">
          <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: 'url("/images/other-stock-images/image10.jpg")',
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
                About Luxury Home Remodeling
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-200 max-w-3xl mx-auto"
              >
                Your trusted partner in luxury remodeling services across Orlando
              </motion.p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-2xl overflow-hidden"
              >
                <Image
                  src="/images/other-stock-images/image17.jpg"
                  alt="Luxury Remodeling"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="h-1 w-20 bg-gold-gradient mb-6 rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Luxury Home Remodeling, we're dedicated to transforming spaces into extraordinary living environments. Our mission is to bring your remodeling vision to life with unmatched craftsmanship, attention to detail, and a commitment to excellence.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Based in Orlando, we serve clients throughout the region, delivering premium remodeling services that combine innovative design with superior quality.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <div className="text-3xl font-bold text-gold-500 mb-2">15+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <div className="text-3xl font-bold text-gold-500 mb-2">500+</div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="h-1 w-20 bg-gold-gradient mx-auto mb-6 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide our work and set us apart
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality Craftsmanship",
                  description: "We maintain the highest standards of workmanship, using premium materials and proven techniques to ensure lasting results.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Customer Satisfaction",
                  description: "Your satisfaction is our top priority. We work closely with you throughout the project to ensure your vision becomes reality.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  )
                },
                {
                  title: "Innovation",
                  description: "We stay current with the latest trends and technologies in remodeling to provide you with modern, efficient solutions.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-elegant"
                >
                  <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 text-gold-500">
                      {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: 'url("/images/other-stock-images/image17.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}>
          </div>
          <div className="container-custom relative z-10">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Ready to Transform Your Space?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
              >
                Contact us today for a free consultation and let's discuss your remodeling project.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <a href="/contact" className="btn-gold">
                  Get Started
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

export default AboutPage; 