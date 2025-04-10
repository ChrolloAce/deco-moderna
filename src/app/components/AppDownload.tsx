'use client';

import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import Image from 'next/image';

const AppDownload = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="h-1 w-20 bg-gold-gradient mb-6 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Download Our Mobile App
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the convenience of scheduling and managing your remodeling projects right from your smartphone. Our mobile app makes it easy to stay connected with your project manager, view progress updates, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
              >
                <FaApple className="mr-3 text-2xl" />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>
              
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
              >
                <FaGooglePlay className="mr-3 text-2xl" />
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[500px] mt-8 md:mt-0"
          >
            <div className="absolute inset-0 flex justify-center">
              <div className="relative w-[280px] h-[560px]">
                <div className="absolute inset-0 bg-gray-900 rounded-[40px] shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400/30 to-transparent opacity-50 mix-blend-overlay"></div>
                  <div className="absolute top-0 left-0 right-0 h-6 bg-black"></div>
                  <div className="mt-6 p-4">
                    <div className="bg-gold-gradient h-10 rounded-lg mb-4 flex items-center justify-center text-white font-medium">
                      Luxury Home Remodeling
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gray-800 h-32 rounded-lg flex items-center justify-center text-white">
                        <span className="text-center px-4">Track your remodeling project in real-time</span>
                      </div>
                      <div className="bg-gray-800 h-32 rounded-lg flex items-center justify-center text-white">
                        <span className="text-center px-4">View progress photos and updates</span>
                      </div>
                      <div className="bg-gray-800 h-32 rounded-lg flex items-center justify-center text-white">
                        <span className="text-center px-4">Connect with your project manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload; 