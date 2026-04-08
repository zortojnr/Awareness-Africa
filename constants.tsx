
import { InitiativeType } from './types';

export const COLORS = {
  brand: {
    primary: '#0F172A', // Authoritative Deep Navy/Black
    accent: '#C5A059',  // Sophisticated Gold
    neutral: '#F9FAFB', // Soft Gray
    white: '#FFFFFF',
  },
  herAwareness: {
    primary: '#E91E63',
    bg: 'bg-[#E91E63]',
    text: 'text-[#E91E63]',
    border: 'border-[#E91E63]',
    hover: 'hover:bg-[#C2185B]'
  },
  menForward: {
    primary: '#1976D2',
    bg: 'bg-[#1976D2]',
    text: 'text-[#1976D2]',
    border: 'border-[#1976D2]',
    hover: 'hover:bg-[#1565C0]'
  }
};

export const NAV_LINKS = [
  { label: 'Home', path: '#home' },
  { label: 'About', path: '/about' },
  { label: 'Initiatives', path: '#initiatives' },
  { label: 'Programs', path: '/programs' },
  { label: 'Get Involved', path: '/volunteer' },
  { label: 'Resources', path: '/resources' },
  { label: 'Learning Hub', path: '/learning-hub' },
  { label: 'Contact', path: '/contact' },
  { label: 'Community', path: 'https://chat.whatsapp.com/I4i76f4GFlS825eCbZXQ1O?mode=gi_t' }
];

export const CORE_VALUES = [
  {
    title: "Education as Empowerment",
    description: "Education is the most powerful tool for breaking cycles of poverty and exclusion."
  },
  {
    title: "Gender Equity & Protection",
    description: "Protecting girls' rights to safety and self-determination while engaging boys as allies."
  },
  {
    title: "Humanity & Dignity",
    description: "Deep respect for human life, dignity, and emotional well-being."
  },
  {
    title: "Awareness for Prevention",
    description: "Addressing root causes—teenage pregnancy, early marriage, mental health stigma—before they become barriers."
  },
  {
    title: "Youth-Driven Leadership",
    description: "Empowering young people as solution-builders within their own communities."
  },
  {
    title: "Inclusion & Safe Spaces",
    description: "Creating spaces where young people can learn, speak freely, and heal without fear."
  }
];
