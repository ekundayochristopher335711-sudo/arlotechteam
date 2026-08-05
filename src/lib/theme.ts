// Light mode — apply immediately to avoid flash
document.documentElement.classList.remove("dark");

export function getPreferredTheme(): "light" {
  return "light";
}

export function applyTheme(_theme: "dark" | "light") {
  document.documentElement.classList.remove("dark");
}

export function toggleTheme(): "light" {
  return "light";
}
