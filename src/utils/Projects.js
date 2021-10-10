const uikit = "/icons/uikit.png";
const html = "/icons/html.png";
const bootstrap = "/icons/bootstrap.png";
const css = "/icons/css.png";
const javaScript = "/icons/javascript.png";
const mongo = "/icons/mongo.png";
const node = "/icons/node.png";
const react = "/icons/react.png";
const express = "/icons/exjs.png";
const firebase = "/icons/firebase.png";
const mui = "/icons/mui.png";


const Projects = [
  {
    title: "Chats 'R' Us",
    pathname: "chatsrus",
    image: "/images/chatsrus.avif",
    description: "Real time chat app",
    technologies: [react, firebase, mui],
    appLink: "https://chats-r-us.firebaseapp.com/",
    repoLink: "https://github.com/LaithAlwani/react-ChatRUs",
  },
  {
    title: "My Team",
    pathname: "my-team",
    image: "/images/myTeam.avif",
    description: "Sports Team Management",
    technologies: [react, node, express, mongo, bootstrap],
    appLink: "https://group2-project3.herokuapp.com/",
    repoLink: "https://github.com/LaithAlwani/project3-group2",
  },
  {
    title: "Movie Search",
    pathname: "movie-search",
    image: "/images/moiveSearch.avif",
    description:
      "Provides details to a certian movie title and displays related movies",
    technologies: [html, css, javaScript, uikit],
    appLink: "https://laithalwani.github.io/movie-search",
    repoLink: "https://github.com/LaithAlwani/movie-search",
  },
];

export default Projects;
