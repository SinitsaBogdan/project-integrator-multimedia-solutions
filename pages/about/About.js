import { createMenuElements } from '../../scripts/create-menu-element.js';
import { createStageElements } from '../../scripts/create-stages.js';
import { stageElementsAdvantages as advantages } from '../../data/data-stage.js';
import { addLicenses } from '../../scripts/create-license-list.js';
import { createClients } from '../../scripts/create-clients-list.js';

createMenuElements();
createStageElements('advantages', advantages);
addLicenses();
createClients();
