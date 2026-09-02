function ensureTrailingSlash(pathname) {
  if (!pathname) return "/";
  return pathname.endsWith("/") ? pathname : pathname + "/";
}
function canonicalUrl(site, pathname) {
  var origin = site ? site.origin : "http://localhost:4321";
  return origin + ensureTrailingSlash(pathname);
}
function pageUrl(site, path) {
  var base = site ? site.href.replace(/\/$/, "") : "http://localhost:4321";
  var p = path || "/";
  if (!p.startsWith("/")) p = "/" + p;
  return base + ensureTrailingSlash(p);
}
function assetUrl(site, pathWithBase) {
  if (!pathWithBase) return "";
  if (pathWithBase.startsWith("http")) return pathWithBase;
  var origin = site ? site.origin : "http://localhost:4321";
  return origin + (pathWithBase.startsWith("/") ? pathWithBase : "/" + pathWithBase);
}
function isIndexable(site, siteData) {
  if (siteData && siteData.seo && siteData.seo.forceIndexable === true) return true;
  if (!site) return false;
  var hostname = site.hostname;
  if (!hostname) return false;
  if (hostname === "localhost" || hostname === "127.0.0.1" || hostname === "0.0.0.0") return false;
  if (hostname.endsWith(".github.io")) return false;
  return true;
}
function ogImageDimensions(path) {
  var match = String(path).match(/\/media\/[^/]+\/v\d+\/(\d+)\.(?:jpg|jpeg|webp|avif)$/);
  if (!match) return null;
  var width = parseInt(match[1], 10);
  if (!width) return null;
  return { width, height: Math.round(width * 9 / 16) };
}
export {
  assetUrl as a,
  canonicalUrl as c,
  isIndexable as i,
  ogImageDimensions as o,
  pageUrl as p
};
