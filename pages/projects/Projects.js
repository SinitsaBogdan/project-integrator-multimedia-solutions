// IMPORT PROJECT ------------------------------------------------------------------------------------------

import * as project from '../../scripts/general-project.js';

// IMPORT DATA ---------------------------------------------------------------------------------------------

import { dataDrafts as drafts } from '../../data/data-drafts.js';

// IMPORT CREATE -------------------------------------------------------------------------------------------
import { createCard } from '../../scripts/create-card.js';

// IMPORT FILLING SECTION ----------------------------------------------------------------------------------

import { fillingSectionDrafts } from '../../scripts/filling-section-drafts.js';

// RUN PROJECT NAVIGATIONS ---------------------------------------------------------------------------------

project.createNavigationsHeader();
project.createNavigationsFooter();
project.createNavigationsDecisions();
project.createNavigationsIndustries();

// RUN FILLING ---------------------------------------------------------------------------------------------

fillingSectionDrafts(drafts, createCard);

// END -----------------------------------------------------------------------------------------------------
