/* ═══════════════════════════════════════════════
   NAIM SALIM PORTFOLIO — SHARED JAVASCRIPT
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── SCROLL PROGRESS BAR ── */
  const bar = document.createElement('div');
  bar.id = 'progress-bar';
  document.body.prepend(bar);

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.body.scrollHeight - window.innerHeight;
    bar.style.width = (scrolled / total * 100) + '%';
  }, { passive: true });

  /* ── NAVBAR SCROLL EFFECT ── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  /* ── HAMBURGER MENU ── */
  const hamburger = document.querySelector('.hamburger');
  const drawer = document.querySelector('.nav-drawer');
  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      drawer.classList.toggle('open');
    });
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        drawer.classList.remove('open');
      });
    });
  }

  /* ── BACK TO TOP ── */
  const btt = document.createElement('button');
  btt.id = 'back-to-top';
  btt.innerHTML = '↑';
  btt.title = 'Back to top';
  document.body.appendChild(btt);
  window.addEventListener('scroll', () => {
    btt.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── REVEAL ON SCROLL ── */
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  /* ── TYPEWRITER (hero only) ── */
  const tw = document.querySelector('.hero-typewriter');
  if (tw) {
    const phrases = [
      'Full Stack Developer',
      'Mobile Engineer',
      'Cloud Architect',
      'AI Practitioner',
      'Chess Player ♟'
    ];
    let phraseIdx = 0, charIdx = 0, deleting = false;

    function type() {
      const phrase = phrases[phraseIdx];
      if (!deleting) {
        tw.textContent = phrase.substring(0, charIdx + 1);
        charIdx++;
        if (charIdx === phrase.length) {
          setTimeout(() => { deleting = true; type(); }, 2000);
          return;
        }
        setTimeout(type, 80);
      } else {
        tw.textContent = phrase.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
        }
        setTimeout(type, 45);
      }
    }
    setTimeout(type, 1200);
  }

  /* ── SKILL FILTER ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card[data-category]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      skillCards.forEach(card => {
        const match = cat === 'all' || card.dataset.category === cat;
        card.style.display = match ? '' : 'none';
        card.style.animation = match ? 'fade-up 0.4s ease' : '';
      });
    });
  });

  /* ── MODAL SYSTEM ── */
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const target = document.getElementById(trigger.dataset.modal);
      if (target) {
        target.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target.closest('.modal-close')) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(m => {
        m.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  });

  /* ── CONTACT FORM ── */
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Opening mail client...';
      setTimeout(() => { btn.textContent = 'Send Message'; }, 3000);
    });
  }

  /* ── ANIMATE NUMBER COUNTERS ── */
  const counters = document.querySelectorAll('[data-count]');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.count);
        let count = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          count = Math.min(count + step, target);
          el.textContent = count + (el.dataset.suffix || '');
          if (count >= target) clearInterval(timer);
        }, 40);
        countObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => countObserver.observe(c));

});
