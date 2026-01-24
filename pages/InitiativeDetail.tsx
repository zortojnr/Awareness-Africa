
import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Heart, 
  ShieldCheck, 
  BookOpen, 
  Users, 
  Target, 
  Download, 
  MessageSquare, 
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  FileText,
  TrendingUp,
  Activity,
  UserPlus,
  Globe,
  AlertCircle,
  BarChart3,
  Layers,
  Settings,
  MessageCircle
} from 'lucide-react';
import Button from '../components/Button';
import { motion, AnimatePresence } from 'framer-motion';

const revealProps = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.4, ease: "easeOut" }
};

const SectionDivider = () => (
  <div className="w-full px-6">
    <div className="max-w-7xl mx-auto h-1 bg-slate-900" />
  </div>
);

const HerAwarenessPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white border-b border-slate-50 py-6 px-6 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 hover:text-black transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Awareness Africa Foundation
          </Link>
          <div className="flex gap-6 items-center">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-300">Share Initiative</span>
            <Share2 size={16} className="text-slate-300 cursor-pointer hover:text-[#E91E63] transition-colors" />
          </div>
        </div>
      </div>

      <header className="relative pt-32 pb-48 px-6 bg-[#E91E63] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none grayscale brightness-200">
           <img src="https://images.unsplash.com/photo-1529391409740-59f2dea08bc6?q=80&w=2000" alt="Pattern" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <span className="text-[14px] uppercase tracking-[0.6em] font-bold text-white mb-10 block">Initiative Spotlight</span>
            <h1 className="text-5xl md:text-[7rem] font-display font-bold text-white mb-12 leading-[0.9] tracking-tight">
              HerAwareness <br/>Africa
            </h1>
            <div className="h-1.5 w-32 bg-white mb-12" />
            <p className="text-xl md:text-3xl text-white/90 font-display italic leading-relaxed mb-12 max-w-3xl">
              Empowering Young Women in Southern Kaduna
            </p>
          </motion.div>
        </div>
      </header>

      <SectionDivider />
      
      <section className="py-40 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...revealProps}>
            <h2 className="text-[40px] font-display font-bold text-slate-900 mb-14 block tracking-tighter">Executive Summary</h2>
            <div className="space-y-10 text-lg text-slate-600 leading-relaxed font-light">
              <p>HerAwareness Africa is dedicated to dismantling the systemic barriers that prevent girls in Northern Nigeria from reaching their full academic potential.</p>
              <p>We move beyond awareness, implementing structured programs that address physical, emotional, and social realities. By focusing on health and education, we ensure no girl compromises her future.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />
      <section className="py-24 px-6 flex flex-col md:flex-row items-center justify-between gap-12 bg-white">
        <div className="max-w-md">
          <p className="text-[14px] uppercase tracking-[0.4em] font-bold text-slate-400 mb-6">Institutional Link</p>
          <p className="text-2xl font-display font-bold text-slate-900">A flagship initiative of the <br/>Awareness Africa Foundation.</p>
        </div>
        <Link to="/">
          <Button variant="outline" noCaps className="px-12">Return to headquarters</Button>
        </Link>
      </section>
    </div>
  );
};

