import {
  soft,
  data,
  sqa,
  ml,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  docker,
  stamford,
  ipsita,
  java,
  facial,
  gallery,
  postgres,
  linux,
} from "../assets";

import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const socialMediaLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/xayed/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/jayeeed",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/jayed.shibli/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/xaayed",
  },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const prime = ["Machine Learning", "Web Development."];

const pop = ["Eficient", "Scalable", "User-Friendly"];

const skills = [
  "TensorFlow",
  "PyTorch",
  "Python",
  "Computer Vision",
  "Business Intelligence Tools",
  "Data Analysis",
  "Data Visualization",
  "JavaScript",
  "ReactJS",
  "NodeJS",
  "Express",
  "MongoDB",
  "MySQL",
  "Postgres",
  "Big Data",
  "Kubernetes",
  "AWS",
  "GCP",
  "Azure",
  "Firebase",
  "REST API",
  "Docker",
  "ETL",
  "CI/CD",
  "DevOps",
  "Agile Methodology",
  "Scrum Framework",
  "PM Tolls",
  "GitHub",
  "GitLab",
  "Nginx",
  "Linux OS",
];

const services = [
  {
    title: "Machine Learning",
    icon: ml,
  },
  {
    title: "Software Development",
    icon: soft,
  },
  {
    title: "Data Analysis & Business Intelligence",
    icon: data,
  },
  {
    title: "Software Quality Assurance",
    icon: sqa,
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
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Linux",
    icon: linux,
  },
];

const experiences = [
  {
    title: "Research Assistant",
    company_name: "Stamford University Bangladesh",
    icon: stamford,
    iconBg: "#FFFFFF",
    date: "January 2021 - February 2023",
    points: [
      "Done research program on Artificial Intelligence and Machine Learning.",
      "Collaborating with felow associates on various discussion on ML/AI research works.",
      "Implementing ML/AI models, tuning and tweaking for ensuring most effective results.",
      "Participating in paper reviews and providing constructive feedback to felow researchers.",
    ],
  },
  {
    title: "Jr. Software Engineer",
    company_name: "Ipsita Computers Pte Ltd",
    icon: ipsita,
    iconBg: "#FFFFFF",
    date: "July 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Incredible AI solutions! Transformed my business. Seamless collaboration and top-notch software development. Highly recommend!",
    name: "Leonard Coleman",
    designation: "CFO",
    company: "ABC Solutions",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    testimonial:
      "Outstanding AI/ML development! Elevated our tech game. Remarkable software solutions delivered with brilliance. A must-have partner!",
    name: "William Harris",
    designation: "COO",
    company: "MNO Software",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    testimonial:
      "Exceptional software expertise! Crafted innovative AI solutions exceeding expectations. Professionalism and precision shine in every project.",
    name: "Christopher Brown",
    designation: "CTO",
    company: "XYZ Studioes",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
  },
];

const projects = [
  {
    name: "E-Requisition",
    description: `Java-based user-friendly GUI app that allows users to create, edit, delete, print, complex calculations and many more.
       Providing a convenient and efficient solution for requisition management.`,
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "swing",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: java,
    source_code_link:
      "https://github.com/xy3d/Requisition-Statement-Log-with-print-receipt-func-JAVA",
  },
  {
    name: "Facial Attendance",
    description: `Web application that enables an organization to track and maintain attendance of it's employees with various kind
       of functionalities such as- absense, in/out time, total time and many more.`,
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "cv2",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: facial,
    source_code_link: "https://github.com/xy3d/FacialAttendance",
  },
  {
    name: "Photo Gallery",
    description: `A fully responsive web application that can view images, sort their positions, delete individually or multiples,
       upload images and other essential functionalities in a very modern fashion photo gallery structure.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gallery,
    source_code_link: "https://github.com/jayeeed/Ollyo-Gallery",
  },
];

const botcontext = {
  systemMessage: {
    role: "user",
    content: `
      Deliver below "#All informations about me" to the visitors, talk like I am talking to them:
      Note: if visitor say ("you"/"yourself"/"your"/"your's"/"yours") or anything indicating about "you" that means "me"(Jayed Bin Jahangir).

      ###################################
      sample question: what's your name?
      sample answer: Jayed Bin Jahangir.
      ###################################

      # All informations about me:

        Name: Jayed Bin Jahangir
        Nick Name: Shibli. (dont use it until someone type "shibli" on the chat!)
        Designation: Software Engineer

        Contact: 
        - Address: 683/10/B, North Kafrul, Dhaka, Bangladesh
        - Phone: +8801756260844
        - Email: jayedhinjahangir@gmail.com

        Web Links: 
        - GitHub: https://github.com/jayeeed
        - LinkedIn: https://www.linkedin.com/in/xayed
        - Portfolio: https://xy3d.netlify.app/
        - Code: https://leetcode.com/jayed990

        Skills: 
        - Artificial Intelligence
        - Machine Learning
        - Business Intelligence
        - Research
        - React Js
        - NodeJs
        - Django
        - Flask
        - Mongo
        - Postgres
        - IoT
        - CI/CD
        - ETL
        - Linux OS

        Career Objective: 
        AI and Machine Learning specialist with a focus on advancing solutions. Dedicated to researching, developing,
        and implementing cutting-edge algorithms. Proficient in the MERN stack, particularly adept at leveraging React for front-end development.
        Committed to creating intelligent systems that enhance efficiency, decision-making, and user experiences, while staying at the forefront of AI advancements.

        Experience:
        - Company: Ipsita Computers Pte Ltd.
          Designation: Jr. Software Engineer
          Duration: 2023 - Now
          Responsibilities:
          - Supported AI/ML model development, ensuring effective implementation.
          - Contributed to algorithm research and development, optimizing model efficiency.
          - Evaluated model performance, iteratively improving accuracy and effectiveness.
          - Utilized React for front-end and Django for back-end development.
          - Integrated MongoDB/PostgreSQL for robust and scalable databases.

        Education:
        - Degree: Bachelor of Science in Computer Science and Engineering
          Institution: Stamford University, Bangladesh
          Duration: 2018-2023
          CGPA: 3.01 out of 4.00
          Thesis and Research: AI/ML, Software Engineering

        - Degree: Higher Secondary School Certificate in Science
          Institution: Bangladesh Nou Bahini College
          Duration: 2014-2016
          GPA: 4.42 out of 5.00

        - Degree: Secondary School Certificate in Science
          Institution: Bangladesh Nou Bahini School
          Duration: 2014-2016
          GPA: 5.00 out of 5.00
            `,
  },
};

export {
  skills,
  prime,
  pop,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialMediaLinks,
  botcontext,
};
