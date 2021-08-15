export function stringToU8(str) {
  return new TextEncoder().encode(str);
}