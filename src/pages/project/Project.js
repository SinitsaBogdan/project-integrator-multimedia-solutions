// IMPORT PROJECT ------------------------------------------------------------------------------------------

import './Project.css';
import * as project from '../../scripts/general-project.js';

// IMPORT DATA ---------------------------------------------------------------------------------------------

import { dataDrafts as drafts } from '../../data/data-drafts.js';

// IMPORT CREATE -------------------------------------------------------------------------------------------
import { createCard } from '../../scripts/create-card.js';

// IMPORT FILLING SECTION ----------------------------------------------------------------------------------

import { fillingSectionSimilar } from '../../scripts/filling-section-similar.js';

// RUN PROJECT NAVIGATIONS ---------------------------------------------------------------------------------

project.createNavigationsHeader();
project.createNavigationsFooter();
project.createNavigationsDecisions();
project.createNavigationsIndustries();

// RUN FILLING ---------------------------------------------------------------------------------------------

fillingSectionSimilar(drafts, createCard, 'fillter');

// END -----------------------------------------------------------------------------------------------------
