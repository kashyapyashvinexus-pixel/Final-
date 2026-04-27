export default function StatsStrip() {
  return (
    <section className="lux-award-section">
      <div className="lux-award-card">
        <span className="lux-diamond lux-top">◆</span>
        <span className="lux-diamond lux-bottom">◆</span>

        <div className="lux-award-left">
          <img
            src="/award-medal.png"
            alt="Award Medal"
            className="lux-award-image"
          />
        </div>

        <div className="lux-award-content">
          <p className="lux-award-label">
            <span></span>
            Award-Winning Excellence
            <span></span>
          </p>

          <h3>
            Recognized for
            <br />
            Quality & Trust
          </h3>

          <div className="lux-line">
            <span></span>
            <i>◆</i>
            <span></span>
          </div>

          <p className="lux-desc">
            Stellavia is honoured for its commitment to quality construction,
            thoughtful design, timely delivery, and customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}
