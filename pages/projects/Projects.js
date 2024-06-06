import { createMenuElements } from '../../scripts/create-menu-element.js';
import { dataElementsProjects as list } from '../../data/data-projects.js';
import { createElementsCard } from '../../scripts/create-elements-card.js';

createMenuElements();
createElementsCard('ListProjects', list);
