export default function HeroVideoSection() {
  return (
    <section className="hero-video-section">
      <iframe
        className="hero-bg-video"
        src="https://www.youtube.com/embed/FjzMUbXBCnE?autoplay=1&mute=1&loop=1&playlist=FjzMUbXBCnE&controls=0&rel=0&modestbranding=1&playsinline=1"
        title="Stellavia Video"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
}
