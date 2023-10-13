// Menu Show Hidden Y
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Show Menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Hide Menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove Menu Mobile
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Accordion Skills
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }

  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

// Qualification
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

// Swiper Slide Portfolio
let swiper = new Swiper(".portfolio__container", {
  moduls: true,
  loop: true,
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    790: {
        slidesPerView: 3,
        // spaceBetweenSlides: 50
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// Active Link
const sections = document.querySelectorAll("section_part[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// Change Background Header
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// Show Scroll Up
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

// Audio Mute
var audioSound = "on";
const muteAudioBtn = document.getElementById("music-mute");
function muteAudio() {
  const muteAudio = document.getElementById("audio");
  const muteAudioIcon = document.getElementById("musicmute__icon");
  if(audioSound == "on"){
    muteAudioIcon.classList.remove("uil-music-note");
    muteAudioIcon.classList.add("uil-music-tune-slash");
    muteAudio.muted = true;
    audioSound = "off"
  } else{
    muteAudioIcon.classList.remove("uil-music-tune-slash");
    muteAudioIcon.classList.add("uil-music-note");
    muteAudio.muted = false;
    audioSound = "on"
  }
}
muteAudioBtn.addEventListener("click", muteAudio);

const preloader = document.getElementById("preloader");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const to = urlParams.get('to')
const openInvitationBtn = document.getElementById("openInvitation__btn");
const invitedPerson = document.getElementById("invited_person");
invitedPerson.innerHTML = to

function openInvitation(){
    document.getElementById("audio").play();
    preloader.classList.add("preloader__remove");
}
openInvitationBtn.addEventListener("click", openInvitation);