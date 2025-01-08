//Adding the audios, the "audio" variable will be an array of audios in html
let audio = document.getElementsByTagName("audio");

//Getting the elements of the hero section
let aboutsound = document.querySelector(".aboutsound");
let projectssound = document.querySelector(".projectssound");
let contactssound = document.querySelector(".contactssound");

//Getting the elements of the Ham menu
let hamMenuHome = document.querySelector(".hamhome");
let hamMenuAbout = document.querySelector(".hamabout");
let hamMenuProjects = document.querySelector(".hamprojects");
let hamMenuContacts = document.querySelector(".hamcontacts");

//getting the images
let image1 = document.getElementById("im1");
let image2 = document.getElementById("im2");
let image3 = document.getElementById("im3");
let image4 = document.getElementById("im4")
image1.addEventListener("click", () => {
  audio[4].play();
});
image2.addEventListener("click", () => {
  audio[4].play();
});
image3.addEventListener("click", () => {
  audio[4].play();
});
image4.addEventListener("click", () => {
  audio[4].play();
});

audio[0].volume = 0.4;
audio[1].volume = 0.4;
audio[2].volume = 0.4;
audio[3].volume = 0.4;
audio[4].volume = 0.4;
//HERO SOUND HOVERS
aboutsound.addEventListener("mouseenter", () => {
  audio[0].play();
});
projectssound.addEventListener("mouseenter", () => {
  audio[0].play();
});
contactssound.addEventListener("mouseenter", () => {
  audio[0].play();
});

//HAM MENU SOUND HOVERS
hamMenuHome.addEventListener("mouseenter", () => {
  audio[0].play();
});
hamMenuAbout.addEventListener("mouseenter", () => {
  audio[0].play();
});
hamMenuProjects.addEventListener("mouseenter", () => {
  audio[0].play();
});
hamMenuContacts.addEventListener("mouseenter", () => {
  audio[0].play();
});

//ON CLICK SOUND HERO
aboutsound.addEventListener("click", () => {
  audio[1].play();
});
projectssound.addEventListener("click", () => {
  audio[1].play();
});
contactssound.addEventListener("click", () => {
  audio[1].play();
});

//ON CLICK HAM MENU
hamMenuHome.addEventListener("click", () => {
  audio[1].play();
});
hamMenuAbout.addEventListener("click", () => {
  audio[1].play();
});
hamMenuProjects.addEventListener("click", () => {
  audio[1].play();
});
hamMenuContacts.addEventListener("click", () => {
  audio[1].play();
});

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  if (hamMenu.classList.contains("active")) {
    audio[2].play();
  } else {
    audio[3].play();
  }
});
