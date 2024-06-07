import { clients } from '../data/data-clients.js';

export function createClients() {
	const clientsList = document.querySelector('.Clients__list');

	clients.forEach((item) => {
		for (let i = 0; i < 12; i++) {
			const client = document.createElement('li');
			const logo = document.createElement('img');
			const project = document.createElement('p');

			client.classList.add('Client');
			logo.classList.add('Client__img');
			project.classList.add('Client__project');

			logo.src = item.logo;
			project.textContent = item.product;

			client.append(logo);
			client.append(project);

			clientsList.append(client);
		}
	});
}
