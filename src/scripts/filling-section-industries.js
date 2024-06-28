// Комментарий :
export function fillingSectionIndustries(elements, create) {
	const list = document.querySelector('.Industries__list');
	elements.forEach((element) => {
		const li = document.createElement('li');
		const item = create(element);
		li.classList.add('Industries__item');
		li.append(item);
		list.append(li);
	});
}
