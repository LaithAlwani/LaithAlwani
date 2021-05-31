import chatsrus from "../images/chatsrus.jpeg";
import team from "../images/team.png"
import movieSearch from "../images/moiveSearch.png";
import paletta from "../images/paletta.png";
import weatherImage from "../images/weather-dashboard.png";
import workdaySheduler from "../images/workday.png";
import uikit from "../icons/uikit.png"
import html from "../icons/html.png"
import bootstrap from "../icons/bootstrap.png"
import css from "../icons/css.png"
import handlebars from "../icons/handlebars.png"
import javaScript from "../icons/javascript.png"
import mongo from "../icons/mongo.png"
import node from "../icons/node.png"
import react from "../icons/react.png"
import sequelize from "../icons/sequelize.png"
import express from "../icons/exjs.png"


const Projects = [
  {
    title: "Chats 'R' Us",
    pathname:"chatsrus",
    image: chatsrus,
    description: "Real time chat app",
    technologies: [node, express,sequelize ,bootstrap, javaScript, handlebars],
    appLink: "https://group-3-project-2.herokuapp.com",
    repoLink: "https://github.com/mich3ll3e/Group-3-Project-2",
  },
  {
    title: "My Team",
    pathname:"my-team",
    image: team,
    description: "Sports Team Management",
    technologies: [react, node, express, mongo],
    
    appLink: "https://group2-project3.herokuapp.com/",
    repoLink: "https://github.com/LaithAlwani/project3-group2",
  },
  {
    title: "Movie Search",
    pathname:"movie-search",
    image: movieSearch,
    description: "Provides details to a certian movie title and displays related movies",
    technologies: [html, css, javaScript, uikit],
    appLink: "https://laithalwani.github.io/movie-search",
    repoLink: "https://github.com/LaithAlwani/movie-search",
  },
  {
    title: "Paletta Studio",
    pathname:"paletta-studio",
    image: paletta,
    description: "A digital media company that produces educational apps",
    technologies: [node, express, html, css, javaScript, uikit],
    appLink: "http://www.paletta-studio.com/",
    repoLink: "https://github.com/LaithAlwani/paletta-studio",
  },
  {
    title: "Weather Dashboard",
    pathname:"weather-dashboard",
    image: weatherImage,
    description: "provides current weather details and 5 days forecast for a specific city",
    technologies: [html, css, javaScript, uikit],
    appLink: "https://laithalwani.github.io/weather-dashboard",
    repoLink: "https://github.com/LaithAlwani/weather-dashboard",
  },
  {
    title: "Work Day Scheduler",
    pathname:"workday",
    image: workdaySheduler,
    description: "setting meetings and appointments and orginize the day",
    technologies: [html, css, javaScript, bootstrap],
    appLink: "https://laithalwani.github.io/work-day-scheduler",
    repoLink: "https://github.com/LaithAlwani/work-day-scheduler",
  },
];

export default Projects;