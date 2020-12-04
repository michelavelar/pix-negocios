/******************************************
    Version: 1.0
/****************************************** */

(function($) {
    "use strict";

	
	// Smooth scrolling using jQuery easing
	  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: (target.offset().top - 54)
			}, 1000, "easeInOutExpo");
			return false;
		  }
		}
	  });
	
    // Closes responsive menu when a scroll trigger link is clicked
	  $('.js-scroll-trigger').click(function() {
		$('.navbar-collapse').collapse('hide');
	  });

	// Activate scrollspy to add active class to navbar items on scroll
	  $('body').scrollspy({
		target: '#mainNav',
		offset: 100
	  });


	// TAB Filter
        var state = {
		  tabLinks: document.querySelectorAll('.topics .tab'),
		  cards: document.querySelectorAll('.filtro')
		};

		// event listener
		function updateActive(filter) {
		  
		  state.tabLinks.forEach(function(link) {
		    if (link.dataset.tab === filter) {
		      link.classList.add('active-tab');
		    } else {
		      link.classList.remove('active-tab');
		    }
		  });
		  
		  state.cards.forEach(function(filtro) {
		    // if all is selected, just clear the display property for all the cards. 
		    if (filter === 'all') {
		      filtro.style.display = null;
		      return;
		    }
		    // never reaches here if all was selected
		    
		    if (filtro.dataset.tab === filter) {
		      filtro.style.display = null;
		    } else {
		      filtro.style.display = "none";
		    }
		  });
		}

		// set up event listener
		state.tabLinks.forEach(function(link) {
		  link.addEventListener('click', function() {
		    updateActive(link.dataset.tab);
		  });
		});
    

   

})(jQuery);