// Комментарий :
export function fillingSectionSolution(elements, create) {
	const list = document.querySelector('.Solutions__list');
	elements.forEach((el) => {
		const article = create(el);
		const li = document.createElement('li');
		li.classList.add('Solutions__item');
		li.append(article);
		list.append(li);
	});
}
