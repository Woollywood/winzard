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

	if (document.querySelector('.main-block__slider')) {
		new Swiper('.main-block__slider', {
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			speed: 800,
			loop: true,
			autoplay: {
				delay: 3000,
			},

			scrollbar: {
				el: '.main-block__slider-scrollbar',
			},
		});
	}

	if (document.querySelector('.footbal_cards')) {
		const allfootbalmatcheslist = new Swiper('.footbal_cards', {
			slidesPerView: 6,
			spaceBetween: 15,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				200: {
					slidesPerView: 2,
					spaceBetween: 50,
				},
				1024: {
					slidesPerView: 6,
					spaceBetween: 50,
				},
			},
		});
	}

	if (document.querySelector('.bannersSwiper')) {
		const swiper = new Swiper('.bannersSwiper', {
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			coverflowEffect: {
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true,
			},
			pagination: {
				el: '.swiper-pagination',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1024: {
					effect: 'default',
					centeredSlides: false,
					slidesPerView: 3,
					spaceBetween: 20,
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
