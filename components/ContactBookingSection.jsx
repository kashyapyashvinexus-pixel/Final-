'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactBookingSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Book a Site Visit - Stellavia

Full Name: ${form.name}
Phone Number: ${form.phone}
Email Address: ${form.email}
Interested In: 3BHK Apartment
Budget Range: ₹50L - ₹1.00CR
Message: ${form.message || 'No message'}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/917572818000?text=${encodedMessage}`, '_blank');

    setForm({
      name: '',
      phone: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="contact-booking-section">
      <div className="contact-booking-bg">STELLAVIA</div>

      <div className="contact-booking-wrap">
        <div className="contact-booking-left">
          <p className="contact-eyebrow">Get In Touch</p>

          <h2>
            Start Your <em>Journey Home</em>
          </h2>

          <span className="gold-line"></span>

          <p>
            Our team is ready to help you find the perfect home at Stellavia.
            Book a site visit, request a floor plan, or simply ask us anything.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <span>
                <Phone size={17} />
              </span>
              <div>
                <small>Phone / Whatsapp</small>
                <a href="tel:+917572818000">+91 75728 18000</a>
              </div>
            </div>

            <div className="contact-info-item">
              <span>
                <Mail size={17} />
              </span>
              <div>
                <small>Website</small>
                <a href="https://www.stellavia99.com" target="_blank">
                  www.stellavia99.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <span>
                <MapPin size={17} />
              </span>
              <div>
                <small>Project Site</small>
                <p>
                  Khoraj-Tragad, Village Khoraj
                  <br />
                  Gandhinagar, Ahmedabad – 382421
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-booking-form">
          <p className="contact-eyebrow">Request Information</p>
          <h3>Book a Site Visit</h3>

          <form onSubmit={handleSubmit}>
            <div className="form-two">
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label>
              Email Address
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <div className="form-two">
              <label>
                Interested In
                <input type="text" value="3BHK Apartment" readOnly />
              </label>

              <label>
                Budget Range
                <input type="text" value="₹50L - ₹1.00CR" readOnly />
              </label>
            </div>

            <label>
              Message Optional
              <textarea
                name="message"
                placeholder="Any specific requirements or questions..."
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </label>

            <button type="submit">Book Site Visit →</button>

            <p className="form-note">
              RERA Reg. No: PR/GJ/GANDHINAGAR/GANDHINAGAR/Gandhinagar Municipal
              Corporation/MAA13956/050824/300628. All images are artistic
              impressions. Actual specifications may vary. This is not an
              official booking form.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
