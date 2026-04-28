import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="luxury-footer full-bleed">
      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>
      <div className="footer-big-text">STELLAVIA</div>

      <div className="luxury-footer-inner">
        <div className="footer-top-card">
          <div>
            <p className="footer-label">Stellavia Construction</p>
            <h2>Where premium living meets timeless architecture.</h2>
          </div>

          <Link href="/contact" className="footer-cta">
            Book Site Visit
            <span>→</span>
          </Link>
        </div>

        <div className="footer-content-grid">
          <div className="footer-brand-area">
            <h3>Stellavia</h3>
            <p>
              Thoughtfully planned premium residences in Ahmedabad with elegant
              spaces, privacy-first layouts, and construction you can trust.
            </p>

            <div className="footer-mini-stats">
              <div>
                <strong>3 BHK</strong>
                <span>Premium Homes</span>
              </div>
              <div>
                <strong>2</strong>
                <span>Units Per Floor</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Cross Ventilation</span>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/floor-plans">Floor Plans</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-column">
            <h4>Project</h4>
            <p>3 BHK Premium Flats</p>
            <p>Basement Parking</p>
            <p>2 Lifts Per Block</p>
            <p>Dedicated Dining Area</p>
            <p>Front-Facing Balcony</p>
          </div>

          <div className="footer-column contact-column">
            <h4>Contact</h4>
            <p>Khoraj, Ahmedabad</p>
            <a href="mailto:sales@stellavia.com">sales@stellavia.com</a>
            <a href="tel:+919876543210">+91 98765 43210</a>

            <div className="footer-socials">
              <a href="#">IG</a>
              <a href="#">FB</a>
              <a href="#">IN</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-line">
          <p>© 2026 Stellavia Construction. All rights reserved.</p>
          <p>Premium Real Estate Website by Yashvi Nexus</p>
        </div>
      </div>
    </footer>
  );
}
