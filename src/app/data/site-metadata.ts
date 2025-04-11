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
    title: `${COMPANY_NAME} | Premium Home Remodeling Services in Louisville, KY`,
    description: `${COMPANY_NAME} delivers exceptional remodeling services in Louisville, Kentucky. Specializing in high-end kitchen renovations, bathroom remodels, and premium flooring with unmatched craftsmanship and attention to detail.`,
    url: "/",
    priority: 1.0,
    keywords: "Louisville remodeling, Kentucky home renovation, premium kitchen remodeling Louisville, bathroom renovation Kentucky, custom cabinetry Louisville, luxury remodeling Louisville KY, home improvement Kentucky",
  },

  // Service pages
  services: {
    main: {
      title: `${COMPANY_NAME} | Top-Rated Remodeling Services in Louisville, Kentucky`,
      description: `${COMPANY_NAME} offers comprehensive remodeling solutions in Louisville, KY. From kitchen and bathroom renovations to flooring and custom cabinetry, our expert team delivers exceptional quality for Kentucky homeowners.`,
      url: "/services",
      priority: 0.9,
      keywords: "Louisville home remodeling, Kentucky renovation services, premium kitchen remodels, luxury bathroom renovations, custom flooring Louisville, home renovation Kentucky, professional remodeling contractor",
    },
    kitchen: {
      title: `${COMPANY_NAME} | Expert Kitchen Remodeling in Louisville, KY`,
      description: `Transform your kitchen with ${COMPANY_NAME}'s premium remodeling services in Louisville, Kentucky. Our expert team creates stunning, functional kitchens with custom cabinetry, premium countertops, and sophisticated designs.`,
      url: "/services#kitchen",
      priority: 0.8,
      keywords: "Louisville kitchen remodeling, Kentucky custom kitchens, premium kitchen renovation, kitchen design Louisville, custom cabinetry Kentucky, kitchen contractor Louisville KY",
    },
    bathroom: {
      title: `${COMPANY_NAME} | Luxury Bathroom Remodeling in Louisville, Kentucky`,
      description: `${COMPANY_NAME} creates spectacular bathroom transformations throughout Louisville, KY. Our professional team designs and builds elegant bathrooms with premium fixtures, custom tile work, and superior craftsmanship.`,
      url: "/services#bathroom",
      priority: 0.8,
      keywords: "Louisville bathroom remodel, Kentucky bathroom renovation, luxury bathroom design, shower remodeling Louisville, bathroom contractor Kentucky, premium bathroom fixtures Louisville KY",
    },
    flooring: {
      title: `${COMPANY_NAME} | Premium Flooring Installation in Louisville, KY`,
      description: `${COMPANY_NAME} provides expert flooring installation in Louisville, Kentucky. From hardwood and luxury vinyl to custom tile, our skilled craftsmen deliver beautiful, durable flooring solutions for every space.`,
      url: "/services#flooring",
      priority: 0.8,
      keywords: "Louisville flooring installation, Kentucky hardwood floors, luxury vinyl flooring, custom tile work Louisville, premium flooring contractor, flooring installation Kentucky",
    },
    custom: {
      title: `${COMPANY_NAME} | Custom Cabinetry and Design in Louisville, Kentucky`,
      description: `${COMPANY_NAME} specializes in custom cabinetry and premium design solutions for Louisville, KY homes. Our master craftsmen create beautiful, functional storage and design elements to transform your space.`,
      url: "/services#custom",
      priority: 0.8,
      keywords: "custom cabinetry Louisville, Kentucky cabinet maker, premium storage solutions, custom woodwork Louisville, kitchen cabinets Kentucky, built-in cabinetry Louisville KY",
    }
  },

  // About page
  about: {
    title: `${COMPANY_NAME} | About Our Louisville Remodeling Experts`,
    description: `${COMPANY_NAME} is Louisville's trusted remodeling company with years of experience transforming Kentucky homes. Learn about our dedicated team, commitment to quality, and exceptional customer service.`,
    url: "/about",
    priority: 0.7,
    keywords: "Louisville remodeling company, Kentucky renovation experts, about Deco Moderna, professional remodelers Louisville, licensed contractors Kentucky, trusted renovation company Louisville KY",
  },

  // Contact page
  contact: {
    title: `${COMPANY_NAME} | Contact Our Louisville, KY Remodeling Team`,
    description: `Ready to transform your home? Contact ${COMPANY_NAME} for premium remodeling services in Louisville, Kentucky. Request a free consultation and discover how our experts can bring your vision to life.`,
    url: "/contact",
    priority: 0.9,
    keywords: "contact Louisville remodeler, Kentucky renovation consultation, free remodeling quote, Louisville contractor contact, home renovation estimate, remodeling services Louisville KY",
  },

  // FAQ page
  faq: {
    title: `${COMPANY_NAME} | Frequently Asked Remodeling Questions | Louisville, KY`,
    description: `Get answers to common questions about ${COMPANY_NAME}'s premium remodeling services in Louisville, Kentucky. Find information about our process, materials, timeline, and what to expect during your renovation.`,
    url: "/faq",
    priority: 0.6,
    keywords: "Louisville remodeling FAQ, Kentucky renovation questions, home improvement information, remodeling process Louisville, renovation timeline Kentucky, remodeling costs Louisville KY",
  },

  // Portfolio page
  portfolio: {
    title: `${COMPANY_NAME} | Premium Remodeling Portfolio | Louisville, Kentucky`,
    description: `Explore ${COMPANY_NAME}'s showcase of exceptional remodeling projects throughout Louisville, KY. See our stunning kitchen and bathroom transformations, custom flooring, and beautiful renovations across Kentucky.`,
    url: "/portfolio",
    priority: 0.7,
    keywords: "Louisville remodeling portfolio, Kentucky renovation projects, kitchen remodel examples, bathroom renovation showcase, before and after remodeling, Louisville custom homes, Kentucky renovation gallery",
  },

  // Careers page
  careers: {
    title: `${COMPANY_NAME} | Join Our Elite Louisville Remodeling Team`,
    description: `${COMPANY_NAME} is hiring skilled professionals to join our premier remodeling team in Louisville, Kentucky. Discover rewarding career opportunities with competitive pay, benefits, and growth potential.`,
    url: "/careers",
    priority: 0.6,
    keywords: "Louisville remodeling jobs, Kentucky construction careers, carpenter jobs Louisville, remodeling contractor positions, skilled trades Kentucky, construction employment Louisville KY",
  },

  // Thank you page
  thankYou: {
    title: `${COMPANY_NAME} | Thank You | Louisville Remodeling Experts`,
    description: `Thank you for contacting ${COMPANY_NAME}. Our Louisville, Kentucky remodeling team will be in touch shortly to discuss your project and schedule your free consultation.`,
    url: "/thank-you",
    priority: 0.3,
    keywords: "Louisville remodeling consultation, Kentucky renovation inquiry, home improvement quote, remodeling request Louisville, renovation estimate Kentucky",
  },

  // Legal pages
  legal: {
    privacy: {
      title: `${COMPANY_NAME} | Privacy Policy | Louisville, KY Remodeling`,
      description: `${COMPANY_NAME}'s privacy policy explains how our Louisville, Kentucky remodeling company collects, uses, and protects your personal information when you use our website or services.`,
      url: "/privacy",
      priority: 0.3,
      keywords: "Louisville remodeling privacy policy, Kentucky contractor terms, renovation company privacy, remodeling service agreement, contractor policies Louisville",
    },
    terms: {
      title: `${COMPANY_NAME} | Terms of Service | Louisville Remodeling Company`,
      description: `${COMPANY_NAME}'s terms of service outline the conditions governing your use of our website and premium remodeling services in Louisville, Kentucky.`,
      url: "/terms",
      priority: 0.3,
      keywords: "Louisville remodeling terms, Kentucky contractor conditions, renovation service agreement, remodeling terms and conditions, contractor policies Louisville KY",
    },
  },

  // Schema markup for structured data
  structured_data: {
    local_business: {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "name": COMPANY_NAME,
      "image": "https://www.decomodernaremodeling.com/logo.png",
      "url": "https://www.decomodernaremodeling.com",
      "telephone": "(909) 645-3373",
      "email": "Savemoneyremodeling@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Louisville",
        "addressRegion": "KY",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 38.2527,
        "longitude": -85.7585
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/decomoderna",
        "https://www.instagram.com/decomoderna"
      ],
      "priceRange": "$$",
      "paymentAccepted": "Cash, Credit Card, Debit Card, Bank Transfer",
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 38.2527,
          "longitude": -85.7585
        },
        "geoRadius": "50000"
      },
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kitchen Remodeling",
            "description": "Complete kitchen renovation services including custom cabinetry, countertops, backsplashes, and appliance installation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bathroom Remodeling",
            "description": "Full bathroom renovation services including custom showers, bathtubs, vanities, fixtures, and tile work."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flooring Installation",
            "description": "Premium flooring installation services for hardwood, luxury vinyl, laminate, and tile flooring."
          }
        }
      ]
    }
  }
};

export default SiteMetadata; 