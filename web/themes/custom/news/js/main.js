const main = ($) => {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 90) {
        $('.header').addClass('header-sticky');
      } else {
        $('.header').removeClass('header-sticky');
      }
    });
  
    // Dropdown on mouse hover
    $(document).ready(function () {
      function toggleNavbarMethod() {
        if ($(window).width() > 768) {
          $('.navbar .dropdown').on('mouseover', function () {
            $('.dropdown-toggle', this).trigger('click');
          }).on('mouseout', function () {
            $('.dropdown-toggle', this).trigger('click').blur();
          });
        } else {
          $('.navbar .dropdown').off('mouseover').off('mouseout');
        }
      }
      toggleNavbarMethod();
      $(window).resize(toggleNavbarMethod);
    });
  
    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false;
    });
  
    $(document).ready(function () {
      // Category News Slider
      $('.cn-slider').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,            // Enable autoplay
        autoplaySpeed: 2000,       // Set autoplay speed to 3 seconds (3000 milliseconds)
      });
    });
  }
  
  main(jQuery);
  