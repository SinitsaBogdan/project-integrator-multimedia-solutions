const path = require('path');

result = {};

result.entry = {
	about: { import: path.join(__dirname, '../../src/components/pages/about/About.js'), filename: 'js/about.js' },
	agreement: { import: path.join(__dirname, '../../src/components/pages/agreement/Agreement.js'), filename: 'js/agreement.js' },
	contacts: { import: path.join(__dirname, '../../src/components/pages/contacts/Contacts.js'), filename: 'js/contacts.js' },
	decision: { import: path.join(__dirname, '../../src/components/pages/decision/Decision.js'), filename: 'js/decision.js' },
	decisions: { import: path.join(__dirname, '../../src/components/pages/decisions/Decisions.js'), filename: 'js/decisions.js' },
	home: { import: path.join(__dirname, '../../src/components/pages/home/Home.js'), filename: 'js/home.js' },
	licenses: { import: path.join(__dirname, '../../src/components/pages/licenses/Licenses.js'), filename: 'js/licenses.js' },
	project: { import: path.join(__dirname, '../../src/components/pages/project/Project.js'), filename: 'js/project.js' },
	projects: { import: path.join(__dirname, '../../src/components/pages/projects/Projects.js'), filename: 'js/projects.js' },
	sectors: { import: path.join(__dirname, '../../src/components/pages/sectors/Sectors.js'), filename: 'js/sectors.js' },
};

result.pages = [
	{ chunks: ['about'], page: 'pages/about.html', template: path.join(__dirname, '../../src/components/pages/about/About.pug') },
	{ chunks: ['agreement'], page: 'pages/agreement.html', template: path.join(__dirname, '../../src/components/pages/agreement/Agreement.pug') },
	{ chunks: ['contacts'], page: 'pages/contacts.html', template: path.join(__dirname, '../../src/components/pages/contacts/Contacts.pug') },
	{ chunks: ['decision'], page: 'pages/decision.html', template: path.join(__dirname, '../../src/components/pages/decision/Decision.pug') },
	{ chunks: ['decisions'], page: 'pages/decisions.html', template: path.join(__dirname, '../../src/components/pages/decisions/Decisions.pug') },
	{ chunks: ['home'], page: 'pages/home.html', template: path.join(__dirname, '../../src/components/pages/home/Home.pug') },
	{ chunks: ['licenses'], page: 'pages/licenses.html', template: path.join(__dirname, '../../src/components/pages/licenses/Licenses.pug') },
	{ chunks: ['project'], page: 'pages/project.html', template: path.join(__dirname, '../../src/components/pages/project/Project.pug') },
	{ chunks: ['projects'], page: 'pages/projects.html', template: path.join(__dirname, '../../src/components/pages/projects/Projects.pug') },
	{ chunks: ['sectors'], page: 'pages/sectors.html', template: path.join(__dirname, '../../src/components/pages/sectors/Sectors.pug') },
];

module.exports = result;
