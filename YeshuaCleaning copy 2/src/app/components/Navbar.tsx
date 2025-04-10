'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import BusinessInfo from '../data/business-info';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.services-dropdown') && !target.closest('.services-trigger')) {
        setServicesDropdownOpen(false);
      }
      if (!target.closest('.resources-dropdown') && !target.closest('.resources-trigger')) {
        setResourcesDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Fix: Correctly access the primary services from BusinessInfo
  const serviceItems = [
    { id: 'kitchen-remodeling', name: 'Kitchen Remodeling' },
    { id: 'bathroom-remodeling', name: 'Bathroom Remodeling' },
    { id: 'whole-home-remodeling', name: 'Whole Home Remodeling' },
    { id: 'custom-cabinetry', name: 'Custom Cabinetry' },
    { id: 'flooring', name: 'Flooring' },
    { id: 'painting', name: 'Painting' }
  ];

  const resourceLinks = [
    { name: 'Careers', href: '/careers' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Portfolio', href: '/portfolio' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      hasDropdown: true,
      dropdownType: 'services'
    },
    { name: 'About', href: '/about' },
    { 
      name: 'Resources', 
      href: '#',
      hasDropdown: true,
      dropdownType: 'resources'
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">Luxury Home Remodeling</span>
            </Link>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {link.hasDropdown ? (
                  <div className={`${link.dropdownType}-trigger`}>
                    <button 
                      onClick={() => {
                        if (link.dropdownType === 'services') {
                          setServicesDropdownOpen(!servicesDropdownOpen);
                          setResourcesDropdownOpen(false);
                        } else if (link.dropdownType === 'resources') {
                          setResourcesDropdownOpen(!resourcesDropdownOpen);
                          setServicesDropdownOpen(false);
                        }
                      }}
                      className="font-serif text-white hover:text-gold-300 transition-colors relative group flex items-center"
                    >
                      {link.name}
                      <FaChevronDown className="ml-1 text-xs" />
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                    
                    {/* Services Dropdown */}
                    {link.dropdownType === 'services' && servicesDropdownOpen && (
                      <div className="services-dropdown absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                        <div className="absolute -top-2 left-4 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-100"></div>
                        <Link 
                          href="/services" 
                          className="block px-4 py-2 text-black hover:bg-gold-50 hover:text-black font-medium border-b border-gray-100"
                        >
                          All Services
                        </Link>
                        {serviceItems.map((service) => (
                          <Link 
                            key={service.id}
                            href={`/services/${service.id}`} 
                            className="block px-4 py-2 text-gray-700 hover:bg-gold-50 hover:text-black"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Resources Dropdown */}
                    {link.dropdownType === 'resources' && resourcesDropdownOpen && (
                      <div className="resources-dropdown absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                        <div className="absolute -top-2 left-4 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-100"></div>
                        {resourceLinks.map((resource) => (
                          <Link 
                            key={resource.name}
                            href={resource.href} 
                            className="block px-4 py-2 text-gray-700 hover:bg-gold-50 hover:text-black"
                          >
                            {resource.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={link.href} 
                    className="font-serif text-white hover:text-gold-300 transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <Link 
              href="/contact#booking" 
              className="btn-gold"
            >
              Get a Quote
            </Link>
          </motion.div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-custom py-4 bg-black shadow-lg rounded-b-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.name} className="space-y-2">
                  <button 
                    className="font-serif text-white hover:text-gold-300 py-2 flex items-center justify-between w-full"
                    onClick={() => {
                      if (link.dropdownType === 'services') {
                        setMobileServicesOpen(!mobileServicesOpen);
                        setMobileResourcesOpen(false);
                      } else if (link.dropdownType === 'resources') {
                        setMobileResourcesOpen(!mobileResourcesOpen);
                        setMobileServicesOpen(false);
                      }
                    }}
                  >
                    <span>{link.name}</span>
                    <FaChevronDown className={`transform transition-transform ${
                      (link.dropdownType === 'services' && mobileServicesOpen) || 
                      (link.dropdownType === 'resources' && mobileResourcesOpen) ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {/* Mobile Services Dropdown */}
                  {link.dropdownType === 'services' && mobileServicesOpen && (
                    <div className="pl-4 space-y-2 border-l-2 border-gold-400 ml-2">
                      <Link 
                        href="/services" 
                        className="block py-2 text-white/80 hover:text-gold-300"
                        onClick={() => setIsOpen(false)}
                      >
                        All Services
                      </Link>
                      {serviceItems.map((service) => (
                        <Link 
                          key={service.id}
                          href={`/services/${service.id}`} 
                          className="block py-2 text-white/80 hover:text-gold-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Mobile Resources Dropdown */}
                  {link.dropdownType === 'resources' && mobileResourcesOpen && (
                    <div className="pl-4 space-y-2 border-l-2 border-gold-400 ml-2">
                      {resourceLinks.map((resource) => (
                        <Link 
                          key={resource.name}
                          href={resource.href} 
                          className="block py-2 text-white/80 hover:text-gold-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {resource.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="font-serif text-white hover:text-gold-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link 
              href="/contact#booking" 
              className="btn-gold text-center"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 