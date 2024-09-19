'use strict';

const LIGHT_MODE_CLASSNAME = 'light-mode';
const DARK_MODE_TOGGLE = 'darkmode-toggle';

const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

const toggle = () => {
  const body = document.querySelector("body");
  const toggleButton = document.getElementById(DARK_MODE_TOGGLE);

  if (!toggleButton) return;

  if (!body) return;

  const isLightMode = body.classList.contains(LIGHT_MODE_CLASSNAME);

  if (isLightMode) {
    body.classList.remove(LIGHT_MODE_CLASSNAME);
    toggleButton.innerText = "💡";
  } else {
    body.classList.add(LIGHT_MODE_CLASSNAME);
    toggleButton.innerText = "🌙";
  }
}

if (prefersDarkMode) {
  toggle();
}

const toggleButton = document.getElementById(DARK_MODE_TOGGLE);
if (toggleButton) {
  toggleButton.innerHTML = document.body.classList.contains(LIGHT_MODE_CLASSNAME) ? " 🌙" : "💡"
}


