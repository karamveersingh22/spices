/* ===========================================================
   Giani Enterprises — demo site interactions
   -----------------------------------------------------------
   Contact details live in ONE place. When the client confirms
   his real number, update PHONE and WHATSAPP below and every
   Call / WhatsApp button on the site updates automatically.
   =========================================================== */
const CONTACT = {
  // Placeholder — replace with the real business number (digits only for wa.me, incl. country code 91)
  PHONE: '+91 XXXXX XXXXX',          // shown / used for tap-to-call
  WHATSAPP: '91XXXXXXXXXX',          // wa.me format: country code + number, no +, no spaces
  WA_MESSAGE: 'Hello Giani Enterprises, I would like a wholesale quote for spices.'
};

document.addEventListener('DOMContentLoaded', () => {
  // ---- Wire up Call + WhatsApp buttons ----
  const telHref = 'tel:' + CONTACT.PHONE.replace(/\s+/g, '');
  const waHref = 'https://wa.me/' + CONTACT.WHATSAPP + '?text=' + encodeURIComponent(CONTACT.WA_MESSAGE);

  document.querySelectorAll('[data-call]').forEach(el => { el.href = telHref; });
  document.querySelectorAll('[data-whatsapp]').forEach(el => {
    el.href = waHref;
    el.target = '_blank';
    el.rel = 'noopener';
  });

  // ---- Sticky header shadow on scroll ----
  const header = document.querySelector('.site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---- Mobile nav toggle ----
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  // ---- Scroll-reveal animation ----
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(el => io.observe(el));
  } else {
    items.forEach(el => el.classList.add('in'));
  }
});
