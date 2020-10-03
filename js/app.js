/* Template Name: Landrick - Saas & Software Landing Page Template
   Author: Shreethemes
   E-mail: shreethemes@gmail.com
   Version: 2.0.0
   Created: August 2019
   File Description: Main JS file of the template
*/

/****************************/
/*         INDEX            */
/*===========================
 *     01.  Loader          *
 *     02.  Menu            *
 *     03.  Sticky Menu     *
 *     03.  Back to top     *
 ===========================*/

!(function ($) {
  'use strict'
  // Loader
  $(window).on('load', function () {
    $('#status').fadeOut()
    $('#preloader').delay(350).fadeOut('slow')
    $('body').delay(350).css({
      overflow: 'visible',
    })
  })

  // Menu
  $('.navbar-toggle').on('click', function (event) {
    $(this).toggleClass('open')
    $('#navigation').slideToggle(400)
  })

  $('.navigation-menu>li').slice(-1).addClass('last-elements')

  $('.menu-arrow,.submenu-arrow').on('click', function (e) {
    if ($(window).width() < 992) {
      e.preventDefault()
      $(this)
        .parent('li')
        .toggleClass('open')
        .find('.submenu:first')
        .toggleClass('open')
    }
  })

  $('.navigation-menu a').each(function () {
    if (this.href == window.location.href) {
      $(this).parent().addClass('active')
      $(this).parent().parent().parent().addClass('active')
      $(this).parent().parent().parent().parent().parent().addClass('active')
    }
  })

  // Clickable Menu
  $('.has-submenu a').click(function () {
    if (window.innerWidth < 992) {
      if ($(this).parent().hasClass('open')) {
        $(this).siblings('.submenu').removeClass('open')
        $(this).parent().removeClass('open')
      } else {
        $(this).siblings('.submenu').addClass('open')
        $(this).parent().addClass('open')
      }
    }
  })

  $('.mouse-down').on('click', function (event) {
    var $anchor = $(this)
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr('href')).offset().top - 0,
        },
        1500,
        'easeInOutExpo'
      )
    event.preventDefault()
  })

  // Back to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn()
    } else {
      $('.back-to-top').fadeOut()
    }
  })
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 3000)
    return false
  })

  //Cta Video
  $('.video-play-icon').magnificPopup({
    disableOn: 375,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  })
  //Owl Carousel
  $('#owl-fade').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    items: 1,
  })

  $('li.bg-slider').css({
    height: `${document.documentElement.clientHeight}px`,
  })
})(jQuery)

// For sorting team section
//let team = ["arvind", "ashutosh", "devansh", "ravi", "rohan", "rupesh", "sanjiv", "shivam", "shivangee", "swati", "vaibhav", "vivek"]

// ParticleJS
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particle', 'images/particles.json')
