import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, RefreshCw, Image as ImageIcon, CheckCircle, AlertCircle } from 'lucide-react';
import { adminService, SiteContent } from '../../services/adminService';

const SECTIONS = [
  { id: 'home', label: 'Home Page' },
  { id: 'about', label: 'About Page' },
  { id: 'programs', label: 'Programs Page' },
];

const ContentManager: React.FC = () => {
  const [activeSection, setActiveSection] = useState<keyof SiteContent>('home');
  const [formData, setFormData] = useState<any>({});
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');

  useEffect(() => {
    loadContent(activeSection);
  }, [activeSection]);

  const loadContent = (section: keyof SiteContent) => {
    const content = adminService.getContent();
    setFormData(content[section] || {});
  };

  const handleInputChange = (key: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [key]: value }));
    setStatus('idle');
  };

  const handleSave = () => {
    setStatus('saving');
    setTimeout(() => {
      try {
        adminService.updateContent(activeSection, formData);
        setStatus('success');
        setTimeout(() => setStatus('idle'), 2000);
      } catch (err) {
        setStatus('error');
      }
    }, 800);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-slate-900">Content Manager</h1>
          <p className="text-sm text-slate-500 font-light mt-1">
            Edit text and images across the platform directly.
          </p>
        </div>
        <button 
          onClick={handleSave}
          disabled={status === 'saving'}
          className={`flex items-center gap-2 bg-slate-900 text-white px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand-accent transition-colors rounded-sm ${status === 'saving' ? 'opacity-70' : ''}`}
        >
          {status === 'saving' ? <RefreshCw size={14} className="animate-spin" /> : <Save size={14} />}
          {status === 'saving' ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      {status === 'success' && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-green-50 text-green-700 p-4 rounded-sm flex items-center gap-2 text-sm">
          <CheckCircle size={16} /> Changes published successfully.
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-red-50 text-red-700 p-4 rounded-sm flex items-center gap-2 text-sm">
          <AlertCircle size={16} /> Failed to save changes. Please try again.
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Section Navigation */}
        <div className="lg:col-span-1 space-y-2">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id as keyof SiteContent)}
              className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                activeSection === section.id 
                  ? 'bg-slate-200 text-slate-900 font-bold' 
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Editor Area */}
        <div className="lg:col-span-3 bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4 capitalize">
            Editing: {SECTIONS.find(s => s.id === activeSection)?.label}
          </h2>

          <div className="space-y-6">
            {Object.keys(formData).map((key) => (
              <div key={key} className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 block mb-1">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                
                {key.toLowerCase().includes('text') || key.toLowerCase().includes('bio') ? (
                  <textarea
                    rows={4}
                    value={formData[key]}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:border-brand-accent outline-none rounded-sm transition-colors"
                  />
                ) : (
                  <input
                    type="text"
                    value={formData[key]}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:border-brand-accent outline-none rounded-sm transition-colors"
                  />
                )}
              </div>
            ))}

            {Object.keys(formData).length === 0 && (
              <p className="text-slate-400 text-sm italic">No editable fields configured for this section yet.</p>
            )}
          </div>

          {/* Image Manager Stub */}
          <div className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
              <ImageIcon size={16} /> Section Media
            </h3>
            <div className="bg-slate-50 p-4 rounded-md border border-slate-200 border-dashed text-center">
              <p className="text-xs text-slate-500 mb-2">Image replacement functionality coming soon.</p>
              <button className="text-[10px] uppercase font-bold text-brand-accent hover:underline">
                Manage Media Library
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentManager;
