
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Share2, 
  CheckCircle2,
  Target,
  ShieldCheck,
  BookOpen,
  Award,
  MessageCircle,
  FileEdit,
  Quote,
  TrendingUp,
  Activity,
  Zap,
  Users,
  AlertCircle,
  Heart,
  MessageSquare
} from 'lucide-react';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const revealProps = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const SectionDivider = ({ color = 'bg-slate-100' }: { color?: string }) => (
  <div className="w-full px-6">
    <div className={`max-w-7xl mx-auto h-[2px] ${color}`} />
  </div>
);

const HerAwarenessPage: React.FC = () => {
  const handleApplyClick = () => {
    window.open('https://forms.gle/c1gWdoQJ5UgtqLqJ6', '_blank');
  };

  const staggerReveal = (index: number) => ({
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }
  });

  return (
    <div className="bg-white min-h-screen selection:bg-[#E91E63] selection:text-white">
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

      <header className="pt-32 pb-48 px-6 bg-[#E91E63] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
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
              <motion.div key={i} {...revealProps} transition={{ delay: i * 0.1 }} className="flex gap-6">
                <div className="text-[#E91E63] pt-1"><Target size={20} /></div>
                <p className="text-lg text-slate-600 font-light leading-relaxed">{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-40 px-6 bg-slate-900 text-white overflow-hidden">
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
                <motion.div key={i} {...staggerReveal(i)} className="flex gap-6 items-start">
                   <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-bold shrink-0 mt-1 text-slate-900">{i + 1}</div>
                   <p className="text-lg text-white/70 font-light">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

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
              <motion.button key={i} whileTap={{ scale: 0.98 }} onClick={cta.onClick} className="p-12 border border-white/10 bg-white/5 hover:bg-[#E91E63] transition-all duration-300 text-left group">
                <div className="text-[#E91E63] group-hover:text-white mb-10 transition-colors">{cta.icon}</div>
                <h4 className="text-xs uppercase tracking-[0.4em] font-black mb-3">{cta.label}</h4>
                <p className="text-white/40 group-hover:text-white/80 text-[10px] uppercase tracking-widest font-bold transition-colors">{cta.action}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const MenForwardPage: React.FC = () => {
  const handleWhatsAppJoin = () => {
    window.open('https://chat.whatsapp.com/example-link', '_blank');
  };

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

      {/* Hero Section — BRAND BLUE BACKGROUND */}
      <header className="pt-32 pb-48 px-6 bg-[#1976D2] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-12 bg-white" />
              <span className="text-[14px] uppercase tracking-[0.6em] font-bold text-white block">Institutional Pillar</span>
            </div>
            <h1 className="text-5xl md:text-[8rem] font-display font-bold text-white mb-12 leading-[0.85] tracking-tighter">
              MENFORWARD <br/>AFRICA
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 font-display italic leading-tight mb-12 max-w-4xl">
              Advancing Men’s Mental Health, Wellbeing & Resilience in Africa
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-[11px] uppercase tracking-[0.3em] font-bold text-white/60 border-t border-white/20 pt-10">
              <span className="flex items-center gap-2 text-white"><Activity size={14} /> Suicide Prevention</span>
              <span className="flex items-center gap-2 text-white"><Users size={14} /> Peer Support</span>
              <span className="flex items-center gap-2 text-white"><TrendingUp size={14} /> Emotional Resilience</span>
              <span className="flex items-center gap-2 text-white"><CheckCircle2 size={14} /> Scalable Intervention</span>
            </div>
          </motion.div>
        </div>
      </header>

      <SectionDivider color="bg-[#1976D2]" />

      {/* Founder's Statement */}
      <section className="py-40 px-6 bg-slate-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div {...revealProps} className="relative">
            <Quote size={80} className="absolute -top-12 -left-20 text-slate-100 -z-10" />
            <h2 className="text-[10px] uppercase tracking-[0.6em] font-bold text-[#1976D2] mb-12 block">Founder’s Statement</h2>
            <div className="space-y-12 text-2xl md:text-3xl font-display font-light text-slate-800 leading-snug italic">
              <p>
                "While conversations around mental health are gradually gaining visibility in Africa, men are still largely left behind. In Nigeria and the continent, men are raised to be strong, silent, and self-sufficient."
              </p>
              <p>
                "Over time, this silence compounds. It shows up as depression, anger, withdrawal, substance abuse, and in far too many cases, suicide. MenForward Africa exists to create safe, non-judgmental spaces where men can speak honestly—without shame and without fear of being misunderstood."
              </p>
            </div>
            <div className="mt-16 flex items-center gap-6">
               <div className="h-px w-12 bg-[#1976D2]" />
               <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-slate-400">Institutional Mandate</p>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider color="bg-[#1976D2]" />

      {/* Problem Statement (The Data) */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps} className="mb-24">
            <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-[#1976D2] mb-8 block">Problem Statement</h2>
            <h3 className="text-5xl font-display font-bold text-slate-900">The Silence Crisis.</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100 border border-slate-100">
            <div className="p-16 bg-white space-y-8">
              <span className="text-[10px] uppercase tracking-widest font-black text-[#1976D2]">Global Context</span>
              <div className="space-y-6">
                <p className="text-5xl font-display font-bold text-[#1976D2]">80%</p>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  Men account for approximately 77–80% of suicide deaths worldwide, yet mental health programming remains skewed toward women and children.
                </p>
              </div>
            </div>
            <div className="p-16 bg-white space-y-8">
              <span className="text-[10px] uppercase tracking-widest font-black text-[#1976D2]">Regional Impact</span>
              <div className="space-y-6">
                <p className="text-5xl font-display font-bold text-[#1976D2]">12k+</p>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  Annual estimated male suicide deaths in Nigeria alone. 1 in 5 Nigerian men experience severe psychological distress at some point.
                </p>
              </div>
            </div>
            <div className="p-16 bg-white space-y-8">
              <span className="text-[10px] uppercase tracking-widest font-black text-[#1976D2]">The Gap</span>
              <div className="space-y-6">
                <p className="text-5xl font-display font-bold text-[#1976D2]">5:1</p>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  Women-centered NGOs outnumber men-focused mental health initiatives by at least 5 to 1 in the West African region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider color="bg-[#1976D2]" />

      {/* WHATSAPP CTA — STRATEGIC INTEGRATION */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 bg-white p-12 md:p-24 border-l-[12px] border-[#25D366] shadow-xl">
           <div className="max-w-2xl space-y-6">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight">Join the group of men making change.</h3>
              <p className="text-lg text-slate-600 font-light">
                Connect with our peer-led support network instantly. A safe, confidential WhatsApp connection for honest dialogue and resilience building.
              </p>
           </div>
           <button 
             onClick={handleWhatsAppJoin}
             className="bg-[#25D366] text-white px-12 py-6 text-sm font-black uppercase tracking-[0.2em] hover:bg-[#128C7E] transition-all flex items-center gap-4 shrink-0 shadow-lg"
           >
             Join the Group <MessageSquare size={18} />
           </button>
        </div>
      </section>

      <SectionDivider color="bg-[#1976D2]" />

      {/* Root Causes Section */}
      <section className="py-40 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps} className="mb-24">
             <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-[#1976D2] mb-8 block">Root Cause Analysis</h2>
             <p className="text-2xl font-display text-slate-600 max-w-2xl">Identifying the systemic and cultural drivers of the male mental health crisis.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
               {[
                 { title: "Cultural Masculinity Norms", desc: "The 'Men don't cry' mantra and the perception of vulnerability as weakness." },
                 { title: "Economic Pressure", desc: "Societal expectations of provision leading to intense financial and identity stress." },
                 { title: "Relationship & Family Isolation", desc: "Lack of emotional support networks following marital conflict or separation." }
               ].map((item, i) => (
                 <motion.div key={i} {...revealProps} transition={{ delay: i * 0.1 }} className="flex gap-8 group">
                    <div className="w-12 h-12 bg-white border-2 border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[#1976D2] group-hover:border-[#1976D2] group-hover:text-white transition-all duration-500">
                      <AlertCircle size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#1976D2] transition-colors">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
            <div className="space-y-12">
               {[
                 { title: "Limited Service Access", desc: "Shortage of professionals and high cost of therapy in local communities." },
                 { title: "Fear of Stigma", desc: "Deep-seated fear of ridicule or spiritual condemnation when seeking psychological help." },
                 { title: "Lack of Safe Spaces", desc: "Absence of non-judgmental, male-centered support networks for honest dialogue." }
               ].map((item, i) => (
                 <motion.div key={i} {...revealProps} transition={{ delay: (i + 3) * 0.1 }} className="flex gap-8 group">
                    <div className="w-12 h-12 bg-white border-2 border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[#1976D2] group-hover:border-[#1976D2] group-hover:text-white transition-all duration-500">
                      <AlertCircle size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#1976D2] transition-colors">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider color="bg-[#1976D2]" />

      {/* Goal & Objectives */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps} className="mb-24">
            <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-[#1976D2] mb-8 block">Overall Goal</h2>
            <p className="text-4xl font-display font-bold text-slate-900 leading-tight max-w-4xl">
              To reduce depression, suicidal ideation, and preventable suicide among men and boys in Africa by normalizing emotional expression and improving access to mental health support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              "Normalize emotional expression and help-seeking among men.",
              "Build strong peer support and community networks.",
              "Expand access to mental health education and professionals.",
              "Advocate for improved mental health policy and funding.",
              "Equip young men with emotional intelligence from an early age."
            ].map((obj, i) => (
              <motion.div key={i} {...revealProps} transition={{ delay: i * 0.1 }} className="p-8 border-l-2 border-slate-100 space-y-6 group hover:border-[#1976D2] transition-all duration-500">
                <span className="text-[10px] uppercase tracking-widest font-black text-slate-300 group-hover:text-[#1976D2]">Objective 0{i + 1}</span>
                <p className="text-sm text-slate-600 font-light leading-relaxed">{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider color="bg-[#1976D2]" />

      {/* Programs & Interventions */}
      <section className="py-40 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps} className="mb-24">
            <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-[#1976D2] mb-8 block">The Intervention Model</h2>
            <h3 className="text-4xl font-display font-bold">Five Pillars of Resilience.</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { 
                icon: <Users size={24} />, 
                title: "Digital Peer Circles", 
                desc: "Moderated, confidential WhatsApp/Telegram groups for peer-led dialogue, grouped by age and life stage." 
              },
              { 
                icon: <MessageCircle size={24} />, 
                title: "MenForward Talks", 
                desc: "Virtual conversations with relatable male professionals on money stress, relationships, and purpose." 
              },
              { 
                icon: <BookOpen size={24} />, 
                title: "Youth Literacy", 
                desc: "School partnerships and online workshops providing emotional intelligence training for boys aged 12–25." 
              },
              { 
                icon: <ShieldCheck size={24} />, 
                title: "Referral Network", 
                desc: "A coordinated platform of volunteer therapists providing subsidized or pro bono tele-mental health sessions." 
              },
              { 
                icon: <TrendingUp size={24} />, 
                title: "Advocacy Campaigns", 
                desc: "Strategic storytelling and policy engagement focused on breaking cultural stigmas around male vulnerability." 
              },
              { 
                icon: <Zap size={24} />, 
                title: "Crisis Readiness", 
                desc: "Rapid-response digital resources and suicide prevention toolkits designed specifically for male users." 
              }
            ].map((prog, i) => (
              <motion.div key={i} {...revealProps} transition={{ delay: i * 0.1 }} className="p-16 bg-slate-900 space-y-8 group hover:bg-[#1976D2] transition-all duration-500">
                 <div className="text-[#1976D2] group-hover:text-white transition-colors">{prog.icon}</div>
                 <h4 className="text-2xl font-display font-bold">{prog.title}</h4>
                 <p className="text-sm text-white/50 font-light leading-relaxed group-hover:text-white/80 transition-colors">{prog.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider color="bg-[#1976D2]" />

      {/* Differentiation & Sustainability */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
           <motion.div {...revealProps} className="space-y-12">
              <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-[#1976D2] block">Institutional Differentiation</h2>
              <h3 className="text-4xl font-display font-bold">Why MenForward?</h3>
              <div className="space-y-8">
                <p className="text-lg text-slate-600 font-light leading-relaxed">
                  Unlike traditional solutions that focus on crisis response or motivation, MenForward Africa is built on a **digital-first, peer-led model** that prioritizes prevention and emotional literacy.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="p-8 bg-slate-50 border-l-4 border-[#1976D2]">
                     <p className="text-xs font-black uppercase tracking-widest text-[#1976D2] mb-4">Approach</p>
                     <p className="text-sm text-slate-500 font-light">Non-judgmental, non-religious, and culturally sensitive.</p>
                  </div>
                  <div className="p-8 bg-slate-50 border-l-4 border-[#1976D2]">
                     <p className="text-xs font-black uppercase tracking-widest text-[#1976D2] mb-4">Scalability</p>
                     <p className="text-sm text-slate-500 font-light">Leveraging tech to reach men in remote and urban areas alike.</p>
                  </div>
                </div>
              </div>
           </motion.div>
           
           <motion.div {...revealProps} transition={{ delay: 0.2 }} className="space-y-12">
              <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-[#1976D2] block">Strategic Support</h2>
              <h3 className="text-4xl font-display font-bold">Partner with the Mission.</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
                {[
                  { label: "Corporate CSR", action: "Employee Wellness" },
                  { label: "Institutional Grant", action: "Capacity Building" },
                  { label: "Therapist Network", action: "Pro-bono Liaison" },
                  { label: "Volunteer Pool", action: "Peer Moderation" }
                ].map((item, i) => (
                  <button key={i} className="p-10 bg-white text-left hover:bg-[#1976D2] transition-all duration-500 group">
                     <p className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors mb-2">{item.label}</p>
                     <p className="text-sm text-slate-900 group-hover:text-white transition-colors font-bold">{item.action}</p>
                  </button>
                ))}
              </div>
           </motion.div>
        </div>
      </section>

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
            className="w-full md:w-auto border-[#1976D2] text-[#1976D2] hover:bg-[#1976D2] hover:text-white px-14 font-bold"
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
