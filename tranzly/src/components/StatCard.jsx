import React, { useState, useEffect } from 'react';

export default function StatCard({ icon: Icon, label, value, subValue, color, pulse, delay = 0 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const colorMap = {
    green: 'from-sage/20 to-sage/5 border-sage/20',
    blue: 'from-teal/20 to-teal/5 border-teal/20',
    orange: 'from-terracotta/20 to-terracotta/5 border-terracotta/20',
    gold: 'from-sand/20 to-sand/5 border-sand/20',
  };

  const iconColorMap = {
    green: 'text-sage',
    blue: 'text-teal',
    orange: 'text-terracotta',
    gold: 'text-sand',
  };

  return (
    <div
      className={`bg-gradient-to-br ${colorMap[color]} border rounded-xl p-4 md:p-5 transition-all duration-500 hover:scale-[1.02] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs md:text-sm text-dark-text-muted font-medium">{label}</p>
          <p className="text-2xl md:text-3xl font-bold text-white mt-1 animate-count-up">{value}</p>
          {subValue && (
            <p className="text-xs text-dark-text-muted mt-1">{subValue}</p>
          )}
        </div>
        <div className={`p-2.5 rounded-lg bg-dark-bg/30 ${iconColorMap[color]}`}>
          {pulse ? (
            <div className="relative">
              <Icon size={22} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-sage rounded-full animate-pulse-green" />
            </div>
          ) : (
            <Icon size={22} />
          )}
        </div>
      </div>
    </div>
  );
}
