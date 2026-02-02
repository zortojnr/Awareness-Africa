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
  };

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Overview', path: '/admin/dashboard' },
    { icon: <MessageSquare size={20} />, label: 'Inquiries', path: '/admin/inquiries' },
    { icon: <FileText size={20} />, label: 'Pages', path: '/admin/pages' }, // Placeholder for future
    { icon: <ImageIcon size={20} />, label: 'Media', path: '/admin/media' }, // Placeholder
    { icon: <CreditCard size={20} />, label: 'Donations', path: '/admin/donations' }, // Placeholder
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar */}
      <aside 
        className={`fixed lg:static inset-y-0 left-0 z-50 bg-slate-900 text-white w-64 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-20'
        } flex flex-col`}
      >
        <div className="p-6 flex items-center justify-between h-20 border-b border-slate-800">
          <div className={`flex items-center gap-3 ${!isSidebarOpen && 'lg:hidden'}`}>
            <img src={logo} alt="AAF" className="h-8 w-auto brightness-0 invert" />
            <span className="font-display font-bold tracking-tight">Admin</span>
          </div>
          {isMobile && (
            <button onClick={() => setIsSidebarOpen(false)} className="text-slate-400 hover:text-white">
              <X size={20} />
            </button>
          )}
        </div>

        <nav className="flex-1 py-6 space-y-1 px-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-200 group ${
                  isActive 
                    ? 'bg-brand-accent text-slate-900 font-bold' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className={isActive ? 'text-slate-900' : 'text-slate-400 group-hover:text-white'}>
                  {item.icon}
                </span>
                <span className={`text-sm ${!isSidebarOpen && 'lg:hidden'}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-4 px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-md w-full transition-colors"
          >
            <LogOut size={20} />
            <span className={`text-sm font-medium ${!isSidebarOpen && 'lg:hidden'}`}>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-white border-b border-slate-200 h-20 px-6 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-100 rounded-md text-slate-600 lg:hidden"
            >
              <Menu size={24} />
            </button>
            <h2 className="text-xl font-display font-bold text-slate-800">
              {navItems.find(i => i.path === location.pathname)?.label || 'Dashboard'}
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-sm font-bold text-slate-900">Administrator</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider">Awareness Africa</span>
            </div>
            <div className="w-10 h-10 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent border border-brand-accent/20">
              <Users size={20} />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
