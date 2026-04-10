import React from 'react';
import { LayoutDashboard, Bus, Users, BarChart3, Wallet, Settings, ChevronLeft, ChevronRight } from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'fleet', label: 'Fleet & Routes', icon: Bus },
  { id: 'attendance', label: 'Attendance', icon: Users },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'billing', label: 'Billing', icon: Wallet },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ currentPage, navigate, isOpen, onToggle }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onToggle}
        />
      )}

      <aside
        className={`fixed md:relative z-50 h-full bg-[#111827] border-r border-dark-border flex flex-col transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-0 md:w-20'
        } ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-4 border-b border-dark-border min-h-[64px]">
          {isOpen && (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-terracotta to-[#c4644a] rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
                T
              </div>
              <div>
                <h1 className="text-lg font-bold text-white tracking-tight">Tranzly</h1>
                <p className="text-[10px] text-dark-text-muted -mt-0.5">Smart Transit, Simply</p>
              </div>
            </div>
          )}
          <button
            onClick={onToggle}
            className="hidden md:flex items-center justify-center w-7 h-7 rounded-md hover:bg-dark-card text-dark-text-muted hover:text-white transition-colors"
          >
            {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            const isDisabled = item.id === 'settings';
            return (
              <button
                key={item.id}
                onClick={() => !isDisabled && navigate(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-terracotta/15 text-terracotta'
                    : isDisabled
                    ? 'text-dark-text-muted/50 cursor-not-allowed'
                    : 'text-dark-text-muted hover:bg-dark-card hover:text-white'
                }`}
                title={!isOpen ? item.label : undefined}
              >
                <Icon
                  size={20}
                  className={`flex-shrink-0 ${isActive ? 'text-terracotta' : ''}`}
                />
                {isOpen && (
                  <span className={`text-sm font-medium ${isActive ? 'text-terracotta' : ''}`}>
                    {item.label}
                  </span>
                )}
                {isActive && isOpen && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-terracotta" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom section */}
        {isOpen && (
          <div className="p-4 border-t border-dark-border">
            <div className="bg-dark-card rounded-lg p-3">
              <p className="text-xs text-dark-text-muted">Current Plan</p>
              <p className="text-sm font-semibold text-white mt-0.5">ذكاء Plan</p>
              <p className="text-xs text-sage mt-1">22 Vehicles Active</p>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
