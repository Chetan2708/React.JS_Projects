import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaGraduationCap,
  FaBriefcase,

} from "react-icons/fa";

import Theme1 from './colors/purple.png';
import Theme2 from './colors/red.png';
import Theme3 from './colors/blueviolet.png';
import Theme4 from './colors/blue.png';
import Theme5 from './colors/goldenrod.png';
import Theme6 from './colors/magenta.png';
import Theme7 from './colors/yellowgreen.png';
import Theme8 from './colors/orange.png';
import Theme9 from './colors/green.png';
import Theme10 from './colors/yellow.png';

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav-icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav-icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Projects",
    icon: <FaFolderOpen className="nav-icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav-icon" />,
    path: "/contact",
  },
];

export const myinfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Chetan",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Gupta",
  },

  {
    id: 3,
    title: "Age : ",
    description: "20 Yrs",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },
  {
    id: 5,
    title: "Address : ",
    description: "Jammu",
  },
  {
    id: 6,
    title: "Language : ",
    description: "English",
  },
];
export const mystats = [
  {
    id: 1,
    no: "2+",
    title: "Years of <br /> Experience",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "85",
  },

  
  {
    id: 2,
    title: "Css",
    percentage: "80",
  },
  {
    id: 3,
    title: "Javascript",
    percentage: "85",
  },

  {
    id: 4,
    title: "ReactJS",
    percentage: "90",
  },
  {
    id: 5,
    title: "Wordpress",
    percentage: "70",
  },
  {
    id: 6,
    title: "Python",
    percentage: "85",
  },
  {
    id: 7,
    title: "C/C++",
    percentage: "80",
  },


  {
    id: 8,
    title: "Flutter",
    percentage: "70",
  },
];
export const timeline = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: "July 2022 - August 2022",
    title: 'Python/Django <span> ThinkNext </span>',
    desc: 'As an intern at ThinkNext, I had the opportunity to learn Python for the first time after having experience in C and C++. During my time at ThinkNext, I was able to gain practical experience by working on various projects on python.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'March 2023 - Present',
    title: 'App Devlopmenmt <span> M.I.E.T , Jammu  </span>',
    desc: 'Currently interning under my college director, working on an app development project. Gaining practical experience in software development, particularly in mobile app development using flutter.',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020',
    title: ' B.tech(C.S.E)<span> M.I.E.T Jammu  </span>',
    desc: "I am pursuing my B.Tech degree from Model Institute of Engineering and Technology and I am expected to graduate in 2024.",
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2012 - 2020',
    title: 'School <span> Delhi Public School , Jammu </span>',
    desc: 'I completed my high school education in 2020 from DPS Jammu. ',
  },

];
export const projects = [
    {
      date: "07/10/2022",
      title: "Asmr Programmer",
      description: "A website for my youtube channel where I'll be posting content related to coding and help beginners. ",
      url: "https://reactone-pearl.vercel.app/",
      imgSrc: "https://reactone-pearl.vercel.app/static/media/vg.d84460f48e7775ab6858.png"
    },
    {
      date: "15/10/2022",
      title: "Crypto TraderHQ",
      description: "The project is a guide web-app for people interested in trading, specifically in the cryptocurrency market using API.",
      url: "https://coin-trader-hq.vercel.app/",
      imgSrc: "https://coin-trader-hq.vercel.app/static/media/btc1.f6366255cb4bec4ca520.jpg"
    },

    {
      date: "11/10/2022",
      title: "Gym-Guide",
      description: "The gym guide web-app that gives information on gym equipment, exercises, and muscles using API.",
      url: " ",
      imgSrc: "https://static.toiimg.com/thumb/msid-77851322,imgsize-533870,width-400,resizemode-4/77851322.jpg"
    },
    {
      date: "17/10/2022",
      title: "REACT CART",
      description: "The React Cart project to understand Add to Cart functionality using Redux Toolkit and local storage. ",
      url: "https://cart-ruddy.vercel.app/",
      imgSrc: "https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470_960_720.jpg"
    },
    {
      date: "20/10/2022",
      title: "PORTFOLIO",
      description: "An interactive website that highlights my work in a compelling way to demonstrate my abilities and attract new opportunities.",
      url: "/",
      imgSrc: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80"
    }
  ];

  export const themes = [
    {
      id: 1,
      img: Theme1,
      color: 'rgb(104, 86, 174)',
    },
  
    {
      id: 2,
      img: Theme2,
      color: 'hsl(4, 93%, 54%)',
    },
  
    {
      id: 3,
      img: Theme3,
      color: 'hsl(271, 76%, 53%)',
    },
  
    {
      id: 4,
      img: Theme4,
      color: 'hsl(225, 73%, 57%)',
    },
  
    {
      id: 5,
      img: Theme5,
      color: 'hsl(43, 74%, 49%)',
    },
  
    {
      id: 6,
      img: Theme6,
      color: 'hsl(339, 81%, 66%)',
    },
  
    {
      id: 7,
      img: Theme7,
      color: 'hsl(80, 61%, 50%)',
    },
  
    {
      id: 8,
      img: Theme8,
      color: 'hsl(19, 96%, 52%)',
    },
  
    {
      id: 9,
      img: Theme9,
      color: 'hsl(88, 65%, 43%)',
    },
  
    {
      id: 10,
      img: Theme10,
      color: 'hsl(42, 100%, 50%)',
    },
  ];
  