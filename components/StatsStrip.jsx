const awards = [
  {
    image: "/logo/Jbp with CM.jpeg",
    label: "Award-Winning Excellence",
    title: "Times Realty Awards",
    subtitle: "Gujarat 2026",
    desc: 'Stellavia is proud to be honored as the "Best Affordable Residential Project" by the Honorable Chief Minister of Gujarat, Shri Bhupendra Bhai Patel.',
  },
  {
    image: "/logo/Jbp with CM.jpeg",
    label: "Trusted Residential Project",
    title: "Premium Living",
    subtitle: "Recognition 2026",
    desc: "A proud milestone for Stellavia, celebrating thoughtful planning, quality construction, and a lifestyle designed for modern families.",
  },
];

export default function StatsStrip() {
  return (
    <section className="lux-award-section">
      <div className="lux-awards-grid">
        {awards.map((award, index) => (
          <div className="lux-award-card" key={index}>
            <span className="lux-diamond lux-top">◆</span>
            <span className="lux-diamond lux-bottom">◆</span>

            <div className="lux-award-image-box">
              <img
                src={award.image}
                alt={award.title}
                className="lux-award-image"
              />
            </div>

            <div className="lux-award-content">
              <p className="lux-award-label">{award.label}</p>

              <h3>
                {award.title}
                <br />
                {award.subtitle}
              </h3>

              <div className="lux-line">
                <span></span>
                <i>◆</i>
                <span></span>
              </div>

              <p className="lux-desc">{award.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
