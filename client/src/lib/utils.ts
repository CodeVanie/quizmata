
export function dateNow() {
    const now = new Date();
}

export default function capitalizeWords(str: string) {
  if (!str) return "";
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}