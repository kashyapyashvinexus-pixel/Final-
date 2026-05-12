const amenities = [
  { title: 'Children Play Area', image: '/amenities/children-play-area.png' },
  { title: 'Gymnasium', image: '/amenities/gymnasium.png' },
  { title: 'Multi Purpose Hall', image: '/amenities/multi-purpose-hall.png' },
  { title: 'Indoor Games', image: '/amenities/indoor-games.png' },
  { title: 'Security System', image: '/amenities/security-system.png' },
  { title: 'Basement Parking', image: '/amenities/basement-parking.png' },
];

export default function AmenitiesFlip() {
  return (
    <section className="section-block amenities-section">
      <div className="amenities-bg-leaf"></div>

      <div className="amenities-heading">
        <div className="amenities-eyebrow-wrap">
          <span></span>
          <p>Curated For You</p>
          <span></span>
        </div>

        <div className="amenities-diamond">◇</div>

        <h2>
          Where Every Comfort
          <br />
          Has Been Curated
        </h2>

        <p className="amenities-subtitle">
          Thoughtfully designed amenities that bring ease, elegance
          <br />
          and a better lifestyle to every day.
        </p>
      </div>

      <div className="amenities-card-grid">
        {amenities.map((item, index) => (
          <article className="amenity-card" key={item.title}>
            <div className="amenity-card-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="amenity-card-content">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
