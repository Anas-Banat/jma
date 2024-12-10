"use client";

import Conferences from "../../components/Conferences";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";


const ConferencesPage = () => {
  const { language } = useLanguage();

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === "ar" ? "المؤتمرات" : "Conferences"}
      />
      <Conferences />
    </main>
  );
};

export default ConferencesPage;




