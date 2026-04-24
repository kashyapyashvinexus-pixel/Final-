'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Floor Plans', path: '/floor-plans' },
  { label: 'Contact', path: '/contact' }
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
            src="stellavia-update-final-next
/public/Stellavia Logo - Light BG & Gradient Colors - RGB.jpg"
            alt="Stellavia Construction"
            width={160}
            height={48}
            priority
            className="brand-logo"
          />
        </Link>

        <nav className={`site-nav ${open ? 'is-open' : ''}`}>
          <div className="site-nav-center">
            {navItems.map((item) => {
              const active =
                pathname === item.path ||
                (item.path !== '/' && pathname.startsWith(item.path));

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={active ? 'active' : ''}
                >
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
