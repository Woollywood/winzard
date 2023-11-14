// Подключение функционала "Чертоги Фрилансера"
import { isMobile, FLS } from '../custom/functions.js';
// Подключение списка активных модулей
import { flsModules } from '../custom/modules.js';

// Подключение из node_modules
import tippy from 'tippy.js';

// Подключение стилей из src/scss/libs
import '../../scss/libs/tippy.scss';
// Подключение стилей из node_modules
//import 'tippy.js/dist/tippy.css';
// Запускаем и добавляем в объект модулей
flsModules.tippy = tippy('[data-tippy-content]', {
	allowHTML: true,
	interactive: true,
	arrow: false,
	appendTo: (parent) => parent.closest('.support'),
	trigger: 'click',
	content: `
		<div class="support-window">
			<div class="support-window__title">WINZARD</div>
			<button class="support-window__close" tippy-close>
				<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
					<path
						d="M0.27955 0.27955C0.458599 0.100554 0.701411 0 0.954587 0C1.20776 0 1.45057 0.100554 1.62962 0.27955L5.00576 3.65569L8.3819 0.27955C8.56198 0.105627 8.80316 0.00938937 9.05351 0.0115648C9.30385 0.0137402 9.54332 0.114155 9.72035 0.291181C9.89737 0.468206 9.99779 0.70768 9.99996 0.958023C10.0021 1.20837 9.9059 1.44955 9.73198 1.62962L6.35584 5.00576L9.73198 8.3819C9.9059 8.56198 10.0021 8.80316 9.99996 9.05351C9.99779 9.30385 9.89737 9.54332 9.72035 9.72035C9.54332 9.89737 9.30385 9.99779 9.05351 9.99996C8.80316 10.0021 8.56198 9.9059 8.3819 9.73198L5.00576 6.35584L1.62962 9.73198C1.44955 9.9059 1.20837 10.0021 0.958023 9.99996C0.70768 9.99779 0.468206 9.89737 0.291181 9.72035C0.114155 9.54332 0.0137402 9.30385 0.0115648 9.05351C0.00938937 8.80316 0.105627 8.56198 0.27955 8.3819L3.65569 5.00576L0.27955 1.62962C0.100554 1.45057 0 1.20776 0 0.954587C0 0.701411 0.100554 0.458599 0.27955 0.27955Z"
						fill="#576081" />
				</svg>
			</button>
			<div class="support-window__top-image-ibg">
				<img src="img/support/background.jpg" alt="background" />
			</div>
			<div class="support-window__container">
				<div class="support-window__inner">
					<a class="support-window__send-message support-send" href="#">
						<div class="support-send__left">
							<div class="support-send__title">Send us a Message</div>
							<div class="support-send__sub-title">We typically reply in a few minutes</div>
						</div>
						<div class="support-send__button">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none">
								<path
									d="M0.680903 6.39717L18.6408 0.0583215C18.8223 -0.00584135 19.0182 -0.0173302 19.2059 0.0251832C19.3935 0.0676967 19.5654 0.162476 19.7014 0.298558C19.8375 0.434641 19.9323 0.606466 19.9748 0.79416C20.0173 0.981855 20.0058 1.17775 19.9417 1.35919L13.6029 19.3194C13.538 19.5036 13.4216 19.6652 13.2674 19.7852C13.1133 19.9051 12.9279 19.9782 12.7334 19.9958C12.5389 20.0135 12.3435 19.9748 12.1703 19.8845C11.9971 19.7943 11.8535 19.6561 11.7566 19.4866L8.51599 13.8149C8.47626 13.7454 8.45786 13.6657 8.46309 13.5859C8.46832 13.506 8.49694 13.4294 8.5454 13.3657L13.6329 6.67856C13.654 6.65045 13.6675 6.61736 13.672 6.58251C13.6766 6.54765 13.672 6.51221 13.6588 6.47963L13.6335 6.4335C13.6058 6.39676 13.5666 6.37044 13.5221 6.35882C13.4776 6.3472 13.4305 6.35096 13.3884 6.36949L13.3481 6.39256L6.66678 11.4744C6.60306 11.5226 6.52656 11.5511 6.4468 11.5562C6.36704 11.5613 6.28754 11.5429 6.21817 11.5032L0.514261 8.2441C0.344528 8.14728 0.206202 8.00371 0.115758 7.83049C0.0253145 7.65727 -0.0134352 7.46171 0.00412461 7.26709C0.0216844 7.07247 0.0948135 6.887 0.214802 6.73277C0.33479 6.57854 0.496581 6.46205 0.680903 6.39717Z"
									fill="url(#paint0_radial_511_209)" />
								<defs>
									<radialGradient
										id="paint0_radial_511_209"
										cx="0"
										cy="0"
										r="1"
										gradientUnits="userSpaceOnUse"
										gradientTransform="translate(5.77586 22.5) rotate(-67.0205) scale(27.3812 40.9959)">
										<stop stop-color="#9186FF" />
										<stop offset="0.338694" stop-color="#6D61FF" />
										<stop offset="0.916248" stop-color="#574AFF" />
									</radialGradient>
								</defs>
							</svg>
						</div>
					</a>
				</div>
				<div class="support-window__inner support-window__inner--padding">
					<div class="support-main">
						<div class="support-main__search-wrapper input-wrapper">
							<input class="input" type="text" placeholder="Search for help" />
							<button>
								<svg>
									<use xlink:href="img/icons/icons.svg#search"></use>
								</svg>
							</button>
						</div>
						<div class="support-main__fields">
							<a class="support-main__field" href="#">
								<span>Two-Factor Authentication</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="6"
									height="10"
									viewBox="0 0 6 10"
									fill="none">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M0.21967 0.209209C0.512563 -0.0697365 0.987437 -0.0697365 1.28033 0.209209L5.78033 4.49492C6.07322 4.77387 6.07322 5.22613 5.78033 5.50508L1.28033 9.79079C0.987437 10.0697 0.512563 10.0697 0.21967 9.79079C-0.0732233 9.51184 -0.0732233 9.05958 0.21967 8.78064L4.18934 5L0.21967 1.21936C-0.0732233 0.940416 -0.0732233 0.488155 0.21967 0.209209Z"
										fill="#7881A1" />
								</svg>
							</a>
							<a class="support-main__field" href="#">
								<span>Account & Profile</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="6"
									height="10"
									viewBox="0 0 6 10"
									fill="none">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M0.21967 0.209209C0.512563 -0.0697365 0.987437 -0.0697365 1.28033 0.209209L5.78033 4.49492C6.07322 4.77387 6.07322 5.22613 5.78033 5.50508L1.28033 9.79079C0.987437 10.0697 0.512563 10.0697 0.21967 9.79079C-0.0732233 9.51184 -0.0732233 9.05958 0.21967 8.78064L4.18934 5L0.21967 1.21936C-0.0732233 0.940416 -0.0732233 0.488155 0.21967 0.209209Z"
										fill="#7881A1" />
								</svg>
							</a>
							<a class="support-main__field" href="#">
								<span>Deposit & Withdrawal</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="6"
									height="10"
									viewBox="0 0 6 10"
									fill="none">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M0.21967 0.209209C0.512563 -0.0697365 0.987437 -0.0697365 1.28033 0.209209L5.78033 4.49492C6.07322 4.77387 6.07322 5.22613 5.78033 5.50508L1.28033 9.79079C0.987437 10.0697 0.512563 10.0697 0.21967 9.79079C-0.0732233 9.51184 -0.0732233 9.05958 0.21967 8.78064L4.18934 5L0.21967 1.21936C-0.0732233 0.940416 -0.0732233 0.488155 0.21967 0.209209Z"
										fill="#7881A1" />
								</svg>
							</a>
							<a class="support-main__field" href="#">
								<span>Welcome Bonus</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="6"
									height="10"
									viewBox="0 0 6 10"
									fill="none">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M0.21967 0.209209C0.512563 -0.0697365 0.987437 -0.0697365 1.28033 0.209209L5.78033 4.49492C6.07322 4.77387 6.07322 5.22613 5.78033 5.50508L1.28033 9.79079C0.987437 10.0697 0.512563 10.0697 0.21967 9.79079C-0.0732233 9.51184 -0.0732233 9.05958 0.21967 8.78064L4.18934 5L0.21967 1.21936C-0.0732233 0.940416 -0.0732233 0.488155 0.21967 0.209209Z"
										fill="#7881A1" />
								</svg>
							</a>
							<a class="support-main__field" href="#">
								<span>Login & Register</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="6"
									height="10"
									viewBox="0 0 6 10"
									fill="none">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M0.21967 0.209209C0.512563 -0.0697365 0.987437 -0.0697365 1.28033 0.209209L5.78033 4.49492C6.07322 4.77387 6.07322 5.22613 5.78033 5.50508L1.28033 9.79079C0.987437 10.0697 0.512563 10.0697 0.21967 9.79079C-0.0732233 9.51184 -0.0732233 9.05958 0.21967 8.78064L4.18934 5L0.21967 1.21936C-0.0732233 0.940416 -0.0732233 0.488155 0.21967 0.209209Z"
										fill="#7881A1" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,

	onMount: (event) => {
		const popper = event.popper;
		popper.querySelector('[tippy-close]').addEventListener('click', ev => event.hide());
	}
});
