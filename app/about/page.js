import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'About',
  description: 'Learn about Stellavia Construction, a premium residential builder focused on flats, apartment communities, and elevated living experiences in Ahmedabad.'
};

const milestones = [
  { year: '2008', text: 'Stellavia was founded with a vision to create residential projects that balance premium design and practical family living.' },
  { year: '2016', text: 'Expanded into larger apartment communities with stronger delivery systems and high-quality facade design.' },
  { year: '2021', text: 'Introduced more design-driven club spaces, arrival experiences, and smart-living ready apartment layouts.' },
  { year: '2026', text: 'Now presenting a refined digital-first brand experience across projects, floor plans, and sales storytelling.' }
];

export default function AboutPage() {
  return (
    <section className="page-hero about-surface">
      <div className="section-block narrow-top">
        <SectionHeading
          eyebrow="About Stellavia"
          title="We build flats and apartment communities that feel premium from blueprint to handover."
          text="Our work is guided by strong construction fundamentals, elegant elevations, smart planning, and long-term resident value."
        />
        <div className="about-layout">
          <div className="about-panel hover-panel">
            <h3>Our Approach</h3>
            <p>Every project is shaped with an attention to structure, movement, natural light, facade identity, and day-to-day livability.</p>
          </div>
          <div className="about-panel dark-panel hover-panel">
            <h3>Why Clients Choose Us</h3>
            <ul>
              <li>Modern residential architecture</li>
              <li>Thoughtful apartment planning</li>
              <li>Premium presentation and project identity</li>
              <li>Construction trust with lifestyle focus</li>
            </ul>
          </div>
        </div>
        <div className="timeline-grid">
          {milestones.map((item) => (
            <div key={item.year} className="timeline-card hover-panel">
              <span>{item.year}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
