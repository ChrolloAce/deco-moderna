'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Script from 'next/script';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { SiteMetadata } from '../data/site-metadata';

const ContactPage = () => {
  const router = useRouter();
  const [iframeHeight, setIframeHeight] = useState(600);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'Kitchen Remodeling',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.frameHeight) {
        setIframeHeight(event.data.frameHeight + 50);
      }
    };

    // Set service from URL query parameter if available
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const serviceParam = urlParams.get('service');
      if (serviceParam) {
        setFormData(prev => ({ ...prev, service: serviceParam }));
      }
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    const submissionData = {
      ...formData,
      source: 'website-contact-form',
      timestamp: new Date().toISOString(),
      formLocation: 'Contact Page'
    };

    try {
      // Attempt to send email via API route
      const emailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!emailResponse.ok) {
        console.warn('Failed to send email, proceeding with form submission.');
        // Optionally: Log this error to your monitoring service
      }

      // Store in localStorage as backup regardless of email success
      if (typeof window !== 'undefined') {
        const previousSubmissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
        localStorage.setItem('formSubmissions', JSON.stringify([
          ...previousSubmissions,
          submissionData
        ]));
      }
      
      // Redirect to thank you page
      router.push('/thank-you');
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitError('There was an error submitting your form. Please try again or contact us directly by phone.');
      // Even if API call fails, try to save to localStorage
      if (typeof window !== 'undefined') {
        const previousSubmissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
        localStorage.setItem('formSubmissions', JSON.stringify([
          ...previousSubmissions,
          submissionData
        ]));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact information
  const contactInfo = [
    {
      icon: <FaPhone className="text-gold-500" />,
      title: 'Phone',
      details: '(502) 249-5729',
      action: 'tel:+15022495729',
      actionText: 'Call Now',
    },
    {
      icon: <FaEnvelope className="text-gold-500" />,
      title: 'Email',
      details: 'Savemoneyremodeling@gmail.com',
      action: 'mailto:Savemoneyremodeling@gmail.com',
      actionText: 'Send Email',
    },
    {
      icon: <FaMapMarkerAlt className="text-gold-500" />,
      title: 'Address',
      details: 'Louisville, KY',
      action: 'https://maps.google.com/?q=Louisville,KY',
      actionText: 'Get Directions',
    },
    {
      icon: <FaClock className="text-gold-500" />,
      title: 'Business Hours',
      details: 'Tue-Sat: 8am-6pm, Mon & Sun: Closed',
      action: '#booking',
      actionText: 'Book Now',
    },
  ];

  return (
    <>
      <Head>
        <title>{SiteMetadata.contact.title}</title>
        <meta name="description" content={SiteMetadata.contact.description} />
        <meta name="keywords" content={SiteMetadata.contact.keywords} />
        <link rel="canonical" href="https://www.decomodernaremodeling.com/contact" />
      </Head>
      <Navbar />
      <main>
        <section className="relative pt-32 pb-16 bg-black">
          <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
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
                Contact Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-200 max-w-3xl mx-auto"
              >
                We're here to answer your questions and provide you with exceptional remodeling services in Louisville, Kentucky.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="h-1 w-20 bg-gold-gradient mx-auto mb-6 rounded-full"></div>
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Contact Us Today
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get in touch with our Louisville remodeling experts for a free consultation and personalized quote
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-elegant p-8"
              >
                <h2 className="text-2xl font-bold text-black mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black mb-1">{info.title}</h3>
                        <p className="text-gray-600">
                          {info.title === 'Phone' || info.title === 'Email' ? (
                            <a href={info.action} className="hover:text-gold-500 transition-colors">
                              {info.details}
                            </a>
                          ) : (
                            info.details
                          )}
                        </p>
                        {info.title === 'Address' && (
                          <a href={info.action} target="_blank" rel="noopener noreferrer" className="text-sm text-gold-500 hover:underline mt-1 inline-block">
                            {info.actionText}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-elegant p-8"
              >
                <h2 className="text-2xl font-bold text-black mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      required
                      aria-required="true"
                    >
                      <option value="">Select a Service</option>
                      <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                      <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                      <option value="Flooring Installation">Flooring Installation</option>
                      <option value="Painting Services">Painting Services</option>
                      <option value="Custom Cabinetry">Custom Cabinetry</option>
                      <option value="Whole Home Remodeling">Whole Home Remodeling</option>
                      <option value="Free Consultation">Free Consultation</option>
                      <option value="Job Application">Job Application</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      required
                      aria-required="true"
                    ></textarea>
                  </div>

                  {submitError && (
                    <div className="p-3 bg-red-50 text-red-700 rounded-xl text-sm">
                      {submitError}
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 bg-gold-gradient text-dark font-medium rounded-full hover:bg-gold-400 transition-colors duration-300 shadow-gold disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center">
                    Your information is secure and will never be shared with third parties.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-8">Visit Us in Louisville, Kentucky</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-elegant">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199423.98264335608!2d-85.83031998916017!3d38.17753842511534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690b1ab35bd511%3A0xd4d3b4282071fd32!2sLouisville%2C%20KY!5e0!3m2!1sen!2sus!4v1649126436889!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Deco Moderna location in Louisville, Kentucky"
                aria-label="Google Maps showing Deco Moderna's location in Louisville, Kentucky"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Script
        id="lead-connector-chat-widget"
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="67e6db460d93973719f6b3dc"
        strategy="afterInteractive"
      />
    </>
  );
};

export default ContactPage; 