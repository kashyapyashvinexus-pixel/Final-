'use client';

import {
  ArrowRight,
  ChevronDown,
  IndianRupee,
  Home,
  Grid3X3,
  Check,
  Clock,
  FileText,
  MapPin,
  ShieldCheck,
  Camera,
  Car,
  Flower2,
  Users,
  Baby,
  Building2,
  Star,
  Mail,
  Dumbbell,
} from 'lucide-react';

const propertyStats = [
  {
    icon: IndianRupee,
    label: 'Price',
    title: '₹85 Lacs*',
    sub: 'Onwards',
  },
  {
    icon: Home,
    label: 'Configuration',
    title: '3 BHK',
    sub: 'Premium Residences',
  },
  {
    icon: Grid3X3,
    label: 'Project Type',
    title: 'Residential',
    sub: 'Luxury Living',
  },
  {
    icon: Check,
    label: 'Property Status',
    title: 'Available',
    sub: 'Booking Open',
  },
  {
    icon: Clock,
    label: 'Possession',
    title: 'Contact for Details',
    sub: 'Timeline',
  },
  {
    icon: FileText,
    label: 'RERA No.',
    title: 'Available on Request',
    sub: 'Approved',
  },
];

const highlights = [
  'Premium 3 BHK Residences',
  'Thoughtfully Planned Layouts',
  'Peaceful Residential Surrounding',
  'Modern Lifestyle Amenities',
  'Spacious Living & Dining Area',
  'Prime Gandhinagar Location',
];

const amenities = [
  {
    icon: Building2,
    title: 'Multi Purpose Hall',
  },
  {
    icon: Dumbbell,
    title: 'Indoor Gym',
  },
  {
    icon: Flower2,
    title: 'Landscaped Garden',
  },
  {
    icon: Baby,
    title: "Children's Play Area",
  },
  {
    icon: ShieldCheck,
    title: '24x7 Security',
  },
  {
    icon: Camera,
    title: 'CCTV Surveillance',
  },
  {
    icon: Car,
    title: 'Parking',
  },
  {
    icon: Users,
    title: 'Community Space',
  },
];

const galleryImages = [
  {
    src: '/img/JB_CAM_04_FFF.webp',
    className: 'gallery-big',
    alt: 'Stellavia Exterior View',
  },
  {
    src: '/img/ST_CAM_02_FFF.webp',
    alt: 'Stellavia Amenity Zone',
  },
  {
    src: '/img/ST_CAM_01_FFF.webp',
    alt: 'Stellavia Garden Area',
  },
  {
    src: '/img/JB_CAM_16_FFF.webp',
    alt: 'Stellavia Interior Space',
  },
  {
    src: '/img/JB_CAM_04_FFF.webp',
    className: 'gallery-wide',
    alt: 'Stellavia Project View',
  },
  {
    src: '/img/ST_CAM_02_FFF.webp',
    alt: 'Stellavia Lifestyle Space',
  },
  {
    src: '/img/ST_CAM_01_FFF.webp',
    alt: 'Stellavia Green Space',
  },
  {
    src: '/img/JB_CAM_16_FFF.webp',
    alt: 'Stellavia Premium Space',
  },
];

