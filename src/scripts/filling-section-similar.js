// Комментарий :
export function fillingSectionSimilar(elements, create, filter = undefined) {
	const list = document.querySelector('.Similar__list');

	if (filter != undefined) {
		elements = elements.filter((element) => {
			if (element.tags.includes(filter)) return element;
		});
	}
	elements.forEach((element) => {
		const li = document.createElement('li');
		const item = create(element);
		li.classList.add('Similar__item');
		li.append(item);
		list.append(li);
	});
}
