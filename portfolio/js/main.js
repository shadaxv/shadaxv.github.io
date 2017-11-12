let scrollPosition = window.scrollY;
const header = document.querySelector('.main-slider__heading');
const height = window.innerHeight;
const width = window.innerWidth;
const menuHeight = (width < 439) ? 72 : 42;
const emValue = parseInt(window.getComputedStyle(document.getElementsByTagName("body")[0]).fontSize, 10);
const brakeHeight = header.offsetTop - (8 * emValue);
const menuBrakeWidth = 930;

function mobileNoJS() {
  if (width < menuBrakeWidth) {
    document.querySelector(".main-menu__list").classList.add("none");
    document.querySelector(".main-menu__list--mobile").classList.add("flex");
  }
}
mobileNoJS();

window.addEventListener("resize", function() {
  if (window.innerWidth < menuBrakeWidth) {
    document.querySelector(".main-menu__list").classList.add("none");
    document.querySelector(".main-menu__list--mobile").classList.add("flex");
  } else {
    document.querySelector(".main-menu__list").classList.remove("none");
    document.querySelector(".main-menu__list--mobile").classList.remove("flex");
    mobileNavigation.classList.add("hidden");
  }
});

function changeActive() {
  'use strict';
  const section = document.querySelectorAll(".section-divider");
  let sections = {};
  let i = 0;

  Array.prototype.forEach.call(section, function(event) {
    sections[event.id] = event.offsetTop;
  });

  window.addEventListener("scroll", position);

  function position() {
    let scrollPosition = window.scrollY;
  }
  for (i in sections) {
    if (sections[i] <= scrollPosition + menuHeight) {
      let activeAnchors = document.querySelectorAll('.main-menu__anchor--active');
      activeAnchors.forEach(anchor => anchor.classList.remove("main-menu__anchor--active"));
      let nowActiveAnchors = document.querySelectorAll('a[href*=' + i + ']');
      // nowActiveAnchors.forEach(anchor => anchor.classList.add("main-menu__anchor--active"));
      nowActiveAnchors.forEach(function(anchor) {
        if (anchor.classList.contains("main-menu__anchor")) {
          anchor.classList.add("main-menu__anchor--active");
        }
      });
    }
  }

};


function toogleClassOnScroll(add) {
  switch (add) {
    case 0:
      navigation.classList.remove("main-menu--on-top");
      break;
    case 1:
      navigation.classList.add("main-menu--on-top");
      break;
    default:
      break;
  }
}


const mobileMenuOpenButton = document.querySelector(".main-menu__icon");
mobileMenuOpenButton.addEventListener('click', toogleClassOnClick);

const mobileMenuCloseButton = document.querySelector(".mobile-menu__icon");
mobileMenuCloseButton.addEventListener('click', toogleClassOnClick);

const mobileNavigation = document.querySelector(".mobile-menu");

function toogleClassOnClick() {
  mobileNavigation.classList.toggle("hidden");
}

const mobileAnchors = document.querySelectorAll(".mobile-menu__anchor");
mobileAnchors.forEach(anchor => anchor.addEventListener('click', toogleClassOnClick));
mobileAnchors.forEach(anchor => anchor.addEventListener('click', preventJump));

mobileNavigation.addEventListener('touchmove', function(event) {

  event.preventDefault();

}, false);


function watchScroll() {
  scrollPosition = window.scrollY;
  if (scrollPosition > brakeHeight) {
    toogleClassOnScroll(0);
  } else {
    toogleClassOnScroll(1);
  }
}

window.addEventListener("scroll", watchScroll);
window.addEventListener("scroll", changeActive);


const anchors = document.querySelectorAll(".main-menu__anchor");
anchors.forEach(anchor => anchor.addEventListener('click', preventJump));

function preventJump(event) {
  'use strict';
  event.preventDefault();
  const hash = this.getAttribute("href");

  if (history.pushState) {
    history.pushState(null, null, hash);
  } else {
    location.hash = hash;
  }

  //anchors.forEach(anchor => anchor.classList.remove("main-menu__anchor--active"));

  if (this.classList.contains("main-menu__anchor")) {
    this.classList.add("main-menu__anchor--active");
  }

  if (hash == "#start") {
    document.querySelector("#startAnchor").classList.add("main-menu__anchor--active");
  }
  this.blur();

  const difference = Math.abs(document.querySelector(hash).offsetTop - window.scrollY);
  const duration = difference / 2;

  smoothScroll(hash, duration);
}

function smoothScroll(scrollTo, duration) {
  'use strict';
  if (duration <= 0) {
    return;
  }

  const elementPosition = document.querySelector(scrollTo).offsetTop;
  let scrollFrom = window.scrollY;
  let difference = elementPosition - scrollFrom - menuHeight;
  let perTick = difference / duration * 10;
  const scroll = document.documentElement;

  setTimeout(function() {
    scroll.scrollTop = scroll.scrollTop + perTick;
    smoothScroll(scrollTo, duration - 10);
  }, 10);
}
