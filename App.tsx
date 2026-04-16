import React, { useState, useEffect } from 'react';
import { 
  Building2, Activity, Users, Zap, ShieldAlert,
  Search, Bell, Map, Radio, Server, Fan, ChevronDown, Network,
  Car, Coins, TrendingUp, Megaphone,
  ShieldCheck, Wrench, Clock, Timer, Gauge, MapPin, CircleDollarSign
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, 
  BarChart, Bar, Legend, PieChart, Pie, Cell, LineChart, Line, ComposedChart
} from 'recharts';

import TechCard from './components/TechCard';
import RevenueAnalysis from './components/RevenueAnalysis';
import ArrearsAnalysis from './components/ArrearsAnalysis';
import OperationalQuality from './components/OperationalQuality';
import ProjectFinanceTable from './components/ProjectFinanceTable';
import CityCarousel from './components/CityCarousel';
import CenterMetrics from './components/CenterMetrics';
import ParkingInfo from './components/ParkingInfo';
import { MOCK_DASHBOARD_DATA } from './constants';
import { DashboardData } from './types';

function App() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showRevenueOverlay, setShowRevenueOverlay] = useState(false);
  const [showRevenueDetailOverlay, setShowRevenueDetailOverlay] = useState(false);
  const [showQualityOverlay, setShowQualityOverlay] = useState(false);

  useEffect(() => {
    setData(MOCK_DASHBOARD_DATA);
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!data) return <div className="flex h-screen items-center justify-center bg-[#020617] text-cyan-500 font-mono tracking-widest">SYSTEM INITIALIZING...</div>;

  return (
    <div className="h-screen bg-[#060a16] text-slate-200 overflow-hidden flex flex-col font-sans selection:bg-cyan-500/30">
      
      {/* Enterprise Header */}
      <header className="flex-none h-20 relative bg-[#060a16] border-b border-slate-800/50 flex items-center justify-between px-8 z-50">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        
        {/* Left: Time & Date */}
        <div className="w-1/3 flex items-center gap-6">
           <div className="flex flex-col">
              <span className="text-2xl font-mono font-bold text-cyan-400 tracking-wider">
                {currentTime.toLocaleTimeString('en-GB', { hour12: false })}
              </span>
           </div>
           <div className="h-8 w-[1px] bg-slate-800"></div>
           <div className="flex flex-col justify-center font-mono">
              <span className="text-sm text-slate-400 uppercase tracking-widest mb-0.5">
                {currentTime.toLocaleDateString('zh-CN', { weekday: 'short' })}
              </span>
              <span className="text-sm text-slate-300 font-medium">
                {currentTime.toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')}
              </span>
           </div>
        </div>

        {/* Center: Main Title */}
        <div className="w-1/3 flex justify-center items-center relative">
           {/* Background Decoration */}
           <div className="absolute top-0 w-full h-full flex justify-center opacity-30 pointer-events-none">
              <div className="w-1/2 h-full bg-gradient-to-b from-cyan-900/40 to-transparent blur-xl"></div>
           </div>
           
           <h1 className="text-3xl font-extrabold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 via-cyan-200 to-white drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] relative z-10 text-center font-sans">
             数智化物管平台
           </h1>
        </div>

        {/* Right: Org Structure Switcher */}
        <div className="w-1/3 flex justify-end items-center">
           <div className="flex items-center gap-3 bg-slate-900/60 border border-slate-700/60 hover:border-cyan-500/50 transition-all rounded px-4 py-2 cursor-pointer group shadow-lg backdrop-blur-sm">
             <div className="p-1.5 bg-cyan-950/50 rounded border border-cyan-900/50">
               <Network size={16} className="text-cyan-400" />
             </div>
             <div className="flex flex-col text-right mr-2">
                <span className="text-sm text-slate-500 uppercase tracking-wider font-sans">当前组织</span>
                <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors font-sans">广晟城市服务</span>
             </div>
             <ChevronDown size={14} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
           </div>
        </div>
      </header>

      {/* Main Layout Grid */}
      <div className="flex-1 p-4 min-h-0 grid grid-cols-12 gap-4">
        
        {/* Left Column: KPI, WorkOrders, Parking (25%) */}
        <div className="col-span-12 xl:col-span-3 flex flex-col gap-4 min-h-0">
          
          {/* 1. Revenue Analysis - Expanded to 52% */}
          <div className="h-[52%]">
             <RevenueAnalysis 
               data={data} 
               onMetricClick={() => setShowRevenueOverlay(true)} 
               onDetailClick={() => setShowRevenueDetailOverlay(true)}
             />
          </div>

          {/* 2. Parking Info - Reduced to 48% */}
          <div className="h-[48%]">
             <ParkingInfo data={data} />
          </div>
        </div>

        {/* Center Column: Visual (Top) + AI & Events (Bottom) (50%) */}
        <div className="col-span-12 xl:col-span-6 flex flex-col gap-4 min-h-0 px-2">
           {/* NEW: Top Key Metrics HUD */}
           <CenterMetrics data={data} />

           {/* Middle: Digital Twin Visual */}
           <div className="flex-1 min-h-0">
             <CityCarousel 
               data={data.cityStats} 
               revenueTrend={data.revenueTrend12Months}
               revenueItems={data.detailedRevenue}
               qualityTrend={data.qualityTrend12Months}
               showRevenueOverlay={showRevenueOverlay}
               showRevenueDetailOverlay={showRevenueDetailOverlay}
               showQualityOverlay={showQualityOverlay}
               onCloseOverlay={() => {
                 setShowRevenueOverlay(false);
                 setShowRevenueDetailOverlay(false);
                 setShowQualityOverlay(false);
               }}
             />
           </div>

           {/* Bottom: Operational Quality Monitoring - 38% (Moved from Left Top) */}
           <div className="h-[38%]">
              <OperationalQuality 
                data={data} 
                onMetricClick={() => setShowQualityOverlay(true)}
              />
           </div>
        </div>

        {/* Right Column: Revenue, Collection, Ticker (25%) */}
        <div className="col-span-12 xl:col-span-3 flex flex-col gap-4 min-h-0">
           
           {/* 1. Arrears Analysis - Height 32% (Moved from Left Top) */}
           <div className="h-[32%]">
             <ArrearsAnalysis data={data} />
           </div>

           {/* 2. Project Finance Table - Flex-1 to fill remaining height */}
           <ProjectFinanceTable data={data} />

        </div>

      </div>
    </div>
  );
}

export default App;