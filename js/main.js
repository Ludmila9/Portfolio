;(function($) {
    "use strict";
    
	$('.hero-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
        arrows: false,
        infinity: true,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: 'ease-out',
        speed: 1500,
        appendDots: '.hero-slider__check',
    });

	  
	//   add masonry
	  $('.blog-examp').masonry({
		itemSelector: '.blog-item',
	});


	// add isotope
	$('.blog-examp').isotope();

	var filters = [];

	$('.blog-navi').on('click', 'a', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');

		var isChecked = $(this).hasClass('active');

		var filter = $(this).attr('data-filter');

		if (isChecked) {
			addFilter(filter);
		} else {
			removeFilter(filter);
		}

		console.log(filters);
		$('.blog-examp').isotope({
			filter: filters.join(',')
		});
	});

	function addFilter( filter ) {
	  if ( filters.indexOf( filter ) == -1 ) {
	    filters.push( filter );
	  }
	}

	function removeFilter( filter ) {
	  var index = filters.indexOf( filter);
	  if ( index != -1 ) {
	    filters.splice( index, 1 );
	  }
	}

	//new slider
	$('.clients-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
        arrows: false,
        infinity: true,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: 'ease-out',
        speed: 1500,
    });

	
})(jQuery); 
    