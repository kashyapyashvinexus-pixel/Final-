export default function HeroVideoSection() {
  return (
    <section className="hero-video-section">
      <video className="hero-bg-video" autoPlay muted loop playsInline>
        <source
          src="https://res.cloudinary.com/diauur8uy/video/upload/v1777464372/Stellavia_video_xpxzlq.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
}
