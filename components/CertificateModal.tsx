import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, User, FileText, CheckCircle, Download } from 'lucide-react';
import jsPDF from 'jspdf';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    certificate: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, certificate: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Please enter your full name');
      return;
    }
    if (!formData.certificate) {
      alert('Please upload your course certificate');
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate certificate
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = "/certificate image/Certificate.png";
      
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [222.8, 157.4],
      });

      // Add certificate background
      pdf.addImage(img, "PNG", 0, 0, 222.8, 157.4);

      // Add participant name
      pdf.setFont("times", "bold");
      pdf.setFontSize(28);
      pdf.setTextColor(26, 26, 46);
      pdf.text(formData.name, 21, 68);

      // Download
      const safeName = formData.name.replace(/[^a-zA-Z0-9 ]/g, "").trim();
      pdf.save(`AAF_Certificate_${safeName}.pdf`);

      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', certificate: null });
        onClose();
      }, 3000);

    } catch (error) {
      console.error('Error generating certificate:', error);
      alert('Error generating certificate. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-[1000] cursor-zoom-out"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-2xl shadow-2xl z-[1001] overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h2 className="text-2xl font-display font-bold text-slate-900">Claim Your AAF Certificate</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X size={24} className="text-slate-600" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <Download size={64} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Certificate Generated!</h3>
                  <p className="text-slate-600">Your AAF certificate is downloading. Check your downloads folder.</p>
                </motion.div>
              ) : (
                <div className="max-w-md mx-auto">
                  <div className="text-center mb-8">
                    <FileText size={48} className="text-brand-primary mx-auto mb-4" />
                    <p className="text-slate-600">
                      Upload your course certificate to receive your official AAF Certificate of Participation.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                    </div>

                    {/* Certificate Upload */}
                    <div>
                      <label htmlFor="certificate" className="block text-sm font-medium text-slate-700 mb-2">
                        Course Certificate *
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="certificate"
                          name="certificate"
                          onChange={handleFileChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="hidden"
                          required
                        />
                        <label
                          htmlFor="certificate"
                          className="flex items-center justify-center w-full p-4 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-brand-primary transition-colors"
                        >
                          <div className="text-center">
                            <Upload size={24} className="text-slate-400 mx-auto mb-2" />
                            <p className="text-sm text-slate-600">
                              {formData.certificate ? formData.certificate.name : 'Click to upload your certificate'}
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                              PDF, JPG, PNG up to 10MB
                            </p>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-primary text-white py-3 px-6 rounded-lg font-bold hover:bg-brand-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Processing...
                        </>
                      ) : (
                        'Submit Certificate'
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;