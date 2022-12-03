import emoji from "react-easy-emoji";

export const greetings = {
  name: "Nischal Tripathi",
  title: "Hi all, I'm Nish",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with React.js, Node Js, Vue.Js & MongoDB.",
  resumeLink:
    "https://drive.google.com/file/d/1tLd9I0SX0UtD-d3VoIZlId5bA21-i6hX/view?usp=sharing",
};

export const openSource = {
  githubUserName: "nischaltripathi",
};

export const contact = {};

export const socialLinks = {
  url: "https://1hanzla100.github.io/",
  linkedin: "https://www.linkedin.com/in/nischal-tripathi-188a92a4/",
  github: "https://github.com/nischaltripathi",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "vscode-icons:file-type-django",
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working on multiple cloud platforms"),
        emoji(
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
        ),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "logos:heroku-icon",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "logos:github-actions",
        },
        {
          skillName: "Cloudinary",
          fontAwesomeClassname: "logos:cloudinary",
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "logos:nginx",
        },
        {
          skillName: "Sentry",
          fontAwesomeClassname: "logos:sentry-icon",
        },
      ],
    },
  ],
};

export const educationInfo = [
  {
    schoolName: "The University of Adelaide",
    subHeader: "Bachelor of Computer Science",
    major: "Major: Cybersecurity",
    duration: "Feb 2019 - Nov 2022",
    grade: "GPA 5.2",
  },
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "HuddleCo, Adelaide",
    companylogo: "/huddleco_logo.jfif/",
    date: "Apr 2022 – Jun 2022",
    desc: "I worked on a number of projects as a Full Stack Developer. I Made a Funnel Chart widget using React Js and MondaySDK. I also  made a website that adds a new functionality to Huddle’s API. Currently, I am working on making a Scraping Bot using Puppeteer and Node JS that helps in getting data from a website to a board.",
  },
];

export const projects = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "AtlasMart",
    desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
    github: "https://github.com/1hanzla100/Django-React-Marketplace",
  },
  {
    name: "Technota (Forum)",
    desc: "Get hands-on experience in technical skills with Technota",
    github: "https://github.com/1hanzla100/django-react-forum",
  },
  {
    name: "Shopaza (Ecommerce)",
    desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
    github: "https://github.com/1hanzla100/Django-ecommerce",
  },
];

// See object prototype on SEO.jsx page
export const seoData = {
  title: "Nischal",
  description:
    "A passionate Full Stack Web Developer.",
  author: "Nischal Tripathi",
  image: "https://avatars.githubusercontent.com/u/79689028?v=4",
};
