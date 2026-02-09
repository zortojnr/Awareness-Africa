
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, Landmark, Users, Briefcase, Heart, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

interface InvolvementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InvolvementModal: React.FC<InvolvementModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [showSponsor, setShowSponsor] = React.useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const handleVolunteerClick = () => {
    onClose();
    navigate('/volunteer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-[1000] cursor-zoom-out"
          />

          {/* Modal Container - Responsive scrolling fixed */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 m-auto z-[1001] w-full max-w-5xl h-full md:h-fit max-h-screen md:max-h-[90vh] bg-white border border-slate-200 shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row"
          >
            {/* Left Sidebar - Institutional Context */}
            <div className="w-full md:w-1/3 bg-slate-900 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden shrink-0">
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-accent mb-6 block">Support Action</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6">Join the <br/>Transformation.</h2>
                <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
                  Your contribution directly funds systemic change, providing the architecture for youth-led leadership across Africa.
                </p>
              </div>
              
              <div className="relative z-10 space-y-4 pt-12">
                <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-white/40">
                  <div className="w-8 h-px bg-white/20" /> Institutional Support
                </div>
                <div className="p-4 border border-white/10 bg-white/5">
                   <p className="text-[10px] uppercase tracking-wider text-brand-accent font-bold mb-2">Transparency Pledge</p>
                   <p className="text-[10px] md:text-xs font-light text-slate-300 italic">"100% of individual donations go directly to program delivery and community resources."</p>
                </div>
              </div>

              {/* Decorative Background */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-accent/5 rotate-45 pointer-events-none" />
            </div>

            {/* Right Side - Functional Donation Cards */}
            <div className="flex-1 p-8 md:p-16 overflow-y-auto bg-white">
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 p-2 text-slate-400 hover:text-slate-900 transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="space-y-12">
                {/* Donation Cards Fixed Structure */}
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <Landmark size={20} className="text-brand-accent" />
                    <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-900">Direct Financial Support</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {/* Card 1: Local Bank Account */}
                    <div className="p-6 md:p-8 bg-slate-50 border border-slate-100 hover:border-brand-accent transition-colors duration-500">
                      <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-6">Local Bank Account (Nigeria)</p>
                      <div className="space-y-4">
                        <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                          <span className="text-[9px] uppercase tracking-widest text-slate-400">Account Name</span>
                          <span className="text-xs font-bold text-slate-900">Victoria Odesanya (Founder, Awareness Africa)</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                          <span className="text-[9px] uppercase tracking-widest text-slate-400">Bank</span>
                          <span className="text-xs font-bold text-slate-900">UBA</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                          <span className="text-[9px] uppercase tracking-widest text-slate-400">Account Number</span>
                          <span className="text-sm font-bold text-brand-accent font-mono">2182926086</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                          <span className="text-[9px] uppercase tracking-widest text-slate-400">Reference</span>
                          <span className="text-xs font-bold text-slate-900">For: Awareness Africa Foundation</span>
                        </div>
                        
                         <Button 
                            variant="secondary" 
                            className="w-full flex items-center justify-center gap-3"
                            onClick={() => setShowSponsor(true)}
                          >
                           <CreditCard size={14} /> Secure Donation Link
                         </Button>

                         {showSponsor && (
                           <motion.div 
                             initial={{ opacity: 0, height: 0 }} 
                             animate={{ opacity: 1, height: 'auto' }}
                             className="pt-2"
                           >
                             <Button 
                                variant="outline" 
                                className="w-full flex items-center justify-center gap-3 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white"
                              >
                               <Heart size={14} /> Sponsor a child
                             </Button>
                           </motion.div>
                         )}
                      </div>
                    </div>

                    {/* Card 2: International / Secure Link */}
                    <div className="p-6 md:p-8 bg-brand-primary text-white border border-brand-primary">
                      <p className="text-[10px] uppercase tracking-widest font-black text-white/50 mb-6">International & Digital Payments</p>
                      <div className="space-y-6">
                         <p className="text-xs text-white/70 leading-relaxed font-light italic">
                           Securely donate via Paystack or Flutterwave for global cards and USD/GBP transfers.
                         </p>
                         <Button variant="secondary" className="w-full flex items-center justify-center gap-3">
                           <CreditCard size={14} /> Secure Donation Link
                         </Button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Participation Link */}
                <section className="pt-8 border-t border-slate-100">
                  <div className="flex items-center gap-3 mb-8">
                    <Users size={20} className="text-brand-accent" />
                    <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-900">Strategic Participation</h3>
                  </div>

                  <div 
                    onClick={handleVolunteerClick}
                    className="flex items-center justify-between p-6 border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-6">
                      <Heart size={24} className="text-slate-300 group-hover:text-[#E91E63] transition-colors" />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Volunteer Network</h4>
                        <p className="text-xs text-slate-500">Apply your expertise to specialized community initiatives.</p>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-slate-300 group-hover:translate-x-1 transition-all" />
                  </div>
                </section>

                <div className="pt-8 border-t border-slate-100">
                  <p className="text-[9px] text-center text-slate-400 font-medium uppercase tracking-widest">
                    Institutional Inquiries: info@awarenessafrica.org
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default InvolvementModal;