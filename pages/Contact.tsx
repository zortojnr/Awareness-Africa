
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Globe, Linkedin, Twitter, Facebook, ArrowRight, Navigation } from 'lucide-react';
import Button from '../components/Button';

const revealProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

const Contact: React.FC = () => {
  const [geoLoading, setGeoLoading] = useState(false);

  const handleLiveNavigation = () => {
    setGeoLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=Zonkwa,Kaduna,Nigeria`;
          window.open(url, '_blank');
          setGeoLoading(false);
        },
        () => {
          window.open('https://www.google.com/maps/search/?api=1&query=Zonkwa,Kaduna,Nigeria', '_blank');
          setGeoLoading(false);
        }
      );
    } else {
      window.open('https://www.google.com/maps/search/?api=1&query=Zonkwa,Kaduna,Nigeria', '_blank');
      setGeoLoading(false);
    }
  };

  return (
    <main className="bg-white selection:bg-brand-accent selection:text-white overflow-x-hidden">
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center bg-slate-900 py-32 px-6">
        <div className="absolute inset-0 flex">
          <div className="flex-1 bg-[#C5A059]/20" />
          <div className="flex-1 bg-[#E91E63]/20" />
          <div className="flex-1 bg-[#1976D2]/20" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <span className="text-[12px] uppercase tracking-[0.6em] font-bold text-white mb-6 block">Institutional Engagement</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight tracking-tighter">
            Open Channels.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-display text-white/90 italic leading-relaxed max-w-2xl mx-auto">
            "We prioritize substantive inquiry and collaborative dialogue with our global partners."
          </p>
        </motion.div>
      </section>

      <section className="py-24 sm:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div {...revealProps} className="space-y-16">
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-accent mb-10 block">Direct Communication</span>
                <div className="space-y-12">
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-2">Email</h4>
                      <p className="text-xl md:text-2xl font-display font-bold text-slate-900">info@awarenessafrica.org</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-2">Headquarters</h4>
                      <p className="text-xl md:text-2xl font-display font-bold text-slate-900">Zonkwa, Kaduna, Nigeria.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              {...revealProps}
              className="bg-white p-8 md:p-12 border border-slate-200 shadow-xl"
            >
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-10">Formal Inquiry</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Name</label>
                    <input type="text" className="w-full bg-slate-50 border-2 border-slate-100 px-4 py-3 text-sm focus:border-brand-accent outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Email</label>
                    <input type="email" className="w-full bg-slate-50 border-2 border-slate-100 px-4 py-3 text-sm focus:border-brand-accent outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Message</label>
                  <textarea rows={4} className="w-full bg-slate-50 border-2 border-slate-100 px-4 py-3 text-sm focus:border-brand-accent outline-none resize-none" />
                </div>
                <Button variant="primary" className="w-full py-4">Send Message</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <h4 className="text-2xl font-display font-bold mb-6">Find us in Southern Kaduna</h4>
        <Button 
          variant="outline" 
          className="border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white px-12"
          onClick={handleLiveNavigation}
          disabled={geoLoading}
        >
          {geoLoading ? 'Locating...' : 'Get Directions'} <Navigation size={14} className="ml-2" />
        </Button>
      </section>
    </main>
  );
};

export default Contact;
