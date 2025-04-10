'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const services = {
  'kitchen-remodeling': {
    title: 'Kitchen Remodeling',
    description: 'Transform your kitchen into a beautiful, functional space that meets your needs and exceeds your expectations. Our expert team combines innovative design with superior craftsmanship to create your dream kitchen.',
    longDescription: `A kitchen remodel is one of the most impactful home improvements you can make. Our comprehensive kitchen remodeling service includes everything from initial design to final installation, ensuring a seamless process and exceptional results.

    We specialize in creating kitchens that are both beautiful and functional, with attention to detail in every aspect of the design and construction process. From custom cabinetry to high-end appliances, we use only the finest materials and work with trusted manufacturers to deliver lasting quality.`,
    features: [
      'Custom Cabinetry Design',
      'Quartz & Granite Countertops',
      'Smart Appliance Integration',
      'Island & Bar Seating',
      'Under-cabinet Lighting',
      'Backsplash Installation',
      'Custom Storage Solutions',
      'Hardwood Flooring',
      'Modern Fixtures',
      'Energy-efficient Appliances'
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'We meet with you to understand your vision, needs, and budget for your kitchen remodel.'
      },
      {
        title: 'Design Phase',
        description: 'Our design team creates detailed plans and 3D renderings of your new kitchen.'
      },
      {
        title: 'Material Selection',
        description: 'Choose from our curated selection of premium materials, fixtures, and appliances.'
      },
      {
        title: 'Construction',
        description: 'Our skilled craftsmen bring your design to life with precision and care.'
      },
      {
        title: 'Final Walkthrough',
        description: 'We ensure every detail meets your expectations before project completion.'
      }
    ],
    image: '/images/stockservice/Kitchens/1.png',
    gallery: [
      'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  'bathroom-remodeling': {
    title: 'Bathroom Remodeling',
    description: 'Create your dream bathroom with luxurious fixtures, custom tile work, and modern amenities. We transform ordinary bathrooms into extraordinary spaces.',
    longDescription: `A bathroom remodel can significantly enhance your home's value and your daily living experience. Our bathroom remodeling service focuses on creating spaces that are both beautiful and functional, with attention to detail in every aspect of the design and construction process.

    We specialize in custom bathroom designs that reflect your personal style while incorporating modern amenities and luxury features. From custom showers to freestanding tubs, we use premium materials and expert craftsmanship to create bathrooms that stand the test of time.`,
    features: [
      'Custom Shower Design',
      'Freestanding Tubs',
      'Heated Floors',
      'Double Vanities',
      'Smart Fixtures',
      'Custom Tile Work',
      'LED Lighting',
      'Storage Solutions',
      'Water-efficient Fixtures',
      'Ventilation Systems'
    ],
    process: [
      {
        title: 'Design Consultation',
        description: 'We discuss your vision and requirements for your new bathroom.'
      },
      {
        title: 'Detailed Planning',
        description: 'Our team creates comprehensive plans and 3D visualizations.'
      },
      {
        title: 'Material Selection',
        description: 'Choose from our selection of premium materials and fixtures.'
      },
      {
        title: 'Expert Installation',
        description: 'Our skilled team handles the renovation with precision.'
      },
      {
        title: 'Quality Check',
        description: 'We ensure everything meets our high standards before completion.'
      }
    ],
    image: '/images/stockservice/bathroom remdoeling/1.png',
    gallery: [
      'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6444247/pexels-photo-6444247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7546528/pexels-photo-7546528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  'whole-home-remodeling': {
    title: 'Whole Home Remodeling',
    description: 'Complete home transformation that modernizes your space while maintaining its original charm. We handle every aspect of your home renovation.',
    longDescription: `Whole home remodeling is a comprehensive approach to transforming your living space. Our service covers every aspect of your home, from structural updates to interior finishes, ensuring a cohesive and beautiful result.

    We work with you to create a unified design that reflects your style and meets your family's needs. Our team handles everything from permits to final touches, making the process smooth and stress-free.`,
    features: [
      'Open Floor Plans',
      'Kitchen & Bath Updates',
      'Hardwood Flooring',
      'Smart Home Integration',
      'Energy Efficiency',
      'Custom Storage Solutions',
      'HVAC Updates',
      'Electrical Modernization',
      'Interior Design',
      'Exterior Updates'
    ],
    process: [
      {
        title: 'Comprehensive Planning',
        description: 'We develop a detailed plan for your entire home renovation.'
      },
      {
        title: 'Design Development',
        description: 'Our team creates cohesive designs for all spaces.'
      },
      {
        title: 'Phase Planning',
        description: 'We organize the renovation into manageable phases.'
      },
      {
        title: 'Construction',
        description: 'Our team executes the renovation with precision.'
      },
      {
        title: 'Final Touches',
        description: 'We ensure every detail is perfect before completion.'
      }
    ],
    image: '/images/stockservice/Kitchens/5.png',
    gallery: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  'custom-cabinetry': {
    title: 'Custom Cabinetry',
    description: 'Handcrafted cabinetry solutions for kitchens, bathrooms, and built-in storage throughout your home. We create custom storage solutions that perfectly fit your space.',
    longDescription: `Custom cabinetry is the perfect way to maximize your storage space while adding beauty to your home. Our custom cabinetry service provides tailored solutions that perfectly fit your space and meet your specific storage needs.

    We work with premium materials and expert craftsmen to create cabinetry that is both beautiful and functional. From kitchen cabinets to built-in storage units, we design and build cabinetry that enhances your home's value and usability.`,
    features: [
      'Custom Design',
      'Premium Materials',
      'Soft-close Hardware',
      'Built-in Organizers',
      'Custom Finishes',
      'Professional Installation',
      'Storage Solutions',
      'Hardware Selection',
      'Finish Options',
      'Accessory Integration'
    ],
    process: [
      {
        title: 'Space Analysis',
        description: 'We measure and analyze your space for optimal cabinet design.'
      },
      {
        title: 'Design Development',
        description: 'Our team creates detailed cabinet designs and layouts.'
      },
      {
        title: 'Material Selection',
        description: 'Choose from our selection of premium materials and finishes.'
      },
      {
        title: 'Custom Manufacturing',
        description: 'Our craftsmen build your custom cabinetry with precision.'
      },
      {
        title: 'Professional Installation',
        description: 'We install your cabinetry with expert attention to detail.'
      }
    ],
    image: '/images/stockservice/cabinets/1.png',
    gallery: [
      'https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6937414/pexels-photo-6937414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6508357/pexels-photo-6508357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  'flooring': {
    title: 'Flooring',
    description: 'Premium flooring solutions including hardwood, tile, and luxury vinyl for every area of your home. We provide expert installation with superior craftsmanship.',
    longDescription: `The right flooring can transform the look and feel of your entire home. Our flooring service offers a wide selection of premium materials and expert installation for beautiful, durable floors that stand the test of time.

    We specialize in various flooring solutions, from classic hardwood to modern luxury vinyl planks. Our team works with you to select the perfect flooring type for each space, considering factors like traffic, moisture, and your unique style preferences.`,
    features: [
      'Hardwood Installation',
      'Luxury Vinyl Planks (LVP)',
      'Porcelain & Ceramic Tile',
      'Natural Stone Flooring',
      'Heated Floor Systems',
      'Engineered Hardwood',
      'Laminate Solutions',
      'Custom Inlays & Patterns',
      'Subfloor Preparation',
      'Eco-Friendly Options'
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'We discuss your flooring needs, preferences, and budget for your project.'
      },
      {
        title: 'Material Selection',
        description: 'Choose from our curated selection of premium flooring materials and finishes.'
      },
      {
        title: 'Site Preparation',
        description: 'We prepare the subfloor and ensure proper conditions for installation.'
      },
      {
        title: 'Expert Installation',
        description: 'Our skilled technicians install your new flooring with precision and care.'
      },
      {
        title: 'Final Inspection',
        description: 'We conduct a thorough quality check to ensure perfect installation.'
      }
    ],
    image: '/images/stockservice/Flooring/1.png',
    gallery: [
      'https://images.pexels.com/photos/4992486/pexels-photo-4992486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5570224/pexels-photo-5570224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  'painting': {
    title: 'Painting',
    description: 'Professional interior and exterior painting services with premium finishes. Our expert painters deliver flawless results that enhance your space.',
    longDescription: `A fresh coat of paint can completely transform your home's appearance. Our professional painting service combines premium materials, skilled craftsmanship, and attention to detail for flawless, long-lasting results.

    We handle both interior and exterior painting projects with equal care and precision. From color consultation to final touch-ups, our team ensures a smooth process and exceptional finish that enhances the beauty of your home.`,
    features: [
      'Interior Wall Painting',
      'Exterior House Painting',
      'Cabinet Refinishing',
      'Color Consultation',
      'Texture Application',
      'Wallpaper Removal',
      'Deck & Fence Staining',
      'Custom Accent Walls',
      'Drywall Repair',
      'Eco-Friendly Paint Options'
    ],
    process: [
      {
        title: 'Color Consultation',
        description: 'We help you select the perfect colors and finishes for your space.'
      },
      {
        title: 'Surface Preparation',
        description: 'We properly clean, repair, and prime all surfaces for optimal paint adhesion.'
      },
      {
        title: 'Protection Setup',
        description: 'We carefully protect your furnishings, floors, and fixtures before painting.'
      },
      {
        title: 'Professional Painting',
        description: 'Our skilled painters apply paint with precision and attention to detail.'
      },
      {
        title: 'Final Walkthrough',
        description: 'We inspect all painted surfaces to ensure a flawless finish.'
      }
    ],
    image: '/images/stockservice/Painting/1.png',
    gallery: [
      'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6827203/pexels-photo-6827203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4946969/pexels-photo-4946969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6598364/pexels-photo-6598364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  }
};

const ServicePage = ({ params }: { params: { serviceId: string } }) => {
  const service = services[params.serviceId as keyof typeof services];
  const [selectedImage, setSelectedImage] = useState(0);

  if (!service) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-white">
          <div className="container-custom py-32 text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{`${service.title} in Orlando, FL | Luxury Home Remodeling`}</title>
        <meta name="description" content={`Professional ${service.title.toLowerCase()} services in Orlando, FL. ${service.description} Contact us for a free consultation.`} />
        <meta property="og:title" content={`${service.title} in Orlando, FL | Luxury Home Remodeling`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:image" content={service.image} />
        <meta name="keywords" content={`${service.title.toLowerCase()} Orlando, ${service.title.toLowerCase()} Orlando FL, premium ${service.title.toLowerCase()}, Orlando remodeling, luxury home renovation, custom ${service.title.toLowerCase()}, professional remodeling services Orlando, home improvement Orlando`} />
      </Head>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center bg-black">
          <div className="absolute inset-0 opacity-30" 
            style={{
              backgroundImage: `url("${
                service.title === 'Kitchen Remodeling' ? '/images/stockservice/Kitchens/4.png' :
                service.title === 'Bathroom Remodeling' ? '/images/stockservice/bathroom remdoeling/4.png' :
                service.title === 'Whole Home Remodeling' ? '/images/stockservice/Painting/4.png' :
                service.title === 'Custom Cabinetry' ? '/images/stockservice/cabinets/4.png' :
                service.title === 'Flooring' ? '/images/stockservice/Flooring/4.png' :
                '/images/stockservice/Painting/4.png'
              }")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-6 py-2 bg-gold-500 text-black rounded-full text-sm font-medium mb-6"
              >
                Orlando, FL Premium Services
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
              >
                {service.title} in Orlando
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-200 mb-8 max-w-2xl"
              >
                {service.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-gold-500 text-black rounded-full hover:bg-gold-600 transition-colors duration-300 font-medium text-lg"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  href="/portfolio" 
                  className="px-8 py-4 bg-white/10 text-white rounded-full hover:bg-white/20 backdrop-blur-sm border border-white/30 transition-colors duration-300 text-lg"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={`${service.title} in Orlando, FL`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-black mb-6">{service.title} Services in Orlando</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.longDescription}</p>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="text-3xl font-bold text-black mb-2">15+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="text-3xl font-bold text-black mb-2">500+</div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                </div>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 text-lg"
                >
                  Get Started
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">Key Features of Our {service.title} Services</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Discover what makes our Orlando {service.title.toLowerCase()} service exceptional
              </p>
            </div>
            
            <div className="space-y-16">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={
                        service.title === 'Kitchen Remodeling' ? '/images/stockservice/Kitchens/2.png' :
                        service.title === 'Bathroom Remodeling' ? '/images/stockservice/bathroom remdoeling/2.png' :
                        service.title === 'Whole Home Remodeling' ? '/images/stockservice/Flooring/2.png' :
                        service.title === 'Custom Cabinetry' ? '/images/stockservice/cabinets/2.png' :
                        service.title === 'Flooring' ? '/images/stockservice/Flooring/2.png' :
                        '/images/stockservice/Painting/2.png'
                      }
                      alt={`${service.features[0]} in Orlando, FL`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-bold text-black mb-4">{service.features[0]}</h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Our {service.features[0].toLowerCase()} provides exceptional quality and durability, with expert installation by our highly skilled team in Orlando. We use only the finest materials and techniques to ensure a beautiful, long-lasting result.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {Array(3).fill(0).map((_, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center mt-0.5">
                          <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-3 text-gray-600">{[
                          "Premium materials for superior quality and durability",
                          "Expert installation by our highly skilled professionals",
                          "Custom solutions tailored to your specific needs"
                        ][i]}</p>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
                  >
                    Contact Us
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center">
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={
                        service.title === 'Kitchen Remodeling' ? '/images/stockservice/Kitchens/5.png' :
                        service.title === 'Bathroom Remodeling' ? '/images/stockservice/bathroom remdoeling/5.png' :
                        service.title === 'Whole Home Remodeling' ? '/images/stockservice/Painting/5.png' :
                        service.title === 'Custom Cabinetry' ? '/images/stockservice/cabinets/5.png' :
                        service.title === 'Flooring' ? '/images/stockservice/Flooring/5.png' :
                        '/images/stockservice/Painting/5.png'
                      }
                      alt={`${service.features[1]} in Orlando, FL`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-bold text-black mb-4">{service.features[1]}</h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Our {service.features[1].toLowerCase()} provides exceptional quality and durability, with expert installation by our highly skilled team in Orlando. We use only the finest materials and techniques to ensure a beautiful, long-lasting result.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {Array(3).fill(0).map((_, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center mt-0.5">
                          <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-3 text-gray-600">{[
                          "Premium materials for superior quality and durability",
                          "Expert installation by our highly skilled professionals",
                          "Custom solutions tailored to your specific needs"
                        ][i]}</p>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
                  >
                    Contact Us
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.features.slice(2, 5).map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-black mb-3">{feature}</h3>
                  <p className="text-gray-600 mb-6">
                    We offer expert {feature.toLowerCase()} services in Orlando to enhance your home with the highest quality materials and craftsmanship.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center text-sm font-medium text-gold-500 hover:text-gold-600"
                  >
                    Get a Quote
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-black rounded-full hover:bg-gold-600 transition-colors duration-300 font-medium text-lg"
              >
                Schedule Your Free Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">Our {service.title} Process in Orlando</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                A seamless journey from concept to completion
              </p>
            </div>
            
            <div className="space-y-16">
              <div className="relative">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                  <div className="w-full lg:w-1/2">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={
                          service.title === 'Kitchen Remodeling' ? '/images/stockservice/Kitchens/3.png' :
                          service.title === 'Bathroom Remodeling' ? '/images/stockservice/bathroom remdoeling/3.png' :
                          service.title === 'Whole Home Remodeling' ? '/images/stockservice/cabinets/3.png' :
                          service.title === 'Custom Cabinetry' ? '/images/stockservice/cabinets/3.png' :
                          service.title === 'Flooring' ? '/images/stockservice/Flooring/3.png' :
                          '/images/stockservice/Painting/3.png'
                        }
                        alt={`${service.title} Process in Orlando, FL`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 space-y-10">
                    {service.process.slice(0, 3).map((step, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0 w-12 h-12 bg-gold-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-black mb-4">{step.title}</h3>
                            <p className="text-gray-600 text-lg">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Second part of process with another image */}
              {service.process.length > 3 && (
                <div className="relative">
                  <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center">
                    <div className="w-full lg:w-1/2">
                      <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src={
                            service.title === 'Kitchen Remodeling' ? '/images/stockservice/Kitchens/4.png' :
                            service.title === 'Bathroom Remodeling' ? '/images/stockservice/bathroom remdoeling/4.png' :
                            service.title === 'Whole Home Remodeling' ? '/images/stockservice/Painting/4.png' :
                            service.title === 'Custom Cabinetry' ? '/images/stockservice/cabinets/4.png' :
                            service.title === 'Flooring' ? '/images/stockservice/Flooring/4.png' :
                            '/images/stockservice/Painting/4.png'
                          }
                          alt={`${service.title} Results in Orlando, FL`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-10">
                      {service.process.slice(3).map((step, index) => (
                        <div key={index} className="relative">
                          <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 w-12 h-12 bg-gold-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                              {index + 4}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-black mb-4">{step.title}</h3>
                              <p className="text-gray-600 text-lg">{step.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-16 text-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-black rounded-full hover:bg-gold-600 transition-colors duration-300 font-medium text-lg"
              >
                Contact Us To Get Started
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-black text-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Us for {service.title} in Orlando</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Experience the difference with our premium remodeling services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Licensed & Insured</h3>
                <p className="text-gray-300">Full coverage for your peace of mind</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">15+ Years Experience</h3>
                <p className="text-gray-300">Proven track record of excellence</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Expert Team</h3>
                <p className="text-gray-300">Skilled professionals at your service</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Quality Guarantee</h3>
                <p className="text-gray-300">100% satisfaction guaranteed</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gold-500 relative">
          <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: `url("${
                service.title === 'Kitchen Remodeling' ? '/images/stockservice/Kitchens/5.png' :
                service.title === 'Bathroom Remodeling' ? '/images/stockservice/bathroom remdoeling/5.png' :
                service.title === 'Whole Home Remodeling' ? '/images/stockservice/Flooring/5.png' :
                service.title === 'Custom Cabinetry' ? '/images/stockservice/cabinets/5.png' :
                service.title === 'Flooring' ? '/images/stockservice/Flooring/5.png' :
                '/images/stockservice/Painting/5.png'
              }")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-black mb-6">Ready to Transform Your Orlando Space?</h2>
              <p className="text-black/80 text-xl mb-8">
                Schedule a free consultation with our team to discuss your remodeling project
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link 
                  href="/contact" 
                  className="px-10 py-5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 font-medium text-lg"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  href="/portfolio" 
                  className="px-10 py-5 bg-white text-black rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium text-lg"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicePage; 