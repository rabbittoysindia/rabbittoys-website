// ============================================
// RabbitToys — Shared header/footer/whatsapp injection
// ============================================

const WHATSAPP_NUMBER = "919881742326";
const WHATSAPP_TEXT = "Hello%20RabbitToys!%20I'd%20like%20to%20enquire%20about%20your%20toys.";
const EMAIL = "rabbittoysindia@gmail.com";

// Determine current page for active nav highlighting
const currentPage = (window.location.pathname.split('/').pop() || 'index.html').replace('.html', '') || 'index';

function navLink(href, label, slug) {
  const active = (slug === currentPage) ? ' active' : '';
  return `<li><a href="${href}" class="nav-link${active}">${label}</a></li>`;
}

const HEADER_HTML = `
<div class="announce">
  Free shipping across India on orders above <span>₹1,499</span> · Crafted with care since 2018
</div>
<header>
  <div class="container">
    <div class="nav">
      <a href="index.html" class="logo-wrap">
        <img src="logo.jpg" alt="RabbitToys logo" />
        <div class="brand-text">
          <span class="name">RabbitToys</span>
          <span class="tag">Every Toy Tells a Story</span>
        </div>
      </a>
      <nav>
        <ul>
          ${navLink('index.html', 'Home', 'index')}
          ${navLink('about.html', 'About', 'about')}
          ${navLink('services.html', 'Services', 'services')}
          ${navLink('portfolio.html', 'Portfolio', 'portfolio')}
          ${navLink('pricing.html', 'Pricing', 'pricing')}
          ${navLink('blog.html', 'Journal', 'blog')}
          ${navLink('contact.html', 'Contact', 'contact')}
        </ul>
      </nav>
      <div class="nav-icons">
        <button class="icon-btn" aria-label="Search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <a href="contact.html" class="icon-btn" aria-label="Account">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
        </a>
        <button class="icon-btn menu-toggle" aria-label="Menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
    </div>
  </div>
</header>
`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo-wrap">
          <img src="logo.jpg" alt="RabbitToys" style="width:48px;height:48px;border-radius:10px;object-fit:contain;background:var(--ivory);padding:2px;" />
          <div class="brand-text">
            <span class="name" style="color: var(--ivory);">RabbitToys</span>
            <span class="tag">Every Toy Tells a Story</span>
          </div>
        </a>
        <p>Heirloom-quality toys, hand-picked for curious children. Crafted to inspire imagination and lovingly delivered across India.</p>
        <div class="footer-social">
          <a href="https://wa.me/${WHATSAPP_NUMBER}" class="social-btn" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2.1-.2-.5-.5-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.6 1.1 2.7.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.2-.3-.2-.5-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.5.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
          </a>
          <a href="mailto:${EMAIL}" class="social-btn" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
          </a>
          <a href="#" class="social-btn" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>
          </a>
          <a href="#" class="social-btn" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-9h3l.5-4H13V6.5c0-1.1.3-1.8 1.8-1.8H17V1.2C16.6 1.1 15.5 1 14.2 1 11.6 1 9.8 2.6 9.8 5.7V9H7v4h2.8v9H13z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Shop</h5>
        <ul>
          <li><a href="portfolio.html">New Arrivals</a></li>
          <li><a href="portfolio.html">Bestsellers</a></li>
          <li><a href="portfolio.html">Wooden Toys</a></li>
          <li><a href="portfolio.html">Soft Plush</a></li>
          <li><a href="portfolio.html">Educational</a></li>
          <li><a href="pricing.html">Gift Sets</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Company</h5>
        <ul>
          <li><a href="about.html">Our Story</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="blog.html">Journal</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Help</h5>
        <ul>
          <li><a href="contact.html">Shipping & Returns</a></li>
          <li><a href="contact.html">Track Order</a></li>
          <li><a href="contact.html">Size Guide</a></li>
          <li><a href="contact.html">FAQs</a></li>
          <li><a href="https://wa.me/${WHATSAPP_NUMBER}">WhatsApp Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 RabbitToys India · All rights reserved · rabbittoys.in</p>
      <div class="legal">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  </div>
</footer>
<a href="https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}" class="whatsapp-float" aria-label="Chat on WhatsApp" target="_blank" rel="noopener">
  <svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2.1-.2-.5-.5-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.6 1.1 2.7.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.2-.3-.2-.5-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.5.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
</a>
`;

// Inject on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const headerSlot = document.getElementById('site-header');
  const footerSlot = document.getElementById('site-footer');
  if (headerSlot) headerSlot.innerHTML = HEADER_HTML;
  if (footerSlot) footerSlot.innerHTML = FOOTER_HTML;

  // Simple mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');
  if (toggle && navUl) {
    toggle.addEventListener('click', () => {
      const isOpen = navUl.style.display === 'flex';
      if (isOpen) {
        navUl.style.display = '';
      } else {
        navUl.style.display = 'flex';
        navUl.style.flexDirection = 'column';
        navUl.style.position = 'absolute';
        navUl.style.top = '100%';
        navUl.style.left = '0';
        navUl.style.right = '0';
        navUl.style.background = 'var(--cream)';
        navUl.style.padding = '24px 20px';
        navUl.style.gap = '16px';
        navUl.style.borderBottom = '1px solid var(--line-soft)';
        navUl.style.boxShadow = 'var(--shadow-md)';
      }
    });
  }

  // Newsletter / contact form: just prevent submit and show feedback
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"], button:not([type])');
      if (btn) {
        const original = btn.innerHTML;
        btn.innerHTML = '✓ Thank you!';
        btn.style.background = 'var(--leaf)';
        setTimeout(() => {
          btn.innerHTML = original;
          btn.style.background = '';
          form.reset();
        }, 2400);
      }
    });
  });
});
