"use client";

import Photos from "../../components/Photos/photos";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";


const GalleryPage = () => {
  const { language } = useLanguage();

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === "ar" ? "معرض الصور" : "Photos Gallery"}
      />
      <Photos />
    </main>
  );
};

export default GalleryPage;
