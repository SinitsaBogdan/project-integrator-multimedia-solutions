// Комментарий :
export function fillingSectionFeaturesAdvantages(elements, selector, create) {
	const list = document.querySelector(selector);
	elements.forEach((element) => {
		const li = document.createElement('li');
		const article = create(element);
		li.classList.add('Features__item');
		li.append(article);
		list.append(li);
	});
}
