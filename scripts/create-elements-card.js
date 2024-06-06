export function createElementsCard(className, elements) {
	const list = document.querySelector('.' + className + '__list');

	elements.forEach((e) => {
		const li = document.createElement('li');
		const article = document.createElement('article');
		const img = document.createElement('img');
		const content = document.createElement('div');
		const h3 = document.createElement('h3');
		const a = document.createElement('a');
		const span = document.createElement('span');

		const svg = '<svg class="Icon_Arrow" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" fill="transparent" > <linearGradient id="linear-gradient"> <stop offset="0%" stop-color="#6DDCFF" /> <stop offset="100%" stop-color="#7F60F9" /> </linearGradient> <path d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>';
		const p = document.createElement('p');

		li.classList.add(className + '__item');
		article.classList.add('Card');
		img.classList.add('Card__img');
		content.classList.add('Card__content');
		h3.classList.add('Card__title');
		a.classList.add('Card__btn');
		p.classList.add('Card__description');

		img.src = e.image
		h3.textContent = e.title
		p.textContent = e.content
		span.textContent = 'Подробнее'
		a.href = e.url

		li.append(article)
		article.append(img)
		article.append(content)
		article.append(p)
		content.append(h3)
		a.innerHTML = svg;
		a.prepend(span)
		content.append(a)

		list.append(li)

		console.log(li)
	});
}
