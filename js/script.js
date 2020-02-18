

/*****************countdown********************/
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.now();
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
        daysSpan.innerHTML = ('0');
        hoursSpan.innerHTML = ('0' ).slice(-2);
        minutesSpan.innerHTML = ('0').slice(-2);
        secondsSpan.innerHTML = ('0').slice(-2);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  // count down timer:
  var deadline = 'February 10 2020 08:00:00 GMT+0530';
  
  initializeClock('clockdiv', deadline);
  
/******************* ***********************/



(function($) {
  'use strict';

  // Main function
  $.contactButtons = function(options) {

    // Define the defaults
    var defaults = {
      effect: '', // slide-on-scroll
      buttons: {
        'facebook': {
          class: 'facebook',
          use: false,
          icon: 'facebook',
          link: '',
          title: 'Follow on Facebook'
        },
        'website': {
          class: 'website',
          use: false,
          icon: 'globe',
          link: '',
          title: 'Visit on website'
        },
        'twitter': {
          class: 'twitter',
          use: false,
          icon: 'twitter',
          link: '',
          title: 'Follow on Twitter'
        },
        'pinterest': {
          class: 'pinterest',
          use: false,
          icon: 'pinterest',
          link: '',
          title: 'Follow on Pinterest'
        },
        'map-marker': {
          class: 'map-marker',
          use: false,
          icon: 'map-marker',
          link: '',
          title: 'Get Location'
        },
        'phone': {
          class: 'phone',
          use: false,
          icon: 'phone',
          link: '',
          title: 'Call us',
          type: 'phone'
        },
        'email': {
          class: 'email',
          use: false,
          icon: 'envelope',
          link: '',
          title: 'Send us an email',
          type: 'email'
        }
      }
    };

    // Merge defaults and options
    var s,
      settings = options;
    for (s in defaults.buttons) {
      if (options.buttons[s]) {
        settings.buttons[s] = $.extend(defaults.buttons[s], options.buttons[s]);
      }
    }

    // Define the container for the buttons
    var oContainer = $("#contact-buttons-bar");

    // Check if the container is already on the page
    if (oContainer.length === 0) {

      // Insert the container element
      $('body').append('<div id="contact-buttons-bar">');

      // Get the just inserted element
      oContainer = $("#contact-buttons-bar");

      // Add class for effect
      oContainer.addClass(settings.effect);

      // Add show/hide button
      var sShowHideBtn = '<button class="contact-button-link show-hide-contact-bar"><span class="fa fa-angle-left"></span></button>';
      oContainer.append(sShowHideBtn);

      var i;
      for (i in settings.buttons) {
        var bs = settings.buttons[i],
          sLink = bs.link,
          active = bs.use;

        // Check if element is active
        if (active) {

          // Change the link for phone and email when needed
          if (bs.type === 'phone') {
            sLink = 'tel:' + bs.link;
          } else if (bs.type === 'email') {
            sLink = 'mailto:' + bs.link;
          }

          // Insert the links
          var sIcon = '<span class="fa fa-' + bs.icon + '"></span>',
            sButton = '<a href="' + sLink +
            '" class="contact-button-link cb-ancor ' + bs.class + '" ' +
            (bs.title ? 'title="' + bs.title + '"' : '') +
            (bs.extras ? bs.extras : '') +
            '>' + sIcon + '</a>';
          oContainer.append(sButton);
        }
      }

      // Make the buttons visible
      setTimeout(function() {
        oContainer.animate({
          left: 0
        });
      }, 200);

      // Show/hide buttons
      $('body').on('click', '.show-hide-contact-bar', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $('.show-hide-contact-bar').find('.fa').toggleClass('fa-angle-right fa-angle-left');
        oContainer.find('.cb-ancor').toggleClass('cb-hidden');
      });
    }
  };

  // Slide on scroll effect
  $(function() {

    // Define element to slide
    var el = $("#contact-buttons-bar.slide-on-scroll");

    // Load top default
    el.attr('data-top', el.css('top'));

    // Listen to scroll
    $(window).scroll(function() {
      clearTimeout($.data(this, "scrollCheck"));
      $.data(this, "scrollCheck", setTimeout(function() {
        var nTop = $(window).scrollTop() + parseInt(el.attr('data-top'));
        el.animate({
          top: nTop
        }, 500);
      }, 250));
    });
  });

}(jQuery));

$.contactButtons({
  effect: 'slide-on-scroll',
  buttons: {
    'facebook': {
      class: 'facebook',
      use: true,
      link: 'https://www.facebook.com/aissmscoepune/',
      extras: 'target="_blank"'
    },
    'website': {
      class: 'website',
      use: true,
      link: 'https://www.aissmscoe.com',
      extras: 'target="_blank"'
    },
    'mybutton': {
      class: 'instagram',
      use: true,
      link: 'https://www.instagram.com/ashwamedh2020/',
      icon: 'instagram',
      title: 'Follow on instagram',
      extras: 'target="_blank"'
    },
    'phone': {
      class: 'phone separated',
      use: true,
      link: '+918007593089'
    },
    'email': {
      class: 'email',
      use: true,
      link: 'ashwamedh@aissmscoe.com'
    },
    'mybutton2': {
      class: 'map-marker',
      use: true,
      link: 'https://www.google.com/maps/place/AISSMS+College+of+Engineering/@18.5311455,73.8652172,15z/data=!4m5!3m4!1s0x0:0x4dbf1000c873a42d!8m2!3d18.5311455!4d73.8652172',
      icon: 'map-marker',
      title: 'Get Location',
      extras: 'target="_blank"'
    }
  }
});


/******************* ***********************/
   