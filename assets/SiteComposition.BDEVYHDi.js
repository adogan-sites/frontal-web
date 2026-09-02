var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { c as createAstro, a as createComponent, b as renderTemplate, d as addAttribute, r as renderComponent, m as maybeRenderHead, e as renderScript, u as unescapeHTML, f as defineScriptVars } from "./astro/server.Djac9TLI.js";
import "piccolore";
import { n as normalizeSectionOrder, a as $$Header, c as $$Footer } from "./Footer.Bg9zxgZF.js";
import { s as siteData } from "./site.CbRSZzkL.js";
import { w as withBase, b as basePath } from "./paths.tphEKz_F.js";
import { p as publishedOnly, a as projects, r as rawServices } from "./published.DKPgJ_1P.js";
import "clsx";
import { w as withSlugs } from "./slug.B0LQY6TY.js";
/* empty css                                    */
var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Astro$7 = createAstro("https://adogan-sites.github.io/frontal-web");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  var _a2, _b;
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Hero;
  const { isH1 = true } = Astro2.props;
  const HeroHeading = isH1 ? "h1" : "h2";
  const heroVideo = (_a2 = siteData.hero) == null ? void 0 : _a2.video;
  const heroBg = (_b = siteData.hero) == null ? void 0 : _b.backgroundImage;
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<section id="hero" aria-label="Ana Sayfa" class="relative mt-20 h-[calc(100vh-5rem)] lg:h-[min(680px,calc(100vh-5rem))] flex items-center justify-center overflow-hidden"> <!-- Background Video (desktop) + Poster Image (mobile / fallback) --> <div class="absolute inset-0 z-0"> <!-- Poster image - her zaman gorunur, video yuklenince video uzerine gecer --> <img', ` alt="Frontal Alüminyum" class="w-full h-full object-cover" id="hero-poster" fetchpriority="high" decoding="async"> <!-- Video - sadece desktop'ta yukle ve oynat --> `, ' <!-- Gradient overlay --> <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div> </div> <!-- Content --> <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white"> <div class="max-w-3xl"> ', ' <p class="text-xl md:text-2xl mb-8 text-gray-200">\nMimari vizyonlarınızı gerçeğe dönüştürüyoruz. Modern teknoloji ve\n        uzman ekibimizle, projelerinize değer katıyoruz.\n</p> <div class="flex flex-col sm:flex-row gap-4"> <a', ' class="hero-cta inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-800 hover:to-slate-700 text-white rounded-lg transition-all transform hover:scale-105 shadow-xl backdrop-blur-sm border border-slate-500/30">\nProjelerimizi İnceleyin\n<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> <a', ` class="hero-cta inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white rounded-lg backdrop-blur-sm transition-all">
İletişime Geçin
</a> </div> </div> </div> <!-- Scroll Indicator --> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"> <div class="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"> <div class="w-1 h-3 bg-white rounded-full"></div> </div> </div> </section> <script>
  // Video yuklendiginde goster (poster'in uzerine fade-in)
  var heroVideo = document.getElementById('hero-video');
  if (heroVideo) {
    var desktopMedia = window.matchMedia('(min-width: 768px)');

    function loadDesktopVideo() {
      if (!desktopMedia.matches || heroVideo.dataset.loaded === 'true') return;

      var videoSource = document.createElement('source');
      videoSource.src = heroVideo.dataset.src;
      videoSource.type = 'video/mp4';
      heroVideo.appendChild(videoSource);
      heroVideo.preload = 'auto';
      heroVideo.dataset.loaded = 'true';
      heroVideo.load();
    }

    heroVideo.addEventListener('canplaythrough', function() {
      heroVideo.style.opacity = '1';
    });
    if (typeof desktopMedia.addEventListener === 'function') {
      desktopMedia.addEventListener('change', loadDesktopVideo);
    } else {
      desktopMedia.addListener(loadDesktopVideo);
    }
    // 38 MB'lik video LCP ve kritik kaynaklarla yarismamali; poster kesintisiz
    // gorunur kaldigi icin varis noktasi ayni kalir.
    if (document.readyState === 'complete') {
      loadDesktopVideo();
    } else {
      window.addEventListener('load', loadDesktopVideo);
    }

    // Video zaten yuklenmis olabilir
    if (heroVideo.readyState >= 4) {
      heroVideo.style.opacity = '1';
    }
  }
