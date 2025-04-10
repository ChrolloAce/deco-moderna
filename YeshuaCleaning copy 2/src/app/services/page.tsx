'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BusinessInfo from '../data/business-info';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import Head from 'next/head';

// Type definitions
interface SubService {
  name: string;
  description: string;
}

interface ServiceDetail {
  benefits: string[];
  priceFrom: number;
  frequency: string[];
  subServices: SubService[];
}

interface ServiceDetailsMap {
  [key: string]: ServiceDetail;
}

const ServicesPage = () => {
  const serviceItems = [
    {
      title: "Kitchen Remodeling",
      description: "Custom kitchen designs with premium materials and modern appliances",
      image: "/images/Service Images/kitchens.png",
      category: "Interior Remodeling",
      id: "kitchen-remodeling"
    },
    {
      title: "Bathroom Renovation",
      description: "Luxurious bathroom transformations with custom tile work and fixtures",
      image: "/images/Service Images/Bathrooms.png",
      category: "Interior Remodeling",
      id: "bathroom-remodeling"
    },
    {
      title: "Whole Home Remodeling",
      description: "Complete home transformations with cohesive design and premium finishes",
      image: "/images/Service Images/Homes.png",
      category: "Interior Remodeling",
      id: "whole-home-remodeling"
    },
    {
      title: "Custom Cabinetry",
      description: "Handcrafted cabinetry solutions for kitchens, bathrooms, and living spaces",
      image: "/images/Service Images/Cabinets.png",
      category: "Specialized Services",
      id: "custom-cabinetry"
    },
    {
      title: "Flooring",
      description: "Premium flooring solutions including hardwood, tile, and luxury vinyl",
      image: "/images/Service Images/Flooring.png",
      category: "Specialized Services",
      id: "flooring"
    },
    {
      title: "Painting",
      description: "Professional interior and exterior painting services with premium finishes",
      image: "/images/Service Images/Paint.png",
      category: "Specialized Services",
      id: "painting"
    }
  ];

  const categories = ['All Services', 'Interior Remodeling', 'Specialized Services'];
  const [activeCategory, setActiveCategory] = useState('All Services');

  const filteredServices = activeCategory === 'All Services'
    ? serviceItems
    : serviceItems.filter(service => service.category === activeCategory);

  return (
    <>
      <Head>
        <title>Premium Remodeling Services | Orlando Home Renovation Experts</title>
        <meta name="description" content="Explore our comprehensive home remodeling services in Orlando, FL. From kitchen and bathroom renovations to custom cabinetry, flooring, and painting - transform your home with our expert team." />
        <meta name="keywords" content="remodeling services Orlando, kitchen renovation Orlando, bathroom remodeling FL, custom cabinetry Orlando, flooring installation Orlando, painting services, whole home remodeling Florida, premium renovation Orlando" />
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
                Our Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-200 max-w-3xl mx-auto"
              >
                Comprehensive remodeling solutions for your home in Orlando and surrounding areas
              </motion.p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="h-1 w-20 bg-gold-gradient mx-auto mb-6 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Our Remodeling Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From custom kitchens to complete home renovations, we offer comprehensive remodeling solutions to transform your space
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl shadow-elegant transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Link href={`/services/${service.id}`} className="block relative h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Link>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-200">{service.description}</p>
                    <Link 
                      href={`/services/${service.id}`} 
                      className="inline-flex items-center mt-4 text-gold-400 hover:text-gold-300"
                    >
                      <span className="text-sm font-medium">Learn More</span>
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results Message */}
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl text-gray-600 mb-4">No services found in this category</h3>
                <button 
                  onClick={() => setActiveCategory('All Services')} 
                  className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
                >
                  View All Services
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-5xl text-white mb-6"
              >
                Ready to Transform Your Space?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-200 mb-8 text-lg"
              >
                Schedule a free consultation with our team to discuss your remodeling project
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-gold-500 text-black rounded-full hover:bg-gold-600 transition-colors duration-300 font-medium"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  href="/portfolio" 
                  className="px-8 py-4 bg-white/10 text-white rounded-full hover:bg-white/20 backdrop-blur-sm border border-white/30 transition-colors duration-300"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage; 