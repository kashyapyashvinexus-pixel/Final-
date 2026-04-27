{/*export default function StatsStrip() {
  return (
    <section className="stats-strip full-bleed">
      <div className="single-award-card">
        <div className="award-icon">🏆</div>

        <div>
          <p className="award-label">Award-Winning Excellence</p>
          <h3>Recognized for Quality & Trust</h3>
          <p>
            Stellavia is honoured for its commitment to quality construction,
            thoughtful design, timely delivery, and customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}
*/}

export default function StatsStrip() {
  return (
    <section className="stats-strip full-bleed">
      <div className="single-award-card">
        <div className="award-frame"></div>

        <div className="award-visual">
          <div className="laurel left">‹</div>

          <div className="award-medal">
            <div className="crown">♛</div>
            <div className="medal-circle">
              <span>🏆</span>
            </div>
            <div className="award-ribbon">★★★★★</div>
          </div>

          <div className="laurel right">›</div>
        </div>

        <div className="award-content">
          <p className="award-label">Award-Winning Excellence</p>
          <h3>Recognized for Quality & Trust</h3>

          <div className="award-line">
            <span></span>
            <i>◆</i>
            <span></span>
          </div>

          <p className="award-desc">
            Stellavia is honoured for its commitment to quality construction,
            thoughtful design, timely delivery, and customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}
