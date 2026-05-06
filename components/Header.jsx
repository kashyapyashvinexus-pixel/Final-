'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setIsHeaderHidden(false);
      } else if (currentScrollY > lastScrollY.current) {
        // Scroll down = header show
        setIsHeaderHidden(false);
      } else {
        // Scroll up = header hide
        setIsHeaderHidden(true);
        setIsMenuOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isHeaderHidden ? 'header-hidden' : ''}`}>
      <div className="header-shell">
        <Link href="/" className="brand-mark">
          <img
           /* src="/img/logo.png"*/
            src="/img/Stellavia_Blue-gold.png"
            alt="Stellavia"
            className="brand-logo"
          />
        </Link>

        <nav className={`site-nav ${isMenuOpen ? 'is-open' : ''}`}>
          <div className="site-nav-center">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>

          <Link
            href="/contact"
            className="nav-cta"
            onClick={() => setIsMenuOpen(false)}
          >
            Book A Visit
          </Link>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
