import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import Panel from './Panel';
import { GarageRankItem, ParkingTrendPoint } from '../types';

interface Props {
  summary: { total: number; remain: number };
  trend: ParkingTrendPoint[];
  rank: GarageRankItem[];
  selectedGarage: string | null;
  onSelectGarage: (id: string) => void;
}

export default function ParkingInfo({ summary, trend, rank, selectedGarage, onSelectGarage }: Props) {
  return (
    <Panel title="车场信息">
      <div className="parking-summary">
        <div title="总车位数">总车位：<strong>{summary.total}</strong></div>
        <div title="剩余车位">剩余车位：<strong>{summary.remain}</strong></div>
      </div>
      <ResponsiveContainer width="100%" height={160}>
        <LineChart data={trend}>
          <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
          <XAxis dataKey="label" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip />
          <Line type="monotone" dataKey="in" stroke="#22d3ee" />
          <Line type="monotone" dataKey="out" stroke="#f59e0b" />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={170}>
        <BarChart data={rank} layout="vertical">
          <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
          <XAxis type="number" stroke="#64748b" />
          <YAxis type="category" dataKey="name" stroke="#64748b" width={60} />
          <Tooltip />
          <Bar dataKey="usage" fill="#38bdf8" onClick={(d) => onSelectGarage(d.name)} />
        </BarChart>
      </ResponsiveContainer>
      <div className="chip-group">
        {['P1', 'P2'].map((id) => (
          <button key={id} className={selectedGarage === id ? 'active' : ''} onClick={() => onSelectGarage(id)}>
            高亮{id}
          </button>
        ))}
      </div>
    </Panel>
  );
}
