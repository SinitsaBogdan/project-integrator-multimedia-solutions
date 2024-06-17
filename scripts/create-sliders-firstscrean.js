import { dataHomeScreanSliders } from '../data/data-sliders.js';

let idSlider = 0;

export function vievSlidersFirstscrean() {
	const btnSliderPrevious = document.querySelector('.Slider__arrow_previous');
	const btnSliderNext = document.querySelector('.Slider__arrow_next');

	btnSliderPrevious.addEventListener('click', () => toPrevious());
	btnSliderNext.addEventListener('click', () => toNext());
}

function toPrevious() {
	if (idSlider > 0) {
		idSlider--;
		refactorFirstLayer(dataHomeScreanSliders[idSlider]);
	}
}

function toNext() {
	if (idSlider < dataHomeScreanSliders.length - 1) {
		idSlider++;
		refactorFirstLayer(dataHomeScreanSliders[idSlider]);
	}
}

function refactorFirstLayer(element) {
	const screan = document.querySelector('.Screan');
	const pre = screan.querySelector('.Title__isPre');
	const title = screan.querySelector('.Screan__title');
	const text = screan.querySelector('.Screan__text');

	screan.style.backgroundImage = `url(${element.img})`;
	pre.textContent = element.pre;
	title.textContent = element.title;
	text.textContent = element.text;
}
