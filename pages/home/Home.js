import { createMenuElements } from '../../scripts/create-menu-element.js';
import { vievSlidersFirstscrean } from '../../scripts/create-sliders-firstscrean.js';

import { createStageElements } from '../../scripts/create-stages.js';
import { stageElementsHome as elements } from '../../data/data-stage.js';

createMenuElements();
vievSlidersFirstscrean();
createStageElements(elements);
