var TR_MAP = {
  "İ": "i",
  "I": "i",
  "ı": "i",
  "Ğ": "g",
  "ğ": "g",
  "Ü": "u",
  "ü": "u",
  "Ş": "s",
  "ş": "s",
  "Ö": "o",
  "ö": "o",
  "Ç": "c",
  "ç": "c"
};
function slugify(value) {
  if (!value) return "";
  var mapped = String(value).replace(/[İIıĞğÜüŞşÖöÇç]/g, function(char) {
    return TR_MAP[char];
  });
  return mapped.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function withSlugs(items) {
  var seen = {};
  return (items || []).map(function(item) {
    var base = slugify(item.title) || "kayit";
    var slug = base;
    if (seen[base]) {
      seen[base] += 1;
      slug = base + "-" + seen[base];
    } else {
      seen[base] = 1;
    }
    return Object.assign({}, item, { slug });
  });
}
export {
  withSlugs as w
};
