'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaCalendarCheck, FaStar, FaHome, FaBed, FaShower, FaTrash, FaSprayCan } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AirbnbServicePage = () => {
  // Service benefits
  const benefits = [
    {
      icon: <FaCalendarCheck className="text-gold-500" />,
      title: "Quick Turnarounds",
      description: "Fast, efficient cleaning between guest stays to maximize your booking potential."
    },
    {
      icon: <FaStar className="text-gold-500" />,
      title: "5-Star Reviews",
      description: "Pristine cleanliness that impresses guests and leads to excellent reviews."
    },
    {
      icon: <FaHome className="text-gold-500" />,
      title: "Property Preservation",
      description: "Careful cleaning that maintains your property's condition and extends its lifespan."
    },
    {
      icon: <FaSprayCan className="text-gold-500" />,
      title: "Sanitization Focus",
      description: "Thorough disinfection of high-touch surfaces for guest health and safety."
    }
  ];

  // Service process
  const processSteps = [
    {
      number: "01",
      title: "Initial Assessment",
      description: "We evaluate your property to understand its specific needs and create a customized cleaning plan."
    },
    {
      number: "02",
      title: "Scheduling System",
      description: "We integrate with your booking calendar to ensure timely cleaning between guest stays."
    },
    {
      number: "03",
      title: "Thorough Cleaning",
      description: "Our professional team delivers comprehensive cleaning according to our detailed checklist."
    },
    {
      number: "04",
      title: "Quality Inspection",
      description: "We perform a final walkthrough to ensure everything is perfect for your next guests."
    }
  ];

  // Checklist items
  const cleaningChecklist = [
    { area: "Living Areas", items: ["Dust all surfaces", "Vacuum and mop floors", "Clean windows and mirrors", "Sanitize remote controls", "Arrange decorative items", "Clean light fixtures"] },
    { area: "Kitchen", items: ["Clean appliances inside and out", "Sanitize countertops", "Clean sink and fixtures", "Restock dish soap and cleaning supplies", "Empty trash", "Check inventory of dishes and utensils"] },
    { area: "Bedrooms", items: ["Change all linens", "Make beds with fresh sheets", "Dust furniture", "Vacuum carpets", "Check for lost items", "Ensure adequate hangers in closets"] },
    { area: "Bathrooms", items: ["Sanitize toilet, sink, and shower/tub", "Clean mirrors and glass", "Replace towels", "Restock toilet paper and toiletries", "Mop floors", "Clean shower doors/curtains"] }
  ];

  // Pricing packages
  const pricingPackages = [
    {
      name: "Standard Turnover",
      price: "From $120",
      description: "Complete cleaning between guest stays",
      features: [
        "All rooms thoroughly cleaned",
        "Linens changed",
        "Bathrooms sanitized",
        "Kitchen deep cleaned",
        "Floors vacuumed and mopped",
        "Trash removed"
      ]
    },
    {
      name: "Deep Clean",
      price: "From $180",
      description: "Recommended monthly for high-turnover properties",
      features: [
        "Everything in Standard package",
        "Inside cabinets and drawers cleaned",
        "Appliances deep cleaned",
        "Upholstery vacuumed",
        "Windows cleaned inside",
        "Light fixtures dusted",
        "Air vents cleaned"
      ]
    },
    {
      name: "Premium Package",
      price: "Custom Quote",
      description: "Full-service property management cleaning",
      features: [
        "Everything in Deep Clean",
        "Inventory management",
        "Restocking services",
        "Damage reporting",
        "Maintenance issue alerts",
        "Emergency cleaning available",
        "Linen service"
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-primary-900">
          <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}>
          </div>
          <div className="absolute top-1/3 right-16 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-16 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>

          <div className="container-custom relative z-10">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '40%' }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-gold-gradient mb-8 rounded-full mx-auto"
              ></motion.div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-cormorant text-gold-400 text-lg md:text-2xl mb-4 italic"
              >
                Specialized Cleaning Solutions
              </motion.h4>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-bold"
              >
                Airbnb & Vacation <span className="gold-gradient-text">Rental Cleaning</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-200 max-w-3xl mx-auto"
              >
                Keep your rental property spotless and guest-ready with our specialized cleaning services
              </motion.p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left column - Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: '40%' }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gold-gradient mb-8 rounded-full"
                ></motion.div>
                
                <h2 className="font-playfair text-3xl md:text-4xl mb-6 leading-tight">
                  Specialized Cleaning for <span className="text-primary-600">Short-Term Rentals</span>
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Our Airbnb and vacation rental cleaning service is designed specifically for the unique needs of short-term rental properties. We understand that cleanliness is the #1 factor in guest reviews and booking success.
                </p>
                
                <p className="text-gray-600 mb-6">
                  With our specialized service, you can ensure your property is always impeccably clean, properly stocked, and ready to impress your next guests, no matter how tight the turnaround time.
                </p>
                
                <p className="text-gray-600 mb-8">
                  Operating in Miami's competitive vacation rental market requires attention to detail and reliability. Our flexible scheduling, thorough cleaning protocol, and quality assurance process ensure your property stands out from the competition.
                </p>
                
                <Link 
                  href="/contact#booking" 
                  className="btn-gold inline-flex items-center justify-center"
                >
                  <span>Schedule Your Service</span>
                </Link>
              </motion.div>

              {/* Right column - Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
                  <Image
                    src="https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Airbnb rental cleaned by Yeshua Cleaning"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-primary-900/10"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-400/10 rounded-full blur-3xl z-0"></div>
                <div className="absolute -top-5 -right-5 w-24 h-24 bg-primary-600/10 rounded-full blur-2xl z-0"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
              <h2 className="section-title">
                Benefits for <span className="text-primary-600">Property Owners</span>
              </h2>
              <p className="section-subtitle text-gray-600">
                How our specialized vacation rental cleaning service helps your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-elegant border border-gray-100"
                >
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6 text-2xl">
                    {benefit.icon}
                  </div>
                  <h3 className="font-playfair text-xl mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="h-1 w-20 bg-gold-gradient mx-auto mb-6 rounded-full"></div>
              <h2 className="section-title">
                Our <span className="text-primary-600">Process</span>
              </h2>
              <p className="section-subtitle text-gray-600">
                How we ensure consistent, high-quality results for your property
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-8 relative group hover:shadow-elegant transition-all duration-300"
                >
                  <div className="text-7xl font-playfair text-primary-100 absolute -top-6 right-4 group-hover:text-gold-200 transition-colors duration-300">
                    {step.number}
                  </div>
                  <div className="relative">
                    <h3 className="font-playfair text-xl mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cleaning Checklist */}
        <section className="py-20 bg-primary-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixlib=rb-4.0.3")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/3 right-16 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-16 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="h-1 w-20 bg-gold-gradient mx-auto mb-6 rounded-full"></div>
              <h2 className="font-display text-4xl text-white mb-6 font-bold">
                Our Comprehensive <span className="gold-gradient-text">Cleaning Checklist</span>
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                We leave no corner untouched to ensure your guests have an exceptional experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cleaningChecklist.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <h3 className="font-playfair text-2xl text-gold-300 mb-6">{area.area}</h3>
                  <div className="space-y-3">
                    {area.items.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <FaCheck className="text-gold-400 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-100">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="h-1 w-20 bg-gold-gradient mx-auto mb-6 rounded-full"></div>
              <h2 className="section-title">
                Our <span className="text-primary-600">Packages</span>
              </h2>
              <p className="section-subtitle text-gray-600">
                Flexible cleaning solutions tailored to your property's needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-xl p-8 border ${index === 1 ? 'bg-primary-50 border-primary-100 shadow-elegant' : 'bg-white border-gray-200'}`}
                >
                  <h3 className="font-playfair text-2xl mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-3xl font-display text-primary-600 mb-6">{pkg.price}</div>
                  
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <FaCheck className="text-gold-500 mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-600">{feature}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href="/contact#booking" 
                    className={index === 1 ? "btn-gold w-full text-center" : "btn-primary w-full text-center"}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-10 text-gray-600">
              <p>* Prices vary based on property size, location, and specific requirements. Contact us for a personalized quote.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="rounded-2xl bg-primary-900 p-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" 
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay'
                }}>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-1/3 right-16 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 left-16 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: '40%' }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gold-gradient mb-8 rounded-full mx-auto"
                ></motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="font-display text-3xl md:text-4xl text-white mb-6 font-bold"
                >
                  Elevate Your Guest Experience Today
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-200 mb-8"
                >
                  Partner with Miami's preferred cleaning service for vacation rentals and see the difference in your guest reviews and booking rates.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href="/contact#booking" 
                    className="btn-gold px-8 py-4 inline-flex items-center justify-center"
                  >
                    <span>Schedule a Consultation</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AirbnbServicePage; 