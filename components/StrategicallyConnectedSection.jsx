import {
  Route,
  Building2,
  Plane,
  Train,
  GraduationCap,
  BriefcaseBusiness,
  ExternalLink,
} from 'lucide-react';

const stellaviaLocation =
  'Stellavia,Khoraj-Tragad,Ahmedabad,Gujarat';

const locationPoints = [
  {
    title: 'SP Ring Road',
    meta: '5 minutes · Direct access',
    time: '5',
    unit: 'min',
    icon: Route,
    link: `https://www.google.com/maps/dir/?api=1&origin=${stellaviaLocation}&destination=SP+Ring+Road+Ahmedabad`,
  },
  {
    title: 'NH-147',
    meta: '8 minutes · Major highway connectivity',
    time: '8',
    unit: 'min',
    icon: Building2,
    link: `https://www.google.com/maps/dir/?api=1&origin=${stellaviaLocation}&destination=NH+147+Ahmedabad`,
  },
  {
    title: 'Sardar Vallabhbhai Patel Airport',
    meta: '20 minutes · International airport',
    time: '20',
    unit: 'min',
    icon: Plane,
    link: `https://www.google.com/maps/dir/?api=1&origin=${stellaviaLocation}&destination=Sardar+Vallabhbhai+Patel+International+Airport`,
  },
  {
    title: 'Metro Station (Motera)',
    meta: '7 km · Red Line connectivity',
    time: '7',
    unit: 'km',
    icon: Train,
    link: `https://www.google.com/maps/dir/?api=1&origin=${stellaviaLocation}&destination=Motera+Metro+Station`,
  },
  {
    title: 'Top Schools & Hospitals',
    meta: '2–4 km · KD, Satyamev & Ethics',
    time: '2–4',
    unit: 'km',
    icon: GraduationCap,
    link: `https://www.google.com/maps/dir/?api=1&origin=${stellaviaLocation}&destination=KD+Hospital+Ahmedabad`,
  },
  {
    title: 'GIFT City',
    meta: '15 km · Employment & business hub',
    time: '15',
    unit: 'km',
    icon: BriefcaseBusiness,
    link: `https://www.google.com/maps/dir/?api=1&origin=${stellaviaLocation}&destination=GIFT+City+Gandhinagar`,
  },
];

export default function StrategicallyConnectedSection() {
  return (
    <section className="strategic-section">
      <div className="strategic-container">
        <div className="strategic-content">
          <p className="strategic-eyebrow">Find Us</p>

          <h2 className="strategic-title">
            Strategically <span>Connected</span>
          </h2>

          <div className="strategic-line" />

          <p className="strategic-text">
            Stellavia sits at the heart of Khoraj-Tragad — Ahmedabad&apos;s
            premium growth corridor — with seamless access to everything that
            matters.
          </p>

          <div className="strategic-list">
            {locationPoints.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="strategic-card"
                  key={item.title}
                >
                  <div className="strategic-card-icon">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <div className="strategic-card-info">
                    <h3>{item.title}</h3>
                    <p>{item.meta}</p>
                  </div>

                  <div className="strategic-card-time">
                    <strong>{item.time}</strong>
                    <span>{item.unit}</span>
                  </div>
                </a>
              );
            })}
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${stellaviaLocation}`}
            target="_blank"
            rel="noopener noreferrer"
            className="strategic-map-btn"
          >
            View on Google Maps
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="strategic-map-wrap">
          <div className="strategic-map">
            <iframe
              title="Stellavia Location Map"
              src="https://www.google.com/maps?q=Stellavia,Khoraj-Tragad,Ahmedabad,Gujarat&z=14&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
