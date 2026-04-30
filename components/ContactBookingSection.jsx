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
    <section className="clean-contact-section">
      <div className="clean-contact-card">
        <div className="clean-contact-heading">
          <p>Get In Touch</p>
          <h2>Contact Us</h2>
          <span></span>
          <h4>
            Share your details and our team will get in touch with you shortly.
          </h4>
        </div>

        <form className="clean-contact-form" onSubmit={handleSubmit}>
          <div className="clean-form-two">
            <label>
              <strong>Full Name</strong>
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
              <strong>Phone Number</strong>
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

          <label>
            <strong>Email Address</strong>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <div className="clean-form-two">
            <label>
              <strong>Interested In</strong>
              <input type="text" value="3BHK Apartment" readOnly />
            </label>

            <label>
              <strong>Budget Range</strong>
              <input type="text" value="₹50L - ₹1.00CR" readOnly />
            </label>
          </div>

          <label>
            <strong>Message (Optional)</strong>
            <textarea
              name="message"
              placeholder="Tell us about your requirement..."
              value={form.message}
              onChange={handleChange}
            ></textarea>
          </label>

          <button type="submit">Send Enquiry</button>
        </form>

        <div className="clean-contact-info">
          <a href="tel:+917572818000">
            <span>
              <Phone size={18} />
            </span>
            +91 75728 18000
          </a>

          <i></i>

          <a href="mailto:sales@stellavia99.com">
            <span>
              <Mail size={18} />
            </span>
            sales@stellavia99.com
          </a>
        </div>
      </div>
    </section>
  );
}
