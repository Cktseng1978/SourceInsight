// ============================================================
// 碩思有限公司 — Source Insight Co. Ltd.
// Multilingual one-page site · zh / en / ja
// 翻譯內容請編輯 i18n.js
// ============================================================

// ---------- Translation table (defined in i18n.js) ----------
// Verify i18n is loaded
if (typeof i18n === 'undefined') {
  console.error('i18n.js must be loaded before main.js');
}

// ---------- Apply language ----------
let currentLang = 'zh';

function applyLanguage(lang) {
  const t = i18n[lang];
  if (!t) return;
  currentLang = lang;

  // text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // innerHTML (for bold tags etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // <option> text nodes (select options)
  document.querySelectorAll('option[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // html lang attribute + font class
  document.documentElement.lang = lang === 'zh' ? 'zh-TW' : lang;
  document.documentElement.setAttribute('data-lang', lang);

  // active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // reset select to first option
  const sel = document.getElementById('service');
  if (sel) sel.selectedIndex = 0;

  // persist choice
  try { localStorage.setItem('si-lang', lang); } catch (_) {}
}

// ---------- Navbar scroll effect ----------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks  = document.querySelector('.nav-links');

const navToggleLabels = {
  open:  { zh: '關閉選單', en: 'Close menu',  ja: 'メニューを閉じる' },
  close: { zh: '開啟選單', en: 'Open menu',   ja: 'メニューを開く'   },
};

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  navToggle.setAttribute('aria-label', isOpen
    ? navToggleLabels.open[currentLang]
    : navToggleLabels.close[currentLang]);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ---------- Language switcher ----------
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

// ---------- Scroll-triggered animations ----------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

function initAnimations() {
  const selectors = [
    '.about-text', '.about-stats',
    '.service-card',
    '.strength-item',
    '.contact-info', '.contact-form',
    '.section-header',
  ];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('fade-up');
      if (i === 1) el.classList.add('fade-up-delay-1');
      if (i === 2) el.classList.add('fade-up-delay-2');
      if (i === 3) el.classList.add('fade-up-delay-3');
      observer.observe(el);
    });
  });
}

// ---------- Active nav highlight ----------
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) current = section.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--gold)' : '';
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// ---------- Contact form ----------
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');

  const submitMessages = { zh: '傳送中…',              en: 'Sending…',       ja: '送信中…' };
  const doneMessages   = { zh: '✓ 已成功送出，謝謝您！', en: '✓ Sent! Thank you.', ja: '✓ 送信完了しました。' };
  const errorMessages  = { zh: '✗ 傳送失敗，請稍後再試', en: '✗ Failed. Please try again.', ja: '✗ 送信失敗。もう一度お試しください。' };

  btn.textContent = submitMessages[currentLang] || submitMessages.zh;
  btn.disabled = true;

  const payload = {
    name:    document.getElementById('name').value.trim(),
    company: document.getElementById('company').value.trim(),
    email:   document.getElementById('email').value.trim(),
    service: document.getElementById('service').value,
    message: document.getElementById('message').value.trim(),
  };

  try {
    const res = await fetch('https://formspree.io/f/meepbrzq', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body:    JSON.stringify(payload),
    });

    if (!res.ok) throw new Error('Server error');

    btn.textContent = doneMessages[currentLang] || doneMessages.zh;
    btn.style.background = '#2d6a4f';
    btn.style.color = '#fff';
    contactForm.reset();

    setTimeout(() => {
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
      applyLanguage(currentLang);
    }, 4000);

  } catch (_) {
    btn.textContent = errorMessages[currentLang] || errorMessages.zh;
    btn.style.background = '#b00020';
    btn.style.color = '#fff';

    setTimeout(() => {
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
      applyLanguage(currentLang);
    }, 4000);
  }
});

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  // Assemble email at runtime to deter address scrapers
  const u = 'toshikatsu1978', d = 'gmail.com';
  const emailEl = document.getElementById('contactEmail');
  if (emailEl) {
    const a = document.createElement('a');
    a.className = 'contact-value';
    a.href = 'mailto:' + u + '@' + d;
    a.textContent = u + '@' + d;
    emailEl.replaceWith(a);
  }

  // Restore saved language or detect browser preference
  let savedLang = 'zh';
  try { savedLang = localStorage.getItem('si-lang') || 'zh'; } catch (_) {}
  if (!i18n[savedLang]) savedLang = 'zh';

  applyLanguage(savedLang);
  initAnimations();
  updateActiveNav();
});
