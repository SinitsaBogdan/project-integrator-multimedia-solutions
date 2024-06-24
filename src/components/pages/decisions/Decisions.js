// IMPORT PROJECT ------------------------------------------------------------------------------------------

import './Decisions.css';
import * as project from '../../../scripts/general-project.js';

// IMPORT DATA ---------------------------------------------------------------------------------------------

import { dataDecisions as decisions } from '../../../data/data-decisions.js';

// IMPORT CREATE -------------------------------------------------------------------------------------------
import { createCard } from '../../../scripts/create-card.js';

// IMPORT FILLING SECTION ----------------------------------------------------------------------------------

import { fillingSectionDecisions } from '../../../scripts/filling-section-decisions.js';

// RUN PROJECT NAVIGATIONS ---------------------------------------------------------------------------------

project.createNavigationsHeader();
project.createNavigationsFooter();
project.createNavigationsDecisions();
project.createNavigationsIndustries();

// RUN FILLING ---------------------------------------------------------------------------------------------

fillingSectionDecisions(decisions, createCard);

// END -----------------------------------------------------------------------------------------------------
