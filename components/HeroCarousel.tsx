
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    title: "Awareness Africa Foundation",
    subtitle: "Empowering minds, amplifying voices, and inspiring change across Africa. A pan-African umbrella organization dedicated to building community resilience and youth leadership.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop",
    accent: "#C5A059",
    cta: "Discover Our Mission"
  },
  {
    id: 2,
    title: "HerAwareness Africa",
    subtitle: "Empowering the African girl child through education, protection, and advocacy. Breaking barriers to build a brighter, more equitable future.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2000&auto=format&fit=crop",
    accent: "#E91E63", // Pink theme
    cta: "Support Girls' Education"
  },
  {
    id: 3,
    title: "MenForward Africa",
    subtitle: "Redefining masculinity. Normalizing mental health support and providing safe spaces for African men to heal and grow in Nigeria and beyond.",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2000&auto=format&fit=crop",
    accent: "#1976D2", // Blue theme
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

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      next();
    } else if (info.offset.x > swipeThreshold) {
      prev();
    }
  };

  const scrollToInitiatives = () => {
    const el = document.getElementById('initiatives');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const renderTitle = (slideIndex: number) => {
    const words = SLIDES[slideIndex].title.split(' ');
    
    if (slideIndex === 0) {
      // Awareness (White), Africa (Pink #E91E63), Foundation (Blue #1976D2)
      return (
        <>
          <span className="block text-white">{words[0]}</span>
          <span className="block text-[#E91E63]">{words[1]}</span>
          <span className="block text-[#1976D2]">{words[2]}</span>
        </>
      );
    } else if (slideIndex === 1) {
      // HerAwareness (Pink #E91E63), Africa (White)
      return (
        <>
          <span className="block text-[#E91E63]">{words[0]}</span>
          <span className="block text-white">{words[1]}</span>
        </>
      );
    } else if (slideIndex === 2) {
      // MenForward (Blue #1976D2), Africa (White)
      return (
        <>
          <span className="block text-[#1976D2]">{words[0]}</span>
          <span className="block text-white">{words[1]}</span>
        </>
      );
    }
    
    return words.map((word, i) => (
      <span key={i} className="block">{word}</span>
    ));
  };

  return (
    <div 
      className="relative h-[95vh] w-full overflow-hidden bg-black touch-pan-y border-b-[16px] border-brand-primary"
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />
          <img 
            src={SLIDES[current].image} 
            alt={SLIDES[current].title}
            className="w-full h-full object-cover grayscale opacity-70 pointer-events-none select-none"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-start pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl pointer-events-auto"
          >
            <motion.span 
              className="inline-block py-1 px-3 border text-[10px] uppercase tracking-[0.4em] font-bold text-white mb-6 transition-colors duration-500"
              style={{ 
                backgroundColor: `${SLIDES[current].accent}44`,
                borderColor: `${SLIDES[current].accent}`
              }}
            >
              {current === 0 ? "Parent Organization" : "Initiative Spotlight"}
            </motion.span>
            <h1 className="text-6xl md:text-9xl font-display font-bold mb-8 leading-[0.9] select-none">
              {renderTitle(current)}
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light mb-12 max-w-lg leading-relaxed select-none">
              {SLIDES[current].subtitle}
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ 
                  backgroundColor: SLIDES[current].accent,
                  transition: { duration: 0.3 } 
                }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToInitiatives}
                className="px-8 py-4 font-medium uppercase tracking-widest text-sm border-2 bg-transparent text-white focus:outline-none transition-border duration-300"
                style={{ 
                  borderColor: SLIDES[current].accent,
                }}
              >
                {SLIDES[current].cta}
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-12 right-6 md:right-12 z-30 flex items-center gap-4 md:gap-8">
        <div className="hidden md:flex gap-3">
          {SLIDES.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)}
              className="group py-4 focus:outline-none"
            >
              <div 
                className={`w-12 h-1 transition-all duration-500 ${current === i ? 'opacity-100 scale-x-110' : 'opacity-20 group-hover:opacity-50'}`}
                style={{ backgroundColor: current === i ? SLIDES[i].accent : 'white' }}
              />
            </button>
          ))}
        </div>
        <div className="flex gap-2 md:gap-4">
          <button 
            onClick={prev} 
            className="p-3 border border-white/20 text-white transition-all bg-black/20 backdrop-blur-sm group hover:border-white/50"
          >
            <ChevronLeft size={20} className="group-hover:text-brand-accent transition-colors" />
          </button>
          <button 
            onClick={next} 
            className="p-3 border border-white/20 text-white transition-all bg-black/20 backdrop-blur-sm group hover:border-white/50"
          >
            <ChevronRight size={20} className="group-hover:text-brand-accent transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
