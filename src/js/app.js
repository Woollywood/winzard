/*
(i) Код попадает в итоговый файл,
только когда вызвана функция,
например flsFunctions.spollers();
Или когда импортирован весь файл,
например, import "files/script.js";
Неиспользуемый (не вызываемый)
код в итоговый файл не попадает.

Если мы хотим добавить модуль
следует его раскомментировать
*/
// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = true;

// Подключение основного файла стилей
import '../scss/style.scss';

// ========================================================================================================================================================================================================================================================
// Функционал =============================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from './custom/functions.js';

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML*/
/* (i) необходимо для корректного отображения webp с css*/
flsFunctions.isWebp();
/* Добавление класса touch для HTML если браузер мобильный*/
// flsFunctions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы*/
// flsFunctions.addLoadedClass();
/* Модуль для работы с меню (Бургер)*/
// flsFunctions.menuInit();
/* Учет плавающей панели на мобильных устройствах при 100vh*/
// flsFunctions.fullVHfix();
/* Форматирование чисел*/
// import './libs/wNumb.min.js';

/*
Настройка подключения плагина Bootstrap выполняется в файле js/libs/bootstrap.js
Документация плагина: https://getbootstrap.com/docs/5.0/getting-started/introduction/
*/
// import "./libs/bootstrap.js";

/*
Настройка подключения плагина Accordion выполняется в файле js/libs/accordion.js
Документация плагина: https://github.com/michu2k/Accordion
*/
import "./libs/accordion.js";

/*
Настройка подключения плагина Anime выполняется в файле js/libs/anime.js
Документация плагина: https://animejs.com/documentation/
*/
// import "./libs/anime.js";

/*
Настройка подключения плагина MagicMouse выполняется в файле js/libs/magicMouse.js
Документация плагина: https://magicmousejs.web.app/
*/
// import "./libs/magicMouse.js";

/*
Модуль "Спойлеры"
Документация: https://template.fls.guru/template-docs/modul-spojlery.html
Сниппет (HTML): spollers
*/
// flsFunctions.spollers();
/*
Модуль "Табы"
Документация: https://template.fls.guru/template-docs/modul-taby.html
Сниппет (HTML): tabs
*/
// flsFunctions.tabs();
/*
Модуль "Показать еще"
Документация: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сниппет (HTML): showmore
*/
// flsFunctions.showMore();
/*
Модуль "Эффект волн"
Документация: https://template.fls.guru/template-docs/modul-ripple-effect.html
Сниппет (HTML):
*/
// flsFunctions.rippleEffect();
/*
Модуль "Кастомный курсор"
Документация:
Сниппет (HTML):
*/
// flsFunctions.customCursor(true);
/*
Модуль "Попапы"
Документация: https://template.fls.guru/template-docs/funkcional-popup.html
Сниппет (HTML): pl, pop
*/
// import './custom/popup.js'
/*
Модуль параллакса мышью
Документация: https://template.fls.guru/template-docs/modul-animacii-parallaks-obektov-pri-dvizhenii-myshi.html
*/
// import './custom/parallax-mouse.js'
// ========================================================================================================================================================================================================================================================
// Работа с формами =======================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from './custom/forms.js';

/* Работа с полями формы*/
/* Документация: https://template.fls.guru/template-docs/rabota-s-formami.html/
/*
flsForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});
*/
/* Отправка формы*/
/* Документация: https://template.fls.guru/template-docs/rabota-s-formami.html*/
// flsForms.formSubmit();
/* Модуль формы "количество"*/
// flsForms.formQuantity();
/* Модуль звездного рейтинга*/
// flsForms.formRating();
/* Модуль работы с select.*/
// import './custom/select.js'
/* Модуль работы с календарем*/
// import './libs/datepicker.js'
/* (в работе) Модуль работы с масками.*/
/*
Подключение и настройка выполняется в файле js/files/forms/inputmask.js
Документация по работе в шаблоне:
Документация плагина: https://github.com/RobinHerbots/inputmask
Сниппет(HTML):
*/
// import "./libs/inputmask.js";
/* Модуль работы с ползунком*/
/*
Документация по работе в шаблоне:
Документация плагина: https://refreshless.com/nouislider/
Сниппет (HTML): range
*/
// import "./libs/range.js";
/* Модуль работы с подсказками (tippy)*/
/*
Документация по работе в шаблоне:
Документация плагина: https://atomiks.github.io/tippyjs/
Сниппет (HTML): tip (добавляет атрибут с подсказкой для html тега)
*/
import "./libs/tippy.js";
// ========================================================================================================================================================================================================================================================
// Работа со слайдером (Swiper) ===========================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документация плагина: https://swiperjs.com/
Сниппет(HTML): swiper
*/
import "./libs/sliders.js";

/*
Документация плагина: https://www.chartjs.org/docs/latest/
Сниппет(HTML): swiper
*/
// import "./libs/chart.js";

/*
Документация плагина: https://imask.js.org/
*/
// import "./libs/imask.js";

/*
Документация плагина: https://www.npmjs.com/package/mixitup
*/
// import "./libs/mixitup.js";

/*
Документация плагина: https://michalsnik.github.io/aos/, https://www.npmjs.com/package/aos, https://github.com/michalsnik/aos#-animations
*/
// import "./libs/aos.js";

// ========================================================================================================================================================================================================================================================
// Модули работы с прокруткой страницы ====================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Изменение дизайна скроллбара
Документация по работе в шаблоне: В HTML добавляем в блок атрибут data-simplebar
Документация плагина: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сниппет(HTML):
*/
// import './libs/simplebar.js';
// Ленивая (отложенная) загрузка картинок
// Документация по работе в шаблоне: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документация плагина: https://github.com/verlok/vanilla-lazyload
// Сниппет(HTML):
// import './libs/lazyload.js';
// Наблюдатель за объектами с атрибутом data-watch
// Документация: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Сниппет(HTML):
// import './custom/watcher.js'
// Модуль поэкранной прокрутки
// Документация: https://template.fls.guru/template-docs/modul-poekrannoj-prokrutki-stranicy-fullpage.html
// Сниппет(HTML):
// import './custom/fullpage.js'
// Модуль параллакса
// Документация: https://template.fls.guru/template-docs/paralaks-pri-skroli.html
// Сниппет(HTML):
// import './custom/parallax.js'
// Функции работы скролом
import * as flsScroll from './custom/scroll.js';

// Скроллинг страницы
import './libs/scroll/scrollController.js';

import './libs/splitType.js';

// Плавная навигация по странице
// Документация: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
// flsScroll.pageNavigation();
// Функционал добавления классов к хедеру во время прокрутки
// Документация: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
// flsScroll.headerScroll();
// Анимация цифрового счетчика.
// Документация: https://template.fls.guru/template-docs/modul-animacii-cifrovogo-lichilnika.html
// Сниппет (HTML):
// flsScroll.digitsCounter();
// ========================================================================================================================================================================================================================================================
// Галерея ================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документация по работе в шаблоне:
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/
// import "./libs/gallery.js";
// ========================================================================================================================================================================================================================================================
// Магическая сетка =======================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документация по работе в шаблоне:
Документация плагина:
Сниппет(HTML):
*/
// import "./libs/isotope.js";
// ========================================================================================================================================================================================================================================================
// Другие плагины =========================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Динамический адаптив*/
// Документация: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html
// import "./custom/dynamic_adapt.js";
// ========================================================================================================================================================================================================================================================
// Другое =================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Подключаем файлы со своим кодом*/
import './custom/script.js';
// ========================================================================================================================================================================================================================================================
