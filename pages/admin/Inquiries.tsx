import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Search, CheckCircle, Mail, User, Clock } from 'lucide-react';
import { adminService, Inquiry } from '../../services/adminService';

const Inquiries: React.FC = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setInquiries(adminService.getInquiries());
  }, []);

  const handleExport = () => {
    adminService.exportInquiriesCSV();
  };

  const handleMarkRead = (id: string) => {
    adminService.markInquiryAsRead(id);
    setInquiries(adminService.getInquiries());
  };

  const filteredInquiries = inquiries.filter(i => 
    i.name.toLowerCase().includes(filter.toLowerCase()) || 
    i.email.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-slate-900">Inquiries</h1>
          <p className="text-sm text-slate-500 font-light mt-1">
            Manage incoming messages from forms across the platform.
          </p>
        </div>
        <button 
          onClick={handleExport}
          className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand-accent transition-colors rounded-sm"
        >
          <Download size={14} /> Export CSV
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search by name or email..." 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full bg-white border border-slate-200 pl-12 pr-4 py-3 text-sm focus:border-brand-accent outline-none rounded-sm"
        />
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="p-4 text-[10px] uppercase tracking-wider font-bold text-slate-500">Status</th>
                <th className="p-4 text-[10px] uppercase tracking-wider font-bold text-slate-500">Date</th>
                <th className="p-4 text-[10px] uppercase tracking-wider font-bold text-slate-500">User</th>
                <th className="p-4 text-[10px] uppercase tracking-wider font-bold text-slate-500">Type</th>
                <th className="p-4 text-[10px] uppercase tracking-wider font-bold text-slate-500">Message</th>
                <th className="p-4 text-[10px] uppercase tracking-wider font-bold text-slate-500 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredInquiries.length > 0 ? (
                filteredInquiries.map((inquiry) => (
                  <motion.tr 
                    key={inquiry.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`hover:bg-slate-50/50 transition-colors ${inquiry.status === 'new' ? 'bg-blue-50/30' : ''}`}
                  >
                    <td className="p-4">
                      {inquiry.status === 'new' ? (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-[9px] font-bold uppercase tracking-wider rounded-full">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" /> New
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-500 text-[9px] font-bold uppercase tracking-wider rounded-full">
                          Read
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-xs text-slate-500 font-mono">
                      <div className="flex items-center gap-2">
                        <Clock size={12} />
                        {new Date(inquiry.date).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                          <User size={14} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{inquiry.name}</p>
                          <p className="text-xs text-slate-500">{inquiry.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-xs font-medium px-2 py-1 border border-slate-200 rounded text-slate-600 capitalize">
                        {inquiry.type}
                      </span>
                    </td>
                    <td className="p-4 max-w-xs">
                      <p className="text-sm text-slate-600 truncate">{inquiry.message || 'No message provided.'}</p>
                    </td>
                    <td className="p-4 text-right">
                      {inquiry.status === 'new' && (
                        <button 
                          onClick={() => handleMarkRead(inquiry.id)}
                          className="text-slate-400 hover:text-[#1976D2] transition-colors"
                          title="Mark as Read"
                        >
                          <CheckCircle size={18} />
                        </button>
                      )}
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-slate-400 text-sm">
                    <Mail size={32} className="mx-auto mb-4 opacity-20" />
                    No inquiries found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inquiries;
