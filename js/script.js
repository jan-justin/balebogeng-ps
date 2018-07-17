$(document).ready(function () {
  /* Global vars */
  var SCROLL_PX_LIMIT = 65;

  /* Events */
  // Un-blend the navbar from the content header when scrolling
  $(window).scroll(function () {
    /* 
     * If the user scrolls past a scroll limit,
     * add and remove CSS classes for transition effects.
     */
    if ($(this).scrollTop() > SCROLL_PX_LIMIT) {
      $('.navbar-view-blend').addClass('navbar-view-static');
      $('.navbar-view-blend').removeClass('navbar-view-blend');
    } else {
      $('.navbar-view-static').addClass('navbar-view-blend');
      $('.navbar-view-static').removeClass('navbar-view-static');
    }
  });

  // Add smooth scrolling to all links
  $('a').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      /*
       * Using jQuery's animate() method to add smooth page scroll
       * The optional number (800) specifies the number of milliseconds it 
       * takes to scroll to the specified area
       */
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  // Initialise slick carousel for iamge gallery.
  $('.slider-nav').slick({
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    mobileFirst: true,
    responsive: [{
      breakpoint: 2200,
      settings: {
        arrows: true,
        slidesToShow: 5,
      }
    }, {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 3,
      }
    }, {
      breakpoint: 991,
      settings: {
        arrows: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

  // Initialise simple ligthbox for gallery image viewing.
  $('.slider-nav a').simpleLightbox({
    showCounter: false,
  });

  // Synchronize hover effect for footer sponsor logos
  $('.footer .sponsor a').on({
    'mouseenter': function() {
      $(this).find('.logo-placeholder').addClass('hover');
    }, 'mouseleave': function() {
      $(this).find('.logo-placeholder').removeClass('hover');
    }
  });

});
