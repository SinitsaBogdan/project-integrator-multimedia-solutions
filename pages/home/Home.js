import { createMenuElements } from '../../scripts/create-menu-element.js';
import { vievSlidersFirstscrean } from '../../scripts/create-sliders-firstscrean.js';
import { addLicenses } from '../../scripts/create-license-list.js';

import { createStageElements } from '../../scripts/create-stages.js';
import { stageElementsAdvantages as advantages } from '../../data/data-stage.js';
import { createStageSolutionElements } from '../../scripts/create-stages-solutions.js';

createMenuElements();
vievSlidersFirstscrean();
createStageElements("advantages", advantages);
addLicenses();
createStageSolutionElements();
