import { clients } from '../data/data-clients.js';

export function createClients() {
	const clientsList = document.querySelector('.Clients__list');

	clients.forEach((item) => {
		for (let i = 0; i < 12; i++) {
			const client = document.createElement('li');
			const company = document.createElement('div');
			const logo = document.createElement('img');
			const name = document.createElement('h3');
			const link = document.createElement('a');
			const project = document.createElement('p');

			client.classList.add('Client');
			company.classList.add('Client__wrapper');
			logo.classList.add('Client__logo');
			name.classList.add('Client__name');
			link.classList.add('Clients__item');
			project.classList.add('Text', 'Client__description');

			logo.src = item.logo;
			project.textContent = item.product;
			link.href = item.link;
			name.textContent = item.name;

			company.append(logo, name);
			client.append(company, project);
			link.append(client);
			clientsList.append(link);
		}
	});
}
