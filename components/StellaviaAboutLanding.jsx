'use client';

import { useState } from 'react';
import {
  Building2,
  LayoutGrid,
  Maximize2,
  Utensils,
  BedDouble,
  Wind,
  Trophy,
  ShieldCheck,
  MapPin,
  Clock3,
  Blocks,
  FileCheck2,
  Users,
  ArrowRight,
  Download,
  Plus,
  X,
} from 'lucide-react';

const WHATSAPP_NUMBER = '917572818000'; // change this number
const BROCHURE_FILE = '/brochure/STELLAVIA BROCHURE.pdf'; // your existing brochure path

const features = [
  { icon: Building2, title: 'Only 2 flats', sub: 'per floor' },
  { icon: LayoutGrid, title: 'Column-less', sub: 'planning' },
  { icon: Maximize2, title: 'Zero wasted', sub: 'space' },
  { icon: Utensils, title: 'Dedicated', sub: 'dining area' },
  { icon: BedDouble, title: 'Spacious', sub: 'bedrooms' },
  { icon: Wind, title: 'Better privacy and', sub: 'ventilation' },
  { icon: Trophy, title: 'Award-winning', sub: 'residential project' },
  { icon: ShieldCheck, title: 'RERA certified', sub: 'project' },
  { icon: MapPin, title: 'Located at', sub: 'Khoraj, Gandhinagar' },
];

const trustPoints = [
  { icon: Trophy, title: 'Government', sub: 'award-winning project' },
  { icon: Clock3, title: 'On-time delivery', sub: 'commitment' },
  { icon: Blocks, title: 'Quality construction', sub: 'materials' },
  { icon: FileCheck2, title: 'Transparent', sub: 'planning' },
  { icon: Users, title: 'Family-first', sub: 'layouts' },
  { icon: MapPin, title: 'Strategic', sub: 'connectivity' },
];

function ScaleRuler({ dark = false }) {
  return (
    <div className={`scale-ruler ${dark ? 'dark-scale-ruler' : ''}`}>
      <span style={{ '--pos': '0%' }}>12</span>
      <span style={{ '--pos': '20%' }}>9</span>
      <span style={{ '--pos': '40%' }}>7</span>
      <span style={{ '--pos': '60%' }}>3</span>
      <span style={{ '--pos': '80%' }}>2</span>
    </div>
  );
}

