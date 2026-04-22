import { useEffect, useMemo, useState } from 'react';
import { generateMockData } from './constants';
import { DashboardData, TimeRange } from './types';
import KPIBar from './components/KPIBar';
import RevenueAnalysis from './components/RevenueAnalysis';
import ParkMap from './components/ParkMap';
import ParkingInfo from './components/ParkingInfo';
import WorkOrders from './components/WorkOrders';
import PatrolInspection from './components/PatrolInspection';
import DeviceStatus from './components/DeviceStatus';

export default function App() {
  const [range, setRange] = useState('today' as TimeRange);
  const [data, setData] = useState(null as DashboardData | null);
  const [loading, setLoading] = useState(true);
  const [revenueType, setRevenueType] = useState(null as string | null);
  const [activeArea, setActiveArea] = useState(null as string | null);
  const [selectedGarage, setSelectedGarage] = useState(null as string | null);
  const [workOrderStatus, setWorkOrderStatus] = useState('all' as 'all' | 'pending' | 'processing' | 'done');

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setData(generateMockData(range));
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [range]);

  useEffect(() => {
    const timer = setInterval(() => {
      setData(generateMockData(range));
    }, 5000);
    return () => clearInterval(timer);
  }, [range]);

  const titleTime = useMemo(() => new Date().toLocaleString('zh-CN', { hour12: false }), [data]);

  if (loading || !data) {
    return <div className="loading">物业服务管理驾驶舱加载中...</div>;
  }

  return (
    <main className="dashboard-scale">
      <div className="dashboard" role="application">
        <header className="topbar">
          <h1>物业服务管理驾驶舱 Demo</h1>
          <div className="topbar-right">
            <div className="segmented">
              {(['today', 'week', 'month'] as const).map((item) => (
                <button key={item} className={range === item ? 'active' : ''} onClick={() => setRange(item)}>
                  {item === 'today' ? '今日' : item === 'week' ? '本周' : '本月'}
                </button>
              ))}
            </div>
            <span className="time">{titleTime}</span>
          </div>
        </header>

        <KPIBar data={data.kpis} />

        <section className="middle-grid">
          <div className="left-col">
            <RevenueAnalysis
              range={range}
              trend={data.revenueTrend}
              structure={data.revenueStructure}
              selectedType={revenueType}
              onRangeChange={setRange}
              onSelectType={(value) => setRevenueType(revenueType === value ? null : value)}
            />
          </div>

          <div className="center-col">
            <ParkMap
              areas={data.mapAreas}
              activeArea={activeArea}
              highlightedGarage={selectedGarage}
              onAreaClick={(id) => setActiveArea(activeArea === id ? null : id)}
            />
          </div>

          <div className="right-col">
            <ParkingInfo
              summary={data.parkingSummary}
              trend={data.parkingTrend}
              rank={data.garageRank}
              selectedGarage={selectedGarage}
              onSelectGarage={(id) => setSelectedGarage(selectedGarage === id ? null : id)}
            />
          </div>
        </section>

        <section className="bottom-grid">
          <WorkOrders list={data.workOrders} status={workOrderStatus} onStatusChange={setWorkOrderStatus} />
          <PatrolInspection completion={data.patrolCompletion} route={data.patrolRoute} records={data.abnormalRecords} />
          <DeviceStatus onlineRate={data.deviceOnlineRate} alarmCount={data.alarmCount} alarmTop={data.alarmTop} />
        </section>
      </div>
    </main>
  );
}
