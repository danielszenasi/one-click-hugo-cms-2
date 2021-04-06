// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

window.openCity = (evt, cityName) => {
  var i;
  var x = document.getElementsByClassName("tab-item");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";

  const tablinks = document.getElementsByClassName("w3-bar-item");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
  }

  evt.currentTarget.className += " w3-dark-grey";
};

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

function nextSlide() {
  var selected = document.querySelector('input[name="coaches-slides"]:checked')
    .value;
  var slides = document.querySelectorAll('input[name="coaches-slides"]');
  if (selected < slides.length) {
    slides[selected].checked = true;
  } else {
    slides[0].checked = true;
  }
}

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }

  document
    .getElementById("coaches-carrousel-left")
    ?.addEventListener("click", () => {
      var selected = document.querySelector(
        'input[name="coaches-slides"]:checked'
      ).value;
      var slides = document.querySelectorAll('input[name="coaches-slides"]');
      if (selected == 1) {
        const last = slides.length - 1;
        slides[last].checked = true;
      } else {
        slides[selected - 2].checked = true;
      }
    });

  document
    .getElementById("coaches-carrousel-right")
    ?.addEventListener("click", nextSlide);

  document
    .getElementById("competitors-carrousel-left")
    ?.addEventListener("click", () => {
      var selected = document.querySelector(
        'input[name="competitors-slides"]:checked'
      ).value;
      var slides = document.querySelectorAll(
        'input[name="competitors-slides"]'
      );
      if (selected == 1) {
        const last = slides.length - 1;
        slides[last].checked = true;
      } else {
        slides[selected - 2].checked = true;
      }
    });

  document
    .getElementById("competitors-carrousel-right")
    ?.addEventListener("click", () => {
      var selected = document.querySelector(
        'input[name="competitors-slides"]:checked'
      ).value;
      var slides = document.querySelectorAll(
        'input[name="competitors-slides"]'
      );
      if (selected < slides.length) {
        slides[selected].checked = true;
      } else {
        slides[0].checked = true;
      }
    });

  // setInterval(nextSlide, 5000);
};

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].forEach((id) => {
  // Get the modal
  var modal = document.getElementById(`${id}-modal`);

  // Get the button that opens the modal
  var btn = document.getElementById(`${id}-btn`);

  // Get the <span> element that closes the modal
  var span = document.getElementById(`${id}-close`);

  if (btn) {
    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block";
    };
  }

  if (span) {
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };
  }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  var modals = document.getElementsByClassName("modal");
  var i;
  for (i = 0; i < modals.length; i++) {
    if (modals[i] == event.target) {
      modals[i].style.display = "none";
    }
  }
};
