// Комментарий :
export function fillingSectionLicense(elements, create) {
	const list = document.querySelector('.Licenses__list');
	elements.forEach((element) => {
		const li = document.createElement('li');
		const item = create(element);
		li.classList.add('Licenses__item');
		li.append(item);
		list.append(li);
	});
}
