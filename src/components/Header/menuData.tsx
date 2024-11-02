import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    submenu: [
      {
        id: 201,
        title: "Welcome To JMA",
        path: "/about",
        newTab: false,
      },
      {
        id: 202,
        title: "Association Council",
        path: "/association_council",
        newTab: false,
      },
      {
        id: 203,
        title: "Offices Authority",
        path: "/offices_authority",
        newTab: false,
      },
      {
        id: 204,
        title: "Information center",
        path: "/information_center",
        newTab: false,
      },
      {
        id: 205,
        title: "Contact Us",
        path: "/contact_us",
        newTab: false,
      },
      {
        id: 206,
        title: "Careers",
        path: "/careers",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Association Funds",
    newTab: false,
    submenu: [
      {
        id: 301,
        title: "Authority Fund",
        path: "/authority_fund",
        newTab: false,
      },
      {
        id: 302,
        title: "Social Solidarity Fund",
        path: "/social_solidarity_fund",
        newTab: false,
      },
      {
        id: 303,
        title: "Mobile Phone Fund",
        path: "/mobile_phone_fund",
        newTab: false,
      },
      {
        id: 304,
        title: "Doctors Collaboration Fund",
        path: "/doctors_collaboration_fund",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 401,
        title: "Registration of Doctors",
        path: "/registration_doctors",
        newTab: false,
      },
      {
        id: 402,
        title: "Electronic payments",
        path: "/electronic_payments",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Media",
    newTab: false,
    submenu: [
      {
        id: 501,
        title: "Conferences",
        path: "/conferences",
        newTab: false,
      },
      {
        id: 502,
        title: "News",
        path: "/news",
        newTab: false,
      },
      {
        id: 503,
        title: "Photos Gallery",
        path: "/photos_gallery",
        newTab: false,
      },
    ],
  },
];
export default menuData;
