'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Script from 'next/script';

const Testimonials = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Add any necessary code to handle iframe height adjustments
    const handleResize = () => {
      if (iframeRef.current) {
        iframeRef.current.style.height = 'auto';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
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
            What Our Clients Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients across Miami about their remodeling experiences
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Load the review widget script */}
          <Script 
            src="https://reputationhub.site/reputation/assets/review-widget.js" 
            strategy="afterInteractive"
          />
          
          {/* Add the review widget iframe */}
          <iframe 
            ref={iframeRef}
            className="lc_reviews_widget" 
            src="https://reputationhub.site/reputation/widgets/review_widget/VPmUecaDqDHR1HzGYr9B" 
            frameBorder="0" 
            scrolling="no" 
            style={{
              minWidth: '100%',
              width: '100%',
              border: 'none',
              minHeight: '650px'  // Increased from 400px to 650px
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 