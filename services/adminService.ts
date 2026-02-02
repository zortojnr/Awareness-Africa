import { nanoid } from 'nanoid';

// Types
export interface Inquiry {
  id: string;
  name: string;
  email: string;
  type: 'contact' | 'volunteer' | 'partner';
  message?: string;
  date: string;
  status: 'new' | 'read' | 'archived';
}

export interface AnalyticsData {
  totalVisits: number;
  monthlyVisits: { [key: string]: number };
  lastVisit: string;
}

export interface SiteContent {
  home: {
    heroTitle: string;
    heroSubtitle: string;
  };
  // Add more sections as needed
}

// Keys
const STORAGE_KEYS = {
  AUTH_TOKEN: 'aaf_admin_token',
  INQUIRIES: 'aaf_inquiries',
  ANALYTICS: 'aaf_analytics',
  CONTENT: 'aaf_content',
};

// Default Content
const DEFAULT_CONTENT: SiteContent = {
  home: {
    heroTitle: 'A Future Defined by Empowerment.',
    heroSubtitle: 'To empower youth, amplify underrepresented voices, and create safe, inclusive spaces where emotional well-being and community resilience are nurtured.',
  },
};

// Service
export const adminService = {
  // --- Auth ---
  login: (email: string, pass: string): boolean => {
    // Hardcoded for demo requirements. In prod, this hits an API.
    if (email === 'info@awarenessafrica.org' && pass === 'victoriaodesanya') {
      const token = nanoid(32);
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
      // Auto-logout setup would happen in the app wrapper
      return true;
    }
    return false;
  },

  logout: () => {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    window.location.href = '/admin';
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  // --- Inquiries ---
  getInquiries: (): Inquiry[] => {
    const data = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
    return data ? JSON.parse(data) : [];
  },

  saveInquiry: (inquiry: Omit<Inquiry, 'id' | 'date' | 'status'>) => {
    const inquiries = adminService.getInquiries();
    const newInquiry: Inquiry = {
      ...inquiry,
      id: nanoid(),
      date: new Date().toISOString(),
      status: 'new',
    };
    inquiries.unshift(newInquiry);
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
    return newInquiry;
  },

  markInquiryAsRead: (id: string) => {
    const inquiries = adminService.getInquiries();
    const updated = inquiries.map(i => i.id === id ? { ...i, status: 'read' as const } : i);
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(updated));
  },

  // --- Analytics ---
  trackVisit: () => {
    // Basic session tracking to avoid counting every reload as a visit
    const sessionKey = 'aaf_session_active';
    if (sessionStorage.getItem(sessionKey)) return;

    sessionStorage.setItem(sessionKey, 'true');
    
    const data = adminService.getAnalytics();
    const currentMonth = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
    
    data.totalVisits += 1;
    data.monthlyVisits[currentMonth] = (data.monthlyVisits[currentMonth] || 0) + 1;
    data.lastVisit = new Date().toISOString();
    
    localStorage.setItem(STORAGE_KEYS.ANALYTICS, JSON.stringify(data));
  },

  getAnalytics: (): AnalyticsData => {
    const data = localStorage.getItem(STORAGE_KEYS.ANALYTICS);
    return data ? JSON.parse(data) : {
      totalVisits: 0,
      monthlyVisits: {},
      lastVisit: new Date().toISOString()
    };
  },

  // --- Content CMS ---
  getContent: (): SiteContent => {
    const data = localStorage.getItem(STORAGE_KEYS.CONTENT);
    return data ? JSON.parse(data) : DEFAULT_CONTENT;
  },

  updateContent: (section: keyof SiteContent, data: any) => {
    const content = adminService.getContent();
    content[section] = { ...content[section], ...data };
    localStorage.setItem(STORAGE_KEYS.CONTENT, JSON.stringify(content));
  },
  
  // --- Export ---
  exportInquiriesCSV: () => {
    const inquiries = adminService.getInquiries();
    const headers = ['ID', 'Date', 'Name', 'Email', 'Type', 'Status', 'Message'];
    const rows = inquiries.map(i => [
      i.id,
      new Date(i.date).toLocaleDateString(),
      `"${i.name}"`, // Escape quotes
      i.email,
      i.type,
      i.status,
      `"${(i.message || '').replace(/"/g, '""')}"` // Escape quotes in message
    ]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(r => r.join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `inquiries_export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
