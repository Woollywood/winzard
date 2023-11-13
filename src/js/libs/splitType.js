import SplitType from 'split-type'

const dateStartCounterList = document.querySelectorAll('.raffle-date-start__counter-value');
dateStartCounterList.forEach(dateStartCounter => {
	const value = new SplitType(dateStartCounter, {types: 'chars'});
	value.chars.forEach(char => {
		const charParent = char.parentElement;
		const charBackground = document.createElement('div');
		charBackground.classList.add('char-background');
		charBackground.append(char);
		charParent.append(charBackground);
	})
})