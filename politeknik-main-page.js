

$(document).ready(function(){
	// var 
	$('.sign-up-form').addClass('test');
	$('#signInForm').addClass('test');
	$('.map-background').addClass('test');
	$('.map-location').addClass('test');

	// form singup
	$('.btn-crt-acc').on('click', function() {
		if ($('.sign-up-form').hasClass('test')) {

			$('.sign-up-form').removeClass('test');
			if ($('.sign-up-form').removeClass('test')) {

				$('#signInForm').addClass('test');
			}

		} 
		else {
			$('.sign-up-form').addClass('test');

		}

		})

	// form close button
	$('.close-xbutton').on('click', function(){
			$('.sign-up-form').addClass('test');
		})

	// button sign in
	$('#signInButton').on('click', function(){
		if ($('#signInForm').hasClass('test')) {
			// button only can display when signupform is not display
			if ($('.sign-up-form').hasClass('test')) {
			$('#signInForm').removeClass('test');

			}
		} 
		 else {
			$('#signInForm').addClass('test');
		} 
		
		})

	// map location
		// href link 
	$('.location').on('click', function(){
		if ($('.map-background').hasClass('test')) {
			if ($('.map-location').hasClass('test')) {
				$('.map-background').removeClass('test');
			}
		} 

	});
		// button for closing map background
	$('.close-xbutton-2').on('click', function(){
		$('.map-background').addClass('test');
	})

	// button to open map location
	$('.btn-map-location').on('click', function() {
		if ($('.map-location').hasClass('test')) {

			$('.map-location').removeClass('test');
			if ($('.map-location').removeClass('test')) {

				$('.map-background').addClass('test');
			}

		} 
		else {
			$('.map-location').addClass('test');

		}

		})

		// button for closing map location
	$('.close-xbutton-1').on('click', function(){
		$('.map-location').addClass('test');
	})


});
