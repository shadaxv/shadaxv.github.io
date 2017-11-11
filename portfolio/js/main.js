let scrollPosition = window.scrollY;
const header = document.querySelector('.main-slider__heading');
const height = window.innerHeight;
const emValue = parseInt(window.getComputedStyle(document.getElementsByTagName("body")[0]).fontSize, 10);
const brakeHeight = header.offsetTop - (8 * emValue);

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


const anchors = document.querySelectorAll(".main-menu__anchor");
anchors.forEach(anchor => anchor.addEventListener('click', preventJump));

function preventJump(event) {
  event.preventDefault();
  const hash = this.getAttribute("href");

  if (history.pushState) {
    history.pushState(null, null, hash);
  } else {
    location.hash = hash;
  }

  anchors.forEach(anchor => anchor.classList.remove("main-menu__anchor--active"));

  if (this.classList.contains("main-menu__anchor")) {
    this.classList.add("main-menu__anchor--active");
  }

  if (hash == "#start") {
    document.querySelector("#startAnchor").classList.add("main-menu__anchor--active");
    console.log(document.querySelector("#startAnchor"));
  }
  this.blur();

  smoothScroll(hash, 500);
}

function smoothScroll(scrollTo, duration) {
  if (duration <= 0) {
    return;
  }

  const elementPosition = document.querySelector(scrollTo).offsetTop;
  let scrollFrom = window.scrollY;
  let difference = elementPosition - scrollFrom - 40;
  let perTick = difference / duration * 10;
  const scroll = document.documentElement;

  setTimeout(function() {
    scroll.scrollTop = scroll.scrollTop + perTick;
    smoothScroll(scrollTo, duration - 10);
  }, 10);
}
