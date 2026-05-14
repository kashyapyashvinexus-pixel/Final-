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

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus('');
    setStatusType('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
          interestedIn: '3BHK Apartment',
          budgetRange: '₹50L - ₹1.00CR',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send enquiry.');
      }

      setStatus('Your enquiry has been sent successfully.');
      setStatusType('success');

      setForm({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setStatus(error.message || 'Something went wrong. Please try again.');
      setStatusType('error');
    } finally {
      setLoading(false);
    }
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

          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Enquiry'}
          </button>

          {status && (
            <p
              className={`clean-form-status ${
                statusType === 'error' ? 'error' : 'success'
              }`}
            >
              {status}
            </p>
          )}
        </form>

        <div className="clean-contact-info">
          <a href="tel:+917572818000">
            <span>
              <Phone size={18} />
            </span>
            +91 75728 18000
          </a>

          <i></i>

          <a href="mailto:infinitystellavia99@gmail.com">
            <span>
              <Mail size={18} />
            </span>
            infinitystellavia99@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
