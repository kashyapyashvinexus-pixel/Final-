'use client';

import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

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
    <section className="lux-contact-section">
      <div className="lux-contact-card">
        <span className="lux-border-diamond lux-border-diamond-top"></span>
        <span className="lux-border-diamond lux-border-diamond-bottom"></span>

        <div className="lux-contact-inner">
          <div className="lux-contact-heading">
            <div className="lux-eyebrow-wrap">
              <span></span>
              <p>Get In Touch</p>
              <span></span>
            </div>

            <h2>Contact Us</h2>

            <div className="lux-title-diamond"></div>

            <p>
              We would love to hear from you. Share your details and our team
              will get in touch shortly.
            </p>
          </div>

          <form className="lux-contact-form" onSubmit={handleSubmit}>
            <div className="lux-form-two">
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
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
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="lux-form-two">
              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Interested In
                <input type="text" value="3BHK Apartment" readOnly />
              </label>
            </div>

            <label>
              Message
              <textarea
                name="message"
                placeholder="Type your message here..."
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </label>

            <button type="submit">
              Send Enquiry <span>→</span>
            </button>
          </form>

          <div className="lux-contact-divider">
            <span></span>
            <i></i>
            <span></span>
          </div>

          <div className="lux-contact-info-row">
            <div className="lux-contact-info-box">
              <div className="lux-contact-icon">
                <Phone size={20} />
              </div>
              <div>
                <small>Call us:</small>
                <a href="tel:+917572818000">+91 75728 18000</a>
              </div>
            </div>

            <div className="lux-contact-info-line"></div>

            <div className="lux-contact-info-box">
              <div className="lux-contact-icon">
                <Mail size={20} />
              </div>
              <div>
                <small>Email:</small>
                <a href="mailto:sales@stellavia99.com">
                  sales@stellavia99.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


