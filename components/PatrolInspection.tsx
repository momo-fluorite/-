import Panel from './Panel';
import { AbnormalRecord } from '../types';

interface Props {
  completion: number;
  route: Array<{ x: number; y: number }>;
  records: AbnormalRecord[];
}

export default function PatrolInspection({ completion, route, records }: Props) {
  return (
    <Panel title="巡更巡检">
      <div className="split-h">
        <div className="gauge-mock" title="完成率仪表盘">
          <div className="gauge-inner">
            <strong>{completion}%</strong>
            <span>完成率</span>
          </div>
        </div>
        <svg className="route-map" viewBox="0 0 100 100" title="巡检路线模拟图">
          <polyline points={route.map((p) => `${p.x},${p.y}`).join(' ')} />
          {route.map((p, idx) => (
            <circle key={idx} cx={p.x} cy={p.y} r={2.1} />
          ))}
        </svg>
      </div>
      <ul className="scroll-list mini">
        {records.map((r) => (
          <li key={r.id}>
            <span>{r.time}</span>
            <span>{r.type}</span>
            <span>{r.area}</span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
