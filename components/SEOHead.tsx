import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteMetadata, getFullUrl, seoConfig } from '../config/seo.config';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  noindex?: boolean;
  canonical?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image,
  noindex = false,
  canonical
}) => {
  const location = useLocation();
  const routeMeta = getRouteMetadata(location.pathname);
  
  // Use provided props or fall back to route metadata or defaults
  const finalTitle = title || routeMeta.title || seoConfig.defaultTitle;
  const finalDescription = description || routeMeta.description || seoConfig.siteDescription;
  const finalKeywords = keywords || routeMeta.keywords || seoConfig.defaultKeywords;
  const finalImage = image || routeMeta.image || seoConfig.defaultImage;
  const finalCanonical = canonical || getFullUrl(location.pathname);
  const fullImageUrl = finalImage.startsWith('http') ? finalImage : getFullUrl(finalImage);

  useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', finalKeywords);
    updateMetaTag('author', seoConfig.author.name);
    
    // Robots meta
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow');
    }

    // Open Graph tags
    updateMetaTag('og:title', finalTitle, 'property');
    updateMetaTag('og:description', finalDescription, 'property');
    updateMetaTag('og:image', fullImageUrl, 'property');
    updateMetaTag('og:url', finalCanonical, 'property');
    updateMetaTag('og:type', seoConfig.openGraph.type, 'property');
    updateMetaTag('og:site_name', seoConfig.openGraph.siteName, 'property');
    updateMetaTag('og:locale', seoConfig.openGraph.locale, 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', seoConfig.twitter.card);
    updateMetaTag('twitter:site', seoConfig.twitter.site);
    updateMetaTag('twitter:creator', seoConfig.twitter.creator);
    updateMetaTag('twitter:title', finalTitle);
    updateMetaTag('twitter:description', finalDescription);
    updateMetaTag('twitter:image', fullImageUrl);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', finalCanonical);

    // Language
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', seoConfig.language);

  }, [finalTitle, finalDescription, finalKeywords, fullImageUrl, finalCanonical, noindex]);

  // Return null since we're manipulating the DOM directly
  return null;
};

export default SEOHead;
