export function removeDiacritics(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function removeDiacriticsAndFormat(str: string) {
  const noDiacritics = removeDiacritics(str);

  // Remove spaces, and capitalize each word (after removing spaces)
  return noDiacritics
    .replace(/\s+(.)/g, (match, char) => char.toUpperCase()) // Capitalize after spaces
    .replace(/\s+/g, "") // Remove all spaces
    .replace(/^(.)/, (match, char) => char.toUpperCase());
}
