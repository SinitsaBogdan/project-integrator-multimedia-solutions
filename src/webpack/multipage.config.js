const path = require('path');

result = {};

result.entry = {
	// about: {import: path.join(__dirname, '../../src/pages/about/About.js'), filename: 'js/about.js'},
	// agreement: {import: path.join(__dirname, '../../src/pages/agreement/Agreement.js'), filename: 'js/agreement.js'},
	// contacts: {import: path.join(__dirname, '../../src/pages/contacts/Contacts.js'), filename: 'js/contacts.js'},
	// decision: {import: path.join(__dirname, '../../src/pages/decision/Decision.js'), filename: 'js/decision.js'},
	// decisions: {import: path.join(__dirname, '../../src/pages/decisions/Decisions.js'), filename: 'js/decisions.js'},
	home: {import: path.join(__dirname, '../../src/pages/home/Home.js'), filename: 'js/home.js'},
	// licenses: {import: path.join(__dirname, '../../src/pages/licenses/Licenses.js'), filename: 'js/licenses.js'},
	// project: {import: path.join(__dirname, '../../src/pages/project/Project.js'), filename: 'js/project.js'},
	// projects: {import: path.join(__dirname, '../../src/pages/projects/Projects.js'), filename: 'js/projects.js'},
	// sectors: {import: path.join(__dirname, '../../src/pages/sectors/Sectors.js'), filename: 'js/sectors.js'},
};

result.pages = [
	// { chunks: ['about'], page: 'pages/about.html', template: path.join(__dirname, '../../src/pages/about/About.html') },
	// { chunks: ['agreement'], page: 'pages/agreement.html', template: path.join(__dirname, '../../src/pages/agreement/Agreement.html') },
	// { chunks: ['contacts'], page: 'pages/contacts.html', template: path.join(__dirname, '../../src/pages/contacts/Contacts.html') },
	// { chunks: ['decision'], page: 'pages/decision.html', template: path.join(__dirname, '../../src/pages/decision/Decision.html') },
	// { chunks: ['decisions'], page: 'pages/decisions.html', template: path.join(__dirname, '../../src/pages/decisions/Decisions.html') },
	{ chunks: ['home'], page: 'pages/home.html', template: path.join(__dirname, '../../src/pages/home/Home.html') },
	// { chunks: ['licenses'], page: 'pages/licenses.html', template: path.join(__dirname, '../../src/pages/licenses/Licenses.html') },
	// { chunks: ['project'], page: 'pages/project.html', template: path.join(__dirname, '../../src/pages/project/Project.html') },
	// { chunks: ['projects'], page: 'pages/projects.html', template: path.join(__dirname, '../../src/pages/projects/Projects.html') },
	// { chunks: ['sectors'], page: 'pages/sectors.html', template: path.join(__dirname, '../../src/pages/sectors/Sectors.html') },
];

module.exports = result;
