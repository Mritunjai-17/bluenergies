/**
 * BluEnergies Ltd. — Navigation Controller
 * Handles mobile drawer toggle, keyboard navigation, trap focus, and accessibility.
 */
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.nav-toggle-btn');
  const closeBtn = document.querySelector('.mobile-nav-close');
  const mobileSheet = document.querySelector('.mobile-nav-sheet');

  if (!toggleBtn || !mobileSheet) return;

  function openMenu() {
    mobileSheet.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
    const firstFocusable = mobileSheet.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) firstFocusable.focus();
  }

  function closeMenu() {
    mobileSheet.classList.remove('is-open');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.focus();
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = mobileSheet.classList.contains('is-open');
    if (isOpen) closeMenu();
    else openMenu();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  // Keyboard navigation: Escape key closes menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileSheet.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // Focus trap within open sheet
  mobileSheet.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusables = mobileSheet.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        last.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  });
});
