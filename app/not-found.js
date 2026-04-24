import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page-hero not-found">
      <div className="section-block narrow-top">
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p>The page you are looking for does not exist.</p>
        <Link href="/" className="primary-btn">Back Home</Link>
      </div>
    </section>
  );
}
