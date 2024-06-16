import { createMenuElements } from '../../scripts/create-menu-element.js';
import { searchSimilarProject } from '../../scripts/search-similar-project.js';
import { dataElementsProjects as list } from '../../data/data-projects.js';

createMenuElements();
searchSimilarProject(2, list);
