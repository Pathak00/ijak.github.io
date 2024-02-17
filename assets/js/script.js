'use strict';



/**
 * add event on multile elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * MOBILE NAVBAR
 * navbar will show after clicking menu button
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNav);

const navClose = () => {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElements(navLinks, "click", navClose);



/**
 * HEADER and BACK TOP BTN
 * header and back top btn will be active after scrolled down to 100px of screen
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeEl = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeEl);



/**
 * Button hover ripple effect
 */

const buttons = document.querySelectorAll("[data-btn]");

const buttonHoverRipple = function (event) {
  this.style.setProperty("--top", `${event.offsetY}px`);
  this.style.setProperty("--left", `${event.offsetX}px`);
}

addEventOnElements(buttons, "mousemove", buttonHoverRipple);



/**
 * Scroll reveal
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    const isElementInsideWindow = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1;

    if (isElementInsideWindow) {
      revealElements[i].classList.add("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);



/**
 * Custom cursor
 */

const cursor = document.querySelector("[data-cursor]");
const hoverElements = [...document.querySelectorAll("a"), ...document.querySelectorAll("button")];

const cursorMove = function (event) {
  cursor.style.top = `${event.clientY}px`;
  cursor.style.left = `${event.clientX}px`;
}

window.addEventListener("mousemove", cursorMove);

addEventOnElements(hoverElements, "mouseover", function () {
  cursor.classList.add("hovered");
});

addEventOnElements(hoverElements, "mouseout", function () {
  cursor.classList.remove("hovered");
});


// for the email section to send the message to email

let email=document.getElementById("email");
let phone_number=document.getElementById("phone_number");
let full_name=document.getElementById("full_name");
let numberof_players=document.getElementById("numberof_players");
let message=document.getElementById("message");
let Bundle=document.getElementById("Bundle");
let date_time= document.getElementById("date_time");
// let bodycontent="Name :" + full_name.value + "<br>Contact Email: " + email.value + "<br>Phone number: " + phone_number.value + "<br>Number of Players: " + numberof_players.value +"<br>Messages: " + message.value;

function emailSend(){

Email.send({
    SecureToken: "6caa8bb8-92c4-4541-bb1d-63184a7a7df7",
    To: "ijak0818@gmail.com",
    From: "ijak0818@gmail.com",
    Subject : "@IJAK - Visitor Alert",
    Body : "Name :" + full_name.value + "<br>Contact Email: " + email.value + "<br>Phone number: " + phone_number.value + "<br>Number of Players: " + numberof_players.value +"<br>Bundel Choosen:" + Bundle.value+ "<br>Date and Time choosed:" + date_time.value+ "<br>Messages: "+ message.value 

    // BodyType: "html" 
}).then(
  message => alert("BOOKING SENT. WAIT FOR THE CALL. THANK YOU.")
);}



