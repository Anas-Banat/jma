import { Menu } from "@/types/menu";

const menuData: Menu[] = [
    {
      id: 1,
      en_title: 'Home',
      ar_title: 'الرئيسية',
      path: "/",
      newTab: false,
    },
    {
      id: 2,
      en_title: "About Us",
      ar_title: "عن النقابة",
      newTab: false,
      submenu: [
        {
          id: 201,
          en_title: "Welcome To JMA",
          ar_title: "أهلا بكم في نقابة الأطباء",
          path: "/welcome",
          newTab: false,
        },
        {
          id: 202,
          en_title: "Association Council",
          ar_title: "مجلس النقابة ",
          path: "/association_council",
          newTab: false,
        },
        {
          id: 203,
          en_title: "Legislations",
          ar_title: "التشريعات والأنظمة",
          path: "/legislations",
          newTab: false,
        },
        {
          id: 204,
          en_title: "Association Guide",
          ar_title: "دليل النقابة",
          path: "/association_guide",
          newTab: false,
        },
        {
          id: 205,
          en_title: "Contact Us",
          ar_title: "تواصل معنا",
          path: "/contact_us",
          newTab: false,
        },
        {
          id: 206,
          en_title: "Careers",
          ar_title: "الوظائف",
          path: "/careers",
          newTab: false,
        },
      ],
    },
    {
      id: 3,
      en_title: "Association Funds",
      ar_title: "صناديق النقابة",
      newTab: false,
      submenu: [
        {
          id: 301,
          en_title: "Authority Fund",
          ar_title: "صندوق التقاعد",
          path: "/authority_fund",
          newTab: false,
        },
        {
          id: 302,
          en_title: "Social Solidarity Fund",
          ar_title: "صندوق التكافل الاجتماعي",
          path: "/social_solidarity_fund",
          newTab: false,
        },
        {
          id: 303,
          en_title: "Mobile Phone Fund",
          ar_title: "صندوق الهواتف الخلوية",
          path: "/mobile_phone_fund",
          newTab: false,
        },
        {
          id: 304,
          en_title: "Doctors Collaboration Fund",
          ar_title: "الصندوق التعاوني للأطباء",
          path: "/doctors_collaboration_fund",
          newTab: false,
        },
        {
          id: 305,
          en_title: "Optional Health Insurance Fund",
          ar_title: "صندوق التامين الصحي الاختياري",
          path: "health_insurance_fund",
          newTab: false,
        },
        {
          id: 306,
          en_title: "Professional and Specialty Titles Fund",
          ar_title: "صندوق القاب المهنة والأختصاص",
          path: "specialty_titles_fund",
          newTab: false,
        },
      ],
    },
    {
      id: 4,
      en_title: "Services",
      ar_title: "خدماتنا",
      newTab: false,
      submenu: [
        {
          id: 401,
          en_title: "Registration of Doctors",
          ar_title: "تسجيل الأطباء",
          path: "/registration_doctors",
          newTab: false,
        },
        {
          id: 402,
          en_title: "lectronic payments",
          ar_title: "الدفع الكتروني",
          path: "/electronic_payments",
          newTab: false,
        },
      ],
    },
    {
      id: 5,
      en_title: "Media",
      ar_title: "وسائل الأعلام",
      newTab: false,
      submenu: [
        {
          id: 501,
          en_title: "Conferences",
          ar_title: "المؤتمرات",
          path: "/conferences",
          newTab: false,
        },
        {
          id: 502,
          en_title: "News",
          ar_title: "الأخبار",
          path: "/news",
          newTab: false,
        },
        {
          id: 503,
          en_title: "Photos Gallery",
          ar_title: "معرض الصور",
          path: "/photos",
          newTab: false,
        },
      ],
    },
  ];

export default menuData;
