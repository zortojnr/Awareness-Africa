import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { adminService } from '../../services/adminService';
import logo from '../../assets/images/AAF blue logo (1).png';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate network delay for professional feel
    setTimeout(() => {
      const success = adminService.login(email, password);
      if (success) {
        navigate('/admin/dashboard');
      } else {
        setError('Invalid credentials. Please verify your access rights.');
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white border border-slate-200 shadow-xl p-8 md:p-12 rounded-lg"
      >
        <div className="flex flex-col items-center mb-10">
          <img src={logo} alt="AAF Admin" className="h-12 w-auto mb-6 opacity-80" />
          <h1 className="text-2xl font-display font-bold text-slate-900">Admin Portal</h1>
          <p className="text-sm text-slate-500 font-light mt-2">Secure Access Gateway</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:border-brand-accent outline-none transition-colors rounded-sm text-slate-900"
              placeholder="admin@awarenessafrica.org"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Password</label>
            <div className="relative">
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm focus:border-brand-accent outline-none transition-colors rounded-sm text-slate-900"
                placeholder="••••••••"
                required
              />
              <Lock className="absolute right-3 top-3 text-slate-400" size={16} />
            </div>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="flex items-center gap-2 text-red-500 text-xs bg-red-50 p-3 rounded-sm"
            >
              <AlertCircle size={14} />
              {error}
            </motion.div>
          )}

          <button 
            type="submit"
            disabled={loading}
            className={`w-full bg-slate-900 text-white py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand-accent transition-all flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-wait' : ''}`}
          >
            {loading ? 'Authenticating...' : 'Secure Login'}
            {!loading && <ArrowRight size={14} />}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-slate-100 pt-6">
          <p className="text-[10px] text-slate-400 uppercase tracking-wider">
            Restricted Area • Authorized Personnel Only
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
