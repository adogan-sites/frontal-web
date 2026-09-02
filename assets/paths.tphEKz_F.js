var basePath = "/frontal-web".replace(/\/$/, "");
function isFilePath(path) {
  var lastSegment = path.split("/").pop();
  return lastSegment.indexOf(".") !== -1;
}
function withBase(path) {
  if (!path) return basePath + "/";
  if (path.startsWith("http") || path.startsWith("//")) return path;
  var normalized = path.startsWith("/") ? path : "/" + path;
  if (!isFilePath(normalized) && !normalized.endsWith("/")) {
    normalized += "/";
  }
  return basePath + normalized;
}
export {
  basePath as b,
  withBase as w
};
