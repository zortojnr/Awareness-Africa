
import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Heart, 
  CheckCircle2,
  Calendar,
  Users,
  Target,
  ShieldCheck,
  BookOpen,
  MapPin,
  ClipboardCheck,
  Award,
  MessageCircle,
  FileEdit
} from 'lucide-react';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const revealProps = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

const staggerReveal = (index: number) => ({
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }
});

const SectionDivider = () => (
  <div className="w-full px-6">
    <div className="max-w-7xl mx-auto h-px bg-slate-100" />
  </div>
);

const HerAwarenessPage: React.FC = () => {
  const handleApplyClick = () => {
    window.open('https://forms.gle/c1gWdoQJ5UgtqLqJ6', '_blank');
  };

  return (
    <div className="bg-white min-h-screen selection:bg-[#E91E63] selection:text-white">
      {/* Institutional Breadcrumb */}
      <div className="bg-white border-b border-slate-50 py-6 px-6 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 hover:text-black transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Awareness Africa Foundation
          </Link>
          <div className="flex gap-6 items-center">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-300">Initiative Brief</span>
            <Share2 size={16} className="text-slate-300 cursor-pointer hover:text-[#E91E63] transition-colors" />
          </div>
        </div>
      </div>

      {/* Hero Section - Pink Background standard */}
      <header className="pt-32 pb-48 px-6 bg-[#E91E63] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-12 bg-white" />
              <span className="text-[14px] uppercase tracking-[0.6em] font-bold text-white block">Flagship Initiative</span>
            </div>
            <h1 className="text-5xl md:text-[8rem] font-display font-bold text-white mb-12 leading-[0.85] tracking-tighter">
              HER AWARENESS <br/>AFRICA
            </h1>
            <p className="text-2xl md:text-4xl text-white/80 font-display italic leading-tight mb-12 max-w-4xl">
              Empowering Young Women in Southern Kaduna
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-[11px] uppercase tracking-[0.3em] font-bold text-white border-t border-white/20 pt-10">
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-white" /> Mentorship</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-white" /> Education</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-white" /> Sexual & Reproductive Health</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-white" /> Confidence</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Background & Rationale */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...revealProps}>
            <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-slate-400 mb-12 block">Background & Rationale</h2>
            <div className="space-y-10 text-xl md:text-2xl text-slate-800 leading-[1.6] font-light">
              <p>
                Young women in Southern Kaduna, Nigeria, face significant challenges in education, career development, and sexual health. Many drop out of school due to early pregnancies, lack of financial support, or lack of self-belief. Most girls lack guidance to make informed decisions.
              </p>
              <p>
                At the same time, early sexual activity without knowledge of reproductive health has led to high rates of teenage pregnancy and sexually transmitted infections (including HIV). While HIV treatment is free, prevention and sexual health education remain under-emphasized.
              </p>
              <p className="font-medium text-slate-900">
                This NGO seeks to break this cycle by providing mentorship, education, and empowerment to young ladies—equipping them with career direction and essential knowledge about sexual health.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Mission & Vision */}
      <section className="py-40 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
          <motion.div {...revealProps} className="space-y-10 border-l-[6px] border-[#E91E63] pl-10">
            <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-slate-400 block">Mission Statement</h2>
            <p className="text-3xl font-display font-bold text-slate-900 leading-tight">
              To empower young women in Southern Kaduna with the knowledge, guidance, and self-belief to make informed career choices and take control of their sexual and reproductive health.
            </p>
          </motion.div>
          <motion.div {...revealProps} transition={{ delay: 0.2 }} className="space-y-10 border-l-[6px] border-slate-900 pl-10">
            <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-slate-400 block">Vision Statement</h2>
            <p className="text-3xl font-display font-bold text-slate-900 leading-tight">
              A future where every young woman in Southern Kaduna is confident, educated, and empowered to build a meaningful career and contribute positively to society.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Purpose & Objectives */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps} className="mb-24">
            <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-slate-400 mb-8 block">Purpose & Objectives</h2>
            <div className="h-px w-full bg-slate-100" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              "To guide young girls in choosing career paths aligned with their strengths and aspirations.",
              "To reduce school drop-out rates by inspiring girls to see the value of education.",
              "To promote sexual health education, reducing early pregnancies and STIs/HIV cases.",
              "To instill confidence, self-belief, and a sense of purpose in young women.",
              "To build a network of mentors, facilitators, and peers who can continue to support them beyond the program."
            ].map((obj, i) => (
              <motion.div 
                key={i} 
                {...revealProps}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="text-[#E91E63] pt-1"><Target size={20} /></div>
                <p className="text-lg text-slate-600 font-light leading-relaxed">{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Core Focus Areas / Workshop */}
      <section className="py-40 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps} className="mb-24">
            <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-white/40 mb-8 block">Core Focus Areas</h2>
            <h3 className="text-4xl font-display font-bold mb-4">2-Day Workshop Program</h3>
            <p className="text-white/40 tracking-widest uppercase text-[10px] font-bold">First Cohort Implementation</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {/* Day 1 */}
            <motion.div {...revealProps} className="p-16 bg-slate-900 space-y-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#E91E63] flex items-center justify-center text-[#E91E63] font-bold">01</div>
                <h4 className="text-2xl font-display font-bold">DAY 1: Education & Career Empowerment</h4>
              </div>
              
              <div className="space-y-10">
                <div className="space-y-4">
                  <h5 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#E91E63]">Discovering Your Strengths</h5>
                  <ul className="space-y-2 text-white/60 text-sm font-light">
                    <li>• How to choose between Science, Arts, and Commercial classes.</li>
                    <li>• Career pathways (medicine, law, business, ICT, etc.).</li>
                    <li>• Activity: Career assessment quiz.</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h5 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#E91E63]">Building Self-Belief</h5>
                  <ul className="space-y-2 text-white/60 text-sm font-light">
                    <li>• Breaking limiting beliefs (“girls can’t…”).</li>
                    <li>• Importance of confidence and personal vision.</li>
                    <li>• Activity: Write your future self letter.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Day 2 */}
            <motion.div {...revealProps} transition={{ delay: 0.2 }} className="p-16 bg-slate-900 space-y-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#E91E63] flex items-center justify-center text-[#E91E63] font-bold">02</div>
                <h4 className="text-2xl font-display font-bold">DAY 2: Sexual Health & Personal Growth</h4>
              </div>
              
              <div className="space-y-10">
                <div className="space-y-4">
                  <h5 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#E91E63]">Understanding Your Body</h5>
                  <ul className="space-y-2 text-white/60 text-sm font-light">
                    <li>• Basics of menstruation, ovulation, safe periods, and contraception.</li>
                    <li>• Risks of unprotected sex (STIs, HIV, teenage pregnancy).</li>
                    <li>• Myths vs facts about sexual health.</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h5 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#E91E63]">Healthy Decision-Making</h5>
                  <ul className="space-y-2 text-white/60 text-sm font-light">
                    <li>• Saying no to pressure, consent, and boundaries.</li>
                    <li>• Peer influence and self-worth.</li>
                    <li>• Role-play: How to respond to difficult situations.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 p-12 bg-white/5 border border-white/10 text-center">
            <h5 className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#E91E63] mb-6">Closing Session</h5>
            <p className="text-xl font-display text-white/80 max-w-2xl mx-auto italic">
              "Living with Purpose & Giving Back: Long-term visioning, inspiring stories from mentors, group pledge, and distribution of sanitary pads."
            </p>
          </div>
        </div>
      </section>

      {/* NGO ROLES */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps} className="mb-24">
            <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-slate-400 mb-8 block">Operational Structure</h2>
            <h3 className="text-4xl font-display font-bold">Proposed NGO Roles</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { role: "Program Director", desc: "Overall strategy, direction, facilitation, and project management." },
              { role: "Program Coordinator", desc: "Logistics, hall setup, participant coordination, and records." },
              { role: "Media & Communications Officer", desc: "Photography, video, storytelling, and social media." },
              { role: "Welfare Officer", desc: "Participant well-being, refreshments, and materials distribution." },
              { role: "Monitoring & Evaluation Lead", desc: "Impact tracking, feedback collection, and reporting." }
            ].map((r, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="p-10 border border-slate-100 bg-slate-50/50 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                   <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#E91E63] transition-colors">{r.role}</h4>
                   <p className="text-sm text-slate-500 font-light leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* NEXT STEPS (COHORT ROADMAP) - Animated Right to Left */}
      <section className="py-40 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div {...revealProps} className="space-y-16">
            <div>
              <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-[#E91E63] mb-8 block">Our Cohort Roadmap</h2>
              <h3 className="text-4xl font-display font-bold mb-10">Strategic Preparation Framework</h3>
            </div>

            <div className="space-y-8">
              {[
                "Secure Venue – book the hall early to avoid last-minute issues.",
                "Develop Training Materials – PowerPoints, handouts, visual aids (English & Hausa).",
                "Translate Key Terms into Hausa for clarity (sexual health concepts, career paths).",
                "Budgeting – hall, refreshments, airtime giveaways, sanitary pads, media coverage.",
                "Outreach & Selection – select 30 girls via schools, churches, mosques, community leaders.",
                "Media Prep – intro video and graphics for WhatsApp and social media.",
                "Branded Items – sanitary pad packaging and team wear."
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  {...staggerReveal(i)}
                  className="flex gap-6 items-start"
                >
                   <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-bold shrink-0 mt-1">{i + 1}</div>
                   <p className="text-lg text-slate-700 font-light">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* SUPPORT & INCENTIVES */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps} className="mb-24">
            <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-slate-400 mb-8 block">Session Support</h2>
            <h3 className="text-4xl font-display font-bold">Incentives & Follow-up</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-8 p-10 bg-white border border-slate-100 shadow-sm">
               <Award size={40} className="text-[#E91E63] shrink-0" />
               <div className="space-y-4">
                  <h4 className="text-xl font-bold">Participation Assets</h4>
                  <ul className="space-y-2 text-slate-500 text-sm font-light">
                    <li>• Airtime giveaways for active participation.</li>
                    <li>• Sanitary pads for all girls (health and dignity).</li>
                    <li>• Certificates of Participation (adds prestige).</li>
                  </ul>
               </div>
            </div>
            <div className="flex gap-8 p-10 bg-white border border-slate-100 shadow-sm">
               <MessageCircle size={40} className="text-[#E91E63] shrink-0" />
               <div className="space-y-4">
                  <h4 className="text-xl font-bold">Continuity Framework</h4>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">
                    Follow-up WhatsApp group for continued mentorship and peer support beyond the program cycle.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* GET INVOLVED */}
      <section className="py-40 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div {...revealProps}>
            <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-[#E91E63] mb-12 block">Resource Allocation</h2>
            <h3 className="text-5xl md:text-[6.5rem] font-display font-bold mb-12 leading-[0.9]">GET <br/>INVOLVED.</h3>
            <p className="text-white/40 font-light text-xl max-w-lg mb-12">
              Join our network of facilitators and donors to scale this intervention across Southern Kaduna.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { label: "Donate", icon: <Heart size={20} />, action: "Support Operations", onClick: undefined },
              { label: "Volunteer", icon: <Users size={20} />, action: "Mentorship Circle", onClick: undefined },
              { label: "Sponsor", icon: <Award size={20} />, action: "Cohort Lead", onClick: undefined },
              { label: "Apply Here", icon: <FileEdit size={20} />, action: "Participant Entry", onClick: handleApplyClick },
              { label: "Partner", icon: <ShieldCheck size={20} />, action: "Institutional Ally", onClick: undefined }
            ].map((cta, i) => (
              <motion.button 
                key={i}
                whileTap={{ scale: 0.98 }}
                onClick={cta.onClick}
                className="p-12 border border-white/10 bg-white/5 hover:bg-[#E91E63] transition-all duration-300 text-left group"
              >
                <div className="text-[#E91E63] group-hover:text-white mb-10 transition-colors">{cta.icon}</div>
                <h4 className="text-xs uppercase tracking-[0.4em] font-black mb-3">{cta.label}</h4>
                <p className="text-white/40 group-hover:text-white/80 text-[10px] uppercase tracking-widest font-bold transition-colors">{cta.action}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Footer HQ Link */}
      <section className="py-24 px-6 flex flex-col md:flex-row items-center justify-between gap-12 bg-white">
        <div className="max-w-md">
          <p className="text-[14px] uppercase tracking-[0.4em] font-bold text-slate-400 mb-6">Unified Headquarters</p>
          <p className="text-2xl font-display font-bold text-slate-900 leading-tight">A flagship initiative of the <br/>Awareness Africa Foundation.</p>
        </div>
        <Link to="/" className="w-full md:w-auto">
          <Button 
            variant="outline" 
            noCaps 
            className="w-full md:w-auto border-slate-200 text-slate-600 px-14 font-light"
          >
            Return to headquarters
          </Button>
        </Link>
      </section>
    </div>
  );
};

// MenForwardPage component remains stable
const MenForwardPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-[#1976D2] selection:text-white">
      {/* Institutional Breadcrumb */}
      <div className="bg-white border-b border-slate-50 py-6 px-6 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 hover:text-black transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Awareness Africa Foundation
          </Link>
          <div className="flex gap-6 items-center">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-300">Initiative Brief</span>
            <Share2 size={16} className="text-slate-300 cursor-pointer hover:text-[#1976D2] transition-colors" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <header className="pt-32 pb-40 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-12 bg-[#1976D2]" />
              <span className="text-[14px] uppercase tracking-[0.6em] font-bold text-[#1976D2] block">Flagship Initiative</span>
            </div>
            <h1 className="text-5xl md:text-[8rem] font-display font-bold text-slate-900 mb-12 leading-[0.85] tracking-tighter">
              MEN FORWARD <br/>AFRICA
            </h1>
            <p className="text-2xl md:text-4xl text-slate-500 font-display italic leading-tight mb-12 max-w-4xl">
              Redefining Strength & Normalizing Mental Well-being
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-[11px] uppercase tracking-[0.3em] font-bold text-slate-400 border-t border-slate-100 pt-10">
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#1976D2]" /> Mental Health Support</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#1976D2]" /> Suicide Prevention</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#1976D2]" /> Emotional Literacy</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#1976D2]" /> Safe Spaces</span>
            </div>
          </motion.div>
        </div>
      </header>

      <SectionDivider />

      {/* Background & Rationale */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...revealProps}>
            <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-slate-400 mb-12 block">Background & Rationale</h2>
            <div className="space-y-10 text-xl md:text-2xl text-slate-800 leading-[1.6] font-light">
              <p>
                Across Africa, and particularly in Southern Kaduna, young men face an intense "silence crisis." Traditional definitions of masculinity often exclude emotional vulnerability, leading to suppressed trauma and high rates of undiagnosed mental health struggles.
              </p>
              <p>
                Recent data highlights a worrying trend in male suicide rates, often linked to economic pressure, loss of purpose, and the lack of safe, non-judgmental platforms for expression. Many young men feel they must "carry the world" without the tools to manage their internal emotional landscape.
              </p>
              <p className="font-medium text-slate-900">
                MenForward Africa addresses this by normalizing the conversation around male mental health and providing culturally relevant support systems that redefine strength as resilience and self-awareness.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Mission & Vision */}
      <section className="py-40 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
          <motion.div {...revealProps} className="space-y-10 border-l-[6px] border-[#1976D2] pl-10">
            <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-slate-400 block">Mission Statement</h2>
            <p className="text-3xl font-display font-bold text-slate-900 leading-tight">
              To normalize emotional expression and provide accessible mental health support for young African men through peer networks and culturally sensitive interventions.
            </p>
          </motion.div>
          <motion.div {...revealProps} transition={{ delay: 0.2 }} className="space-y-10 border-l-[6px] border-slate-900 pl-10">
            <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-slate-400 block">Vision Statement</h2>
            <p className="text-3xl font-display font-bold text-slate-900 leading-tight">
              An Africa where every young man feels safe to speak his truth, supported in his healing, and empowered to lead with both strength and empathy.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Purpose & Objectives */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps} className="mb-24">
            <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-slate-400 mb-8 block">Purpose & Objectives</h2>
            <div className="h-px w-full bg-slate-100" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              "To break the stigma surrounding male mental health and suicide in local communities.",
              "To provide safe spaces for peer-led dialogue and emotional release.",
              "To equip men with emotional intelligence and healthy coping mechanisms.",
              "To reduce suicide rates among young men through early intervention and awareness.",
              "To build a network of mentors and therapists specialized in male-specific challenges."
            ].map((obj, i) => (
              <motion.div 
                key={i} 
                {...revealProps}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="text-[#1976D2] pt-1"><Target size={20} /></div>
                <p className="text-lg text-slate-600 font-light leading-relaxed">{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Core Focus Areas */}
      <section className="py-40 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps} className="mb-24">
            <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-white/40 mb-8 block">Core Focus Areas</h2>
            <h3 className="text-4xl font-display font-bold mb-4">The "Safe Haven" Workshop</h3>
            <p className="text-white/40 tracking-widest uppercase text-[10px] font-bold">Mental Well-being Implementation</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {/* Day 1 */}
            <motion.div {...revealProps} className="p-16 bg-slate-900 space-y-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#1976D2] flex items-center justify-center text-[#1976D2] font-bold">01</div>
                <h4 className="text-2xl font-display font-bold">DAY 1: Unmasking Masculinity</h4>
              </div>
              
              <div className="space-y-10">
                <div className="space-y-4">
                  <h5 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#1976D2]">Emotional Literacy</h5>
                  <ul className="space-y-2 text-white/60 text-sm font-light">
                    <li>• Identifying emotions beyond anger and pride.</li>
                    <li>• The impact of cultural expectations on male psyche.</li>
                    <li>• Activity: The "Mask We Wear" workshop.</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h5 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#1976D2]">Healing from Within</h5>
                  <ul className="space-y-2 text-white/60 text-sm font-light">
                    <li>• Addressing childhood trauma and social pressure.</li>
                    <li>• Building resilience without suppression.</li>
                    <li>• Activity: Guided group reflection.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Day 2 */}
            <motion.div {...revealProps} transition={{ delay: 0.2 }} className="p-16 bg-slate-900 space-y-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#1976D2] flex items-center justify-center text-[#1976D2] font-bold">02</div>
                <h4 className="text-2xl font-display font-bold">DAY 2: Purpose & Connection</h4>
              </div>
              
              <div className="space-y-10">
                <div className="space-y-4">
                  <h5 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#1976D2]">Healthy Connections</h5>
                  <ul className="space-y-2 text-white/60 text-sm font-light">
                    <li>• Building meaningful brotherhood and support networks.</li>
                    <li>• Conflict resolution and non-violent communication.</li>
                    <li>• Activity: Peer support circle setup.</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h5 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#1976D2]">Leading with Impact</h5>
                  <ul className="space-y-2 text-white/60 text-sm font-light">
                    <li>• Servant leadership and community responsibility.</li>
                    <li>• Goal setting and vocational focus.</li>
                    <li>• Role-play: Mental health check-ins with peers.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 p-12 bg-white/5 border border-white/10 text-center">
            <h5 className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#1976D2] mb-6">Closing Session</h5>
            <p className="text-xl font-display text-white/80 max-w-2xl mx-auto italic">
              "Redefining the Warrior: A pledge to protect one's peace, support others, and lead with empathy."
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Footer HQ Link */}
      <section className="py-24 px-6 flex flex-col md:flex-row items-center justify-between gap-12 bg-white">
        <div className="max-w-md">
          <p className="text-[14px] uppercase tracking-[0.4em] font-bold text-slate-400 mb-6">Unified Headquarters</p>
          <p className="text-2xl font-display font-bold text-slate-900 leading-tight">A flagship initiative of the <br/>Awareness Africa Foundation.</p>
        </div>
        <Link to="/" className="w-full md:w-auto">
          <Button 
            variant="outline" 
            noCaps 
            className="w-full md:w-auto border-slate-200 text-slate-600 px-14 font-light"
          >
            Return to headquarters
          </Button>
        </Link>
      </section>
    </div>
  );
};

const InitiativeDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (slug === 'her-awareness') {
    return <HerAwarenessPage />;
  }

  if (slug === 'men-forward') {
    return <MenForwardPage />;
  }

  return <Navigate to="/" />;
};

export default InitiativeDetail;
