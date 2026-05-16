import {
  Building2,
  LayoutGrid,
  Maximize2,
  Utensils,
  BedDouble,
  Wind,
  Trophy,
  ShieldCheck,
  MapPin,
  Clock3,
  Blocks,
  FileCheck2,
  Users,
  ArrowRight,
  Download,
} from 'lucide-react';

const features = [
  { icon: Building2, title: 'Only 2 flats', sub: 'per floor' },
  { icon: LayoutGrid, title: 'Column-less', sub: 'planning' },
  { icon: Maximize2, title: 'Zero wasted', sub: 'space' },
  { icon: Utensils, title: 'Dedicated', sub: 'dining area' },
  { icon: BedDouble, title: 'Spacious', sub: 'bedrooms' },
  { icon: Wind, title: 'Better privacy and', sub: 'ventilation' },
  { icon: Trophy, title: 'Award-winning', sub: 'residential project' },
  { icon: ShieldCheck, title: 'RERA certified', sub: 'project' },
  { icon: MapPin, title: 'Located at', sub: 'Khoraj, Gandhinagar' },
];

const trustPoints = [
  { icon: Trophy, title: 'Government', sub: 'award-winning project' },
  { icon: Clock3, title: 'On-time delivery', sub: 'commitment' },
  { icon: Blocks, title: 'Quality construction', sub: 'materials' },
  { icon: FileCheck2, title: 'Transparent', sub: 'planning' },
  { icon: Users, title: 'Family-first', sub: 'layouts' },
  { icon: MapPin, title: 'Strategic', sub: 'connectivity' },
];

export default function StellaviaAboutLanding() {
  return (
    <section className="stellavia-about-landing">
      {/* 01 Our Story */}
      <div className="stellavia-blueprint-section story-section">
        <div className="section-number">01</div>

        <div className="story-copy">
          <span className="mini-label">Our Story</span>

          <h1>
            Premium 3 BHK Homes in Khoraj, Gandhinagar
          </h1>

          <p className="seo-subtitle">
            From thoughtful planning to trusted delivery.
          </p>

          <span className="gold-line" />

          <p className="story-description">
            At Stellavia, every detail begins with purpose. From intelligent layouts
            to premium construction, our focus is to create homes that simplify
            your life and elevate your everyday. With award-winning planning,
            RERA certification, and a commitment to on-time delivery, Stellavia
            reflects the trust of modern families.
          </p>
        </div>

        <div className="story-visual">
          <div className="blueprint-circle" />
          <img src="/img/about-building.webp" alt="Stellavia residential towers" />

          <div className="trust-seal">
            <span>★</span>
            <small>
              Planned with Purpose <br />
              Delivered with Trust
            </small>
          </div>
        </div>
      </div>

      {/* 02 Why Stellavia */}
      <div className="why-blueprint-section">
        <aside className="why-side">
          <div className="section-number dark-number">02</div>

          <span className="mini-label gold-label">
            Why Stellavia <br />
            Stands Apart
          </span>

          <span className="gold-line" />

          <div className="floor-sketch">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </aside>

        <div className="why-content">
          <h2>
            Premium 3 BHK Homes with <em>Practical Luxury</em>
          </h2>

          <div className="features-grid">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="feature-item" key={index}>
                  <Icon size={34} strokeWidth={1.5} />
                  <h3>{item.title}</h3>
                  <p>{item.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 03 Comfort */}
      <div className="comfort-section">
        <div className="comfort-copy">
          <div className="section-number">03</div>

          <span className="mini-label gold-label">Built Around</span>

          <h2>
            Everyday <br />
            Comfort
          </h2>

          <span className="gold-line" />

          <p>
            Thoughtfully designed column-free layouts create open, airy spaces
            that adapt to your lifestyle. From natural light and ventilation to
            smart space utilization, every element is planned to bring ease,
            comfort, and joy to your everyday living.
          </p>
        </div>

        <div className="plan-visual">
          <img src="/img/floor-plan.webp" alt="Stellavia floor plan" />
        </div>

        <div className="comfort-image">
          <img src="/img/lifestyle-balcony.webp" alt="Stellavia lifestyle balcony" />

          <div className="vertical-dots">
            <span className="active" />
            <span />
            <span />
          </div>
        </div>
      </div>

      {/* 04 Trust */}
      <div className="trust-section">
        <div className="trust-heading">
          <div className="section-number">04</div>
          <span className="mini-label gold-label">Trust & Assurance</span>
          <span className="gold-line" />
        </div>

        <div className="trust-grid">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="trust-item" key={index}>
                <Icon size={42} strokeWidth={1.5} />
                <h3>{item.title}</h3>
                <p>{item.sub}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 05 Closing CTA */}
      <div className="closing-section">
        <div className="section-number dark-number">05</div>

        <div className="closing-copy">
          <h2>
            A Home That <em>Solves</em> <br />
            More Than It Shows.
          </h2>

          <span className="gold-line" />

          <p>
            Stellavia is more than a home—it’s a smarter way of living. Designed
            with care, built with integrity, and delivered with trust, it’s where
            your best days begin.
          </p>

          <div className="closing-actions">
            <a href="/contact" className="primary-btn">
              Book Visit <ArrowRight size={18} />
            </a>

            <a href="/brochure.pdf" download className="outline-btn">
              Download Brochure <Download size={17} />
            </a>
          </div>
        </div>

        <div className="closing-image">
          <img src="/img/project-night.webp" alt="Stellavia project night view" />
        </div>
      </div>
    </section>
  );
}
