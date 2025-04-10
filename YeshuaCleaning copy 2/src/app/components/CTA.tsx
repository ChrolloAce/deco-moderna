'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-40 h-40 border border-gold-400/30 rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 border border-gold-400/30 rounded-full"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Transform Your Space with <span className="text-gold-400">Luxury Remodeling</span>
            </h2>
            
            <p className="text-gray-200 text-lg mb-10">
              Ready to elevate your home with our premium remodeling services? Contact us today for a free consultation and personalized design proposal. Let us help you create the home of your dreams.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/contact" className="btn-gold px-8 py-4">
                Get a Free Design Consultation
              </Link>
              <Link href="/about" className="btn bg-gold-500/10 text-white hover:bg-gold-500/20 backdrop-blur-sm border border-gold-400/30">
                View Our Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 