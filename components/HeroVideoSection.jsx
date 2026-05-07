'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroVideoSection() {
  const sectionRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowVideo(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '350px 0px',
        threshold: 0,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-video-section" ref={sectionRef}>
      {showVideo ? (
        <iframe
          className="hero-bg-video"
          src="https://www.youtube.com/embed/FjzMUbXBCnE?autoplay=1&mute=1&loop=1&playlist=FjzMUbXBCnE&controls=0&rel=0&modestbranding=1&playsinline=1&vq=hd1080"
          title="Stellavia Video"
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="hero-bg-video hero-video-placeholder" />
      )}
    </section>
  );
}
