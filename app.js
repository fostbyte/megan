/**
 * MEGAN FOSTER - TRANSPOCO STYLE PORTFOLIO
 * Client-side interactive enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year in Footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Header Scroll State
  const header = document.getElementById('header');
  const handleScroll = () => {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. Mobile Navigation Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });

    // Close menu when clicking any mobile link
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // 4. Transpoco Experience Tabs Interaction
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');

      // Update button states
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Update panel visibility
      if (target === 'all') {
        // Show boutique as default or all
        tabPanels.forEach(p => p.classList.remove('active'));
        const firstPanel = document.getElementById('panel-boutique');
        if (firstPanel) firstPanel.classList.add('active');
      } else {
        tabPanels.forEach(p => {
          if (p.id === `panel-${target}`) {
            p.classList.add('active');
          } else {
            p.classList.remove('active');
          }
        });
      }
    });
  });

  // 5. Transpoco Accordion ("Take Control of Operations")
  const accordionItems = document.querySelectorAll('.transpoco-accordion-item');

  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all items
      accordionItems.forEach(otherItem => {
        otherItem.classList.remove('open');
        const otherTrigger = otherItem.querySelector('.accordion-trigger');
        const otherIcon = otherItem.querySelector('.acc-icon');
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        if (otherIcon) otherIcon.textContent = '+';
      });

      // If it wasn't open, open it
      if (!isOpen) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        const icon = item.querySelector('.acc-icon');
        if (icon) icon.textContent = '–';
      }
    });
  });

  // 6. Toast Notification System
  const toast = document.getElementById('toast');
  let toastTimeout = null;

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  };

  // 7. Copy to Clipboard Functionality
  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Copied to clipboard: ${textToCopy}`);
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copied: ${textToCopy}`);
      }
    });
  });

  // 8. Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = contactForm.querySelector('#form-name').value.trim();
      const email = contactForm.querySelector('#form-email').value.trim();
      const subject = contactForm.querySelector('#form-subject').value.trim() || 'Supply Chain Internship Opportunity';
      const message = contactForm.querySelector('#form-message').value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = 'Please fill out all required fields.';
        formStatus.className = 'form-status-msg error';
        return;
      }

      const mailtoUrl = `mailto:mfoster2@usf.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

      formStatus.innerHTML = `Opening your email client to send to <strong>mfoster2@usf.edu</strong>...`;
      formStatus.className = 'form-status-msg success';

      showToast('Opening email client...');
      
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 700);
    });
  }
});
