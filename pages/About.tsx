import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Award, Globe, Users, Zap, User } from 'lucide-react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

// Image Imports
import methodologyImg from '../assets/images/1a.jpeg';
import johnBabaImg from '../assets/images/Johnbaba.jpeg';
import danImg from '../assets/images/Dan.jpeg';
import rhodaImg from '../assets/images/Rhoda.jpeg';
import motunrayoImg from '../assets/images/Motunrayo.jpeg';
import tayeImg from '../assets/images/Taye.png';
import blueLogo from '../assets/images/AAF blue logo (1).png';
import { useContent } from '../hooks/useContent';

const revealProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
};

const SectionDivider = () => (
  <div className="w-full h-1 bg-brand-primary" />
);

const About: React.FC = () => {
  const { content, getImage } = useContent();
  const navigate = useNavigate();

  const team = [
    {
      name: "Victoria Odesanya",
      role: "Founder",
      image: null, // Placeholder
      bio: "Visionary leader dedicated to transforming the African narrative through sustainable development."
    },
    {
      name: "Godwin JohnBaba",
      role: "Project Coordinator",
      image: johnBabaImg,
      bio: "Orchestrating complex initiatives with precision and community-focused execution."
    },
    {
      name: "Victor Chukwudalu Okafor",
      role: "Program Coordinator",
      image: danImg,
      bio: "Driving program impact through strategic planning and stakeholder engagement."
    },
    {
      name: "Awyetu Rhoda Fadason",
      role: "Media & Communication Officer I",
      image: rhodaImg,
      bio: "Amplifying our voice and mission through compelling storytelling and digital outreach."
    },
    {
      name: "Motunrayo Eleanor Ajagbonna",
      role: "Media & Communication Officer II",
      image: motunrayoImg,
      bio: "Building bridges between our work and the world through innovative communication strategies."
    },
    {
      name: "Taye Ikuponiyi",
      role: "Welfare Officer",
      image: tayeImg,
      bio: "Ensuring the well-being of our team and beneficiaries remains at the heart of our operations."
    }
  ];

  return (
    <main className="bg-white relative selection:bg-brand-accent selection:text-white overflow-x-hidden">
      <section className="pt-24 pb-32 sm:pt-40 sm:pb-48 px-6 relative">
        {/* Hero Background Logo */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: `url("${blueLogo}")`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...revealProps}>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-brand-accent" />
              <span className="text-[11px] uppercase tracking-[0.4em] font-black text-slate-400">
                Institutional Identity
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-slate-900 mb-10 leading-[1.1] tracking-tighter">
              {content.about.heroTitle}
            </h1>
            <p className="text-base sm:text-xl md:text-2xl font-display text-slate-800 leading-tight font-light max-w-4xl italic">
              {content.about.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 sm:py-32 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div {...revealProps} className="space-y-10">
              <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900">The Awareness <br/>Methodology.</h2>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Awareness Africa Foundation operates as an umbrella organization, providing resources and data-driven strategies to targeted interventions. We bridge the gap between institutional funding and grassroots impact.
              </p>
              <div className="space-y-8">
                {[
                  { icon: <Target size={20} className="text-[#C5A059]" />, title: "Precision Intervention", desc: "Data-led mapping of community needs to ensure efficient resource allocation and maximum scalability." },
                  { icon: <Shield size={20} className="text-[#E91E63]" />, title: "Protection Frameworks", desc: "Building safety nets through community-driven education and reproductive health literacy." },
                  { icon: <Zap size={20} className="text-[#1976D2]" />, title: "Rapid Resilience", desc: "Equipping young men with mental tools to combat emotional isolation and foster communal strength." }
                ].map((pillar, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100">{pillar.icon}</div>
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-1">{pillar.title}</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-light">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...revealProps} transition={{ delay: 0.2 }} className="relative aspect-video lg:aspect-[4/5] bg-slate-200 overflow-hidden shadow-2xl">
               <img 
                 src={methodologyImg}
                 alt="Community Strategy" 
                 className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
               />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Enhanced Vision & Mission Section */}
      <section className="py-24 sm:py-32 px-6 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-accent blur-[100px]" />
           <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...revealProps} className="text-center mb-20">
             <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Our Guiding North Star</h2>
             <div className="h-1 w-24 bg-brand-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
             <motion.div 
               {...revealProps} 
               className="p-8 md:p-12 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 rounded-lg"
             >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-brand-accent/20 rounded-full text-brand-accent">
                    <Globe size={32} />
                  </div>
                  <span className="text-sm uppercase tracking-[0.3em] font-bold text-brand-accent">{content.about.visionTitle}</span>
                </div>
                <p className="text-2xl md:text-4xl font-display font-bold leading-tight">
                  {content.about.visionText}
                </p>
             </motion.div>

             <motion.div 
               {...revealProps} 
               transition={{ delay: 0.2 }} 
               className="p-8 md:p-12 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 rounded-lg"
             >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-full text-blue-400">
                    <Target size={32} />
                  </div>
                  <span className="text-sm uppercase tracking-[0.3em] font-bold text-blue-400">{content.about.missionTitle}</span>
                </div>
                <p className="text-2xl md:text-4xl font-display font-bold leading-tight">
                  {content.about.missionText}
                </p>
             </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Team Section */}
      <section className="py-24 sm:py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps} className="max-w-3xl mb-20">
            <span className="text-[11px] uppercase tracking-[0.4em] font-black text-slate-400 block mb-4">
              Our Leadership
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8">The Minds Behind The Mission.</h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Our team is composed of dedicated professionals who combine diverse expertise with a shared passion for African development. From strategic planning to grassroots mobilization, we are united by a commitment to excellence and impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] mb-6 bg-slate-200 overflow-hidden">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-300">
                      <User size={64} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <p className="text-white text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {member.bio}
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm font-bold text-brand-accent uppercase tracking-wider">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 sm:py-32 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div {...revealProps}>
            <Award className="mx-auto mb-8 text-brand-accent" size={32} />
            <h2 className="text-2xl md:text-5xl font-display font-bold mb-8">Institutional Integrity.</h2>
            <p className="text-white/40 text-sm font-light mb-12 max-w-xl mx-auto leading-relaxed">
              Our governance model ensures total transparency and accountability to our donors and the communities we serve. Every resource is optimized for maximum social return.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="w-full sm:w-auto px-10" onClick={() => navigate('/contact')}>Institutional Inquiry</Button>
              <Button variant="outline" className="w-full sm:w-auto px-10 border-white/20 text-white hover:bg-white hover:text-black" onClick={() => navigate('/resources')}>Annual Reports</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
