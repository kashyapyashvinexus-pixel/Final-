'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const BROCHURE_PDF = '/brochure/STELLAVIA%20BROCHURE.pdf';

// Add your business WhatsApp number here.
// Example: const WHATSAPP_NUMBER = '919876543210';
const WHATSAPP_NUMBER = '917572818000';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Project', path: '/projects/stellavia' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'News', path: '#' },
  { label: 'Brochure', type: 'brochure' }
];

function createWhatsappMessage(data) {
  return encodeURIComponent(
    `New Stellavia Brochure Download Lead

Name: ${data.name}
WhatsApp Number: ${data.phone}
Email: ${data.email}
Lead Type: Brochure Download

Please contact this user.`
  );
}

export default function Header() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [showBrochureForm, setShowBrochureForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [loading, setLoading] = useState(false);

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
    document.body.style.overflow = open || showBrochureForm ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open, showBrochureForm]);

  useEffect(() => {
    setOpen(false);
    setShowBrochureForm(false);
  }, [pathname]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const downloadBrochure = () => {
    const link = document.createElement('a');
    link.href = BROCHURE_PDF;
    link.download = 'Stellavia-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBrochureSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill all required details.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/stellavia-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'Brochure Download'
        })
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        alert(result.message || 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${createWhatsappMessage(
        formData
      )}`;

      window.open(whatsappUrl, '_blank');

      setTimeout(() => {
        downloadBrochure();
      }, 700);

      setShowBrochureForm(false);

      setFormData({
        name: '',
        phone: '',
        email: ''
      });
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className={`site-header full-bleed ${hideHeader ? 'is-hidden' : ''}`}>
        <div className="header-shell">
          <Link href="/" className="brand-mark" aria-label="Stellavia Construction Home">
            <Image
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
                if (item.type === 'brochure') {
                  return (
                    <button
                      key={item.label}
                      type="button"
                      className="nav-link-btn"
                      onClick={() => {
                        setOpen(false);
                        setShowBrochureForm(true);
                      }}
                    >
                      {item.label}
                    </button>
                  );
                }

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

      {showBrochureForm && (
        <div
          className="brochure-modal-overlay"
          onClick={() => setShowBrochureForm(false)}
        >
          <div className="brochure-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="brochure-modal-close"
              onClick={() => setShowBrochureForm(false)}
              aria-label="Close brochure form"
            >
              <X size={20} />
            </button>

            <p className="brochure-modal-label">Download Brochure</p>

            <h3>Get Stellavia Brochure</h3>

            <p className="brochure-modal-text">
              Fill your details and the brochure will download automatically.
            </p>

            <form className="brochure-form" onSubmit={handleBrochureSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="WhatsApp Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <button type="submit" disabled={loading}>
                {loading ? 'Please wait...' : 'Submit & Download Brochure'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
