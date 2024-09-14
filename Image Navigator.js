// ==UserScript==
// @name         Universal Image Navigator
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Navigate through images with arrow keys on various websites
// @author       Siadice (https://github.com/Siadice)
// @match        *://*/*
// @grant        none
// ==/UserScript==

// Universal Image Navigator
// (C) 2023 Siadice
// Released under the MIT License

const NAVIGATION_KEYS = ['ArrowRight', 'ArrowLeft'];

function getNavButtons() {
  const nextButton = document.querySelector('a[title*="Next"], a[href*="next"],.next-button');
  const prevButton = document.querySelector('a[title*="Previous"], a[href*="prev"],.prev-button');
  return { next: nextButton, prev: prevButton };
}

document.addEventListener('keydown', (event) => {
  const navButtons = getNavButtons();

  if (NAVIGATION_KEYS.includes(event.key)) {
    if (event.key === 'ArrowRight' && navButtons.next) {
      navButtons.next.click();
    } else if (event.key === 'ArrowLeft' && navButtons.prev) {
      navButtons.prev.click();
    }
  }
});

function isVisible(element) {
  return!!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
}

setInterval(() => {
  const navButtons = getNavButtons();
  if (!navButtons.next ||!navButtons.prev) {
    console.log('Navigation buttons not found.');
  }
}, 1000);