const MenForwardPage: React.FC = () => {
  const [activeStory, setActiveStory] = useState(0);
  const stories = [
    {
      text: "Growing up, I was taught that silence was my only shield. MenForward gave me a different vocabulary. I realized my vulnerability wasn't a defect; it was a bridge to healing.",
      author: "David K.",
      location: "Lagos, Nigeria"
    },
    {
      text: "The digital peer circles provide a level of anonymity that many men need to start the conversation. Once the threshold is crossed, the support is life-changing.",
      author: "Samuel A.",
      location: "Program Participant"
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <div className="bg-white border-b border-slate-50 py-6 px-6 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 hover:text-black transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Awareness Africa Foundation
          </Link>
          <div className="flex gap-6 items-center">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-300">Initiative Documentation</span>
            <Share2 size={16} className="text-slate-300 cursor-pointer hover:text-[#1976D2] transition-colors" />
          </div>
        </div>
      </div>

      <header className="relative pt-32 pb-48 px-6 bg-[#1976D2] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none grayscale brightness-150">
           <img src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2000" alt="Pattern" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <span className="text-[14px] uppercase tracking-[0.6em] font-bold text-white mb-10 block">Flagship Initiative</span>
            <h1 className="text-6xl md:text-[8.5rem] font-display font-bold text-white mb-12 leading-[0.85] tracking-tight">
              MENFORWARD <br/>AFRICA
            </h1>
            <div className="h-1.5 w-32 bg-white mb-12" />
            <p className="text-2xl md:text-4xl text-white/90 font-display italic leading-tight mb-12 max-w-4xl">
              Advancing Men’s Mental Health, Wellbeing & Resilience in Africa.
            </p>
            <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-white/60">
              Institutionally Grounded / Data-Driven / Trust-Oriented
            </p>
          </motion.div>
        </div>
      </header>

      <SectionDivider />

      <section className="py-40 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...revealProps}>
            <h2 className="text-[40px] font-display font-bold text-slate-900 mb-14 block tracking-tighter">Executive Summary</h2>
            <div className="space-y-12 text-xl md:text-2xl text-slate-800 leading-[1.7] font-light">
              <p>
                MenForward Africa is a pan-African mental health and wellbeing initiative focused on
                normalizing emotional expression, reducing suicide, and improving access to mental
                health support for men and boys, in Nigeria and Africa at large.
              </p>
              <p>
                Globally, suicide is one of the leading causes of death among men. According to the World
                Health Organization (WHO), men account for approximately 77–80% of suicide deaths
                worldwide. In Nigeria, available data indicates that men account for roughly 75–80% of
                reported suicide deaths, with young and middle-aged men disproportionately affected.
              </p>
              <p>
                Despite these figures, mental health programming in Nigeria and across Africa remains
                heavily skewed toward women and children, leaving men underserved, stigmatized, and
                reluctant to seek help.
              </p>
              <p>
                MenForward Africa exists to bridge this gap by creating safe, culturally relevant, and
                non-shaming spaces where men can access education, peer support, and professional mental
                health resources—primarily through digital platforms to ensure scale and accessibility.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-40 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...revealProps} className="space-y-14">
            <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-slate-900 mb-4 block">Founder’s Statement</h2>
            <div className="relative">
              <div className="text-xl md:text-2xl text-slate-800 leading-relaxed font-light space-y-8 border-l-4 border-[#1976D2] pl-10">
                <p className="italic font-medium">“MenForward Africa was born from a deeply personal and urgent realization:
                While conversations around mental health are gradually gaining visibility in Africa, men are still
                largely left behind.</p>
                
                <p>In Nigeria and the continent, men are raised to be strong, silent, and self-sufficient. From a
                young age, many boys are taught explicitly or implicitly that vulnerability is weakness, that
                asking for help is failure, and that emotional pain should be endured in isolation. Over time, this
                silence compounds. It shows up as depression, anger, withdrawal, substance abuse, and in far
                too many cases, suicide.</p>
                
                <p>Recent events and public conversations have once again highlighted a painful truth: men are
                dying quietly. Not because help does not exist, but because many men do not feel permitted to
                seek it. At MenForward Africa, we believe this must change.</p>
                
                <p>MenForward Africa exists to create safe, non-judgmental spaces where men can speak
                honestly, be heard, and access the support they need—without shame, without labels, and
                without fear of being misunderstood. Our work is rooted in the understanding that men’s mental
                health is not in opposition to women’s wellbeing; rather, healthy men build healthier families,
                communities, and societies.</p>
                
                <p>This initiative is also informed by lived experience and professional insight. Growing up around
                medical and family health practice reinforced the reality that emotional wellbeing is as critical as
                physical health—yet far less prioritized, especially for men. At the same time, MenForward
                Africa is intentionally designed to be peer-led, modern, and culturally relevant, recognizing
                that men are often more receptive to voices they can relate to.</p>
                
                <p className="font-bold">Our vision is simple but powerful:</p>
                <p className="text-2xl md:text-3xl font-display font-bold text-slate-900">To move men forward—from silence to expression, from isolation to community, and from crisis
                to resilience.</p>
                
                <p>MenForward Africa is not just a response to a mental health crisis. It is a commitment to
                prevention, education, and long-term cultural change—one conversation, one connection,
                and one life at a time.”</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps} className="mb-24">
            <h2 className="text-[14px] uppercase tracking-[0.4em] font-black text-slate-500 mb-8">Problem Statement</h2>
            <div className="h-px w-full bg-slate-100" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <motion.div {...revealProps} className="space-y-16">
              <div>
                <h3 className="text-[40px] font-display font-bold text-slate-900 mb-8">Global Context</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1976D2] mt-2 shrink-0" />
                    <p className="text-slate-600">Over 700,000 people die by suicide annually worldwide (WHO).</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1976D2] mt-2 shrink-0" />
                    <p className="text-slate-600">Men account for approximately 77–80% of these deaths.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1976D2] mt-2 shrink-0" />
                    <p className="text-slate-600">Suicide is among the top 10 causes of death globally, and among the top causes for men aged 15–49.</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[40px] font-display font-bold text-slate-900 mb-8">Africa & Nigeria Context</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1976D2] mt-2 shrink-0" />
                    <p className="text-slate-600">Africa has some of the most underreported suicide cases globally due to stigma, religious beliefs, and weak data systems.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1976D2] mt-2 shrink-0" />
                    <p className="text-slate-600">Nigeria records an estimated 15,000+ suicide deaths annually (WHO & public health estimates).</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1976D2] mt-2 shrink-0" />
                    <p className="text-slate-600">Based on gender trends, approximately 11,000–12,000 of these deaths are men.</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1976D2] mt-2 shrink-0" />
                    <p className="text-slate-600">Suicide rates in Nigeria are estimated at 6–7 deaths per 100,000 people, with men making up the overwhelming majority.</p>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div {...revealProps} className="space-y-16">
              <div>
                <h3 className="text-[40px] font-display font-bold text-slate-900 mb-8">Age Groups Most Affected</h3>
                <div className="space-y-8">
                   <div className="p-6 bg-slate-50 border-l-4 border-[#1976D2]">
                      <p className="font-bold text-slate-900 mb-2">15–29 years</p>
                      <p className="text-sm text-slate-500 italic">Youth unemployment, identity crisis, peer pressure</p>
                   </div>
                   <div className="p-6 bg-slate-50 border-l-4 border-[#1976D2]">
                      <p className="font-bold text-slate-900 mb-2">30–49 years</p>
                      <p className="text-sm text-slate-500 italic">Financial stress, family responsibility, societal expectations</p>
                   </div>
                   <div className="p-6 bg-slate-50 border-l-4 border-[#1976D2]">
                      <p className="font-bold text-slate-900 mb-2">50+ years</p>
                      <p className="text-sm text-slate-500 italic">Isolation, health decline, loss of purpose</p>
                   </div>
                </div>
              </div>

              <div className="p-10 bg-[#1976D2] text-white">
                 <AlertCircle size={32} className="mb-6 opacity-40" />
                 <p className="text-xl font-display leading-relaxed">
                   Studies suggest that <span className="font-bold">1 in 5 Nigerian men</span> will experience depression, severe psychological distress, or suicidal ideation at some point in their lives—and yet very few seek help.
                 </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps} className="max-w-4xl mb-24">
            <h2 className="text-[14px] font-display font-bold text-[#1976D2] mb-6 block leading-tight uppercase tracking-[0.5em]">Strategic Roadmap</h2>
            <h3 className="text-[40px] font-display font-bold text-slate-900 mb-10 leading-tight">Scale Trust via <br/>Non-Shaming Access.</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: "01", title: "Target 01", text: "Eradicate male mental health stigma." },
              { id: "02", title: "Target 02", text: "Broaden access to vetted clinical therapy." },
              { id: "03", title: "Target 03", text: "Establish anonymous digital peer networks." },
              { id: "04", title: "Target 04", text: "Curate masculine-sensitive mental health data." }
            ].map((obj, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="relative p-12 bg-white border-2 border-slate-100 shadow-lg hover:border-[#1976D2] transition-all duration-500 flex flex-col items-center text-center group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 font-display text-4xl font-bold group-hover:opacity-100 transition-opacity">
                   {obj.id}
                </div>
                <div className="w-16 h-1 bg-[#1976D2] mb-10" />
                <h4 className="text-[11px] uppercase tracking-[0.4em] font-black text-slate-400 mb-6 group-hover:text-[#1976D2] transition-colors">{obj.title}</h4>
                <p className="text-xl font-display font-bold text-slate-900 leading-tight">{obj.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-40 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...revealProps} className="mb-24">
            <h2 className="text-[14px] uppercase tracking-[0.4em] font-black text-white mb-8">Intervention Framework</h2>
            <div className="h-px w-full bg-white/10" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { title: "Digital Peer Circles", desc: "Moderated, confidential digital spaces for peer-to-peer resilience building." },
              { title: "MenForward Talks", desc: "Strategic webinars featuring clinical experts and relatable community leaders." },
              { title: "Youth Mental Health", desc: "Emotional literacy curricula adapted for boys in secondary education." },
              { title: "Referral Network", desc: "A direct bridge to masculine-sensitive clinical psychologists and resources." },
              { title: "Advocacy & Awareness", desc: "Data-driven storytelling campaigns to humanize the male experience." },
              { title: "Strategic Research", desc: "Publishing quarterly insights on regional male mental health trends." }
            ].map((prog, i) => (
              <motion.div 
                key={i} 
                {...revealProps}
                className="p-16 bg-slate-900 hover:bg-[#1976D2]/10 transition-colors duration-500"
              >
                <h4 className="text-2xl font-display font-bold mb-6">{prog.title}</h4>
                <p className="text-sm text-white/40 font-light leading-relaxed">{prog.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-40 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center relative">
          <MessageSquare size={64} className="text-[#1976D2]/5 absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none" />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-14"
            >
              <p className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                "{stories[activeStory].text}"
              </p>
              <div>
                <p className="text-sm uppercase tracking-widest font-black text-slate-900">{stories[activeStory].author}</p>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mt-3">{stories[activeStory].location}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-10 mt-20">
            <button 
              onClick={() => setActiveStory((prev) => (prev - 1 + stories.length) % stories.length)}
              className="p-5 border border-slate-200 hover:border-[#1976D2] transition-colors"
            >
              <ChevronLeft size={22} className="text-slate-400" />
            </button>
            <button 
              onClick={() => setActiveStory((prev) => (prev + 1) % stories.length)}
              className="p-5 border border-slate-200 hover:border-[#1976D2] transition-colors"
            >
              <ChevronRight size={22} className="text-slate-400" />
            </button>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-32 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div {...revealProps}>
            <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-[#1976D2] mb-8 block">Brotherhood & Growth</h2>
            <h3 className="text-[40px] font-display font-bold text-slate-900 mb-10 leading-tight">
              The Power of <br/>Shared Resilience.
            </h3>
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-12">
              Isolation is the enemy of progress. True strength is found in accountability—joining a group of men who support, challenge, and uplift one another. Our community provides a safe, non-judgmental architecture for honest growth and lasting emotional health.
            </p>
            <a 
              href="https://wa.me/your-whatsapp-link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-6 text-base md:text-lg font-bold uppercase tracking-[0.2em] hover:bg-[#128C7E] transition-all duration-500 shadow-xl group"
            >
              <MessageCircle size={28} fill="currentColor" className="group-hover:scale-110 transition-transform" /> 
              Join Our Community of great men
            </a>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-40 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div {...revealProps}>
            <h2 className="text-[14px] uppercase tracking-[0.5em] font-bold text-[#1976D2] mb-12 block">Resource Allocation</h2>
            <h3 className="text-5xl md:text-[6.5rem] font-display font-bold mb-12 leading-[0.9]">SUPPORT <br/>CHANGE.</h3>
            <p className="text-white/40 font-light text-xl max-w-lg mb-12">
              Join our network of institutional partners and professional advisors to expand the architecture of male mental health across Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { label: "Donate", icon: <Heart size={20} />, action: "Sponsor Operations" },
              { label: "Volunteer", icon: <Users size={20} />, action: "Clinical Advisor" },
              { label: "Sponsor", icon: <FileText size={20} />, action: "Program Partner" },
              { label: "Partner", icon: <Target size={20} />, action: "Institutional Ally" }
            ].map((cta, i) => (
              <motion.button 
                key={i}
                whileTap={{ scale: 0.98 }}
                className="p-12 border border-white/10 bg-white/5 hover:bg-[#1976D2] transition-all duration-300 text-left group"
              >
                <div className="text-[#1976D2] group-hover:text-white mb-10 transition-colors">{cta.icon}</div>
                <h4 className="text-xs uppercase tracking-[0.4em] font-black mb-3">{cta.label}</h4>
                <p className="text-white/40 group-hover:text-white/80 text-[10px] uppercase tracking-widest font-bold transition-colors">{cta.action}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

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
