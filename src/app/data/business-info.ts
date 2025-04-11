/**
 * Deco Moderna Business Information
 * 
 * This file contains all the business information for Deco Moderna.
 * Use this as a central reference for consistent data across the website.
 */

export const BusinessInfo = {
  // Company Information
  company: {
    name: "Deco Moderna",
    legalName: "Deco Moderna LLC",
    tagline: "Transform Your Home with Deco Moderna in Louisville, KY",
    description: "Specializing in high-end kitchen remodeling, elegant bathroom renovations, and premium flooring installations in Louisville, Kentucky. Our expert team delivers exceptional craftsmanship and sophisticated designs to transform your space.",
    yearFounded: 2020,
  },

  // Contact Information
  contact: {
    phone: {
      display: "(909) 645-3373",
      link: "9096453373",
    },
    email: "Savemoneyremodeling@gmail.com",
    address: {
      street: "123 Bourbon Street", 
      city: "Louisville",
      state: "Kentucky",
      zip: "40202", 
      country: "USA",
      coordinates: {
        lat: 38.2527,
        lng: -85.7585
      }
    }
  },

  // Business Hours
  hours: {
    monday: "Closed",
    tuesday: "8:00 AM - 6:00 PM",
    wednesday: "8:00 AM - 6:00 PM",
    thursday: "8:00 AM - 6:00 PM",
    friday: "8:00 AM - 6:00 PM",
    saturday: "8:00 AM - 6:00 PM",
    sunday: "Closed",
    display: "Tue-Sat: 8am-6pm, Mon & Sun: Closed"
  },

  // Services Offered
  services: {
    primary: [
      "Kitchen Remodeling",
      "Bathroom Remodeling",
      "Premium Flooring Installation",
      "Custom Cabinetry",
      "Designer Tile Work"
    ],
    description: "From custom cabinetry to designer tile and luxury flooring, trust our experienced Louisville renovation team to bring your vision to life with unmatched precision and style. Your Kentucky dream home awaits!"
  },

  // Social Media Links
  socialMedia: {
    facebook: "https://facebook.com/decomoderna",
    instagram: "https://instagram.com/decomoderna",
    twitter: "https://twitter.com/decomoderna",
  },

  // Areas Served
  areasServed: "Louisville and nearby Kentucky areas",

  // Reviews
  reviews: {
    platform: "Google",
    rating: 4.9,
    count: 28,
    url: "https://g.page/decomoderna"
  },

  // External Resource URLs
  externalResources: {
    bookingWidget: "https://connect.maktubtechnologies.com/widget/booking/GYKJcexln2BS0NfhXpga",
    bookingScript: "https://connect.maktubtechnologies.com/js/form_embed.js",
    reviewWidget: "https://reputationhub.site/reputation/widgets/review_widget/dIR65OesFgKY03WTP30z",
    reviewScript: "https://reputationhub.site/reputation/assets/review-widget.js",
    chatWidget: {
      src: "https://widgets.leadconnectorhq.com/loader.js",
      resourcesUrl: "https://widgets.leadconnectorhq.com/chat-widget/loader.js",
      widgetId: "67e166d44a3e9647844a3b19"
    }
  }
};

export default BusinessInfo; 