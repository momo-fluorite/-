import { DashboardData } from './types';

export const MOCK_DASHBOARD_DATA: DashboardData = {
  lastUpdated: new Date().toISOString(),
  metrics: {
    totalRevenue: {
      label: '本月实收',
      value: '245',
      unit: '万',
      trend: 5.2,
      status: 'good',
    },
    totalReceivable: {
      label: '本月应收',
      value: '278',
      unit: '万',
      trend: 6.5,
      status: 'neutral',
    },
    occupancyRate: {
      label: '综合出租率',
      value: 94.2,
      unit: '%',
      trend: 1.1,
      status: 'good',
    },
    collectionRate: {
      label: '物业费收缴率',
      value: 88.5,
      unit: '%',
      trend: -2.3,
      status: 'warning',
    },
    activeWorkOrders: {
      label: '待处理工单',
      value: 42,
      trend: 12.5, 
      status: 'neutral',
    },
    energyEfficiency: {
      label: '能耗同比',
      value: -4.5,
      unit: '%',
      trend: -4.5,
      status: 'good',
    },
    safetyIncidents: {
      label: '本月安全事故',
      value: 0,
      trend: 0,
      status: 'good',
    },
    // Center panel overview metrics - Updated with absolute change values
    serviceHouseholds: { value: 53740, trend: 1.2, change: 645 },
    managedArea: { value: 1346, trend: 0.8, change: 11 },
    serviceProjects: { value: 165, trend: 2.5, change: 4 },
    serviceContracts: { value: 212, trend: 3.1, change: 7 },
  },
  revenueSummary: {
    annualCumulativeReceivable: 12450,
    annualCumulativeActual: 11820,
    annualAverageCollectionRate: 94.9,
  },
  detailedRevenue: [
    { category: '物业管理费', name: '住宅管理费', value: 85.2 },
    { category: '物业管理费', name: '商铺管理费', value: 12.5 },
    { category: '物业管理费', name: '写字楼管理费', value: 25.8 },
    { category: '物业管理费', name: '裙楼管理费', value: 8.4 },
    { category: '物业管理费', name: '垃圾处理费', value: 4.2 },
    { category: '物业管理费', name: '车位管理费', value: 15.6 },
    { category: '运营管理费', name: '停车管理费（月保）', value: 28.5 },
    { category: '运营管理费', name: '临时停车费', value: 16.7 },
    { category: '运营管理费', name: '物业出租管理费', value: 12.0 },
    { category: '运营管理费', name: '多种经营收入', value: 9.5 },
    { category: '运营管理费', name: '工本费', value: 0.8 },
    { category: '运营管理费', name: '其它', value: 2.3 },
    { category: '水电费收入', name: '水费收入', value: 20.0 },
    { category: '水电费收入', name: '电费收入', value: 30.0 },
  ],
  collectionStats: {
    // Rolling 12 months (e.g., Last Aug to This Jul)
    month: [
      { month: '8月', rate: 89.0, target: 95, arrears: 22.3 },
      { month: '9月', rate: 94.2, target: 95, arrears: 11.6 },
      { month: '10月', rate: 95.5, target: 95, arrears: 9.2 },
      { month: '11月', rate: 91.8, target: 95, arrears: 16.8 },
      { month: '12月', rate: 88.5, target: 95, arrears: 23.5 },
      { month: '1月', rate: 82.5, target: 90, arrears: 35.5 },
      { month: '2月', rate: 84.0, target: 90, arrears: 32.0 },
      { month: '3月', rate: 88.2, target: 92, arrears: 25.4 },
      { month: '4月', rate: 85.5, target: 92, arrears: 29.8 },
      { month: '5月', rate: 91.0, target: 95, arrears: 18.2 },
      { month: '6月', rate: 93.8, target: 95, arrears: 12.5 },
      { month: '7月', rate: 92.5, target: 95, arrears: 15.1 },
    ],
    // Current Calendar Year (Jan - Dec)
    year: [
      { month: '1月', rate: 82.5, target: 90, arrears: 35.5 },
      { month: '2月', rate: 84.0, target: 90, arrears: 32.0 },
      { month: '3月', rate: 88.2, target: 92, arrears: 25.4 },
      { month: '4月', rate: 85.5, target: 92, arrears: 29.8 },
      { month: '5月', rate: 91.0, target: 95, arrears: 18.2 },
      { month: '6月', rate: 93.8, target: 95, arrears: 12.5 },
      { month: '7月', rate: 92.5, target: 95, arrears: 15.1 },
      { month: '8月', rate: 90.1, target: 95, arrears: 14.2 },
      { month: '9月', rate: 93.5, target: 95, arrears: 11.0 },
      { month: '10月', rate: 94.2, target: 95, arrears: 10.5 },
      { month: '11月', rate: 92.0, target: 95, arrears: 16.0 },
      { month: '12月', rate: 89.5, target: 95, arrears: 21.5 },
    ],
    // Past Years
    past: [
      { month: '2020', rate: 96.5, target: 90, arrears: 210.5 },
      { month: '2021', rate: 94.2, target: 90, arrears: 245.2 },
      { month: '2022', rate: 88.5, target: 92, arrears: 380.4 },
      { month: '2023', rate: 92.1, target: 95, arrears: 220.1 },
      { month: '2024', rate: 89.8, target: 95, arrears: 285.6 },
    ]
  },
  performance: {
    patrolCompletion: 99.5,
    todayPatrolTasks: 124,
    inspectionCompletion: 97.8,
    weekInspectionTasks: 45,
    deviceNormal: 99.1
  },
  workOrders: [
    { category: '暖通空调', pending: 2, processing: 4, completed: 25 },
    { category: '给排水', pending: 1, processing: 2, completed: 18 },
    { category: '强弱电', pending: 3, processing: 5, completed: 30 },
    { category: '保洁', pending: 5, processing: 8, completed: 120 },
    { category: '安防', pending: 0, processing: 1, completed: 45 },
  ],
  workOrderSummary: {
    todayCount: 18,
    monthCount: 342,
    monthComplaints: 5,
    annualSatisfaction: 98.5
  },
  workOrderTrend: [
    { month: '1月', responseRate: 95.5, completionRate: 98.0, complaints: 12 },
    { month: '2月', responseRate: 96.2, completionRate: 98.5, complaints: 8 },
    { month: '3月', responseRate: 94.8, completionRate: 97.2, complaints: 15 },
    { month: '4月', responseRate: 97.5, completionRate: 99.1, complaints: 5 },
    { month: '5月', responseRate: 98.2, completionRate: 99.5, complaints: 3 },
    { month: '6月', responseRate: 98.8, completionRate: 99.8, complaints: 2 },
  ],
  occupancy: [
    { name: '商业办公', value: 45, color: '#0ea5e9' }, // Sky
    { name: '住宅公寓', value: 35, color: '#6366f1' }, // Indigo
    { name: '零售商铺', value: 15, color: '#10b981' }, // Emerald
    { name: '空置区域', value: 5, color: '#64748b' }, // Slate
  ],
  recentEvents: [
    { id: '1', time: '10:42:05', type: 'access', message: 'A2栋 大堂门禁 人脸识别通过', location: 'A2-1F', level: 'info' },
    { id: '2', time: '10:41:12', type: 'alarm', message: 'B1层 消防通道占用告警', location: 'B1-ZoneC', level: 'warning' },
    { id: '3', time: '10:38:55', type: 'system', message: '中央空调主机3号 离线', location: '设备间', level: 'critical' },
    { id: '4', time: '10:35:20', type: 'access', message: 'V-88293 车辆离场', location: '北门岗', level: 'info' },
    { id: '5', time: '10:30:11', type: 'system', message: '能耗数据采集完成', location: '系统', level: 'info' },
  ],
  deviceStats: {
    total: 12450,
    online: 12380,
    offline: 65,
    fault: 5,
    healthRate: 99.4
  },
  parkingStats: {
    total: 14323, 
    lotCount: 44,
    monthlyIncome: 45.2,
    annualIncome: 380.5,
    monthlyParkingSpaces: 8500,
    monthlyParkingRevenue: 28.5,
    tempParkingSpaces: 5823,
    tempParkingRevenue: 16.7,
    annualTarget: 450,
    annualActual: 380.5,
    annualRate: 84.5,
    trend: [
      { month: '1月', income: 38 },
      { month: '2月', income: 42 },
      { month: '3月', income: 40 },
      { month: '4月', income: 48 },
      { month: '5月', income: 45 },
      { month: '6月', income: 52 },
    ]
  },
  projectFinance: [
    { name: '广州分公司-西堤市场', receivable: 21.26, received: 10.63, arrears: 10.63, rate: 50.00 },
    { name: '广州分公司-水萌路68号', receivable: 1.09, received: 0.46, arrears: 0.63, rate: 42.34 },
    { name: '广州分公司-锦鸿花园', receivable: 23.86, received: 22.18, arrears: 1.68, rate: 92.95 },
    { name: '广州分公司-风华新能源', receivable: 15.07, received: 0.00, arrears: 15.07, rate: 0.00 },
    { name: '东莞分公司-碧桂园云顶', receivable: 45.32, received: 43.10, arrears: 2.22, rate: 95.10 },
    { name: '东莞分公司-万科金域', receivable: 32.15, received: 30.55, arrears: 1.60, rate: 95.02 },
    { name: '湖南分公司-保利国际', receivable: 58.90, received: 40.20, arrears: 18.70, rate: 68.25 },
    { name: '湖南分公司-中海康城', receivable: 12.50, received: 11.80, arrears: 0.70, rate: 94.40 },
    { name: '云浮分公司-恒大名都', receivable: 28.40, received: 14.20, arrears: 14.20, rate: 50.00 },
    { name: '广州分公司-绿地中心', receivable: 65.20, received: 60.10, arrears: 5.10, rate: 92.17 },
    { name: '广州分公司-华润悦府', receivable: 18.90, received: 18.50, arrears: 0.40, rate: 97.88 },
    { name: '东莞分公司-龙湖天街', receivable: 35.60, received: 28.50, arrears: 7.10, rate: 80.05 },
    { name: '湖南分公司-金地格林', receivable: 22.40, received: 21.00, arrears: 1.40, rate: 93.75 },
    { name: '广州分公司-融创文旅', receivable: 88.50, received: 75.20, arrears: 13.30, rate: 84.97 },
  ],
  revenueTrend: [
    { month: '1月', propertyFee: 130, parkingFee: 35, waterFee: 15, electricityFee: 25, others: 15 },
    { month: '2月', propertyFee: 132, parkingFee: 38, waterFee: 16, electricityFee: 26, others: 18 },
    { month: '3月', propertyFee: 128, parkingFee: 36, waterFee: 14, electricityFee: 24, others: 12 },
    { month: '4月', propertyFee: 135, parkingFee: 42, waterFee: 18, electricityFee: 28, others: 20 },
    { month: '5月', propertyFee: 138, parkingFee: 40, waterFee: 19, electricityFee: 29, others: 18 },
    { month: '6月', propertyFee: 140, parkingFee: 45, waterFee: 20, electricityFee: 30, others: 10 },
  ],
  revenueTrend12Months: [
    { month: '8月', receivable: 240, actual: 215, collectionRate: 89.5 },
    { month: '9月', receivable: 250, actual: 235, collectionRate: 94.0 },
    { month: '10月', receivable: 260, actual: 248, collectionRate: 95.4 },
    { month: '11月', receivable: 255, actual: 232, collectionRate: 91.0 },
    { month: '12月', receivable: 280, actual: 245, collectionRate: 87.5 },
    { month: '1月', receivable: 270, actual: 220, collectionRate: 81.5 },
    { month: '2月', receivable: 265, actual: 225, collectionRate: 84.9 },
    { month: '3月', receivable: 275, actual: 240, collectionRate: 87.3 },
    { month: '4月', receivable: 285, actual: 245, collectionRate: 86.0 },
    { month: '5月', receivable: 290, actual: 265, collectionRate: 91.4 },
    { month: '6月', receivable: 280, actual: 262, collectionRate: 93.6 },
    { month: '7月', receivable: 278, actual: 245, collectionRate: 88.1 },
  ],
  qualityTrend12Months: [
    { month: '8月', patrolRate: 98.5, inspectionRate: 97.2, deviceNormalRate: 98.8 },
    { month: '9月', patrolRate: 99.0, inspectionRate: 98.0, deviceNormalRate: 99.1 },
    { month: '10月', patrolRate: 99.5, inspectionRate: 98.5, deviceNormalRate: 99.3 },
    { month: '11月', patrolRate: 98.8, inspectionRate: 97.8, deviceNormalRate: 99.0 },
    { month: '12月', patrolRate: 99.2, inspectionRate: 98.2, deviceNormalRate: 99.2 },
    { month: '1月', patrolRate: 97.5, inspectionRate: 96.5, deviceNormalRate: 98.5 },
    { month: '2月', patrolRate: 98.0, inspectionRate: 97.0, deviceNormalRate: 98.7 },
    { month: '3月', patrolRate: 98.8, inspectionRate: 97.5, deviceNormalRate: 99.0 },
    { month: '4月', patrolRate: 99.1, inspectionRate: 98.0, deviceNormalRate: 99.2 },
    { month: '5月', patrolRate: 99.4, inspectionRate: 98.4, deviceNormalRate: 99.4 },
    { month: '6月', patrolRate: 99.6, inspectionRate: 98.6, deviceNormalRate: 99.5 },
    { month: '7月', patrolRate: 99.5, inspectionRate: 97.8, deviceNormalRate: 99.1 },
  ],
  regionStats: [
    {
      id: 'hunan', name: '湖南分公司', projectCount: 32, managedArea: 420.5,
      position: 'left', coordinates: { x: 58, y: 60 }, offset: { x: 0, y: -60 }
    },
    {
      id: 'guangzhou', name: '广州分公司', projectCount: 156, managedArea: 2086.0,
      position: 'right', coordinates: { x: 68, y: 72 }, offset: { x: 0, y: -30 }
    },
    {
      id: 'dongguan', name: '东莞分公司', projectCount: 45, managedArea: 580.5,
      position: 'right', coordinates: { x: 69, y: 82 }, offset: { x: 0, y: 60 }
    },
    {
      id: 'yunfu', name: '云浮分公司', projectCount: 12, managedArea: 120.3,
      position: 'left', coordinates: { x: 55, y: 81 }, offset: { x: 0, y: 40 }
    }
  ],
  arrearsStats: {
    month: [
      { name: '物业管理费', value: 85.2, color: '#22d3ee', trend: 2.5 }, // Increased
      { name: '租金', value: 42.5, color: '#a78bfa', trend: -1.2 }, // Decreased
      { name: '电费', value: 28.3, color: '#fbbf24', trend: 0.5 }, // Slight increase
      { name: '水费', value: 12.1, color: '#60a5fa', trend: -0.8 }, // Decreased
      { name: '停车费', value: 8.4, color: '#34d399', trend: 0.0 }, // Stable
    ],
    year: [
      { name: '物业管理费', value: 420.5, color: '#22d3ee', trend: 5.1 },
      { name: '租金', value: 150.2, color: '#a78bfa', trend: 2.3 },
      { name: '电费', value: 85.6, color: '#fbbf24', trend: -1.5 },
      { name: '水费', value: 45.3, color: '#60a5fa', trend: 0.2 },
      { name: '停车费', value: 32.1, color: '#34d399', trend: -3.4 },
    ],
    past: [
      { name: '物业管理费', value: 1250.8, color: '#22d3ee', trend: 10.5 },
      { name: '租金', value: 540.3, color: '#a78bfa', trend: -5.2 },
      { name: '电费', value: 120.5, color: '#fbbf24', trend: 1.2 },
      { name: '水费', value: 85.2, color: '#60a5fa', trend: 0.0 },
      { name: '停车费', value: 65.4, color: '#34d399', trend: -2.1 },
    ]
  },
  cityStats: [
    {
      name: '广州市',
      serviceHouseholds: 15240,
      managedArea: 385.2,
      serviceProjects: 45,
      projectContracts: 58,
      ownedProjects: 32,
      cooperativeProjects: 13,
      distribution: [
        { name: '住宅', value: 45 },
        { name: '商业/商业综合体', value: 20 },
        { name: '厂房/工业园区', value: 15 },
        { name: '学校/机关单位', value: 10 },
        { name: '写字楼', value: 10 },
      ],
      mapPath: "M 180 20 L 250 10 L 310 40 L 280 80 L 320 120 L 300 180 L 240 280 L 180 290 L 140 250 L 120 180 L 80 120 L 100 50 Z",
      districts: [
        { name: '从化区', path: "M 180 20 L 250 10 L 310 40 L 280 80 L 240 100 L 180 80 Z", labelPos: { x: 230, y: 50 } },
        { name: '增城区', path: "M 280 80 L 320 120 L 300 180 L 240 180 L 240 100 Z", labelPos: { x: 280, y: 130 } },
        { name: '花都区', path: "M 100 50 L 180 20 L 180 80 L 140 110 L 80 120 Z", labelPos: { x: 130, y: 70 } },
        { name: '白云区', path: "M 140 110 L 180 80 L 240 100 L 240 150 L 180 160 L 140 150 Z", labelPos: { x: 180, y: 120 } },
        { name: '黄埔区', path: "M 240 100 L 240 180 L 210 180 L 210 150 Z", labelPos: { x: 230, y: 150 } },
        { name: '天河区', path: "M 180 160 L 210 150 L 210 180 L 180 180 Z", labelPos: { x: 195, y: 170 } },
        { name: '越秀区', path: "M 160 150 L 180 150 L 180 165 L 160 165 Z", labelPos: { x: 170, y: 158 } },
        { name: '荔湾区', path: "M 140 150 L 160 150 L 160 170 L 140 170 Z", labelPos: { x: 150, y: 160 } },
        { name: '海珠区', path: "M 160 165 L 210 180 L 180 195 L 160 180 Z", labelPos: { x: 180, y: 185 } },
        { name: '番禺区', path: "M 140 170 L 240 180 L 240 230 L 160 240 Z", labelPos: { x: 190, y: 210 } },
        { name: '南沙区', path: "M 160 240 L 240 230 L 240 280 L 180 290 L 140 250 Z", labelPos: { x: 190, y: 260 } }
      ],
      projectDots: [
        { x: 210, y: 60 }, { x: 270, y: 140 }, { x: 140, y: 60 }, { x: 170, y: 110 },
        { x: 220, y: 130 }, { x: 190, y: 165 }, { x: 180, y: 220 }, { x: 180, y: 260 }
      ]
    },
    {
      name: '深圳市',
      serviceHouseholds: 12850,
      managedArea: 312.5,
      serviceProjects: 38,
      projectContracts: 46,
      ownedProjects: 25,
      cooperativeProjects: 13,
      distribution: [
        { name: '住宅', value: 35 },
        { name: '商业/商业综合体', value: 25 },
        { name: '厂房/工业园区', value: 20 },
        { name: '学校/机关单位', value: 5 },
        { name: '写字楼', value: 15 },
      ],
      mapPath: "M 50 100 L 150 80 L 250 100 L 350 120 L 320 200 L 200 250 L 100 220 L 50 150 Z",
      projectDots: [
        { x: 100, y: 130 }, { x: 180, y: 110 }, { x: 250, y: 140 }, { x: 300, y: 160 },
        { x: 220, y: 200 }, { x: 140, y: 180 }, { x: 80, y: 170 }
      ]
    },
    {
      name: '东莞市',
      serviceHouseholds: 8640,
      managedArea: 215.8,
      serviceProjects: 26,
      projectContracts: 32,
      ownedProjects: 18,
      cooperativeProjects: 8,
      distribution: [
        { name: '住宅', value: 30 },
        { name: '商业/商业综合体', value: 10 },
        { name: '厂房/工业园区', value: 45 },
        { name: '学校/机关单位', value: 5 },
        { name: '写字楼', value: 10 },
      ],
      mapPath: "M 100 100 L 200 80 L 300 120 L 280 220 L 180 250 L 80 200 Z",
      projectDots: [
        { x: 150, y: 120 }, { x: 220, y: 140 }, { x: 250, y: 180 }, { x: 180, y: 200 },
        { x: 120, y: 170 }
      ]
    },
    {
      name: '佛山市',
      serviceHouseholds: 7230,
      managedArea: 186.4,
      serviceProjects: 22,
      projectContracts: 28,
      ownedProjects: 15,
      cooperativeProjects: 7,
      distribution: [
        { name: '住宅', value: 50 },
        { name: '商业/商业综合体', value: 15 },
        { name: '厂房/工业园区', value: 20 },
        { name: '学校/机关单位', value: 8 },
        { name: '写字楼', value: 7 },
      ],
      mapPath: "M 150 50 L 250 80 L 220 180 L 120 220 L 80 150 L 100 80 Z",
      projectDots: [
        { x: 160, y: 100 }, { x: 200, y: 130 }, { x: 180, y: 170 }, { x: 130, y: 150 }
      ]
    }
  ]
};
