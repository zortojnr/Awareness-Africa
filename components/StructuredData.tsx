import React from 'react';
import { useLocation } from 'react-router-dom';
import { seoConfig, getFullUrl } from '../config/seo.config';

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'breadcrumb' | 'all';
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ 
  type = 'all',
  breadcrumbs 
}) => {
  const location = useLocation();

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: seoConfig.organization.name,
    legalName: seoConfig.organization.legalName,
    url: seoConfig.organization.url,
    logo: seoConfig.organization.logo,
    description: seoConfig.siteDescription,
    email: seoConfig.organization.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: seoConfig.organization.address.streetAddress,
      addressLocality: seoConfig.organization.address.addressLocality,
      addressRegion: seoConfig.organization.address.addressRegion,
      addressCountry: seoConfig.organization.address.addressCountry,
      postalCode: seoConfig.organization.address.postalCode
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: seoConfig.organization.contactPoint.contactType,
      email: seoConfig.organization.contactPoint.email,
      availableLanguage: seoConfig.organization.contactPoint.availableLanguage
    },
    sameAs: seoConfig.organization.sameAs.length > 0 ? seoConfig.organization.sameAs : undefined,
    foundingDate: '2020', // Update with actual founding date if known
    areaServed: {
      '@type': 'Place',
      name: 'Africa'
    }
  };

  // Website Schema with SearchAction
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seoConfig.siteName,
    url: seoConfig.baseUrl,
    description: seoConfig.siteDescription,
    publisher: {
      '@type': 'Organization',
      name: seoConfig.organization.name,
      logo: {
        '@type': 'ImageObject',
        url: seoConfig.organization.logo
      }
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${seoConfig.baseUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };

  // Breadcrumb Schema
  const getBreadcrumbSchema = () => {
    if (!breadcrumbs || breadcrumbs.length === 0) {
      // Generate default breadcrumbs from pathname
      const pathSegments = location.pathname.split('/').filter(Boolean);
      const defaultBreadcrumbs = [
        { name: 'Home', url: getFullUrl('/') }
      ];

      pathSegments.forEach((segment, index) => {
        const path = '/' + pathSegments.slice(0, index + 1).join('/');
        const name = segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        defaultBreadcrumbs.push({ name, url: getFullUrl(path) });
      });

      breadcrumbs = defaultBreadcrumbs;
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url
      }))
    };
  };

  // Get schemas based on type
  const getSchemas = () => {
    const schemas: any[] = [];

    if (type === 'all' || type === 'organization') {
      schemas.push(organizationSchema);
    }

    if (type === 'all' || type === 'website') {
      schemas.push(websiteSchema);
    }

    if (type === 'all' || type === 'breadcrumb') {
      schemas.push(getBreadcrumbSchema());
    }

    return schemas;
  };

  const schemas = getSchemas();

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
        />
      ))}
    </>
  );
};

export default StructuredData;
