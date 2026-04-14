import type { Project, SocialLink } from "./types";

export const personalInfo = {
  name: "Laith Alwani",
  title: "Frontend Developer",
  headline: "I build things for the web.",
  subheadline:
    "Frontend developer focused on creating fast, accessible, and beautiful digital experiences.",
  bio: [
    "I'm a full stack developer passionate about building products that live at the intersection of elegant design and robust engineering.",
    "I care deeply about user experience, performance, and shipping software that makes an actual difference.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.",
  ],
  email: "laithalwani@gmail.com", // ← Replace with your email
  location: "Ottawa, Canada", // ← Replace
  available: true,
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/LaithAlwani", // ← Replace
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/laith-alwani", // ← Replace
    icon: "linkedin",
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: "email",
  },
];

export const skills = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "Node.js",
  "Python",
  "Open AI",
  "Mongodb",
  "Convex",
  "AWS",
  "Tailwind CSS",
  "GraphQL",
  "REST APIs",
];

export const projects: Project[] = [
  {
    slug: "meepletron",
    title: "Meepletron",
    description: `Meepletron is a Next.js-based web application that combines OpenAI’s Gemini model with MongoDB via Mongoose to create intelligent, dynamic content experiences for users. Designed and developed by Laith Alwani, it leverages modern AI and full-stack architecture to deliver responsive, data-driven interaction.`,
    longDescription: `
Meepletron is an innovative web platform built using Next.js, OpenAI’s Gemini API, and MongoDB powered by Mongoose. Developed by Laith Alwani, this project showcases the seamless integration of AI with robust backend development. The application uses Gemini to generate intelligent responses and personalized content dynamically, while Mongoose ensures efficient data modeling and storage.
Created as both a learning experiment and a functional prototype, Meepletron highlights full-stack proficiency covering front-end design, server-side logic, and database management. The project demonstrates Laith’s ability to combine cutting-edge technologies to craft responsive, scalable, and AI-enhanced user experiences for modern web environments.
`,
    tags: ["Next.js", "TypeScript", "Open AI", "Gemini", "Mongodb", "Clerk", "AWS"],
    github: "https://github.com/LaithAlwani/meepletron",
    live: "https://meepletron.com",
    featured: true,
    year: 2024,
  },
  {
    slug: "project-beta",
    title: "Project Beta",
    description:
      "An open source CLI tool that automates development workflows and saves teams hours every week.",
    longDescription: `Project Beta is a CLI tool built with Python that automates repetitive development workflows. It integrates with GitHub, Jira, and Slack to keep everything in sync automatically.

The tool has been adopted by dozens of teams and has a growing open source community. It handles configuration through a simple YAML file and supports plugins for custom workflows.`,
    tags: ["Python", "CLI", "Docker", "GitHub API"],
    github: "https://github.com/your-username/project-beta",
    featured: true,
    year: 2024,
  },
  {
    slug: "project-gamma",
    title: "Project Gamma",
    description: `Meepletron is a Next.js-based web application that combines OpenAI’s Gemini model with MongoDB via Mongoose to create intelligent, dynamic content experiences for users. Designed and developed by Laith Alwani, it leverages modern AI and full-stack architecture to deliver responsive, data-driven interaction.`,
    longDescription: `
Meepletron is an innovative web platform built using Next.js, OpenAI’s Gemini API, and MongoDB powered by Mongoose. Developed by Laith Alwani, this project showcases the seamless integration of AI with robust backend development. The application uses Gemini to generate intelligent responses and personalized content dynamically, while Mongoose ensures efficient data modeling and storage.
Created as both a learning experiment and a functional prototype, Meepletron highlights full-stack proficiency covering front-end design, server-side logic, and database management. The project demonstrates Laith’s ability to combine cutting-edge technologies to craft responsive, scalable, and AI-enhanced user experiences for modern web environments.

The AI recommendation engine is built with Python and served as a microservice. The checkout flow was redesigned from scratch, reducing cart abandonment by 30%.`,
    tags: ["Next.js", "Python", "Stripe", "PostgreSQL"],
    github: "https://github.com/your-username/project-gamma",
    live: "https://project-gamma.example.com",
    featured: true,
    year: 2023,
  },
  {
    slug: "project-delta",
    title: "Project Delta",
    description:
      "A developer tool for visualizing and debugging complex data pipelines in real time.",
    longDescription: `Project Delta is a developer tool that provides a visual interface for monitoring data pipelines. Built with React Flow for graph visualization and WebSockets for real-time updates.

The backend ingests pipeline events and computes the current state of each node. Errors are surfaced immediately with full context for debugging.`,
    tags: ["React", "WebSockets", "Node.js", "GraphQL"],
    github: "https://github.com/your-username/project-delta",
    featured: false,
    year: 2023,
  },
];
