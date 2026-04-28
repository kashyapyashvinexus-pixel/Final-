import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer full-bleed">
      <div className="footer-bg-text">STELLAVIA</div>

      <div className="footer-main">
        <div className="footer-brand">
          <p className="footer-eyebrow">Stellavia Construction</p>
          <h3>
            Premium homes shaped with refined architecture, thoughtful planning,
            and long-lasting construction trust.
          </h3>
          <p>
            Designed for modern families who value comfort, privacy, space,
            and a superior everyday lifestyle.
          </p>
        </div>

        <div className="footer-col">
          <h4>Pages</h4>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/floor-plans">Floor Plans</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>Khoraj, Ahmedabad</p>
          <a href="mailto:sales@stellavia.com">sales@stellavia.com</a>
          <a href="tel:+919876543210">+91 98765 43210</a>
        </div>

        <div className="footer-col">
          <h4>Project Highlights</h4>
          <p>3 BHK Premium Residences</p>
          <p>Basement Parking</p>
          <p>2 Units Per Floor</p>
          <p>Cross Ventilated Homes</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Stellavia Construction. All rights reserved.</p>
        <p>Built with Next.js for stronger SEO performance.</p>
      </div>
    </footer>
  );
}
