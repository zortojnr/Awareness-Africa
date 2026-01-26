import React from 'react';
import { motion } from 'framer-motion';

// Import images
import img13 from '../assets/images/13.jpeg';
import img4 from '../assets/images/4.jpeg';
import img15 from '../assets/images/15.jpeg';
import img11 from '../assets/images/11.jpeg';
import img18 from '../assets/images/18.jpeg';
import img22 from '../assets/images/22.jpeg';

const VALUES = [
  {
    title: "Education as Empowerment",
    sdg: ["SDG 4: Quality Education"],
    accent: "#C5A059", // Gold
    image: img13,
    text: "We believe education is the most powerful tool for breaking cycles of poverty, inequality, and exclusion. Our work prioritizes keeping young people, with a strong focus on girls, in school, reducing school dropouts, and expanding access to knowledge that enables informed life choices."
  },
  {
    title: "Gender Equity & Protection",
    sdg: ["SDG 5: Gender Equality"],
    accent: "#6B21A8", // Purple
    image: img4,
    text: "We are committed to advancing gender equity by protecting girls’ rights to education, safety, and self-determination, while also engaging boys and men as allies in building healthier, more equitable societies."
  },
  {
    title: "Humanity & Dignity",
    sdg: ["SDG 3: Good Health and Well-Being"],
    accent: "#1976D2", // Blue
    image: img15,
    text: "At the core of our work is a deep respect for human life, dignity, and emotional well-being. We respond to social challenges with empathy, compassion, and an unwavering commitment to the humanity of every individual we serve."
  },
  {
    title: "Awareness for Prevention",
    sdg: ["SDG 3: Good Health and Well-Being", "SDG 4: Quality Education"],
    accent: "#F97316", // Orange
    image: img11,
    text: "We believe that awareness saves futures. Through education, dialogue, and early intervention, we address the root causes of teenage pregnancy, early marriage, mental health stigma, and social vulnerability before they become lifelong barriers."
  },
  {
    title: "Youth-Driven Leadership",
    sdg: ["SDG 8: Decent Work and Economic Growth", "SDG 16: Peace, Justice, and Strong Institutions"],
    accent: "#0D9488", // Teal
    image: img18,
    text: "We empower young people not just as beneficiaries, but as leaders, advocates, and solution builders within their own communities, equipped with knowledge, confidence, and responsibility."
  },
  {
    title: "Inclusion & Safe Spaces",
    sdg: ["SDG 10: Reduced Inequalities", "SDG 16: Peace, Justice, and Strong Institutions"],
    accent: "#16A34A", // Green
    image: img22,
    text: "We intentionally create safe, inclusive spaces where young people, especially girls, can learn, speak freely, heal, and grow without fear of stigma, discrimination, or violence."
  }
];

const CoreValues: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b-[16px] border-brand-primary">
      {/* Top Layer: Deep Purple - Medium height to ensure card visibility */}
      <div className="bg-[#2D0A4E] pt-16 pb-32 sm:pt-24 sm:pb-48 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-accent mb-6 block">Our Ethos</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-tight">
            Igniting Change Through <br/> Our Core Values
          </h2>
        </motion.div>
      </div>

      {/* Bottom Layer: Soft Cream */}
      <div className="bg-[#FFFDF5] pb-24 sm:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Card Grid with Negative Margin Overlap */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 -mt-24 sm:-mt-32 relative z-10">
            {VALUES.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  backgroundColor: value.accent,
                  y: -5,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white shadow-xl flex flex-col h-full group cursor-pointer transition-colors duration-500"
              >
                {/* Card Top: Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={value.image} 
                    alt={value.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Card Middle: Text */}
                <div className="p-10 flex-grow">
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-2 group-hover:text-white transition-colors duration-500">
                    {value.title}
                  </h3>
                  
                  {/* SDG Reference Line - ADDED */}
                  <div className="mb-6 flex flex-col gap-1">
                    {value.sdg.map((sdgLine, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-widest font-black text-slate-400 group-hover:text-white/80 transition-colors duration-500">
                        {sdgLine}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-sans font-light group-hover:text-white/90 transition-colors duration-500">
                    {value.text}
                  </p>
                </div>

                {/* Card Bottom: Accent Bar - Hidden on hover to keep UI clean */}
                <motion.div 
                  animate={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  className="h-[5px] w-full" 
                  style={{ backgroundColor: value.accent }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
