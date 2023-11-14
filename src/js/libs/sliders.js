function initSliders() {
	if (document.querySelector('.games-slider')) {
		new Swiper('.games-slider', {
			observer: true,
			observeParents: true,
			spaceBetween: 16,
			speed: 800,

			navigation: {
				prevEl: '.game-launcher__slider-wrapper--games-slider .slider-arrows__arrow-prev',
				nextEl: '.game-launcher__slider-wrapper--games-slider .slider-arrows__arrow-next',
			},

			breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 5,
				},
				1268: {
					slidesPerView: 6,
				},
			},
		});
	}

	if (document.querySelector('.providers-slider')) {
		new Swiper('.providers-slider', {
			observer: true,
			observeParents: true,
			spaceBetween: 16,
			speed: 800,

			navigation: {
				prevEl: '.game-launcher__slider-wrapper--providers-slider .slider-arrows__arrow-prev',
				nextEl: '.game-launcher__slider-wrapper--providers-slider .slider-arrows__arrow-next',
			},

			breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 5,
				},
				1268: {
					slidesPerView: 6,
				},
			},
		});
	}

	const gameSlider = document.querySelectorAll('[data-game-slider]');
	gameSlider.forEach((slider) => {
		new Swiper(slider, {
			observer: true,
			observeParents: true,
			spaceBetween: 16,
			speed: 800,

			navigation: {
				prevEl: slider.closest('[data-game-slider-root]').querySelector('.slider-arrows__arrow-prev'),
				nextEl: slider.closest('[data-game-slider-root]').querySelector('.slider-arrows__arrow-next'),
			},

			breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 5,
				},
				1268: {
					slidesPerView: 6,
				},
			},
		});
	});
}

window.addEventListener('load', function (e) {
	initSliders();
});
