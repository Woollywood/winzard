import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container', {
	duration: 400,
	onlyChildNodes: false,
	elementClass: 'accordion',
	triggerClass: 'accordion__trigger',
	panelClass: 'accordion__panel',
	activeClass: 'active',
});
