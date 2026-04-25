import Link from 'next/link';

export default function ContactBookingSection() {
  return (
    <section className="contact-booking-section section-block">
      <div className="contact-booking-bg">STELLAVIA</div>

      <div className="contact-booking-wrap">
        <div className="contact-booking-left">
          <p className="section-label">Get In Touch</p>

          <h2>
            Start Your <em>Journey Home</em>
          </h2>

          <span className="gold-line" />

          <p>
            Our team is ready to help you find the perfect home at Stellavia.
            Book a site visit, request a floor plan, or simply ask us anything.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <span>☎</span>
              <div>
                <small>Phone / WhatsApp</small>
                <Link href="tel:+917572818000">+91 75728 18000</Link>
              </div>
            </div>

            <div className="contact-info-item">
              <span>✉</span>
              <div>
                <small>Website</small>
                <Link href="https://www.stellavia99.com">www.stellavia99.com</Link>
              </div>
            </div>

            <div className="contact-info-item">
              <span>⌖</span>
              <div>
                <small>Project Site</small>
                <p>Khoraj-Tragad, Village Khoraj<br />Gandhinagar, Ahmedabad – 382421</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-booking-form">
          <p className="section-label">Request Information</p>
          <h3>Book a Site Visit</h3>

          <form>
            <div className="form-two">
              <label>
                Full Name
                <input type="text" placeholder="Your name" />
              </label>

              <label>
                Phone Number
                <input type="tel" placeholder="+91 XXXXX XXXXX" />
              </label>
            </div>

            <label>
              Email Address
              <input type="email" placeholder="your@email.com" />
            </label>

            <div className="form-two">
              <label>
                Interested In
                <select>
                  <option>2 BHK Apartment</option>
                  <option>3 BHK Apartment</option>
                  <option>Site Visit</option>
                  <option>Floor Plan</option>
                </select>
              </label>

              <label>
                Budget Range
                <select>
                  <option>₹30L – ₹50L</option>
                  <option>₹50L – ₹75L</option>
                  <option>₹75L – ₹1Cr</option>
                  <option>₹1Cr+</option>
                </select>
              </label>
            </div>

            <label>
              Message Optional
              <textarea placeholder="Any specific requirements or questions..." />
            </label>

            <button type="submit">Book Site Visit →</button>

            <small className="form-note">
              RERA Reg. No: PR/GJ/GANDHINAGAR/GANDHINAGAR/Gandhinagar Municipal
              Corporation/MAA13956/050824/300628. This is not an official booking form.
            </small>
          </form>
        </div>
      </div>
    </section>
  );
}
