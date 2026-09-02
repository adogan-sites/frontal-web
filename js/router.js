/**
 * Client-side Router - History API ile SPA davranisi
 * ES2017 uyumlu (optional chaining kullanilmadi)
 * Base path destekli (GitHub Pages subpath icin)
 */

(function() {
  'use strict';

  // Base path (Base.astro'dan window.__BASE_PATH olarak set edilir)
  var base = window.__BASE_PATH || '';

  // Route mapping (base path'siz, saf path'ler)
  // target: null → tam sayfa yuklemesi (yasal sayfalar gibi bagimsiz sayfalar)
  var routes = {
    '/': { target: 'hero' },
    '/hakkimizda': { target: 'about' },
    '/faaliyet-alanlari': { target: 'services' },
    '/projeler': { target: 'projects' },
    '/iletisim': { target: 'contact' },
    '/gizlilik-politikasi': { target: null },
    '/kullanim-kosullari': { target: null },
    '/kvkk': { target: null }
  };

  /**
   * Path'ten base prefix'i cikar ve sondaki slash'i kirp (route matching icin)
   *
   * Tum ic linkler artik `/projeler/` bicimindedir (utils/paths.js -> withBase).
   * `routes` tablosu ve proje regex'i slash'siz yazildigi icin eslestirme
   * oncesi normalize edilmezse hicbir rota tutmaz.
   */
  function stripBase(path) {
    var result = path;
    if (base && path.indexOf(base) === 0) {
      result = path.substring(base.length) || '/';
    }
    if (result.length > 1 && result.endsWith('/')) {
      result = result.slice(0, -1);
    }
    return result || '/';
  }

  /**
   * Path'e base prefix ekle (navigation icin)
   */
  function withBase(path) {
    return base + path;
  }

  /**
   * Scroll to section
   * Offset, CSS scroll-padding-top ile yonetilir (global.css)
   */
  function scrollToSection(id) {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /**
   * Open project modal by slug
   */
  function openProjectBySlug(slug) {
    var projectsData = window.__PROJECTS_DATA__;
    if (!projectsData) return;

    var project = null;
    for (var i = 0; i < projectsData.length; i++) {
      if (projectsData[i].slug === slug) {
        project = projectsData[i];
        break;
      }
    }

    if (project) {
      var event = new CustomEvent('openProjectModal', {
        detail: { projectSlug: slug }
      });
      document.dispatchEvent(event);
    }
  }

  /**
   * Open service modal by slug
   */
  function openServiceBySlug(slug) {
    document.dispatchEvent(new CustomEvent('openServiceModal', {
      detail: { serviceSlug: slug }
    }));
  }

  /**
   * Close any open detail modal.
   *
   * Scroll kilidi `html.modal-open { overflow: hidden }` ile kuruluyor;
   * burasi eskiden `body.style.overflow`'a yaziyordu ve kimse orayi okumadigi
   * icin modal router uzerinden kapatildiginda sayfa kilitli kaliyordu.
   */
  function closeDetailModals() {
    var closed = false;
    ['project-modal', 'service-modal'].forEach(function(id) {
      var modal = document.getElementById(id);
      if (modal && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        closed = true;
      }
    });
    if (closed) {
      document.documentElement.classList.remove('modal-open');
    }
  }

  /**
   * Navigate to path (full path with base)
   * @param {string} fullPath - base prefix dahil path
   * @param {boolean} replace - replaceState kullan
   * @param {boolean} isUserClick - kart/link tiklamasi (scroll yapma)
   */
  function navigateTo(fullPath, replace, isUserClick) {
    if (replace) {
      history.replaceState({ path: fullPath }, '', fullPath);
    } else {
      history.pushState({ path: fullPath }, '', fullPath);
    }

    handleRoute(fullPath, isUserClick);
  }

  /**
   * Handle route
   * @param {string} fullPath - base prefix dahil path
   * @param {boolean} skipScroll - true ise section'a scroll yapma
   */
  function handleRoute(fullPath, skipScroll) {
    var path = stripBase(fullPath);

    // Proje detay sayfasi
    var projectMatch = path.match(/^\/projeler\/([^\/]+)$/);
    if (projectMatch) {
      var slug = projectMatch[1];

      // Bu sayfada #projects section'i yoksa tam sayfa yuklemesi yap
      if (!document.getElementById('projects')) {
        window.location.href = fullPath;
        return;
      }

      if (!skipScroll) {
        scrollToSection('projects');
      }

      var delay = skipScroll ? 0 : 300;
      setTimeout(function() {
        openProjectBySlug(slug);
      }, delay);
      return;
    }

    // Faaliyet detay sayfasi
    var serviceMatch = path.match(/^\/faaliyet-alanlari\/([^\/]+)$/);
    if (serviceMatch) {
      if (!document.getElementById('services')) {
        window.location.href = fullPath;
        return;
      }
      if (!skipScroll) {
        scrollToSection('services');
      }
      var serviceDelay = skipScroll ? 0 : 300;
      setTimeout(function() {
        openServiceBySlug(serviceMatch[1]);
      }, serviceDelay);
      return;
    }

    // Detaydan cikildiysa acik modali kapat
    closeDetailModals();

    // Normal route'lar
    var route = routes[path];
    if (route && route.target === null) {
      // Bagimsiz sayfa (yasal sayfalar vb.) — tam sayfa yuklemesi
      window.location.href = fullPath;
      return;
    }
    if (route && route.target) {
      // Hedef section bu sayfada yoksa tam sayfa yuklemesi yap
      if (!document.getElementById(route.target)) {
        window.location.href = fullPath;
        return;
      }
      scrollToSection(route.target);
    }
  }

  /**
   * Handle popstate (back/forward buttons)
   */
  function handlePopState() {
    var path = window.location.pathname;
    handleRoute(path, false);
  }

  /**
   * Initialize router
   */
  function initRouter() {
    var initialPath = window.location.pathname;

    // Sadece proje detay sayfasinda ilk acilista modal ac
    var strippedPath = stripBase(initialPath);
    var projectMatch = strippedPath.match(/^\/projeler\/([^\/]+)$/);
    if (projectMatch) {
      handleRoute(initialPath, false);
    }

    // Listen for popstate (back/forward)
    window.addEventListener('popstate', handlePopState);

    // Intercept link clicks - base prefix ile baslayan linkleri yakala
    document.addEventListener('click', function(e) {
      // Ctrl/Cmd/Shift + tik ve orta tik tarayiciya birakilir (yeni sekme).
      // Kartlar artik gercek <a> oldugu icin bu davranis onemli hale geldi.
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

      // Base path varsa hem base ile baslayanlari hem / ile baslayanlari yakala
      var selector = base ? 'a[href^="' + base + '/"], a[href^="/"]' : 'a[href^="/"]';
      var link = e.target.closest(selector);
      if (!link) return;

      var href = link.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }

      if (link.hostname && link.hostname !== window.location.hostname) {
        return;
      }

      e.preventDefault();
      navigateTo(href, false, false);
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRouter);
  } else {
    initRouter();
  }

  // Export for global use
  window.router = {
    navigate: function(fullPath, replace) {
      navigateTo(fullPath, replace, true);
    },
    scrollTo: scrollToSection
  };
})();
