import React, { useState } from 'react';
import { Search, X, MapPin, Clock, Users, ChevronRight } from 'lucide-react';
import { vehicles, routePickupPoints } from '../data';

const statusConfig = {
  'on-route': { label: 'On Route', bg: 'bg-sage/15', text: 'text-sage', border: 'border-sage/30' },
  'completed': { label: 'Completed', bg: 'bg-teal/15', text: 'text-teal', border: 'border-teal/30' },
  'delayed': { label: 'Delayed', bg: 'bg-terracotta/15', text: 'text-terracotta', border: 'border-terracotta/30' },
  'at-pickup': { label: 'At Pickup', bg: 'bg-sand/15', text: 'text-sand', border: 'border-sand/30' },
  'not-started': { label: 'Not Started', bg: 'bg-dark-text-muted/10', text: 'text-dark-text-muted', border: 'border-dark-text-muted/20' },
};

const filters = ['All', 'On Route', 'Delayed', 'Completed', 'At Pickup'];
const filterMap = { 'All': null, 'On Route': 'on-route', 'Delayed': 'delayed', 'Completed': 'completed', 'At Pickup': 'at-pickup' };

export default function Fleet() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const filtered = vehicles.filter((v) => {
    const matchesFilter = activeFilter === 'All' || v.status === filterMap[activeFilter];
    const matchesSearch = !searchQuery ||
      v.id.toString().includes(searchQuery) ||
      v.driver.includes(searchQuery) ||
      v.driverEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.route.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getOccupancyColor = (pct) => {
    if (pct >= 80) return 'bg-sage';
    if (pct >= 50) return 'bg-sand';
    return 'bg-terracotta';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in-up">
        <div>
          <h2 className="text-2xl font-bold text-white">Fleet & Routes</h2>
          <p className="text-dark-text-muted text-sm mt-1">22 vehicles across 8 routes</p>
        </div>
        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-text-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search vehicle or driver..."
            className="w-full bg-dark-card border border-dark-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-dark-text-muted focus:outline-none focus:border-terracotta/50 transition-colors"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 animate-fade-in-up stagger-1">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeFilter === f
                ? 'bg-terracotta text-white'
                : 'bg-dark-card text-dark-text-muted hover:bg-dark-card-hover hover:text-white border border-dark-border'
            }`}
          >
            {f}
            {f !== 'All' && (
              <span className="ml-2 text-xs opacity-70">
                ({vehicles.filter(v => v.status === filterMap[f]).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden animate-fade-in-up stagger-2">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-border">
                <th className="text-left p-4 text-dark-text-muted font-medium text-xs uppercase tracking-wider">Vehicle</th>
                <th className="text-left p-4 text-dark-text-muted font-medium text-xs uppercase tracking-wider">Driver</th>
                <th className="text-left p-4 text-dark-text-muted font-medium text-xs uppercase tracking-wider hidden md:table-cell">Route</th>
                <th className="text-left p-4 text-dark-text-muted font-medium text-xs uppercase tracking-wider">Status</th>
                <th className="text-center p-4 text-dark-text-muted font-medium text-xs uppercase tracking-wider hidden lg:table-cell">Workers</th>
                <th className="text-left p-4 text-dark-text-muted font-medium text-xs uppercase tracking-wider hidden lg:table-cell">Departure</th>
                <th className="text-left p-4 text-dark-text-muted font-medium text-xs uppercase tracking-wider hidden lg:table-cell">ETA</th>
                <th className="text-left p-4 text-dark-text-muted font-medium text-xs uppercase tracking-wider hidden md:table-cell">Occupancy</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((v) => {
                const status = statusConfig[v.status];
                return (
                  <tr
                    key={v.id}
                    onClick={() => setSelectedVehicle(v)}
                    className="border-b border-dark-border/50 hover:bg-dark-card-hover cursor-pointer transition-colors"
                  >
                    <td className="p-4">
                      <span className="font-semibold text-white">#{v.id}</span>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="text-white">{v.driverEn}</p>
                        <p className="text-xs text-dark-text-muted">{v.driver}</p>
                      </div>
                    </td>
                    <td className="p-4 hidden md:table-cell text-dark-text">{v.route}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${status.bg} ${status.text} border ${status.border}`}>
                        {status.label}
                        {v.delayMin && <span className="ml-1">(+{v.delayMin}m)</span>}
                      </span>
                    </td>
                    <td className="p-4 text-center hidden lg:table-cell text-dark-text">{v.workers}/{v.capacity}</td>
                    <td className="p-4 hidden lg:table-cell text-dark-text">{v.departure}</td>
                    <td className="p-4 hidden lg:table-cell text-dark-text">{v.eta}</td>
                    <td className="p-4 hidden md:table-cell">
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-dark-bg rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${getOccupancyColor(v.occupancy)} progress-bar-fill`}
                            style={{ width: `${v.occupancy}%` }}
                          />
                        </div>
                        <span className="text-xs text-dark-text-muted w-8">{v.occupancy}%</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <ChevronRight size={16} className="text-dark-text-muted" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Route Detail Modal */}
      {selectedVehicle && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedVehicle(null)} />
          <div className="relative bg-[#111827] border border-dark-border rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl animate-fade-in">
            {/* Header */}
            <div className="p-6 border-b border-dark-border flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Vehicle #{selectedVehicle.id}</h3>
                <p className="text-sm text-dark-text-muted mt-1">{selectedVehicle.route}</p>
              </div>
              <button
                onClick={() => setSelectedVehicle(null)}
                className="p-2 rounded-lg hover:bg-dark-card text-dark-text-muted hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Info */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-card rounded-lg p-3">
                  <p className="text-xs text-dark-text-muted">Driver</p>
                  <p className="text-sm font-semibold text-white mt-1">{selectedVehicle.driverEn}</p>
                  <p className="text-xs text-dark-text-muted">{selectedVehicle.driver}</p>
                </div>
                <div className="bg-dark-card rounded-lg p-3">
                  <p className="text-xs text-dark-text-muted">Status</p>
                  <span className={`inline-flex items-center px-2.5 py-1 mt-1 rounded-full text-xs font-medium ${statusConfig[selectedVehicle.status].bg} ${statusConfig[selectedVehicle.status].text}`}>
                    {statusConfig[selectedVehicle.status].label}
                  </span>
                </div>
                <div className="bg-dark-card rounded-lg p-3">
                  <p className="text-xs text-dark-text-muted flex items-center gap-1"><Users size={12} /> Workers</p>
                  <p className="text-sm font-semibold text-white mt-1">{selectedVehicle.workers}/{selectedVehicle.capacity}</p>
                </div>
                <div className="bg-dark-card rounded-lg p-3">
                  <p className="text-xs text-dark-text-muted flex items-center gap-1"><Clock size={12} /> Schedule</p>
                  <p className="text-sm font-semibold text-white mt-1">{selectedVehicle.departure} → {selectedVehicle.eta}</p>
                </div>
              </div>

              {/* Pickup Points */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <MapPin size={14} className="text-terracotta" /> Pickup Points
                </h4>
                <div className="space-y-0">
                  {(routePickupPoints[selectedVehicle.route] || routePickupPoints['Route A - Zagazig']).map((point, idx, arr) => (
                    <div key={idx} className="flex items-start gap-3">
                      {/* Timeline */}
                      <div className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full border-2 ${
                          idx === arr.length - 1 ? 'bg-terracotta border-terracotta' : 'bg-sage border-sage'
                        }`} />
                        {idx < arr.length - 1 && (
                          <div className="w-0.5 h-12 bg-dark-border" />
                        )}
                      </div>
                      {/* Content */}
                      <div className="pb-4 flex-1">
                        <p className="text-sm font-medium text-white">{point.name}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-dark-text-muted">Scheduled: {point.time}</span>
                          <span className={`text-xs ${point.actual <= point.time ? 'text-sage' : 'text-terracotta'}`}>
                            Actual: {point.actual}
                          </span>
                          <span className="text-xs text-dark-text-muted">{point.workers} workers</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Occupancy Bar */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-dark-text-muted">Occupancy</span>
                  <span className="text-xs font-semibold text-white">{selectedVehicle.occupancy}%</span>
                </div>
                <div className="w-full h-3 bg-dark-bg rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${getOccupancyColor(selectedVehicle.occupancy)} progress-bar-fill`}
                    style={{ width: `${selectedVehicle.occupancy}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function getOccupancyColor(pct) {
  if (pct >= 80) return 'bg-sage';
  if (pct >= 50) return 'bg-sand';
  return 'bg-terracotta';
}
