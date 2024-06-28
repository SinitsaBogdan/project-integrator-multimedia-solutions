export function createClient(element) {
	const link = document.createElement('a');
	const wrapper = document.createElement('div');
	const logo = document.createElement('img');
	const name = document.createElement('h3');
	const description = document.createElement('p');

	link.classList.add('Client');
	wrapper.classList.add('Client__wrapper');
	logo.classList.add('Client__logo');
	name.classList.add('Client__name');
	description.classList.add('Text', 'Client__description');

	logo.src = element.logo;
	description.textContent = element.product;
	link.href = element.link;
	name.textContent = element.name;

	wrapper.append(logo, name);
	link.append(wrapper, description);
	return link;
}
