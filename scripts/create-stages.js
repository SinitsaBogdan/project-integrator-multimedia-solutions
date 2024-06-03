export function createStageElements(elements) {
	const list = document.querySelector('.Integration__list');

	elements.forEach((e) => {
		const li = document.createElement('li');
		const article = document.createElement('article');
		const span = document.createElement('span');
		const h3 = document.createElement('h3');
		const p = document.createElement('p');

		li.classList.add('Integration__item');
		article.classList.add('Stage');
		span.classList.add('Stage__num', 'text__style__isTransparent');
		h3.classList.add('Stage__title');
		p.classList.add('Stage__text');

		if (e.style === 'normal') article.classList.add('Stage__isNormal');
		else if (e.style === 'gray') article.classList.add('Stage__isGrey');

		span.textContent = e.number;
		h3.textContent = e.title;
		p.textContent = e.content;

		li.append(article);
		article.append(span);
		article.append(h3);
		article.append(p);
		list.append(li);
	});
}
