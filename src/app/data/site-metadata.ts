/**
 * Deco Moderna Site Metadata
 * 
 * This file contains centralized metadata for the website including
 * page titles, descriptions, and sitemap information.
 */

// Company name (can be changed in one place)
export const COMPANY_NAME = "Deco Moderna";

// Site metadata for all pages
export const SiteMetadata = {
  // Home page
  home: {
    title: `${COMPANY_NAME} | Luxury Remodeling Services in Louisville, KY`,
    description: `${COMPANY_NAME} provides premium remodeling and construction services throughout Louisville, Kentucky. Experience excellence with our meticulous attention to detail and exceptional craftsmanship.`,
    url: "/",
    priority: 1.0,
  },

  // Service pages
  services: {
    main: {
      title: `${COMPANY_NAME} | Professional Remodeling Services in Kentucky`,
      description: `${COMPANY_NAME} offers comprehensive remodeling solutions for homes and businesses in Louisville, KY, including kitchen remodeling, bathroom renovations, home additions, and commercial remodeling.`,
      url: "/services",
      priority: 0.9,
    },
    kitchen: {
      title: `${COMPANY_NAME} | Kitchen Remodeling Services in Louisville`,
      description: `${COMPANY_NAME} provides premium kitchen remodeling services in Louisville, KY. Our expert team delivers stunning, functional kitchens that blend style with practicality for Kentucky homeowners.`,
      url: "/services#kitchen",
      priority: 0.8,
    },
    bathroom: {
      title: `${COMPANY_NAME} | Bathroom Remodeling Services in Louisville, KY`,
      description: `${COMPANY_NAME} delivers exceptional bathroom remodeling services for Kentucky homes. Our professional team creates luxurious, functional spaces you'll love.`,
      url: "/services#bathroom",
      priority: 0.8,
    },
    homeAdditions: {
      title: `${COMPANY_NAME} | Home Addition Services in Kentucky`,
      description: `${COMPANY_NAME} provides specialized home addition services in Louisville to expand your living space. We seamlessly integrate new rooms while maintaining architectural harmony.`,
      url: "/services#home-additions",
      priority: 0.8,
    },
    commercial: {
      title: `${COMPANY_NAME} | Commercial Remodeling Services in Louisville`,
      description: `${COMPANY_NAME} offers professional commercial remodeling services in Kentucky to transform your business space. We create environments that impress clients and boost productivity.`,
      url: "/services#commercial",
      priority: 0.8,
    }
  },

  // About page
  about: {
    title: `${COMPANY_NAME} | About Our Louisville Remodeling Company`,
    description: `${COMPANY_NAME} is Kentucky's trusted remodeling company with a commitment to excellence, innovation, and customer satisfaction. Learn more about our story and values.`,
    url: "/about",
    priority: 0.7,
  },

  // Contact page
  contact: {
    title: `${COMPANY_NAME} | Contact Our Louisville Remodeling Team`,
    description: `${COMPANY_NAME} is here to answer your questions and provide free consultations for remodeling services throughout Kentucky. Reach out to our friendly team today.`,
    url: "/contact",
    priority: 0.9,
  },

  // FAQ page
  faq: {
    title: `${COMPANY_NAME} | Frequently Asked Questions About Remodeling in KY`,
    description: `${COMPANY_NAME} answers common questions about our premium remodeling services in Louisville. Find information about our process, timeline, and policies.`,
    url: "/faq",
    priority: 0.6,
  },

  // Portfolio page
  portfolio: {
    title: `${COMPANY_NAME} | Our Kentucky Remodeling Portfolio`,
    description: `${COMPANY_NAME} showcases examples of our exceptional remodeling transformations across Louisville and Kentucky. See the quality and attention to detail in our projects.`,
    url: "/portfolio",
    priority: 0.7,
  },

  // Careers page
  careers: {
    title: `${COMPANY_NAME} | Join Our Louisville Remodeling Team`,
    description: `${COMPANY_NAME} is hiring skilled professionals to join our remodeling team in Kentucky. Explore career opportunities and benefits of working with us.`,
    url: "/careers",
    priority: 0.6,
  },

  // Thank you page
  thankYou: {
    title: `${COMPANY_NAME} | Thank You`,
    description: `${COMPANY_NAME} appreciates your submission. Our team will be in touch shortly regarding your remodeling project in Louisville, Kentucky.`,
    url: "/thank-you",
    priority: 0.3,
  },

  // Legal pages
  legal: {
    privacy: {
      title: `${COMPANY_NAME} | Privacy Policy`,
      description: `${COMPANY_NAME}'s privacy policy explains how we collect, use, and protect your personal information when you use our website or services.`,
      url: "/privacy",
      priority: 0.3,
    },
    terms: {
      title: `${COMPANY_NAME} | Terms of Service`,
      description: `${COMPANY_NAME}'s terms of service outline the conditions governing your use of our website and remodeling services in Louisville, Kentucky.`,
      url: "/terms",
      priority: 0.3,
    },
  },
};

export default SiteMetadata; 