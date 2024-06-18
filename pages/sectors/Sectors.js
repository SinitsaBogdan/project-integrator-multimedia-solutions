// IMPORT PROJECT ------------------------------------------------------------------------------------------

import * as project from '../../scripts/general-project.js';

// IMPORT DATA ---------------------------------------------------------------------------------------------

import { dataIndustries as industries } from '../../data/data-industries.js';

// IMPORT CREATE -------------------------------------------------------------------------------------------
import { createCard } from '../../scripts/create-card.js';

// IMPORT FILLING SECTION ----------------------------------------------------------------------------------

import { fillingSectionIndustries } from '../../scripts/filling-section-industries.js';

// RUN PROJECT NAVIGATIONS ---------------------------------------------------------------------------------

project.createNavigationsHeader();
project.createNavigationsFooter();
project.createNavigationsDecisions();
project.createNavigationsIndustries();

// RUN FILLING ---------------------------------------------------------------------------------------------

fillingSectionIndustries(industries, createCard);

// END -----------------------------------------------------------------------------------------------------
