import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'animation' | 'slogan' | 'exit'>('animation');

  useEffect(() => {
    // 0s - 2.5s: Animation
    const timer1 = setTimeout(() => {
      setStage('slogan');
    }, 2500);

    // 2.5s - 5.0s: Slogan
    const timer2 = setTimeout(() => {
      setStage('exit');
      // Small buffer to allow exit animation to start before unmounting in parent
      setTimeout(onComplete, 800); 
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {stage === 'animation' && (
          <motion.div
            key="loader-animation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Animated Bar Loading Indicator */}
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ height: 20, opacity: 0.3 }}
                  animate={{ 
                    height: [20, 60, 20],
                    opacity: [0.3, 1, 0.3],
                    backgroundColor: ["#0F172A", "#C5A059", "#0F172A"]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut"
                  }}
                  className="w-2 rounded-full"
                />
              ))}
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mt-4"
            >
              Loading Resources
            </motion.p>
          </motion.div>
        )}

        {stage === 'slogan' && (
          <motion.div
            key="loader-slogan"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center text-center p-6"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-accent mb-6 block">
              Strategic Slogan
            </span>
            <h2 className="text-xl md:text-3xl font-display font-bold text-slate-900 leading-tight">
              Empowering Minds, <br/>
              Amplifying Voices, <br/>
              Inspiring Change.
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Loader;
