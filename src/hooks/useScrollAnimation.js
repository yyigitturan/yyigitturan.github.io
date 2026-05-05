import { useEffect, useRef, useState } from 'react';

/**
 * IntersectionObserver helper for scroll-triggered animations.
 * @param {{ rootMargin?: string; threshold?: number; once?: boolean }} options
 */
export function useScrollAnimation(options = {}) {
  const { rootMargin = '-80px', threshold = 0.12, once = true } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return { ref, isVisible };
}
