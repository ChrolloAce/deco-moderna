import { MetadataRoute } from 'next';

/**
 * Generate a robots.txt file
 * This will create a robots.txt file at the root of the website
 * which helps search engines understand which pages should be indexed.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/thank-you', '/api/'],
    },
    sitemap: 'https://yeshuacleaning.com/sitemap.xml', // Update with actual domain when available
  };
} 