import { useState, useEffect } from 'react';
import { adminService, SiteContent } from '../services/adminService';

export const useContent = () => {
  const [content, setContent] = useState<SiteContent>(adminService.getContent());

  useEffect(() => {
    // Poll for changes or just load once. Since we are using localStorage, 
    // a simple load on mount is usually enough unless we want multi-tab sync.
    // For this demo, we'll just load once.
    setContent(adminService.getContent());
  }, []);

  const refreshContent = () => {
    setContent(adminService.getContent());
  };

  const getImage = (key: string, defaultUrl: string) => {
    return adminService.getImage(key, defaultUrl);
  };

  return { content, refreshContent, getImage };
};
