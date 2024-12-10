"use client";

import Post from "../../components/News/news_post";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";


const News = () => {
  const { language } = useLanguage();

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === "ar" ? "اخر الأخبار" : "Latest News"}
      />
      <Post />
    </main>
  );
};

export default News;
