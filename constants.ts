import { DashboardData, TimeRange } from './types';

const rand = (min: number, max: number) => Math.round(Math.random() * (max - min) + min);
const fixed = (v: number, n = 1) => Number(v.toFixed(n));

const makeRevenueTrend = (range: TimeRange) => {
  const labels =
    range === 'today'
      ? ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00']
      : range === 'week'
        ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        : ['1周', '2周', '3周', '4周'];

  return labels.map((label) => {
    const property = rand(65, 120);
    const parking = rand(22, 55);
    const other = rand(8, 35);
    return { label, property, parking, other, total: property + parking + other };
  });
};

export const generateMockData = (range: TimeRange): DashboardData => {
  const revenueTrend = makeRevenueTrend(range);
  const revenueTotal = revenueTrend.reduce((acc, cur) => acc + cur.total, 0);
  const parkingTotal = revenueTrend.reduce((acc, cur) => acc + cur.parking, 0);
  const workDone = rand(86, 98);
  const deviceOnline = fixed(rand(960, 995) / 10, 1);

  return {
    kpis: [
      { key: 'todayIncome', title: '今日收入', value: rand(18, 30), unit: '万元', yoy: fixed(rand(-30, 80) / 10), mom: fixed(rand(-20, 60) / 10) },
      { key: 'monthIncome', title: '本月收入', value: rand(420, 590), unit: '万元', yoy: fixed(rand(-25, 90) / 10), mom: fixed(rand(-20, 70) / 10) },
      { key: 'workOrderRate', title: '工单处理率', value: workDone, unit: '%', yoy: fixed(rand(-15, 40) / 10), mom: fixed(rand(-15, 30) / 10) },
      { key: 'deviceOnlineRate', title: '设备在线率', value: deviceOnline, unit: '%', yoy: fixed(rand(-8, 20) / 10), mom: fixed(rand(-8, 20) / 10) },
    ],
    revenueTrend,
    revenueStructure: [
      { name: '物业费', value: fixed(revenueTotal * 0.58) },
      { name: '停车费', value: fixed(revenueTotal * 0.26) },
      { name: '增值服务', value: fixed(revenueTotal * 0.16) },
    ],
    parkingSummary: { total: 1860, remain: rand(210, 520) },
    parkingTrend: (range === 'today'
      ? ['00', '04', '08', '12', '16', '20']
      : range === 'week'
        ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        : ['W1', 'W2', 'W3', 'W4']
    ).map((label) => ({ label, in: rand(80, 210), out: rand(75, 200) })),
    garageRank: ['A车库', 'B车库', 'C车库', 'D车库', 'E车库'].map((name) => ({ name, usage: rand(62, 98) })),
    mapAreas: [
      { id: 'B1', name: '1号楼', type: 'building', x: 18, y: 20, status: 'normal' },
      { id: 'B2', name: '2号楼', type: 'building', x: 36, y: 28, status: 'normal' },
      { id: 'B3', name: '3号楼', type: 'building', x: 58, y: 30, status: 'warning' },
      { id: 'B4', name: '4号楼', type: 'building', x: 76, y: 22, status: 'normal' },
      { id: 'P1', name: '北侧车场', type: 'parking', x: 28, y: 72, status: 'normal' },
      { id: 'P2', name: '南侧车场', type: 'parking', x: 62, y: 75, status: 'warning' },
    ],
    workOrders: Array.from({ length: 9 }).map((_, idx) => ({
      id: `WO-${1000 + idx}`,
      title: ['电梯异常', '照明报修', '噪音投诉', '道闸故障', '保洁巡查'][idx % 5],
      area: ['1号楼', '2号楼', '北侧车场', '商业街区'][idx % 4],
      status: (['pending', 'processing', 'done'] as const)[idx % 3],
      createTime: `2026-04-22 ${String(rand(8, 20)).padStart(2, '0')}:${String(rand(0, 59)).padStart(2, '0')}`,
    })),
    patrolCompletion: rand(83, 99),
    patrolRoute: [
      { x: 10, y: 72 },
      { x: 22, y: 62 },
      { x: 35, y: 58 },
      { x: 52, y: 52 },
      { x: 66, y: 42 },
      { x: 82, y: 36 },
    ],
    abnormalRecords: Array.from({ length: 5 }).map((_, idx) => ({
      id: `AB-${idx + 1}`,
      type: ['巡更漏检', '设备超温', '门禁异常'][idx % 3],
      area: ['3号楼', '南侧车场', '商业街区'][idx % 3],
      time: `04-${String(rand(10, 22)).padStart(2, '0')} ${String(rand(9, 19)).padStart(2, '0')}:${String(rand(0, 59)).padStart(2, '0')}`,
    })),
    deviceOnlineRate: deviceOnline,
    alarmCount: rand(5, 26),
    alarmTop: ['门禁', '消防', '电梯', '配电', '监控'].map((name) => ({ name, count: rand(1, 15) })),
  };
};
