import React, { useState, useCallback } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Fleet from './pages/Fleet';
import Attendance from './pages/Attendance';
import Analytics from './pages/Analytics';
import Billing from './pages/Billing';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Toast from './components/Toast';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  const navigate = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  if (currentPage === 'login') {
    return <Login onLogin={() => navigate('dashboard')} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'fleet': return <Fleet />;
      case 'attendance': return <Attendance showToast={showToast} />;
      case 'analytics': return <Analytics showToast={showToast} />;
      case 'billing': return <Billing showToast={showToast} />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-dark-bg text-dark-text overflow-hidden" style={{ fontFamily: '"Segoe UI", Tahoma, sans-serif' }}>
      <Sidebar
        currentPage={currentPage}
        navigate={navigate}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="page-enter">
            {renderPage()}
          </div>
        </main>
      </div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      {/* Demo Mode Badge */}
      <div className="fixed bottom-4 right-4 z-50 bg-terracotta/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
        Demo Mode
      </div>
    </div>
  );
}

export default App;
