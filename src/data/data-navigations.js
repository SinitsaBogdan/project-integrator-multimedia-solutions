export const dataHeaderMenu = [
	{
		nameEng: 'Projects',
		nameRu: 'Проекты',
		href: '<%=require("../pages/projects/Projects.html")%>',
	},
	{
		nameEng: 'Features',
		nameRu: 'Особенности',
		href: '#!',
	},
	{
		nameEng: 'Pricing',
		nameRu: 'Расценка',
		href: '#!',
	},
	{
		nameEng: 'Support',
		nameRu: 'Поддержка',
		href: '#!',
	},
];

export const dataFooterMenu = [
	{
		nameEng: 'about',
		nameRu: 'о компании',
		href: new URL('../pages/about/About.html', import.meta.url).href,

	},
	{
		nameEng: 'contacts',
		nameRu: 'контакты',
		href: new URL('../pages/contacts/Contacts.html', import.meta.url).href,
	},
	{
		nameEng: 'licenses',
		nameRu: 'лицензии',
		href: new URL('../pages/licenses/Licenses.html', import.meta.url).href,
	},
];
