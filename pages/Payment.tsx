import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, Copy, CheckCircle, ArrowRight, Lock } from 'lucide-react';
import Button from '../components/Button';

const Payment: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const accountDetails = {
    bank: "UBA",
    number: "2182926086",
    name: "Victoria Odesanya",
    role: "Founder, Awareness Africa"
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(accountDetails.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="bg-slate-50 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-slate-200 shadow-xl overflow-hidden rounded-sm"
        >
          {/* Header */}
          <div className="bg-slate-900 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-3 bg-brand-accent/20 rounded-full mb-4">
                <ShieldCheck className="text-brand-accent" size={32} />
              </div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Secure Transaction</h1>
              <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">Sponsor A Child Initiative</p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {!confirmed ? (
              <>
                <div className="mb-10 text-center">
                  <p className="text-slate-600 leading-relaxed mb-6">
                    You are initiating a direct sponsorship transfer. Please use the details below to complete your transaction securely.
                  </p>
                  <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    <Lock size={12} /> 256-bit Encrypted Session
                  </div>
                </div>

                {/* Account Card */}
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm mb-10 relative group">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                      <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Bank</span>
                      <span className="text-lg font-bold text-slate-900">{accountDetails.bank}</span>
                    </div>
                    
                    <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                      <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Account Number</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xl md:text-2xl font-mono font-bold text-brand-accent">{accountDetails.number}</span>
                        <button 
                          onClick={handleCopy}
                          className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500 hover:text-slate-900"
                          title="Copy Number"
                        >
                          {copied ? <CheckCircle size={16} className="text-green-600" /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Beneficiary</span>
                      <div className="text-right">
                        <span className="block text-sm font-bold text-slate-900">{accountDetails.name}</span>
                        <span className="block text-[10px] text-slate-500 uppercase tracking-wider">{accountDetails.role}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <Button 
                    variant="primary" 
                    className="w-full py-4 flex items-center justify-center gap-2"
                    onClick={() => setConfirmed(true)}
                  >
                    I Have Completed The Transfer <ArrowRight size={16} />
                  </Button>
                  <p className="text-center text-[10px] text-slate-400 max-w-sm mx-auto">
                    By clicking above, you confirm that you have initiated the funds transfer to the designated account.
                  </p>
                </div>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Transaction Recorded</h2>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                  Thank you for your generosity. Our team will verify the receipt of funds and send a formal confirmation to your email shortly.
                </p>
                <Button variant="outline" onClick={() => window.location.href = '/'} className="px-8">
                  Return to Home
                </Button>
              </motion.div>
            )}
          </div>
          
          <div className="bg-slate-50 p-4 border-t border-slate-200 text-center">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">
              Awareness Africa Foundation • ID: AAF-2025-SEC
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Payment;
