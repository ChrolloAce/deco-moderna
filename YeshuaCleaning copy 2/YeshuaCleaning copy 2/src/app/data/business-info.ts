/**
 * Luxury Home Remodeling Business Information
 * 
 * This file contains all the business information for Luxury Home Remodeling.
 * Use this as a central reference for consistent data across the website.
 */

export const BusinessInfo = {
  // Company Information
  company: {
    name: "Luxury Home Remodeling",
    legalName: "Luxury Home Remodeling LLC",
    tagline: "Transform Your Home with Luxury Remodeling in Orlando",
    description: "Specializing in high-end kitchen remodeling, elegant bathroom renovations, and premium flooring installations in Orlando, Florida. Our expert team delivers exceptional craftsmanship and sophisticated designs to transform your space.",
    yearFounded: 2020,
  },

  // Contact Information
  contact: {
    phone: {
      display: "(689) 229-0906",
      link: "6892290906",
    },
    email: "Luxuryhomeremodelingfl@gmail.com",
    address: {
      street: "", // Add street address when available
      city: "Orlando",
      state: "Florida",
      zip: "", // Add ZIP code when available
      country: "USA",
      coordinates: {
        lat: 28.5383,
        lng: -81.3792
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
    description: "From custom cabinetry to designer tile and luxury flooring, trust our experienced Orlando renovation team to bring your vision to life with unmatched precision and style. Your Florida dream home awaits!"
  },

  // Social Media Links
  socialMedia: {
    facebook: "https://facebook.com/luxuryhomeremodeling",
    instagram: "https://instagram.com/luxuryhomeremodeling",
    twitter: "https://twitter.com/luxuryhomeremodeling",
  },

  // Areas Served
  areasServed: "Orlando and nearby areas",

  // Reviews
  reviews: {
    platform: "Google",
    rating: 5.07,
    count: 7,
    url: "https://g.page/luxuryhomeremodeling"
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