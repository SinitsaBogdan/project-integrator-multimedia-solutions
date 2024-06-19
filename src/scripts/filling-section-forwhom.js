// Комментарий :
export function fillingSectionForWhom(elements, create) {
	const rows = document.querySelectorAll('.ForWhom__list');
	rows.forEach((list, index) => {
		elements[index].forEach((element) => {
			const li = create(element);
			list.append(li);
		});
	});
}
