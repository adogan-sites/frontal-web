import { d as createAstro, c as createComponent, a as renderTemplate, e as defineScriptVars, f as renderScript, g as renderSlot, h as renderHead, u as unescapeHTML, b as addAttribute, m as maybeRenderHead } from "./astro/server.g7k5KnFz.js";
import "piccolore";
import "clsx";
/* empty css                                    */
const hero = { "video": "/images/uploads/hero-video.mp4", "backgroundImage": "/images/uploads/hero-bg.jpg" };
const company = { "name": "Frontal Alüminyum", "slogan": "Profesyonel Cephe Çözümleri", "description": "Alüminyum giydirme cephe, transparan cephe, doğrama sistemleri ve güneş kırıcı sistemler alanında uzman firma.", "aboutTitle": "Kurumsal", "aboutParagraph1": "Temellerini kurucularının sektördeki derin deneyimine oturtan Frontal Alüminyum, kurulduğu günden bu yana kaliteden ödün vermeden büyüyerek Türkiye'nin önde gelen alüminyum cephe sistemleri firmaları arasındaki yerini almıştır.", "aboutParagraph2": "Alüminyum Giydirme Cephe Sistemleri, Transparan Cepheler, Alüminyum Işıklık Sistemleri, Doğrama Sistemleri ve Güneş Kırıcı Sistemler alanlarında projelendirme, imalat ve montaj hizmetleri sunmaktayız. Bünyemizde bulundurduğumuz kalifiye teknik ve imalat-montaj ekiplerimiz ile yüksek standartlarda projeler teslim etmeyi her koşulda taahhüt ediyoruz.", "aboutParagraph3": "En büyük olmak yerine en kaliteli olmak ilkesiyle hareket eden firmamız; müşteri memnuniyetini ön planda tutarak, uluslararası standartlara uygun, çevreye ve insana saygı çerçevesinde çalışmalarını sürdürmektedir.", "foundedYear": 2010, "employeeCount": "50+" };
const contact = { "email": "frontal@frontal.com.tr", "showContactForm": false, "locations": [{ "name": "Ofis", "address": "Tekstilciler Cad. Yapım İş Merkezi No:35/1 Balgat, Ankara", "phone": "+90 312 286 83 80", "workingHours": "Pazartesi - Cuma: 09:00 - 18:00", "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12136.320600407293!2d32.758339426403246!3d39.90825090231257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3462a68c4b9c1%3A0xf42aa9fb64e9cefb!2sFrontal%20Al%C3%BCminyum!5e0!3m2!1str!2str!4v1771022573199!5m2!1str!2str", "fax": "+90 312 286 30 03" }, { "name": "Fabrika", "address": "Orhaniye Mah. Fatih Sultan Mehmet Blv. No:506/48 Kahramankazan, Ankara", "phone": "+90 312 395 26 29", "workingHours": "Pazartesi - Cumartesi: 08:00 - 18:00", "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91899.33885020681!2d32.57255205577305!3d40.11058800671253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40827725196b85f5%3A0xd705d8b6baf1093b!2zRlJPTlRBTCBBxZ4g77iP!5e0!3m2!1str!2str!4v1771022689682!5m2!1str!2str", "fax": "+90 312 395 26 59" }] };
const sections = { "servicesSubtitle": "Teknik çözümlerimiz ve uygulama alanlarımız.", "projectsSubtitle": "Prestijli uygulama örneklerimiz.", "contactSubtitle": "Projeleriniz için bizimle iletişime geçin. Uzman ekibimiz size en uygun çözümleri sunmak için hazır." };
const social = { "instagram": "https://www.instagram.com/frontalaluminyum/", "linkedin": "", "facebook": "" };
const siteData = {
  hero,
  company,
  contact,
  sections,
  social
};
var basePath = "/frontal-web".replace(/\/$/, "");
function withBase(path) {
  if (!path) return basePath + "/";
  if (path.startsWith("http") || path.startsWith("//")) return path;
  if (path.startsWith("/")) return basePath + path;
  return basePath + "/" + path;
}
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://adogan-sites.github.io/frontal-web");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  var _a2, _b2, _c, _d;
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    title = "Frontal Alüminyum",
    description = "Frontal Alüminyum - Profesyonel alüminyum cephe, giydirme ve doğrama sistemleri.",
    ogImage = "/images/og-default.jpg",
    scrollTarget,
    projectSlug
  } = Astro2.props;
  const siteUrl = Astro2.site || new URL("http://localhost:4321");
  const canonicalUrl = new URL(Astro2.url.pathname, siteUrl);
  const fullOgImage = ogImage.startsWith("http") ? ogImage : new URL(withBase(ogImage), siteUrl).toString();
  return renderTemplate(_b || (_b = __template(['<html lang="tr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', "><!-- SEO --><title>", '</title><meta name="description"', '><link rel="canonical"', '><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:locale" content="tr_TR"><!-- Favicon --><link rel="icon" type="image/svg+xml"', '><!-- Structured Data (JSON-LD) --><script type="application/ld+json">', "<\/script><!-- Stil: global.css frontmatter'da import edildi, Astro otomatik inject eder -->", "</head> <body> ", " ", " <!-- GSAP Animasyonlar --> ", " <!-- Base path for client-side scripts --> <script>(function(){", "\n    window.__BASE_PATH = basePath;\n  })();<\/script> <!-- Client-side Router --> <script>\n    (function() {\n      var s = document.createElement('script');\n      s.src = (window.__BASE_PATH || '') + '/js/router.js';\n      document.body.appendChild(s);\n    })();\n  <\/script> </body> </html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(canonicalUrl, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(fullOgImage, "content"), addAttribute(canonicalUrl, "content"), addAttribute(withBase("/favicon.svg"), "href"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteData.company.name,
    "url": siteUrl,
    "logo": new URL(withBase("/images/logo.png"), siteUrl).toString(),
    "description": siteData.company.description,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": (_b2 = (_a2 = siteData.contact.locations) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.phone,
      "contactType": "customer service",
      "email": siteData.contact.email,
      "areaServed": "TR",
      "availableLanguage": "Turkish"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": (_d = (_c = siteData.contact.locations) == null ? void 0 : _c[0]) == null ? void 0 : _d.address,
      "addressCountry": "TR"
    },
    "sameAs": [
      siteData.social.facebook,
      siteData.social.instagram,
      siteData.social.linkedin
    ].filter(Boolean)
  })), renderHead(), renderSlot($$result, $$slots["default"]), scrollTarget && renderTemplate(_a || (_a = __template(["<script>(function(){", "\n      document.addEventListener('DOMContentLoaded', function() {\n        var el = document.getElementById(scrollTarget);\n        if (el) {\n          setTimeout(function() {\n            el.scrollIntoView({ behavior: 'smooth' });\n          }, 100);\n        }\n      });\n    })();<\/script>"])), defineScriptVars({ scrollTarget })), renderScript($$result, "/app/site/src/layouts/Base.astro?astro&type=script&index=0&lang.ts"), defineScriptVars({ basePath }));
}, "/app/site/src/layouts/Base.astro", void 0);
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-20"> <!-- Logo --> <a${addAttribute(withBase("/"), "href")} class="flex-shrink-0 cursor-pointer" id="logo-link"> <img${addAttribute(withBase("/images/logo.png"), "src")} alt="Frontal Alüminyum" class="h-12"> </a> <!-- Desktop Navigation --> <nav class="hidden md:flex space-x-8"> <a${addAttribute(withBase("/"), "href")} class="nav-link text-gray-700 hover:text-slate-700 transition-colors font-medium">
Ana Sayfa
</a> <a${addAttribute(withBase("/hakkimizda"), "href")} class="nav-link text-gray-700 hover:text-slate-700 transition-colors font-medium">
Kurumsal
</a> <a${addAttribute(withBase("/faaliyet-alanlari"), "href")} class="nav-link text-gray-700 hover:text-slate-700 transition-colors font-medium">
Faaliyet Alanları
</a> <a${addAttribute(withBase("/projeler"), "href")} class="nav-link text-gray-700 hover:text-slate-700 transition-colors font-medium">
Projeler
</a> <a${addAttribute(withBase("/iletisim"), "href")} class="nav-link text-gray-700 hover:text-slate-700 transition-colors font-medium">
İletişim
</a> </nav> <!-- Mobile Menu Button --> <button class="md:hidden p-2" id="mobile-menu-toggle" aria-label="Menü"> <svg id="menu-icon" class="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <svg id="close-icon" class="h-6 w-6 text-gray-700 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <!-- Mobile Navigation --> <nav id="mobile-menu" class="md:hidden pb-4 space-y-2 hidden"> <a${addAttribute(withBase("/"), "href")} class="mobile-nav-link block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
Ana Sayfa
</a> <a${addAttribute(withBase("/hakkimizda"), "href")} class="mobile-nav-link block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
Kurumsal
</a> <a${addAttribute(withBase("/faaliyet-alanlari"), "href")} class="mobile-nav-link block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
Faaliyet Alanları
</a> <a${addAttribute(withBase("/projeler"), "href")} class="mobile-nav-link block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
Projeler
</a> <a${addAttribute(withBase("/iletisim"), "href")} class="mobile-nav-link block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
İletişim
</a> </nav> </div> </header> ${renderScript($$result, "/app/site/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/app/site/src/components/Header.astro", void 0);
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  var _a2, _b2, _c, _d;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const rawYears = currentYear - siteData.company.foundedYear;
  const experienceYears = Math.floor(rawYears / 5) * 5 + 5;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"> <!-- Company Info --> <div> <img${addAttribute(withBase("/images/logo.png"), "src")} alt="Frontal Alüminyum" class="h-12 mb-4 brightness-0 invert"> <p class="text-gray-400 mb-4">
Alüminyum cephe sistemlerinde ${experienceYears} yılı aşkın tecrübe ile Türkiye'nin
          önde gelen firması.
</p> <div class="flex gap-3"> ${siteData.social.facebook} ${renderTemplate`<a${addAttribute(siteData.social.instagram, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors" aria-label="Instagram"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path> </svg> </a>`} ${siteData.social.linkedin} </div> </div> <!-- Quick Links --> <div> <h3 class="text-lg mb-4">Hızlı Bağlantılar</h3> <ul class="space-y-2"> <li> <a${addAttribute(withBase("/"), "href")} class="footer-link text-gray-400 hover:text-white transition-colors">
Ana Sayfa
</a> </li> <li> <a${addAttribute(withBase("/hakkimizda"), "href")} class="footer-link text-gray-400 hover:text-white transition-colors">
Kurumsal
</a> </li> <li> <a${addAttribute(withBase("/faaliyet-alanlari"), "href")} class="footer-link text-gray-400 hover:text-white transition-colors">
Faaliyet Alanları
</a> </li> <li> <a${addAttribute(withBase("/projeler"), "href")} class="footer-link text-gray-400 hover:text-white transition-colors">
Projeler
</a> </li> <li> <a${addAttribute(withBase("/iletisim"), "href")} class="footer-link text-gray-400 hover:text-white transition-colors">
İletişim
</a> </li> </ul> </div> <!-- Services --> <div> <h3 class="text-lg mb-4">Hizmetlerimiz</h3> <ul class="space-y-2 text-gray-400"> <li>Alüminyum Giydirme Cephe</li> <li>Transparan Cepheler</li> <li>Alüminyum Işıklık</li> <li>Doğrama Sistemleri</li> <li>Cephe Kaplamaları</li> <li>Güneş Kırıcı Sistemler</li> </ul> </div> <!-- Contact Info --> <div> <h3 class="text-lg mb-4">İletişim</h3> <ul class="space-y-3"> <li class="flex items-start gap-3 text-gray-400"> <svg class="h-5 w-5 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span>${(_b2 = (_a2 = siteData.contact.locations) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.address}</span> </li> <li class="flex items-center gap-3 text-gray-400"> <svg class="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span>${(_d = (_c = siteData.contact.locations) == null ? void 0 : _c[0]) == null ? void 0 : _d.phone}</span> </li> <li class="flex items-center gap-3 text-gray-400"> <svg class="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <span>${siteData.contact.email}</span> </li> </ul> </div> </div> <!-- Bottom Bar --> <div id="footer-bottom-bar" class="border-t border-gray-800 pt-8"> <div class="flex flex-col md:flex-row justify-between items-center gap-4"> <p class="text-gray-400 text-sm">
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
  $$Footer as b,
  basePath as c,
  siteData as s,
  withBase as w
};
