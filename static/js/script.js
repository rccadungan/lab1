$(function() {
      menu = $('nav ul');

      $('#toggle-btn').on('click', function(e) {
            e.preventDefault();
            menu.slideToggle();
      });

      $(window).resize(function() {
            var w = $(this).width();
            if(w > 580 && menu.is(':hidden')) {
                  menu.removeAttr('style');
            }
      });

      $('nav li').on('click', function(e) {
            var w = $(window).width();
            if(w < 580) {
                  menu.slideToggle();
            }
      });
      $('.open-menu').height($(window).height());
});

// smooth scrolling

$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
      .click(function(event) {
            if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
      ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                  event.preventDefault();
                  $('html, body').animate({
                        scrollTop: target.offset().top
                  }, 1000, function() {
                        var $target = $(target);
                        $target.focus();
                        if($target.is(":focus")) {
                              return false;
                        } else {
                              $target.attr('tabindex', '-1');
                              $target.focus();
                        };
                  });
            }
      }
      });


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

