import headerMainPage from"../Images/HeaderMainPage.png";
import tecSolutionBlog from"../Images/tecSolutionBlog.png";
import tecSolutionProjects from"../Images/tecSolutionProjects.png";
import tecSolutionPriceing from"../Images/tecSolutionPriceing.png";
import tecSolutionContact from"../Images/tecSolutionContact.png";
import doctorsPortal from "../Images/doctorsPortal.png";
import doctorsPortalTestimonial from"../Images/doctorsPortalTestimonial.png";
import DoctorsPortalContact from"../Images/DoctorsPortalContact.png";
import doctorsPortalServices from"../Images/doctorsPortalServices.png";
import projectImg1 from"../Images/projects/CowFirmBanner.png";
import projectImg2 from"../Images/projects/CowFirmAbout.png";
import projectImg3 from"../Images/projects/cowFirmBlog.png";
import projectImg4 from"../Images/projects/CowFirmFooter.png";
import projectImg5 from"../Images/projects/digitalBusinessCardheader.png";
import projectImg6 from"../Images/projects/digitalBusinessCardMap.png";
import projectImg7 from"../Images/projects/digitalBusinessCardVideo.png";
import projectImg8 from"../Images/projects/freshvallyImg1.png";
import projectImg9 from"../Images/projects/freshvallyImg2.png";
import projectImg10 from"../Images/projects/freshvallyImg3.png";
import projectImg11 from"../Images/projects/sportsTeamImg1.png";
import projectImg12 from"../Images/projects/sportsTeamImg2.png";

import {faGithub, } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
export const myProject = [
  {
    images: [
      {img:headerMainPage},
      {img:tecSolutionBlog},
      {img:tecSolutionProjects},
      {img:tecSolutionPriceing},
      {img:tecSolutionContact},
    ],
    title: "Tec Solutions",
    description:
      "A Single page web app where show up about a agency services a user can know their services",
    gitIcon:faGithub,
    linkIcon:faExternalLinkAlt,
    items: [
      { item: "React.js" },
      { item: "Sass" },
      { item: "Swiper.js" },
      { item: "Class Component" },
      { item: "Bootstrap5" },
    ],
    gitLink:"https://github.com/rajuahmmadhridoy/SamarClint",
    liveLink:"https://tecsolutions-bc016.web.app/"
  },
  {
    images: [
      {img:doctorsPortal},
      {img:doctorsPortalTestimonial},
      {img:DoctorsPortalContact},
      {img:doctorsPortalServices},
    ],
    title: "Doctor's Portal",
    description:
      "A Single page web app with dashboard where people can pick the date and time and fix an appointment. A doctor can review his appointments and prescribe medicine to a Patient from his dashboard .",
    gitIcon:faGithub,
    linkIcon:faExternalLinkAlt,
    items: [
      { item: "React.js" },
      { item: "Node.js" },
      { item: "Express.js" },
      { item: "MongoDB" },
      { item: "Bootstrap5" },
    ],
    gitLink:"https://github.com/rajuahmmadhridoy/DoctorsClint",
    liveLink:"https://github.com/rajuahmmadhridoy/DoctorsClint"
  },
  {
    images: [
      {img:projectImg1},
      {img:projectImg2},
      {img:projectImg3},
      {img:projectImg4},
    ],
    title: "Cow Firm",
    description:
      "A Single page web app  a customar can know abour all services if he or are interest then he or she take her/his service.",
    gitIcon:faGithub,
    linkIcon:faExternalLinkAlt,
    items: [
      { item: "HTML" },
      { item: "SCSS" },
      { item: "Bootstrap" },
    ],
    gitLink:"https://github.com/rajuahmmadhridoy/CowFirmClintSite",
    liveLink:"https://rajuahmmadhridoy.github.io/CowFirmClintSite/"
  },
  {
    images: [
      {img:projectImg5},
      {img:projectImg6},
      {img:projectImg7},
    ],
    title: "Digital Business Card",
    description:
      "Digital Business Card it carry data about a person her business,servicess details everythings",
    gitIcon:faGithub,
    linkIcon:faExternalLinkAlt,
    items: [
      { item: "HTML" },
      { item: "SCSS" },
      { item: "Bootstrap" },
    ],
    gitLink:"https://github.com/rajuahmmadhridoy/DigitalBusinessCard",
    liveLink:"https://rajuahmmadhridoy.github.io/DigitalBusinessCard"
  },
  {
    images: [
      {img:projectImg8},
      {img:projectImg9},
      {img:projectImg10},
    ],
    title: "FreshVally",
    description:
      "A Single page ecommerce web site here a customar can buy her choice product and admin can add product, delate product and edit product etc.",
    gitIcon:faGithub,
    linkIcon:faExternalLinkAlt,
    items: [
      { item: "HTML" },
      { item: "CSS" },
      { item: "React.js" },
      { item: "Node.js" },
      { item: "Express.js" },
      { item: "MongoDB" },
    ],
    gitLink:"https://github.com/rajuahmmadhridoy/freshvally",
    liveLink:"https://freshvally-f5605.web.app/"
  },
  {
    images: [
      {img:projectImg11},
      {img:projectImg12},
    ],
    title: "Sports Team Detail",
    description:
      "This web site use to know about all details about of tems.",
    gitIcon:faGithub,
    linkIcon:faExternalLinkAlt,
    items: [
      { item: "HTML" },
      { item: "CSS" },
      { item: "Bootstrap" },
      { item: "React.js" },
    ],
    gitLink:"https://github.com/rajuahmmadhridoy/SportsTeam",
    liveLink:"https://allsportsteam.netlify.app/leaguelist/4646"
  },
];
