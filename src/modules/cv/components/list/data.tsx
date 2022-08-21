import faker from "faker";

export const PROJECTS_DATA = [
    {
        link: "katerinacorn.github.io/js-canvas-ukrainians-FE/",
        stack: "[ JS, canvas ]",
        name: "FE salary in Ukraine chart"
    },
    {
        link: "katerinacorn.github.io/-AD--LP-Affiliate-6/",
        stack: "[ HTML5, CSS3, animate.css ]",
        name: "Landing Page"
    },
]

export const WORK_DATA = [
    {
        companyName: "Freelance",
        post: "Front-End Developer",
        country: "Ukraine",
        period: "March 2021 - up to now",
        duties: faker.lorem.sentences(2)
    },
    {
        companyName: faker.company.companyName(),
        post: faker.name.jobTitle(),
        country: faker.address.country(),
        period: "March 2019 - March 2021",
        duties: faker.lorem.sentences(2)
    },
    {
        companyName: faker.company.companyName(),
        post: faker.name.jobTitle(),
        country: faker.address.country(),
        period: "September 2017 - March 2019",
        duties: faker.lorem.sentences(2)
    },
]

export const SKILLS_DATA = [
    {
        skillName: "HTML5",
        type: "tech"
    },
    {
        skillName: "CSS3",
        type: "tech"
    },
    {
        skillName: "Attention to detail",
        type: "soft"
    },
    {
        skillName: "JavaScript",
        type: "tech"
    },
    {
        skillName: "React.js",
        type: "tech"
    },
    {
        skillName: "English - Pre-Intermediate",
        type: "soft"
    },
];

