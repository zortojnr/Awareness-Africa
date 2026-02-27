
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../components/Button';
import { adminService } from '../services/adminService';
// import { emailService } from '../services/emailService'; // Commented out - Resend API not available yet

const revealProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

const SectionDivider = () => (
  <div className="w-full h-1 bg-brand-primary" />
);

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;

    setStatus('submitting');
    
    try {
      // Save to local storage for admin dashboard
      adminService.saveInquiry({
        name: formState.name,
        email: formState.email,
        type: 'contact',
        message: formState.message
      });

      // Resend API integration commented out - API key not available yet
      // TODO: Uncomment when Resend API key is configured
      // const result = await emailService.sendInquiry({
      //   name: formState.name,
      //   email: formState.email,
      //   message: formState.message
      // });

      // if (result.success) {
      //   setStatus('success');
      //   setFormState({ name: '', email: '', message: '' });
      // } else {
      //   setStatus('error');
      // }

      // For now, just show success after saving to localStorage
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error submitting form:', err);
      setStatus('error');
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

      <SectionDivider />

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

              <div className="space-y-8">
                <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-slate-900 mb-4">Location Map</h3>
                <div className="w-full aspect-video bg-slate-100 border border-slate-200 overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15724.893818617578!2d8.2833333!3d9.7666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10f01968848d795b%3A0x70c01e6704be9f80!2sZonkwa!5e0!3m2!1sen!2sng!4v1714500000000!5m2!1sen!2sng" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Awareness Africa Foundation Headquarters Location"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            <motion.div 
              {...revealProps}
              className="bg-white p-8 md:p-12 border border-slate-200 shadow-xl"
            >
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-10">Formal Inquiry</h3>
              
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-100 p-8 text-center"
                >
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent</h4>
                  <p className="text-slate-600 text-sm mb-6">Thank you for reaching out. Our team will review your inquiry and respond shortly.</p>
                  <Button variant="outline" onClick={() => setStatus('idle')} className="text-xs">Send Another</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Name</label>
                      <input 
                        type="text" 
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-100 px-4 py-3 text-sm focus:border-brand-accent outline-none transition-colors" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Email</label>
                      <input 
                        type="email" 
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-100 px-4 py-3 text-sm focus:border-brand-accent outline-none transition-colors" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Message Context</label>
                    <textarea 
                      rows={4} 
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="w-full bg-slate-50 border-2 border-slate-100 px-4 py-3 text-sm focus:border-brand-accent outline-none transition-colors resize-none" 
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 text-xs">
                      <AlertCircle size={14} /> Failed to send message. Please try again.
                    </div>
                  )}

                  <Button 
                    variant="primary" 
                    className={`w-full py-4 ${status === 'submitting' ? 'opacity-70 cursor-wait' : ''}`}
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Transmitting...' : 'Submit Inquiry'}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />
    </main>
  );
};

export default Contact;