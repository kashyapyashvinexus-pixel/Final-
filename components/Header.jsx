'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '#' },
  { label: 'Projects', path: '#' },
  { label: 'Floor Plans', path: '#' },
  { label: 'Contact', path: '#' }
];

export default function Header() {
  const headerRef = useRef(null);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!headerRef.current) return;

    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
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
    <header ref={headerRef} className="site-header full-bleed">
      <div className="header-shell">
        <Link href="/" className="brand-mark" aria-label="Stellavia Construction Home">
          <Image
            src="/logo/Stellavia Logo.jpg"
            alt="Stellavia Construction"
            width={280}
            height={84}
            priority
            className="brand-logo"
          />
        </Link>

        <nav className={`site-nav ${open ? 'is-open' : ''}`}>
          <div className="site-nav-center">
            {navItems.map((item) => {
              const active = item.path !== '#' && pathname === item.path;

              return (
                <Link key={item.label} href={item.path} className={active ? 'active' : ''}>
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Link href="/contact" className="nav-cta">
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
