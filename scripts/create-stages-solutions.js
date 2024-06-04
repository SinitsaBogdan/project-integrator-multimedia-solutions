import { stageElementsSolutions as elements } from '../data/data-stage.js';

export function createStageSolutionElements() {
	const list = document.querySelector('.Solutions__list');

	elements.forEach((e) => {
		const li = document.createElement('li');
		const img = document.createElement('img');
		const h3 = document.createElement('h3');
		const btn = document.createElement('button');
		const arrow = document.createElement('img');

		li.classList.add('Solutions__item');
		img.classList.add('SolutionStage__img');
		h3.classList.add('SolutionStage__title');
		btn.classList.add('SolutionStage__button');

		h3.textContent = e.title;
		img.src = e.img;
		arrow.src = '../../assets/svg/more.svg';
		arrow.alt = 'Подробнее';

		btn.append(arrow);
		li.append(img);
		li.append(h3);
		li.append(btn);
		list.append(li);
	});

	const li = document.createElement('li');
	const p = document.createElement('p');

	li.classList.add('Solutions__item', 'item__isBordered');
	p.classList.add('SolutionStage__text');

	p.textContent = 'Смотреть все услуги';

	li.append(p);
	list.append(li);
}
