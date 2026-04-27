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
        <div className="gold-corner top-left"></div>
        <div className="gold-corner top-right"></div>
        <div className="gold-diamond top">◆</div>
        <div className="gold-diamond bottom">◆</div>

        <div className="award-visual">
          <div className="laurel laurel-left">❬</div>

          <div className="award-badge">
            <div className="award-crown">♛</div>
            <div className="badge-circle">
              <span className="badge-star">★</span>
              <span className="badge-trophy">🏆</span>
            </div>
            <div className="badge-ribbon">★★★★★</div>
          </div>

          <div className="laurel laurel-right">❭</div>
        </div>

        <div className="award-content">
          <p className="award-label">Award-Winning Excellence</p>
          <h3>Recognized for<br />Quality & Trust</h3>
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
