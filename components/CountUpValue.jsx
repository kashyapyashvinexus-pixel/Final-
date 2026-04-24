'use client';

import { useEffect, useRef, useState } from 'react';

function parseValue(value) {
  const match = String(value).match(/([\d.]+)/);
  const numeric = match ? Number(match[1]) : 0;
  return {
    numeric,
    prefix: String(value).startsWith('+') ? '+' : '',
    suffix: String(value).replace(/^[\d.+-]+/, ''),
    hasDecimal: String(value).includes('.'),
  };
}

export default function CountUpValue({ value }) {
  const [display, setDisplay] = useState(value);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const { numeric, suffix, hasDecimal } = parseValue(value);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;

        const duration = 1400;
        const start = performance.now();

        const update = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = numeric * eased;
          const formatted = hasDecimal ? current.toFixed(1) : Math.round(current).toString();
          setDisplay(`${formatted}${suffix}`);
          if (progress < 1) {
            requestAnimationFrame(update);
          }
        };

        requestAnimationFrame(update);
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{display}</span>;
}
