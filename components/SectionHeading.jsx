export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="section-label">{eyebrow}</p> : null}
      <h2 className="premium-heading">{title}</h2>
      {text ? <p className="section-text body-large">{text}</p> : null}
    </div>
  );
}
