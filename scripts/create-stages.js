export function createStageElements(id, elements) {
	const list = document.getElementById(id);

	elements.forEach((element) => {
		const li = document.createElement('li');
		const article = document.createElement('article');
		const span = document.createElement('span');
		const h3 = document.createElement('h3');
		const p = document.createElement('p');

		li.classList.add('Features__item');
		article.classList.add('Stage');
		span.classList.add('Stage__num', 'text__style__isTransparent');
		h3.classList.add('Stage__title');
		p.classList.add('Text', 'Stage__text');

		if (element.style === 'normal') article.classList.add('Stage__isNormal');
		else if (element.style === 'gray') article.classList.add('Stage__isGrey');

		span.textContent = element.number;
		h3.textContent = element.title;
		p.textContent = element.content;

		li.append(article);
		article.append(span);
		article.append(h3);
		article.append(p);
		list.append(li);
	});
}
