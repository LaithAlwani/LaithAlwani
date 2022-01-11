const bootstrap = "/icons/bootstrap.png";
const mongo = "/icons/mongo.png";
const node = "/icons/node.png";
const react = "/icons/react.png";
const express = "/icons/exjs.png";
const firebase = "/icons/firebase.png";
const mui = "/icons/mui.png";
// const javaScript = "/icons/javascript.png";
// const uikit = "/icons/uikit.png";
// const html = "/icons/html.png";
// const css = "/icons/css.png";


const Projects = [
  {
    id:1,
    title: "Score Renovations",
    pathname: "score-renovations",
    image: "/images/score.png",
    description:
      "a construction company based in Ottawa ON.",
    technologies: [react, firebase, mui],
    appLink: "https://www.scorerenovation.com/",
    repoLink: "https://github.com/LaithAlwani/score-renovation",
  },
  {
    id:2,
    title: "Chats 'R' Us",
    pathname: "chatsrus",
    image: "/images/chatsRUs.png",
    description: "Real time chat app",
    technologies: [react, firebase, mui],
    appLink: "https://chats-r-us.firebaseapp.com/",
    repoLink: "https://github.com/LaithAlwani/react-ChatRUs",
  },
  {
    id:3,
    title: "My Team",
    pathname: "my-team",
    image: "/images/my-team.png",
    description: "Sports Team Management",
    technologies: [react, node, express, mongo, bootstrap],
    appLink: "https://group2-project3.herokuapp.com/",
    repoLink: "https://github.com/LaithAlwani/project3-group2",
  }
];

export default Projects;
