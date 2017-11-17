/*-----------------------------------------------------------------------------------*/
/*	VIDEO
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
"use strict";
    jQuery('.player').fitVids();
});
/*-----------------------------------------------------------------------------------*/
/*	FANCYBOX
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    $(".fancybox-media").fancybox({
        arrows: true,
        padding: 0,
        closeBtn: true,
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        nextEffect: 'fade',
        helpers: {
            media: {},
            overlay: {
                locked: false
            },
            buttons: false,
            thumbs: {
                width: 50,
                height: 50
            },
            title: {
                type: 'inside'
            }
        },
        beforeLoad: function () {
            var el, id = $(this.element).data('title-id');
            if (id) {
                el = $('#' + id);
                if (el.length) {
                    this.title = el.html();
                }
            }
        }
    });
});
/*-----------------------------------------------------------------------------------*/
/*	DATA REL
/*-----------------------------------------------------------------------------------*/
$('a[data-rel]').each(function () {
    $(this).attr('rel', $(this).data('rel'));
});
/*-----------------------------------------------------------------------------------*/
/*	TABS
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    $('.tabs.tabs-top').easytabs({
        animationSpeed: 300,
        updateHash: false
    });
});
/*-----------------------------------------------------------------------------------*/
/*	TOOLTIP
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    if ($("[rel=tooltip]").length) {
        $("[rel=tooltip]").tooltip();
    }
});
/*-----------------------------------------------------------------------------------*/
/*	ISOTOPE
/*-----------------------------------------------------------------------------------*/
$( function() {
  // init Isotope
  var $container = $('.fix-portfolio .isotope');
  
  $container.isotope({
    itemSelector: '.item',
    transitionDuration: '0.6s',
    masonry: { columnWidth: $container.width() / 12 },
    layoutMode: 'masonry'
  });
  
  $(window).resize(function(){
  	$container.isotope({
  		masonry: { columnWidth: $container.width() / 12 }
  	});
  });
  // bind filter button click
  $('.fix-portfolio #filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.fix-portfolio .button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  // layout Isotope again after all images have loaded
$container.imagesLoaded( function() {
  $container.isotope('layout');
});
});


$( function() {
  // init Isotope
  var $container = $('.full-portfolio .isotope').isotope({
    itemSelector: '.item',
    transitionDuration: '0.6s',
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });
  // bind filter button click
  $('.full-portfolio #filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.full-portfolio .button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
    // layout Isotope again after all images have loaded
$container.imagesLoaded( function() {
  $container.isotope('layout');
});
});

$( function() {
  // init Isotope
  var $container = $('.classic-masonry .isotope');
  
  $container.isotope({
    itemSelector: '.item',
    transitionDuration: '0.6s',
    masonry: { columnWidth: $container.width() / 12 },
    layoutMode: 'masonry'
  });
  
  $(window).resize(function(){
  	$container.isotope({
  		masonry: { columnWidth: $container.width() / 12 }
  	});
  });
  // bind filter button click
  $('.classic-masonry #filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.classic-masonry .button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  // layout Isotope again after all images have loaded
$container.imagesLoaded( function() {
  $container.isotope('layout');
});
});
/*-----------------------------------------------------------------------------------*/
/*	FLICKR
/*-----------------------------------------------------------------------------------*/
$(document).ready(function($) {
    $('.flickr-feed').dcFlickr({
        limit: 15,
        q: {
            id: '51789731@N07',
            lang: 'en-us',
            format: 'json',
            jsoncallback: '?'
        },
        onLoad: function() {
            $('.owl-flickr').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    navText: ['<i class="icon-left-open-1"></i>','<i class="icon-right-open-1"></i>'],
    dots: false,
    items:7,
    responsive:{
        0:{
            items:3
        },
        700:{
            items:5
        },
        1000:{
            items:7
        }
    }
})
        }
    });
});
/*-----------------------------------------------------------------------------------*/
/*	IMAGE ICON HOVER
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    $('.icon-overlay a').prepend('<span class="icn-more"></span>');
});
/*-----------------------------------------------------------------------------------*/
/*	OWL CAROUSEL
/*-----------------------------------------------------------------------------------*/ 
$(document).ready(function() {
$('.testimonials').owlCarousel({
                items: 1,
                nav:true,
                navText: ['<i class="icon-left-open-1"></i>','<i class="icon-right-open-1"></i>'],
                dots: false,
                autoHeight: true,
                loop: true,
                margin: 0,
              });
              

$('.owl-gallery').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    navText: ['<i class="icon-left-open-1"></i>','<i class="icon-right-open-1"></i>'],
    dots: false,
    items:4,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
})

$('.owl-blog').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
    navText: ['<i class="icon-left-open-1"></i>','<i class="icon-right-open-1"></i>'],
    dots: false,
    items:3,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

$('.image-slider').owlCarousel({
                items: 1,
                nav:true,
                navText: ['<i class="icon-left-open-1"></i>','<i class="icon-right-open-1"></i>'],
                dots: true,
                autoHeight: false,
                loop: true,
                margin: 0,
                navContainerClass: 'owl-slider-nav',
				navClass: [ 'owl-slider-prev', 'owl-slider-next' ],
				controlsClass: 'owl-slider-controls'
              });

});
/*-----------------------------------------------------------------------------------*/
/*	DIVAS SLIDER
/*-----------------------------------------------------------------------------------*/
$(document).ready(function()
			{
				$(".divas-wrapper").divas({
					slideTransitionClass: "divas-slide-transition-left",
					titleTransitionClass: "divas-title-transition-left",
					titleTransitionParameter: "left",
					titleTransitionStartValue: "-999px",
					titleTransitionStopValue: "0px",
					startFrom: "left",
					wingsOverlayColor: "rgba(20, 20, 20, 0.75)"
				});
			});
