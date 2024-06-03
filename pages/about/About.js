import { createMenuElements } from '../../scripts/create-menu-element.js';
import { createStageElements } from '../../scripts/create-stages.js';
import { stageElementsAdvantages as advantages } from '../../data/data-stage.js';

createMenuElements();
createStageElements("advantages", advantages);