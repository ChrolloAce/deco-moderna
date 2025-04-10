'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Industries = () => {
  const industries = [
    {
      title: 'Home Remodeling',
      description: 'Transform your residential space into a stunning masterpiece with our expert home remodeling services. We combine innovative design with premium craftsmanship to create exceptional living spaces tailored to your lifestyle.',
      features: [
        'Custom kitchen and bathroom renovations',
        'Whole-home remodeling and additions',
        'Smart home integration and automation',
        'Premium materials and finishes'
      ],
      link: '/contact',
      image: '/images/industries/home.png'
    },
    {
      title: 'Commercial Remodeling',
      description: 'Elevate your business environment with our commercial remodeling expertise. We transform commercial properties into inspiring environments that enhance functionality while creating impressive spaces that boost business success.',
      features: [
        'Office and retail space renovations',
        'Restaurant and hospitality remodeling',
        'Medical and healthcare facilities',
        'Storefront and customer area upgrades'
      ],
      link: '/contact',
      image: '/images/industries/commercial.png'
    },
    {
      title: 'Industrial Remodeling',
      description: 'Optimize your industrial facility with our specialized industrial remodeling services. We focus on creating functional, durable, and efficient spaces that meet the unique demands of industrial operations and workflows.',
      features: [
        'Warehouse and manufacturing renovations',
        'Industrial facility optimization',
        'Compliance and safety upgrades',
        'Durable materials and industrial-grade finishes'
      ],
      link: '/contact',
      image: '/images/industries/industrial.png'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
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
            Our Remodeling Specialties
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert remodeling solutions for every type of space
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-elegant group hover:shadow-gold transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <Image 
                    src={industry.image}
                    alt={industry.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 filter brightness-[0.9] group-hover:brightness-100"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="absolute bottom-4 left-0 w-full px-6"
                >
                  <h3 className="font-playfair text-2xl text-white font-semibold text-center drop-shadow-md">
                    {industry.title}
                  </h3>
                </motion.div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6 text-base">{industry.description}</p>
                
                <div className="space-y-3 mb-8">
                  {industry.features.map((feature, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-600 text-sm">{feature}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-center">
                  <Link 
                    href={industry.link}
                    className="inline-block px-6 py-3 bg-gradient-to-r from-black to-black text-white font-medium rounded-full hover:from-gold-500 hover:to-gold-600 transition-all duration-300 shadow-elegant transform hover:-translate-y-1"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries; 