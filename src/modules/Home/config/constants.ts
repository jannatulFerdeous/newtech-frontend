
import { icons } from "@libs/Icons";

import choose_img from "../../../images/choose.jpg";
import work_process from "../../../images/work_process.jpg"; 

import monitor from "../../../images/Our_Service/monitor.png";
import laptop from "../../../images/Our_Service/laptop.png";
import tablet from "../../../images/Our_Service/tablet.png";
import desktop from "../../../images/Our_Service/desktop.png";
import motherboard from "../../../images/Our_Service/motherboard.png";
import psu from "../../../images/Our_Service/PSU.png";
import Switch from "../../../images/Our_Service/Switch.png";
import tv_panel from "../../../images/Our_Service/tv panel.png";
import speaker from "../../../images/Our_Service/Speaker.png";
import projector from "../../../images/Our_Service/projector.png";
import router from "../../../images/Our_Service/Router.png";
import inverter from "../../../images/Our_Service/invertor.png";
import scanner from "../../../images/Our_Service/Scanner.png";
import vga from "../../../images/Our_Service/vga.png";
import server from "../../../images/Our_Service/vga.png";
import printer from "../../../images/Our_Service/printer.png";
import ssd from "../../../images/Our_Service/ssd.png";
import slider1 from "../../../images/latest blog/image1.jpg"
import slider2 from "../../../images/latest blog/image2.jpg"
import slider3 from "../../../images/latest blog/Image3.jpg"

export const home_data = {
  /////////////////////////////////////////////////////////HERO////////////////////////////
  hero: {
    title: "The Best Choice for Laptop, Desktop PC & Apple Repair Services",
    description:
      "We are the exclusive repair center in Bangladesh with a state of the art lab fully equipped to carry out repairs of any kind of IT products.",

    button: {
      text: "Book a Service",
      link: "/repair-services",
    },
  },

  /////////////////////////////////////////////////WELCOME////////////////////////////////////
  welcome: {
    title: "Welcome to Newtech",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    button: {
      text: "CONTACT US",
      link: "/contact",
    },

    cards: [
      {
        icon: icons.comoputerRepair,
        title: "Free Diagnostic",
        description: "Lorem Ipsum has been the industry's standard dummy text",
      },
      {
        icon: icons.shieldSearch,
        title: "The best in quality",
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since  the 1500s",
      },
      {
        icon: icons.userRepair,
        title: "tested experience",
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
    ],
  },

//////////////////////////////////////////////////Choose US //////////////////////////////////////
choose_data: {
  image: choose_img,
  title: "WHY CHOOSE US", 
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  list: [
    {
      icon: icons.coin,
      title: "Save Money",
      
    },
    {
      icon: icons.watch,
      title: "Save Time",

    },
    {
      icon: icons.like,
      title: "Make a Difference",  
    },
    {
      icon: icons.computer,
      title: "Get Back to the Work",  
    },
    {
      icon: icons.peace,
      title: "Regain your Peace",  
    },
    

  ],
  button: {
    text: "Learn More",
    link: "#",
  },
},

////////////////////////////////////////////////OUR SERVICE ////////////////////////////
our_service : {
  title: "Our Service",
  description: "WE DO A LOT MORE THAN FIX COMPUTERS!", 
  service_list: [
    {
      image: monitor, 
      title: "Monitor", 
    },

    {
      image: laptop, 
      title: "Laptop", 
    }, 

    {
      image: tablet, 
      title: "Tablet", 
    },

    {
      image: desktop, 
      title: "Desktop", 
    },
    
    {
      image: motherboard, 
      title: "MotherBoard", 
    }, 

    {
      image: psu, 
      title: "PSU", 
    }, 

    {
      image: Switch, 
      title: "Switch", 
    }, 

    {
      image: tv_panel, 
      title: "TV Panel", 
    }, 

    {
      image: speaker, 
      title: "Speaker", 
    }, 
    {
      image: vga, 
      title: "VGA", 
    }, 
    {
      image: server, 
      title: "Server", 
    }, 
    {
      image: printer, 
      title: "Printer", 
    }, 
    {
      image: ssd, 
      title: "SSD", 
    }, 

  ],
  button: {
    text: "Learn More",
    link: "#",
  },
},
//////////////////////////////////////////////////////// WORK PROCESS/////////////////////////////////////////////

work_process : {
  title1: "OUR WORK PROCESS",
  title2: "How Does It Work",
  image: work_process,
  step_list:[
    {
      step:"Step 1.",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    },
    {
      step:"Step 2.",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    },
    {
      step:"Step 3.",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    },
    {
      step:"Step 4.",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    },
  ],
},
//////////////////////////////////////////////////////////////// lATEST BLOG ///////////////////////////////////////////////////
latest_blog: {
  title: "Our Latest Blog",
  card_list: [
    {
      caption: "How To Fix My PC That Won’t Turn On?", 
      description: "Everybody wants a computer that 'just works' without hassle, but speed and performance can only be ensured by regular computer ...",
      image: slider1,
      tags: ["Computer", "Repair"],
    },
    {
      caption: "Top 10 Essential Computer Maintenance Tips", 
      description: "Does your Gaming PC turn on, but there’s no display? Or perhaps your PC doesn’t turn on at all? When a computer doesn’t turn on, we...",
      image: slider2,
      tags: ["Computer", "Maintenance", "Tips"],
    },
    {
      caption: "10 Computer Repair Tips to Speed up Your Slow PC", 
      description: "No matter how expensive and sophisticated your computer is, it can slow down over time. That’s because all machines need regular repair and ...",
      image: slider3,
      tags: ["Computer", "Repair"],
    },
    {
      caption: "10 Computer Repair Tips to Speed up Your Slow PC", 
      description: "No matter how expensive and sophisticated your computer is, it can slow down over time. That’s because all machines need regular repair and ...",
      image: slider3,
      tags: ["Computer", "Repair"],
    },
    {
      caption: "How To Fix My PC That Won’t Turn On?", 
      description: "Everybody wants a computer that 'just works' without hassle, but speed and performance can only be ensured by regular computer ...",
      image: slider1,
      tags: ["Computer", "Repair"],
    },
    {
      caption: "10 Computer Repair Tips to Speed up Your Slow PC", 
      description: "No matter how expensive and sophisticated your computer is, it can slow down over time. That’s because all machines need regular repair and ...",
      image: slider3,
      tags: ["Computer", "Repair"],
    },
    
  ]
}
};





