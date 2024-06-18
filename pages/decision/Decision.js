// IMPORT PROJECT ------------------------------------------------------------------------------------------

import * as project from '../../scripts/general-project.js';

// IMPORT DATA ---------------------------------------------------------------------------------------------

import { stagesElementsAdvantages as advantages, stageElementsIntegration as integration } from '../../data/data-stage.js';
import { forWhomElements as forWhom } from '../../data/data-tags.js';
import { clientsElements as clients } from '../../data/data-clients.js';
import { licensesElements as licenses } from '../../data/data-license.js';

// IMPORT CREATE -------------------------------------------------------------------------------------------
import { createStage } from '../../scripts/create-stages.js';
import { createTag } from '../../scripts/create-tag.js';
import { createClient } from '../../scripts/create-client.js';
import { createLicense } from '../../scripts/create-license.js';

// IMPORT FILLING SECTION ----------------------------------------------------------------------------------

import { fillingSectionForWhom } from '../../scripts/filling-section-forwhom.js';
import { fillingSectionFeaturesAdvantages } from '../../scripts/filling-section-features-advantages.js';
import { fillingSectionFeaturesIntegration } from '../../scripts/filling-section-features-integration.js';
import { fillingSectionClients } from '../../scripts/filling-section-clients.js';
import { fillingSectionLicense } from '../../scripts/filling-section-license.js';

// RUN PROJECT NAVIGATIONS ---------------------------------------------------------------------------------

project.createNavigationsHeader();
project.createNavigationsFooter();
project.createNavigationsDecisions();
project.createNavigationsIndustries();

// RUN FILLING ---------------------------------------------------------------------------------------------

fillingSectionFeaturesAdvantages(advantages, '#advantages', createStage);
fillingSectionFeaturesIntegration(integration, '#integration', createStage);
fillingSectionForWhom(forWhom, createTag);
fillingSectionClients(clients, createClient);
fillingSectionLicense(licenses, createLicense);

// END -----------------------------------------------------------------------------------------------------
