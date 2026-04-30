export default function HeroVideoSection() {
  return (
    <section className="hero-video-section">
      <video className="hero-bg-video" autoPlay muted loop playsInline>
        <source
          src="/video/Stellavia Video.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
}
