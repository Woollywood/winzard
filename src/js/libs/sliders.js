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

	if (document.querySelector('.section-slider__slider')) {
		let prevSlide = null;
		let nextSlide = null;
		let currentSlide = null;
		const bodyContent = document.querySelector('.body-content');

		const swiper = new Swiper('.section-slider__slider', {
			centeredSlides: false,
			spaceBetween: 16,

			pagination: {
				el: '.section-slider__pagination',
			},

			breakpoints: {
				320: {
					centeredSlides: true,
					slidesPerView: 1,
					initialSlide: 1,
				},
				767.98: {
					slidesPerView: 2,
				},
				991.98: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},
			on: {
				init: (event) => {
					setInterval(() => {
						if (bodyContent.offsetWidth > 767.98) {
							currentSlides(event.slides);
						}
					}, 1000);
				},

				slideChange: (event) => {
					if (bodyContent.offsetWidth < 767.98) {
						centeredSlide(event.activeIndex, event.slides);
					}
				},
			},
		});

		function centeredSlide(index, slides) {
			clearSliders();

			prevSlide = slides[index - 1];
			nextSlide = slides[index + 1];
			currentSlide = slides[index];

			stylingSliders();
		}

		function stylingSliders() {
			if (prevSlide) {
				prevSlide.style.transform = 'translateX(10%) translateY(10px)';
			}

			if (nextSlide) {
				nextSlide.style.transform = 'translateX(-10%) translateY(10px)';
			}

			if (currentSlide) {
				currentSlide.style.zIndex = 1;
			}
		}

		function clearSliders() {
			if (prevSlide) {
				prevSlide.style.transform = '';
			}

			if (nextSlide) {
				nextSlide.style.transform = '';
			}

			if (currentSlide) {
				currentSlide.style.zIndex = '';
			}
		}

		function currentSlides(slides) {
			slides.forEach((slide) => {
				slide.style.transform = '';
				slide.style.zIndex = '';
			});
		}
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
