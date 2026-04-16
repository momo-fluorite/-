
export interface KPIMetric {
  label: string;
  value: string | number;
  trend: number; // percentage change
  unit?: string;
  status: 'good' | 'neutral' | 'warning' | 'critical';
}

export interface MetricWithTrend {
  value: number;
  trend: number; // percentage (kept for legacy or calculation reference)
  change: number; // absolute value difference
}

// Renamed from RevenueData to accommodate collection rates
export interface CollectionTrendData {
  month: string; // Used for XAxis label (e.g., "1月" or "2023")
  rate: number;
  target: number;
  arrears: number; // New: 欠费金额 (万)
}

export interface WorkOrderStats {
  category: string;
  pending: number;
  processing: number;
  completed: number;
}

export interface WorkOrderSummary {
  todayCount: number;
  monthCount: number;
  monthComplaints: number;
  annualSatisfaction: number; // New: 年度满意度 (%)
}

export interface WorkOrderTrendData {
  month: string;
  responseRate: number;
  completionRate: number;
  complaints: number;
}

export interface OccupancyData {
  name: string;
  value: number;
  color: string;
}

export interface EventLog {
  id: string;
  time: string;
  type: 'access' | 'alarm' | 'system';
  message: string;
  location: string;
  level: 'info' | 'warning' | 'critical';
}

export interface DeviceStats {
  total: number;
  online: number;
  offline: number;
  fault: number;
  healthRate: number;
}

export interface PerformanceMetrics {
  patrolCompletion: number;
  todayPatrolTasks: number; // New: 今日巡更任务数
  inspectionCompletion: number;
  weekInspectionTasks: number; // New: 本周巡检任务数
  deviceNormal: number;
}

export interface ParkingTrendData {
  month: string;
  income: number;
}

export interface ParkingStats {
  total: number; // Total spaces
  lotCount: number;
  monthlyIncome: number;
  annualIncome: number;
  // New detailed metrics
  monthlyParkingSpaces: number;
  monthlyParkingRevenue: number;
  tempParkingSpaces: number;
  tempParkingRevenue: number;
  annualTarget: number;
  annualActual: number;
  annualRate: number;
  trend: ParkingTrendData[];
}

export interface ProjectFinanceStats {
  name: string;
  receivable: number;
  received: number;
  arrears: number;
  rate: number;
}

export interface RevenueTrendData {
  month: string;
  propertyFee: number; // 物业管理费
  parkingFee: number; // 停车费
  waterFee: number;   // 水费 (New)
  electricityFee: number; // 电费 (New)
  others: number; // 其他收入
}

export interface RegionStat {
  id: string;
  name: string;
  projectCount: number;
  managedArea: number; // in 10k m2
  position: 'left' | 'right';
  coordinates: { x: number; y: number }; // Percentage relative to map container center/size
  offset?: { x: number; y: number }; // For label positioning adjustments
}

export interface ArrearsCategory {
  name: string;
  value: number;
  color: string;
  trend: number; // percentage change
}

export interface ArrearsStats {
  month: ArrearsCategory[];
  year: ArrearsCategory[];
  past: ArrearsCategory[];
}

export interface CityFormatDistribution {
  name: string;
  value: number;
}

export interface CityData {
  name: string;
  serviceHouseholds: number;
  managedArea: number; // in 10k m2
  serviceProjects: number;
  projectContracts: number;
  ownedProjects: number;
  cooperativeProjects: number;
  distribution: CityFormatDistribution[];
  mapPath?: string; // SVG path for city outline
  districts?: { name: string; path: string; labelPos?: { x: number; y: number } }[]; // New: District outlines with labels
  projectDots?: { x: number; y: number }[]; // Coordinates for glowing dots
}

export interface RevenueSummary {
  annualCumulativeReceivable: number;
  annualCumulativeActual: number;
  annualAverageCollectionRate: number;
}

export interface RevenueItem {
  name: string;
  value: number;
  category: string;
}

export interface MonthlyRevenueTrend {
  month: string;
  receivable: number;
  actual: number;
  collectionRate: number; // New: 收缴率 (%)
}

export interface OperationalQualityTrend {
  month: string;
  patrolRate: number;
  inspectionRate: number;
  deviceNormalRate: number;
}

export interface DashboardData {
  lastUpdated: string;
  metrics: {
    totalRevenue: KPIMetric;
    totalReceivable: KPIMetric; // New: 本月应收
    occupancyRate: KPIMetric;
    collectionRate: KPIMetric;
    activeWorkOrders: KPIMetric;
    energyEfficiency: KPIMetric;
    safetyIncidents: KPIMetric;
    // Overview metrics for Center Panel
    serviceHouseholds: MetricWithTrend;
    managedArea: MetricWithTrend;
    serviceProjects: MetricWithTrend;
    serviceContracts: MetricWithTrend;
  };
  revenueSummary: RevenueSummary;
  detailedRevenue: RevenueItem[];
  // Replaced collectionTrend with collectionStats for multi-view support
  collectionStats: {
    month: CollectionTrendData[]; // Rolling 12 months
    year: CollectionTrendData[];  // Current Calendar Year (Jan-Dec)
    past: CollectionTrendData[];  // Past Years (2020-2024)
  };
  performance: PerformanceMetrics;
  workOrders: WorkOrderStats[];
  workOrderSummary: WorkOrderSummary;
  workOrderTrend: WorkOrderTrendData[];
  occupancy: OccupancyData[];
  recentEvents: EventLog[];
  deviceStats: DeviceStats;
  parkingStats: ParkingStats;
  projectFinance: ProjectFinanceStats[];
  revenueTrend: RevenueTrendData[];
  revenueTrend12Months: MonthlyRevenueTrend[]; // New: 12 months receivable/actual trend
  qualityTrend12Months: OperationalQualityTrend[]; // New: 12 months quality trend
  regionStats: RegionStat[];
  arrearsStats: ArrearsStats;
  cityStats: CityData[];
}
