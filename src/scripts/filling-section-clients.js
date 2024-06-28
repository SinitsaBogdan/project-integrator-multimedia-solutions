// Комментарий :
export function fillingSectionClients(elements, create) {
	const list = document.querySelector('.Clients__list');
	elements.forEach((element) => {
		const li = document.createElement('li');
		const item = create(element);
		li.classList.add('Clients__item');
		li.append(item);
		list.append(li);
	});
}
