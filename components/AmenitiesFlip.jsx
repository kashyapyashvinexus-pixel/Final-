const amenities = [
  { title: 'Swimming Pool', image: '/images/amenity-pool.jpg' },
  { title: 'Gymnasium', image: '/images/amenity-gym.jpg' },
  { title: 'Landscaped Garden', image: '/images/amenity-garden.jpg' },
  { title: 'Children Play Area', image: '/images/amenity-play.jpg' },
  { title: 'Club House', image: '/images/amenity-clubhouse.jpg' },
  { title: 'Indoor Games', image: '/images/amenity-indoor.jpg' },
  { title: 'Security System', image: '/images/amenity-security.jpg' },
  { title: 'Basement Parking', image: '/images/amenity-parking.jpg' },
];

export default function AmenitiesFlip() {
  return (
    <section className="section-block amenities-section">
      <div className="section-heading">
        <p className="eyebrow">Amenities</p>
        <h2>Key Features Designed for Premium Everyday Living</h2>
        <p>
          Hover on each amenity to explore the lifestyle features crafted for comfort,
          safety, and modern community living.
        </p>
      </div>

      <div className="amenities-flip-grid">
        {amenities.map((item) => (
          <div className="amenity-flip-card" key={item.title}>
            <div className="amenity-flip-inner">
              <div className="amenity-front">
                <span>✦</span>
                <h3>{item.title}</h3>
              </div>

              <div className="amenity-back">
                <img src={item.image} alt={item.title} />
                <div className="amenity-back-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
