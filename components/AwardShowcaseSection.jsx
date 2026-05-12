const awards = [
  {
    image: "/logo/Jbp with CM.jpeg",
    label: "Trusted Residential Project",
    title: "Premium Living Recognition 2026",
    desc: "A proud milestone for Stellavia, celebrating thoughtful planning, quality construction, and a lifestyle designed for modern families.",
  },
  {
    image: "/logo/Jbp with CM.jpeg",
    label: "Leaders in Design & Quality",
    title: "Excellence in Architecture Award 2026",
    desc: "Honoring our commitment to innovative design, sustainable building practices, and creating spaces that inspire.",
  },
];

export default function AwardShowcaseSection() {
  return (
    <section className="award-showcase-section">
      <div className="award-showcase-card">
        <span className="award-diamond award-diamond-top"></span>
        <span className="award-diamond award-diamond-bottom"></span>

        <div className="award-showcase-inner">
          <div className="award-image award-image-left">
            <img src={awards[0].image} alt={awards[0].title} />
          </div>

          <div className="award-middle-content">
            <article className="award-info award-info-top">
              <div className="award-label">
                <span></span>
                <p>{awards[0].label}</p>
              </div>

              <h2>{awards[0].title}</h2>

              <div className="award-gold-line">
                <span></span>
              </div>

              <p className="award-desc">{awards[0].desc}</p>
            </article>

            <article className="award-info award-info-bottom">
              <div className="award-label">
                <span></span>
                <p>{awards[1].label}</p>
              </div>

              <h2>{awards[1].title}</h2>

              <div className="award-gold-line">
                <span></span>
              </div>

              <p className="award-desc">{awards[1].desc}</p>
            </article>
          </div>

          <div className="award-image award-image-right">
            <img src={awards[1].image} alt={awards[1].title} />
          </div>
        </div>
      </div>
    </section>
  );
}
