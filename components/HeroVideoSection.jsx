export default function HeroVideoSection() {
  return (
    <section className="hero-video-section">
      <video className="hero-bg-video" autoPlay muted loop playsInline>
        <source
          src="https://res.cloudinary.com/diauur8uy/video/upload/q_auto,f_auto/v1777441650/Stellavia_video_xvlxra.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-video-overlay" />

      <div className="hero-video-content">
        <p className="hero-eyebrow">Premium Walkthrough</p>
        <h2>Experience Stellavia</h2>
        <p>Step into premium living crafted for modern families.</p>
      </div>
    </section>
  );
}
