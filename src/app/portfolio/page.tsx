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
      title: "Elegant Kitchen Transformation",
      location: "Louisville, KY",
      category: "Kitchen Remodeling",
      image: "https://i.ibb.co/V09Qdzyx/IMG-20161215-142946.jpg",
      description: "Complete kitchen renovation featuring custom cabinetry, quartz countertops, and modern appliances. This stunning transformation creates a perfect blend of functionality and luxury."
    },
    {
      title: "Modern Bathroom Remodel",
      location: "Louisville, KY",
      category: "Bathroom Remodeling",
      image: "https://i.ibb.co/4gDk22LG/IMG-20230329-WA0020.jpg",
      description: "Elegant master bathroom renovation with premium fixtures, custom tile work, and a spacious walk-in shower. The design creates a spa-like atmosphere for ultimate relaxation."
    },
    {
      title: "Premium Hardwood Flooring",
      location: "Louisville, KY",
      category: "Flooring",
      image: "https://i.ibb.co/S4d2b6p4/IMG-20230329-WA0021.jpg",
      description: "Luxurious hardwood flooring installation featuring premium oak with custom staining and finishing. The result is a timeless, elegant foundation for any space."
    },
    {
      title: "Luxury Bathroom Suite",
      location: "Louisville, KY",
      category: "Bathroom Remodeling",
      image: "https://i.ibb.co/bM53fcYb/IMG-20230329-WA0022.jpg",
      description: "Luxurious bathroom suite with designer fixtures, custom vanity, and elegant tile patterns. This renovation brings modern luxury to everyday living."
    },
    {
      title: "Contemporary Kitchen Design",
      location: "Louisville, KY",
      category: "Kitchen Remodeling",
      image: "https://i.ibb.co/HL3fjWQT/IMG-20230329-WA0023.jpg",
      description: "Modern kitchen design with sleek finishes, custom storage solutions, and premium appliances. The design maximizes space while maintaining elegance."
    },
    {
      title: "Elegant Tile Installation",
      location: "Louisville, KY",
      category: "Flooring",
      image: "https://i.ibb.co/S7MWq12T/IMG-20230329-WA0089.jpg",
      description: "Premium luxury tile installation with intricate patterns and professional grouting. Perfect for high-traffic areas while maintaining elegance."
    },
    {
      title: "Custom Cabinetry Design",
      location: "Louisville, KY",
      category: "Kitchen Remodeling",
      image: "https://i.ibb.co/7tXLCRbF/IMG-20230329-WA0092.jpg",
      description: "Gourmet kitchen featuring custom cabinetry, premium countertops, and professional-grade appliances. Perfect for both cooking and entertaining."
    },
    {
      title: "Modern Shower Installation",
      location: "Louisville, KY",
      category: "Bathroom Remodeling",
      image: "https://i.ibb.co/SXVY1qY9/IMG-20240405-WA0016.jpg",
      description: "Luxurious shower installation with custom tile work, designer fixtures, and a spacious layout. The renovation creates a perfect balance of style and comfort."
    },
    {
      title: "Open Concept Kitchen",
      location: "Louisville, KY",
      category: "Kitchen Remodeling",
      image: "https://i.ibb.co/VcPHNHBV/20240601-195820.jpg",
      description: "Contemporary kitchen renovation featuring open concept design, custom storage solutions, and a perfect blend of style and functionality."
    },
    {
      title: "Designer Bathroom Vanity",
      location: "Louisville, KY",
      category: "Bathroom Remodeling",
      image: "https://i.ibb.co/7xZKR9zd/IMG-20230329-WA0005.jpg",
      description: "Sophisticated bathroom design with custom vanity, modern fixtures, and a luxurious layout. The renovation creates a perfect balance of elegance and practicality."
    },
    {
      title: "Premium Countertop Installation",
      location: "Louisville, KY",
      category: "Kitchen Remodeling",
      image: "https://i.ibb.co/q3XH1pDJ/IMG-20230329-WA0052.jpg",
      description: "High-end kitchen update featuring premium countertops, custom backsplash, and state-of-the-art appliances. The design maximizes both style and functionality."
    },
    {
      title: "Luxury Master Bathroom",
      location: "Louisville, KY",
      category: "Bathroom Remodeling",
      image: "https://i.ibb.co/B5XqLmjd/IMG-20230329-WA0078.jpg",
      description: "Luxury bathroom renovation with custom tile work, designer fixtures, and a spacious layout. The design creates a perfect sanctuary for relaxation."
    },
    {
      title: "Stylish Bathroom Renovation",
      location: "Louisville, KY",
      category: "Bathroom Remodeling",
      image: "https://i.ibb.co/v696DNdq/IMG-20240405-WA0020.jpg",
      description: "Complete bathroom renovation featuring custom tile work, floating vanity, and modern fixtures. The result is a contemporary space with timeless appeal."
    },
    {
      title: "Kitchen Island Remodel",
      location: "Louisville, KY",
      category: "Kitchen Remodeling",
      image: "https://i.ibb.co/5WmyFHMd/20230525-191749.jpg",
      description: "Kitchen remodel featuring a custom-designed island with waterfall countertops, premium cabinetry, and designer lighting fixtures."
    },
    {
      title: "Luxury Bathroom Transformation",
      location: "Louisville, KY",
      category: "Bathroom Remodeling",
      image: "https://i.ibb.co/8L2WjZJ2/20240406-181730-0000.png",
      description: "Complete bathroom transformation with custom tiled shower, premium fixtures, and elegant design elements that create a spa-like retreat."
    },
    {
      title: "Outdoor Kitchen Space",
      location: "Louisville, KY",
      category: "Kitchen Remodeling",
      image: "https://i.ibb.co/cSKMJfxr/20240521-192301.jpg",
      description: "Custom outdoor kitchen installation featuring premium countertops, built-in grill, and weather-resistant cabinetry. Perfect for entertaining and outdoor living."
    },
    {
      title: "Premium Flooring Project",
      location: "Louisville, KY",
      category: "Flooring",
      image: "https://i.ibb.co/TMvvRQng/20240521-192334.jpg",
      description: "High-quality flooring installation with premium materials, expert craftsmanship, and meticulous attention to detail."
    },
    {
      title: "Modern Kitchen Update",
      location: "Louisville, KY",
      category: "Kitchen Remodeling",
      image: "https://i.ibb.co/rB4Ftrp/IMG-20240405-WA0015.jpg",
      description: "Kitchen renovation featuring custom cabinetry, quartz countertops, and modern appliances that blend style with functionality."
    },
    {
      title: "Luxury Bathroom Design",
      location: "Louisville, KY",
      category: "Bathroom Remodeling",
      image: "https://i.ibb.co/fzGjhMnb/VID-20240521-WA0000.jpg",
      description: "Elegant bathroom design with premium fixtures, custom tile work, and sophisticated finishes that create a luxurious retreat."
    },
    {
      title: "Custom Kitchen Cabinetry",
      location: "Louisville, KY",
      category: "Kitchen Remodeling",
      image: "https://i.ibb.co/0VhLMjZH/20230525-191836.jpg",
      description: "Bespoke kitchen cabinetry design featuring premium materials, custom storage solutions, and expert craftsmanship."
    },
    {
      title: "Elegant Living Room Flooring",
      location: "Louisville, KY",
      category: "Flooring",
      image: "https://i.ibb.co/why9V34Q/20230525-191854.jpg",
      description: "Premium living room flooring installation featuring high-quality materials and expert installation techniques."
    },
    {
      title: "Transitional Kitchen Design",
      location: "Louisville, KY",
      category: "Kitchen Remodeling",
      image: "https://i.ibb.co/nqktJC2m/IMG-20230329-WA0070.jpg",
      description: "Transitional kitchen design featuring a perfect blend of traditional and contemporary elements, custom cabinetry, and premium countertops."
    },
    {
      title: "Elegant Bathroom Fixtures",
      location: "Louisville, KY",
      category: "Bathroom Remodeling",
      image: "https://i.ibb.co/4njtTjmL/IMG-20230329-WA0072.jpg",
      description: "Bathroom renovation featuring premium fixtures, custom shower design, and elegant finishing touches that create a sophisticated space."
    },
    {
      title: "Modern Kitchen Transformation",
      location: "Louisville, KY",
      category: "Kitchen Remodeling",
      image: "https://i.ibb.co/HLnKNzzY/IMG-20230329-WA0074.jpg",
      description: "Complete kitchen transformation with sleek cabinetry, premium appliances, and contemporary design elements that create a stylish cooking space."
    },
    {
      title: "Luxury Tile Shower",
      location: "Louisville, KY",
      category: "Bathroom Remodeling",
      image: "https://i.ibb.co/3mm1V3Qh/IMG-20230329-WA0075.jpg",
      description: "Custom tile shower installation featuring premium materials, innovative design, and expert craftsmanship that creates a stunning bathroom centerpiece."
    },
    {
      title: "Hardwood Floor Installation",
      location: "Louisville, KY",
      category: "Flooring",
      image: "https://i.ibb.co/Wp09TvfP/20230417-154728.jpg",
      description: "Premium hardwood flooring installation with expert craftsmanship and attention to detail, creating a warm and inviting foundation for any space."
    },
    {
      title: "Contemporary Kitchen Design",
      location: "Louisville, KY",
      category: "Kitchen Remodeling",
      image: "https://i.ibb.co/JjhhmzBs/20230417-154809.jpg",
      description: "Modern kitchen featuring clean lines, premium materials, and innovative storage solutions that create a functional yet stylish space."
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
        <title>Portfolio | Luxury Home Remodeling Projects in Louisville</title>
        <meta name="description" content="Explore our portfolio of stunning kitchen, bathroom, and whole home renovation projects throughout Louisville, KY. See our premium craftsmanship and attention to detail in our recent remodeling work." />
        <meta name="keywords" content="remodeling portfolio Louisville, kitchen renovation pictures, bathroom remodel gallery, Kentucky home transformations, luxury renovation projects, Louisville KY remodeling examples, home improvement portfolio, custom cabinetry projects, flooring installation gallery" />
      </Head>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-black">
          <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: 'url("https://i.ibb.co/HL3fjWQT/IMG-20230329-WA0023.jpg")',
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
                Explore our completed remodeling projects across Louisville
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
                            unoptimized={true}
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
                    unoptimized={true}
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