import { MetadataRoute } from 'next';
import SiteMetadata from './data/site-metadata';

// Define valid change frequency values
type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

/**
 * Generate a sitemap for the website
 * This will create a sitemap.xml file at the root of the website
 * which helps search engines discover and index your pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yeshuacleaning.com'; // Replace with actual domain when available
  const currentDate = new Date().toISOString();
  
  // Home page
  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}${SiteMetadata.home.url}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as ChangeFrequency,
      priority: SiteMetadata.home.priority,
    },
  ];
  
  // Service pages
  sitemapEntries.push({
    url: `${baseUrl}${SiteMetadata.services.main.url}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: SiteMetadata.services.main.priority,
  });
  
  // About page
  sitemapEntries.push({
    url: `${baseUrl}${SiteMetadata.about.url}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: SiteMetadata.about.priority,
  });
  
  // Contact page
  sitemapEntries.push({
    url: `${baseUrl}${SiteMetadata.contact.url}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: SiteMetadata.contact.priority,
  });
  
  // FAQ page
  sitemapEntries.push({
    url: `${baseUrl}${SiteMetadata.faq.url}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: SiteMetadata.faq.priority,
  });
  
  // Portfolio page
  sitemapEntries.push({
    url: `${baseUrl}${SiteMetadata.portfolio.url}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: SiteMetadata.portfolio.priority,
  });
  
  // Careers page
  sitemapEntries.push({
    url: `${baseUrl}${SiteMetadata.careers.url}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: SiteMetadata.careers.priority,
  });
  
  // Legal pages
  sitemapEntries.push({
    url: `${baseUrl}${SiteMetadata.legal.privacy.url}`,
    lastModified: currentDate,
    changeFrequency: 'yearly' as ChangeFrequency,
    priority: SiteMetadata.legal.privacy.priority,
  });
  
  sitemapEntries.push({
    url: `${baseUrl}${SiteMetadata.legal.terms.url}`,
    lastModified: currentDate,
    changeFrequency: 'yearly' as ChangeFrequency,
    priority: SiteMetadata.legal.terms.priority,
  });
  
  return sitemapEntries;
} 