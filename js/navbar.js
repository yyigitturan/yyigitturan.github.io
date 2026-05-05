$(document).ready(function () {
    $('.third-button').on('click', function () {
  
      $('.sidenav').toggleClass('close');
      $('.animated-icon3').toggleClass('open');
    });

    $('.nav-link-m').on('click', function () {
  
        $('.sidenav').toggleClass('close');
        $('.animated-icon3').toggleClass('open');
      });
});

// Scroll behaviour
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var header = document.getElementById("header");
  if (!header) return;

  // Keep header visible while mobile menu is open.
  if (!$('.sidenav').hasClass('close')) {
    header.style.top = "0";
    return;
  }

  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos < 12) {
    header.style.top = "0";
  } else {
    header.style.top = "-" + header.offsetHeight + "px";
  }
  prevScrollpos = currentScrollPos;
}