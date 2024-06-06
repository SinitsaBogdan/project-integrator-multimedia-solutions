import { createMenuElements } from '../../scripts/create-menu-element.js';
import { dataElementsIndustries as list } from '../../data/data-industries.js';
import { createElementsIndustries } from '../../scripts/create-elements-industries.js';

createMenuElements();
createElementsIndustries(list);