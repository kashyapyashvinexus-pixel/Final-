import Link from 'next/link';
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  MapPin,
  Mail,
  Phone,
  Building2,
  Car,
  ArrowUpDown,
  Utensils,
  Columns3,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="luxury-footer full-bleed">
      <span className="footer-bg-text">STELLAVIA</span>

      <div className="luxury-footer-inner">
        <div className="footer-content-grid">
          <div className="footer-brand-area">
            <h3>Stellavia</h3>
            <p>
              Thoughtfully planned premium residences in Ahmedabad with elegant
              spaces, privacy-first layouts, and construction you can trust.
            </p>
          </div>

          <div className="footer-column footer-links-column">
            <h4>Explore</h4>

            <Link href="/">
              Home <span>→</span>
            </Link>
            <Link href="/about">
              About <span>→</span>
            </Link>
            <Link href="/projects/stellavia">
              Projects <span>→</span>
            </Link>
            <Link href="/brochure/STELLAVIA BROCHURE.pdf">
              Brochure <span>→</span>
            </Link>
            <Link href="/contact">
              Contact <span>→</span>
            </Link>
          </div>

          <div className="footer-column project-column">
            <h4>Project</h4>

            <p>
              <Building2 size={24} />
              3 BHK Premium Flats
            </p>
            <p>
              <Car size={24} />
              Basement Parking
            </p>
            <p>
              <ArrowUpDown size={24} />
              2 Lifts Per Block
            </p>
            <p>
              <Utensils size={24} />
              Dedicated Dining Area
            </p>
            <p>
              <Columns3 size={24} />
              Front-Facing Balcony
            </p>
          </div>

          <div className="footer-column contact-column">
            <h4>Contact</h4>

            <a href="https://maps.google.com/?q=Khoraj Ahmedabad" target="_blank" rel="noreferrer">
              <MapPin size={24} />
              Khoraj, Ahmedabad
            </a>

            <a href="mailto:sales@stellavia.com">
              <Mail size={24} />
              sales@stellavia.com
            </a>

            <a href="tel:+917572818000">
              <Phone size={24} />
              +91 75728 18000
            </a>

            <div className="follow-title">Follow Us</div>

            <div className="footer-socials">
              <a
                href="https://www.instagram.com/stellavia___/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.facebook.com/stellavia01/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>

              <a href="#" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>

              <a href="#" aria-label="YouTube">
                <Youtube size={20} />
              </a>
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
