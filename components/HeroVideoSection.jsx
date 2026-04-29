export default function HeroVideoSection() {
  return (
    <section className="hero-video-section">
      <video
        className="hero-bg-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/img/hero-fallback.webp"
      >
        <source
          src="https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/q_auto,f_auto,w_1920/YOUR_VIDEO.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-video-overlay" />

      <div className="hero-video-content">
        <p>Premium Living</p>
        <h1>STELLAVIA</h1>
        <h2>Premium 3 BHK at Khoraj, Gandhinagar</h2>
        <span>Affordable Luxury. Elevated Living.</span>
      </div>
    </section>
  );
}
