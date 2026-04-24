'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollOverlapGallery({ images = [] }) {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const stackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const stack = stackRef.current;
    if (!section || !sticky || !stack || !images.length) return;

    const cards = gsap.utils.toArray('.overlap-card', stack);
    const ctx = gsap.context(() => {
      gsap.set(cards, { transformOrigin: 'center center', willChange: 'transform, opacity' });

      cards.forEach((card, index) => {
        gsap.set(card, {
          yPercent: index === 0 ? 0 : 18,
          scale: index === 0 ? 1 : 0.94,
          rotate: index % 2 === 0 ? -1.4 : 1.4,
          autoAlpha: index === 0 ? 1 : 0,
          zIndex: cards.length - index
        });
      });

      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        scrollTrigger: {
          trigger: sticky,
          start: 'top top+=96',
          end: `+=${Math.max(cards.length - 1, 1) * 1000}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;
        const nextCard = cards[index + 1];
        tl.to(card, { scale: 0.92, yPercent: -8, autoAlpha: 0.18, duration: 0.9 }, index)
          .fromTo(nextCard, { yPercent: 18, scale: 0.94, autoAlpha: 0, zIndex: cards.length + index }, { yPercent: 0, scale: 1, autoAlpha: 1, duration: 0.9 }, index + 0.15)
          .to({}, { duration: 0.55 }, index + 0.95);
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, [images]);

  const stageHeight = `${Math.max(images.length * 90, 220)}vh`;

  return (
    <section ref={sectionRef} className="section-block overlap-gallery-section">
      <div className="overlap-copy">
        <p className="section-label">Luxury Scroll Experience</p>
        <h2 className="premium-heading">Images reveal one by one while you scroll.</h2>
        <p className="section-text body-large">Each visual enters in sequence, so the next image appears only when the previous one moves away.</p>
      </div>
      <div className="overlap-gallery-stage" style={{ minHeight: stageHeight }}>
        <div ref={stickyRef} className="overlap-sticky-shell">
          <div ref={stackRef} className="overlap-stack">
            {images.map((image, index) => (
              <article key={image} className="overlap-card">
                <img src={image} alt={`Stellavia premium residence visual ${index + 1}`} />
                <div className="overlap-card-overlay" />
                <div className="overlap-card-caption">
                  <span>0{index + 1}</span>
                  <strong>{index % 2 === 0 ? 'Signature Exterior' : 'Premium Interior View'}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
