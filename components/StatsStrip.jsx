import { stats } from '@/data/projects';
import CountUpValue from './CountUpValue';

export default function StatsStrip() {
  return (
    <section className="stats-strip full-bleed">
      <div className="stats-grid">
        {stats.map((item) => (
          <article key={item.label} className="stat-card">
            <h3><CountUpValue value={item.value} /></h3>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
