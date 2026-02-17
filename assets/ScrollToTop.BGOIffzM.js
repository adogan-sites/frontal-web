import { b as createAstro, c as createComponent, a as renderTemplate, d as defineScriptVars, e as renderScript, f as renderSlot, g as renderHead, u as unescapeHTML, h as addAttribute, m as maybeRenderHead } from "./astro/server.c91DNZJq.js";
import "piccolore";
import "clsx";
/* empty css                                    */
import { p as projects } from "./projects.CWSLyQrC.js";
const company = { "name": "Frontal Alüminyum", "slogan": "Profesyonel Cephe Çözümleri", "description": "Alüminyum giydirme cephe, transparan cephe, doğrama sistemleri ve güneş kırıcı sistemler alanında uzman firma.", "aboutTitle": "Kurumsal", "aboutParagraph1": "Temellerini kurucularının sektördeki derin deneyimine oturtan Frontal Alüminyum, kurulduğu günden bu yana kaliteden ödün vermeden büyüyerek Türkiye'nin önde gelen alüminyum cephe sistemleri firmaları arasındaki yerini almıştır.", "aboutParagraph2": "Alüminyum Giydirme Cephe Sistemleri, Transparan Cepheler, Alüminyum Işıklık Sistemleri, Doğrama Sistemleri ve Güneş Kırıcı Sistemler alanlarında projelendirme, imalat ve montaj hizmetleri sunmaktayız. Bünyemizde bulundurduğumuz kalifiye teknik ve imalat-montaj ekiplerimiz ile yüksek standartlarda projeler teslim etmeyi her koşulda taahhüt ediyoruz.", "aboutParagraph3": "En büyük olmak yerine en kaliteli olmak ilkesiyle hareket eden firmamız; müşteri memnuniyetini ön planda tutarak, uluslararası standartlara uygun, çevreye ve insana saygı çerçevesinde çalışmalarını sürdürmektedir.", "projectCount": "500+", "experienceYears": "15+" };
const contact = { "email": "frontal@frontal.com.tr", "showContactForm": false, "locations": [{ "name": "Ofis", "address": "Tekstilciler Cad. Yapım İş Merkezi No:35/1 Balgat, Ankara", "phone": "+90 312 286 83 80", "workingHours": "Pazartesi - Cuma: 09:00 - 18:00", "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12136.320600407293!2d32.758339426403246!3d39.90825090231257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3462a68c4b9c1%3A0xf42aa9fb64e9cefb!2sFrontal%20Al%C3%BCminyum!5e0!3m2!1str!2str!4v1771022573199!5m2!1str!2str", "fax": "+90 312 286 30 03" }, { "name": "Fabrika", "address": "Orhaniye Mah. Fatih Sultan Mehmet Blv. No:506/48 Kahramankazan, Ankara", "phone": "+90 312 395 26 29", "workingHours": "Pazartesi - Cumartesi: 08:00 - 18:00", "mapUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91899.33885020681!2d32.57255205577305!3d40.11058800671253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40827725196b85f5%3A0xd705d8b6baf1093b!2zRlJPTlRBTCBBxZ4g77iP!5e0!3m2!1str!2str!4v1771022689682!5m2!1str!2str", "fax": "+90 312 395 26 59" }] };
const sections = { "servicesSubtitle": "Teknik çözümlerimiz ve uygulama alanlarımız.", "projectsSubtitle": "Prestijli uygulama örneklerimiz.", "contactSubtitle": "Projeleriniz için bizimle iletişime geçin. Uzman ekibimiz size en uygun çözümleri sunmak için hazır." };
const social = { "instagram": "https://instagram.com/frontalaluminyum", "linkedin": "https://linkedin.com/company/frontal", "facebook": "https://facebook.com/frontalaluminyum" };
const siteData = {
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
var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3, _b;
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
  return renderTemplate(_b || (_b = __template$3(['<html lang="tr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', "><!-- SEO --><title>", '</title><meta name="description"', '><link rel="canonical"', '><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:locale" content="tr_TR"><!-- Favicon --><link rel="icon" type="image/svg+xml"', '><!-- Structured Data (JSON-LD) --><script type="application/ld+json">', "<\/script><!-- Stil: global.css frontmatter'da import edildi, Astro otomatik inject eder -->", "</head> <body> ", " ", " <!-- GSAP Animasyonlar --> ", " <!-- Base path for client-side scripts --> <script>(function(){", "\n    window.__BASE_PATH = basePath;\n  })();<\/script> <!-- Client-side Router --> <script>\n    (function() {\n      var s = document.createElement('script');\n      s.src = (window.__BASE_PATH || '') + '/js/router.js';\n      document.body.appendChild(s);\n    })();\n  <\/script> </body> </html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(canonicalUrl, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(fullOgImage, "content"), addAttribute(canonicalUrl, "content"), addAttribute(withBase("/favicon.svg"), "href"), unescapeHTML(JSON.stringify({
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
  })), renderHead(), renderSlot($$result, $$slots["default"]), scrollTarget && renderTemplate(_a$3 || (_a$3 = __template$3(["<script>(function(){", "\n      document.addEventListener('DOMContentLoaded', function() {\n        var el = document.getElementById(scrollTarget);\n        if (el) {\n          setTimeout(function() {\n            el.scrollIntoView({ behavior: 'smooth' });\n          }, 100);\n        }\n      });\n    })();<\/script>"])), defineScriptVars({ scrollTarget })), renderScript($$result, "/app/site/src/layouts/Base.astro?astro&type=script&index=0&lang.ts"), defineScriptVars({ basePath }));
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
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="relative h-screen flex items-center justify-center overflow-hidden pt-20"> <!-- Background Image --> <div class="absolute inset-0 z-0"> <img src="https://images.unsplash.com/photo-1769008302060-74c03f712dfb?w=1920" alt="Modern Architecture" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div> </div> <!-- Content --> <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white"> <div class="max-w-3xl"> <h1 class="text-5xl md:text-6xl lg:text-7xl mb-6">
Alüminyum Cephe Sistemlerinde
<span class="block text-slate-300">Öncü Çözümler</span> </h1> <p class="text-xl md:text-2xl mb-8 text-gray-200">
Mimari vizyonlarınızı gerçeğe dönüştürüyoruz. Modern teknoloji ve
        uzman ekibimizle, projelerinize değer katıyoruz.
</p> <div class="flex flex-col sm:flex-row gap-4"> <a${addAttribute(withBase("/projeler"), "href")} class="hero-cta inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-800 hover:to-slate-700 text-white rounded-lg transition-all transform hover:scale-105 shadow-xl backdrop-blur-sm border border-slate-500/30">
Projelerimizi İnceleyin
<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> <a${addAttribute(withBase("/iletisim"), "href")} class="hero-cta inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white rounded-lg backdrop-blur-sm transition-all">
İletişime Geçin
</a> </div> </div> </div> <!-- Scroll Indicator --> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"> <div class="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"> <div class="w-1 h-3 bg-white rounded-full"></div> </div> </div> </section> <!-- Hero CTA buttons are now regular <a> tags, router.js will handle navigation -->`;
}, "/app/site/src/components/Hero.astro", void 0);
const $$About = createComponent(($$result, $$props, $$slots) => {
  const { company: company2 } = siteData;
  return renderTemplate`${maybeRenderHead()}<section id="about" class="py-12 md:py-24 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid md:grid-cols-2 gap-8 md:gap-16 items-center"> <!-- Left Side - Image --> <div class="relative order-2 md:order-1"> <div class="relative h-64 md:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-slate-100"> <img src="https://images.unsplash.com/photo-1526913051154-293e311637e9?w=800" alt="Frontal Alüminyum" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div> </div> <!-- Floating Card --> <div class="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-slate-900 text-white p-4 md:p-6 rounded-lg shadow-2xl border border-white/10"> <div class="text-2xl md:text-4xl font-light">${company2.experienceYears}</div> <div class="text-[10px] md:text-sm uppercase tracking-widest font-bold text-slate-400">Yıllık Deneyim</div> </div> </div> <!-- Right Side - Content --> <div class="order-1 md:order-2"> <h2 class="text-3xl md:text-5xl mb-4 md:mb-6 text-slate-900 font-light tracking-tight"> ${company2.aboutTitle} </h2> <div class="w-16 h-1 bg-slate-400 mb-6 md:mb-8"></div> <div class="space-y-4 md:space-y-6 text-slate-600 font-light leading-relaxed"> <p class="text-base md:text-lg"> ${company2.aboutParagraph1} </p> <p class="text-sm md:text-base hidden sm:block"> ${company2.aboutParagraph2} </p> <p class="text-sm md:text-base"> ${company2.aboutParagraph3} </p> </div> <!-- Stats Grid --> <div class="grid grid-cols-2 gap-4 md:gap-8 mt-8 md:mt-12"> <div class="flex items-center space-x-3 md:space-x-4 p-3 md:p-0 rounded-lg bg-slate-50 md:bg-transparent"> <div class="flex-shrink-0"> <div class="w-10 h-10 md:w-14 md:h-14 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-sm"> <svg class="h-5 w-5 md:h-6 md:w-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path> </svg> </div> </div> <div> <div class="text-xl md:text-2xl font-semibold text-slate-900 leading-none mb-1">${company2.experienceYears}</div> <div class="text-[10px] md:text-xs uppercase tracking-wider text-slate-500 font-bold">Yıllık Tecrübe</div> </div> </div> <div class="flex items-center space-x-3 md:space-x-4 p-3 md:p-0 rounded-lg bg-slate-50 md:bg-transparent"> <div class="flex-shrink-0"> <div class="w-10 h-10 md:w-14 md:h-14 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-sm"> <svg class="h-5 w-5 md:h-6 md:w-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path> </svg> </div> </div> <div> <div class="text-xl md:text-2xl font-semibold text-slate-900 leading-none mb-1">${company2.projectCount}</div> <div class="text-[10px] md:text-xs uppercase tracking-wider text-slate-500 font-bold">Tamamlanan Proje</div> </div> </div> </div> </div> </div> </div> </section>`;
}, "/app/site/src/components/About.astro", void 0);
const services = [
  {
    id: 1,
    title: "Alüminyum Giydirme Cephe",
    description: "Modern ve dayanıklı alüminyum giydirme cephe sistemleri ile binalarınıza estetik ve performans kazandırıyoruz.",
    image: "/images/uploads/1770932969907-fa-agc1.jpg",
    details: [
      "Kapaklı Cephe Sistemleri",
      "Silikon Cephe Sistemleri",
      "Panel Cephe Sistemleri",
      "Yarı Kapaklı Cephe Sistemleri",
      "Üstün Isı ve Ses Yalıtımı"
    ]
  },
  {
    id: 2,
    title: "Transparan Cephe",
    description: "Cephe taşıyıcı sistemi alüminyum olmayan bu sistemde, lamine tek cam veya ısıcamlarda açılmış olan deliklerin paslanmaz rotiller ile taşıyıcı elmana bağlanması ile teşkil edilir. Bu taşıyıcı elamanlar mimari tercihlere göre yatay ve düşey şekillerde kullanılabilir. Taşıyıcılar normal çelik, paslanmaz çelik, paslanmaz gergi çubukları veya cam bloklar olabilmektedir. Camların arasına fitil ve uv dayanıklı silikonlar ile sızdırmazlıklar sağlanır.",
    image: "/images/uploads/1770933224107-fa-agc2.jpg",
    details: [
      "Spider (Tutuculu) Cam Sistemleri",
      "Paslanmaz Çelik Gergili Sistemler",
      "Cam Kolonlu Transparan Cepheler",
      "Maksimum Gün Işığı Kullanımı"
    ]
  },
  {
    id: 3,
    title: "Alüminyum Işıklık",
    description: "Doğal aydınlatma sağlayan alüminyum ışıklık sistemleri tasarlıyor ve uyguluyoruz.",
    image: "/images/uploads/1770933436513-fa-ais1.jpg",
    details: [
      "Piramit ve Tonoz Işıklıklar",
      "Polikarbonat Levha Uygulamaları",
      "Isı Yalıtımlı Çatı Işıklıkları",
      "Otomatik Havalandırma Kapakları",
      "Silikon Cephe Sistemi",
      "Yarı Kapaklı Cephe Sistemi",
      "Kasetli Silikon Cephe Sistemi",
      "Tam Kapaklı Cephe Sistemi"
    ]
  },
  {
    id: 4,
    title: "Doğrama Sistemleri",
    description: "Mimari istekler doğrultusunda görselliğin haricinde statik, ısıl hesaplar, hava su sızdırmazlık performansı ve konforlu bir yaşam için beklenen özellikleri karşılayabilecek birçok alternatife sahiptir. İçe veya dışa, vasistas, çift eksen, pivot, sürme, katlanır şeklinde birçok açılım tipi uygulanabilir. İstenen ışık geçirgenliği ve performanslara göre her tip kesit ve nitelikte cam veya paneller uygulanabilr. ",
    image: "/images/uploads/1770933521806-fa-ds1.jpg",
    details: [
      "Isı Yalıtımlı Kapı ve Pencere",
      "Sürme ve Kaldır-Sür Sistemler",
      "Katlanır Kapı Sistemleri",
      "Geniş Renk ve Yüzey Seçenekleri"
    ]
  },
  {
    id: 5,
    title: "Cephe Kaplamaları",
    description: "Alüminyum kompozit panel ve özel kaplama çözümleri ile modern cephe tasarımları.",
    image: "/images/uploads/1770933671847-fa-cks1.jpg",
    details: [
      "Alüminyum Kompozit Panel",
      "Seramik Cephe Kaplama",
      "Terracotta Kaplama Sistemleri",
      "Klinker Tuğla Uygulamaları",
      "Kompak Laminat Kaplama"
    ]
  },
  {
    id: 6,
    title: "Güneş Kırıcı Sistemler",
    description: "Enerji verimliliği sağlayan akıllı güneş kırıcı ve kontrol sistemleri. Cephe taşıyıcı sistemi alüminyum olmayan bu sistemde, lamine tek cam veya ısıcamlarda açılmış olan deliklerin paslanmaz rotiller ile taşıyıcı elmana bağlanması ile teşkil edilir. Bu taşıyıcı elamanlar mimari tercihlere göre yatay ve düşey şekillerde kullanılabilir. Taşıyıcılar normal çelik, paslanmaz çelik, paslanmaz gergi çubukları veya cam bloklar olabilmektedir. Camların arasına fitil ve uv dayanıklı silikonlar ile sızdırmazlıklar sağlanır.",
    image: "/images/uploads/1770933766029-fa-gks1.jpg",
    details: [
      "Sabit ve Hareketli Kanatlar",
      "Dikey ve Yatay Uygulamalar",
      "Güneş Takip Sensörlü Sistemler",
      "Modern Mimari Detaylar"
    ]
  },
  {
    id: 7,
    title: "Modüler İç Bölme",
    description: "Esnek ve fonksiyonel modüler iç bölme sistemleri ile ofis alanları çözümleri. Modüler iç bölme sistemi pratik çözümler sunar. Modüler yapısı ile her mekan için mükemmel çözüm kolaylıkları oluşturur, Gereksinimine uygun olarak dolu ve cam modülerde yapılabilen özel uygulamalarla mekanın değişik etkilerle görünümünü sağlar. Profiller mekan için öngörülen renklerle uyumlu tüm RAL renklerinde uygulanabilme avantajına sahiptir. Ayrıca iç mekana uygun olarak ahşap görünümlü alüminyum kaplama şakilleride önerilebilir. Sistem bu özellikleriyle, mimari projenin estetik değerini yaşama katmaya olanak sağlar. İki cam arası otomatik ve manuel jaluzi kullanılabilir.",
    image: "/images/uploads/1770933854880-fa-mibs1.jpg",
    details: [
      "Camdan Cama Bölme Sistemleri",
      "Alüminyum Karkaslı Bölmeler",
      "Ses Yalıtımlı Çözümler",
      "Hızlı Montaj ve Demontaj"
    ]
  }
];
var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Services = createComponent(($$result, $$props, $$slots) => {
  var _a2;
  const subtitle = (_a2 = siteData.sections) == null ? void 0 : _a2.servicesSubtitle;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<section id="services" class="py-10 md:py-24 bg-slate-50" data-astro-cid-g5jplrhu> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-g5jplrhu> <!-- Section Header --> <div class="text-center mb-8 md:mb-20" data-astro-cid-g5jplrhu> <h2 class="text-2xl md:text-5xl mb-3 text-slate-900 font-light tracking-tight" data-astro-cid-g5jplrhu>\nFaaliyet Alanları\n</h2> <div class="w-12 h-0.5 bg-slate-400 mx-auto mb-4 md:mb-6" data-astro-cid-g5jplrhu></div> <p class="text-xs md:text-lg text-slate-500 max-w-2xl mx-auto font-light px-4" data-astro-cid-g5jplrhu> ', ' </p> </div> <!-- Services Grid --> <div class="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8" data-astro-cid-g5jplrhu> ', ' </div> </div> </section>  <!-- Service Detail Modal --> <div id="service-modal" class="fixed inset-0 z-[100] hidden items-center justify-center p-2 md:p-4 overflow-hidden" data-astro-cid-g5jplrhu> <div id="service-modal-overlay" class="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" data-astro-cid-g5jplrhu></div> <!-- Close Button - Fixed Position --> <button id="service-modal-close" class="fixed top-3 right-3 md:top-4 md:right-4 p-2 bg-slate-900/90 backdrop-blur-md text-white rounded-full hover:bg-slate-800 transition-colors z-[110] shadow-lg" data-astro-cid-g5jplrhu> <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-g5jplrhu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-g5jplrhu></path> </svg> </button> <div id="service-modal-content" class="relative bg-white w-full max-w-2xl rounded-2xl overflow-hidden overflow-x-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto" data-astro-cid-g5jplrhu> <div id="service-modal-body" data-astro-cid-g5jplrhu></div> </div> </div> <!-- Lightbox --> <div id="service-lightbox" class="fixed inset-0 z-[200] hidden overflow-hidden p-2 md:p-4" data-astro-cid-g5jplrhu> <div id="service-lightbox-overlay" class="absolute inset-0 bg-black/80" data-astro-cid-g5jplrhu></div> <button id="service-lightbox-close" class="fixed top-3 right-3 md:top-4 md:right-4 p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-colors z-10" data-astro-cid-g5jplrhu> <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-g5jplrhu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-g5jplrhu></path> </svg> </button> <div class="relative w-full h-full flex items-center justify-center p-4 md:p-16" data-astro-cid-g5jplrhu> <img id="service-lightbox-image" class="max-w-full max-h-full object-contain select-none" alt="" data-astro-cid-g5jplrhu> </div> </div> <script>(function(){', `
  // Build lookup by id
  var serviceDetails = {};
  var _serviceLightboxOpen = false;
  for (var i = 0; i < servicesData.length; i++) {
    var s = servicesData[i];
    serviceDetails[s.id] = s;
  }

  function openServiceModal(serviceId) {
    var modal = document.getElementById('service-modal');
    var modalBody = document.getElementById('service-modal-body');
    var service = serviceDetails[serviceId];

    if (!modal || !modalBody || !service) return;

    var detailsHtml = '';
    var details = service.details || [];
    for (var i = 0; i < details.length; i++) {
      detailsHtml += '<div class="flex items-center gap-3">' +
        '<svg class="h-4 w-4 md:h-5 md:w-5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>' +
        '</svg>' +
        '<span class="text-sm md:text-base text-slate-700">' + details[i] + '</span>' +
        '</div>';
    }

    var imgSrc = service.image ? (basePath + service.image) : (basePath + '/images/placeholder.jpg');

    modalBody.innerHTML =
      '<div class="relative h-48 md:h-64 cursor-pointer" id="service-lightbox-trigger">' +
        '<img src="' + imgSrc + '" alt="' + service.title + '" class="w-full h-full object-cover" />' +
        '<div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>' +
        '<div class="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">' +
          '<h3 class="text-xl md:text-3xl text-white font-light leading-tight">' + service.title + '</h3>' +
        '</div>' +
        '<div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20">' +
          '<div class="bg-white/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium text-slate-900">' +
            '<svg class="inline h-3 w-3 md:h-4 md:w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
              '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>' +
            '</svg>' +
            'Büyüt' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="p-4 md:p-10">' +
        '<p class="text-slate-600 text-sm md:text-lg font-light leading-relaxed mb-6 md:mb-8">' + service.description + '</p>' +
        '<div class="space-y-4">' +
          '<h4 class="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-4 border-b border-slate-100 pb-2">Sistem Detayları &amp; Uygulama</h4>' +
          '<div class="grid sm:grid-cols-2 gap-3 md:gap-4">' + detailsHtml + '</div>' +
        '</div>' +
        '<button id="service-modal-close-btn" class="mt-8 md:mt-10 w-full py-3 md:py-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-lg text-sm md:text-base cursor-pointer">Kapat</button>' +
      '</div>';

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.documentElement.classList.add('modal-open');

    var closeBtn = document.getElementById('service-modal-close');
    var closeBtn2 = document.getElementById('service-modal-close-btn');
    var overlay = document.getElementById('service-modal-overlay');

    function closeModal() {
      if (_serviceLightboxOpen) return;
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.documentElement.classList.remove('modal-open');
      document.removeEventListener('keydown', handleModalEscape);
    }

    function handleModalEscape(e) {
      if (e.key === 'Escape') {
        if (_serviceLightboxOpen) return;
        closeModal();
      }
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (closeBtn2) closeBtn2.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', handleModalEscape);

    // Lightbox trigger
    var lightboxTrigger = document.getElementById('service-lightbox-trigger');
    if (lightboxTrigger) {
      lightboxTrigger.addEventListener('click', function() {
        openServiceLightbox(imgSrc);
      });
    }
  }

  function openServiceLightbox(imageSrc) {
    var lightbox = document.getElementById('service-lightbox');
    var lightboxImage = document.getElementById('service-lightbox-image');
    var lightboxClose = document.getElementById('service-lightbox-close');
    var lightboxOverlay = document.getElementById('service-lightbox-overlay');

    if (!lightbox || !lightboxImage) return;

    _serviceLightboxOpen = true;
    lightboxImage.src = imageSrc;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');

    function closeLightbox() {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      _serviceLightboxOpen = false;
      document.removeEventListener('keydown', handleLightboxEscape);
      lightboxClose.removeEventListener('click', closeLightbox);
      lightboxOverlay.removeEventListener('click', closeLightbox);
    }

    function handleLightboxEscape(e) {
      if (e.key === 'Escape') {
        e.stopImmediatePropagation();
        closeLightbox();
      }
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', handleLightboxEscape);
  }

  function initServiceCards() {
    var cards = document.querySelectorAll('.service-card');
    cards.forEach(function(card) {
      card.addEventListener('click', function() {
        var serviceId = parseInt(this.getAttribute('data-service-id'));
        if (serviceId) {
          openServiceModal(serviceId);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initServiceCards);
  } else {
    initServiceCards();
  }
})();<\/script>`])), maybeRenderHead(), subtitle, services.map((service) => renderTemplate`<div class="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full service-card"${addAttribute(service.id, "data-service-id")} data-astro-cid-g5jplrhu> <!-- Image --> <div class="relative h-24 md:h-56 overflow-hidden" data-astro-cid-g5jplrhu> <img${addAttribute(withBase(service.image || "/images/placeholder.jpg"), "src")}${addAttribute(service.title, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-astro-cid-g5jplrhu> <div class="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-colors duration-500" data-astro-cid-g5jplrhu></div> </div> <!-- Content --> <div class="p-2 md:p-8 flex flex-col flex-grow" data-astro-cid-g5jplrhu> <h3 class="text-[10px] md:text-xl font-semibold mb-1 md:mb-3 text-slate-900 leading-tight group-hover:text-slate-700 transition-colors line-clamp-2 md:line-clamp-none" data-astro-cid-g5jplrhu> ${service.title} </h3> <p class="hidden md:block text-slate-500 text-sm font-light leading-relaxed mb-6 service-desc" data-astro-cid-g5jplrhu> ${service.description} </p> <div class="mt-auto inline-flex items-center text-[8px] md:text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors" data-astro-cid-g5jplrhu> <span class="hidden md:inline" data-astro-cid-g5jplrhu>Detaylar</span> <svg class="ml-1 h-2 w-2 md:h-4 md:w-4 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-g5jplrhu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-g5jplrhu></path> </svg> </div> </div> </div>`), defineScriptVars({ servicesData: services, basePath }));
}, "/app/site/src/components/Services.astro", void 0);
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  var _a2;
  const subtitle = (_a2 = siteData.sections) == null ? void 0 : _a2.projectsSubtitle;
  const categories = ["Tümü", ...new Set(projects.map((p) => p.category))];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section id="projects" class="py-10 md:py-24 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Section Header --> <div class="text-center mb-8 md:mb-16"> <h2 class="text-2xl md:text-5xl mb-3 text-slate-900 font-light tracking-tight">\nProjelerimiz\n</h2> <div class="w-12 h-0.5 bg-slate-400 mx-auto mb-4 md:mb-6"></div> <p class="text-xs md:text-lg text-slate-500 max-w-2xl mx-auto font-light px-4"> ', ' </p> </div> <!-- Filters --> <div class="flex flex-col gap-4 mb-8 md:mb-16 items-center"> <div class="w-full overflow-x-auto no-scrollbar"> <div class="flex justify-center gap-3 px-4 min-w-max" id="project-filters"> ', ' </div> </div> </div> <!-- Projects Grid --> <div class="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8" id="projects-grid"> ', ' </div> <!-- No Results --> <div id="no-results" class="text-center py-10 hidden"> <p class="text-slate-400 font-light text-xs">Sonuç bulunamadı.</p> </div> </div> </section> <script>(function(){', "\n\n  function filterProjects(category) {\n    // GSAP varsa animasyonlu filtreleme animations.js tarafindan yapilir\n    if (window.gsap) return;\n\n    var cards = document.querySelectorAll('.project-card');\n    var noResults = document.getElementById('no-results');\n    var visibleCount = 0;\n\n    cards.forEach(function(card) {\n      var cardCategory = card.getAttribute('data-category');\n      if (category === 'Tümü' || cardCategory === category) {\n        card.style.display = 'flex';\n        visibleCount++;\n      } else {\n        card.style.display = 'none';\n      }\n    });\n\n    if (visibleCount === 0 && noResults) {\n      noResults.classList.remove('hidden');\n    } else if (noResults) {\n      noResults.classList.add('hidden');\n    }\n  }\n\n  // Aktif filtre class'lari (after: pseudo-element ile underline)\n  var activeClasses = ['active', 'text-slate-900', 'after:absolute', 'after:bottom-0', 'after:left-0', 'after:w-full', 'after:h-0.5', 'after:bg-slate-900'];\n  var inactiveClasses = ['text-slate-400'];\n\n  function setFilterActive(button) {\n    inactiveClasses.forEach(function(c) { button.classList.remove(c); });\n    activeClasses.forEach(function(c) { button.classList.add(c); });\n  }\n\n  function setFilterInactive(button) {\n    activeClasses.forEach(function(c) { button.classList.remove(c); });\n    inactiveClasses.forEach(function(c) { button.classList.add(c); });\n  }\n\n  function initProjectFilters() {\n    var filters = document.querySelectorAll('.project-filter');\n    filters.forEach(function(filter) {\n      filter.addEventListener('click', function() {\n        // Tum filtreleri inactive yap\n        filters.forEach(function(f) {\n          setFilterInactive(f);\n        });\n        // Tiklanan filtreyi active yap\n        setFilterActive(this);\n\n        var category = this.getAttribute('data-category');\n        if (category) {\n          filterProjects(category);\n        }\n      });\n    });\n  }\n\n  function initProjectCards() {\n    const cards = document.querySelectorAll('.project-card');\n    cards.forEach(function(card) {\n      card.addEventListener('click', function() {\n        const projectId = this.getAttribute('data-project-id');\n        const projectSlug = this.getAttribute('data-project-slug');\n        if (projectId && projectSlug) {\n          // Update URL using router\n          if (window.router) {\n            window.router.navigate(basePath + '/projeler/' + projectSlug);\n          } else {\n            window.location.href = basePath + '/projeler/' + projectSlug;\n          }\n        }\n      });\n    });\n  }\n\n  // Make projects data available globally for router\n  window.__PROJECTS_DATA__ = projectsData;\n\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', function() {\n      initProjectFilters();\n      initProjectCards();\n    });\n  } else {\n    initProjectFilters();\n    initProjectCards();\n  }\n})();<\/script>"])), maybeRenderHead(), subtitle, categories.map((category) => renderTemplate`<button${addAttribute(`project-filter text-[10px] md:text-sm font-medium transition-colors relative pb-1 whitespace-nowrap ${category === "Tümü" ? "text-slate-900 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-slate-900 active" : "text-slate-400 hover:text-slate-600"}`, "class")}${addAttribute(category, "data-category")}> ${category} </button>`), projects.map((project) => renderTemplate`<div class="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full project-card"${addAttribute(project.id, "data-project-id")}${addAttribute(project.slug, "data-project-slug")}${addAttribute(project.category, "data-category")}> <!-- Image --> <div class="relative h-24 md:h-64 overflow-hidden"> <img${addAttribute(withBase(project.image), "src")}${addAttribute(project.title, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy"> <div class="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-colors duration-500"></div> </div> <!-- Content --> <div class="p-2 md:p-8 flex flex-col flex-grow"> <span class="text-[7px] md:text-[10px] font-bold tracking-[0.1em] md:tracking-[0.2em] text-slate-400 uppercase mb-0.5 md:mb-3 block truncate"> ${project.category} </span> <h3 class="text-[10px] md:text-xl font-semibold mb-0.5 md:mb-3 text-slate-900 leading-tight group-hover:text-slate-700 transition-colors line-clamp-1 md:line-clamp-none"> ${project.title} </h3> <!-- Mobilde 1 satir aciklama --> <p class="text-[8px] md:text-sm text-slate-500 font-light leading-relaxed mb-1 md:mb-6 line-clamp-1 md:line-clamp-2"> ${project.description} </p> <div class="mt-auto flex flex-col md:flex-row md:items-center md:justify-between gap-0.5 md:gap-0"> <!-- Konum - mobilde tam gorunsun --> <div class="flex items-center gap-0.5 md:gap-1 text-[7px] md:text-[10px] text-slate-400 md:order-2"> <svg class="h-2 w-2 md:h-3 md:w-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span class="truncate">${project.location}</span> </div> <div class="hidden md:flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors md:order-1"> <span>Detaylar</span> <svg class="h-4 w-4 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </div> </div> </div>`), defineScriptVars({ projectsData: projects, basePath }));
}, "/app/site/src/components/Projects.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ProjectModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<!-- Project Modal -->", '<div id="project-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-2 md:p-4 overflow-hidden"> <div id="project-modal-overlay" class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div> <!-- Close Button - Fixed Position --> <button id="project-modal-close" class="fixed top-3 right-3 md:top-4 md:right-4 z-[60] p-2 bg-slate-900/90 backdrop-blur-md text-white rounded-full shadow-lg hover:bg-slate-800 transition-colors" aria-label="Kapat"> <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <div id="project-modal-content" class="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden z-10"> <!-- Modal Body (dynamically populated) --> <div id="project-modal-body"></div> </div> </div> <!-- Lightbox --> <div id="project-lightbox" class="fixed inset-0 z-[100] hidden overflow-hidden"> <div id="project-lightbox-overlay" class="absolute inset-0 bg-black/80"></div> <!-- Close Button --> <button id="project-lightbox-close" class="fixed top-3 right-3 md:top-4 md:right-4 p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-colors z-10"> <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <!-- Navigation Arrows --> <button id="project-lightbox-prev" class="fixed left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-colors z-10 hidden"> <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button id="project-lightbox-next" class="fixed right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-colors z-10 hidden"> <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> <!-- Image Container --> <div class="relative w-full h-full flex items-center justify-center p-4 md:p-16"> <img id="project-lightbox-image" class="max-w-full max-h-full object-contain select-none" alt=""> </div> <!-- Counter --> <div id="project-lightbox-counter" class="fixed bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-xs md:text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm"></div> </div> <script>(function(){', `

  // Path helper - image path'leri base path ile prefix'le
  function bp(path) {
    if (!path || path.startsWith('http')) return path;
    return basePath + (path.startsWith('/') ? path : '/' + path);
  }

  // Lightbox state tracking
  var _projectLightboxOpen = false;

  function openProjectModal(projectId) {
    const project = projectsData.find(function(p) { return p.id === projectId; });
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('project-modal-body');
    if (!modal || !modalBody) return;

    let currentImageIndex = 0;

    function renderModal() {
      const currentImage = bp(project.images[currentImageIndex] || project.image);

      modalBody.innerHTML =
        '<div class="relative h-48 md:h-96 bg-gray-900">' +
          '<img src="' + currentImage + '" alt="' + project.title + '" class="w-full h-full object-cover" id="project-modal-main-image" />' +
          /* Lightbox trigger - sadece resim alani */
          '<div class="absolute inset-0 flex items-center justify-center cursor-pointer" id="project-modal-lightbox-trigger">' +
            '<div class="opacity-0 hover:opacity-100 transition-opacity bg-black/20 absolute inset-0 flex items-center justify-center">' +
              '<div class="bg-white/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium text-slate-900 pointer-events-none">' +
                '<svg class="inline h-3 w-3 md:h-4 md:w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>' +
                '</svg>' +
                'Büyüt' +
              '</div>' +
            '</div>' +
          '</div>' +
          /* Navigation Arrows */
          (project.images.length > 1 ?
            '<button class="project-nav-btn absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-1.5 md:p-2 bg-white/90 rounded-full hover:bg-white transition-colors z-10" data-dir="prev" aria-label="Önceki">' +
              '<svg class="h-4 w-4 md:h-6 md:w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>' +
              '</svg>' +
            '</button>' +
            '<button class="project-nav-btn absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1.5 md:p-2 bg-white/90 rounded-full hover:bg-white transition-colors z-10" data-dir="next" aria-label="Sonraki">' +
              '<svg class="h-4 w-4 md:h-6 md:w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>' +
              '</svg>' +
            '</button>' +
            '<div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10" id="project-modal-indicators">' +
              project.images.map(function(_, index) {
                return '<button class="project-modal-indicator w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ' +
                  (index === currentImageIndex ? 'bg-white w-6 md:w-8' : 'bg-white/50 hover:bg-white/75') +
                  '" data-index="' + index + '"></button>';
              }).join('') +
            '</div>'
          : '') +
        '</div>' +
        '<div class="p-4 md:p-8">' +
          '<div class="inline-block px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full text-xs md:text-sm mb-3 md:mb-4 border border-slate-300/50">' +
            project.category +
          '</div>' +
          '<h2 class="text-xl md:text-3xl mb-3 md:mb-4 text-gray-900">' +
            project.title +
          '</h2>' +
          '<div class="flex flex-wrap gap-3 md:gap-4 mb-4 md:mb-6 text-gray-600 text-sm">' +
            (project.location ?
              '<div class="flex items-center gap-1.5">' +
                '<svg class="h-4 w-4 md:h-5 md:w-5 text-slate-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>' +
                  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>' +
                '</svg>' +
                '<span>' + project.location + '</span>' +
              '</div>'
            : '') +
            (project.year ?
              '<div class="flex items-center gap-1.5">' +
                '<svg class="h-4 w-4 md:h-5 md:w-5 text-slate-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>' +
                '</svg>' +
                '<span>' + project.year + '</span>' +
              '</div>'
            : '') +
          '</div>' +
          '<div class="prose max-w-none">' +
            '<p class="text-sm md:text-lg text-gray-700 leading-relaxed">' +
              (project.details || project.description) +
            '</p>' +
          '</div>' +
          (project.images.length > 1 ?
            '<div class="mt-6 md:mt-8 grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-3" id="project-modal-thumbnails">' +
              project.images.map(function(image, index) {
                return '<button class="project-modal-thumb aspect-video rounded-lg overflow-hidden border-2 transition-all ' +
                  (index === currentImageIndex ? 'border-slate-600 shadow-lg' : 'border-transparent hover:border-gray-300') +
                  '" data-index="' + index + '">' +
                  '<img src="' + bp(image) + '" alt="' + project.title + ' ' + (index + 1) + '" class="w-full h-full object-cover" />' +
                '</button>';
              }).join('') +
            '</div>'
          : '') +
        '</div>';

      attachImageNavigation();
    }

    function attachImageNavigation() {
      var mainImage = document.getElementById('project-modal-main-image');
      var indicators = document.querySelectorAll('.project-modal-indicator');
      var thumbnails = document.querySelectorAll('.project-modal-thumb');

      function updateImage() {
        var currentImage = bp(project.images[currentImageIndex] || project.image);
        if (mainImage) mainImage.src = currentImage;

        indicators.forEach(function(indicator, index) {
          if (index === currentImageIndex) {
            indicator.classList.add('bg-white');
            indicator.classList.remove('bg-white/50');
            indicator.style.width = window.innerWidth < 768 ? '1.5rem' : '2rem';
          } else {
            indicator.classList.remove('bg-white');
            indicator.classList.add('bg-white/50');
            indicator.style.width = '';
          }
        });

        thumbnails.forEach(function(thumb, index) {
          if (index === currentImageIndex) {
            thumb.classList.add('border-slate-600', 'shadow-lg');
            thumb.classList.remove('border-transparent');
          } else {
            thumb.classList.remove('border-slate-600', 'shadow-lg');
            thumb.classList.add('border-transparent');
          }
        });
      }

      // Nav buttons - stopPropagation to prevent lightbox from opening
      var navBtns = document.querySelectorAll('.project-nav-btn');
      navBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.stopPropagation();
          var dir = this.getAttribute('data-dir');
          if (dir === 'prev') {
            currentImageIndex = currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1;
          } else {
            currentImageIndex = currentImageIndex === project.images.length - 1 ? 0 : currentImageIndex + 1;
          }
          updateImage();
        });
      });

      indicators.forEach(function(indicator) {
        indicator.addEventListener('click', function(e) {
          e.stopPropagation();
          currentImageIndex = parseInt(this.getAttribute('data-index'));
          updateImage();
        });
      });

      thumbnails.forEach(function(thumb) {
        thumb.addEventListener('click', function() {
          currentImageIndex = parseInt(this.getAttribute('data-index'));
          updateImage();
        });
      });

      // Lightbox trigger - only the image area
      var lightboxTrigger = document.getElementById('project-modal-lightbox-trigger');
      if (lightboxTrigger) {
        lightboxTrigger.addEventListener('click', function() {
          openProjectLightbox(project, currentImageIndex);
        });
      }
    }

    function openProjectLightbox(proj, startIndex) {
      var lightboxIndex = startIndex || 0;
      var lightbox = document.getElementById('project-lightbox');
      var lightboxImage = document.getElementById('project-lightbox-image');
      var lightboxClose = document.getElementById('project-lightbox-close');
      var lightboxOverlay = document.getElementById('project-lightbox-overlay');
      var lightboxPrev = document.getElementById('project-lightbox-prev');
      var lightboxNext = document.getElementById('project-lightbox-next');
      var lightboxCounter = document.getElementById('project-lightbox-counter');

      if (!lightbox || !lightboxImage) return;

      _projectLightboxOpen = true;

      if (proj.images.length > 1) {
        lightboxPrev.classList.remove('hidden');
        lightboxNext.classList.remove('hidden');
      } else {
        lightboxPrev.classList.add('hidden');
        lightboxNext.classList.add('hidden');
      }

      function updateLightboxImage() {
        lightboxImage.src = bp(proj.images[lightboxIndex] || proj.image);
        if (lightboxCounter && proj.images.length > 1) {
          lightboxCounter.textContent = (lightboxIndex + 1) + ' / ' + proj.images.length;
        } else if (lightboxCounter) {
          lightboxCounter.textContent = '';
        }
      }

      function closeLightbox() {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        _projectLightboxOpen = false;
        document.removeEventListener('keydown', handleLightboxKeydown);
        lightboxClose.removeEventListener('click', closeLightbox);
        lightboxOverlay.removeEventListener('click', closeLightbox);
        lightboxPrev.removeEventListener('click', goToPrev);
        lightboxNext.removeEventListener('click', goToNext);
      }

      function goToPrev() {
        lightboxIndex = lightboxIndex === 0 ? proj.images.length - 1 : lightboxIndex - 1;
        updateLightboxImage();
      }

      function goToNext() {
        lightboxIndex = lightboxIndex === proj.images.length - 1 ? 0 : lightboxIndex + 1;
        updateLightboxImage();
      }

      function handleLightboxKeydown(e) {
        if (e.key === 'Escape') {
          e.stopImmediatePropagation();
          closeLightbox();
        } else if (e.key === 'ArrowLeft' && proj.images.length > 1) {
          goToPrev();
        } else if (e.key === 'ArrowRight' && proj.images.length > 1) {
          goToNext();
        }
      }

      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
      updateLightboxImage();

      lightboxClose.addEventListener('click', closeLightbox);
      lightboxOverlay.addEventListener('click', closeLightbox);
      lightboxPrev.addEventListener('click', goToPrev);
      lightboxNext.addEventListener('click', goToNext);
      document.addEventListener('keydown', handleLightboxKeydown);
    }

    function closeModal() {
      // Lightbox aciksa once onu kapat
      if (_projectLightboxOpen) return;

      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.documentElement.classList.remove('modal-open');
      document.removeEventListener('keydown', handleModalEscape);

      var projRegex = new RegExp('^' + basePath.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&') + '/projeler/[^/]+$');
      if (window.location.pathname.match(projRegex)) {
        history.replaceState({ path: basePath + '/projeler' }, '', basePath + '/projeler');
      }
    }

    function handleModalEscape(e) {
      if (e.key === 'Escape') {
        // Lightbox aciksa bunu isleme - lightbox kendi handler'i kapatir
        if (_projectLightboxOpen) return;
        closeModal();
      }
    }

    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.documentElement.classList.add('modal-open');

    renderModal();

    // Close handlers
    var closeBtn = document.getElementById('project-modal-close');
    var overlay = document.getElementById('project-modal-overlay');

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', handleModalEscape);
  }

  // Listen for custom event from Projects component
  document.addEventListener('openProjectModal', function(e) {
    if (e.detail.projectId) {
      openProjectModal(e.detail.projectId);
    } else if (e.detail.projectSlug) {
      var project = projectsData.find(function(p) {
        return p.slug === e.detail.projectSlug;
      });
      if (project) {
        openProjectModal(project.id);
      }
    }
  });
})();<\/script>`], ["<!-- Project Modal -->", '<div id="project-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-2 md:p-4 overflow-hidden"> <div id="project-modal-overlay" class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div> <!-- Close Button - Fixed Position --> <button id="project-modal-close" class="fixed top-3 right-3 md:top-4 md:right-4 z-[60] p-2 bg-slate-900/90 backdrop-blur-md text-white rounded-full shadow-lg hover:bg-slate-800 transition-colors" aria-label="Kapat"> <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <div id="project-modal-content" class="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden z-10"> <!-- Modal Body (dynamically populated) --> <div id="project-modal-body"></div> </div> </div> <!-- Lightbox --> <div id="project-lightbox" class="fixed inset-0 z-[100] hidden overflow-hidden"> <div id="project-lightbox-overlay" class="absolute inset-0 bg-black/80"></div> <!-- Close Button --> <button id="project-lightbox-close" class="fixed top-3 right-3 md:top-4 md:right-4 p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-colors z-10"> <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <!-- Navigation Arrows --> <button id="project-lightbox-prev" class="fixed left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-colors z-10 hidden"> <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button id="project-lightbox-next" class="fixed right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-colors z-10 hidden"> <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> <!-- Image Container --> <div class="relative w-full h-full flex items-center justify-center p-4 md:p-16"> <img id="project-lightbox-image" class="max-w-full max-h-full object-contain select-none" alt=""> </div> <!-- Counter --> <div id="project-lightbox-counter" class="fixed bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-xs md:text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm"></div> </div> <script>(function(){', `

  // Path helper - image path'leri base path ile prefix'le
  function bp(path) {
    if (!path || path.startsWith('http')) return path;
    return basePath + (path.startsWith('/') ? path : '/' + path);
  }

  // Lightbox state tracking
  var _projectLightboxOpen = false;

  function openProjectModal(projectId) {
    const project = projectsData.find(function(p) { return p.id === projectId; });
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('project-modal-body');
    if (!modal || !modalBody) return;

    let currentImageIndex = 0;

    function renderModal() {
      const currentImage = bp(project.images[currentImageIndex] || project.image);

      modalBody.innerHTML =
        '<div class="relative h-48 md:h-96 bg-gray-900">' +
          '<img src="' + currentImage + '" alt="' + project.title + '" class="w-full h-full object-cover" id="project-modal-main-image" />' +
          /* Lightbox trigger - sadece resim alani */
          '<div class="absolute inset-0 flex items-center justify-center cursor-pointer" id="project-modal-lightbox-trigger">' +
            '<div class="opacity-0 hover:opacity-100 transition-opacity bg-black/20 absolute inset-0 flex items-center justify-center">' +
              '<div class="bg-white/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium text-slate-900 pointer-events-none">' +
                '<svg class="inline h-3 w-3 md:h-4 md:w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>' +
                '</svg>' +
                'Büyüt' +
              '</div>' +
            '</div>' +
          '</div>' +
          /* Navigation Arrows */
          (project.images.length > 1 ?
            '<button class="project-nav-btn absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-1.5 md:p-2 bg-white/90 rounded-full hover:bg-white transition-colors z-10" data-dir="prev" aria-label="Önceki">' +
              '<svg class="h-4 w-4 md:h-6 md:w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>' +
              '</svg>' +
            '</button>' +
            '<button class="project-nav-btn absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1.5 md:p-2 bg-white/90 rounded-full hover:bg-white transition-colors z-10" data-dir="next" aria-label="Sonraki">' +
              '<svg class="h-4 w-4 md:h-6 md:w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>' +
              '</svg>' +
            '</button>' +
            '<div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10" id="project-modal-indicators">' +
              project.images.map(function(_, index) {
                return '<button class="project-modal-indicator w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ' +
                  (index === currentImageIndex ? 'bg-white w-6 md:w-8' : 'bg-white/50 hover:bg-white/75') +
                  '" data-index="' + index + '"></button>';
              }).join('') +
            '</div>'
          : '') +
        '</div>' +
        '<div class="p-4 md:p-8">' +
          '<div class="inline-block px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full text-xs md:text-sm mb-3 md:mb-4 border border-slate-300/50">' +
            project.category +
          '</div>' +
          '<h2 class="text-xl md:text-3xl mb-3 md:mb-4 text-gray-900">' +
            project.title +
          '</h2>' +
          '<div class="flex flex-wrap gap-3 md:gap-4 mb-4 md:mb-6 text-gray-600 text-sm">' +
            (project.location ?
              '<div class="flex items-center gap-1.5">' +
                '<svg class="h-4 w-4 md:h-5 md:w-5 text-slate-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>' +
                  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>' +
                '</svg>' +
                '<span>' + project.location + '</span>' +
              '</div>'
            : '') +
            (project.year ?
              '<div class="flex items-center gap-1.5">' +
                '<svg class="h-4 w-4 md:h-5 md:w-5 text-slate-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>' +
                '</svg>' +
                '<span>' + project.year + '</span>' +
              '</div>'
            : '') +
          '</div>' +
          '<div class="prose max-w-none">' +
            '<p class="text-sm md:text-lg text-gray-700 leading-relaxed">' +
              (project.details || project.description) +
            '</p>' +
          '</div>' +
          (project.images.length > 1 ?
            '<div class="mt-6 md:mt-8 grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-3" id="project-modal-thumbnails">' +
              project.images.map(function(image, index) {
                return '<button class="project-modal-thumb aspect-video rounded-lg overflow-hidden border-2 transition-all ' +
                  (index === currentImageIndex ? 'border-slate-600 shadow-lg' : 'border-transparent hover:border-gray-300') +
                  '" data-index="' + index + '">' +
                  '<img src="' + bp(image) + '" alt="' + project.title + ' ' + (index + 1) + '" class="w-full h-full object-cover" />' +
                '</button>';
              }).join('') +
            '</div>'
          : '') +
        '</div>';

      attachImageNavigation();
    }

    function attachImageNavigation() {
      var mainImage = document.getElementById('project-modal-main-image');
      var indicators = document.querySelectorAll('.project-modal-indicator');
      var thumbnails = document.querySelectorAll('.project-modal-thumb');

      function updateImage() {
        var currentImage = bp(project.images[currentImageIndex] || project.image);
        if (mainImage) mainImage.src = currentImage;

        indicators.forEach(function(indicator, index) {
          if (index === currentImageIndex) {
            indicator.classList.add('bg-white');
            indicator.classList.remove('bg-white/50');
            indicator.style.width = window.innerWidth < 768 ? '1.5rem' : '2rem';
          } else {
            indicator.classList.remove('bg-white');
            indicator.classList.add('bg-white/50');
            indicator.style.width = '';
          }
        });

        thumbnails.forEach(function(thumb, index) {
          if (index === currentImageIndex) {
            thumb.classList.add('border-slate-600', 'shadow-lg');
            thumb.classList.remove('border-transparent');
          } else {
            thumb.classList.remove('border-slate-600', 'shadow-lg');
            thumb.classList.add('border-transparent');
          }
        });
      }

      // Nav buttons - stopPropagation to prevent lightbox from opening
      var navBtns = document.querySelectorAll('.project-nav-btn');
      navBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.stopPropagation();
          var dir = this.getAttribute('data-dir');
          if (dir === 'prev') {
            currentImageIndex = currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1;
          } else {
            currentImageIndex = currentImageIndex === project.images.length - 1 ? 0 : currentImageIndex + 1;
          }
          updateImage();
        });
      });

      indicators.forEach(function(indicator) {
        indicator.addEventListener('click', function(e) {
          e.stopPropagation();
          currentImageIndex = parseInt(this.getAttribute('data-index'));
          updateImage();
        });
      });

      thumbnails.forEach(function(thumb) {
        thumb.addEventListener('click', function() {
          currentImageIndex = parseInt(this.getAttribute('data-index'));
          updateImage();
        });
      });

      // Lightbox trigger - only the image area
      var lightboxTrigger = document.getElementById('project-modal-lightbox-trigger');
      if (lightboxTrigger) {
        lightboxTrigger.addEventListener('click', function() {
          openProjectLightbox(project, currentImageIndex);
        });
      }
    }

    function openProjectLightbox(proj, startIndex) {
      var lightboxIndex = startIndex || 0;
      var lightbox = document.getElementById('project-lightbox');
      var lightboxImage = document.getElementById('project-lightbox-image');
      var lightboxClose = document.getElementById('project-lightbox-close');
      var lightboxOverlay = document.getElementById('project-lightbox-overlay');
      var lightboxPrev = document.getElementById('project-lightbox-prev');
      var lightboxNext = document.getElementById('project-lightbox-next');
      var lightboxCounter = document.getElementById('project-lightbox-counter');

      if (!lightbox || !lightboxImage) return;

      _projectLightboxOpen = true;

      if (proj.images.length > 1) {
        lightboxPrev.classList.remove('hidden');
        lightboxNext.classList.remove('hidden');
      } else {
        lightboxPrev.classList.add('hidden');
        lightboxNext.classList.add('hidden');
      }

      function updateLightboxImage() {
        lightboxImage.src = bp(proj.images[lightboxIndex] || proj.image);
        if (lightboxCounter && proj.images.length > 1) {
          lightboxCounter.textContent = (lightboxIndex + 1) + ' / ' + proj.images.length;
        } else if (lightboxCounter) {
          lightboxCounter.textContent = '';
        }
      }

      function closeLightbox() {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        _projectLightboxOpen = false;
        document.removeEventListener('keydown', handleLightboxKeydown);
        lightboxClose.removeEventListener('click', closeLightbox);
        lightboxOverlay.removeEventListener('click', closeLightbox);
        lightboxPrev.removeEventListener('click', goToPrev);
        lightboxNext.removeEventListener('click', goToNext);
      }

      function goToPrev() {
        lightboxIndex = lightboxIndex === 0 ? proj.images.length - 1 : lightboxIndex - 1;
        updateLightboxImage();
      }

      function goToNext() {
        lightboxIndex = lightboxIndex === proj.images.length - 1 ? 0 : lightboxIndex + 1;
        updateLightboxImage();
      }

      function handleLightboxKeydown(e) {
        if (e.key === 'Escape') {
          e.stopImmediatePropagation();
          closeLightbox();
        } else if (e.key === 'ArrowLeft' && proj.images.length > 1) {
          goToPrev();
        } else if (e.key === 'ArrowRight' && proj.images.length > 1) {
          goToNext();
        }
      }

      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
      updateLightboxImage();

      lightboxClose.addEventListener('click', closeLightbox);
      lightboxOverlay.addEventListener('click', closeLightbox);
      lightboxPrev.addEventListener('click', goToPrev);
      lightboxNext.addEventListener('click', goToNext);
      document.addEventListener('keydown', handleLightboxKeydown);
    }

    function closeModal() {
      // Lightbox aciksa once onu kapat
      if (_projectLightboxOpen) return;

      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.documentElement.classList.remove('modal-open');
      document.removeEventListener('keydown', handleModalEscape);

      var projRegex = new RegExp('^' + basePath.replace(/[.*+?^\\\${}()|[\\\\]\\\\\\\\]/g, '\\\\\\\\$&') + '/projeler/[^/]+$');
      if (window.location.pathname.match(projRegex)) {
        history.replaceState({ path: basePath + '/projeler' }, '', basePath + '/projeler');
      }
    }

    function handleModalEscape(e) {
      if (e.key === 'Escape') {
        // Lightbox aciksa bunu isleme - lightbox kendi handler'i kapatir
        if (_projectLightboxOpen) return;
        closeModal();
      }
    }

    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.documentElement.classList.add('modal-open');

    renderModal();

    // Close handlers
    var closeBtn = document.getElementById('project-modal-close');
    var overlay = document.getElementById('project-modal-overlay');

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', handleModalEscape);
  }

  // Listen for custom event from Projects component
  document.addEventListener('openProjectModal', function(e) {
    if (e.detail.projectId) {
      openProjectModal(e.detail.projectId);
    } else if (e.detail.projectSlug) {
      var project = projectsData.find(function(p) {
        return p.slug === e.detail.projectSlug;
      });
      if (project) {
        openProjectModal(project.id);
      }
    }
  });
})();<\/script>`])), maybeRenderHead(), defineScriptVars({ projectsData: projects, basePath }));
}, "/app/site/src/components/ProjectModal.astro", void 0);
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  var _a2, _b2, _c;
  const subtitle = (_a2 = siteData.sections) == null ? void 0 : _a2.contactSubtitle;
  const locations = ((_b2 = siteData.contact) == null ? void 0 : _b2.locations) || [];
  const showContactForm = ((_c = siteData.contact) == null ? void 0 : _c.showContactForm) !== false;
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="py-10 md:py-24 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Section Header --> <div class="text-center mb-8 md:mb-16"> <h2 class="text-2xl md:text-5xl mb-3 text-slate-900 font-light tracking-tight">
İletişim
</h2> <div class="w-12 h-0.5 bg-slate-400 mx-auto mb-4 md:mb-6"></div> <p class="text-xs md:text-lg text-slate-500 max-w-2xl mx-auto font-light px-4"> ${subtitle} </p> </div> <!-- Lokasyonlar --> <div class="grid md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12"> ${locations.map((loc) => renderTemplate`<div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"> <!-- Konum Başlığı --> <div class="bg-slate-900 px-6 py-4"> <h3 class="text-lg font-semibold text-white flex items-center gap-2"> <svg class="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path> </svg> ${loc.name} </h3> </div> <div class="p-6 space-y-5"> <!-- Adres --> <div class="flex items-start gap-3"> <div class="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center"> <svg class="h-5 w-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <div> <div class="text-xs text-slate-400 uppercase tracking-wider mb-1">Adres</div> <div class="text-sm text-slate-700 leading-relaxed">${loc.address}</div> </div> </div> <!-- Telefon --> <div class="flex items-start gap-3"> <div class="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center"> <svg class="h-5 w-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <div> <div class="text-xs text-slate-400 uppercase tracking-wider mb-1">Telefon</div> <a${addAttribute(`tel:${loc.phone.replace(/\s/g, "")}`, "href")} class="text-sm text-slate-700 hover:text-slate-900 transition-colors">${loc.phone}</a> </div> </div> <!-- Faks --> ${loc.fax && renderTemplate`<div class="flex items-start gap-3"> <div class="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center"> <svg class="h-5 w-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path> </svg> </div> <div> <div class="text-xs text-slate-400 uppercase tracking-wider mb-1">Faks</div> <div class="text-sm text-slate-700">${loc.fax}</div> </div> </div>`} <!-- Çalışma Saatleri --> <div class="flex items-start gap-3"> <div class="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center"> <svg class="h-5 w-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <div class="text-xs text-slate-400 uppercase tracking-wider mb-1">Çalışma Saatleri</div> <div class="text-sm text-slate-700">${loc.workingHours}</div> </div> </div> <!-- Harita --> <div class="rounded-lg overflow-hidden h-48 border border-slate-200 mt-4"> ${loc.mapUrl ? renderTemplate`<iframe${addAttribute(loc.mapUrl, "src")} class="w-full h-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"${addAttribute(`${loc.name} Konum`, "title")}></iframe>` : renderTemplate`<div class="w-full h-full bg-slate-50 flex items-center justify-center"> <div class="text-center text-slate-400"> <svg class="h-10 w-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <p class="text-sm">Harita</p> </div> </div>`} </div> </div> </div>`)} </div> <!-- İletişim Formu (opsiyonel, ortalı) --> ${showContactForm} </div> </section> ${renderScript($$result, "/app/site/src/components/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/app/site/src/components/Contact.astro", void 0);
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  var _a2, _b2, _c, _d;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"> <!-- Company Info --> <div> <img${addAttribute(withBase("/images/logo.png"), "src")} alt="Frontal Alüminyum" class="h-12 mb-4 brightness-0 invert"> <p class="text-gray-400 mb-4">
Alüminyum cephe sistemlerinde 25 yılı aşkın tecrübe ile Türkiye'nin
          önde gelen firması.
</p> <div class="flex gap-3"> ${renderTemplate`<a${addAttribute(siteData.social.facebook, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors" aria-label="Facebook"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path> </svg> </a>`} ${renderTemplate`<a${addAttribute(siteData.social.instagram, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors" aria-label="Instagram"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path> </svg> </a>`} ${renderTemplate`<a${addAttribute(siteData.social.linkedin, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors" aria-label="LinkedIn"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a>`} </div> </div> <!-- Quick Links --> <div> <h3 class="text-lg mb-4">Hızlı Bağlantılar</h3> <ul class="space-y-2"> <li> <a${addAttribute(withBase("/"), "href")} class="footer-link text-gray-400 hover:text-white transition-colors">
Ana Sayfa
</a> </li> <li> <a${addAttribute(withBase("/hakkimizda"), "href")} class="footer-link text-gray-400 hover:text-white transition-colors">
Kurumsal
</a> </li> <li> <a${addAttribute(withBase("/faaliyet-alanlari"), "href")} class="footer-link text-gray-400 hover:text-white transition-colors">
Faaliyet Alanları
</a> </li> <li> <a${addAttribute(withBase("/projeler"), "href")} class="footer-link text-gray-400 hover:text-white transition-colors">
Projeler
</a> </li> <li> <a${addAttribute(withBase("/iletisim"), "href")} class="footer-link text-gray-400 hover:text-white transition-colors">
İletişim
</a> </li> </ul> </div> <!-- Services --> <div> <h3 class="text-lg mb-4">Hizmetlerimiz</h3> <ul class="space-y-2 text-gray-400"> <li>Alüminyum Giydirme Cephe</li> <li>Transparan Cepheler</li> <li>Alüminyum Işıklık</li> <li>Doğrama Sistemleri</li> <li>Cephe Kaplamaları</li> <li>Güneş Kırıcı Sistemler</li> </ul> </div> <!-- Contact Info --> <div> <h3 class="text-lg mb-4">İletişim</h3> <ul class="space-y-3"> <li class="flex items-start gap-3 text-gray-400"> <svg class="h-5 w-5 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span>${(_b2 = (_a2 = siteData.contact.locations) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.address}</span> </li> <li class="flex items-center gap-3 text-gray-400"> <svg class="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span>${(_d = (_c = siteData.contact.locations) == null ? void 0 : _c[0]) == null ? void 0 : _d.phone}</span> </li> <li class="flex items-center gap-3 text-gray-400"> <svg class="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <span>${siteData.contact.email}</span> </li> </ul> </div> </div> <!-- Bottom Bar --> <div class="border-t border-gray-800 pt-8"> <div class="flex flex-col md:flex-row justify-between items-center gap-4"> <p class="text-gray-400 text-sm">
© ${currentYear} ${siteData.company.name}. Tüm hakları saklıdır.
</p> <div class="flex gap-6 text-sm text-gray-400"> <a href="#" class="hover:text-white transition-colors">
Gizlilik Politikası
</a> <a href="#" class="hover:text-white transition-colors">
Kullanım Koşulları
</a> <a href="#" class="hover:text-white transition-colors">
KVKK
</a> </div> </div> </div> </div> </footer> <!-- Footer links are now regular <a> tags, router.js will handle navigation -->`;
}, "/app/site/src/components/Footer.astro", void 0);
const $$ScrollToTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="scroll-to-top" class="fixed bottom-6 right-6 z-40 p-4 bg-slate-800 text-white rounded-full shadow-2xl hover:bg-slate-900 transition-all transform hover:scale-110 border border-slate-700/50 backdrop-blur-sm hidden" aria-label="Başa Dön"> <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path> </svg> </button> ${renderScript($$result, "/app/site/src/components/ScrollToTop.astro?astro&type=script&index=0&lang.ts")}`;
}, "/app/site/src/components/ScrollToTop.astro", void 0);
export {
  $$Base as $,
  $$Header as a,
  $$Hero as b,
  $$About as c,
  $$Services as d,
  $$Projects as e,
  $$ProjectModal as f,
  $$Contact as g,
  $$Footer as h,
  $$ScrollToTop as i,
  siteData as s
};
