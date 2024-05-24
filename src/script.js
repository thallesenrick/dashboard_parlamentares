
$(document).ready(function(){
  
  
    // Initializing scrollspy
    
    
    // Initializing scroll snap
    $(function() {
          $.scrollify({
                  section : ".landing-page-section",
          sectionName : "landing-page-section-scroll",
          setHeights: false,
          scrollSpeed: 600,
          touchScroll: true,
          interstitialSection: '.footer-main',
          });
      });
    
    $(".scrollify-action").on('click', function(){
      if ( $(this).data('scroll') == 'next' ) {
        $.scrollify.next();
      }
      else if ( $(this).data('scroll') == 'prev' ) {
        $.scrollify.previous();
      }
    });
    
    // Scrollspy on the floating nav
    $('body').scrollspy({ target: '.floating-scrollspy' });
    
    
    // Smooth scroll on hash
    $('.floating-scrollspy  a').on('click',  function(event){
      event.preventDefault();
  
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
    });
    
  });


  jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});