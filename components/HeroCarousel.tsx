import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Import images
import img20 from '../assets/images/20.jpeg';
import img15 from '../assets/images/15.jpeg';

const SLIDES = [
  {
    id: 1,
    title: "Awareness Africa Foundation",
    subtitle: "Empowering minds, amplifying voices, and inspiring change across Africa.",
    image: img20,
    accent: "#C5A059",
    cta: "Discover Our Mission"
  },
  {
    id: 2,
    title: "HerAwareness Africa",
    subtitle: "Empowering the African girl child through education, protection, and advocacy.",
    image: img15,
    accent: "#E91E63",
    cta: "Support Girls' Education"
  },
  {
    id: 3,
    title: "MenForward Africa",
    subtitle: "Redefining masculinity. Normalizing mental health support for African men.",
    image: null,
    accent: "#1976D2",
    cta: "Join the Conversation"
  }
];

const HeroCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) next();
    else if (info.offset.x > swipeThreshold) prev();
  };

  const scrollToInitiatives = () => {
    const el = document.getElementById('initiatives');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const renderTitle = (slideIndex: number) => {
    const words = SLIDES[slideIndex].title.split(' ');
    
    if (slideIndex === 0) {
      return (
        <>
          <span className="block text-white">{words[0]}</span>
          <span className="block text-[#E91E63]">{words[1]}</span>
          <span className="block text-[#1976D2]">{words[2]}</span>
        </>
      );
    }
    return (
      <>
        <span className="block" style={{ color: SLIDES[slideIndex].accent }}>{words[0]}</span>
        <span className="block text-white">{words[1]}</span>
      </>
    );
  };

  return (
    <div className="relative h-[85vh] sm:h-[90vh] w-full overflow-hidden bg-black touch-pan-y border-b-[8px] border-brand-primary">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
          {SLIDES[current].image ? (
            <img 
              src={SLIDES[current].image} 
              alt={SLIDES[current].title}
              className="w-full h-full object-cover grayscale opacity-60 pointer-events-none select-none"
            />
          ) : (
            <div 
              className="w-full h-full opacity-60 pointer-events-none select-none"
              style={{ backgroundColor: SLIDES[current].accent }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl pointer-events-auto"
          >
            <motion.span 
              className="inline-block py-1 px-3 border text-[9px] uppercase tracking-[0.4em] font-bold text-white mb-6"
              style={{ backgroundColor: `${SLIDES[current].accent}22`, borderColor: SLIDES[current].accent }}
            >
              {current === 0 ? "Parent Organization" : "Initiative Spotlight"}
            </motion.span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold mb-6 leading-[1.1] tracking-tighter">
              {renderTitle(current)}
            </h1>
            <p className="text-base sm:text-lg text-white/70 font-light mb-10 max-w-md leading-relaxed">
              {SLIDES[current].subtitle}
            </p>
            <button
              onClick={scrollToInitiatives}
              className="px-10 py-3.5 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs border-2 text-white transition-all duration-300 w-full sm:w-auto text-center"
              style={{ borderColor: SLIDES[current].accent, backgroundColor: `${SLIDES[current].accent}11` }}
            >
              {SLIDES[current].cta}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-10 right-6 sm:right-10 z-30 flex items-center gap-4">
        <button onClick={prev} className="p-3 border border-white/20 text-white bg-black/40 hover:bg-white hover:text-black transition-all">
          <ChevronLeft size={18} />
        </button>
        <button onClick={next} className="p-3 border border-white/20 text-white bg-black/40 hover:bg-white hover:text-black transition-all">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