export default function StellaviaAboutLanding() {
  const [loading, setLoading] = useState(false);
  const [brochureModal, setBrochureModal] = useState(false);

  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    visitDate: '',
  });

  const [brochureForm, setBrochureForm] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const createWhatsappMessage = (data, type) => {
    return encodeURIComponent(
      `Hello Stellavia Team,\n\n` +
        `New ${type} Inquiry:\n\n` +
        `Name: ${data.name}\n` +
        `Phone: ${data.phone}\n` +
        `Email: ${data.email}\n` +
        `${data.visitDate ? `Preferred Visit Date: ${data.visitDate}\n` : ''}` +
        `${data.message ? `Message: ${data.message}\n` : ''}` +
        `\nSource: Stellavia Website`
    );
  };

  const downloadBrochure = () => {
    const link = document.createElement('a');
    link.href = BROCHURE_FILE;
    link.download = 'Stellavia-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const submitLead = async (data, type, shouldDownload = false) => {
    setLoading(true);

    try {
      const res = await fetch('/api/stellavia-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, type }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        alert(result.message || 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${createWhatsappMessage(
        data,
        type
      )}`;

      window.open(whatsappUrl, '_blank');

      if (shouldDownload) {
        setTimeout(() => {
          downloadBrochure();
          setBrochureModal(false);
        }, 700);
      }

      alert('Thank you! Your inquiry has been submitted.');

      setInquiryForm({
        name: '',
        phone: '',
        email: '',
        visitDate: '',
      });

      setBrochureForm({
        name: '',
        phone: '',
        email: '',
      });
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }

    setLoading(false);
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();

    submitLead(
      {
        name: inquiryForm.name,
        phone: inquiryForm.phone,
        email: inquiryForm.email,
        visitDate: inquiryForm.visitDate,
        message: 'Private site visit inquiry.',
      },
      'Site Visit',
      false
    );
  };

  const handleBrochureSubmit = (e) => {
    e.preventDefault();

    submitLead(
      {
        name: brochureForm.name,
        phone: brochureForm.phone,
        email: brochureForm.email,
        message: 'I want to download Stellavia brochure.',
      },
      'Brochure Download',
      true
    );
  };

  return (
    <>
      <section className="stellavia-about-landing">
        {/* 01 Our Story */}
        <div className="story-section">
          <ScaleRuler />

          <div className="section-number">01</div>

          <div className="story-copy">
            <span className="mini-label">Our Story</span>

            <h1>
              From thoughtful <br />
              planning to trusted delivery.
            </h1>

            <span className="gold-line" />

            <p>
              At Stellavia, every detail begins with purpose. From intelligent layouts
              to premium construction, our focus is to create homes that simplify
              your life and elevate your everyday. With award-winning planning,
              RERA certification, and a commitment to on-time delivery, Stellavia
              reflects the trust of hundreds of happy families.
            </p>
          </div>

          <div className="story-visual">
            <div className="blueprint-circle" />
            <div className="drafting-line drafting-line-top" />
            <div className="drafting-line drafting-line-right" />
            <div className="draft-cross" />

            <img
              src="/landing image/3.png"
              alt="Stellavia residential towers"
            />

            <div className="trust-seal">
              <span>★</span>
              <small>
                Planned with Purpose <br />
                Delivered with Trust
              </small>
            </div>
          </div>
        </div>

        {/* 02 Why Stellavia */}
        <div className="why-blueprint-section">
          <aside className="why-side">
            <div className="section-number dark-number">02</div>

            <span className="mini-label gold-label">
              Why Stellavia <br />
              Stands Apart
            </span>

            <span className="gold-line" />

            <div className="floor-sketch">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </aside>

          <div className="why-content">
            <h2>
              Premium 3 BHK Homes with <em>Practical Luxury</em>
            </h2>

            <div className="features-grid">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div className="feature-item" key={index}>
                    <Icon size={34} strokeWidth={1.5} />
                    <h3>{item.title}</h3>
                    <p>{item.sub}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 03 Comfort */}
        <div className="comfort-section">
          <div className="comfort-copy">
            <div className="section-number">03</div>

            <span className="mini-label gold-label">Built Around</span>

            <h2>
              Everyday <br />
              Comfort
            </h2>

            <span className="gold-line" />

            <p>
              Thoughtfully designed column-free layouts create open, airy spaces
              that adapt to your lifestyle. From natural light and ventilation to
              smart space utilization, every element is planned to bring ease,
              comfort, and joy to your everyday living.
            </p>
          </div>

          <div className="plan-visual">
            <img src="/img/floor-plan.webp" alt="Stellavia floor plan" />
          </div>

          <div className="comfort-image">
            <div className="comfort-draft-corner" />

            <img
              src="/img/lifestyle-balcony.webp"
              alt="Stellavia lifestyle balcony"
            />

            <div className="vertical-dots">
              <span className="active" />
              <span />
              <span />
            </div>
          </div>
        </div>

        {/* 04 Trust */}
        <div className="trust-section">
          <div className="trust-heading">
            <div className="section-number">04</div>
            <span className="mini-label gold-label">Trust & Assurance</span>
            <span className="gold-line" />
          </div>

          <div className="trust-grid">
            {trustPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="trust-item" key={index}>
                  <Icon size={42} strokeWidth={1.5} />
                  <h3>{item.title}</h3>
                  <p>{item.sub}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 05 Contact Form */}
        <div className="about-contact-section" id="stellavia-contact-form">
          <ScaleRuler />

          <div className="about-contact-copy">
            <div className="about-contact-title-row">
              <div className="section-number">05</div>

              <div>
                <span className="mini-label gold-label">Contact Us</span>
                <span className="gold-line" />
              </div>
            </div>

            <h2>
              Book Your <br />
              <em>Private Site Visit.</em>
            </h2>

            <span className="gold-line" />

            <p>
              Share your details and our team will help you with brochure, floor plan,
              pricing information, and a guided visit for Stellavia.
            </p>

            <div className="contact-pills">
              <span>Brochure</span>
              <span>Floor Plan</span>
              <span>Site Visit Assistance</span>
            </div>
          </div>

          <form className="about-enquiry-card" onSubmit={handleInquirySubmit}>
            <div className="about-form-title">
              <div className="about-plus-box">
                <Plus size={24} />
              </div>

              <div>
                <h3>Send Enquiry</h3>
                <p>Our sales team will connect with you shortly.</p>
              </div>
            </div>

            <input
              type="text"
              placeholder="Full Name"
              required
              value={inquiryForm.name}
              onChange={(e) =>
                setInquiryForm({ ...inquiryForm, name: e.target.value })
              }
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={inquiryForm.phone}
              onChange={(e) =>
                setInquiryForm({ ...inquiryForm, phone: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              value={inquiryForm.email}
              onChange={(e) =>
                setInquiryForm({ ...inquiryForm, email: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Preferred Visit Date"
              value={inquiryForm.visitDate}
              onChange={(e) =>
                setInquiryForm({ ...inquiryForm, visitDate: e.target.value })
              }
            />

            <button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Enquiry'}
            </button>

            <small>
              or call directly <br />
              +91 75728 18000
            </small>
          </form>
        </div>

        {/* 06 Closing CTA */}
        <div className="closing-section">
          <ScaleRuler dark />

          <div className="closing-draft-circle" />
          <div className="closing-draft-box" />

          <div className="section-number dark-number">06</div>

          <div className="closing-copy">
            <h2>
              A Home That <em>Solves</em> <br />
              More Than It Shows.
            </h2>

            <span className="gold-line" />

            <p>
              Stellavia is more than a home—it’s a smarter way of living. Designed
              with care, built with integrity, and delivered with trust, it’s where
              your best days begin.
            </p>

            <div className="closing-actions">
              <a href="#stellavia-contact-form" className="primary-btn">
                Book Visit <ArrowRight size={18} />
              </a>

              <button
                type="button"
                className="outline-btn"
                onClick={() => setBrochureModal(true)}
              >
                Download Brochure <Download size={17} />
              </button>
            </div>
          </div>

          <div className="closing-image">
            <img
              src="/img/project-night.webp"
              alt="Stellavia project night view"
            />
          </div>
        </div>
      </section>

      {brochureModal && (
        <div className="brochure-modal">
          <div className="brochure-modal-card">
            <button
              type="button"
              className="modal-close"
              onClick={() => setBrochureModal(false)}
            >
              <X size={22} />
            </button>

            <span className="mini-label gold-label">Download Brochure</span>

            <h3>Fill your details first</h3>

            <p>
              After submitting this form, your brochure will download automatically.
            </p>

            <form onSubmit={handleBrochureSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                required
                value={brochureForm.name}
                onChange={(e) =>
                  setBrochureForm({ ...brochureForm, name: e.target.value })
                }
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={brochureForm.phone}
                onChange={(e) =>
                  setBrochureForm({ ...brochureForm, phone: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                value={brochureForm.email}
                onChange={(e) =>
                  setBrochureForm({ ...brochureForm, email: e.target.value })
                }
              />

              <button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit & Download'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
