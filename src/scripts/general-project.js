import { dataIndustries } from '../data/data-industries.js';
import { dataDecisions } from '../data/data-decisions.js';
import { dataHeaderMenu, dataFooterMenu } from '../data/data-navigations.js';

const lang = 'nameRu';

const menuHeaderList = document.querySelector('#Header__menu');
const menuFooterGlobalList = document.querySelector('#Footer__menu_global');
const menuFooterDecisionsList = document.querySelector('#Header__menu_decisions');
const menuFooterIndustriesList = document.querySelector('#Header__menu_industries');

// Комментарий :
export function createNavigationsHeader() {
	dataHeaderMenu.forEach((el) => {
		const item = createLink(el, 'Header');
		menuHeaderList.append(item);
	});
}

// Комментарий :
export function createNavigationsFooter() {
	dataFooterMenu.forEach((el) => {
		const item = createLink(el, 'Footer');
		menuFooterGlobalList.append(item);
	});
}

// Комментарий :
export function createNavigationsDecisions() {
	dataDecisions.forEach((el) => {
		const item = createLink(el, 'Footer');
		menuFooterDecisionsList.append(item);
	});
}

// Комментарий :
export function createNavigationsIndustries() {
	dataIndustries.forEach((el) => {
		const item = createLink(el, 'Footer');
		menuFooterIndustriesList.append(item);
	});
}

// Комментарий :
function createLink(el, name) {
	const li = document.createElement('li');
	const a = document.createElement('a');
	li.classList.add(name + '__item');
	a.classList.add('Link', name + '__link');
	a.textContent = el[lang];
	a.href = el.href;
	li.append(a);
	return li;
}
