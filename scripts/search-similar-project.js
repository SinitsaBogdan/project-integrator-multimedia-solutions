import { iconArrow } from '../../constant/arrow.js';

export function searchSimilarProject(coll, elements) {
	const list = document.querySelector('.Similar__list');
	elements.forEach((element, index) => {
		if (index < coll) {
			const li = document.createElement('li');
			const article = document.createElement('article');
			const img = document.createElement('img');
			const div = document.createElement('div');
			const h3 = document.createElement('h3');
			const a = document.createElement('a');
			const span = document.createElement('span');

			li.classList.add('List__item');
			article.classList.add('Card');
			img.classList.add('Card__img');
			div.classList.add('Card__content');
			h3.classList.add('Card__title');
			a.classList.add('Card__btn');

			img.src = element.image;
			img.alt = element.title;
			h3.textContent = element.title;
			a.href = element.url;
			a.innerHTML = iconArrow;
			span.textContent = 'Подробнее';

			a.prepend(span);
			div.append(h3);
			div.append(a);
			article.append(img);
			article.append(div);
			li.append(article);
			list.append(li);
		}
	});
}