/*-----------------------------------------------------------------------------------*/
/*	STICKY HEADER
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {

    var menu = $('.navbar'),
        pos = menu.offset();

    $(window).scroll(function () {
        if ($(this).scrollTop() > pos.top + menu.height() && menu.hasClass('default') && $(this).scrollTop() > 300) {
            menu.fadeOut('fast', function () {
                $(this).removeClass('default').addClass('fixed').fadeIn('fast');
            });
        } else if ($(this).scrollTop() <= pos.top + 300 && menu.hasClass('fixed')) {
            menu.fadeOut(0, function () {
                $(this).removeClass('fixed').addClass('default').fadeIn(0);
            });
        }
    });

});
/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();


    $('.dropdown-menu a, .social .dropdown-menu, .social .dropdown-menu input').click(function (e) {
        e.stopPropagation();
    });

});
$('.btn.responsive-menu').on('click', function() {
    $(this).toggleClass('opn');
});
/*-----------------------------------------------------------------------------------*/
/*	RETINA
/*-----------------------------------------------------------------------------------*/
$(function() {
			$('.retina').retinise();
		});
/*-----------------------------------------------------------------------------------*/
/*	FORM
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function ($) {
    $('.forms').dcSlickForms();
});
$(document).ready(function () {
    $('.comment-form input[title], .comment-form textarea, .forms textarea').each(function () {
        if ($(this).val() === '') {
            $(this).val($(this).attr('title'));
        }

        $(this).focus(function () {
            if ($(this).val() == $(this).attr('title')) {
                $(this).val('').addClass('focused');
            }
        });
        $(this).blur(function () {
            if ($(this).val() === '') {
                $(this).val($(this).attr('title')).removeClass('focused');
            }
        });
    });
});
/*-----------------------------------------------------------------------------------*/
/*	PRETTIFY
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
    window.prettyPrint && prettyPrint()
});
/*-----------------------------------------------------------------------------------*/
/*	REVOLUTION SLIDER
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	
					jQuery('.tp-banner').show().revolution(
					{
						delay:9000,
		startwidth:1170,
		startheight:550,
		hideThumbs:10	
					});
					
					
					
									
				});	


/*-----------------------------------------------------------------------------------*/
/*	PARALLAX MOBILE
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i)) {
        $('.parallax').addClass('mobile');
    }
});

/*-----------------------------------------------------------------------------------*/
/*	INSTAGRAM
/*-----------------------------------------------------------------------------------*/
var instagramFeed = new Instafeed({
        get: 'user',
        userId: 1215763826,
        accessToken: '1215763826.467ede5.aa54392aa9eb46f0b9e7191f7211ec3a',
        resolution: 'low_resolution',
        template: '<div class="item"><figure class="icon-overlay"><a href="{{link}}" target="_blank"><span class="icn-more"></span><img src="{{image}}" /></a></figure></div>',
        after: function () {    
		    $('#instafeed').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    navText: ['<i class="icon-left-open-1"></i>','<i class="icon-right-open-1"></i>'],
    dots: false,
    items:5,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:4
        },
        1000:{
            items:5
        }
    }
})
		  }
    });
    
    $('#instafeed').each(function() {
    instagramFeed.run();
});

/*-----------------------------------------------------------------------------------*/
/*	SWIPER
/*-----------------------------------------------------------------------------------*/
  $('.swiper-container.gallery').each(function(){
  $(this).swiper({
     grabCursor: true,
    slidesPerView: 'auto',
    wrapperClass: 'swiper',
    slideClass: 'item',
    offsetPxBefore: 0,
     offsetPxAfter: 0
  });

  var $swipers = $(this);

  $swipers.siblings('.arrow-left').click(function(){
$swipers.data('swiper').swipeTo($swipers.data('swiper').activeIndex-1);
return false;
});
$swipers.siblings('.arrow-right').click(function(){
$swipers.data('swiper').swipeTo($swipers.data('swiper').activeIndex+1);
return false;
});
});
/*-----------------------------------------------------------------------------------*/
/*	ANIMSITION
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {

if(!window.chrome && typeof document.webkitIsFullScreen != "undefined" || typeof document.ontouchstart != "undefined"){
    var $animsitionElm = $(".body-wrapper");
    $animsitionElm.removeClass("animsition");
  }

  var link = 'a:not([target="_blank"]):not([href*=#]):not([href^=mailto]):not(.fancybox-media):not(.btn.responsive-menu)'

  $(".animsition").animsition({
    inClass               :   'fade-in',
    outClass              :   'fade-out',
    inDuration            :    1500,
    outDuration           :    800,
    linkElement           :   link, 
    touchSupport          :   false
  });
  
});