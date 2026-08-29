/**
 * Berater Impex - Contact Page & Investment Inquiry Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  prefillProjectQuery();
});

function prefillProjectQuery() {
  const params = new URLSearchParams(window.location.search);
  const project = params.get('project');
  const messageArea = document.getElementById('message');
  const plotSelect = document.getElementById('plotSize');

  if (project) {
    if (messageArea && !messageArea.value) {
      messageArea.value = `I am interested in acquiring a verified plot in ${project}. Please provide master plan details, available inventory, and installment options.`;
    }
  }
}

function initContactForm() {
  const form = document.getElementById('inquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim();
    const plotSize = document.getElementById('plotSize')?.value;
    const message = document.getElementById('message')?.value.trim();

    if (!fullName || !phone) {
      alert('Please provide your Full Name and Phone Number.');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : 'Submit Inquiry';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="material-symbols-outlined animate-spin" style="animation: spin 1s linear infinite;">sync</span>
        Submitting...
      `;
    }

    setTimeout(() => {
      if (typeof showToast === 'function') {
        showToast(`Thank you, ${fullName}! Your inquiry has been received. An advisor will contact you shortly on ${phone}.`);
      } else {
        alert('Thank you! Your inquiry has been registered.');
      }

      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    }, 800);
  });
}
