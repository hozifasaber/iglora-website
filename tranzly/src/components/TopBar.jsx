import React, { useState } from 'react';
import { Bell, Menu, ChevronDown } from 'lucide-react';

export default function TopBar({ onToggleSidebar }) {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, text: 'Vehicle #3 delayed by 8 minutes', time: '2 min ago', type: 'warning' },
    { id: 2, text: 'Attendance report ready for download', time: '15 min ago', type: 'info' },
    { id: 3, text: 'Driver Mahmoud — harsh braking alert', time: '20 min ago', type: 'error' },
  ];

  return (
    <header className="h-16 bg-[#111827] border-b border-dark-border flex items-center justify-between px-4 md:px-6 flex-shrink-0">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-2 rounded-lg hover:bg-dark-card text-dark-text-muted hover:text-white transition-colors"
        >
          <Menu size={20} />
        </button>
        <div className="hidden md:block">
          <p className="text-sm text-dark-text-muted">
            Cairo Steel Manufacturing · <span className="text-xs">مصنع القاهرة للصلب</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-lg hover:bg-dark-card text-dark-text-muted hover:text-white transition-colors"
          >
            <Bell size={20} />
            <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-terracotta text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          {showNotifications && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
              <div className="absolute right-0 top-12 w-80 bg-[#111827] border border-dark-border rounded-xl shadow-2xl z-50 animate-fade-in">
                <div className="p-4 border-b border-dark-border">
                  <h3 className="font-semibold text-white">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((n) => (
                    <div key={n.id} className="p-4 border-b border-dark-border/50 hover:bg-dark-card/50 transition-colors cursor-pointer">
                      <p className="text-sm text-dark-text">{n.text}</p>
                      <p className="text-xs text-dark-text-muted mt-1">{n.time}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center">
                  <button className="text-xs text-terracotta hover:text-terracotta/80 font-medium">
                    View All Notifications
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* User */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-navy to-teal flex items-center justify-center text-white font-semibold text-sm">
            A
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-white group-hover:text-terracotta transition-colors">Ahmed</p>
            <p className="text-xs text-dark-text-muted">HR Manager</p>
          </div>
          <ChevronDown size={14} className="hidden md:block text-dark-text-muted" />
        </div>
      </div>
    </header>
  );
}
