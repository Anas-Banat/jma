"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { conferences } from "../../../components/Conferences/conferencesData";
import { useLanguage } from "@/context/LanguageContext";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import { Parag, SubTitle } from "../../../components/Other/Other";


interface ConferenceDetailsProps {
  params: Promise<{ id: string }>;
}

export default function ConferenceDetails({ params }: ConferenceDetailsProps) {
  const { language} = useLanguage();
  
  const id = parseInt((params).id);

  // Find the conferences by ID
  const conference = conferences.find((item) => item.id === id);

  if (!conference) {
    notFound(); // Return a 404 page if conferences not found
  }

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === 'ar' ? conference?.titleAr : conference?.titleEn}
      />
      <div className="container my-10">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="my-12  lg:mb-0">
                <div className="place-items-center max-w-4xl mx-auto">
                  <SubTitle titleAr={conference?.titleAr} titleEn={conference?.titleEn}/>
                  <Image
                    src={conference?.imageUrl || ""}
                    alt={language === 'ar' ? conference?.titleAr : conference?.titleEn || ""}
                    width={800}
                    height={400}
                    className="w-9/12 h-auto rounded-lg pb-10"
                  />
                  <Parag textAr={conference?.date} textEn={conference?.date} />
                  <Parag textAr={conference?.descriptionAr} textEn={conference?.descriptionEn} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}



