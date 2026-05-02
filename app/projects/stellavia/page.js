import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  MapPin,
  Home,
  Trees,
  Download,
  ArrowRight,
  ShieldCheck,
  Landmark,
  MapPinned,
} from 'lucide-react';

const amenities = [
  {
    title: 'Skyline Clubhouse',
    image: '/img/JB_CAM_04_FFF.webp',
  },
  {
    title: 'Infinity Pool',
    image: '/img/ST_CAM_02_FFF.webp',
  },
  {
    title: 'Landscaped Gardens',
    image: '/img/ST_CAM_01_FFF.webp',
  },
  {
    title: 'Indoor Gym',
    image: '/img/JB_CAM_16_FFF.webp',
  },
  {
    title: "Children's Play Area",
    image: '/img/JB_CAM_04_FFF.webp',
  },
];

const galleryImages = [
  '/img/JB_CAM_04_FFF.webp',
  '/img/ST_CAM_02_FFF.webp',
  '/img/ST_CAM_01_FFF.webp',
  '/img/JB_CAM_16_FFF.webp',
  '/img/JB_CAM_04_FFF.webp',
];

export default function StellaviaProjectPage() {
  return (
    <main className="single-project-page">
      {/* HERO */}
      <section className="project-hero">
        <div className="project-hero-bg">
          <Image
            src="/img/JB_CAM_04_FFF.webp"
            alt="Stellavia Project"
            fill
            priority
            className="project-hero-img"
          />
          <div className="project-hero-overlay" />
        </div>

        <div className="project-hero-content">
          <div className="project-hero-left">
            <p className="project-eyebrow">Signature Launch</p>
            <h1>Stellavia</h1>
            <p className="project-hero-text">
              Luxury apartment towers with skyline amenities and elegant urban
              planning.
            </p>

            <div className="hero-info-row">
              <span>
                <Building2 size={16} />
                3 & 4 BHK Residences
              </span>
              <span>
                <MapPin size={16} />
                Sargasan, Gandhinagar
              </span>
            </div>
          </div>

          <div className="price-card">
            <p>Starting From</p>
            <h3>₹1.32 Cr*</h3>
            <span>Onwards</span>

            <ul>
              <li>
                <Building2 size={17} />
                <div>
                  <small>Project Type</small>
                  <strong>Luxury Apartment</strong>
                </div>
              </li>

              <li>
                <Landmark size={17} />
                <div>
                  <small>Towers</small>
                  <strong>4 Towers</strong>
                </div>
              </li>

              <li>
                <Home size={17} />
                <div>
                  <small>Total Units</small>
                  <strong>512 Residences</strong>
                </div>
              </li>

              <li>
                <ShieldCheck size={17} />
                <div>
                  <small>RERA Number</small>
                  <strong>PR/GJ/GANDHINAGAR/2026/000000</strong>
                </div>
              </li>
            </ul>

            <Link href="/contact" className="price-main-btn">
              Book a Visit
            </Link>

            <Link href="/brochure" className="download-link">
              <Download size={15} />
              Download Brochure
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="project-about-section">
        <div className="project-container about-grid">
          <div>
            <p className="project-small-title">About Stellavia</p>
            <h2>Elevated Living, Redefined.</h2>
            <p>
              Stellavia reimagines luxury living with thoughtfully designed
              residences, lush green landscapes, and world-class amenities.
              Every detail is crafted to elevate your lifestyle and inspire
              everyday excellence.
            </p>

            <Link href="/about" className="outline-small-btn">
              Explore More
            </Link>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <Building2 />
              <h3>4</h3>
              <p>Towers</p>
            </div>

            <div className="stat-card">
              <Home />
              <h3>512</h3>
              <p>Luxury Residences</p>
            </div>

            <div className="stat-card">
              <MapPinned />
              <h3>4.2</h3>
              <p>Acres Land Parcel</p>
            </div>

            <div className="stat-card">
              <Trees />
              <h3>80%</h3>
              <p>Open Spaces</p>
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="project-section light-section">
        <div className="project-container">
          <div className="section-top-row">
            <div>
              <p className="project-small-title">World-Class Amenities</p>
              <h2>A curated lifestyle for every family.</h2>
            </div>

            <Link href="/amenities" className="view-all-link">
              View All Amenities <ArrowRight size={16} />
            </Link>
          </div>

          <div className="amenity-image-row">
            {amenities.map((item, index) => (
              <div className="amenity-image-card" key={index}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="amenity-img"
                />
                <div className="amenity-img-overlay" />
                <h4>{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="project-section">
        <div className="project-container">
          <div className="section-top-row">
            <div>
              <p className="project-small-title">Gallery</p>
              <h2>Experience Stellavia visually.</h2>
            </div>
          </div>

          <div className="project-gallery-row">
            {galleryImages.map((img, index) => (
              <div className="gallery-thumb" key={index}>
                <Image src={img} alt="Stellavia Gallery" fill />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOOR PLAN + LOCATION */}
      <section className="project-section plan-location-section">
        <div className="project-container plan-location-grid">
          <div className="floor-plan-card">
            <p className="project-small-title">Floor Plans</p>
            <h3>Spacious layouts designed for comfort and elegance.</h3>

            <div className="floor-plan-preview">
              <Image
                src="/img/floor-plan.png"
                alt="Floor Plan"
                fill
                className="floor-plan-img"
              />
            </div>

            <Link href="/floor-plans" className="outline-small-btn">
              View Floor Plans
            </Link>
          </div>

          <div className="location-card">
            <p className="project-small-title">Location Advantage</p>
            <h3>Strategically located in Sargasan, Gandhinagar.</h3>

            <ul>
              <li>10 mins to GIFT City</li>
              <li>15 mins to SG Highway</li>
              <li>Close to schools, malls and hospitals</li>
            </ul>

            <div className="map-preview">
              <MapPin size={42} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="project-cta-section">
        <div className="project-container">
          <div className="project-cta-box">
            <div>
              <p>Ready to experience Stellavia?</p>
              <h2>Book your exclusive visit today.</h2>
            </div>

            <Link href="/contact" className="cta-gold-btn">
              Book a Visit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
