import { Metadata } from 'next';
import { COMPANY_NAME, SiteMetadata } from '../data/site-metadata';

/**
 * Generates metadata for a specific page
 * 
 * @param pagePath - The key path to find the page metadata in SiteMetadata
 * @returns Metadata object for the page
 */
export function generateMetadata(pagePath: string): Metadata {
  // Split the path by dots to access nested properties
  const pathParts = pagePath.split('.');
  
  // Traverse the SiteMetadata object to get the page metadata
  let pageMetadata: any = SiteMetadata;
  for (const part of pathParts) {
    if (pageMetadata[part]) {
      pageMetadata = pageMetadata[part];
    } else {
      console.error(`Metadata not found for path: ${pagePath}`);
      // Return home metadata as fallback
      return {
        title: SiteMetadata.home.title,
        description: SiteMetadata.home.description,
      };
    }
  }
  
  // Return page metadata
  return {
    title: pageMetadata.title,
    description: pageMetadata.description,
    openGraph: {
      title: pageMetadata.title,
      description: pageMetadata.description,
      url: `https://yeshuacleaning.com${pageMetadata.url}`, // Update with actual domain when available
      siteName: COMPANY_NAME,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageMetadata.title,
      description: pageMetadata.description,
    },
  };
} 