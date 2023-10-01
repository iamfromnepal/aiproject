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

	// footer toggle
	$(".toggleBtn").click(function () {
		$(".toggleBtn")
			.not(this)
			.siblings(".toggleBlock")
			.slideUp();
		$(this).toggleClass("active");
		$(".toggleBtn").not(this).removeClass("active");
		$(this).siblings(".toggleBlock").slideToggle();
	});

	// accordion toggle
	$('.accordion').click(function (e) {
		e.stopPropagation();
		if ($(e.target).hasClass('accordionBtn') && $(e.target).hasClass('active')) {
			$(e.target).removeClass('active');
			$(e.target).siblings('.accordionBody').slideUp();
			$(e.target).parent('.accordion-item').removeClass('itemActive');
		} else if ($(e.target).hasClass('accordionBtn')) {
			$('.accordionBtn').removeClass('active');
			$(e.target).toggleClass('active');
			$('.accordionBtn').siblings('.accordionBody').slideUp();
			$(e.target).siblings('.accordionBody').slideToggle();
			$('.accordionBtn').parent('.accordion-item').removeClass('itemActive');
			$(e.target).parent('.accordion-item').toggleClass('itemActive');
		}
	});

	//tabs
	$('ul.tabs li .tab-link').click(function (e) {
		e.preventDefault();
		var $this = $(this);
		var $theTab = $(this).attr('id');
		console.log($theTab);
		if ($this.hasClass('active')) {
			// do nothing
		} else {
			$this.closest('.tab-block').find('ul.tabs li .tab-link, .tab-item .tabContent').removeClass('active');
			$('.tab-item .tabContent[data-tab="' + $theTab + '"], ul.tabs li .tab-link[id="' + $theTab + '"]').addClass('active');
		}
		// $('.default-slider').slick('refresh');
	});

	//toggleAccodrion
	$(".toggleTabBtn").click(function () {
		$(".toggleTabBtn")
			.not(this)
			.siblings(".toggleTabBlock")
			.slideUp();
		$(this).toggleClass("active");
		$(".toggleTabBtn").not(this).removeClass("active");
		$(this).siblings(".toggleTabBlock").slideToggle();
	});

	// $('.toggleTabBtn').click(function () {
	// 	$('.default-slider').slick('refresh');
	// });

	// slider-col-3
	var swiper = new Swiper(".slider-col-3", {
		slidesPerView: 1,
		spaceBetween: 20,
		// Responsive breakpoints
		breakpoints: {
			576: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 20
			}
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
});
