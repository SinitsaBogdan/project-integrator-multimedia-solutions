// Комментарий :
export function fillingSectionDecisions(elements, create) {
	const list = document.querySelector('.Decisions__list');
	elements.forEach((element) => {
		const li = document.createElement('li');
		const item = create(element);
		li.classList.add('Decisions__list');
		li.append(item);
		list.append(li);
	});
}