export default function StellaviaListingPage() {
  return (
    <main className="stellavia-listing-page">
      <div className="stellavia-listing-wrap">
        <section className="stellavia-hero">
          <div className="stellavia-hero-content">
            <p className="stellavia-eyebrow">Premium Residential Project</p>

            <h1>
              Stellavia
              <br />
              Dream Home
            </h1>

            <div className="stellavia-location-line">
              <MapPin size={17} />
              <span>Khoraj, Gandhinagar</span>
            </div>

            <p className="stellavia-hero-desc">
              Stellavia brings thoughtfully planned 3 BHK premium residences
              with elegant design, peaceful surroundings, modern amenities and a
              lifestyle crafted for comfort, convenience and family living.
            </p>

            <div className="stellavia-hero-actions">
              <a href="#enquire" className="stellavia-btn stellavia-btn-primary">
                Enquire Now <ArrowRight size={16} />
              </a>

              <a href="#details" className="stellavia-btn stellavia-btn-outline">
                View Details <ChevronDown size={15} />
              </a>
            </div>
          </div>

          <div className="stellavia-price-card">
            <p>Starting Price</p>
            <h3>
              ₹85
              <br />
              Lacs*
            </h3>
            <span>Onwards</span>
            <div />
            <small>Contact for latest offer</small>
          </div>
        </section>

        <section className="stellavia-stats-card">
          {propertyStats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="stellavia-stat-item" key={index}>
                <Icon size={22} />
                <div>
                  <p>{item.label}</p>
                  <h4>{item.title}</h4>
                  <span>{item.sub}</span>
                </div>
              </div>
            );
          })}
        </section>

        <section className="stellavia-about" id="details">
          <div className="stellavia-about-image">
            <img src="/img/JB_CAM_04_FFF.webp" alt="Stellavia Project" />

            <div className="stellavia-image-badge">
              <Star size={18} />
              <div>
                <h5>Premium Living</h5>
                <p>Modern residences designed for peaceful family living.</p>
              </div>
            </div>
          </div>

          <div className="stellavia-about-content">
            <p className="stellavia-eyebrow">About Stellavia</p>

            <h2>
              Where Comfort Meets
              <br />
              Modern Lifestyle
            </h2>

            <div className="stellavia-property-lines">
              <p>Premium 3 BHK Residential Project</p>
              <p>Located at Khoraj, Gandhinagar</p>
              <p>Thoughtfully planned homes</p>
              <p>Modern lifestyle amenities</p>
              <p>Peaceful residential environment</p>
              <p>Spacious layouts with premium detailing</p>
              <p>Ideal for family living</p>
              <p>Starting from ₹85 Lacs*</p>
            </div>

            <div className="stellavia-highlight-grid">
              {highlights.map((item, index) => (
                <div className="stellavia-highlight" key={index}>
                  <Check size={15} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="stellavia-section">
          <div className="stellavia-title-center">
            <span />
            <h2>World-Class Amenities</h2>
            <span />
          </div>

          <div className="stellavia-amenities-card">
            {amenities.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="stellavia-amenity" key={index}>
                  <Icon size={24} />
                  <h4>{item.title}</h4>
                </div>
              );
            })}
          </div>
        </section>

        <section className="stellavia-section">
          <div className="stellavia-title-center">
            <span />
            <h2>Project Gallery</h2>
            <span />
          </div>

          <div className="stellavia-gallery">
            {galleryImages.map((image, index) => (
              <button
                className={`stellavia-gallery-item ${image.className || ''}`}
                key={`${image.src}-${index}`}
                type="button"
              >
                <img src={image.src} alt={image.alt} />
              </button>
            ))}
          </div>
        </section>

        <section className="stellavia-section stellavia-map-section">
          <div className="stellavia-title-center">
            <span />
            <h2>Prime Location</h2>
            <span />
          </div>

          <p className="stellavia-map-subtitle">Khoraj, Gandhinagar</p>

          <div className="stellavia-map-card">
            <iframe
              title="Stellavia Location"
              src="https://www.google.com/maps?q=Khoraj%20Gandhinagar%20Gujarat&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <a
              href="https://www.google.com/maps/search/?api=1&query=Khoraj%20Gandhinagar%20Gujarat"
              target="_blank"
              rel="noreferrer"
              className="stellavia-map-btn"
            >
              Open Google Map
            </a>
          </div>
        </section>

        <section className="stellavia-enquiry" id="enquire">
          <div className="stellavia-enquiry-left">
            <img src="/img/ST_CAM_02_FFF.webp" alt="Stellavia Enquiry" />

            <div>
              <p className="stellavia-eyebrow">Enquire Now</p>

              <h2>
                Get Price Details &
                <br />
                Schedule A Visit
              </h2>

              <p className="stellavia-enquiry-text">
                Our sales team will contact you shortly with latest pricing,
                availability, offers and site visit details.
              </p>

              <div className="stellavia-trust-points">
                <span>
                  <Check size={14} /> Starting ₹85 Lacs*
                </span>
                <span>
                  <Check size={14} /> Site Visit Available
                </span>
                <span>
                  <Check size={14} /> Expert Assistance
                </span>
              </div>
            </div>
          </div>

          <form className="stellavia-form">
            <div className="stellavia-form-grid">
              <input type="text" placeholder="Your Name*" />
              <input type="tel" placeholder="Mobile Number*" />

              <div className="stellavia-input-icon">
                <input type="email" placeholder="Email Address" />
                <Mail size={16} />
              </div>

              <input type="text" placeholder="Preferred Date*" />
            </div>

            <textarea placeholder="Your Message" />

            <div className="stellavia-form-actions">
              <a href="tel:+919999999999" className="stellavia-call-btn">
                Call Now
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="stellavia-whatsapp-btn"
              >
                WhatsApp
              </a>

              <button type="submit" className="stellavia-submit-btn">
                Enquire Now <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
