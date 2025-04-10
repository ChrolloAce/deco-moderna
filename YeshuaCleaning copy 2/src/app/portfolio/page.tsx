'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

interface Project {
  title: string;
  location: string;
  category: string;
  image: string;
  description: string;
}

const PortfolioPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'Kitchen Remodeling', name: 'Kitchen Remodeling' },
    { id: 'Bathroom Remodeling', name: 'Bathroom Remodeling' },
    { id: 'Flooring', name: 'Flooring' }
  ];

  const projects: Project[] = [
    {
      title: "Modern Kitchen Transformation",
      location: "Orlando, FL",
      category: "Kitchen Remodeling",
      image: "/images/2024-04-22.jpg",
      description: "Complete kitchen renovation featuring custom cabinetry, quartz countertops, and modern appliances. This stunning transformation creates a perfect blend of functionality and luxury."
    },
    {
      title: "Luxury Bathroom Remodel",
      location: "Orlando, FL",
      category: "Bathroom Remodeling",
      image: "/images/2024-04-22 (1).jpg",
      description: "Elegant master bathroom renovation with premium fixtures, custom tile work, and a spacious walk-in shower. The design creates a spa-like atmosphere for ultimate relaxation."
    },
    {
      title: "Premium Hardwood Flooring",
      location: "Orlando, FL",
      category: "Flooring",
      image: "/images/2024-04-22 (2).jpg",
      description: "Luxurious hardwood flooring installation featuring premium oak with custom staining and finishing. The result is a timeless, elegant foundation for any space."
    },
    {
      title: "Premium Bathroom Suite",
      location: "Orlando, FL",
      category: "Bathroom Remodeling",
      image: "/images/2024-04-22 (3).jpg",
      description: "Luxurious bathroom suite with designer fixtures, custom vanity, and elegant tile patterns. This renovation brings modern luxury to everyday living."
    },
    {
      title: "Contemporary Kitchen Update",
      location: "Orlando, FL",
      category: "Kitchen Remodeling",
      image: "/images/2024-04-22 (4).jpg",
      description: "Modern kitchen update with sleek finishes, custom storage solutions, and premium appliances. The design maximizes space while maintaining elegance."
    },
    {
      title: "Luxury Vinyl Plank Installation",
      location: "Orlando, FL",
      category: "Flooring",
      image: "/images/2024-04-22 (5).jpg",
      description: "Premium luxury vinyl plank installation with waterproof technology and realistic wood grain patterns. Perfect for high-traffic areas while maintaining elegance."
    },
    {
      title: "Gourmet Kitchen Design",
      location: "Orlando, FL",
      category: "Kitchen Remodeling",
      image: "/images/2024-04-22 (6).jpg",
      description: "Gourmet kitchen design with custom cabinetry, premium countertops, and professional-grade appliances. Perfect for both cooking and entertaining."
    },
    {
      title: "Master Bathroom Suite",
      location: "Orlando, FL",
      category: "Bathroom Remodeling",
      image: "/images/2024-04-22 (7).jpg",
      description: "Luxurious master bathroom suite with custom tile work, designer fixtures, and a spacious layout. The renovation creates a perfect balance of style and comfort."
    },
    {
      title: "Modern Kitchen Renovation",
      location: "Orlando, FL",
      category: "Kitchen Remodeling",
      image: "/images/2024-08-23.jpg",
      description: "Contemporary kitchen renovation featuring custom storage solutions, premium finishes, and a perfect blend of style and functionality."
    },
    {
      title: "Elegant Bathroom Design",
      location: "Orlando, FL",
      category: "Bathroom Remodeling",
      image: "/images/2024-09-07.jpg",
      description: "Sophisticated bathroom design with custom tile work, modern fixtures, and a luxurious layout. The renovation creates a perfect balance of elegance and practicality."
    },
    {
      title: "Premium Kitchen Update",
      location: "Orlando, FL",
      category: "Kitchen Remodeling",
      image: "/images/2024-09-07 (1).jpg",
      description: "High-end kitchen update featuring custom cabinetry, premium countertops, and state-of-the-art appliances. The design maximizes both style and functionality."
    },
    {
      title: "Luxury Bathroom Renovation",
      location: "Orlando, FL",
      category: "Bathroom Remodeling",
      image: "/images/2024-09-07 (2).jpg",
      description: "Luxury bathroom renovation with custom tile work, designer fixtures, and a spacious layout. The design creates a perfect sanctuary for relaxation."
    },
    {
      title: "Modern Kitchen Transformation",
      location: "Orlando, FL",
      category: "Kitchen Remodeling",
      image: "/images/2024-12-06.jpg",
      description: "Complete kitchen transformation featuring custom cabinetry, premium finishes, and modern appliances. The design creates a perfect blend of style and functionality."
    },
    {
      title: "Premium Tile Flooring",
      location: "Orlando, FL",
      category: "Flooring",
      image: "/images/2024-12-06.jpg",
      description: "Luxury tile flooring installation featuring premium porcelain tiles with custom patterns and professional grouting. Perfect for both aesthetics and durability."
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  useEffect(() => {
    const timer = setInterval(() => {
      if (filteredProjects.length > 3) {
        setCurrentIndex((prevIndex) => 
          prevIndex === filteredProjects.length - 3 ? 0 : prevIndex + 1
        );
      }
    }, 8000);

    return () => clearInterval(timer);
  }, [filteredProjects]);

  const visibleProjects = filteredProjects.length <= 3 
    ? filteredProjects 
    : filteredProjects.slice(currentIndex, currentIndex + 3);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Head>
        <title>Portfolio | Luxury Home Remodeling Projects in Orlando</title>
        <meta name="description" content="Explore our portfolio of stunning kitchen, bathroom, and whole home renovation projects throughout Orlando, FL. See our premium craftsmanship and attention to detail in our recent remodeling work." />
        <meta name="keywords" content="remodeling portfolio Orlando, kitchen renovation pictures, bathroom remodel gallery, Orlando home transformations, luxury renovation projects, Orlando FL remodeling examples, home improvement portfolio, custom cabinetry projects, flooring installation gallery" />
      </Head>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-black">
          <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: 'url("/images/2024-04-22 (4).jpg")',
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
                Our Portfolio
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-200 max-w-3xl mx-auto"
              >
                Explore our completed remodeling projects across Orlando
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
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setCurrentIndex(0);
                  }}
                  className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Portfolio Slider */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="h-1 w-24 bg-gold-gradient mx-auto mb-8 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
                Our Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Explore our recent remodeling projects
              </p>
            </motion.div>

            {filteredProjects.length > 0 ? (
              <div className="relative max-w-7xl mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  >
                    {visibleProjects.map((project, index) => (
                      <motion.div
                        key={`${project.title}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
                        onClick={() => openModal(project)}
                      >
                        <div className="relative h-[400px] overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            quality={90}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                          <div className="flex items-center space-x-4 mb-3">
                            <span className="px-4 py-1.5 bg-gold-500 text-black rounded-full text-sm font-semibold tracking-wide">
                              {project.category}
                            </span>
                            <span className="text-sm opacity-90">
                              {project.location}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 tracking-tight">
                            {project.title}
                          </h3>
                          <p className="text-base text-gray-200 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {filteredProjects.length > 3 && (
                  <>
                    {/* Navigation Arrows */}
                    <button
                      onClick={() => setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 3 : prev - 1))}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-14 h-14 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-x-20"
                      aria-label="Previous projects"
                    >
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setCurrentIndex((prev) => (prev === filteredProjects.length - 3 ? 0 : prev + 1))}
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-14 h-14 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:translate-x-20"
                      aria-label="Next projects"
                    >
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Navigation Dots */}
                    <div className="flex justify-center space-x-3 mt-12">
                      {Array.from({ length: Math.max(1, filteredProjects.length - 2) }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`h-3 rounded-full transition-all duration-500 ${
                            index === currentIndex ? 'bg-gold-500 w-8' : 'bg-gray-300 w-3 hover:bg-gray-400'
                          }`}
                          aria-label={`Go to projects ${index + 1}-${index + 3}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl text-gray-600 mb-6">No projects found in this category</h3>
                <button 
                  onClick={() => setActiveCategory('all')} 
                  className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
                >
                  View All Projects
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-black hover:bg-white transition-colors shadow-lg hover:shadow-xl"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="relative h-[500px]">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    className="object-cover"
                    quality={95}
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="px-4 py-1.5 bg-gold-500 text-black rounded-full text-sm font-semibold tracking-wide">
                      {selectedProject.category}
                    </span>
                    <span className="text-sm text-gray-600">
                      {selectedProject.location}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioPage; 