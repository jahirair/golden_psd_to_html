
$(document).ready(function(){
	$('#menu').slicknav();
	
	// $(".slider-active").owlCarousel({
 $("#owl-demo").owlCarousel({

      //navigation : true, // Show next and prev buttons
      slideSpeed : 300,
	  pagination:false,
      paginationSpeed : 400,
      singleItem:true,
	  autoPlay: 5000 //Set AutoPlay to 3 seconds

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

	//
	
	
	
	
});
var containerEl1 = document.querySelector('[data-ref="container-1"]');
            var config = {
                controls: {
                    scope: 'local'
                }
            };
            var mixer1 = mixitup(containerEl1, config);            

