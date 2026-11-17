/**
 * BluEnergies Ltd. — Newsletter Subscription Controller
 * Validates email format, verifies required CASL consent, and handles submission states.
 */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#newsletter-form');
  if (!form) return;

  const emailInput = form.querySelector('#newsletter-email');
  const consentCheckbox = form.querySelector('#newsletter-consent');
  const feedbackEl = form.querySelector('#newsletter-feedback');
  const submitBtn = form.querySelector('button[type="submit"]');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    feedbackEl.textContent = '';
    feedbackEl.className = 'form-feedback';

    const emailValue = emailInput.value.trim();
    if (!emailValue || !emailRegex.test(emailValue)) {
      feedbackEl.textContent = 'Enter a valid email address, for example name@company.com.';
      feedbackEl.classList.add('is-error');
      emailInput.focus();
      return;
    }

    if (!consentCheckbox.checked) {
      feedbackEl.textContent = 'Please confirm consent to receive electronic communications.';
      feedbackEl.classList.add('is-error');
      consentCheckbox.focus();
      return;
    }

    // Set loading state
    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Subscribing...';

    const endpoint = form.getAttribute('action') || '';

    if (!endpoint || endpoint === '#' || endpoint === '') {
      // Backend endpoint is not connected
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        feedbackEl.textContent = 'Subscription service is currently in preparation. Please contact info@blu-energies.com directly.';
        feedbackEl.classList.add('is-error');
      }, 500);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailValue })
      });

      if (response.ok) {
        feedbackEl.textContent = 'Thank you. Your subscription request has been received.';
        feedbackEl.classList.add('is-success');
        form.reset();
      } else {
        feedbackEl.textContent = 'Unable to complete subscription at this time. Please try again later.';
        feedbackEl.classList.add('is-error');
      }
    } catch (err) {
      feedbackEl.textContent = 'A connection error occurred. Please try again later.';
      feedbackEl.classList.add('is-error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
});
