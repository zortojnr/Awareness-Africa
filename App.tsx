
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import InitiativeDetail from './pages/InitiativeDetail';
import About from './pages/About';
import Programs from './pages/Programs';
import Volunteer from './pages/Volunteer';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import InvolvementModal from './components/InvolvementModal';
import CustomCursor from './components/CustomCursor';
import FloatingSlogan from './components/FloatingSlogan';
import { AnimatePresence, motion } from 'framer-motion';

// Global trigger helper
export const openInvolvementModal = () => {
  window.dispatchEvent(new CustomEvent('open-involvement-modal'));
};

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

  useEffect(() => {
    const handleOpen = () => setIsModalOpen(true);
    window.addEventListener('open-involvement-modal', handleOpen);
    return () => window.removeEventListener('open-involvement-modal', handleOpen);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-brand-accent selection:text-white relative">
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
              <Route path="/initiatives/:slug" element={<PageWrapper><InitiativeDetail /></PageWrapper>} />
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
      </div>
    </Router>
  );
};

export default App;
