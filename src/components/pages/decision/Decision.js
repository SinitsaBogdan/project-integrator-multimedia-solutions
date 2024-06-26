// IMPORT PROJECT ------------------------------------------------------------------------------------------

import './Decision.css';
import * as project from '../../../scripts/general-project.js';

// IMPORT DATA ---------------------------------------------------------------------------------------------

import { stagesElementsAdvantages as advantages, stageElementsIntegration as integration } from '../../../data/data-stage.js';
import { clientsElements as clients } from '../../../data/data-clients.js';
import { dataDrafts as drafts } from '../../../data/data-drafts.js';

// IMPORT CREATE -------------------------------------------------------------------------------------------
import { createStage } from '../../../scripts/create-stages.js';
import { createClient } from '../../../scripts/create-client.js';
import { createCard } from '../../../scripts/create-card.js';

// IMPORT FILLING SECTION ----------------------------------------------------------------------------------

import { fillingSectionFeaturesAdvantages } from '../../../scripts/filling-section-features-advantages.js';
import { fillingSectionFeaturesIntegration } from '../../../scripts/filling-section-features-integration.js';
import { fillingSectionClients } from '../../../scripts/filling-section-clients.js';
import { fillingSectionSimilar } from '../../../scripts/filling-section-similar.js';

// RUN PROJECT NAVIGATIONS ---------------------------------------------------------------------------------

project.createNavigationsHeader();
project.createNavigationsFooter();
project.createNavigationsDecisions();
project.createNavigationsIndustries();

// RUN FILLING ---------------------------------------------------------------------------------------------

fillingSectionFeaturesAdvantages(advantages, '#advantages', createStage);
fillingSectionFeaturesIntegration(integration, '#integration', createStage);
fillingSectionClients(clients, createClient);
fillingSectionSimilar(drafts, createCard, 'fillter');

// END -----------------------------------------------------------------------------------------------------
