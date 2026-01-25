
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleLiveNavigation = () => {
    setGeoLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Open Google Maps directions from user location to Zonkwa, Kaduna
          const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=Zonkwa,Kaduna,Nigeria&travelmode=driving`;
          window.open(url, '_blank');
          setGeoLoading(false);
        },
        (error) => {
          console.error("Error obtaining location", error);
          // Fallback to static destination search
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
    <main className="bg-white">
      {/* SECTION 1 — TRICOLOR HERO SECTION */}
      <section className="relative min-h-[70vh] flex flex-col lg:flex-row overflow-hidden">
        {/* Background Color Divisions */}
        <div className="absolute inset-0 flex flex-col lg:flex-row">
          <div className="flex-1 bg-[#C5A059] transition-all duration-700" />
          <div className="flex-1 bg-[#E91E63] transition-all duration-700" />
          <div className="flex-1 bg-[#1976D2] transition-all duration-700" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-md p-12 md:p-20 border border-white/20"
          >
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-white mb-8 block">Institutional Engagement</span>
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-12 leading-[0.9]">
              Open Channels.
            </h1>
            <p className="text-xl md:text-2xl font-display text-white/90 leading-relaxed font-light max-w-2xl mx-auto italic">
              "Awareness Africa Foundation maintains an open line for institutional partners, media representatives, and community members. We prioritize substantive inquiry and collaborative dialogue."
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — CONTACT PATHWAYS */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            
            {/* Left: Contact Info */}
            <motion.div {...revealProps} className="space-y-24">
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-accent mb-12 block">Direct Communication</span>
                <div className="space-y-16">
                  <div className="flex gap-8 group">
                    <div className="w-14 h-14 bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 transition-colors group-hover:bg-brand-accent group-hover:border-brand-accent">
                      <Mail size={20} className="text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-3">General Inquiries</h4>
                      <p className="text-2xl font-display font-bold text-slate-900">info@awarenessafrica.org</p>
                    </div>
                  </div>

                  <div className="flex gap-8 group">
                    <div className="w-14 h-14 bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 transition-colors group-hover:bg-brand-accent group-hover:border-brand-accent">
                      <MapPin size={20} className="text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-3">Regional HQ</h4>
                      <p className="text-2xl font-display font-bold text-slate-900 leading-tight">
                        Zonkwa, <br/>
                        Southern Kaduna, Nigeria.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-8 group">
                    <div className="w-14 h-14 bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 transition-colors group-hover:bg-brand-accent group-hover:border-brand-accent">
                      <Globe size={20} className="text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-3">Pan-African Liaison</h4>
                      <div className="flex space-x-8 mt-4 text-slate-400">
                        <Linkedin size={24} className="hover:text-brand-accent cursor-pointer transition-colors" />
                        <Twitter size={24} className="hover:text-brand-accent cursor-pointer transition-colors" />
                        <Facebook size={24} className="hover:text-brand-accent cursor-pointer transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-12 bg-slate-50 border border-slate-100">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-900 mb-6">Media & Press</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-8">
                  For interview requests, press assets, or research data, please specify "Media Liaison" in your inquiry. We typically respond within 24 business hours.
                </p>
                <div className="h-px w-12 bg-brand-accent" />
              </div>
            </motion.div>

            {/* Right: Formal Inquiry Form */}
            <motion.div 
              {...revealProps}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="bg-white p-10 md:p-20 border border-slate-200 shadow-2xl w-full max-w-3xl mx-auto"
            >
              <div className="mb-16">
                <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Formal Inquiry</h3>
                <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-bold">Fields marked with * are required.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[11px] uppercase tracking-widest font-bold text-slate-500">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-50 border-2 border-slate-200 px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:bg-white focus:border-brand-accent focus:outline-none transition-all duration-300 text-base font-light"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] uppercase tracking-widest font-bold text-slate-500">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. john@awarenessafrica.org"
                      className="w-full bg-slate-50 border-2 border-slate-200 px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:bg-white focus:border-brand-accent focus:outline-none transition-all duration-300 text-base font-light"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] uppercase tracking-widest font-bold text-slate-500">Nature of Inquiry *</label>
                  <div className="relative">
                    <select 
                      required
                      className="w-full bg-slate-50 border-2 border-slate-200 px-6 py-4 text-slate-900 focus:bg-white focus:border-brand-accent focus:outline-none transition-all duration-300 text-base font-light appearance-none cursor-pointer"
                    >
                      <option value="" className="text-slate-400">Select Primary Objective</option>
                      <option value="partnership">Institutional Partnership</option>
                      <option value="media">Media & Press</option>
                      <option value="volunteering">Volunteering</option>
                      <option value="donation">Donation Inquiry</option>
                      <option value="other">General Message</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                      <ArrowRight size={14} className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] uppercase tracking-widest font-bold text-slate-500">Message / Brief *</label>
                  <textarea 
                    rows={6} 
                    required
                    placeholder="Provide a detailed overview of your inquiry..."
                    className="w-full bg-slate-50 border-2 border-slate-200 p-6 text-slate-900 placeholder:text-slate-300 focus:bg-white focus:border-brand-accent focus:outline-none transition-all duration-300 text-base font-light resize-none"
                  ></textarea>
                </div>

                <div className="pt-8 flex justify-center">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    noCaps 
                    className="px-14 py-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    Send your inquiry <ArrowRight size={18} className="text-white/70" />
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — LIVE LOCATION MAP */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-px bg-slate-900 border border-slate-900 shadow-2xl overflow-hidden">
          {/* Information Column */}
          <div className="p-12 bg-slate-900 text-white space-y-8 lg:col-span-1 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-brand-accent/20 border border-brand-accent flex items-center justify-center mb-10">
                <MapPin size={24} className="text-brand-accent" />
              </div>
              <h4 className="text-2xl font-display font-bold mb-4">Zonkwa Headquarters</h4>
              <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Nigeria — West Africa Liaison</p>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                Operating from the heart of Southern Kaduna, our center serves as a beacon for youth development and community leadership.
              </p>
            </div>
            
            <button 
              onClick={handleLiveNavigation}
              disabled={geoLoading}
              className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-accent hover:text-white transition-colors"
            >
              {geoLoading ? 'Acquiring...' : 'Find Route from My Location'} 
              <Navigation size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Interactive Map Column */}
          <div className="h-[600px] lg:col-span-3 bg-slate-100 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15724.84666504267!2d8.2771239!3d9.7504229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10f76016e344799f%3A0x6b1580f4f958440c!2sZonkwa!5e0!3m2!1sen!2sng!4v1715600000000!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Awareness Africa Headquarters - Zonkwa"
              className="grayscale contrast-125 opacity-90"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
