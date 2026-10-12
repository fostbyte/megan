/**
 * PROSPECTUS PORTFOLIO - MEGAN FOSTER
 * Interactive script: Palette switching, copy feedback, inquiry mailer
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Palette Theme Switcher (Navy, Banknote, Charcoal)
  const paletteButtons = document.querySelectorAll('.palette-btn');
  const storedTheme = localStorage.getItem('prospectus-theme') || 'navy';

  const setTheme = (themeName) => {
    if (themeName === 'navy') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', themeName);
    }
    paletteButtons.forEach(btn => {
      const isActive = btn.getAttribute('data-theme') === themeName;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    localStorage.setItem('prospectus-theme', themeName);
  };

  setTheme(storedTheme);

  paletteButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTheme = btn.getAttribute('data-theme');
      if (targetTheme) {
        setTheme(targetTheme);
        showToast(`Theme switched to ${btn.getAttribute('title') || targetTheme}`);
      }
    });
  });

  // 3. Toast Notifications
  const toast = document.getElementById('toast');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2600);
  }

  // 4. One-Click Copy to Clipboard
  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const val = btn.getAttribute('data-copy');
      if (!val) return;

      try {
        await navigator.clipboard.writeText(val);
        showToast(`Copied to clipboard: ${val}`);
      } catch {
        const textarea = document.createElement('textarea');
        textarea.value = val;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copied: ${val}`);
      }
    });
  });

  // 5. Fast Inquiry Form
  const form = document.getElementById('inquiry-form');
  const statusEl = document.getElementById('form-status');

  if (form && statusEl) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#inquiry-name')?.value.trim();
      const email = form.querySelector('#inquiry-email')?.value.trim();
      const subject = form.querySelector('#inquiry-subject')?.value.trim() || 'Supply Chain Internship / Role Inquiry';
      const message = form.querySelector('#inquiry-message')?.value.trim();

      if (!name || !email || !message) {
        statusEl.textContent = 'Please fill out all required fields.';
        statusEl.className = 'form-status error';
        return;
      }

      const bodyText = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
      const mailtoUrl = `mailto:mfoster2@usf.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

      statusEl.textContent = 'Opening your email client to send to mfoster2@usf.edu...';
      statusEl.className = 'form-status success';
      showToast('Opening default email application...');

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 600);
    });
  }
});
