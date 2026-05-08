'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Project', path: '/projects/stellavia' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Brochure', path: '#' },
  { label: 'News', path: '#' }
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setHideHeader(false);
      } else if (currentScrollY > lastScrollY.current + 8) {
        // Scroll down = header hide
        setHideHeader(true);
        setOpen(false);
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Scroll up = header show
        setHideHeader(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header full-bleed ${hideHeader ? 'is-hidden' : ''}`}>
      <div className="header-shell">
        <Link href="/" className="brand-mark" aria-label="Stellavia Construction Home">
          <Image
            /*src="/logo/Stellavia_Blue-gold.png"*/
            src="/logo/Stellavia_Blue-gold logo.png"
            alt="Stellavia Construction"
            width={360}
            height={110}
            priority
            className="brand-logo"
          />
        </Link>

        <nav className={`site-nav ${open ? 'is-open' : ''}`}>
          <div className="site-nav-center">
            {navItems.map((item) => {
              const active = item.path !== '#' && pathname === item.path;

              return (
                <Link
                  key={item.label}
                  href={item.path}
                  className={active ? 'active' : ''}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>
            Book Visit
          </Link>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
