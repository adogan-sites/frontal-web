import { c as createAstro, a as createComponent, b as renderTemplate, f as defineScriptVars, e as renderScript, g as renderSlot, h as renderHead, u as unescapeHTML, d as addAttribute, m as maybeRenderHead } from "./astro/server.CAGUKK1p.js";
/* empty css                                    */
import { s as siteData } from "./site.CbRSZzkL.js";
import { w as withBase, b as basePath } from "./paths.tphEKz_F.js";
import { p as pageUrl, a as assetUrl, c as canonicalUrl, i as isIndexable, o as ogImageDimensions } from "./seo.BJMYZYsE.js";
import { p as publishedOnly, a as projects, r as rawServices } from "./published.DKPgJ_1P.js";
var TR_DAYS = {
  "pazartesi": "Monday",
  "salı": "Tuesday",
  "sali": "Tuesday",
  "çarşamba": "Wednesday",
  "carsamba": "Wednesday",
  "perşembe": "Thursday",
  "persembe": "Thursday",
  "cuma": "Friday",
  "cumartesi": "Saturday",
  "pazar": "Sunday"
};
var DAY_ORDER = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
function parseWorkingHours(text) {
  if (!text) return null;
  var parts = String(text).split(":");
  if (parts.length < 2) return null;
  var dayPart = parts[0].trim().toLowerCase();
  var timePart = parts.slice(1).join(":").trim();
  var dayRange = dayPart.split("-").map(function(d) {
    return TR_DAYS[d.trim()];
  });
  if (!dayRange[0]) return null;
  var startIndex = DAY_ORDER.indexOf(dayRange[0]);
  var endIndex = dayRange[1] ? DAY_ORDER.indexOf(dayRange[1]) : startIndex;
  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) return null;
  var timeMatch = timePart.match(/(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})/);
  if (!timeMatch) return null;
  return {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: DAY_ORDER.slice(startIndex, endIndex + 1),
    opens: timeMatch[1],
    closes: timeMatch[2]
  };
}
function socialLinks(siteData2) {
  var social = siteData2.social || {};
  return [social.facebook, social.instagram, social.linkedin].filter(Boolean);
}
function organizationId(site) {
  return pageUrl(site, "/") + "#organization";
}
function organizationNode(site, siteData2, options) {
  var company = siteData2.company || {};
  var contact = siteData2.contact || {};
  var firstLocation = (contact.locations || [])[0] || {};
  var opts = options || {};
  var node = {
    "@type": "Organization",
    "@id": organizationId(site),
    name: company.name,
    url: pageUrl(site, "/"),
    logo: assetUrl(site, withBase("/images/logo.png")),
    description: company.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: firstLocation.address,
      addressCountry: "TR"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: firstLocation.phone,
      contactType: "customer service",
      email: contact.email,
      areaServed: "TR",
      availableLanguage: "Turkish"
    }
  };
  if (company.foundedYear) node.foundingDate = String(company.foundedYear);
  if (company.employeeCount) node.numberOfEmployees = company.employeeCount;
  if (opts.knowsAbout && opts.knowsAbout.length) node.knowsAbout = opts.knowsAbout;
  var sameAs = socialLinks(siteData2);
  if (sameAs.length) node.sameAs = sameAs;
  return node;
}
function localBusinessNodes(site, siteData2) {
  var company = siteData2.company || {};
  var contact = siteData2.contact || {};
  var locations = contact.locations || [];
  return locations.map(function(location, index) {
    var node = {
      "@type": "LocalBusiness",
      "@id": pageUrl(site, "/") + "#location-" + (index + 1),
      name: company.name + (location.name ? " — " + location.name : ""),
      parentOrganization: { "@id": organizationId(site) },
      url: pageUrl(site, "/iletisim"),
      image: assetUrl(site, withBase("/images/logo.png")),
      address: {
        "@type": "PostalAddress",
        streetAddress: location.address,
        addressLocality: "Ankara",
        addressCountry: "TR"
      }
    };
    if (location.phone) node.telephone = location.phone;
    if (location.fax) node.faxNumber = location.fax;
    if (contact.email) node.email = contact.email;
    var hours = parseWorkingHours(location.workingHours);
    if (hours) node.openingHoursSpecification = [hours];
    return node;
  });
}
function webSiteNode(site, siteData2) {
  var company = siteData2.company || {};
  return {
    "@type": "WebSite",
    "@id": pageUrl(site, "/") + "#website",
    url: pageUrl(site, "/"),
    name: company.name,
    inLanguage: "tr-TR",
    publisher: { "@id": organizationId(site) }
  };
}
function breadcrumbNode(site, items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map(function(item, index) {
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: pageUrl(site, item.path)
      };
    })
  };
}
function projectNode(site, siteData2, project) {
  var node = {
    "@type": "CreativeWork",
    "@id": pageUrl(site, "/projeler/" + project.slug) + "#project",
    name: project.title,
    url: pageUrl(site, "/projeler/" + project.slug),
    creator: { "@id": organizationId(site) },
    inLanguage: "tr-TR"
  };
  if (project.category) node.about = project.category;
  if (project.location) node.locationCreated = { "@type": "Place", name: project.location };
  if (project.year) node.dateCreated = String(project.year);
  var description = (project.details || project.description || "").trim();
  if (description) node.description = description;
  var images = (project.images && project.images.length ? project.images : [project.image]).filter(Boolean);
  if (images.length) {
    node.image = images.map(function(image) {
      return assetUrl(site, withBase(image));
    });
  }
  return node;
}
function serviceNode(site, siteData2, service, slug) {
  var company = siteData2.company || {};
  var node = {
    "@type": "Service",
    "@id": pageUrl(site, "/faaliyet-alanlari/" + slug) + "#service",
    name: service.title,
    serviceType: service.title,
    url: pageUrl(site, "/faaliyet-alanlari/" + slug),
    provider: { "@id": organizationId(site) },
    areaServed: { "@type": "Country", name: "Türkiye" }
  };
  var description = (service.description || "").trim();
  if (description) node.description = description;
  if (service.image) node.image = assetUrl(site, withBase(service.image));
  var details = (service.details || []).filter(Boolean);
  if (details.length) {
    node.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: service.title + " — " + (company.name || ""),
      itemListElement: details.map(function(detail, index) {
        return {
          "@type": "Offer",
          position: index + 1,
          itemOffered: { "@type": "Service", name: detail }
        };
      })
    };
  }
  return node;
}
function itemListNode(site, name, items) {
  return {
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map(function(item, index) {
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: pageUrl(site, item.path)
      };
    })
  };
}
function buildGraph(nodes) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean)
  };
}
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro$2 = createAstro("https://adogan-sites.github.io/frontal-web");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  var _a2, _b2;
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    title = "Frontal Alüminyum",
    description = "Frontal Alüminyum - Profesyonel alüminyum cephe, giydirme ve doğrama sistemleri.",
    ogImage,
    ogType = "website",
    scrollTarget,
    projectSlug,
    schema = [],
    preloadHero = false
  } = Astro2.props;
  const site = Astro2.site;
  const canonical = canonicalUrl(site, Astro2.url.pathname);
  const indexable = isIndexable(site, siteData);
  const metaDescription = (description || "").trim();
  const heroBackground = (_a2 = siteData.hero) == null ? void 0 : _a2.backgroundImage;
  const ogImagePath = ogImage || heroBackground;
  const fullOgImage = assetUrl(site, withBase(ogImagePath));
  const ogDimensions = ogImageDimensions(ogImagePath);
  const googleSiteVerification = (_b2 = siteData.seo) == null ? void 0 : _b2.googleSiteVerification;
  const knowsAbout = [
    .../* @__PURE__ */ new Set([
      ...publishedOnly(projects).map((project) => project.category),
      ...rawServices.map((service) => service.title)
    ])
  ].filter(Boolean);
  const graph = buildGraph([
    organizationNode(site, siteData, { knowsAbout }),
    webSiteNode(site, siteData),
    ...localBusinessNodes(site, siteData),
    ...schema
  ]);
  const heroPreloadUrl = preloadHero ? withBase(heroBackground) : null;
  return renderTemplate(_b || (_b = __template(['<html lang="tr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', "><!-- SEO --><title>", "</title>", '<link rel="canonical"', ">", "", '<!-- Open Graph --><meta property="og:type"', '><meta property="og:site_name"', '><meta property="og:title"', ">", '<meta property="og:image"', '><meta property="og:image:alt"', ">", "", '<meta property="og:url"', '><meta property="og:locale" content="tr_TR"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', ">", '<meta name="twitter:image"', '><!-- Favicon --><link rel="icon" type="image/svg+xml"', '><link rel="icon" type="image/x-icon"', ">", '<!-- Structured Data (JSON-LD) --><script type="application/ld+json">', "<\/script><!-- Stil: global.css frontmatter'da import edildi, Astro otomatik inject eder -->", "</head> <body> ", " ", " <!-- GSAP Animasyonlar --> ", " <!-- Base path for client-side scripts --> <script>(function(){", "\n    window.__BASE_PATH = basePath;\n  })();<\/script> <!-- Client-side Router --> <script>\n    (function() {\n      var s = document.createElement('script');\n      s.src = (window.__BASE_PATH || '') + '/js/router.js';\n      document.body.appendChild(s);\n    })();\n  <\/script> </body> </html>"])), addAttribute(Astro2.generator, "content"), title, metaDescription && renderTemplate`<meta name="description"${addAttribute(metaDescription, "content")}>`, addAttribute(canonical, "href"), !indexable && renderTemplate`<meta name="robots" content="noindex, nofollow">`, googleSiteVerification && renderTemplate`<meta name="google-site-verification"${addAttribute(googleSiteVerification, "content")}>`, addAttribute(ogType, "content"), addAttribute(siteData.company.name, "content"), addAttribute(title, "content"), metaDescription && renderTemplate`<meta property="og:description"${addAttribute(metaDescription, "content")}>`, addAttribute(fullOgImage, "content"), addAttribute(title, "content"), ogDimensions && renderTemplate`<meta property="og:image:width"${addAttribute(String(ogDimensions.width), "content")}>`, ogDimensions && renderTemplate`<meta property="og:image:height"${addAttribute(String(ogDimensions.height), "content")}>`, addAttribute(canonical, "content"), addAttribute(title, "content"), metaDescription && renderTemplate`<meta name="twitter:description"${addAttribute(metaDescription, "content")}>`, addAttribute(fullOgImage, "content"), addAttribute(withBase("/favicon.svg"), "href"), addAttribute(withBase("/favicon.ico"), "href"), heroPreloadUrl && renderTemplate`<link rel="preload" as="image"${addAttribute(heroPreloadUrl, "href")} fetchpriority="high">`, unescapeHTML(JSON.stringify(graph)), renderHead(), renderSlot($$result, $$slots["default"]), scrollTarget && renderTemplate(_a || (_a = __template(["<script>(function(){", "\n      document.addEventListener('DOMContentLoaded', function() {\n        var el = document.getElementById(scrollTarget);\n        if (el) {\n          setTimeout(function() {\n            el.scrollIntoView({ behavior: 'smooth' });\n          }, 100);\n        }\n      });\n    })();<\/script>"])), defineScriptVars({ scrollTarget })), renderScript($$result, "/app/site/src/layouts/Base.astro?astro&type=script&index=0&lang.ts"), defineScriptVars({ basePath }));
}, "/app/site/src/layouts/Base.astro", void 0);
const DEFAULT_SECTION_ORDER = Object.freeze([
  "about",
  "services",
  "projects",
  "contact"
]);
const SECTION_NAV_ITEMS = Object.freeze({
  about: Object.freeze({ label: "Kurumsal", path: "/hakkimizda" }),
  services: Object.freeze({ label: "Faaliyet Alanları", path: "/faaliyet-alanlari" }),
  projects: Object.freeze({ label: "Projeler", path: "/projeler" }),
  contact: Object.freeze({ label: "İletişim", path: "/iletisim" })
});
function normalizeSectionOrder(order) {
  var normalized = [];
  if (Array.isArray(order)) {
    for (var i = 0; i < order.length; i++) {
      var sectionId = order[i];
      if (DEFAULT_SECTION_ORDER.indexOf(sectionId) !== -1 && normalized.indexOf(sectionId) === -1) {
        normalized.push(sectionId);
      }
    }
  }
  for (var j = 0; j < DEFAULT_SECTION_ORDER.length; j++) {
    var fallbackId = DEFAULT_SECTION_ORDER[j];
    if (normalized.indexOf(fallbackId) === -1) {
      normalized.push(fallbackId);
    }
  }
  return normalized;
}
const $$Astro$1 = createAstro("https://adogan-sites.github.io/frontal-web");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { sectionOrder: providedSectionOrder } = Astro2.props;
  const savedSectionOrder = siteData.layout && siteData.layout.sectionOrder;
  const sectionOrder = normalizeSectionOrder(providedSectionOrder || savedSectionOrder);
  const navigationItems = sectionOrder.map(function(sectionId) {
    return SECTION_NAV_ITEMS[sectionId];
  });
  return renderTemplate`${maybeRenderHead()}<header id="header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-20"> <!-- Logo --> <a${addAttribute(withBase("/"), "href")} class="flex-shrink-0 cursor-pointer" id="logo-link"> <img${addAttribute(withBase("/images/logo.png"), "src")} alt="Frontal Alüminyum" class="h-12"> </a> <!-- Desktop Navigation --> <nav class="hidden md:flex space-x-8"> <a${addAttribute(withBase("/"), "href")} class="nav-link text-gray-700 hover:text-slate-700 transition-colors font-medium">
Ana Sayfa
</a> ${navigationItems.map((item) => renderTemplate`<a${addAttribute(withBase(item.path), "href")} class="nav-link text-gray-700 hover:text-slate-700 transition-colors font-medium"> ${item.label} </a>`)} </nav> <!-- Mobile Menu Button --> <button class="md:hidden p-2" id="mobile-menu-toggle" aria-label="Menü"> <svg id="menu-icon" class="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <svg id="close-icon" class="h-6 w-6 text-gray-700 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <!-- Mobile Navigation --> <nav id="mobile-menu" class="md:hidden pb-4 space-y-2 hidden"> <a${addAttribute(withBase("/"), "href")} class="mobile-nav-link block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
Ana Sayfa
</a> ${navigationItems.map((item) => renderTemplate`<a${addAttribute(withBase(item.path), "href")} class="mobile-nav-link block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"> ${item.label} </a>`)} </nav> </div> </header> ${renderScript($$result, "/app/site/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/app/site/src/components/Header.astro", void 0);
const $$Astro = createAstro("https://adogan-sites.github.io/frontal-web");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  var _a2, _b2, _c, _d;
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { sectionOrder: providedSectionOrder } = Astro2.props;
  const savedSectionOrder = siteData.layout && siteData.layout.sectionOrder;
  const sectionOrder = normalizeSectionOrder(providedSectionOrder || savedSectionOrder);
  const navigationItems = sectionOrder.map(function(sectionId) {
    return SECTION_NAV_ITEMS[sectionId];
  });
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const rawYears = currentYear - (siteData.company.foundedYear || 2010);
  const experienceYears = Math.floor(rawYears / 5) * 5 + 5;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"> <!-- Company Info --> <div> <img${addAttribute(withBase("/images/logo.png"), "src")} alt="Frontal Alüminyum" class="h-12 mb-4 brightness-0 invert"> <p class="text-gray-400 mb-4">
Alüminyum cephe sistemlerinde ${experienceYears} yılı aşkın tecrübe ile Türkiye'nin
          önde gelen firması.
</p> <div class="flex gap-3"> ${siteData.social.facebook && renderTemplate`<a${addAttribute(siteData.social.facebook, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors" aria-label="Facebook"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path> </svg> </a>`} ${siteData.social.instagram && renderTemplate`<a${addAttribute(siteData.social.instagram, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors" aria-label="Instagram"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path> </svg> </a>`} ${siteData.social.linkedin && renderTemplate`<a${addAttribute(siteData.social.linkedin, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors" aria-label="LinkedIn"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a>`} </div> </div> <!-- Quick Links --> <div> <h3 class="text-lg mb-4">Hızlı Bağlantılar</h3> <ul class="space-y-2"> <li> <a${addAttribute(withBase("/"), "href")} class="footer-link text-gray-400 hover:text-white transition-colors">
Ana Sayfa
</a> </li> ${navigationItems.map((item) => renderTemplate`<li> <a${addAttribute(withBase(item.path), "href")} class="footer-link text-gray-400 hover:text-white transition-colors"> ${item.label} </a> </li>`)} </ul> </div> <!-- Services --> <div> <h3 class="text-lg mb-4">Hizmetlerimiz</h3> <ul class="space-y-2 text-gray-400"> <li>Alüminyum Giydirme Cephe</li> <li>Transparan Cepheler</li> <li>Alüminyum Işıklık</li> <li>Doğrama Sistemleri</li> <li>Cephe Kaplamaları</li> <li>Güneş Kırıcı Sistemler</li> </ul> </div> <!-- Contact Info --> <div> <h3 class="text-lg mb-4">İletişim</h3> <ul class="space-y-3"> <li class="flex items-start gap-3 text-gray-400"> <svg class="h-5 w-5 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span>${(_b2 = (_a2 = siteData.contact.locations) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.address}</span> </li> <li class="flex items-center gap-3 text-gray-400"> <svg class="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span>${(_d = (_c = siteData.contact.locations) == null ? void 0 : _c[0]) == null ? void 0 : _d.phone}</span> </li> <li class="flex items-center gap-3 text-gray-400"> <svg class="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <span>${siteData.contact.email}</span> </li> </ul> </div> </div> <!-- Bottom Bar --> <div id="footer-bottom-bar" class="border-t border-gray-800 pt-8"> <div class="flex flex-col md:flex-row justify-between items-center gap-4"> <p class="text-gray-400 text-sm">
© ${currentYear} ${siteData.company.name}. Tüm hakları saklıdır.
</p> <div class="flex gap-6 text-sm text-gray-400"> <a${addAttribute(withBase("/gizlilik-politikasi"), "href")} class="hover:text-white transition-colors">
Gizlilik Politikası
</a> <a${addAttribute(withBase("/kullanim-kosullari"), "href")} class="hover:text-white transition-colors">
Kullanım Koşulları
</a> <a${addAttribute(withBase("/kvkk"), "href")} class="hover:text-white transition-colors">
KVKK
</a> </div> </div> </div> </div> </footer> <!-- Footer links are now regular <a> tags, router.js will handle navigation -->`;
}, "/app/site/src/components/Footer.astro", void 0);
export {
  $$Base as $,
  $$Header as a,
  breadcrumbNode as b,
  $$Footer as c,
  itemListNode as i,
  normalizeSectionOrder as n,
  projectNode as p,
  serviceNode as s
};
