/**
 * Kedai Kersa - Script Interaktivitas & Dynamic Data Renderer
 */

// Helper untuk mencegah injeksi HTML jika teks mengandung karakter khusus
function escapeHtml(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Render data dinamis dari data.js ke elemen-elemen halaman
 */
function renderKedaiData(data) {
  if (!data || typeof data !== 'object') return;

  // 1. Meta & Brand
  if (data.brand) {
    if (data.brand.metaTitle) document.title = data.brand.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && data.brand.metaDescription) {
      metaDesc.setAttribute('content', data.brand.metaDescription);
    }
    const brandName = document.getElementById('brandName');
    if (brandName && data.brand.name) brandName.textContent = data.brand.name;
    const brandCity = document.getElementById('brandCity');
    if (brandCity && data.brand.city) brandCity.textContent = data.brand.city;
    const footerBrandName = document.getElementById('footerBrandName');
    if (footerBrandName && data.brand.name) footerBrandName.textContent = data.brand.name;
  }

  // 2. Hero Section
  if (data.hero) {
    const heroBadge = document.getElementById('heroBadge');
    if (heroBadge && data.hero.badge) {
      heroBadge.innerHTML = `<span class="badge-dot" aria-hidden="true"></span> ${escapeHtml(data.hero.badge)}`;
    }

    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle && data.hero.title) heroTitle.textContent = data.hero.title;

    const heroDesc = document.getElementById('heroDesc');
    if (heroDesc && data.hero.description) heroDesc.textContent = data.hero.description;

    const heroCtaPrimary = document.getElementById('heroCtaPrimary');
    if (heroCtaPrimary && data.hero.ctaPrimary) {
      if (data.hero.ctaPrimary.href) heroCtaPrimary.href = data.hero.ctaPrimary.href;
      const textSpan = heroCtaPrimary.querySelector('span');
      if (textSpan && data.hero.ctaPrimary.text) textSpan.textContent = data.hero.ctaPrimary.text;
    }

    const heroCtaSecondary = document.getElementById('heroCtaSecondary');
    if (heroCtaSecondary && data.hero.ctaSecondary) {
      if (data.hero.ctaSecondary.href) heroCtaSecondary.href = data.hero.ctaSecondary.href;
      if (data.hero.ctaSecondary.text) heroCtaSecondary.textContent = data.hero.ctaSecondary.text;
    }

    const heroHighlights = document.getElementById('heroHighlights');
    if (heroHighlights && Array.isArray(data.hero.highlights)) {
      heroHighlights.innerHTML = data.hero.highlights.map(item => `
        <div class="highlight-item">
          <span class="highlight-icon" aria-hidden="true">${escapeHtml(item.icon)}</span>
          <span>${escapeHtml(item.text)}</span>
        </div>
      `).join('');
    }

    const heroImage = document.getElementById('heroImage');
    if (heroImage && data.hero.image) {
      heroImage.src = data.hero.image;
      if (data.hero.title) heroImage.alt = data.hero.title;
    }

    const badgeTopRating = document.getElementById('badgeTopRating');
    const badgeTopLabel = document.getElementById('badgeTopLabel');
    if (badgeTopRating && data.hero.badgeTop && data.hero.badgeTop.rating) {
      badgeTopRating.textContent = data.hero.badgeTop.rating;
    }
    if (badgeTopLabel && data.hero.badgeTop && data.hero.badgeTop.label) {
      badgeTopLabel.textContent = data.hero.badgeTop.label;
    }

    const badgeBottomCity = document.getElementById('badgeBottomCity');
    const badgeBottomLabel = document.getElementById('badgeBottomLabel');
    if (badgeBottomCity && data.hero.badgeBottom && data.hero.badgeBottom.city) {
      badgeBottomCity.textContent = data.hero.badgeBottom.city;
    }
    if (badgeBottomLabel && data.hero.badgeBottom && data.hero.badgeBottom.label) {
      badgeBottomLabel.textContent = data.hero.badgeBottom.label;
    }
  }

  // 3. About Section
  if (data.about) {
    const aboutBadge = document.getElementById('aboutBadge');
    if (aboutBadge && data.about.badge) aboutBadge.textContent = data.about.badge;

    const aboutTitle = document.getElementById('aboutTitle');
    if (aboutTitle && data.about.title) aboutTitle.textContent = data.about.title;

    const aboutDesc = document.getElementById('aboutDesc');
    if (aboutDesc && data.about.description) aboutDesc.textContent = data.about.description;

    const aboutFeatures = document.getElementById('aboutFeatures');
    if (aboutFeatures && Array.isArray(data.about.features)) {
      aboutFeatures.innerHTML = data.about.features.map(f => `
        <div class="feature-card">
          <div class="icon">${escapeHtml(f.icon)}</div>
          <h3>${escapeHtml(f.title)}</h3>
          <p>${escapeHtml(f.desc)}</p>
        </div>
      `).join('');
    }
  }

  // 4. Menu Section
  if (data.menu) {
    const menuBadge = document.getElementById('menuBadge');
    if (menuBadge && data.menu.badge) menuBadge.textContent = data.menu.badge;

    const menuTitle = document.getElementById('menuTitle');
    if (menuTitle && data.menu.title) menuTitle.textContent = data.menu.title;

    const menuDesc = document.getElementById('menuDesc');
    if (menuDesc && data.menu.description) menuDesc.textContent = data.menu.description;

    const menuGrid = document.getElementById('menuGrid');
    if (menuGrid && Array.isArray(data.menu.items)) {
      menuGrid.innerHTML = data.menu.items.map(item => `
        <div class="menu-card">
          ${item.image ? `
            <div class="menu-img-wrap">
              <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" class="menu-img" loading="lazy">
            </div>
          ` : ''}
          <div class="menu-info">
            <h3>${escapeHtml(item.name)}</h3>
            <p>${escapeHtml(item.desc)}</p>
            <span class="price">${escapeHtml(item.price)}</span>
          </div>
        </div>
      `).join('');
    }
  }

  // 5. Contact & Footer
  if (data.contact) {
    const footerTagline = document.getElementById('footerTagline');
    if (footerTagline && data.contact.tagline) footerTagline.textContent = data.contact.tagline;

    const openingHoursTitle = document.getElementById('openingHoursTitle');
    if (openingHoursTitle && data.contact.openingHoursTitle) {
      openingHoursTitle.textContent = data.contact.openingHoursTitle;
    }

    const openingHoursList = document.getElementById('openingHoursList');
    if (openingHoursList && Array.isArray(data.contact.openingHours)) {
      openingHoursList.innerHTML = data.contact.openingHours.map(hour => `
        <li>
          <svg class="footer-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          ${escapeHtml(hour)}
        </li>
      `).join('');
    }

    const locationTitle = document.getElementById('locationTitle');
    if (locationTitle && data.contact.locationTitle) {
      locationTitle.textContent = data.contact.locationTitle;
    }

    const locationList = document.getElementById('locationList');
    if (locationList && data.contact.location) {
      locationList.innerHTML = `
        <li>
          <svg class="footer-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          ${escapeHtml(data.contact.location.address || '')}
        </li>
        <li>
          <svg class="footer-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
          ${escapeHtml(data.contact.location.facilities || '')}
        </li>
      `;
    }

    const socialsTitle = document.getElementById('socialsTitle');
    if (socialsTitle && data.contact.socialsTitle) {
      socialsTitle.textContent = data.contact.socialsTitle;
    }

    if (data.contact.socials) {
      const waLink = document.getElementById('footerWaLink');
      if (waLink && data.contact.socials.whatsapp) {
        waLink.href = data.contact.socials.whatsapp.link;
        const sub = waLink.querySelector('.contact-link-sub');
        if (sub) sub.textContent = data.contact.socials.whatsapp.number;
      }

      const igLink = document.getElementById('footerIgLink');
      if (igLink && data.contact.socials.instagram) {
        igLink.href = data.contact.socials.instagram.link;
        const sub = igLink.querySelector('.contact-link-sub');
        if (sub) sub.textContent = data.contact.socials.instagram.username;
      }

      const ttLink = document.getElementById('footerTtLink');
      if (ttLink && data.contact.socials.tiktok) {
        ttLink.href = data.contact.socials.tiktok.link;
        const sub = ttLink.querySelector('.contact-link-sub');
        if (sub) sub.textContent = data.contact.socials.tiktok.username;
      }
    }

    const footerCopyright = document.getElementById('footerCopyright');
    if (footerCopyright && data.contact.copyright) {
      footerCopyright.textContent = data.contact.copyright;
    }

    const footerMade = document.getElementById('footerMade');
    if (footerMade && data.contact.madeWith) {
      footerMade.textContent = data.contact.madeWith;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // 0. Render data dinamis jika objek kedaiData tersedia
  if (typeof kedaiData !== 'undefined') {
    renderKedaiData(kedaiData);
  }

  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('header[id], section[id], footer[id]');

  // 1. Navbar Scroll Effect (Glassmorphism & Compact Padding)
  const handleScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // 2. Mobile Hamburger Menu Toggle
  const toggleMobileMenu = () => {
    if (!menuToggle || !navLinks) return;
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  };

  const closeMobileMenu = () => {
    if (!menuToggle || !navLinks) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
  };

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (navbar && !navbar.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    });
  }

  // 3. Close mobile menu on link click & smooth active handling
  navLinkItems.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  const mobileCta = document.querySelector('.mobile-cta');
  if (mobileCta) {
    mobileCta.addEventListener('click', () => {
      closeMobileMenu();
    });
  }

  // 4. Scrollspy (Active Navigation Link on Scroll)
  const updateActiveNavLink = () => {
    const scrollPosition = window.scrollY + 120; // Offset for navbar

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinkItems.forEach((item) => {
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();
});
