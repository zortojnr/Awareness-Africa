import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import loadingAsset from '../assets/images/loading-asset.png';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'image' | 'slogan' | 'exit'>('image');

  useEffect(() => {
    // 0s - 2.5s: Image
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
        {stage === 'image' && (
          <motion.div
            key="loader-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full flex items-center justify-center p-10"
          >
            <img 
              src={loadingAsset} 
              alt="Loading..." 
              className="max-w-[150px] md:max-w-[200px] w-full h-auto object-contain"
            />
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
