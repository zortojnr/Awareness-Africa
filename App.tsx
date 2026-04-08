import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import InitiativeDetail from './pages/InitiativeDetail';
import About from './pages/About';
import Programs from './pages/Programs';
import Volunteer from './pages/Volunteer';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import Partners from './pages/Partners';
import LearningHub from './pages/LearningHub';
import InvolvementModal from './components/InvolvementModal';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import FloatingSlogan from './components/FloatingSlogan';
import SEOHead from './components/SEOHead';
import StructuredData from './components/StructuredData';
import { AnimatePresence, motion } from 'framer-motion';

// Admin Imports
import Login from './pages/admin/Login';
import AdminLayout from './components/admin/AdminLayout';
import Overview from './pages/admin/Overview';
import Inquiries from './pages/admin/Inquiries';
import ContentManager from './pages/admin/ContentManager';
import { adminService } from './services/adminService';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);
  return null;
};

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleOpen = () => setIsModalOpen(true);
    window.addEventListener('open-involvement-modal', handleOpen);
    
    // Track User Visit
    adminService.trackVisit();

    return () => window.removeEventListener('open-involvement-modal', handleOpen);
  }, []);

  return (
    <Router>
      <SEOHead />
      <StructuredData />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div 
            key="app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen flex flex-col selection:bg-brand-accent selection:text-white relative overflow-x-hidden"
          >
            <CustomCursor />
            <FloatingSlogan />
            <Navbar />
            <div className="flex-grow pt-[72px]">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                  <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                  <Route path="/programs" element={<PageWrapper><Programs /></PageWrapper>} />
                  <Route path="/volunteer" element={<PageWrapper><Volunteer /></PageWrapper>} />
                  <Route path="/resources" element={<PageWrapper><Resources /></PageWrapper>} />
                  <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                  <Route path="/partners" element={<PageWrapper><Partners /></PageWrapper>} />
                  <Route path="/payment" element={<PageWrapper><Payment /></PageWrapper>} />
                  <Route path="/learning-hub" element={<PageWrapper><LearningHub /></PageWrapper>} />
                  <Route path="/initiatives/:slug" element={<PageWrapper><InitiativeDetail /></PageWrapper>} />
                  
                  {/* Admin Routes */}
                  <Route path="/admin" element={<Login />} />
                  <Route path="/admin" element={<AdminLayout />}>
                    <Route path="dashboard" element={<Overview />} />
                    <Route path="inquiries" element={<Inquiries />} />
                    <Route path="pages" element={<ContentManager />} />
                    <Route path="media" element={<div className="text-slate-400 p-10 text-center">Media Library Module (Coming Soon)</div>} />
                    <Route path="donations" element={<div className="text-slate-400 p-10 text-center">Donation Control Module (Coming Soon)</div>} />
                  </Route>

                  <Route path="*" element={
                    <PageWrapper>
                      <div className="h-[80vh] flex items-center justify-center">
                        <div className="text-center p-12 bg-gray-50 border border-gray-100 max-w-xl">
                          <h1 className="text-7xl font-display font-bold mb-6">404</h1>
                          <p className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-10">This page is under architectural review.</p>
                          <a href="/" className="px-12 py-5 bg-black text-white uppercase tracking-widest text-xs font-bold hover:bg-brand-accent transition-all block">Return Home</a>
                        </div>
                      </div>
                    </PageWrapper>
                  } />
                </Routes>
              </AnimatePresence>
            </div>
            <Footer />
            <InvolvementModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
};

export default App;
