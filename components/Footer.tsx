
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0F1A] border-t border-white/5 py-32 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 md:gap-24 mb-32">
          
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col mb-10 group">
              <span className="font-display text-2xl font-bold tracking-tight uppercase leading-none text-white group-hover:text-brand-accent transition-colors duration-500">Awareness Africa</span>
              <span className="text-[10px] tracking-[0.4em] font-medium uppercase text-brand-accent">Foundation</span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-10 font-light">
              Empowering minds, amplifying voices, and inspiring change across Africa through youth empowerment and mental well-being initiatives.
            </p>
            <div className="flex items-center gap-3 text-xs text-white/40 mb-10 font-medium tracking-widest uppercase">
              <MapPin size={14} className="text-brand-accent" />
              Kaduna, Nigeria
            </div>
            <div className="flex space-x-8 text-white/30">
              <Facebook size={20} className="hover:text-brand-accent transition-colors cursor-pointer" />
              <Twitter size={20} className="hover:text-brand-accent transition-colors cursor-pointer" />
              <Instagram size={20} className="hover:text-brand-accent transition-colors cursor-pointer" />
              <a
                href="https://www.linkedin.com/company/awareness-africa-foundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-accent transition-colors"
              >
                <Linkedin size={20} className="cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-white mb-10">Quick Links</h4>
            <ul className="space-y-6">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[11px] text-white/40 hover:text-white transition-all uppercase tracking-[0.2em] font-bold">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://chat.whatsapp.com/I4i76f4GFlS825eCbZXQ1O?mode=gi_t" target="_blank" rel="noopener noreferrer" className="text-[11px] text-white/40 hover:text-white transition-all uppercase tracking-[0.2em] font-bold">
                  Join our community
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-white mb-10">Join Our Newsletter</h4>
            <p className="text-sm text-white/50 mb-10 font-light max-w-sm">Stay updated with our impact stories and upcoming programs from across the continent.</p>
            <form className="flex group max-w-md">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-grow bg-white/5 border border-white/10 px-6 py-5 text-sm focus:outline-none focus:border-brand-accent focus:bg-white/10 transition-all text-white placeholder:text-white/20"
              />
              <button className="bg-brand-accent text-brand-primary px-10 py-5 uppercase tracking-widest text-xs font-bold flex items-center gap-3 hover:bg-white transition-all duration-500">
                Join <ArrowRight size={16} />
              </button>
            </form>
          </div>

        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.4em] font-bold text-white/30">
          <p>© 2026 Awareness Africa Foundation. All rights reserved.</p>
          <div className="flex space-x-12 mt-8 md:mt-0">
            <Link to="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
