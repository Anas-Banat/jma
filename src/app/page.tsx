
import About from "@/components/About_Conferences";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";
import Location from "@/components/Map";
import News from "@/components/News/news";
import Services from "@/components/Services";
import About_Conferences from "@/components/About_Conferences";
import Funds from "@/components/Funds";

export const metadata: Metadata = {
  title: "Jordan Medical Association",
  description: "Jordan Medical Association",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  
  return (
    <main >
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
