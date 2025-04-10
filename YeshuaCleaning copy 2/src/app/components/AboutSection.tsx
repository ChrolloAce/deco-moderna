'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const AboutSection = () => {
  const stats = [
    { number: '15+', text: 'Years Experience' },
    { number: '500+', text: 'Projects Completed' },
    { number: '100%', text: 'Client Satisfaction' },
    { number: '50+', text: 'Expert Craftsmen' },
  ];

  const features = [
    'Award-winning design team with Miami expertise',
    'Premium materials and innovative techniques',
    'Licensed and insured for all remodeling projects',
    'Dedicated project management for seamless execution'
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3"
                alt="Luxury Remodeling"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            
            {/* Secondary smaller image */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-12 -right-12 w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-card z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3"
                alt="Luxury Kitchen Remodeling"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 33vw, 25vw"
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-400/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-black/10 rounded-full blur-2xl z-0"></div>
            
            {/* Stats */}
            <div className="absolute -bottom-8 -left-8 md:left-8 bg-white rounded-xl shadow-elegant p-6 z-10">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="font-display text-3xl text-black">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.text}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '40%' }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gold-gradient mb-8 rounded-full"
            ></motion.div>
            
            <h2 className="font-playfair text-3xl md:text-4xl mb-6 leading-tight">
              Miami's Premier <span className="text-black">Remodeling Company</span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              Since our founding, Luxury Home Remodeling has been at the forefront of innovative remodeling in Miami. Our passion for transforming spaces and creating exceptional living environments has made us the trusted choice for homeowners and businesses throughout South Florida.
            </p>
            
            <p className="text-gray-600 mb-8">
              We combine artistic vision with technical expertise to bring your remodeling dreams to life. Our team of skilled craftsmen and designers work together to create spaces that are not just beautiful, but functional and built to last. From historic preservation to modern renovations, we handle every detail with precision and care.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-500 flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">{item}</p>
                </motion.div>
              ))}
            </div>
            
            <Link 
              href="/about" 
              className="btn bg-gradient-to-r from-black to-black text-white hover:from-gold-500 hover:to-gold-600 transition-all duration-300 shadow-elegant transform hover:-translate-y-1 rounded-full"
            >
              Discover Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 