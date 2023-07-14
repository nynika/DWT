

/* scroll reveal */
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
      origin: 'left',
      duration: 1000,
      distance: '25rem',
      delay: 300

});

sr.reveal('.animate-right', {
      origin: 'right',
      duration: 1000,
      distance: '25rem',
      delay: 600

});

sr.reveal('.animate-top', {
      origin: 'top',
      duration: 1000,
      distance: '25rem',
      delay: 600

});

sr.reveal('.animate-bottom', {
      origin: 'bottom',
      duration: 1000,
      distance: '25rem',
      delay: 600

});  
/* carousal for clients */

$(document).ready(function(){
      $('.carousel').carousel({
          indicators:true
      });
  });

  /* testimonials */
  let userTexts = document.getElementsByClassName("user-text");
  let userPics = document.getElementsByClassName("user-pic");

  function showReview(){
      for(userPic of userPics){
            userPic.classList.remove("active-pic")
      }
      for(userText of userTexts){
            userText.classList.remove("active-text")
      }
      let i = Array.from(userPics).indexOf(event.target);
      userPics[i].classList.add("active-pic");
      userTexts[i].classList.add("active-text");
  }

  /* aboutus */
  var slides = document.querySelectorAll('.slide');
  var btns = document.querySelectorAll('.bttn');
  let currentSlide = 1;

  //image slider manual navigation
   var manualNav = function(manual){
      slides.forEach((slide)=>{
            slide.classList.remove('active');

      btns.forEach((btn)=>{
            bttn.classList.remove('active'); 
      });
});
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}
btns.forEach((bttn, i) => {
    btns.addEventListener("click", ()=>{
      manualNav(i);
      currentSlide = i;
    });  
});


////////////////////suji js ///////////////////

(function ($) {
      "use strict";
      
      // Header scroll class
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              $('#header').addClass('header-scrolled');
          } else {
              $('#header').removeClass('header-scrolled');
          }
      });
      if ($(window).scrollTop() > 100) {
          $('#header').addClass('header-scrolled');
      }
      
      
      // Mobile Navigation
      if ($('#nav-menu-container').length) {
          var $mobile_nav = $('#nav-menu-container').clone().prop({
              id: 'mobile-nav'
          });
          
          $mobile_nav.find('> ul').attr({
              'class': '',
              'id': ''
          });
          
          $('body').append($mobile_nav);
          $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
          $('body').append('<div id="mobile-body-overly"></div>');
  
          $(document).on('click', '#mobile-nav-toggle', function (e) {
              $('body').toggleClass('mobile-nav-active');
              $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
              $('#mobile-body-overly').toggle();
          });
          
          $(document).on('click', '#mobile-nav ul li a', function (e) {
              $('body').toggleClass('mobile-nav-active');
              $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
              $('#mobile-body-overly').toggle();
          });
      }
  
      
      // Smooth scrolling on the navbar links
      $(".nav-menu a, #mobile-nav a").on('click', function (event) {
          if (this.hash !== "") {
              event.preventDefault();
              
              $('html, body').animate({
                  scrollTop: $(this.hash).offset().top - 70
              }, 1500, 'easeInOutExpo');
              
              if ($(this).parents('.nav-menu').length) {
                  $('.nav-menu .menu-active').removeClass('menu-active');
                  $(this).closest('li').addClass('menu-active');
              }
          }
      });
      
      // Navigation active state on scroll
      var elm = document.querySelector('.nav-menu');
      var ms = new MenuSpy(elm,{
          activeClass   : 'menu-active',
          threshold     : 71,
          enableLocationHash: false
      });
  
  
      // jQuery counterUp
      $('#counters .number').counterUp({
          delay: 10,
          time: 1000
      });
  
  
      // Porfolio isotope and filter
      var portfolioIsotope = $('.portfolio-container').isotope({
          itemSelector: '.portfolio-item',
          layoutMode: 'fitRows'
      });
      $('.portfolio-flters li').on('click', function () {
          $(".portfolio-flters li").removeClass('filter-active');
          $(this).addClass('filter-active');
  
          portfolioIsotope.isotope({filter: $(this).data('filter')});
      });
  
  
      // Testimonials carousel
      $(".testimonials-carousel").owlCarousel({
          autoplay: true,
          dots: true,
          loop: true,
          items: 1
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
          $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
          return false;
      });
      
  })(jQuery);
  
  
  
  /* scroll reveal */
  window.sr = ScrollReveal();
  
  sr.reveal('.animate-left', {
        origin: 'left',
        duration: 1000,
        distance: '25rem',
        delay: 300
  
  });
  
  sr.reveal('.animate-right', {
        origin: 'right',
        duration: 1000,
        distance: '25rem',
        delay: 600
  
  });
  
  sr.reveal('.animate-top', {
        origin: 'top',
        duration: 1000,
        distance: '25rem',
        delay: 600
  
  });
  
  sr.reveal('.animate-bottom', {
        origin: 'bottom',
        duration: 1000,
        distance: '25rem',
        delay: 600
  
  });  

  
  /* carousal for clients */
  
  $(document).ready(function(){
        $('.carousel').carousel({
            indicators:true
        });
    });
  

  
  






    // search-box open close js code
    let navbar = document.querySelector(".navbar");
    /* let searchBox = document.querySelector(".search-box .bx-search"); */
    // let searchBoxCancel = document.querySelector(".search-box .bx-x");
    
    /* searchBox.addEventListener("click", ()=>{
      navbar.classList.toggle("showInput");
      if(navbar.classList.contains("showInput")){
        searchBox.classList.replace("bx-search" ,"bx-x");
      }else {
        searchBox.classList.replace("bx-x" ,"bx-search");
      }
    }); */
    
    // sidebar open close js code
    let navLinks = document.querySelector(".nav-links");
    let menuOpenBtn = document.querySelector(".navbar .bx-menu");
    let menuCloseBtn = document.querySelector(".nav-links .bx-x");
    menuOpenBtn.onclick = function() {
    navLinks.style.left = "0";
    }
    menuCloseBtn.onclick = function() {
    navLinks.style.left = "-100%";
    }
    
    
    // sidebar submenu open close js code
    let htmlcssArrow = document.querySelector(".htmlcss-arrow");
    htmlcssArrow.onclick = function() {
     navLinks.classList.toggle("show1");
    }
    let moreArrow = document.querySelector(".more-arrow");
    moreArrow.onclick = function() {
     navLinks.classList.toggle("show2");
    }
    let jsArrow = document.querySelector(".js-arrow");
    jsArrow.onclick = function() {
     navLinks.classList.toggle("show3");
    }
    