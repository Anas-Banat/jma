"use client";
import React from "react";
import ScrollUp from "../components/Common/ScrollUp";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Team from "../components/Team";
import { Metadata } from "next";
import Location from "../components/Map";
import News from "../components/News/news";
import Services from "../components/Services";
import About_Conferences from "../components/About_Conferences";
import Funds from "../components/Funds";
import { useLanguage } from "@/context/LanguageContext";

 const metadata: Metadata = {
  title: "Jordan Medical Association",
  description: "Jordan Medical Association",
};

export default function Home() {
  const { language } = useLanguage();
  
  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <ScrollUp />
      <Hero />
      <News />
      <About_Conferences />
      <Funds />
      <Services />
      <Team />
      <Contact />
      <Faq />
      <Location />
    </main>
  );
}

