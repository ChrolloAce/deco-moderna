'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import BusinessInfo from '../data/business-info';

const Services = () => {
  const services = BusinessInfo.services;
  
  const serviceItems = [
    {
      title: "Kitchen Remodeling",
      description: "Custom kitchen designs with premium materials and modern appliances",
      image: "/images/Service Images/kitchens.png",
      id: "kitchen-remodeling"
    },
    {
      title: "Bathroom Renovation",
      description: "Luxurious bathroom transformations with custom tile work and fixtures",
      image: "/images/Service Images/Bathrooms.png",
      id: "bathroom-remodeling"
    },
    {
      title: "Whole Home Remodeling",
      description: "Complete home transformations with cohesive design and premium finishes",
      image: "/images/Service Images/Homes.png",
      id: "whole-home-remodeling"
    },
    {
      title: "Custom Cabinetry",
      description: "Handcrafted cabinetry solutions for kitchens, bathrooms, and living spaces",
      image: "/images/Service Images/Cabinets.png",
      id: "custom-cabinetry"
    },
    {
      title: "Flooring",
      description: "Premium flooring solutions including hardwood, tile, and luxury vinyl",
      image: "/images/Service Images/Flooring.png",
      id: "flooring"
    },
    {
      title: "Painting",
      description: "Professional interior and exterior painting services with premium finishes",
      image: "/images/Service Images/Paint.png",
      id: "painting"
    }
  ];

  return (
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
          {serviceItems.map((service, index) => (
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-gold">
            Explore All Remodeling Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 