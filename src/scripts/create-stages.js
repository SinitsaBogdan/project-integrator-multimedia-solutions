export function createStage(element) {
	const article = document.createElement('article');
	const span = document.createElement('span');
	const h3 = document.createElement('h3');
	const p = document.createElement('p');

	article.classList.add('Stage');
	span.classList.add('Stage__num', 'text__style__isTransparent');
	h3.classList.add('Stage__title');
	p.classList.add('Text', 'Stage__text');

	if (element.style === 'normal') article.classList.add('Stage__isNormal');
	else if (element.style === 'gray') article.classList.add('Stage__isGrey');

	span.textContent = element.number;
	h3.textContent = element.title;
	p.textContent = element.content;

	article.append(span);
	article.append(h3);
	article.append(p);
	return article;
}
