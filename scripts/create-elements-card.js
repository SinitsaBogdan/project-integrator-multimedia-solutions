import { iconArrow } from '../../constant/arrow.js';

export function createElementsCard(className, elements) {
	const list = document.querySelector('.' + className);

	elements.forEach((e) => {
		const li = document.createElement('li');
		const article = document.createElement('article');
		const img = document.createElement('img');
		const content = document.createElement('div');
		const h3 = document.createElement('h3');
		const a = document.createElement('a');
		const span = document.createElement('span');
		const p = document.createElement('p');

		li.classList.add(className + '__item');
		article.classList.add('Card');
		img.classList.add('Card__img');
		content.classList.add('Card__content');
		h3.classList.add('Card__title');
		a.classList.add('Card__btn');
		p.classList.add('Text', 'Card__description');

		img.src = e.image;
		h3.textContent = e.title;
		p.textContent = e.content;
		span.textContent = 'Подробнее';
		a.href = e.url;

		li.append(article);
		article.append(img);
		article.append(content);
		article.append(p);
		content.append(h3);
		a.innerHTML = iconArrow;
		a.prepend(span);
		content.append(a);
		list.append(li);
	});
}
