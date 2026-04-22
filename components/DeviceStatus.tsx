import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Panel from './Panel';
import { AlarmItem } from '../types';

interface Props {
  onlineRate: number;
  alarmCount: number;
  alarmTop: AlarmItem[];
}

export default function DeviceStatus({ onlineRate, alarmCount, alarmTop }: Props) {
  return (
    <Panel title="设备运行">
      <div className="stats-line">
        <span title="设备在线率">在线率：<strong>{onlineRate}%</strong></span>
        <span title="告警数量">告警：<strong>{alarmCount}</strong></span>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={alarmTop}>
          <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip />
          <Bar dataKey="count" fill="#f43f5e" />
        </BarChart>
      </ResponsiveContainer>
    </Panel>
  );
}
