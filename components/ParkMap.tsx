import Panel from './Panel';
import { MapArea } from '../types';

interface Props {
  areas: MapArea[];
  activeArea: string | null;
  highlightedGarage: string | null;
  onAreaClick: (id: string) => void;
}

export default function ParkMap({ areas, activeArea, highlightedGarage, onAreaClick }: Props) {
  return (
    <Panel title="园区可视化（核心）">
      <div className="map-wrap" title="园区地图占位组件">
        {areas.map((a) => {
          const active = activeArea === a.id || highlightedGarage === a.id;
          return (
            <button
              key={a.id}
              className={`map-point ${a.type} ${a.status} ${active ? 'active' : ''}`}
              style={{ left: `${a.x}%`, top: `${a.y}%` }}
              onClick={() => onAreaClick(a.id)}
              title={`${a.name}(${a.id})`}
            >
              <span>{a.name}</span>
            </button>
          );
        })}
      </div>
    </Panel>
  );
}
