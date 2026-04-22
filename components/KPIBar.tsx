import { KPIItem } from '../types';

interface Props {
  data: KPIItem[];
}

const sign = (v: number) => (v >= 0 ? `+${v}%` : `${v}%`);

export default function KPIBar({ data }: Props) {
  return (
    <div className="kpi-grid">
      {data.map((item) => (
        <article key={item.key} className="kpi-card" title={`${item.title}：${item.value}${item.unit}`}>
          <div className="kpi-title">{item.title}</div>
          <div className="kpi-value">{item.value}<span>{item.unit}</span></div>
          <div className="kpi-trend">
            <span>同比 {sign(item.yoy)}</span>
            <span>环比 {sign(item.mom)}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
