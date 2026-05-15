import {
  Star,
  Grid2X2,
  ShieldCheck,
  Globe2,
} from 'lucide-react';

const points = [
  {
    icon: Star,
    title: 'Government Award-Winning Project',
    desc: 'Honoured as "Best Affordable Residential Project" by the Hon. Chief Minister of Gujarat, Shri Bhupendra Bhai Patel — a mark of excellence and trust.',
  },
  {
    icon: Grid2X2,
    title: 'Smart Column-Less Design',
    desc: 'Every square foot counts. Our innovative column-free layouts give you maximum usable space, naturally lit rooms, and true architectural freedom.',
  },
  {
    icon: ShieldCheck,
    title: 'RERA Certified · On-Time Delivery',
    desc: 'Full regulatory compliance with RERA Reg. MAA13956 and a 100% on-time delivery record across 3 completed landmarks. Zero compromises.',
  },
  {
    icon: Globe2,
    title: 'Strategic Khoraj Location',
    desc: "Minutes from SP Ring Road, NH-147, top schools, hospitals, and Ahmedabad's commercial hubs. Everything within reach, every single day.",
  },
];

export default function BuiltForLifeSection() {
  return (
    <section className="built-life-section">
      <div className="built-life-container">

        <div className="built-life-media">
          <div className="built-image built-image-main">
            <img src="/img/JB_CAM_02_FFF-r.webp" alt="Stellavia residential tower" />
          </div>

          <div className="built-image built-image-small">
            <img src="/img/JB_CAM_04_FFF-r.webp" alt="Premium apartment tower" />
          </div>

          <div className="built-years-box">
            <strong>10+</strong>
            <span>YEARS</span>
          </div>
        </div>

        <div className="built-life-content">
          <p className="built-eyebrow">WHY CHOOSE US</p>

          <h2>
            Built for <em>Life,</em>
            <br />
            <em>Not Just</em> Living
          </h2>

          <div className="built-title-line"></div>

          <div className="built-points">
            {points.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="built-point" key={index}>
                  <div className="built-icon">
                    <Icon size={16} strokeWidth={1.7} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
