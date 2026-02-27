// SEO Configuration for Awareness Africa Foundation
// Update the baseUrl with your actual domain name when deploying

export const seoConfig = {
  // Base URL - Update this with your actual domain
  baseUrl: process.env.VITE_BASE_URL || 'https://www.awarenessafrica.org',
  
  // Site Information
  siteName: 'Awareness Africa Foundation',
  siteDescription: 'Empowering youth across Africa through education, mental health support, and community resilience. HerAwareness Africa and MenForward Africa initiatives.',
  defaultImage: '/assets/images/AAF%20blue%20logo%20(1).png',
  
  // Organization Details
  organization: {
    name: 'Awareness Africa Foundation',
    legalName: 'Awareness Africa Foundation',
    url: 'https://www.awarenessafrica.org',
    logo: 'https://www.awarenessafrica.org/assets/images/AAF%20blue%20logo%20(1).png',
    email: 'info@awarenessafrica.org',
    address: {
      streetAddress: 'Zonkwa',
      addressLocality: 'Kaduna',
      addressRegion: 'Kaduna State',
      addressCountry: 'NG',
      postalCode: ''
    },
    sameAs: [
      // Add your social media profiles here when available
      // 'https://www.facebook.com/awarenessafrica',
      // 'https://www.twitter.com/awarenessafrica',
      // 'https://www.instagram.com/awarenessafrica',
      // 'https://www.linkedin.com/company/awarenessafrica'
    ],
    contactPoint: {
      contactType: 'Customer Service',
      email: 'info@awarenessafrica.org',
      availableLanguage: ['English']
    }
  },
  
  // Default SEO values
  defaultTitle: 'Awareness Africa Foundation | Empowering Youth Across Africa',
  defaultKeywords: [
    'Awareness Africa Foundation',
    'youth empowerment Africa',
    'HerAwareness Africa',
    'MenForward Africa',
    'mental health Africa',
    'education Africa',
    'community development',
    'NGO Nigeria',
    'youth programs',
    'social impact Africa'
  ].join(', '),
  
  // Author information
  author: {
    name: 'Awareness Africa Foundation',
    email: 'info@awarenessafrica.org'
  },
  
  // Language and Region
  language: 'en',
  region: 'NG',
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@awarenessafrica', // Update with actual Twitter handle
    creator: '@awarenessafrica'
  },
  
  // Facebook/Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Awareness Africa Foundation'
  }
};

// Route-specific SEO metadata
export const routeMetadata = {
  '/': {
    title: 'Awareness Africa Foundation | Empowering Youth Across Africa',
    description: 'Empowering youth, amplifying underrepresented voices, and creating safe, inclusive spaces where emotional well-being and community resilience are nurtured across Africa.',
    keywords: 'Awareness Africa Foundation, youth empowerment, Africa, HerAwareness, MenForward, community development',
    image: '/assets/images/banner.jpeg'
  },
  '/about': {
    title: 'About Us | Awareness Africa Foundation',
    description: 'Learn about Awareness Africa Foundation, a pan-African organization providing strategic architecture for specialized initiatives to thrive and build sustainable systems across the continent.',
    keywords: 'about Awareness Africa Foundation, NGO Africa, pan-African organization, mission, vision',
    image: '/assets/images/founder.jpeg'
  },
  '/programs': {
    title: 'Our Programs | Strategic Intervention Initiatives',
    description: 'Explore our data-driven programs including Empowerment Circles, Educational Access, Vocational Skills, Health & Dignity, Mentorship Networks, and Regional Advocacy.',
    keywords: 'Awareness Africa programs, youth programs, empowerment circles, vocational training, mentorship',
    image: '/assets/images/10.jpeg'
  },
  '/volunteer': {
    title: 'Volunteer With Us | Join Our Mission',
    description: 'Join Awareness Africa Foundation as a mentor, facilitator, advocate, or liaison. Be part of the transformation and make a lasting impact across Africa.',
    keywords: 'volunteer Africa, mentorship opportunities, community service, volunteer programs',
    image: '/assets/images/22.jpeg'
  },
  '/resources': {
    title: 'Resources | Educational Materials & Reports',
    description: 'Access our knowledge hub including annual reports, strategic papers, research data, and educational resources from Awareness Africa Foundation.',
    keywords: 'Awareness Africa resources, annual reports, research papers, educational materials, NGO reports',
    image: '/assets/images/AAF%20blue%20logo%20(1).png'
  },
  '/contact': {
    title: 'Contact Us | Get In Touch',
    description: 'Contact Awareness Africa Foundation. Reach out for institutional inquiries, partnerships, or general information. Located in Zonkwa, Kaduna, Nigeria.',
    keywords: 'contact Awareness Africa, NGO contact, partnership inquiries, Africa foundation contact',
    image: '/assets/images/AAF%20blue%20logo%20(1).png'
  },
  '/initiatives/her-awareness': {
    title: 'HerAwareness Africa | Empowering Girls and Women',
    description: 'HerAwareness Africa protects girls\' rights to education and safety through systemic intervention, mentorship, and reproductive health awareness.',
    keywords: 'HerAwareness Africa, girls empowerment, women education, reproductive health, mentorship programs',
    image: '/assets/images/HerAwareness Logo.png'
  },
  '/initiatives/men-forward': {
    title: 'MenForward Africa | Men\'s Mental Health Support',
    description: 'MenForward Africa normalizes emotional expression and reduces suicide through culturally relevant support, peer networks, and mental health advocacy.',
    keywords: 'MenForward Africa, men mental health, suicide prevention, emotional support, peer networks',
    image: '/assets/images/Men logo.png'
  }
};

// Helper function to get metadata for a route
export const getRouteMetadata = (pathname: string) => {
  // Normalize pathname (remove trailing slash, handle hash router if needed)
  const normalizedPath = pathname.replace(/\/$/, '') || '/';
  
  return routeMetadata[normalizedPath as keyof typeof routeMetadata] || {
    title: seoConfig.defaultTitle,
    description: seoConfig.siteDescription,
    keywords: seoConfig.defaultKeywords,
    image: seoConfig.defaultImage
  };
};

// Helper to build full URL
export const getFullUrl = (path: string = '') => {
  const base = seoConfig.baseUrl.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
};
