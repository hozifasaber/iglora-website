import React, { useState, useEffect, useRef } from 'react';
import { Bus, Users, Clock, TrendingDown } from 'lucide-react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import StatCard from '../components/StatCard';
import { vehicles, vehiclePositions, liveFeedItems, additionalFeedItems } from '../data';

const statusColorMap = {
  'on-route': '#81B29A',
  'at-pickup': '#065A82',
  'delayed': '#E07A5F',
  'completed': '#4a8a6f',
};

export default function Dashboard() {
  const [feedItems, setFeedItems] = useState(liveFeedItems);
  const [feedIndex, setFeedIndex] = useState(0);
  const feedRef = useRef(null);

  // Add new feed items periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setFeedIndex((prev) => {
        const next = prev + 1;
        if (next <= additionalFeedItems.length) {
          const newItem = {
            ...additionalFeedItems[next - 1],
            id: Date.now(),
          };
          setFeedItems((items) => [newItem, ...items]);
          return next;
        }
        return prev;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll feed
  useEffect(() => {
    if (feedRef.current) {
      feedRef.current.scrollTop = 0;
    }
  }, [feedItems]);

  const activeVehicles = vehicles.filter(v => ['on-route', 'at-pickup', 'delayed', 'completed'].includes(v.status));
  const totalOnBoard = vehicles.reduce((sum, v) => sum + v.workers, 0);

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="animate-fade-in-up">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Good morning, Ahmed <span className="inline-block animate-bounce">👋</span>
        </h2>
        <p className="text-dark-text-muted mt-1">Cairo Steel Manufacturing · 10th of Ramadan City</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Bus}
          label="Active Vehicles"
          value={`${activeVehicles.length}/22`}
          subValue="4 not yet started"
          color="green"
          pulse
          delay={50}
        />
        <StatCard
          icon={Users}
          label="Workers On Board"
          value={totalOnBoard.toLocaleString()}
          subValue="of 1,200 total"
          color="blue"
          delay={100}
        />
        <StatCard
          icon={Clock}
          label="On-Time Rate"
          value="94.2%"
          subValue="↑ 2.1% from yesterday"
          color="green"
          delay={150}
        />
        <StatCard
          icon={TrendingDown}
          label="Today's Savings"
          value="EGP 2,340"
          subValue="vs. old transport method"
          color="gold"
          delay={200}
        />
      </div>

      {/* Map and Live Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Map */}
        <div className="lg:col-span-2 bg-dark-card rounded-xl border border-dark-border overflow-hidden animate-fade-in-up stagger-2">
          <div className="p-4 border-b border-dark-border flex items-center justify-between">
            <h3 className="font-semibold text-white">Live Fleet Map</h3>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-sage" /> On Route
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-teal" /> At Pickup
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-terracotta" /> Delayed
              </span>
            </div>
          </div>
          <div className="h-[400px] md:h-[450px]">
            <MapContainer
              center={[30.2965, 31.7614]}
              zoom={11}
              style={{ height: '100%', width: '100%' }}
              zoomControl={true}
              attributionControl={true}
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
              />
              {vehiclePositions.map((vp) => {
                const vehicle = vehicles.find(v => v.id === vp.id);
                return (
                  <CircleMarker
                    key={vp.id}
                    center={[vp.lat, vp.lng]}
                    radius={8}
                    pathOptions={{
                      fillColor: statusColorMap[vp.status] || '#81B29A',
                      fillOpacity: 0.9,
                      color: '#fff',
                      weight: 2,
                      opacity: 0.6,
                    }}
                  >
                    <Tooltip direction="top" offset={[0, -10]} opacity={0.95}>
                      <div className="text-xs">
                        <p className="font-bold">Vehicle #{vp.id}</p>
                        {vehicle && (
                          <>
                            <p>{vehicle.driver}</p>
                            <p>{vehicle.route}</p>
                            <p>{vehicle.workers}/{vehicle.capacity} workers</p>
                          </>
                        )}
                      </div>
                    </Tooltip>
                  </CircleMarker>
                );
              })}

              {/* Factory marker */}
              <CircleMarker
                center={[30.2965, 31.7614]}
                radius={12}
                pathOptions={{
                  fillColor: '#E07A5F',
                  fillOpacity: 1,
                  color: '#fff',
                  weight: 3,
                  opacity: 0.8,
                }}
              >
                <Tooltip direction="top" offset={[0, -14]} permanent>
                  <span className="font-bold text-xs">🏭 Cairo Steel</span>
                </Tooltip>
              </CircleMarker>
            </MapContainer>
          </div>
        </div>

        {/* Live Feed */}
        <div className="bg-dark-card rounded-xl border border-dark-border flex flex-col animate-fade-in-up stagger-3">
          <div className="p-4 border-b border-dark-border flex items-center justify-between">
            <h3 className="font-semibold text-white">Live Feed</h3>
            <span className="flex items-center gap-1.5 text-xs text-sage">
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              Live
            </span>
          </div>
          <div
            ref={feedRef}
            className="flex-1 overflow-y-auto max-h-[420px] divide-y divide-dark-border/50"
          >
            {feedItems.map((item, idx) => (
              <div
                key={item.id}
                className={`p-4 hover:bg-dark-card-hover transition-colors ${
                  idx === 0 && feedIndex > 0 ? 'animate-slide-in-right bg-dark-card-hover' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-dark-text leading-relaxed">{item.message}</p>
                    <p className="text-xs text-dark-text-muted mt-1">{item.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
