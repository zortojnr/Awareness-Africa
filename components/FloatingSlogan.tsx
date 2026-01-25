
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const FloatingSlogan: React.FC = () => {
  const location = useLocation();
  
  // Exclude from the "Get Involved" / Volunteer page
  const isDonatePage = location.pathname === '/volunteer';

  return (
    <AnimatePresence>
      {!isDonatePage && (
        <motion.div
          drag
          dragMomentum={false}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          whileDrag={{ scale: 1.05, boxShadow: "0_50px_80px_-20px_rgba(0,0,0,0.6)" }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[60] flex flex-col items-start bg-slate-900 text-white p-5 md:p-8 border-l-[4px] md:border-l-[6px] border-brand-accent shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] max-w-[220px] md:max-w-[300px] cursor-grab active:cursor-grabbing select-none touch-none"
        >
          <span className="text-[7px] md:text-[9px] uppercase tracking-[0.5em] font-bold text-brand-accent mb-3 md:mb-4 pointer-events-none">Strategic Slogan</span>
          <p className="text-sm md:text-xl font-sans font-black leading-tight tracking-tight uppercase pointer-events-none">
            Empowering Minds, <br/>
            Amplifying Voices, <br/>
            Inspiring Change.
          </p>
          <div className="mt-3 md:mt-4 h-px w-6 md:w-8 bg-brand-accent/30 pointer-events-none" />
          
          {/* Subtle drag handle indicator */}
          <div className="absolute top-2 right-2 flex gap-1 opacity-20">
            <div className="w-1 h-1 rounded-full bg-white" />
            <div className="w-1 h-1 rounded-full bg-white" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingSlogan;
