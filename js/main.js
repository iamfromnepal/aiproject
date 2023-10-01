// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

//
// Place any custom JS here
//

$(document).ready(function () {

	// Nav toggle
	$('.navTogglerBtn').on('click', function () {
		let target = $(this).attr('data-target');
		$(target).toggleClass('open');

		$(this).toggleClass('open');
	});
});
