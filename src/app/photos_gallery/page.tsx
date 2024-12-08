"use client";

import Gallery from "../../components/Photos_Gallery/Gallery";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";


const GalleryPage = () => {
  const { language } = useLanguage();

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === "ar" ? "معرض الصور" : "Photos Gallery"}
      />
      <Gallery />
    </main>
  );
};

export default GalleryPage;
