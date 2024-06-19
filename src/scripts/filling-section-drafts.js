// Комментарий :
export function fillingSectionDrafts(elements, create) {
	const list = document.querySelector('.Drafts__list');
	elements.forEach((element) => {
		const li = document.createElement('li');
		const item = create(element);
		li.classList.add('Drafts__item');
		li.append(item);
		list.append(li);
	});
}
