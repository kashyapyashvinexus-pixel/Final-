import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="luxury-footer full-bleed">
      <div className="luxury-footer-inner">
        <div className="footer-content-grid">
          <div className="footer-brand-area">
            <p className="footer-label">Stellavia Construction</p>
            <h3>Stellavia</h3>
            <p>
              Thoughtfully planned premium residences in Ahmedabad with elegant
              spaces, privacy-first layouts, and construction you can trust.
            </p>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Projects</Link>
            <Link href="/">Floor Plans</Link>
            <Link href="/">Contact</Link>
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
            <a href="tel:+917572818000">+91 75728 18000</a>

            <div className="footer-socials">
              <a href="https://www.instagram.com/stellavia___/" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/stellavia01/" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
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
