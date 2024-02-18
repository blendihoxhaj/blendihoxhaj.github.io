import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  rathgeber,
  ecolog,
  erkoware,
  searching,
  erkowareWebsite,
  vuejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Vue Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 
];

const experiences = [
  {
    title: "Production Worker",
    company_name: "RATHGEBER GmbH & Co. KG",
    icon: rathgeber,
    iconBg: "#383E56",
    date: "April 2018 - March 2019",
    points: [
      "Assisted in the stamping process of aluminum signs, ensuring precision and quality in the final products.",
      "Supported the quality control process by inspecting finished products for compliance with company standards and design specifications.",
      "Conducted basic maintenance and cleaning of the stamping machine to prevent downtime and preserve the machinery's longevity.",
    ],
  },
  {
    title: "Swab-Taker / Admin",
    company_name: "Ecolog International",
    icon: ecolog,
    iconBg: "#FFFFFF",
    date: "March 2021 - December 2022",
    points: [
      "Administrative duties in the area of customer reception.",
      "Collection of samples and subsequent evaluation of test results.",
      "Check-in of customers including accurate recording of customer data.",
      "Adherence to strict hygiene guidelines.",
      "Delivering prompt customer support by resolving inquiries"
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "erkoware solutions GmbH",
    icon: erkoware,
    iconBg: "#FFFFFF",
    date: "October 2023 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Seeking for Working Student Position",
    icon: searching,
    iconBg: "#FFFFFF",
    date: "Availability: Starting April 2023",
    points: [ 
      
    ],
  },
];


const projects = [
  {
    name: "erkoware Website",
    description:
      "I transformed the company's website with a complete redesign, prioritizing user experience and a modern design. I translated the crafted interface from Figma into a live website, bridging the gap between design and development.",
    tags: [
      {
        name: "Webflow",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: erkowareWebsite,
    source_code_link: "https://www.erkoware.de/",
  },
  
];

export { services, technologies, experiences, projects };
