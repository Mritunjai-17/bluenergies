'use client';

import { useEffect } from 'react';

/**
 * High-performance, centralized scroll animation observer for BluEnergies.
 * Observes all `.motion-fade-up`, `.motion-fade`, `.motion-stagger`, and `[data-animate]` elements.
 * Unobserves after initial trigger for zero CPU/scroll overhead.
 * Handles reduced-motion preferences, dynamic hydration, and safe fallback.
 */
export default function ScrollAnimationObserver() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Accessibility: Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.motion-fade-up, .motion-fade, .motion-stagger, [data-animate]').forEach((el) => {
        el.classList.add('is-in-view');
      });
      return;
    }

    // 2. Optimized IntersectionObserver instance
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in-view');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // 3. Scan and register elements
    const observeElements = () => {
      const candidates = document.querySelectorAll(
        '.motion-fade-up:not(.is-in-view), .motion-fade:not(.is-in-view), .motion-stagger:not(.is-in-view), [data-animate]:not(.is-in-view)'
      );

      candidates.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If already visible above or inside the current viewport, trigger immediately
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-in-view');
        } else {
          observer.observe(el);
        }
      });
    };

    // Initial scan
    observeElements();

    // 4. MutationObserver for dynamic hydration or DOM insertions
    let mutationTimer = null;
    const mutationObserver = new MutationObserver(() => {
      if (mutationTimer) clearTimeout(mutationTimer);
      mutationTimer = setTimeout(observeElements, 100);
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // 5. Fallback safety: Reveal any remaining offscreen elements after a safe delay
    // to guarantee no content remains permanently hidden if layout shifts occur.
    const safetyTimer = setTimeout(() => {
      document.querySelectorAll('.motion-fade-up:not(.is-in-view), .motion-fade:not(.is-in-view)').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 250) {
          el.classList.add('is-in-view');
        }
      });
    }, 2800);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      if (mutationTimer) clearTimeout(mutationTimer);
      clearTimeout(safetyTimer);
    };
  }, []);

  return null;
}
