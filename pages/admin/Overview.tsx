import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Eye, ArrowUpRight, Calendar, MessageSquare } from 'lucide-react';
import { adminService, AnalyticsData } from '../../services/adminService';

const Overview: React.FC = () => {
  const [stats, setStats] = useState<AnalyticsData | null>(null);
  const [inquiryCount, setInquiryCount] = useState(0);

  useEffect(() => {
    setStats(adminService.getAnalytics());
    setInquiryCount(adminService.getInquiries().filter(i => i.status === 'new').length);
  }, []);

  const currentMonth = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
  const monthlyVisits = stats?.monthlyVisits[currentMonth] || 0;

  const cards = [
    { 
      label: 'Total Visits', 
      value: stats?.totalVisits.toLocaleString() || '0', 
      icon: <Users size={24} className="text-[#1976D2]" />,
      change: '+12%', // Simulated for demo
      color: 'bg-[#1976D2]/10 text-[#1976D2]'
    },
    { 
      label: 'Monthly Active Users', 
      value: monthlyVisits.toLocaleString(), 
      icon: <Eye size={24} className="text-[#C5A059]" />,
      change: 'Active',
      color: 'bg-[#C5A059]/10 text-[#C5A059]'
    },
    { 
      label: 'New Inquiries', 
      value: inquiryCount.toString(), 
      icon: <MessageSquare size={24} className="text-[#E91E63]" />,
      change: 'Needs Action',
      color: 'bg-[#E91E63]/10 text-[#E91E63]'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-slate-900">Dashboard Overview</h1>
          <p className="text-sm text-slate-500 font-light mt-1">
            Real-time insights for {currentMonth}
          </p>
        </div>
        <button 
          onClick={() => window.location.reload()} 
          className="text-xs font-bold text-brand-accent uppercase tracking-wider hover:underline"
        >
          Refresh Data
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 border border-slate-200 shadow-sm rounded-lg flex items-start justify-between"
          >
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">{card.label}</p>
              <h3 className="text-3xl font-display font-bold text-slate-900">{card.value}</h3>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                  <ArrowUpRight size={10} /> {card.change}
                </span>
              </div>
            </div>
            <div className={`p-3 rounded-md ${card.color}`}>
              {card.icon}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Monthly Remarks / Summary */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm"
      >
        <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
          <Calendar size={20} className="text-slate-400" />
          <h3 className="text-lg font-bold text-slate-900">Monthly Remarks</h3>
        </div>
        
        <div className="space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-900">Performance Summary:</span> You have received <span className="font-bold text-[#1976D2]">{inquiryCount} new inquiries</span> this month. 
            User engagement tracking indicates a total of <span className="font-bold text-[#C5A059]">{monthlyVisits} visits</span> in {currentMonth}.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-900">Action Required:</span> Review pending inquiries in the "Inquiries" tab. Ensure content on the "Events" page is up to date for upcoming programs.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Overview;
