// Комментарий :
export function fillingSectionDecisions(elements, create) {
	const list = document.querySelector('.DecisionsItems__list');
	elements.forEach((element) => {
		const li = document.createElement('li');
		const item = create(element);
		li.classList.add('DecisionsItems__list');
		li.append(item);
		list.append(li);
	});
}
