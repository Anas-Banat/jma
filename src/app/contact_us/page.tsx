"use client";

import Location from "../../components/Map";
import Breadcrumb from "../../components/Common/Breadcrumb";
import Contact from "../../components/Contact";
import { useLanguage } from "@/context/LanguageContext";

const ContactUs = () => {
  const { language } = useLanguage();

  return (
    <>
      <Breadcrumb pageName={language === "ar" ? "تواصل معنا" : "Contact Us"} />
      <Contact />
      <Location />
    </>
  );
};

export default ContactUs;
