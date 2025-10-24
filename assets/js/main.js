// Theme handling: auto, dark, light with persistence and prefers-color-scheme
(function themeController() {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const storageKey = 'preferred-theme';

  function applyTheme(mode) {
    if (mode === 'auto') {
      root.setAttribute('data-theme', 'auto');
    } else if (mode === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
    }
  }

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function initTheme() {
    const saved = localStorage.getItem(storageKey);
    applyTheme(saved || 'auto');
  }

  function nextMode(current) {
    if (current === 'auto') return 'dark';
    if (current === 'dark') return 'light';
    return 'auto';
  }

  function currentMode() {
    return root.getAttribute('data-theme') || 'auto';
  }

  function labelFor(mode) {
    if (mode === 'auto') return `Auto (${getSystemTheme()})`;
    return mode[0].toUpperCase() + mode.slice(1);
  }

  initTheme();
  if (toggle) {
    toggle.title = `Theme: ${labelFor(currentMode())}`;
    toggle.addEventListener('click', () => {
      const next = nextMode(currentMode());
      applyTheme(next);
      localStorage.setItem(storageKey, next);
      toggle.title = `Theme: ${labelFor(next)}`;
    });
  }
})();

// Mobile nav toggle
(function navController() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  // Close menu on link click (mobile)
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Assign directional reveal classes to groups (alternate L/R, single -> right)
(function directionalRevealAssigner() {
  function applyTo(selector) {
    const items = Array.from(document.querySelectorAll(selector));
    if (items.length === 0) return;
    if (items.length === 1) {
      items[0].classList.add('reveal', 'from-right');
      return;
    }
    items.forEach((el, idx) => {
      el.classList.add('reveal');
      el.classList.add(idx % 2 === 0 ? 'from-right' : 'from-left');
    });
  }

  // Projects, About cards, Timeline entries
  applyTo('.projects-grid > .project-card');
  applyTo('.about-grid > .card');
  applyTo('.timeline .timeline-card');
})();

// Scroll reveal using IntersectionObserver
(function scrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || revealEls.length === 0) {
    revealEls.forEach((el) => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
  revealEls.forEach((el) => observer.observe(el));
})();

// Scrollspy: highlight active nav link based on section in viewport
(function scrollSpy() {
  const links = Array.from(document.querySelectorAll('.nav-link'));
  const sections = links
    .map((l) => document.querySelector(l.getAttribute('href')))
    .filter(Boolean);
  if (sections.length === 0) return;

  function setActive(id) {
    links.forEach((l) => {
      if (l.getAttribute('href') === `#${id}`) l.classList.add('active');
      else l.classList.remove('active');
    });
  }

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (visible[0]) {
      setActive(visible[0].target.id);
    }
  }, { rootMargin: '-20% 0px -60% 0px', threshold: [0.1, 0.25, 0.5, 0.75, 1] });

  sections.forEach((s) => observer.observe(s));
})();

// Contact form with direct email sending
(function contactForm() {
  const form = document.getElementById('contactForm');
  const status = document.querySelector('.form-status');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    
    if (!name || !email || !message) {
      showStatus('Please fill in all required fields.', 'error');
      return;
    }

    // Show loading state
    showStatus('Opening email client...', 'loading');
    
    // Add loading animation to button
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Create email content
    const subject = `New Message from Portfolio Contact Form - ${name}`;
    const body = `Hello Phani,

You have received a new message from your portfolio contact form:

Name: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from your portfolio website.`;

    // Create mailto link
    const mailtoLink = `mailto:phanisubrahmanyamnagidi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setTimeout(() => {
      showStatus('Thank you! Your email client has opened. Please send the email to complete your message.', 'success');
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1000);
  });

  function showStatus(message, type) {
    status.textContent = message;
    status.style.opacity = '0';
    status.style.transform = 'translateY(10px)';
    
    // Set color based on type
    switch(type) {
      case 'success':
        status.style.color = '#10b981';
        break;
      case 'error':
        status.style.color = '#ef4444';
        break;
      case 'loading':
        status.style.color = '#3b82f6';
        break;
      default:
        status.style.color = '#6b7280';
    }
    
    // Animate in
    setTimeout(() => {
      status.style.transition = 'all 0.3s ease';
      status.style.opacity = '1';
      status.style.transform = 'translateY(0)';
    }, 10);
  }
})();

// Footer year
(function footerYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();




