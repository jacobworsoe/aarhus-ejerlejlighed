$( document ).ready(function() {

// Function to slowly scroll down the page when anchor links is clicked
$(function() {
      $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 50
            }, 500);
			ga('send', 'event', 'Navigation click', target.selector);			
            return false;
          }
        }
      });
    });
    

    // Activate click/scroll-zoom on Google Maps
	$('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
});


// Define Global Variable for Waypoint
var currentWaypoint;

// Waypoint
var waypoints = $('h2').waypoint({
  handler: function(direction) {
	ga('send', 'event', 'Scroll to element', this.element.id);
	currentWaypoint = this.element.id;
	//console.log(this.element.id);
  },
  offset: '50%'
})

// Waypoint
var waypoints = $('#bottom-in-view').waypoint({
  handler: function(direction) {
	ga('send', 'event', 'Scroll to element', 'Bottom of page');
	currentWaypoint = this.element.id;
	//console.log(this.element.id);
  },
  offset: 'bottom-in-view'
})

// Swipebox
$( '.swipebox' ).swipebox({
			afterOpen: function() { console.log("Swipebox open"); },
			loopAtEnd: true
		});

// Event Tracking on telephone clicks		
$('a[href*=tel]').click(function() {
	ga('send', 'event', 'Click on phone number', currentWaypoint);
	//console.log(currentWaypoint);
})
	
	
}); // Close document ready