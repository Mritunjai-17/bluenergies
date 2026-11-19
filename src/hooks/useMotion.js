'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * Hook to detect when an element enters the viewport.
 * Automatically checks prefers-reduced-motion and triggers immediately if above fold.
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, trigger immediately
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      if (ref.current) ref.current.classList.add('is-in-view');
      return;
    }

    if (!ref.current) return;

    // Check if element is already within viewport on mount
    const rect = ref.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true);
      ref.current.classList.add('is-in-view');
      return;
    }

    const observerOptions = {
      threshold: options.threshold !== undefined ? options.threshold : 0.08,
      rootMargin: options.rootMargin || '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        entry.target.classList.add('is-in-view');
        observer.unobserve(entry.target);
      }
    }, observerOptions);

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, inView];
}

/**
 * Hook to animate a numeric counter with cubic easing.
 */
export function useCountUp(endValue, duration = 1600, start = false, options = {}) {
  const { decimals = 0, formatSeparator = true } = options;
  const [count, setCount] = useState(start ? endValue : 0);

  useEffect(() => {
    if (!start) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(endValue);
      return;
    }

    let startTime = null;
    let frameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Custom ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = ease * endValue;

      setCount(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [endValue, duration, start]);

  // Formatting output
  if (decimals > 0) {
    return count.toFixed(decimals);
  }

  const rounded = Math.round(count);
  return formatSeparator ? rounded.toLocaleString() : rounded.toString();
}
