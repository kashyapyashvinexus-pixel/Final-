import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer full-bleed">
      <div className="section-block footer-grid">
        <div>
          <p className="eyebrow">Stellavia Construction</p>
          <h3>Luxury flats and apartments shaped with premium architecture and strong construction trust.</h3>
        </div>
        <div>
          <h4>Pages</h4>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/floor-plans">Floor Plans</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h4>Contact</h4>
          <p>SG Highway, Ahmedabad</p>
          <p>sales@stellavia.com</p>
          <p>+91 98765 43210</p>
        </div>
      </div>
      <div className="section-block footer-bottom">
        <p>© 2026 Stellavia Construction. All rights reserved.</p>
        <p>Built in Next.js for stronger SEO on Google.</p>
      </div>
    </footer>
  );
}
