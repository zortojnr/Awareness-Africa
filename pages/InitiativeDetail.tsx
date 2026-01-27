import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight,
  Share2, 
  CheckCircle2,
  BookOpen,
  Quote,
  Activity,
  Zap,
  Users,
  Heart,
  Calendar,
  ClipboardList,
  Target,
  FileCheck,
  TrendingUp,
  MessageCircle,
  ClipboardCheck
} from 'lucide-react';
import Button from '../components/Button';
import { motion } from 'framer-motion';

// Import images for HerAwareness
import img1 from '../assets/images/1a.jpeg';
import img2 from '../assets/images/2.jpeg';
import img9 from '../assets/images/9.jpeg';
import img4 from '../assets/images/4.jpeg';
import img5 from '../assets/images/5.jpeg';
import img6 from '../assets/images/6.jpeg';

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
              Empowering Young Women Across Northern Nigeria
            </p>
          </motion.div>
        </div>
      </header>

      <section className="py-20 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             <motion.div {...revealProps} className="max-w-4xl">
              <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#E91E63] mb-8 block">Background & Rationale</h2>
              <div className="space-y-6 text-base sm:text-lg text-slate-800 leading-relaxed font-light">
                <p>Young women across Northern Nigeria face significant challenges in education, career development, and sexual health. Many drop out of school due to early pregnancies, lack of financial support, or lack of self-belief. Most girls lack guidance to make informed decisions.</p>
                <p>At the same time, early sexual activity without knowledge of reproductive health has led to high rates of teenage pregnancy and sexually transmitted infections (including HIV). While HIV treatment is free, prevention and sexual health education remain under-emphasized.</p>
                <p className="font-medium text-[#E91E63]">This NGO seeks to break this cycle by providing mentorship, education, and empowerment to young ladies. We achieve this through structured vocational workshops, digital literacy programs, and community-led health advocacy, equipping them with career direction and essential knowledge about sexual health.</p>
              </div>
            </motion.div>
            <motion.div {...revealProps} transition={{ delay: 0.2 }} className="relative aspect-[4/5] bg-slate-100 hidden lg:block overflow-hidden shadow-lg">
               <img src={img1} alt="Community Education" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 sm:py-32 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16">
            <div className="space-y-4 border-l-[3px] border-[#E91E63] pl-6">
              <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 block">Mission Statement</h2>
              <p className="text-xl sm:text-2xl font-display font-bold text-slate-900 leading-tight">
                To empower young women across Northern Nigeria with the knowledge, guidance, and self-belief to make informed career choices and take control of their sexual and reproductive health.
              </p>
            </div>
            <div className="space-y-4 border-l-[3px] border-slate-900 pl-6">
              <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 block">Vision Statement</h2>
              <p className="text-xl sm:text-2xl font-display font-bold text-slate-900 leading-tight">
                A future where every young woman in Northern Nigeria is confident, educated, and empowered to build a meaningful career and contribute positively to society.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="aspect-video bg-slate-200 overflow-hidden shadow-sm">
                <img src={img2} alt="Empowered Youth" className="w-full h-full object-cover" />
             </div>
             <div className="aspect-video bg-slate-200 overflow-hidden shadow-sm">
                <img src={img9} alt="Workshop Session" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-20 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="aspect-[4/3] bg-slate-100 overflow-hidden shadow-lg hidden lg:block order-2 lg:order-1">
              <img src={img4} alt="Mentorship" className="w-full h-full object-cover" />
           </div>
           
           <div className="max-w-4xl order-1 lg:order-2">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#E91E63] mb-12 block">Purpose & Objectives</h2>
            <div className="grid grid-cols-1 gap-8">
              {[
                "To guide young girls in choosing career paths aligned with their strengths and aspirations.",
                "To reduce school drop-out rates by inspiring girls to see the value of education.",
                "To promote sexual health education, reducing early pregnancies and STIs/HIV cases.",
                "To instill confidence, self-belief, and a sense of purpose in young women.",
                "To build a network of mentors, facilitators, and peers who can continue to support them beyond the program."
              ].map((obj, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#E91E63]/10 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-[#E91E63]">{i + 1}</span>
                  </div>
                  <p className="text-base sm:text-lg text-slate-700 font-light leading-relaxed">{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider color="bg-[#E91E63]" weight="h-[2px]" />

      <section className="py-20 sm:py-32 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#E91E63] mb-6">Core Focus Areas</h2>
            <h3 className="text-2xl sm:text-4xl font-display font-bold">2-Day Workshop — First Cohort</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Day 1 */}
            <div className="space-y-8 p-10 border border-white/10 bg-white/5">
              <div className="flex items-center gap-4 text-[#E91E63]">
                <Calendar size={24} />
                <span className="text-[10px] uppercase tracking-widest font-black">Day 1</span>
              </div>
              <h4 className="text-xl font-display font-bold">Education & Career Empowerment</h4>
              <ul className="space-y-6">
                <li>
                  <p className="text-sm font-bold text-white mb-1">Discovering Your Strengths & Career Paths</p>
                  <p className="text-xs text-white/50 leading-relaxed">How to choose between Science, Arts, and Commercial classes. medicine, law, business, ICT pathways.</p>
                </li>
                <li>
                  <p className="text-sm font-bold text-white mb-1">Building Self-Belief & Motivation</p>
                  <p className="text-xs text-white/50 leading-relaxed">Breaking limiting beliefs and developing personal vision.</p>
                </li>
                <li className="pt-4 border-t border-white/5">
                   <p className="text-[9px] uppercase tracking-widest text-[#E91E63] font-bold">Activities</p>
                   <p className="text-xs italic text-white/40">Career assessment quiz & Write your future self letter.</p>
                </li>
              </ul>
              <div className="aspect-video bg-slate-800 mt-6 overflow-hidden border border-white/10">
                 <img src={img5} alt="Career Workshop" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Day 2 */}
            <div className="space-y-8 p-10 border border-white/10 bg-white/5">
              <div className="flex items-center gap-4 text-[#E91E63]">
                <Activity size={24} />
                <span className="text-[10px] uppercase tracking-widest font-black">Day 2</span>
              </div>
              <h4 className="text-xl font-display font-bold">Sexual Health & Personal Growth</h4>
              <ul className="space-y-6">
                <li>
                  <p className="text-sm font-bold text-white mb-1">Understanding Your Body</p>
                  <p className="text-xs text-white/50 leading-relaxed">Reproductive health basics: menstruation, safe periods, STIs/HIV prevention.</p>
                </li>
                <li>
                  <p className="text-sm font-bold text-white mb-1">Relationships & Decision-Making</p>
                  <p className="text-xs text-white/50 leading-relaxed">Saying no to pressure, consent, boundaries, and self-worth.</p>
                </li>
                <li className="pt-4 border-t border-white/5">
                   <p className="text-[9px] uppercase tracking-widest text-[#E91E63] font-bold">Closing Session</p>
                   <p className="text-xs italic text-white/40">Group pledge + distribution of sanitary pads.</p>
                </li>
              </ul>
              <div className="aspect-video bg-slate-800 mt-6 overflow-hidden border border-white/10">
                 <img src={img6} alt="Health Session" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Roles */}
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 mb-10 block">Proposed Roles for NGO</h2>
              <div className="space-y-6">
                {[
                  { r: "Program Director", d: "Overall strategy, direction, facilitation & project management." },
                  { r: "Program Coordinator", d: "Logistics, hall setup, participant and account management." },
                  { r: "Media & Communications Officer", d: "Photos/videos, manage social presence, and storytelling." },
                  { r: "Welfare Officer", d: "Responsible for sanitary pads distribution and well-being." },
                  { r: "Monitoring & Evaluation Lead", d: "Track impact, feedback from girls, and report writing." }
                ].map((role, i) => (
                  <div key={i} className="flex gap-4">
                    <ClipboardList size={18} className="text-[#E91E63] shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-bold text-slate-900">{role.r}</p>
                      <p className="text-xs text-slate-500">{role.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps */}
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 mb-10 block">Next Steps (Before November)</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Post NGO/Project Name", "Secure Venue", "Develop Materials", 
                  "Translate to Hausa", "Budgeting", "Outreach & Selection", 
                  "Media Prep", "Branded Items"
                ].map((step, i) => (
                  <div key={i} className="p-4 bg-slate-50 border border-slate-100 flex items-center gap-3">
                    <FileCheck size={14} className="text-[#E91E63]" />
                    <span className="text-[10px] uppercase font-bold text-slate-600">{step}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-[#E91E63]/5 border-l-4 border-[#E91E63]">
                <p className="text-[10px] uppercase tracking-widest font-black text-[#E91E63] mb-4">Incentives</p>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li>• Airtime giveaways for participation</li>
                  <li>• Sanitary Pads for all girls</li>
                  <li>• Certificates of Participation</li>
                  <li>• Follow-up WhatsApp Group</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 px-6 bg-[#E91E63] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Heart size={40} className="mx-auto mb-8" />
          <h2 className="text-2xl sm:text-4xl font-display font-bold mb-10">Direct Intervention Architecture</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="w-full sm:w-auto px-10" onClick={handleApplyClick}>Apply for Cohort <ArrowRight className="ml-2" size={14} /></Button>
            <Button variant="outline" className="w-full sm:w-auto px-10 border-white text-white hover:bg-white hover:text-[#E91E63]">Partner with us</Button>
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

  const handleFormFill = () => {
    window.open('https://docs.google.com/forms/u/0/d/e/1FAIpQLSf6dKKzlpsOh6vHKH_vgPxzmD2F5FsZwa3OvQajYt3MtOLYHg/', '_blank');
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

      <section className="py-24 sm:py-32 px-6">
         <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 mb-6">Join the group of men making change.</h3>
            <p className="text-base text-slate-600 font-light mb-10 max-w-xl">Connect instantly for safe, peer-led dialogue. A confidential space for resilience and honest support.</p>
            <div className="w-full flex justify-center">
               <Button variant="whatsapp" className="w-full sm:w-auto px-12" onClick={handleWhatsAppJoin}>
                  WhatsApp Connection <MessageCircle className="ml-2" size={16} />
               </Button>
            </div>
         </div>
      </section>

      <SectionDivider color="bg-[#1976D2]" weight="h-[3px]" />

      {/* New Data Collection Section */}
      <section className="py-24 sm:py-32 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-[#1976D2]/10 flex items-center justify-center mb-8">
            <ClipboardCheck size={24} className="text-[#1976D2]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-6">Direct Engagement Survey</h3>
          <p className="text-base text-slate-600 font-light mb-10 leading-relaxed">
            Your voice is essential to our research and intervention design. Please take a few moments to provide your insights, helping us build more effective support systems for men across the region.
          </p>
          <div className="w-full flex justify-center">
            <Button variant="blue" className="w-full sm:w-auto px-16" onClick={handleFormFill}>
              Fill Here
            </Button>
          </div>
        </div>
      </section>

      <SectionDivider color="bg-[#1976D2]" weight="h-[3px]" />

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
