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
  KCLlogo,
  Terranovasoftware,
  Neighbourhoodtutorlogo,
  carrent,
  jobit,
  crypto,
  tripguide,
  threejs,
  Terranova,
  clucker,
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
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "LLM/AI Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "Javascript Creator",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Undergraduate Research Intern",
    company_name: "King's College London",
    icon: KCLlogo,
    iconBg: "#383E56",
    date: "Jun 2023 - Sep 2023",
    points: [
      "Conducted in-depth research on Human-Robot interactions, emphasizing Robot behaviours.",
      "Leveraged the Robot Operating System (ROS) to program and control robots, creating Python scripts to execute targeted tasks.",
      "Collaborated closely with a multidisciplinary team of researchers to analyze data, draw meaningful conclusions, and articulate research findings in a compelling and rigorous manner which were published.",
      "Acquired advanced skills in robotics programming, human-centered research methodologies, and data-driven decision-making throughout the internship.",
    ],
  },
  {
    title: "Vice-president",
    company_name: "King's College London Technology Society",
    icon: KCLlogo,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Apr 2025",
    points: [
      "Spearheaded a team of 12 members, leading meetings, and delegating tasks effectively to achieve society goals.",
      "Increased society membership by 300% through organized events",
    ],
  },
  {
    title: "Founder",
    company_name: "Neighbourhoodtutors",
    icon: Neighbourhoodtutorlogo,
    iconBg: "#383E56",
    date: "Feb 2024 - Present",
    points: [
      "Oversaw day-to-day business operations, including budgeting, marketing, and maintaining financial records",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Terranova Software",
    icon: Terranovasoftware,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Apr 2025",
    points: [
      "Collaborated with Terranova to develop a chatbot-based data analysis system for SMEs using React, Flask, LangChain, and LLaMA3",
      "Implemented natural language query handling, SQL/Pandas generation, data visualization, and export features",
      "Conducted performance testing (unit, manual, metamorphic), usability testing (SUS), and prompt-engineering improvements",
      "Delivered a 17,000-word dissertation outlining research, development, evaluation, and future work",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chatbot-based data analysis",
    description:
      "Built a chatbot-based data anlysis system for SMEs that converts Natural Language into SQL/Pandas code, which is then automatically executed against users uploaded database to find data, patterns or to visualize data. This can lastly be exported in users choice of format.",
    tags: [
      {
        name: "LLM",
        color: "blue-text-gradient",
      },
      {
        name: "LangChain",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: Terranova,
    source_code_link: "https://github.com/HarisK15/TerraNovaNewFinal",
  },
  {
    name: "Crypto Portfolio Tracker",
    description:
      "Built a full-featured cryptocurrency monitoring tool that allows users to track real-time prices, maintain a personalized watchlist, and view historical price trends. Integrated CoinGecko and GNews APIs for live market data and crypto-related news. Implemented price history visualization with Matplotlib and CSV export functionality. Designed a modular backend with caching to optimize API usage and reduce latency. Deployed the application for public access, with persistent storage of watchlists and price history.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "Crypto",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/HarisK15/Crypto_App",
  },
  {
    name: "Social Media app",
    description:
      "Designed a Social Media website, working as a Full-stack engineer, in a team of 5, where one can sign up, make posts and interact with other users",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: clucker,
    source_code_link: "https://github.com/HarisK15/TeamOrange",
  },
];

export { services, technologies, experiences, testimonials, projects };
