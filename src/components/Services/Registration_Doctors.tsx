"use client";

import { Parag, SubTitle } from "../Other/Other";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import React, { useState } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import Link from "next/link";
import registration_details from "./Registration_Details";



const RegistrationDr: React.FC = () => {
  const [visibleOption, setVisibleOption] = useState<string | null>(null);

  const toggleDetails = (value: string) => {
    setVisibleOption(visibleOption === value ? null : value);
  };

  const { language } = useLanguage();


  return (
    <div className="dark:bg-dark" >
      <div className="container py-10 dark:bg-dark">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="w-full ">
                <Image
                  src="/images/blog/bannder-ad.png"
                  alt="Registration Doctors Until Emtyaz"
                  width={2000}
                  height={2000}
                  className="h-[400px] w-full object-cover object-center"
                />
              </div>
                <SubTitle
                  titleAr="تسجيل الطبيب لغاية الإمتياز"
                  titleEn="Registration Doctors Until Emtyaz"
                />
                <Parag
                  textAr="على كل طبيب أنهى دراسته في كلية الطب، التقدم بطلب التسجيل المؤقت لغايات الأمتياز (التدريب)."
                  textEn="Every doctor who has completed his studies at the Faculty of Medicine must apply for temporary registration for the purposes of internship (training)."
                />
                {registration_details.map((option) => (
                  <div key={option.value} className="mb-6">
                    <button
                      className="flex justify-between items-center w-full 
                        bg-white dark:bg-gray-700 hover:bg-gray-100 px-4 rounded-md 
                        focus:outline-none focus:ring-2 focus:ring-blue-400 border-2 "
                      onClick={() => toggleDetails(option.value)}
                    >
                      <SubTitle titleAr={option.labelAr} titleEn={option.labelEn} />
                      {visibleOption === option.value ? (
                        <SlArrowUp className="h-12 w-12 text-white bg-blue-900 p-2 rounded-full font-extrabold" />
                      ) : (
                        <SlArrowDown className="h-12 w-12 text-white bg-blue-900 p-2 rounded-full font-extrabold" />
                      )}
                    </button>

                    {visibleOption === option.value && (
                      <div
                        className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-md shadow-inner 
                        border border-gray-300 whitespace-pre-line"
                      >
                        <h3 className="font-semibold text-lg mb-2 ">{language === "ar" ? "التفاصيل:" : "Details:"}</h3>
                          <Parag textAr={option.detailsAr} textEn={option.detailsEn}/>
                      </div>
                    )}
                    
                  </div>
                ))}
                    <SubTitle 
                      titleAr="ملاحظة: يعفى من الفحص الإجمالي للأطباء:" 
                      titleEn="Note: Doctors are exempt from the comprehensive examination."
                    />
                    <Parag 
                      textAr="الأطباء الأردنيون الذين تخرجو وحصلو على تصريح مزاولة المهنة قبل 01/09/1970." 
                      textEn="Jordanian doctors who graduated and obtained a license to practice the profession before 01/09/1970." 
                    />
                    <Parag 
                      textAr="الطبيب الاخصائي وفقا لقانون المجلس الطبي الاردني." 
                      textEn="Specialist physician according to the Jordanian Medical Council Law." 
                    />
                    <Parag 
                      textAr="خريجوا الجامعات الأردنية." 
                      textEn="Jordanian university graduates." 
                    />
                  <div className="text-center">
                    <Link
                      href="#"
                      className={`inline-flex items-center justify-center rounded-md bg-primary mt-10 px-16 py-3 text-center text-base font-medium text-white duration-300 hover:bg-primary/90 dark:bg-white/10 dark:hover:bg-white/20
                        ${
                          language === "ar"
                        ? "font-semibold text-xl"
                          : "font-medium text-base"
                        }`}
                      >
                      {language === "en" ? "Register" : "تسجيل"}
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
  );
};

export default RegistrationDr;
