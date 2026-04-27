const amenities = [
  { title: 'Children Play Area', image: '/img/ST_CAM_05_FFF.webp' },
  { title: 'Gymnasium', image: '/img/IMG_4238.webp' },
  { title: 'Landscaped Garden', image: '/img/ST_CAM_03_FFF.webp' },
  { title: 'Club House', image: '/img/IMG_4239.webp' },
  { title: 'Indoor Games', image: '/img/IMG_4239.webp' },
  { title: 'Security System', image: '/img/IMG_4236.webp' },
  { title: 'Basement Parking', image: '/img/IMG_4240.webp' },
  { title: 'Lift', image: '/img/JB_CAM_FFF_FOYER.webp' },
];

export default function AmenitiesFlip() {
  return (
    <section className="section-block amenities-section">
      <div className="section-heading">
        <p className="eyebrow">Amenities</p>
        <h2>Key Features Designed for Premium Everyday Living</h2>
        <p>
          Explore lifestyle features crafted for comfort, safety, and modern
          community living.
        </p>
      </div>

      {/*  <div className="amenities-flip-grid">
        {amenities.map((item) => (
          <div className="amenity-card" key={item.title}>
            <img src={item.image} alt={item.title} />

            <div className="amenity-overlay">
              <span className="amenity-icon">✦</span>
              <h3>{item.title}</h3>
              <p>View Amenity</p>
            </div>
          </div>
        ))}
      </div>*/}
    </section>
  );
}
