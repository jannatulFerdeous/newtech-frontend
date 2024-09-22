import classNames from "classnames";
import { GetTouchData, navDataTypes, ServiceCardProps, singleMenuTypes } from "./types";
import d_link from "../../../public/d-link.png";
import msi from "../../../public/msi.png";
import acer from "../../../public/acer.png";



import monitor from "../../images/Our_Service/monitor.png";
import laptop from "../../images/Our_Service/laptop.png";
import tablet from "../../images/Our_Service/tablet.png";
import desktop from "../../images/Our_Service/desktop.png";
import motherboard from "../../images/Our_Service/motherboard.png";
import psu from "../../images/Our_Service/PSU.png";
import Switch from "../../images/Our_Service/Switch.png";
import tv_panel from "../../images/Our_Service/tv panel.png";
import speaker from "../../images/Our_Service/Speaker.png";
import projector from "../../images/Our_Service/projector.png";
import router from "../../images/Our_Service/Router.png";
import inverter from "../../images/Our_Service/invertor.png";
import scanner from "../../images/Our_Service/Scanner.png";
import vga from "../../images/Our_Service/vga.png";
import server from "../../images/Our_Service/vga.png";
import printer from "../../images/Our_Service/printer.png";
import ssd from "../../images/Our_Service/ssd.png";
// whenever wee need to change default className value we will use this
export const cx = classNames;

// brand image
export const logo = "/NT-LOGO.png";

// menu items
export const menuData: Array<navDataTypes> = [
  {
    to: "/",
    label: "Home",
    subItems: [],
  },
  {
    to: "/repair-services",
    label: "Repair Services",
    subItems: [],
  },
  {
    to: "/about",
    label: "About ",
    subItems: [],
  },
  {
    to: "/blog",
    label: "Blog ",
    subItems: [],
  },
  {
    to: "/contact",
    label: "Contact",
    subItems: [],
  },
];
export const helpData: Array<singleMenuTypes> = [
  {
    to: "/",
    label: "Customer Support ",
  },
  {
    to: "/",
    label: "Terms & Conditions",
  },
  {
    to: "/ ",
    label: "Privacy Policy ",
  },
];

export const layout_data = {
  navbar: {
    button: {
      text: "create a Repair",
      link: "/repair-services",
    },
  },
  footer: {
    subtitle:
      "Clarity gives you the blocks and components you need to create a truly professional",
    copywrite: "Newtech Technology",
    social_links: {
      facebook: "/",
      Instagram: "/",
      LinkedinIn: "/",
      Twitter: "/",
    },
  },
};


export const support_data = {
  support_list : {
    title: "Support Brand",
    brand_list: [d_link, msi, acer],
  }
};

export const  serviceCard : ServiceCardProps = {

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
};

export const GetTouch_data: GetTouchData = {
  title: "Let’s Get in Touch",
  description: "Tell us about your biggest IT challenge, we want to help you solve it!",
  button: {
    text: "GET STARTED NOW",
    link: "#",
  },
};