"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { posts } from "../../../components/News/postData";
import { useLanguage } from "@/context/LanguageContext";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import { Parag, SubTitle } from "../../../components/Other/Other";


// interface PostDetailsProps {
//   params: Promise<{ id: string }>;
// }

//export default function PostDetails({ params }: PostDetailsProps) {
export default function PostDetails({ params }: any) {

  const { language } = useLanguage();
  
  const id = parseInt((params).id);

  // Find the post by ID
  const post = posts.find((item) => item.id === id);

  if (!post) {
    notFound(); // Return a 404 page if post not found
  }

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === 'ar' ? post?.titleAr : post?.titleEn}
      />
      <div className="container my-10">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="my-12  lg:mb-0">
                <div className="place-items-center max-w-4xl mx-auto">
                <SubTitle titleAr={post?.titleAr} titleEn={post?.titleEn}/>
                  <Image
                    src={post?.imageUrl || ""}
                    alt={language === 'ar' ? post?.titleAr : post?.titleEn || ""}
                    width={800}
                    height={400}
                    className="w-9/12 h-auto rounded-lg pb-10"
                  />
                  <Parag textAr={post?.date} textEn={post?.date} />
                  <Parag textAr={post?.descriptionAr} textEn={post?.descriptionEn} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}



