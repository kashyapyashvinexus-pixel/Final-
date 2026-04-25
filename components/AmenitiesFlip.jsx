const amenities = [
  { title: 'Lift', image: '/img/JB_CAM_FFF_FOYER.webp' },
  { title: 'Gymnasium', image: '/img/IMG_4238.JPG.jpg' },
  { title: 'Landscaped Garden', image: '/img/ST_CAM_03_FFF.webp' },
  { title: 'Children Play Area', image: '/img/ST_CAM_05_FFF.webp' },
  { title: 'Club House', image: '/img/IMG_4239.JPG.jpg' },
  { title: 'Indoor Games', image: '/img/IMG_4239.JPG.jpg' },
  { title: 'Security System', image: '/img/IMG_4236.JPG.jpg' },
  { title: 'Basement Parking', image: '/img/IMG_4240.JPG.jpg' },
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
