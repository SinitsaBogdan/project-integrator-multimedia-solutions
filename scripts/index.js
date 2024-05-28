const menuNavigation = document.querySelector('.menu__navigation');
const navigationItemTemplate = document.querySelector('.navigation__item-template').content;

menuItems.forEach((item) => {
  const navigationItemElement = navigationItemTemplate.querySelector('.navigation__item').cloneNode(true);
  const navigationLinkElement = navigationItemElement.querySelector('a');
  navigationLinkElement.textContent = item.name;
  navigationLinkElement.href = item.url;
  menuNavigation.append(navigationItemElement);
})
