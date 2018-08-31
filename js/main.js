(function ($) {
    "use strict";
		
	// Preloder
	$(window).on('load', function() {
		$('#status').fadeOut();
		$('#preloader').delay(100).fadeOut('fast');
		$('body').delay(100).css({'overflow':'visible'});
	});
	
	//mobile menu
	$(document).ready(function(){
		var ulNav= "#nav", openNav= "activeNav";
		
		$('.toggle-menu').on('click', function(e){
			if($(ulNav).hasClass(openNav)){
				$(ulNav).removeClass(openNav);
			}else{
				$(ulNav).addClass(openNav);
			}
			e.preventDefault();
		});
	});
	
	//quote carousel
	$(".quotes").owlCarousel({
		items:1,
		loop:true,
		dots:true,
		autoplay:true
	});

	//blog carousel
	$(".blog-slider").owlCarousel({
		items:1,
		loop:true,
		dots:false,
		autoplay:true
	});

	
	//progress bar
	$('#photoshop').LineProgressbar({
		percentage:80,
		ShowProgressCount: true,
		duration: 3000,
		height: '10px',
		fillBackgroundColor: '#FC6F5D'
	});
	$('#html').LineProgressbar({
		percentage:85,
		ShowProgressCount: true,
		duration: 3000,
		height: '10px',
		fillBackgroundColor: '#FC6F5D'
	});
	$('#css').LineProgressbar({
		percentage:70,
		ShowProgressCount: true,
		duration: 3000,
		height: '10px',
		fillBackgroundColor: '#FC6F5D'
	});
	$('#wordpress').LineProgressbar({
		percentage:90,
		ShowProgressCount: true,
		duration: 3000,
		height: '10px',
		fillBackgroundColor: '#FC6F5D'
	});
	
	//isotope portfolio
	$(window).load(function(){
		$('.all-portfolios').isotope({
			itemSelector:'.single-portfolio'
		});

		$('.portfolio-nav ul li').on('click', function(){
			$('.portfolio-nav ul li').removeClass('active-portfolio');
			$(this).addClass('active-portfolio');
			
			var selector = $(this).attr('data-filter');
			$('.all-portfolios').isotope({
				filter:selector
			});
			return false;
		});
	});
	
	//magnify popup jquery
    $('.popup-gallery').magnificPopup( {
        delegate: 'a.popup-link',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
        , image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
	
	//testimonial carousel
	$(".all-testimonials").owlCarousel({
		items:1,
		loop:true,
		dots:false,
		nav:true,
		navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		autoplay:true
	});
	
	//blogpage carousel
	$(".blogpage-slider").owlCarousel({
		items:1,
		loop:true,
		dots:true,
		nav:true,
		navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
		autoplay:false
	});
	
	//typer
	jQuery("#typer").typer({
		strings: [
			"Designer",
			"Developer"
			
		]
	});
	
	//particles
	particlesJS("particles-js", {
	  "particles": {
		"number": {
		  "value":90,
		  "density": {
			"enable": true,
			"value_area": 700
		  }
		},
		"color": {
		  "value": ["#1A2B51", "#FF9C00", "#83d238", "#33b1f8"]
		},
		"shape": {
		  "type": "circle",
		  "stroke": {
			"width": 0,
			"color": "#000000"
		  },
		  "polygon": {
			"nb_sides": 15
		  }
		},
		"opacity": {
		  "value": 0.5,
		  "random": false,
		  "anim": {
			"enable": false,
			"speed": 1.5,
			"opacity_min": 0.15,
			"sync": false
		  }
		},
		"size": {
		  "value": 2.5,
		  "random": false,
		  "anim": {
			"enable": true,
			"speed": 2,
			"size_min": 0.15,
			"sync": false
		  }
		},
		"line_linked": {
		  "enable": true,
		  "distance": 110,
		  "color": "#33b1f8",
		  "opacity": 0.25,
		  "width": 5
		},
		"move": {
		  "enable": true,
		  "speed": 1.6,
		  "direction": "none",
		  "random": false,
		  "straight": false,
		  "out_mode": "out",
		  "bounce": false,
		  "attract": {
			"enable": false,
			"rotateX": 600,
			"rotateY": 1200
		  }
		}
	  },
	  "interactivity": {
		"detect_on": "canvas",
		"events": {
		  "onhover": {
			"enable": false,
			"mode": "repulse"
		  },
		  "onclick": {
			"enable": false,
			"mode": "push"
		  },
		  "resize": true
		},
		"modes": {
		  "grab": {
			"distance": 400,
			"line_linked": {
			  "opacity": 1
			}
		  },
		  "bubble": {
			"distance": 400,
			"size": 40,
			"duration": 2,
			"opacity": 8,
			"speed": 3
		  },
		  "repulse": {
			"distance": 200,
			"duration": 0.4
		  },
		  "push": {
			"particles_nb": 4
		  },
		  "remove": {
			"particles_nb": 2
		  }
		}
	  },
	  "retina_detect": true
	});
	
	
})(jQuery);