import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MessageSquare, 
  FileText, 
  Image as ImageIcon, 
  LogOut, 
  Menu, 
  X,
  CreditCard,
  Users
} from 'lucide-react';
import { adminService } from '../../services/adminService';
import logo from '../../assets/images/AAF blue logo (1).png';

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Auth Check
    if (!adminService.isAuthenticated()) {
      navigate('/admin');
    }

    // Responsive Check
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
        setIsSidebarOpen(false);
      } else {
        setIsMobile(false);
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [navigate]);

  const handleLogout = () => {
    adminService.logout();
    navigate('/admin');
  };

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Overview', path: '/admin/dashboard' },
    { icon: <MessageSquare size={20} />, label: 'Inquiries', path: '/admin/inquiries' },
    { icon: <FileText size={20} />, label: 'Content Manager', path: '/admin/pages' },
    { icon: <ImageIcon size={20} />, label: 'Media', path: '/admin/media' }, // Placeholder
    { icon: <CreditCard size={20} />, label: 'Donations', path: '/admin/donations' }, // Placeholder
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans relative">
      {/* Mobile Toggle - Floating Button */}
      {isMobile && !isSidebarOpen && (
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-4 left-4 z-40 p-3 bg-slate-900 text-white rounded-full shadow-lg hover:bg-brand-accent transition-colors"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 bg-slate-900 text-white w-64 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col shadow-2xl`}
      >
        <div className="p-6 flex items-center justify-between h-20 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <img src={logo} alt="AAF" className="h-8 w-auto brightness-0 invert" />
            <span className="font-display font-bold tracking-tight">Admin</span>
          </div>
          {isMobile && (
            <button onClick={() => setIsSidebarOpen(false)} className="text-slate-400 hover:text-white">
              <X size={20} />
            </button>
          )}
        </div>

        <nav className="flex-1 py-6 space-y-1 px-3 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path}
                onClick={() => isMobile && setIsSidebarOpen(false)}
                className={`flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-200 group ${
                  isActive 
                    ? 'bg-brand-accent text-slate-900 font-bold' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className={isActive ? 'text-slate-900' : 'text-slate-400 group-hover:text-white'}>
                  {item.icon}
                </span>
                <span className="text-sm">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* User Profile moved to Sidebar */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/50">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-10 h-10 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent border border-brand-accent/20">
              <Users size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white">Administrator</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider">Awareness Africa</span>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-4 px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-md w-full transition-colors"
          >
            <LogOut size={20} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content - No Header */}
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${isSidebarOpen && !isMobile ? 'ml-64' : ''}`}>
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