<\/script>`])), maybeRenderHead(), addAttribute(withBase(heroBg), "src"), renderTemplate`<video id="hero-video" class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 hidden md:block" autoplay muted loop playsinline preload="none"${addAttribute(withBase(heroBg), "poster")}${addAttribute(withBase(heroVideo), "data-src")}></video>`, renderComponent($$result, "HeroHeading", HeroHeading, { "class": "text-5xl md:text-6xl lg:text-7xl mb-6" }, { "default": ($$result2) => renderTemplate`
Alüminyum Cephe Sistemlerinde
<span class="block text-slate-300">Öncü Çözümler</span> ` }), addAttribute(withBase("/projeler"), "href"), addAttribute(withBase("/iletisim"), "href"));
}, "/app/site/src/components/Hero.astro", void 0);
const MEDIA_WIDTHS = [320, 640, 960, 1280, 1920, 2560];
function parseOptimizedMediaUrl(url) {
  if (!url) return null;
  var match = String(url).match(/^(.*\/images\/uploads\/media\/([a-f0-9-]{36})\/v(\d+)\/)1280\.jpg$/);
  if (!match) return null;
  return { prefix: match[1], assetId: match[2], version: parseInt(match[3], 10) };
}
function getVariantUrl(url, width, format) {
  var parsed = parseOptimizedMediaUrl(url);
  if (!parsed) return url;
  return parsed.prefix + width + "." + format;
}
function getVariantSrcSet(url, format, widths) {
  var parsed = parseOptimizedMediaUrl(url);
  if (!parsed) return "";
  return (widths || MEDIA_WIDTHS).map(function(width) {
    return withBase(getVariantUrl(url, width, format)) + " " + width + "w";
  }).join(", ");
}
function getBlurUrl(url) {
  var parsed = parseOptimizedMediaUrl(url);
  return parsed ? parsed.prefix + "blur.webp" : "";
}
function getLegacyThumbnailUrl(url) {
  if (!url || parseOptimizedMediaUrl(url)) return url;
  return url.replace("/images/uploads/", "/images/uploads/thumbs/");
}
const $$Astro$6 = createAstro("https://adogan-sites.github.io/frontal-web");
const $$ResponsiveImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ResponsiveImage;
  const {
    src,
    alt,
    sizes = "100vw",
    class: className = "h-full w-full object-cover",
    loading = "lazy",
    legacyThumbnail = false,
    fetchpriority = "auto"
  } = Astro2.props;
  const optimized = parseOptimizedMediaUrl(src);
  const fallbackSrc = legacyThumbnail ? getLegacyThumbnailUrl(src) : src;
  const fallbackOriginal = legacyThumbnail && fallbackSrc !== src ? withBase(src) : void 0;
  const blurUrl = getBlurUrl(src);
  const pictureStyle = blurUrl ? `background-image:url('${withBase(blurUrl)}')` : void 0;
  return renderTemplate`${maybeRenderHead()}<picture class="media-picture block h-full w-full"${addAttribute(pictureStyle, "style")}> ${optimized && renderTemplate`<source type="image/avif"${addAttribute(getVariantSrcSet(src, "avif"), "srcset")}${addAttribute(sizes, "sizes")}>`} ${optimized && renderTemplate`<source type="image/webp"${addAttribute(getVariantSrcSet(src, "webp"), "srcset")}${addAttribute(sizes, "sizes")}>`} ${optimized && renderTemplate`<source type="image/jpeg"${addAttribute(getVariantSrcSet(src, "jpg"), "srcset")}${addAttribute(sizes, "sizes")}>`} <img${addAttribute(withBase(fallbackSrc), "src")}${addAttribute(alt, "alt")} width="1280" height="720"${addAttribute(loading, "loading")} decoding="async"${addAttribute(fetchpriority, "fetchpriority")}${addAttribute(fallbackOriginal, "data-fallback-src")}${addAttribute(["media-image", className], "class:list")}> </picture>`;
}, "/app/site/src/components/ResponsiveImage.astro", void 0);
const $$Astro$5 = createAstro("https://adogan-sites.github.io/frontal-web");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$About;
  const { isH1 = false } = Astro2.props;
  const SectionHeading = isH1 ? "h1" : "h2";
  const { company } = siteData;
  const rawYears = (/* @__PURE__ */ new Date()).getFullYear() - (company.foundedYear || 2010);
  const experienceYears = Math.floor(rawYears / 5) * 5 + 5 + "+";
  const projectCount = Math.floor(publishedOnly(projects).length * 2 / 10) * 10 + 10 + "+";
  const aboutImage = company.aboutImage || "https://images.unsplash.com/photo-1526913051154-293e311637e9?w=1600";
  return renderTemplate`${maybeRenderHead()}<section id="about" aria-label="Hakkımızda" class="py-12 md:py-24 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid md:grid-cols-2 gap-8 md:gap-16 items-center"> <!-- Left Side - Image --> <div class="relative order-2 md:order-1"> <div class="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-100"> ${renderComponent($$result, "ResponsiveImage", $$ResponsiveImage, { "src": aboutImage, "alt": "Frontal Alüminyum", "sizes": "(min-width: 768px) 50vw, 100vw", "class": "w-full h-full object-cover" })} <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div> </div> <!-- Floating Card --> <div class="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-slate-900 text-white p-4 md:p-6 rounded-lg shadow-2xl border border-white/10"> <div class="text-2xl md:text-4xl font-light">${experienceYears}</div> <div class="text-[10px] md:text-sm uppercase tracking-widest font-bold text-slate-400">Yıllık Deneyim</div> </div> </div> <!-- Right Side - Content --> <div class="order-1 md:order-2"> ${renderComponent($$result, "SectionHeading", SectionHeading, { "class": "text-3xl md:text-5xl mb-4 md:mb-6 text-slate-900 font-light tracking-tight" }, { "default": ($$result2) => renderTemplate`${company.aboutTitle}` })} <div class="w-16 h-1 bg-slate-400 mb-6 md:mb-8"></div> <div class="space-y-4 md:space-y-6 text-slate-600 font-light leading-relaxed"> <p class="text-base md:text-lg"> ${company.aboutParagraph1} </p> <p class="text-sm md:text-base hidden sm:block"> ${company.aboutParagraph2} </p> <p class="text-sm md:text-base"> ${company.aboutParagraph3} </p> </div> <!-- Stats Grid --> <div class="grid grid-cols-2 gap-4 md:gap-8 mt-8 md:mt-12"> <div class="flex items-center space-x-3 md:space-x-4 p-3 md:p-0 rounded-lg bg-slate-50 md:bg-transparent"> <div class="flex-shrink-0"> <div class="w-10 h-10 md:w-14 md:h-14 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-sm"> <svg class="h-5 w-5 md:h-6 md:w-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> </div> <div> <div class="text-xl md:text-2xl font-semibold text-slate-900 leading-none mb-1">${company.employeeCount}</div> <div class="text-[10px] md:text-xs uppercase tracking-wider text-slate-500 font-bold">Çalışan</div> </div> </div> <div class="flex items-center space-x-3 md:space-x-4 p-3 md:p-0 rounded-lg bg-slate-50 md:bg-transparent"> <div class="flex-shrink-0"> <div class="w-10 h-10 md:w-14 md:h-14 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-sm"> <svg class="h-5 w-5 md:h-6 md:w-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path> </svg> </div> </div> <div> <div class="text-xl md:text-2xl font-semibold text-slate-900 leading-none mb-1">${projectCount}</div> <div class="text-[10px] md:text-xs uppercase tracking-wider text-slate-500 font-bold">Tamamlanan Proje</div> </div> </div> </div> </div> </div> </div> </section>`;
}, "/app/site/src/components/About.astro", void 0);
var DEFAULT_WIDTHS = [320, 640, 960, 1280, 1920, 2560];
function escapeAttribute(value) {
  return String(value || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function resolvePath(url, basePath2) {
  if (!url) url = "/images/placeholder.svg";
  if (/^(https?:)?\/\//.test(url)) return url;
  return (basePath2 || "") + (url.charAt(0) === "/" ? url : "/" + url);
}
function optimizedPrefix(url) {
  var match = String(url || "").match(/^(.*\/images\/uploads\/media\/[a-f0-9-]{36}\/v\d+\/)1280\.jpg$/);
  return match ? match[1] : "";
}
function variantUrl(url, width, format, basePath2) {
  var prefix = optimizedPrefix(url);
  return resolvePath(prefix ? prefix + width + "." + format : url, basePath2);
}
function variantSrcset(url, format, basePath2, widths) {
  if (!optimizedPrefix(url)) return "";
  return (widths || DEFAULT_WIDTHS).map(function(width) {
    return variantUrl(url, width, format, basePath2) + " " + width + "w";
  }).join(", ");
}
function pictureMarkup(url, alt, options) {
  var settings = options || {};
  var rawUrl = url || "/images/placeholder.svg";
  var prefix = optimizedPrefix(rawUrl);
  var sizes = settings.sizes || "100vw";
  var widths = settings.widths || DEFAULT_WIDTHS;
  var blur = prefix ? resolvePath(prefix + "blur.webp", settings.basePath) : "";
  var style = blur ? ' style="background-image:url(&quot;' + escapeAttribute(blur) + '&quot;)"' : "";
  var sources = "";
  if (prefix) {
    sources = '<source type="image/avif" srcset="' + escapeAttribute(variantSrcset(rawUrl, "avif", settings.basePath, widths)) + '" sizes="' + escapeAttribute(sizes) + '"><source type="image/webp" srcset="' + escapeAttribute(variantSrcset(rawUrl, "webp", settings.basePath, widths)) + '" sizes="' + escapeAttribute(sizes) + '"><source type="image/jpeg" srcset="' + escapeAttribute(variantSrcset(rawUrl, "jpg", settings.basePath, widths)) + '" sizes="' + escapeAttribute(sizes) + '">';
  }
  return '<picture class="media-picture block h-full w-full"' + style + ">" + sources + '<img src="' + escapeAttribute(resolvePath(rawUrl, settings.basePath)) + '" alt="' + escapeAttribute(alt) + '" width="1280" height="720" loading="' + (settings.loading === "eager" ? "eager" : "lazy") + '" decoding="async" fetchpriority="' + (settings.fetchpriority || "auto") + '" class="media-image h-full w-full ' + escapeAttribute(settings.className || "object-cover") + '"></picture>';
}
function esc(str) {
  if (!str) return "";
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function projectImageList(project) {
  if (Array.isArray(project.images) && project.images.length) return project.images;
  if (project.image) return [project.image];
  return ["/images/placeholder.svg"];
}
var ZOOM_ICON_PATH$1 = "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7";
function projectModalHtml(project, currentImageIndex, options) {
  var settings = options || {};
  var basePath2 = settings.basePath || "";
  var headingTag = settings.headingTag || "h2";
  var index = 0;
  var projectImages = projectImageList(project);
  var currentImage = projectImages[index] || project.image || "/images/placeholder.svg";
  function media(path, alt, opts) {
    return pictureMarkup(path, alt, Object.assign({ basePath: basePath2 }, opts || {}));
  }
  return '<div class="relative aspect-video bg-gray-900"><div id="project-modal-media" class="h-full w-full">' + media(currentImage, project.title, { loading: "eager", fetchpriority: "high", sizes: "(min-width: 768px) 896px, 100vw" }) + '</div><div class="absolute inset-0 flex items-center justify-center cursor-pointer" id="project-modal-lightbox-trigger"><div class="opacity-0 hover:opacity-100 transition-opacity absolute inset-0 flex items-center justify-center"><div class="bg-white/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium text-slate-900 pointer-events-none"><svg class="inline h-3 w-3 md:h-4 md:w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="' + ZOOM_ICON_PATH$1 + '"></path></svg>Büyüt</div></div></div><div class="absolute top-2 left-2 md:hidden pointer-events-none z-[5]"><div class="bg-black/50 backdrop-blur-sm rounded-full p-1.5"><svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="' + ZOOM_ICON_PATH$1 + '"></path></svg></div></div>' + /* Navigation Arrows */
  (projectImages.length > 1 ? '<button class="project-nav-btn absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-1.5 md:p-2 bg-white/90 rounded-full hover:bg-white transition-colors z-10" data-dir="prev" aria-label="Önceki"><svg class="h-4 w-4 md:h-6 md:w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button><button class="project-nav-btn absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1.5 md:p-2 bg-white/90 rounded-full hover:bg-white transition-colors z-10" data-dir="next" aria-label="Sonraki"><svg class="h-4 w-4 md:h-6 md:w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button><div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/30 backdrop-blur-sm px-2.5 py-1.5 rounded-full" id="project-modal-indicators">' + projectImages.map(function(_, i) {
    return '<button class="project-modal-indicator w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ' + (i === index ? "bg-white w-6 md:w-8" : "bg-white/50 hover:bg-white/75") + '" data-index="' + i + '" aria-label="Görsel ' + (i + 1) + '"' + (i === index ? ' aria-current="true"' : "") + "></button>";
  }).join("") + "</div>" : "") + '</div><div class="p-4 md:p-8"><div class="inline-block px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full text-xs md:text-sm mb-3 md:mb-4 border border-slate-300/50">' + esc(project.category) + "</div><" + headingTag + ' class="text-xl md:text-3xl mb-3 md:mb-4 text-gray-900">' + esc(project.title) + "</" + headingTag + '><div class="flex flex-wrap gap-3 md:gap-4 mb-4 md:mb-6 text-gray-600 text-sm">' + (project.location ? '<div class="flex items-center gap-1.5"><svg class="h-4 w-4 md:h-5 md:w-5 text-slate-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><span>' + esc(project.location) + "</span></div>" : "") + (project.year ? '<div class="flex items-center gap-1.5"><svg class="h-4 w-4 md:h-5 md:w-5 text-slate-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><span>' + esc(project.year) + "</span></div>" : "") + '</div><div class="prose max-w-none"><p class="text-sm md:text-lg text-gray-700 leading-relaxed">' + esc(project.details || project.description) + "</p></div>" + (projectImages.length > 1 ? '<div class="mt-6 md:mt-8 grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-3" id="project-modal-thumbnails">' + projectImages.map(function(image, i) {
    return '<button class="project-modal-thumb aspect-video rounded-lg overflow-hidden border-2 transition-all ' + (i === index ? "border-slate-600 shadow-lg" : "border-transparent hover:border-gray-300") + '" data-index="' + i + '">' + media(image, project.title + " " + (i + 1), { widths: [320, 640], sizes: "(min-width: 768px) 160px, 25vw" }) + "</button>";
  }).join("") + "</div>" : "") + "</div>";
}
var ZOOM_ICON_PATH = "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7";
function serviceModalHtml(service, options) {
  var settings = options || {};
  var basePath2 = settings.basePath || "";
  var headingTag = settings.headingTag || "h3";
  var rawImage = service.image || "/images/placeholder.svg";
  var detailsHtml = "";
  var details = service.details || [];
  for (var i = 0; i < details.length; i++) {
    detailsHtml += '<div class="flex items-center gap-3"><svg class="h-4 w-4 md:h-5 md:w-5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span class="text-sm md:text-base text-slate-700">' + esc(details[i]) + "</span></div>";
  }
  var picture = pictureMarkup(rawImage, service.title, {
    basePath: basePath2,
    loading: "eager",
    fetchpriority: "high",
    sizes: "(min-width: 768px) 672px, 100vw"
  });
  return '<div class="relative aspect-video cursor-pointer" id="service-lightbox-trigger">' + picture + '<div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div><div class="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6"><' + headingTag + ' class="text-xl md:text-3xl text-white font-light leading-tight">' + esc(service.title) + "</" + headingTag + '></div><div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><div class="bg-white/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium text-slate-900"><svg class="inline h-3 w-3 md:h-4 md:w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="' + ZOOM_ICON_PATH + '"></path></svg>Büyüt</div></div><div class="absolute top-2 left-2 md:hidden pointer-events-none z-[5]"><div class="bg-black/50 backdrop-blur-sm rounded-full p-1.5"><svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="' + ZOOM_ICON_PATH + '"></path></svg></div></div></div><div class="p-4 md:p-10"><p class="text-slate-600 text-sm md:text-lg font-light leading-relaxed mb-6 md:mb-8">' + esc(service.description) + '</p><div class="space-y-4"><h4 class="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-4 border-b border-slate-100 pb-2">Sistem Detayları &amp; Uygulama</h4><div class="grid sm:grid-cols-2 gap-3 md:gap-4">' + detailsHtml + '</div></div><button id="service-modal-close-btn" class="mt-8 md:mt-10 w-full py-3 md:py-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-lg text-sm md:text-base cursor-pointer">Kapat</button></div>';
}
var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$4 = createAstro("https://adogan-sites.github.io/frontal-web");
const $$Services = createComponent(($$result, $$props, $$slots) => {
  var _a2;
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Services;
  const { isH1 = false, initialService = null } = Astro2.props;
  const SectionHeading = isH1 ? "h1" : "h2";
  const services = withSlugs(rawServices);
  const initialBody = initialService ? serviceModalHtml(initialService, { basePath, headingTag: "h1" }) : "";
  const servicesPayload = JSON.stringify({ services, basePath }).replace(/</g, "\\u003c");
  const subtitle = (_a2 = siteData.sections) == null ? void 0 : _a2.servicesSubtitle;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<section id="services" aria-label="Faaliyet Alanları" class="py-10 md:py-24 bg-slate-50" data-astro-cid-g5jplrhu> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-g5jplrhu> <!-- Section Header --> <div class="text-center mb-8 md:mb-20" data-astro-cid-g5jplrhu> ', ' <div class="w-12 h-0.5 bg-slate-400 mx-auto mb-4 md:mb-6" data-astro-cid-g5jplrhu></div> <p class="text-xs md:text-lg text-slate-500 max-w-2xl mx-auto font-light px-4" data-astro-cid-g5jplrhu> ', ' </p> </div> <!-- Services Grid --> <div class="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8" data-astro-cid-g5jplrhu> ', ' </div> </div> </section>  <script type="application/json" id="services-data">', '<\/script> <!-- Service Detail Modal --> <div id="service-modal"', "", ` data-astro-cid-g5jplrhu> <div id="service-modal-overlay" class="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" data-astro-cid-g5jplrhu></div> <!-- Close Button - Fixed Position --> <button id="service-modal-close" class="fixed top-3 right-3 md:top-4 md:right-4 p-2 bg-slate-900/90 backdrop-blur-md text-white rounded-full hover:bg-slate-800 transition-colors z-[110] shadow-lg" data-astro-cid-g5jplrhu> <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-g5jplrhu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-g5jplrhu></path> </svg> </button> <div id="service-modal-content" class="relative bg-white w-full max-w-2xl rounded-2xl overflow-hidden overflow-x-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto" data-astro-cid-g5jplrhu> <!-- Faaliyet detay sayfasinda build'de dolu gelir, diger sayfalarda JS doldurur --> <div id="service-modal-body" data-astro-cid-g5jplrhu>`, '</div> </div> </div> <!-- Lightbox --> <div id="service-lightbox" class="fixed inset-0 z-[200] hidden overflow-hidden p-2 md:p-4" data-astro-cid-g5jplrhu> <div id="service-lightbox-overlay" class="absolute inset-0 bg-black/80" data-astro-cid-g5jplrhu></div> <button id="service-lightbox-close" class="fixed top-3 right-3 md:top-4 md:right-4 p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-colors z-10" data-astro-cid-g5jplrhu> <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-g5jplrhu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-g5jplrhu></path> </svg> </button> <div class="relative w-full h-full flex items-center justify-center p-2 md:p-6 pointer-events-none" data-astro-cid-g5jplrhu> <div id="service-lightbox-stage" class="lightbox-stage relative flex h-full w-full items-center justify-center overflow-hidden pointer-events-auto" data-astro-cid-g5jplrhu> <div id="service-lightbox-media" class="h-full w-full" data-astro-cid-g5jplrhu></div> </div> </div> </div> ', ""])), maybeRenderHead(), renderComponent($$result, "SectionHeading", SectionHeading, { "class": "text-2xl md:text-5xl mb-3 text-slate-900 font-light tracking-tight", "data-astro-cid-g5jplrhu": true }, { "default": ($$result2) => renderTemplate`
