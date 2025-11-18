'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

function getEmail() {
  const encoded = "104,109,119,110,120,121,116,117,109,106,119,69,62,121,106,122,107,106,113,51,106,122";
  return encoded
    .split(',')
    .map(function (n) { return String.fromCharCode(parseInt(n, 10) - 5); })
    .join('');
}

function initEmailLinks() {
  var email = getEmail();
  var links = document.querySelectorAll('[data-email-link]');

  links.forEach(function (link) {
    var hasText = link.textContent && link.textContent.trim().length > 0;
    var hasIcon = !!link.querySelector('ion-icon');

    if (hasText || hasIcon) {
      // keep existing visible content (text or icon), only set tooltip if missing
      if (!link.title) {
        link.title = email;
      }
    } else {
      // truly empty link -> show email as text
      link.textContent = email;
    }

    // in all cases set mailto target
    link.href = 'mailto:' + email;
  });
}

// Run after DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  initEmailLinks();
});
