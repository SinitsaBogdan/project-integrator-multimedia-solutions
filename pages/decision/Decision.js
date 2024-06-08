import { createMenuElements } from '../../scripts/create-menu-element.js';
import { createStageElements } from '../../scripts/create-stages.js';
import { stageElementsAdvantages as advantages } from '../../data/data-stage.js';
import { stageElementsIntegration as integration } from '../../data/data-stage.js';
import { createClients } from '../../scripts/create-clients-list.js';

createMenuElements();
createStageElements("advantages", advantages);
createStageElements("integration", integration);
createClients();
