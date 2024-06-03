import { createMenuElements } from '../../scripts/create-menu-element.js';
import { createStageElements } from '../../scripts/create-stages.js';
import { stageElementsDecision as elements } from '../../data/data-stage.js';

createMenuElements();
createStageElements(elements);
