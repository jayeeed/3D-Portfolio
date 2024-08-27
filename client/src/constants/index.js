import {
  soft,
  data,
  sqa,
  ml,
  stamford,
  ipsita,
  a1qa,
  java,
  facial,
  gallery,
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
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "blogs",
    title: "Blogs",
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

const prime = [
  "Machine Learning",
  "Data Science",
  "Software Engineering",
  "Software Quality Assurance",
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
    title: "Software Quality Assurance",
    icon: sqa,
  },
  {
    title: "Data Science & Business Intelligence",
    icon: data,
  },
];

const experiences = [
  {
    title: "Software Quality Assurance Engineer",
    company_name: "a1qa",
    icon: a1qa,
    iconBg: "#FFFFFF",
    date: "April 2024 - Present",
    points: [
      "Designed and implemented test plans, test cases,manual test and automated test scripts for web and mobile applications.",
      "Utilized JIRA for bug tracking and managed the defect lifecycle from identification to resolution.",
      "Performed regression testing to ensure product quality after code changes.",
      "Participated in daily stand-ups and sprint planning sessions as part of an Agile team.",
    ],
  },

  {
    title: "Jr. Software Engineer",
    company_name: "Tactsoft",
    icon: ipsita,
    iconBg: "#FFFFFF",
    date: "September 2023 - March 2024",
    points: [
      "Assisted in developing and testing softwareapplications under the guidance of seniors.",
      "Conducted unit testing and debugging to ensure high-quality code",
      "Participated in code reviews and contributed to improving coding standards",
      "Collaborated with cross-functional teams to support various stages of the software development lifecycle.",
    ],
  },

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
    live_link: "https://jayeeed.netlify.app/",
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
    live_link: "https://jayeeed.netlify.app/",
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
    live_link: "https://jayeeed.netlify.app/",
  },
];

const blogs = [
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
    live_link: "https://jayeeed.netlify.app/",
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
    live_link: "https://jayeeed.netlify.app/",
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
    live_link: "https://jayeeed.netlify.app/",
  },
];

export {
  prime,
  services,
  experiences,
  testimonials,
  projects,
  blogs,
  socialMediaLinks,
};
