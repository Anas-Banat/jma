"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { posts } from "../../../components/News/postData";
import { useLanguage } from "@/context/LanguageContext";
import Breadcrumb from "../../../components/Common/Breadcrumb";


interface PostDetailsProps {
  params: { id: string };
}

export default function PostDetails({ params }: PostDetailsProps) {
  const { language,lang } = useLanguage();
  
  const id = parseInt(params.id);

  // Find the post by ID
  const post = posts.find((item) => item.id === id);

  if (!post) {
    notFound(); // Return a 404 page if post not found
  }

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={lang === 'ar' ? post?.titleAr : post?.titleEn}
      />
      <div className="container my-10">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="my-12  lg:mb-0">
                <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">{lang === 'ar' ? post?.titleAr : post?.titleEn}</h1>
                  <Image
                    src={post?.imageUrl || ""}
                    alt={lang === 'ar' ? post?.titleAr : post?.titleEn || ""}
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <p className="text-gray-500 mb-4">{post?.date}</p>
                  <p className="text-lg leading-relaxed">{lang === 'ar' ? post?.descriptionAr : post?.descriptionEn}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}



