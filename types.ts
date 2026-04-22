export type TimeRange = 'today' | 'week' | 'month';

export interface KPIItem {
  key: string;
  title: string;
  value: number;
  unit: string;
  yoy: number;
  mom: number;
}

export interface RevenueTrendPoint {
  label: string;
  total: number;
  property: number;
  parking: number;
  other: number;
}

export interface RevenueStructureItem {
  name: string;
  value: number;
}

export interface ParkingTrendPoint {
  label: string;
  in: number;
  out: number;
}

export interface GarageRankItem {
  name: string;
  usage: number;
}

export interface MapArea {
  id: string;
  name: string;
  type: 'building' | 'parking';
  x: number;
  y: number;
  status: 'normal' | 'warning';
}

export interface WorkOrder {
  id: string;
  title: string;
  area: string;
  status: 'pending' | 'processing' | 'done';
  createTime: string;
}

export interface AbnormalRecord {
  id: string;
  type: string;
  area: string;
  time: string;
}

export interface AlarmItem {
  name: string;
  count: number;
}

export interface DashboardData {
  kpis: KPIItem[];
  revenueTrend: RevenueTrendPoint[];
  revenueStructure: RevenueStructureItem[];
  parkingSummary: { total: number; remain: number };
  parkingTrend: ParkingTrendPoint[];
  garageRank: GarageRankItem[];
  mapAreas: MapArea[];
  workOrders: WorkOrder[];
  patrolCompletion: number;
  patrolRoute: Array<{ x: number; y: number }>;
  abnormalRecords: AbnormalRecord[];
  deviceOnlineRate: number;
  alarmCount: number;
  alarmTop: AlarmItem[];
}
