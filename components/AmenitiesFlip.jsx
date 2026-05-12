const amenities = [
  { title: 'Children Play Area', image: '/img/ST_CAM_05_FFF.webp' },
  { title: 'Gymnasium', image: '/img/IMG_4238.webp' },
  { title: 'Multi Purpose Hall', image: '/img/IMG_4239.webp' },
  { title: 'Indoor Games', image: '/img/IMG_4239.webp' },
  { title: 'Security System', image: '/img/IMG_4236.webp' },
  { title: 'Basement Parking', image: '/img/IMG_4240.webp' },
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
