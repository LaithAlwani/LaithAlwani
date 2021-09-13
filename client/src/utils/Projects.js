const uikit = "/icons/uikit.png";
const html = "/icons/html.png";
const bootstrap = "/icons/bootstrap.png";
const css = "/icons/css.png";
const handlebars = "/icons/handlebars.png";
const javaScript = "/icons/javascript.png";
const mongo = "/icons/mongo.png";
const node = "/icons/node.png";
const react = "/icons/react.png";
const sequelize = "/icons/sequelize.png";
const express = "/icons/exjs.png";

const Projects = [
  {
    title: "Chats 'R' Us",
    pathname: "chatsrus",
    image: "/images/chatsrus.jpeg",
    description: "Real time chat app",
    technologies: [node, express, sequelize, bootstrap, javaScript, handlebars],
    appLink: "https://group-3-project-2.herokuapp.com",
    repoLink: "https://github.com/mich3ll3e/Group-3-Project-2",
  },
  {
    title: "My Team",
    pathname: "my-team",
    image: "/images/team.png",
    description: "Sports Team Management",
    technologies: [react, node, express, mongo, bootstrap],
    appLink: "https://group2-project3.herokuapp.com/",
    repoLink: "https://github.com/LaithAlwani/project3-group2",
  },
  {
    title: "Movie Search",
    pathname: "movie-search",
    image: "/images/moiveSearch.png",
    description:
      "Provides details to a certian movie title and displays related movies",
    technologies: [html, css, javaScript, uikit],
    appLink: "https://laithalwani.github.io/movie-search",
    repoLink: "https://github.com/LaithAlwani/movie-search",
  },
  {
    title: "Paletta Studio",
    pathname: "paletta-studio",
    image: "/images/paletta.png",
    description: "A digital media company that produces educational apps",
    technologies: [node, express, html, css, javaScript, uikit],
    appLink: "http://www.paletta-studio.com/",
    repoLink: "https://github.com/LaithAlwani/paletta-studio",
  },
  {
    title: "Weather Dashboard",
    pathname: "weather-dashboard",
    image: "/images/weather-dashboard.png",
    description:
      "provides current weather details and 5 days forecast for a specific city",
    technologies: [html, css, javaScript, uikit],
    appLink: "https://laithalwani.github.io/weather-dashboard",
    repoLink: "https://github.com/LaithAlwani/weather-dashboard",
  },
  {
    title: "Work Day Scheduler",
    pathname: "workday",
    image: "/images/workday.png",
    description: "setting meetings and appointments and orginize the day",
    technologies: [html, css, javaScript, bootstrap],
    appLink: "https://laithalwani.github.io/work-day-scheduler",
    repoLink: "https://github.com/LaithAlwani/work-day-scheduler",
  },
];

export default Projects;
