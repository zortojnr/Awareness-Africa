
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight,
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

const SectionDivider = ({ color = 'bg-slate-100', weight = 'h-[1px]' }: { color?: string, weight?: string }) => (
  <div className="w-full px-6">
    <div className={`max-w-7xl mx-auto ${weight} ${color}`} />
  </div>
);

const HerAwarenessPage: React.FC = () => {
  const handleApplyClick = () => {
    window.open('https://forms.gle/c1gWdoQJ5UgtqLqJ6', '_blank');
  };

  return (
    <div className="bg-white min-h-screen selection:bg-[#E91E63] selection:text-white overflow-x-hidden">
      <div className="bg-white border-b border-slate-50 py-3 px-6 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] font-bold text-slate-400">
            <ArrowLeft size={12} /> Awareness Africa
          </Link>
          <div className="flex gap-4 items-center">
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-300">Case Brief</span>
            <Share2 size={14} className="text-slate-300" />
          </div>
        </div>
      </div>

      <header className="pt-20 pb-24 sm:pt-32 sm:pb-40 px-6 bg-[#E91E63] text-white relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="text-[10px] sm:text-[12px] uppercase tracking-[0.5em] font-bold text-white/70 block mb-6">Flagship Initiative</span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tighter">
              HER AWARENESS <br/>AFRICA
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-display italic leading-tight mb-12 max-w-2xl">
              Empowering Young Women in Southern Kaduna
            </p>
          </motion.div>
        </div>
      </header>

      <section className="py-20 sm:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...revealProps}>
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 mb-8 block">Background</h2>
            <div className="space-y-6 text-lg sm:text-xl text-slate-800 leading-relaxed font-light">
              <p>Young women in Southern Kaduna face significant challenges in education and health. We seek to break this cycle through mentorship and vocational access.</p>
              <p className="font-medium text-slate-900">Empowering them with essential knowledge about sexual health and career direction.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 sm:py-32 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-4 border-l-[3px] border-[#E91E63] pl-6">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 block">Mission</h2>
            <p className="text-xl sm:text-2xl font-display font-bold text-slate-900 leading-tight">
              Empowering through knowledge and self-belief.
            </p>
          </div>
          <div className="space-y-4 border-l-[3px] border-slate-900 pl-6">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 block">Vision</h2>
            <p className="text-xl sm:text-2xl font-display font-bold text-slate-900 leading-tight">
              A future where every woman is an architect of her destiny.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#E91E63] mb-12 block">Strategic Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button variant="pink" className="w-full sm:w-auto px-10" onClick={handleApplyClick}>Apply for Cohort <ArrowRight className="ml-2" size={14} /></Button>
            <Button variant="outline" className="w-full sm:w-auto px-10 border-white/20 text-white hover:bg-white/10">Partner with us</Button>
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
    <div className="bg-white min-h-screen selection:bg-[#1976D2] selection:text-white overflow-x-hidden">
      <div className="bg-white border-b border-slate-50 py-3 px-6 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] font-bold text-slate-400">
            <ArrowLeft size={12} /> Awareness Africa
          </Link>
          <div className="flex gap-4 items-center">
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#1976D2]">Case Brief</span>
            <Share2 size={14} className="text-slate-300" />
          </div>
        </div>
      </div>

      <header className="pt-24 pb-32 sm:pt-32 sm:pb-40 px-6 bg-[#1976D2] text-white relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-white" />
              <span className="text-[10px] sm:text-[12px] uppercase tracking-[0.6em] font-bold text-white block">Institutional Pillar</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tighter">
              MENFORWARD <br/>AFRICA
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-display italic leading-tight mb-12 max-w-2xl">
              Advancing Men’s Mental Health, Wellbeing & Resilience in Africa
            </p>
            <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4 pt-8 border-t border-white/20">
              <span className="flex items-center gap-2 text-[9px] uppercase font-bold text-white"><Activity size={12} /> Suicide Prevention</span>
              <span className="flex items-center gap-2 text-[9px] uppercase font-bold text-white"><Users size={12} /> Peer Support</span>
              <span className="flex items-center gap-2 text-[9px] uppercase font-bold text-white"><TrendingUp size={12} /> Resilience</span>
              <span className="flex items-center gap-2 text-[9px] uppercase font-bold text-white"><CheckCircle2 size={12} /> Intervention</span>
            </div>
          </motion.div>
        </div>
      </header>

      <SectionDivider color="bg-[#1976D2]" weight="h-[3px]" />

      <section className="py-20 sm:py-32 px-6 bg-slate-50/30">
        <div className="max-w-4xl mx-auto relative">
          <Quote size={40} className="absolute -top-6 -left-4 text-slate-100 -z-10" />
          <h2 className="text-[10px] uppercase tracking-[0.6em] font-bold text-[#1976D2] mb-10">Statement of Intent</h2>
          <div className="space-y-8 text-lg sm:text-2xl font-display font-light text-slate-800 leading-snug italic">
            <p>"While conversations around mental health are gaining visibility in Africa, men are still largely left behind. We exist to create safe, non-judgmental spaces where men can speak honestly."</p>
          </div>
        </div>
      </section>

      <SectionDivider color="bg-[#1976D2]" weight="h-[3px]" />

      <section className="py-20 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#1976D2] mb-8 block">The Silence Crisis</h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-16">Metrics of Reality.</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { val: "80%", label: "Global Suicide Share", desc: "Men account for approximately 80% of suicide deaths worldwide." },
              { val: "12k+", label: "Nigeria Annual Male Deaths", desc: "Estimated preventable male suicide deaths in Nigeria annually." },
              { val: "5:1", label: "NGO Support Ratio", desc: "Women-centered initiatives outnumber male-focused programs." }
            ].map((stat, i) => (
              <div key={i} className="p-8 border-l-[3px] border-[#1976D2] bg-slate-50">
                <p className="text-3xl font-display font-bold text-[#1976D2] mb-4">{stat.val}</p>
                <h4 className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-2">{stat.label}</h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider color="bg-[#1976D2]" weight="h-[3px]" />

      <section className="py-20 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto bg-white p-8 sm:p-16 border-[2px] border-[#1976D2] shadow-xl flex flex-col items-center text-center">
           <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white mb-8">
              <MessageSquare size={24} />
           </div>
           <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 mb-6">Join the group of men making change.</h3>
           <p className="text-base text-slate-600 font-light mb-10 max-w-xl">Connect instantly for safe, peer-led dialogue. A confidential space for resilience and honest support.</p>
           <Button variant="whatsapp" className="w-full sm:w-auto px-12" onClick={handleWhatsAppJoin}>
              WhatsApp Connection <ArrowRight className="ml-2" size={14} />
           </Button>
        </div>
      </section>

      <SectionDivider color="bg-[#1976D2]" weight="h-[3px]" />

      <section className="py-20 sm:py-32 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#1976D2] mb-16 block">Intervention Architecture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {[
              { icon: <Users size={20} />, title: "Digital Peer Circles", desc: "Confidential WhatsApp groups for age-based peer support." },
              { icon: <MessageCircle size={20} />, title: "MenForward Talks", desc: "Virtual conversations with relatable male psychologists." },
              { icon: <BookOpen size={20} />, title: "Youth Literacy", desc: "Emotional intelligence training for boys aged 12–25." }
            ].map((prog, i) => (
              <div key={i} className="p-10 sm:p-12 bg-slate-900 group hover:bg-[#1976D2] transition-colors duration-500">
                 <div className="text-[#1976D2] group-hover:text-white mb-8">{prog.icon}</div>
                 <h4 className="text-xl font-display font-bold mb-4">{prog.title}</h4>
                 <p className="text-xs text-white/50 group-hover:text-white/80 leading-relaxed font-light">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 mb-8">Institutional Liaison</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto border-[#1976D2] text-[#1976D2] hover:bg-[#1976D2] hover:text-white">Return Home</Button>
          </Link>
          <Button variant="blue" className="w-full sm:w-auto px-12" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Back to Top</Button>
        </div>
      </section>
    </div>
  );
};

const InitiativeDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (slug === 'her-awareness') return <HerAwarenessPage />;
  if (slug === 'men-forward') return <MenForwardPage />;
  return <Navigate to="/" />;
};

export default InitiativeDetail;
