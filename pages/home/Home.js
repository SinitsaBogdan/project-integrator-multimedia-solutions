import { stageElementsAdvantages as advantages } from '../../data/data-stage.js';
import { tagElements as tags } from '../../data/data-tags.js';

import { createMenuElements } from '../../scripts/create-menu-element.js';
import { vievSlidersFirstscrean } from '../../scripts/create-sliders-firstscrean.js';
import { addLicenses } from '../../scripts/create-license-list.js';
import { createStageElements } from '../../scripts/create-stages.js';
import { createStageSolutionElements } from '../../scripts/create-stages-solutions.js';
import { createClients } from '../../scripts/create-clients-list.js';
import { createTagElements } from '../../scripts/create-tags.js';

createMenuElements();
vievSlidersFirstscrean();
createStageElements('advantages', advantages);
addLicenses();
createStageSolutionElements();
createClients();
createTagElements('ForWhom__list', tags);
