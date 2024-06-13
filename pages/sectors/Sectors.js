import { createMenuElements } from '../../scripts/create-menu-element.js';
import { dataElementsIndustries as list } from '../../data/data-industries.js';
import { createElementsCard } from '../../scripts/create-elements-card.js';

createMenuElements();
createElementsCard('ListCards', list);