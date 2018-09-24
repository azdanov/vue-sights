/**
 * Convert a string to kebab case.
 *
 * @param {string} string - Input string to convert.
 */
export function toKebabCase(string) {
  return string
    .replace(/\s+/g, "-")
    .replace(/[\s.']+/g, "")
    .toLowerCase();
}
