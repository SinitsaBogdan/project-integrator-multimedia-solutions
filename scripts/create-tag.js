// Комментарий :
export function createTag(element) {
	const li = document.createElement('li');
	const h3 = document.createElement('h3');
	li.classList.add('ForWhom__item');
	h3.classList.add('ForWhom__baclgrountText');
	h3.textContent = element;
	li.append(h3);
	return li;
}
