// Dark mode only — apply immediately to avoid flash
document.documentElement.classList.add("dark");

export function getPreferredTheme(): "dark" {
  return "dark";
}

export function applyTheme(_theme: "dark" | "light") {
  document.documentElement.classList.add("dark");
}

export function toggleTheme(): "dark" {
  return "dark";
}
