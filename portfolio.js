import emoji from "react-easy-emoji";

export const greetings = {
	name: "Lucas Ignacio Vergara",
	title: "Hola a todos",
	description:
		"Llevo aproximadamente 2 años desarrollando en la web y estudiando en la Universidad, empecé utilizando PHP y luego uno de sus" +
		" Frameworks Laravel, " +
		" con estos construí un sitio para subir material de estudio de mi carrera. \n" +
		"Tengo acercamiento a muchas tecnologías tanto del lado del servidor como del cliente.\n" +
		"Actualmente me estoy formando sobre arquitectura orientada a microservicios y Docker como herramienta de construcción de contenedores.\n",
	resumeLink: "https://lucasign.me/CV_Lucas_Vergara.pdf",
};

export const openSource = {
	githubUserName: "LIbanezDev",
};

export const contact = {};

export const socialLinks = {
	twitter: "https://twitter.com/LucasIV5",
	github: "https://github.com/LIbanezDev",
	linkedin: "https://www.linkedin.com/in/lucas-ignacio-vergara-iba%C3%B1ez-b22673166/",
};

export const skillsSection = {
	title: "Que Utilizo",
	subTitle:
		"CON ESTAS TECNOLOGÍAS REALIZO DIVERSOS PROYECTOS.",
	skills: [
		emoji(
			"⚡ Desarrollo de interfaces de comunicación REST y GraphQL"
		),
		emoji(
			"⚡ Construcción de bases de datos relacionales a través de lenguaje SQL o utilizando orm (Eloquent, TypeORM, Sequelize, etc)"
		),
		emoji(
			"⚡ Conexión del cliente con el servidor utilizando javascript vanilla o librerias como react y vuejs."
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "Laravel",
			fontAwesomeClassname: "logos:laravel",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "NestJS",
			fontAwesomeClassname: "logos:nestjs",
		},
		{
			skillName: "graphql",
			fontAwesomeClassname: "logos:graphql",
		},
		{
			skillName: "php",
			fontAwesomeClassname: "vscode-icons:file-type-php",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "MySql",
			fontAwesomeClassname: "logos:mysql",
		},
		{
			skillName: "github",
			fontAwesomeClassname: "logos:github",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Backend y bases de datos", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Frontend y diseño",
		progressPercentage: "70",
	},
];

export const educationInfo = [
	{
		schoolName: "Colegio Particular San Mateo",
		subHeader: "Tecnico de nivel medio en Telecomunicaciones",
		duration: "Marzo 2016 - Marzo 2018",
		desc: "Formación en area de redes a través de cursos oficiales de Cisco (CCNA 1, CCNA 2) y construccion de computadores (It Essentials).",
		descBullets: [
			"Primer Lugar promoción 2018.",
			"Practica realizada.",
		],
	},
	{
		schoolName: "Universidad Técnica Federico Santa María",
		subHeader: "Técnico Universitario en Informática",
		duration: "Marzo 2020 - Marzo 2022",
		desc: "Formación en desarrollo de software desde su plánificación hasta su implementación, " +
			"también en diversos tópicos como la matemática, educación fisica y humanidades.",
		descBullets: [
			"Egresado, en busca de un lugar donde realizar la práctica profesional.",
		],
	},
];

export const experience = [
	{
		role: "Prácticante",
		company: "Open Systems",
		companylogo: "/img/opensystems.png",
		date: "Enero 2019 - Marzo 2019",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
];

export const projects = [
	{
		name: "D'Amore Store",
		desc: "Proyecto de título de la carrera T.U en Informática, consiste de una tienda online con panel de administración, implementa funcionalidades como " +
			"autenticación, autorización, subida de archivos, etc. Fue realizada con Laravel en su totalidad y desplegada en un servidor Nginx contenido en una vm ubuntu de" +
			" google cloud.",
		github: "https://github.com/LIbanezDev/damore-online-store",
		link: "https://damore.drkoi.me",
	},
	{
		name: "Fakebook",
		desc: "Uno de los proyectos mas desafiantes, se construyó una mini red social (de ahi su nombre) con arquitectura de microservicios, se utilizó nestjs para hacer cada" +
			" servicio independiente, cada uno de dichos servicios era un contenedor de docker 100% independiente.",
		github: "https://github.com/LIbanezDev/fakebook",
	},
	{
		name: "Material USM",
		desc: "Sitio para subir archivos de las diversas carreras y asignaturas que hay en la utfsm, fue construida con laravel.",
		github: "https://github.com/LIbanezDev/material_usm_project",
	},
	{
		name: "Social Todos",
		desc: "Aplicación tipo red social donde cada usuario tiene amigos, grupos e incluso chat, se utilizó nodejs con typescript y typeorm. " +
			"En la parte del cliente se usó react.",
		github: "https://github.com/LIbanezDev/social-todos-server",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
