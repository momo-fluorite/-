import Panel from './Panel';
import { WorkOrder } from '../types';

interface Props {
  list: WorkOrder[];
  status: 'all' | 'pending' | 'processing' | 'done';
  onStatusChange: (v: 'all' | 'pending' | 'processing' | 'done') => void;
}

const labels = {
  all: '全部',
  pending: '待处理',
  processing: '处理中',
  done: '已完成',
};

export default function WorkOrders({ list, status, onStatusChange }: Props) {
  const filtered = status === 'all' ? list : list.filter((item) => item.status === status);

  return (
    <Panel title="客服工单">
      <div className="segmented">
        {(Object.keys(labels) as Array<keyof typeof labels>).map((key) => (
          <button key={key} className={status === key ? 'active' : ''} onClick={() => onStatusChange(key)} title={`筛选${labels[key]}`}>
            {labels[key]}
          </button>
        ))}
      </div>
      <div className="stats-line">当前数量：<strong>{filtered.length}</strong> / 总数：{list.length}</div>
      <ul className="scroll-list">
        {filtered.map((item) => (
          <li key={item.id} title={item.title}>
            <span>{item.id}</span>
            <span>{item.title}</span>
            <span>{item.area}</span>
            <span>{labels[item.status]}</span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
