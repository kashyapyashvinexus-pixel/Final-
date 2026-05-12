const awards = [
  {
    image: "/sample house image/01.webp",
    label: "Trusted Residential Project",
    title: "Premium Living Recognition 2026",
    desc: "A proud milestone for Stellavia, celebrating thoughtful planning, quality construction, and a lifestyle designed for modern families.",
  },
  {
    image: "/sample house image/31.webp",
    label: "Leaders in Design & Quality",
    title: "Excellence in Architecture Award 2026",
    desc: "Honoring our commitment to innovative design, sustainable building practices, and creating spaces that inspire.",
  },
];

export default function AwardsSplitSection() {
  return (
    <section className="exact-awards-section">
      <div className="exact-awards-box">
        <span className="exact-awards-diamond exact-awards-diamond-top"></span>
        <span className="exact-awards-diamond exact-awards-diamond-bottom"></span>

        <div className="exact-awards-border"></div>

        <div className="exact-awards-layout">
          <div className="exact-awards-img exact-awards-img-left">
            <img src={awards[0].image} alt={awards[0].title} />
          </div>

          <div className="exact-awards-content">
            <article className="exact-awards-text exact-awards-text-top">
              <div className="exact-awards-label">
                <span></span>
                <p>{awards[0].label}</p>
              </div>

              <h2>{awards[0].title}</h2>

              <div className="exact-awards-line">
                <span></span>
              </div>

              <p className="exact-awards-desc">{awards[0].desc}</p>
            </article>

            <article className="exact-awards-text exact-awards-text-bottom">
              <div className="exact-awards-label">
                <span></span>
                <p>{awards[1].label}</p>
              </div>

              <h2>{awards[1].title}</h2>

              <div className="exact-awards-line">
                <span></span>
              </div>

              <p className="exact-awards-desc">{awards[1].desc}</p>
            </article>
          </div>

          <div className="exact-awards-img exact-awards-img-right">
            <img src={awards[1].image} alt={awards[1].title} />
          </div>
        </div>
      </div>
    </section>
  );
}
