import React, { useState } from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { TrendingDown, Clock, Fuel, Leaf, Lightbulb, Check, X } from 'lucide-react';
import { dailyOnTimeData, costPerWorkerData, vehicleUtilizationData } from '../data';

const dateRanges = ['Last 7 Days', 'Last 30 Days', 'This Quarter'];

const CustomTooltipStyle = {
  backgroundColor: '#1a2332',
  border: '1px solid #2a3a4e',
  borderRadius: '8px',
  padding: '10px 14px',
  color: '#e1e8f0',
  fontSize: '12px',
};

export default function Analytics({ showToast }) {
  const [dateRange, setDateRange] = useState('Last 30 Days');
  const [suggestions, setSuggestions] = useState([
    { id: 1, text: 'Merge Route 3 and Route 7', detail: 'Saves 1 vehicle = EGP 12,000/month', applied: false, dismissed: false },
    { id: 2, text: 'Shift Vehicle #14 to morning peak', detail: 'Increases occupancy from 45% to 82%', applied: false, dismissed: false },
    { id: 3, text: 'Relocate Pickup Point C 300m east', detail: 'Reduces avg wait time by 6 min', applied: false, dismissed: false },
  ]);

  const handleApply = (id) => {
    setSuggestions(prev => prev.map(s => s.id === id ? { ...s, applied: true } : s));
    showToast('Optimization applied successfully');
  };

  const handleDismiss = (id) => {
    setSuggestions(prev => prev.map(s => s.id === id ? { ...s, dismissed: true } : s));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in-up">
        <div>
          <h2 className="text-2xl font-bold text-white">Analytics & Reports</h2>
          <p className="text-dark-text-muted text-sm mt-1">Performance insights and optimization</p>
        </div>
        <div className="flex items-center gap-2">
          {dateRanges.map((dr) => (
            <button
              key={dr}
              onClick={() => setDateRange(dr)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                dateRange === dr
                  ? 'bg-terracotta text-white'
                  : 'bg-dark-card text-dark-text-muted hover:bg-dark-card-hover hover:text-white border border-dark-border'
              }`}
            >
              {dr}
            </button>
          ))}
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* On-Time Rate Line Chart */}
        <div className="bg-dark-card rounded-xl border border-dark-border p-5 animate-fade-in-up stagger-1">
          <h3 className="text-sm font-semibold text-white mb-4">Daily On-Time Rate %</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyOnTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a3a4e" />
                <XAxis
                  dataKey="day"
                  tick={{ fontSize: 10, fill: '#8899aa' }}
                  axisLine={{ stroke: '#2a3a4e' }}
                  tickLine={false}
                  interval={4}
                />
                <YAxis
                  domain={[82, 98]}
                  tick={{ fontSize: 10, fill: '#8899aa' }}
                  axisLine={{ stroke: '#2a3a4e' }}
                  tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip
                  contentStyle={CustomTooltipStyle}
                  formatter={(value) => [`${value}%`, 'On-Time Rate']}
                  labelFormatter={(label) => `Day ${label}`}
                />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#81B29A"
                  strokeWidth={2.5}
                  dot={false}
                  activeDot={{ r: 5, fill: '#81B29A', stroke: '#fff', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-sage mt-2">↑ Trending up from 87% to 94.2%</p>
        </div>

        {/* Cost per Worker Bar Chart */}
        <div className="bg-dark-card rounded-xl border border-dark-border p-5 animate-fade-in-up stagger-2">
          <h3 className="text-sm font-semibold text-white mb-4">Cost per Worker (EGP)</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={costPerWorkerData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a3a4e" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 11, fill: '#8899aa' }}
                  axisLine={{ stroke: '#2a3a4e' }}
                  tickLine={false}
                />
                <YAxis
                  domain={[100, 160]}
                  tick={{ fontSize: 10, fill: '#8899aa' }}
                  axisLine={{ stroke: '#2a3a4e' }}
                  tickLine={false}
                  tickFormatter={(v) => `${v}`}
                />
                <Tooltip
                  contentStyle={CustomTooltipStyle}
                  formatter={(value) => [`EGP ${value}`, 'Cost/Worker']}
                />
                <Bar dataKey="cost" radius={[6, 6, 0, 0]} maxBarSize={40}>
                  {costPerWorkerData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === costPerWorkerData.length - 1 ? '#81B29A' : '#065A82'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-sage mt-2">↓ 18.6% reduction over 4 months</p>
        </div>

        {/* Vehicle Utilization Pie Chart */}
        <div className="bg-dark-card rounded-xl border border-dark-border p-5 animate-fade-in-up stagger-3">
          <h3 className="text-sm font-semibold text-white mb-4">Vehicle Utilization</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={vehicleUtilizationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={4}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {vehicleUtilizationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={CustomTooltipStyle}
                  formatter={(value) => [`${value}%`, '']}
                />
                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  iconSize={8}
                  formatter={(value) => (
                    <span style={{ color: '#8899aa', fontSize: '11px' }}>{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-sage mt-2">65% of vehicles at high utilization</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up stagger-2">
        <MetricCard
          icon={TrendingDown}
          label="Monthly Transport Cost"
          value="EGP 142,000"
          change="↓ 18% from last month"
          changeColor="text-sage"
        />
        <MetricCard
          icon={Clock}
          label="Avg Trip Duration"
          value="38 min"
          change="↓ 4 min improvement"
          changeColor="text-sage"
        />
        <MetricCard
          icon={Fuel}
          label="Fuel Saved (est.)"
          value="EGP 23,400"
          change="This month"
          changeColor="text-sand"
        />
        <MetricCard
          icon={Leaf}
          label="CO₂ Reduced"
          value="1.2 tons"
          change="This month"
          changeColor="text-sage"
        />
      </div>

      {/* Route Optimization Suggestions */}
      <div className="animate-fade-in-up stagger-3">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Lightbulb size={18} className="text-sand" />
          Route Optimization Suggestions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {suggestions.map((s) => (
            <div
              key={s.id}
              className={`bg-dark-card rounded-xl border p-5 transition-all duration-300 ${
                s.applied
                  ? 'border-sage/40 bg-sage/5'
                  : s.dismissed
                  ? 'border-dark-border opacity-50'
                  : 'border-dark-border hover:border-sand/30'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${s.applied ? 'bg-sage/20 text-sage' : 'bg-sand/20 text-sand'}`}>
                  {s.applied ? <Check size={16} /> : <Lightbulb size={16} />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">{s.text}</p>
                  <p className="text-xs text-dark-text-muted mt-1">{s.detail}</p>
                </div>
              </div>
              {!s.applied && !s.dismissed && (
                <div className="flex items-center gap-2 mt-4">
                  <button
                    onClick={() => handleApply(s.id)}
                    className="flex-1 px-3 py-2 bg-sage/15 text-sage border border-sage/30 rounded-lg text-xs font-medium hover:bg-sage/25 transition-colors"
                  >
                    Apply
                  </button>
                  <button
                    onClick={() => handleDismiss(s.id)}
                    className="flex-1 px-3 py-2 bg-dark-bg text-dark-text-muted border border-dark-border rounded-lg text-xs font-medium hover:bg-dark-card-hover transition-colors"
                  >
                    Dismiss
                  </button>
                </div>
              )}
              {s.applied && (
                <p className="text-xs text-sage mt-3 font-medium">✓ Applied successfully</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricCard({ icon: Icon, label, value, change, changeColor }) {
  return (
    <div className="bg-dark-card rounded-xl border border-dark-border p-5 hover:border-dark-card-hover transition-all">
      <div className="flex items-center gap-2 mb-3">
        <Icon size={16} className="text-dark-text-muted" />
        <p className="text-xs text-dark-text-muted font-medium">{label}</p>
      </div>
      <p className="text-xl md:text-2xl font-bold text-white">{value}</p>
      <p className={`text-xs mt-1 ${changeColor}`}>{change}</p>
    </div>
  );
}