Faaliyet Alanları
` }), subtitle, services.map((service) => renderTemplate`<a${addAttribute(withBase("/faaliyet-alanlari/" + service.slug), "href")} class="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-[box-shadow,border-color] duration-300 ease-out border border-slate-100 flex flex-col h-full service-card"${addAttribute(service.id, "data-service-id")}${addAttribute(service.slug, "data-service-slug")} data-astro-cid-g5jplrhu> <!-- Image --> <div class="relative aspect-video overflow-hidden bg-slate-100" data-astro-cid-g5jplrhu> ${renderComponent($$result, "ResponsiveImage", $$ResponsiveImage, { "src": service.image || "/images/placeholder.svg", "alt": service.title, "sizes": "(min-width: 1024px) 33vw, 50vw", "class": "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105", "legacyThumbnail": true, "data-astro-cid-g5jplrhu": true })} </div> <!-- Content --> <div class="p-2 md:p-8 flex flex-col flex-grow" data-astro-cid-g5jplrhu> <h3 class="text-[10px] md:text-xl font-semibold mb-1 md:mb-3 text-slate-900 leading-tight group-hover:text-slate-700 transition-colors duration-300 line-clamp-2 md:line-clamp-none" data-astro-cid-g5jplrhu> ${service.title} </h3> <p class="text-slate-500 text-[9px] md:text-sm font-light leading-relaxed mb-1 md:mb-6 service-desc" data-astro-cid-g5jplrhu> ${service.description} </p> <div class="mt-auto hidden md:inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors duration-300" data-astro-cid-g5jplrhu> <span data-astro-cid-g5jplrhu>Detaylar</span> <svg class="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-g5jplrhu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-g5jplrhu></path> </svg> </div> </div> </a>`), unescapeHTML(servicesPayload), addAttribute(`fixed inset-0 z-[100] ${initialService ? "flex" : "hidden"} items-center justify-center p-2 md:p-4 overflow-hidden`, "class"), addAttribute(initialService ? String(initialService.id) : void 0, "data-initial-id"), unescapeHTML(initialBody), renderScript($$result, "/app/site/src/components/Services.astro?astro&type=script&index=0&lang.ts"));
}, "/app/site/src/components/Services.astro", void 0);
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro("https://adogan-sites.github.io/frontal-web");
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  var _a2;
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Projects;
  const { isH1 = false } = Astro2.props;
  const SectionHeading = isH1 ? "h1" : "h2";
  const subtitle = (_a2 = siteData.sections) == null ? void 0 : _a2.projectsSubtitle;
  const visibleProjects = publishedOnly(projects);
  const categories = ["Tümü", ...new Set(visibleProjects.map((p) => p.category))];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section id="projects" aria-label="Projelerimiz" class="py-10 md:py-24 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Section Header --> <div class="text-center mb-8 md:mb-16"> ', ' <div class="w-12 h-0.5 bg-slate-400 mx-auto mb-4 md:mb-6"></div> <p class="text-xs md:text-lg text-slate-500 max-w-2xl mx-auto font-light px-4"> ', ' </p> </div> <!-- Filters --> <div class="flex flex-col gap-4 mb-8 md:mb-16 items-center"> <div class="w-full overflow-x-auto no-scrollbar"> <div class="flex justify-center gap-3 px-4 min-w-max" id="project-filters"> ', ' </div> </div> </div> <!-- Projects Grid --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6" id="projects-grid"> ', ' </div> <!-- No Results --> <div id="no-results" class="text-center py-10 hidden"> <p class="text-slate-400 font-light text-xs">Sonuç bulunamadı.</p> </div> </div> </section> <script>(function(){', "\n\n  function filterProjects(category) {\n    // GSAP varsa animasyonlu filtreleme animations.js tarafindan yapilir\n    if (window.gsap) return;\n\n    var cards = document.querySelectorAll('.project-card');\n    var noResults = document.getElementById('no-results');\n    var visibleCount = 0;\n\n    cards.forEach(function(card) {\n      var cardCategory = card.getAttribute('data-category');\n      if (category === 'Tümü' || cardCategory === category) {\n        card.style.display = 'flex';\n        visibleCount++;\n      } else {\n        card.style.display = 'none';\n      }\n    });\n\n    if (visibleCount === 0 && noResults) {\n      noResults.classList.remove('hidden');\n    } else if (noResults) {\n      noResults.classList.add('hidden');\n    }\n  }\n\n  // Aktif filtre class'lari (after: pseudo-element ile underline)\n  var activeClasses = ['active', 'text-slate-900', 'after:absolute', 'after:bottom-0', 'after:left-0', 'after:w-full', 'after:h-0.5', 'after:bg-slate-900'];\n  var inactiveClasses = ['text-slate-400'];\n\n  function setFilterActive(button) {\n    inactiveClasses.forEach(function(c) { button.classList.remove(c); });\n    activeClasses.forEach(function(c) { button.classList.add(c); });\n  }\n\n  function setFilterInactive(button) {\n    activeClasses.forEach(function(c) { button.classList.remove(c); });\n    inactiveClasses.forEach(function(c) { button.classList.add(c); });\n  }\n\n  function initProjectFilters() {\n    var filters = document.querySelectorAll('.project-filter');\n    filters.forEach(function(filter) {\n      filter.addEventListener('click', function() {\n        // Tum filtreleri inactive yap\n        filters.forEach(function(f) {\n          setFilterInactive(f);\n        });\n        // Tiklanan filtreyi active yap\n        setFilterActive(this);\n\n        var category = this.getAttribute('data-category');\n        if (category) {\n          filterProjects(category);\n        }\n      });\n    });\n  }\n\n  function initProjectCards() {\n    var cards = document.querySelectorAll('.project-card');\n    cards.forEach(function(card) {\n      card.addEventListener('click', function(e) {\n        // Kartlar artik gercek <a> — Ctrl/Cmd/orta tik tarayiciya birakilir\n        // (yeni sekmede acilsin). Duz sol tik mevcut davranisi korur.\n        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;\n\n        var projectId = this.getAttribute('data-project-id');\n        var projectSlug = this.getAttribute('data-project-slug');\n        if (!projectId || !projectSlug) return;\n\n        e.preventDefault();\n        // router'in document seviyesindeki dinleyicisi de bu tiklamayi yakalar\n        // ve isUserClick=false ile gezinirdi; o zaman kart tiklamasinda\n        // istenmeyen scroll olusur. Bu yuzden yayilim burada durur.\n        e.stopPropagation();\n\n        if (window.router) {\n          window.router.navigate(basePath + '/projeler/' + projectSlug + '/');\n        } else {\n          window.location.href = basePath + '/projeler/' + projectSlug + '/';\n        }\n      });\n    });\n  }\n\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', function() {\n      initProjectFilters();\n      initProjectCards();\n    });\n  } else {\n    initProjectFilters();\n    initProjectCards();\n  }\n})();<\/script>"])), maybeRenderHead(), renderComponent($$result, "SectionHeading", SectionHeading, { "class": "text-2xl md:text-5xl mb-3 text-slate-900 font-light tracking-tight" }, { "default": ($$result2) => renderTemplate`
Projelerimiz
` }), subtitle, categories.map((category) => renderTemplate`<button${addAttribute(`project-filter text-[10px] md:text-sm font-medium transition-colors relative pb-1 whitespace-nowrap cursor-pointer ${category === "Tümü" ? "text-slate-900 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-slate-900 active" : "text-slate-400 hover:text-slate-600"}`, "class")}${addAttribute(category, "data-category")}> ${category} </button>`), visibleProjects.map((project) => renderTemplate`<a${addAttribute(withBase("/projeler/" + project.slug), "href")} class="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-[box-shadow,border-color] duration-300 ease-out border border-slate-100 flex flex-col h-full project-card"${addAttribute(project.id, "data-project-id")}${addAttribute(project.slug, "data-project-slug")}${addAttribute(project.category, "data-category")}> <!-- Image --> <div class="relative aspect-video overflow-hidden bg-slate-100"> ${renderComponent($$result, "ResponsiveImage", $$ResponsiveImage, { "src": project.image || "/images/placeholder.svg", "alt": project.title, "sizes": "(min-width: 768px) 50vw, 100vw", "class": "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105", "legacyThumbnail": true })} </div> <!-- Content --> <div class="p-3 md:p-5 flex flex-col flex-grow"> <span class="text-[9px] md:text-[10px] font-bold tracking-[0.15em] md:tracking-[0.2em] text-slate-400 uppercase mb-1 md:mb-2 block truncate"> ${project.category} </span> <h3 class="text-base md:text-lg font-semibold mb-1 md:mb-2 text-slate-900 leading-tight group-hover:text-slate-700 transition-colors duration-300 line-clamp-1"> ${project.title} </h3> <!-- Mobilde 1 satir aciklama --> <p class="text-xs md:text-sm text-slate-500 font-light leading-relaxed mb-2 md:mb-3 line-clamp-2"> ${project.description} </p> <div class="mt-auto flex flex-col md:flex-row md:items-center md:justify-between gap-0.5 md:gap-0"> <!-- Konum - mobilde tam gorunsun --> <div class="flex items-center gap-1 text-[10px] md:text-[11px] text-slate-400 md:order-2"> <svg class="h-3 w-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span class="truncate">${project.location}</span> </div> <div class="hidden md:flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors duration-300 md:order-1"> <span>Detaylar</span> <svg class="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </div> </div> </a>`), defineScriptVars({ basePath }));
}, "/app/site/src/components/Projects.astro", void 0);
const $$Astro$2 = createAstro("https://adogan-sites.github.io/frontal-web");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  var _a2, _b, _c, _d;
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Contact;
  const { isH1 = false } = Astro2.props;
  const SectionHeading = isH1 ? "h1" : "h2";
  const subtitle = (_a2 = siteData.sections) == null ? void 0 : _a2.contactSubtitle;
  const locations = ((_b = siteData.contact) == null ? void 0 : _b.locations) || [];
  const email = ((_c = siteData.contact) == null ? void 0 : _c.email) || "";
  const showContactForm = ((_d = siteData.contact) == null ? void 0 : _d.showContactForm) !== false;
  return renderTemplate`${maybeRenderHead()}<section id="contact" aria-label="İletişim" class="py-10 md:py-24 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Section Header --> <div class="text-center mb-8 md:mb-16"> ${renderComponent($$result, "SectionHeading", SectionHeading, { "class": "text-2xl md:text-5xl mb-3 text-slate-900 font-light tracking-tight" }, { "default": ($$result2) => renderTemplate`
İletişim
` })} <div class="w-12 h-0.5 bg-slate-400 mx-auto mb-4 md:mb-6"></div> <p class="text-xs md:text-lg text-slate-500 max-w-2xl mx-auto font-light px-4"> ${subtitle} </p> </div> <!-- Lokasyonlar --> <div class="grid md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12"> ${locations.map((loc) => renderTemplate`<div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col"> <!-- Konum Başlığı --> <div class="bg-slate-900 px-6 py-4"> <h3 class="text-lg font-semibold text-white flex items-center gap-2"> <svg class="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path> </svg> ${loc.name} </h3> </div> <div class="p-6 space-y-5 flex-1"> <!-- Adres --> <div class="flex items-start gap-3" data-address-cell> <div class="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center"> <svg class="h-5 w-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <div> <div class="text-xs text-slate-400 uppercase tracking-wider mb-1">Adres</div> <div class="text-sm text-slate-700 leading-relaxed">${loc.address}</div> </div> </div> <!-- Telefon --> <div class="flex items-start gap-3"> <div class="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center"> <svg class="h-5 w-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <div> <div class="text-xs text-slate-400 uppercase tracking-wider mb-1">Telefon</div> <a${addAttribute(`tel:${loc.phone.replace(/\s/g, "")}`, "href")} class="text-sm text-slate-700 hover:text-slate-900 transition-colors">${loc.phone}</a> </div> </div> <!-- Faks --> ${loc.fax && renderTemplate`<div class="flex items-start gap-3"> <div class="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center"> <svg class="h-5 w-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path> </svg> </div> <div> <div class="text-xs text-slate-400 uppercase tracking-wider mb-1">Faks</div> <div class="text-sm text-slate-700">${loc.fax}</div> </div> </div>`} <!-- Çalışma Saatleri --> <div class="flex items-start gap-3"> <div class="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center"> <svg class="h-5 w-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <div class="text-xs text-slate-400 uppercase tracking-wider mb-1">Çalışma Saatleri</div> <div class="text-sm text-slate-700">${loc.workingHours}</div> </div> </div> <!-- Harita --> <div class="rounded-lg overflow-hidden h-48 border border-slate-200 mt-4"> ${loc.mapUrl ? renderTemplate`<iframe${addAttribute(loc.mapUrl, "src")} class="w-full h-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"${addAttribute(`${loc.name} Konum`, "title")}></iframe>` : renderTemplate`<div class="w-full h-full bg-slate-50 flex items-center justify-center"> <div class="text-center text-slate-400"> <svg class="h-10 w-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <p class="text-sm">Harita</p> </div> </div>`} </div> </div> </div>`)} </div> <!-- İletişim Formu (opsiyonel, ortalı) --> ${showContactForm && renderTemplate`<div class="max-w-3xl mx-auto"> <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-10"> <div class="text-center mb-6 md:mb-8"> <h3 class="text-xl md:text-2xl font-semibold text-slate-900 mb-2">Bize Ulaşın</h3> ${email && renderTemplate`<div class="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg"> <svg class="h-4 w-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <a${addAttribute(`mailto:${email}`, "href")} class="text-sm text-slate-700 hover:text-slate-900 transition-colors font-medium">${email}</a> </div>`} </div> <form id="contact-form" class="space-y-5"> <!-- Ad Soyad & E-posta (mobilde üst üste, desktopda yan yana) --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label for="name" class="block text-sm mb-1.5 text-slate-600 font-medium">Ad Soyad *</label> <input type="text" id="name" name="name" required class="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all text-sm" placeholder="Adınız ve soyadınız"> </div> <div> <label for="email" class="block text-sm mb-1.5 text-slate-600 font-medium">E-posta *</label> <input type="email" id="email" name="email" required class="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all text-sm" placeholder="ornek@email.com"> </div> </div> <!-- Telefon & Konu (mobilde üst üste, desktopda yan yana) --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label for="phone" class="block text-sm mb-1.5 text-slate-600 font-medium">Telefon</label> <input type="tel" id="phone" name="phone" class="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all text-sm" placeholder="+90 (5XX) XXX XX XX"> </div> <div> <label for="subject" class="block text-sm mb-1.5 text-slate-600 font-medium">Konu</label> <select id="subject" name="subject" class="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all text-sm"> <option>Genel Bilgi</option> <option>Proje Teklifi</option> <option>Teknik Destek</option> <option>İş Birliği</option> <option>Diğer</option> </select> </div> </div> <!-- Mesaj (tam genişlik) --> <div> <label for="message" class="block text-sm mb-1.5 text-slate-600 font-medium">Mesajınız *</label> <textarea id="message" name="message" required rows="5" class="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all resize-none text-sm" placeholder="Mesajınızı buraya yazın..."></textarea> </div> <!-- Gönder Butonu --> <button type="submit" class="w-full md:w-auto md:min-w-[200px] bg-slate-900 hover:bg-slate-800 text-white py-3 px-8 rounded-lg transition-colors font-medium shadow-lg text-sm">
Gönder
</button> </form> </div> </div>`} </div> </section> ${renderScript($$result, "/app/site/src/components/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/app/site/src/components/Contact.astro", void 0);
var __freeze = Object.freeze;
var __defProp2 = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp2(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://adogan-sites.github.io/frontal-web");
const $$ProjectModal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectModal;
  const { initialProject = null } = Astro2.props;
  const visibleProjects = publishedOnly(projects);
  const initialBody = initialProject ? projectModalHtml(initialProject, 0, { basePath, headingTag: "h1" }) : "";
  const projectsPayload = JSON.stringify({ projects: visibleProjects, basePath }).replace(/</g, "\\u003c");
  return renderTemplate(_a || (_a = __template(['<!-- Project Modal --><script type="application/json" id="projects-data">', "<\/script> ", '<div id="project-modal"', "", `> <div id="project-modal-overlay" class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div> <!-- Close Button - Fixed Position --> <button id="project-modal-close" class="fixed top-3 right-3 md:top-4 md:right-4 z-[60] p-2 bg-slate-900/90 backdrop-blur-md text-white rounded-full shadow-lg hover:bg-slate-800 transition-colors" aria-label="Kapat"> <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <div id="project-modal-content" class="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden z-10"> <!-- Modal Body: proje detay sayfasinda build'de dolu gelir, diger sayfalarda JS doldurur --> <div id="project-modal-body">`, '</div> </div> </div> <!-- Lightbox --> <div id="project-lightbox" class="fixed inset-0 z-[100] hidden overflow-hidden"> <div id="project-lightbox-overlay" class="absolute inset-0 bg-black/80"></div> <!-- Close Button --> <button id="project-lightbox-close" class="fixed top-3 right-3 md:top-4 md:right-4 p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-colors z-10"> <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <!-- Navigation Arrows --> <button id="project-lightbox-prev" class="fixed left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-colors z-10 hidden"> <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button id="project-lightbox-next" class="fixed right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-colors z-10 hidden"> <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> <!-- Image Container --> <div class="relative w-full h-full flex items-center justify-center p-2 md:p-6 pointer-events-none"> <div id="project-lightbox-stage" class="lightbox-stage relative flex h-full w-full items-center justify-center overflow-hidden pointer-events-auto"> <div id="project-lightbox-media" class="h-full w-full"></div> </div> </div> <!-- Counter --> <div id="project-lightbox-counter" class="fixed bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-xs md:text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm"></div> </div> ', ""])), unescapeHTML(projectsPayload), maybeRenderHead(), addAttribute(`fixed inset-0 z-50 ${initialProject ? "flex" : "hidden"} items-center justify-center p-2 md:p-4 overflow-hidden`, "class"), addAttribute(initialProject ? initialProject.slug : void 0, "data-initial-slug"), unescapeHTML(initialBody), renderScript($$result, "/app/site/src/components/ProjectModal.astro?astro&type=script&index=0&lang.ts"));
}, "/app/site/src/components/ProjectModal.astro", void 0);
const $$ScrollToTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="scroll-to-top" class="fixed bottom-6 right-6 z-40 p-4 bg-slate-800 text-white rounded-full shadow-2xl hover:bg-slate-900 transition-all transform hover:scale-110 border border-slate-700/50 backdrop-blur-sm hidden" aria-label="Başa Dön"> <svg class="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path> </svg> </button> ${renderScript($$result, "/app/site/src/components/ScrollToTop.astro?astro&type=script&index=0&lang.ts")}`;
}, "/app/site/src/components/ScrollToTop.astro", void 0);
const $$Astro = createAstro("https://adogan-sites.github.io/frontal-web");
const $$SiteComposition = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SiteComposition;
  const {
    h1Section = "hero",
    initialProject = null,
    initialService = null
  } = Astro2.props;
  const savedSectionOrder = siteData.layout && siteData.layout.sectionOrder;
  const sectionOrder = normalizeSectionOrder(savedSectionOrder);
  const sectionComponents = {
    about: $$About,
    services: $$Services,
    projects: $$Projects,
    contact: $$Contact
  };
  const orderedSections = sectionOrder.map(function(sectionId) {
    return { id: sectionId, Component: sectionComponents[sectionId] };
  });
  return renderTemplate`${maybeRenderHead()}<main class="min-h-screen"> ${renderComponent($$result, "Header", $$Header, { "sectionOrder": sectionOrder })} ${renderComponent($$result, "Hero", $$Hero, { "isH1": h1Section === "hero" })} ${orderedSections.map(({ id, Component }) => renderTemplate`${renderComponent($$result, "Component", Component, __spreadValues({ "isH1": h1Section === id }, id === "services" ? { initialService } : {}))}`)} ${renderComponent($$result, "ProjectModal", $$ProjectModal, { "initialProject": initialProject })} ${renderComponent($$result, "Footer", $$Footer, { "sectionOrder": sectionOrder })} ${renderComponent($$result, "ScrollToTop", $$ScrollToTop, {})} </main>`;
}, "/app/site/src/components/SiteComposition.astro", void 0);
export {
  $$SiteComposition as $
};
