import React from 'react';
import { Download, CheckCircle, Shield, TrendingUp, CreditCard } from 'lucide-react';

export default function Billing({ showToast }) {
  const invoices = [
    { period: 'Q1 2026', dateRange: 'Jan 1 - Mar 31, 2026', vehicles: 22, amount: '66,000', status: 'paid', current: true },
    { period: 'Q4 2025', dateRange: 'Oct 1 - Dec 31, 2025', vehicles: 22, amount: '66,000', status: 'paid', current: false },
    { period: 'Q3 2025', dateRange: 'Jul 1 - Sep 30, 2025', vehicles: 18, amount: '52,000', status: 'paid', current: false },
    { period: 'Q2 2025', dateRange: 'Apr 1 - Jun 30, 2025', vehicles: 18, amount: '52,000', status: 'paid', current: false },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in-up">
        <div>
          <h2 className="text-2xl font-bold text-white">Billing</h2>
          <p className="text-dark-text-muted text-sm mt-1">Manage your subscription and invoices</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-sand/15 border border-sand/30 text-sand rounded-lg text-sm font-semibold">
            <CreditCard size={16} />
            ذكاء Plan — 22 Vehicles
          </span>
        </div>
      </div>

      {/* Current Quarter Summary */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-6 animate-fade-in-up stagger-1">
        <div className="flex items-center gap-2 mb-4">
          <Shield size={18} className="text-sage" />
          <h3 className="text-lg font-semibold text-white">Current Quarter</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-xs text-dark-text-muted uppercase tracking-wider">Period</p>
            <p className="text-sm font-semibold text-white mt-1">Jan 1 – Mar 31, 2026</p>
          </div>
          <div>
            <p className="text-xs text-dark-text-muted uppercase tracking-wider">Total</p>
            <p className="text-sm font-semibold text-white mt-1">EGP 66,000</p>
            <p className="text-xs text-dark-text-muted mt-0.5">22 vehicles × EGP 1,000 × 3 months</p>
          </div>
          <div>
            <p className="text-xs text-dark-text-muted uppercase tracking-wider">Status</p>
            <span className="inline-flex items-center gap-1.5 mt-1 text-sm font-semibold text-sage">
              <CheckCircle size={14} />
              Paid
            </span>
          </div>
          <div>
            <p className="text-xs text-dark-text-muted uppercase tracking-wider">Next Billing</p>
            <p className="text-sm font-semibold text-white mt-1">Apr 1, 2026</p>
          </div>
        </div>
      </div>

      {/* Savings & ROI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-sage/15 to-sage/5 border border-sage/20 rounded-xl p-6 animate-fade-in-up stagger-2">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-sage/80 uppercase tracking-wider font-medium">Quarterly Savings</p>
              <p className="text-3xl font-bold text-white mt-2">EGP 87,600</p>
              <p className="text-sm text-sage mt-2">Tranzly saved you EGP 87,600 this quarter</p>
              <p className="text-xs text-dark-text-muted mt-1">Compared to previous transportation costs</p>
            </div>
            <div className="p-3 bg-sage/20 rounded-xl">
              <TrendingUp size={24} className="text-sage" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-sand/15 to-sand/5 border border-sand/20 rounded-xl p-6 animate-fade-in-up stagger-3">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-sand/80 uppercase tracking-wider font-medium">Return on Investment</p>
              <p className="text-3xl font-bold text-white mt-2">1.33x</p>
              <p className="text-sm text-sand mt-2">For every EGP 1 spent on Tranzly, you saved EGP 1.33</p>
              <p className="text-xs text-dark-text-muted mt-1">ROI improving month over month</p>
            </div>
            <div className="p-3 bg-sand/20 rounded-xl text-3xl">
              💰
            </div>
          </div>
        </div>
      </div>

      {/* Savings Breakdown Bar */}
      <div className="bg-dark-card rounded-xl border border-dark-border p-6 animate-fade-in-up stagger-3">
        <h3 className="text-sm font-semibold text-white mb-4">Savings Breakdown</h3>
        <div className="space-y-4">
          <SavingsRow label="Fuel Optimization" value="EGP 34,200" pct={39} color="bg-sage" />
          <SavingsRow label="Route Efficiency" value="EGP 28,400" pct={32} color="bg-teal" />
          <SavingsRow label="Vehicle Consolidation" value="EGP 18,000" pct={21} color="bg-sand" />
          <SavingsRow label="Reduced Overtime" value="EGP 7,000" pct={8} color="bg-terracotta" />
        </div>
      </div>

      {/* Invoice History */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden animate-fade-in-up stagger-4">
        <div className="p-5 border-b border-dark-border">
          <h3 className="text-sm font-semibold text-white">Invoice History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-border">
                <th className="text-left p-4 text-dark-text-muted font-medium text-xs uppercase tracking-wider">Period</th>
                <th className="text-left p-4 text-dark-text-muted font-medium text-xs uppercase tracking-wider hidden md:table-cell">Date Range</th>
                <th className="text-center p-4 text-dark-text-muted font-medium text-xs uppercase tracking-wider hidden md:table-cell">Vehicles</th>
                <th className="text-left p-4 text-dark-text-muted font-medium text-xs uppercase tracking-wider">Amount</th>
                <th className="text-left p-4 text-dark-text-muted font-medium text-xs uppercase tracking-wider">Status</th>
                <th className="p-4 text-dark-text-muted font-medium text-xs uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv, idx) => (
                <tr key={idx} className="border-b border-dark-border/50 hover:bg-dark-card-hover transition-colors">
                  <td className="p-4">
                    <span className="font-semibold text-white">{inv.period}</span>
                    {inv.current && (
                      <span className="ml-2 text-[10px] bg-terracotta/15 text-terracotta px-2 py-0.5 rounded-full font-medium">Current</span>
                    )}
                  </td>
                  <td className="p-4 hidden md:table-cell text-dark-text">{inv.dateRange}</td>
                  <td className="p-4 text-center hidden md:table-cell text-dark-text">{inv.vehicles}</td>
                  <td className="p-4 text-white font-medium">EGP {inv.amount}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 text-sage text-xs font-medium">
                      <CheckCircle size={12} /> Paid
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => showToast(`Invoice ${inv.period} downloaded`)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-dark-text-muted hover:text-white bg-dark-bg border border-dark-border rounded-lg hover:bg-dark-card-hover transition-colors"
                    >
                      <Download size={12} />
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SavingsRow({ label, value, pct, color }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-dark-text">{label}</span>
        <span className="text-sm font-semibold text-white">{value}</span>
      </div>
      <div className="w-full h-2.5 bg-dark-bg rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color} progress-bar-fill`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
