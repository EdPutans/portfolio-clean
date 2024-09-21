'use strict';

const DARK_MODE_CLASSNAME = 'dark-mode';
const DARK_MODE_TOGGLE = 'darkmode-toggle';

const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;


const toggle = () => {
  const body = document.querySelector("body");
  const toggleButton = document.getElementById(DARK_MODE_TOGGLE);


  if (!toggleButton) return;

  if (!body) return;

  const isLightMode = body.classList.contains(DARK_MODE_CLASSNAME);

  const chevron = document.querySelector('.Chevron');

  if (isLightMode) {
    // LIGHT MODE
    body.classList.remove(DARK_MODE_CLASSNAME);
    toggleButton.innerText = "🌙";
    chevron?.style.setProperty('filter', 'invert(0)')

    Array.from(document.querySelectorAll('p')).forEach(el => el.style.setProperty('color', 'unset'));

    Array.from(document.querySelectorAll('.Navbar_link')).forEach(el => el.style.setProperty('color', 'unset'))
    document.querySelector('.Made_by_ed_text').style.setProperty('color', '#7241c8');
    document.querySelector('.Navbar').style.setProperty('background-color', 'white');
    Array.from(document.querySelectorAll('.Title')).forEach(el => el.style.setProperty('color', 'white'));
    Array.from(document.querySelectorAll('.Contact_link')).forEach(el => el.style.setProperty('color', '#555555'))
  } else {
    // DARK MODE
    body.classList.add(DARK_MODE_CLASSNAME);
    toggleButton.innerText = "💡";
    chevron?.style.setProperty('filter', 'invert(0.8)')
    Array.from(document.querySelectorAll('p')).forEach(el => el.style.setProperty('color', '#d1d1d1'));
    Array.from(document.querySelectorAll('.Navbar_link')).forEach(el => el.style.setProperty('color', 'white'))
    document.querySelector('.Made_by_ed_text').style.setProperty('color', 'white');
    document.querySelector('.Navbar').style.setProperty('background-color', '#7241c8');
    Array.from(document.querySelectorAll('.Title')).forEach(el => el.style.setProperty('color', 'white'));
    Array.from(document.querySelectorAll('.Contact_link')).forEach(el => el.style.setProperty('color', '#cccccc'))

  }
}

if (prefersDarkMode) { toggle(); } else {
  toggle();
  toggle();
}

const toggleButton = document.getElementById(DARK_MODE_TOGGLE);
if (toggleButton) {
  toggleButton.innerHTML = document.body.classList.contains(DARK_MODE_CLASSNAME) ? "💡" : "🌙"
}


