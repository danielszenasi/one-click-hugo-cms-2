// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = this.txt + '<span class="wrap"></span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }

  document.getElementById("carrousel-left").addEventListener("click", () => {
    var selected = document.querySelector('input[name="slides"]:checked').value;
    var slides = document.querySelectorAll('input[name="slides"]');
    if (selected == 1) {
      const last = slides.length - 1;
      slides[last].checked = true;
    } else {
      slides[selected - 2].checked = true;
    }
  });

  document.getElementById("carrousel-right").addEventListener("click", () => {
    var selected = document.querySelector('input[name="slides"]:checked').value;
    var slides = document.querySelectorAll('input[name="slides"]');
    if (selected < slides.length) {
      slides[selected].checked = true;
    } else {
      slides[0].checked = true;
    }
  });
};
