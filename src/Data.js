import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

import { FiFileText, FiUser, FiCode } from "react-icons/fi";
import { RiShareForwardBoxFill } from "react-icons/ri";
import webpage from "./assets/webpage.png";
import srms from "./assets/srms.png";
import photo from "./assets/photo.jpg";
import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/orange.png";
import Theme5 from "./assets/yellow.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/goldenrod.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav-icon" />,
    path: "/",
  },
  {
    id: 1,
    name: "About",
    icon: <FaUser className="nav-icon" />,
    path: "/about",
  },
  {
    id: 1,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav-icon" />,
    path: "/portfolio",
  },
  {
    id: 1,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav-icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "Firstname:",
    description: "krishna",
  },
  {
    id: 2,
    title: "Lastname:",
    description: "reddy",
  },
  {
    id: 3,
    title: "Age:",
    description: "26 Y",
  },
  {
    id: 4,
    title: "Nationalit:",
    description: "Indian",
  },
  {
    id: 5,
    title: "CIty:",
    description: "Tirupati",
  },
  {
    id: 6,
    title: "Address:",
    description: "SLPT",
  },
  {
    id: 7,
    title: "Phone:",
    description: "xxxxxxx99",
  },
  {
    id: 8,
    title: "Email:",
    description: "xxxxxxhna@gmail.com",
  },
  {
    id: 9,
    title: "Qualification:",
    description: "B.Tech",
  },
  {
    id: 10,
    title: "Company:",
    description: "TCS",
  },
];

export const stats = [
  {
    id: 1,
    no: "1.8+",
    title: "Years of <br/> Experience",
  },
  {
    id: 2,
    no: "2+",
    title: "Completed <br/> Projects",
  },
  {
    id: 3,
    no: "73 %",
    title: "B.Tech <br/> Percentage",
  },
  {
    id: 4,
    no: "5",
    title: "Members of <br/> family",
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
    percentage: "80",
  },
  {
    id: 2,
    title: "CSS",
    percentage: "70",
  },
  {
    id: 3,
    title: "BOOTSTRAP",
    percentage: "60",
  },
  {
    id: 4,
    title: "JAVASCRIPT",
    percentage: "40",
  },
  {
    id: 5,
    title: "GIT",
    percentage: "50",
  },
  {
    id: 6,
    title: "REACT JS",
    percentage: "50",
  },
  {
    id: 7,
    title: "AZURE API",
    percentage: "70",
  },
  {
    id: 8,
    title: "AZURE VMs",
    percentage: "55",
  },
];

export const resume = [
  {
    id: 1,
    category: "Experience",
    icon: <FaBriefcase />,
    year: "2021-Present",
    title: "API Developer",
    description:
      "Creating API from Ingress Url and Testing in Application Insights",
  },
  {
    id: 2,
    category: "Education",
    icon: <FaGraduationCap />,
    year: "2016-2020",
    title: "Bachelor of Technology  --  Audisankara Institute of Technology",
    description: "Computer Science & Engineering",
  },
  {
    id: 3,
    category: "Education",
    icon: <FaGraduationCap />,
    year: "2014-2016",
    title: "Intermediate  --  Narayana Jr College",
    description: "Mathematics Physics & Chemistry",
  },
  {
    id: 4,
    category: "Education",
    icon: <FaGraduationCap />,
    year: "2013-2014",
    title: "X- Class  --  Holy Cross High School",
    description: "EM High School",
  },
];

export const portfolio = [
  {
    id: 1,
    img: webpage,
    title: "My Profile",
    details: [
      {
        icon: <FiFileText />,
        title: "project :",
        description: "website",
      },
      {
        icon: <FiUser />,
        title: "client :",
        description: "personal",
      },
      {
        icon: <FiCode />,
        title: "Language :",
        description: "reactjs",
      },
      {
        icon: <RiShareForwardBoxFill />,
        title: "preview",
        description: "krishnareddy.com",
      },
    ],
  },
  {
    id: 2,
    img: srms,
    title: "SRMS",
    details: [
      {
        icon: <FiFileText />,
        title: "project :",
        description: "website",
      },
      {
        icon: <FiUser />,
        title: "client :",
        description: "college project",
      },
      {
        icon: <FiCode />,
        title: "Language :",
        description: "php",
      },
      {
        icon: <RiShareForwardBoxFill />,
        title: "preview",
        description: "srms.com",
      },
    ],
  },
  {
    id: 3,
    img: photo,
    title: "photo editing",
    details: [
      {
        icon: <FiFileText />,
        title: "project :",
        description: "photoshoot",
      },
      {
        icon: <FiUser />,
        title: "client :",
        description: "personal",
      },
      {
        icon: <FiCode />,
        title: "Language :",
        description: "Adobe photoshop",
      },
      {
        icon: <RiShareForwardBoxFill />,
        title: "preview",
        description: "App",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252,35%,51%)",
  },
  {
    id: 2,
    img: Theme2,
    color: "hsl(4,93%,54%)",
  },
  {
    id: 3,
    img: Theme3,
    color: "hsl(271,76%,53%)",
  },
  {
    id: 4,
    img: Theme4,
    color: "hsl(225,73%,57%)",
  },
  {
    id: 5,
    img: Theme5,
    color: "hsl(43,74%,49%)",
  },
  {
    id: 6,
    img: Theme6,
    color: "hsl(339,81%,66%)",
  },
  {
    id: 7,
    img: Theme7,
    color: "hsl(80,61%,50%)",
  },
  {
    id: 8,
    img: Theme8,
    color: "hsl(19,96%,52%)",
  },
  {
    id: 9,
    img: Theme9,
    color: "hsl(88,65%,43%)",
  },
  {
    id: 10,
    img: Theme10,
    color: "hsl(225,73%,57%)",
  },
];
