import { menuItems } from "./menu-data.js";

export function createMenuElements() {
	const menuList = document.querySelector('.Menu__navigation');

	menuItems.forEach((item) => {
		const menuListItem = document.createElement('li');
		const menuItemElment = document.createElement('a');

		menuListItem.classList.add('Navigation__item');
		menuItemElment.textContent = item.nameEng;
		menuItemElment.href = item.url;

		menuListItem.append(menuItemElment);
		menuList.append(menuListItem);
	});
}