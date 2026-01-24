
import React, { useState, useEffect, useRef } from 'react';
import { motion, PanInfo, useInView, animate } from 'framer-motion';

const METRICS = [
  { 
    id: 'youth',
    value: 200, 
    suffix: '+', 
    label: "Youth Reached", 
    desc: "Lives transformed across local communities through direct intervention and engagement.", 
    color: "#C5A059",
    bgColor: "#FCF9F2", 
    borderColor: "#C5A059", 
    pattern: "radial-gradient(circle at 1px 1px, rgba(197, 160, 89, 0.2) 1px, transparent 0)"
  },
  { 
    id: 'programs',
    value: 3, 
    suffix: '+', 
    label: "Active Programs", 
    desc: "Scalable initiatives addressing education, mental health, and leadership.", 
    color: "#E91E63",
    bgColor: "#FCE4EC", 
    borderColor: "#E91E63", 
    pattern: "linear-gradient(45deg, rgba(233, 30, 99, 0.1) 25%, transparent 25%, transparent 50%, rgba(233, 30, 99, 0.1) 50%, rgba(233, 30, 99, 0.1) 75%, transparent 75%, transparent)"
  },
  { 
    id: 'success',
    value: 80, 
    suffix: '%', 
    label: "Success Rate", 
    desc: "A measurable impact in improving emotional resilience and school retention.", 
    color: "#1976D2",
    bgColor: "#E3F2FD", 
    borderColor: "#1976D2", 
    pattern: "repeating-linear-gradient(0deg, rgba(25, 118, 210, 0.1), rgba(25, 118, 210, 0.1) 1px, transparent 1px, transparent 20px)"
  }
];

interface AnimatedNumberProps {
  value: number;
  suffix: string;
  active: boolean;
  hovered: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, suffix, active, hovered }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView || active || hovered) {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value, active, hovered]);

  return (
    <span ref={ref} className="text-7xl md:text-8xl font-display font-bold block tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

interface ImpactPillarsProps {
  onActiveColorChange?: (color: string) => void;
}

const ImpactPillars: React.FC<ImpactPillarsProps> = ({ onActiveColorChange }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleActive = (i: number) => {
    if (activeIndex === i) {
      setActiveIndex(null);
      if (onActiveColorChange) onActiveColorChange('#FAF9F6'); 
    } else {
      setActiveIndex(i);
      if (onActiveColorChange) onActiveColorChange(METRICS[i].color);
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    const current = activeIndex ?? 0;
    if (info.offset.x < -swipeThreshold && current < METRICS.length - 1) {
      handleActive(current + 1);
    } else if (info.offset.x > swipeThreshold && current > 0) {
      handleActive(current - 1);
    }
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[680px]">
        {METRICS.map((metric, i) => {
          const isActive = activeIndex === i;
          const isHovered = hoveredIndex === i;
          const showColor = isActive || isHovered;
          
          return (
            <motion.div
              key={metric.id}
              onClick={() => handleActive(i)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              initial={false}
              animate={{
                backgroundColor: showColor ? metric.color : 'rgba(255, 255, 255, 1)',
                color: showColor ? '#FFFFFF' : '#000000',
                borderColor: metric.borderColor,
                flex: isActive ? 2.2 : 1,
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative cursor-pointer group flex flex-col justify-end p-10 md:p-12 border-2 shadow-sm overflow-hidden ${
                isActive ? 'z-10 shadow-2xl' : 'z-0'
              } ${activeIndex !== null && !isActive ? 'hidden md:flex opacity-30 grayscale-[0.5]' : 'flex'}`}
            >
              <div className="absolute top-0 left-0 w-full h-2/5 pointer-events-none">
                <div 
                  className="absolute inset-0 opacity-40"
                  style={{ 
                    backgroundImage: metric.pattern,
                    backgroundSize: '24px 24px',
                  }} 
                />
                <motion.div 
                  animate={{ opacity: showColor ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"
                />
                <div className={`absolute top-10 right-10 w-24 h-24 border transition-all duration-1000 ${
                  showColor ? 'border-white/20 rotate-45 scale-150' : 'border-black/5 rotate-0 scale-100'
                }`} />
              </div>
              
              <div className="absolute top-12 left-12 text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">
                Metric 0{i + 1}
              </div>

              {!showColor && (
                 <div className="absolute top-12 right-12 w-3 h-3 md:hidden" style={{ backgroundColor: metric.color }} />
              )}
              
              <motion.div 
                animate={{ y: showColor ? 0 : 20 }}
                className="relative z-20 space-y-6"
              >
                <AnimatedNumber value={metric.value} suffix={metric.suffix} active={isActive} hovered={isHovered} />
                
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-[0.3em] font-bold">
                    {metric.label}
                  </h3>
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: showColor ? 0.9 : 0,
                      height: showColor ? 'auto' : 0
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-sm leading-relaxed max-w-xs font-light overflow-hidden"
                  >
                    {metric.desc}
                  </motion.p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ 
                  height: showColor ? '6px' : '4px',
                  backgroundColor: showColor ? 'rgba(255,255,255,0.4)' : metric.color
                }}
                className="absolute bottom-0 left-0 w-full transition-all duration-700"
              />
            </motion.div>
          );
        })}
      </div>

      <div className="flex md:hidden justify-center gap-4 mt-12">
        {METRICS.map((metric, i) => (
          <button
            key={i}
            onClick={() => handleActive(i)}
            className={`h-2 transition-all duration-500 ${activeIndex === i ? 'w-16' : 'w-4'}`}
            style={{ backgroundColor: activeIndex === i ? metric.color : '#E2E8F0' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImpactPillars;
