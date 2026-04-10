import React, { useState } from 'react';
import { Search, Download, Send, Users, UserCheck, UserX, Clock } from 'lucide-react';
import StatCard from '../components/StatCard';
import { workers } from '../data';

const statusConfig = {
  'on-time': { label: '✅ On Time', className: 'text-sage' },
  'late': { label: '⚠️ Late', className: 'text-sand' },
  'absent': { label: '❌ Absent', className: 'text-terracotta' },
};

export default function Attendance({ showToast }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [dateStr] = useState('2026-04-10');

  const filtered = workers.filter((w) => {
    if (!searchQuery) return true;
    return (
      w.name.includes(searchQuery) ||
      w.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.vehicle.toString().includes(searchQuery)
    );
  });

  const onTime = workers.filter(w => w.status === 'on-time').length;
  const late = workers.filter(w => w.status === 'late').length;
  const absent = workers.filter(w => w.status === 'absent').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in-up">
        <div>
          <h2 className="text-2xl font-bold text-white">Attendance & Workers</h2>
          <p className="text-dark-text-muted text-sm mt-1">Morning Shift · {dateStr}</p>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="date"
            defaultValue={dateStr}
            className="bg-dark-card border border-dark-border rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-terracotta/50 transition-colors"
          />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} label="Total Workers" value="1,200" color="blue" delay={50} />
        <StatCard icon={UserCheck} label="Checked In" value={onTime.toLocaleString()} subValue={`${((onTime / 30) * 100).toFixed(0)}% of sample`} color="green" delay={100} />
        <StatCard icon={UserX} label="Absent" value={absent.toString()} color="orange" delay={150} />
        <StatCard icon={Clock} label="Late" value={late.toString()} subValue="avg 14 min" color="gold" delay={200} />
      </div>

      {/* Actions Row */}
      <div className="flex flex-col md:flex-row gap-3 animate-fade-in-up stagger-1">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-text-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search worker by name..."
            className="w-full bg-dark-card border border-dark-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-dark-text-muted focus:outline-none focus:border-terracotta/50 transition-colors"
          />
        </div>
        <button
          onClick={() => showToast('Report downloaded successfully')}
          className="flex items-center gap-2 px-4 py-2.5 bg-dark-card border border-dark-border rounded-lg text-sm text-white hover:bg-dark-card-hover transition-colors"
        >
          <Download size={16} />
          Export Attendance Report
        </button>
        <button
          onClick={() => showToast('Synced with HR successfully')}
          className="flex items-center gap-2 px-4 py-2.5 bg-terracotta text-white rounded-lg text-sm font-medium hover:bg-terracotta/90 transition-colors"
        >
          <Send size={16} />
          Send to HR System
        </button>
      </div>

      {/* Table */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden animate-fade-in-up stagger-2">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-border">
                <th className="text-left p-4 text-dark-text-muted font-medium text-xs uppercase tracking-wider">Name</th>
                <th className="text-center p-4 text-dark-text-muted font-medium text-xs uppercase tracking-wider">Vehicle #</th>
                <th className="text-left p-4 text-dark-text-muted font-medium text-xs uppercase tracking-wider hidden md:table-cell">Pickup Point</th>
                <th className="text-left p-4 text-dark-text-muted font-medium text-xs uppercase tracking-wider hidden md:table-cell">Check-in Time</th>
                <th className="text-left p-4 text-dark-text-muted font-medium text-xs uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((w) => {
                const sc = statusConfig[w.status];
                return (
                  <tr key={w.id} className="border-b border-dark-border/50 hover:bg-dark-card-hover transition-colors">
                    <td className="p-4">
                      <div>
                        <p className="text-white font-medium">{w.nameEn}</p>
                        <p className="text-xs text-dark-text-muted">{w.name}</p>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-dark-bg text-dark-text font-semibold text-xs">
                        {w.vehicle}
                      </span>
                    </td>
                    <td className="p-4 hidden md:table-cell text-dark-text">{w.pickup}</td>
                    <td className="p-4 hidden md:table-cell text-dark-text">{w.checkIn || '—'}</td>
                    <td className="p-4">
                      <span className={`text-sm font-medium ${sc.className}`}>
                        {sc.label}
                        {w.status === 'late' && w.lateMin && (
                          <span className="ml-1 text-xs opacity-70">(+{w.lateMin} min)</span>
                        )}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-dark-border text-center">
          <p className="text-xs text-dark-text-muted">
            Showing {filtered.length} of {workers.length} workers in sample · Full dataset: 1,200 workers
          </p>
        </div>
      </div>
    </div>
  );
}
