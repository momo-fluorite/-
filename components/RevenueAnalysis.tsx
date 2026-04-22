import {
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from 'recharts';
import Panel from './Panel';
import { RevenueStructureItem, RevenueTrendPoint, TimeRange } from '../types';

interface Props {
  range: TimeRange;
  trend: RevenueTrendPoint[];
  structure: RevenueStructureItem[];
  selectedType: string | null;
  onRangeChange: (value: TimeRange) => void;
  onSelectType: (type: string | null) => void;
}

const colors: Record<string, string> = { 物业费: '#4ade80', 停车费: '#60a5fa', 增值服务: '#f59e0b' };

export default function RevenueAnalysis({ range, trend, structure, selectedType, onRangeChange, onSelectType }: Props) {
  const data = trend.map((t) => ({
    label: t.label,
    value: selectedType === '物业费' ? t.property : selectedType === '停车费' ? t.parking : selectedType === '增值服务' ? t.other : t.total,
  }));

  return (
    <Panel
      title="收入分析"
      extra={
        <div className="segmented">
          {(['today', 'week', 'month'] as const).map((item) => (
            <button key={item} onClick={() => onRangeChange(item)} className={range === item ? 'active' : ''}>
              {item === 'today' ? '日' : item === 'week' ? '周' : '月'}
            </button>
          ))}
        </div>
      }
    >
      <div className="split-v">
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={data}>
            <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
            <XAxis dataKey="label" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#22d3ee" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie dataKey="value" data={structure} outerRadius={68} innerRadius={44} onClick={(entry: any) => onSelectType(typeof entry?.name === 'string' ? entry.name : null)}>
              {structure.map((s) => (
                <Cell key={s.name} fill={colors[s.name]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}
