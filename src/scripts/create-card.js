import { iconArrow } from '../constant/arrow.js';
const lang = 'nameRu';

export function createCard(elements) {
	const article = document.createElement('article');
	const image = document.createElement('img');
	const content = document.createElement('div');
	const h3 = document.createElement('h3');
	const a = document.createElement('a');
	const span = document.createElement('span');
	const p = document.createElement('p');

	article.classList.add('Card');
	image.classList.add('Card__img');
	content.classList.add('Card__content');
	h3.classList.add('Card__title');
	a.classList.add('Card__btn');
	p.classList.add('Text', 'Card__description');

	image.src = elements.img;
	h3.textContent = elements[lang];
	p.textContent = elements.content;
	span.textContent = 'Подробнее';
	a.href = elements.href;

	article.append(image);
	article.append(content);
	article.append(p);
	content.append(h3);
	a.innerHTML = iconArrow;
	a.prepend(span);
	content.append(a);
	return article;
}
