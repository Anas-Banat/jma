"use client";

import { Parag, SubTitle } from "../../components/Other/Other";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";
import React, { useState } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import Link from "next/link";

interface RegistrationOption {
  value: string;
  labelAr: string;
  labelEn: string;
  detailsAr: string;
  detailsEn: string;
}

const registrationOptions: RegistrationOption[] = [
  {
    labelAr: "التسجيل المؤقت لغايات الامتياز - الأردنيين",
    labelEn: "التسجيل المؤقت لغايات الامتياز - الأردنيين",
    value: "temp-jordanian",
    detailsAr: `الأوراق المطلوبة:
      - صور شخصية عدد (2)
      - صورة عن هوية الأحوال المدنية
      - صورة عن شهادة الميلاد
      - صورة عن كشف علامات التوجيهي (الفرع العلمي) مصدق من وزارة التربية
      - رسوم مقدارها (60) دينار أردني`,
    detailsEn: `الأوراق المطلوبة:
      - صور شخصية عدد (2)
      - صورة عن هوية الأحوال المدنية
      - صورة عن شهادة الميلاد
      - صورة عن كشف علامات التوجيهي (الفرع العلمي) مصدق من وزارة التربية
      - رسوم مقدارها (60) دينار أردني`,
  },
  {
    labelAr: "التسجيل المؤقت لغايات الامتياز - غير الأردنيين",
    labelEn: "التسجيل المؤقت لغايات الامتياز - غير الأردنيين",
    value: "temp-non-jordanian",
    detailsAr: `الأوراق المطلوبة:
      - صور شخصية عدد (2)
      - صورة عن جواز السفر
      - شهادة عدم محكومية من وزارة العدل
      - إذن إقامة من وزارة الداخلية
      - رسوم مقدارها (100) دينار لغير الأردنيين و(60) دينار لأبناء الأردنيات`,
    detailsEn: `الأوراق المطلوبة:
      - صور شخصية عدد (2)
      - صورة عن جواز السفر
      - شهادة عدم محكومية من وزارة العدل
      - إذن إقامة من وزارة الداخلية
      - رسوم مقدارها (100) دينار لغير الأردنيين و(60) دينار لأبناء الأردنيات`,
  },
  {
    labelAr: "التسجيل على قائمة الفحص الإجمالي",
    labelEn: "التسجيل على قائمة الفحص الإجمالي",
    value: "exam-list",
    detailsAr: `المتطلبات:
      - شهادة إنهاء فترة الامتياز من المستشفى
      - رسوم مقدارها (31) دينار للأردنيين وأبناء الأردنيات (في حالة التسجيل السابق)
      - رسوم مقدارها (90) دينار للأردنيين وأبناء الأردنيات (بدون تسجيل سابق)`,
    detailsEn: `المتطلبات:
      - شهادة إنهاء فترة الامتياز من المستشفى
      - رسوم مقدارها (31) دينار للأردنيين وأبناء الأردنيات (في حالة التسجيل السابق)
      - رسوم مقدارها (90) دينار للأردنيين وأبناء الأردنيات (بدون تسجيل سابق)`,
  },
  {
    labelAr: "التسجيل الدائم بعد اجتياز الفحص الإجمالي - الأردنيين",
    labelEn: "التسجيل الدائم بعد اجتياز الفحص الإجمالي - الأردنيين",
    value: "permanent-exam-jordanian",
    detailsAr: `المتطلبات:
      - صورة مصدقة عن كشف علامات الفحص الإجمالي
      - رسوم مقدارها (35) دينار`,
    detailsEn: `المتطلبات:
      - صورة مصدقة عن كشف علامات الفحص الإجمالي
      - رسوم مقدارها (35) دينار`,
  },
  {
    value: "permanent-jordanian",
    labelAr: "التسجيل الدائم للأردنيين خريجي الجامعات الأردنية",
    labelEn: "التسجيل الدائم للأردنيين خريجي الجامعات الأردنية",
    detailsAr: `المتطلبات:
      - شهادة إنهاء فترة الامتياز من المستشفى
      - شهادة تأكيد من المجلس الطبي الأردني بإنهاء فترة الامتياز
      - رسوم مقدارها (35) دينار`,
    detailsEn: `المتطلبات:
      - شهادة إنهاء فترة الامتياز من المستشفى
      - شهادة تأكيد من المجلس الطبي الأردني بإنهاء فترة الامتياز
      - رسوم مقدارها (35) دينار`,
  },    
];

const RegistrationDropdown: React.FC = () => {
  const [visibleOption, setVisibleOption] = useState<string | null>(null);

  const toggleDetails = (value: string) => {
    setVisibleOption(visibleOption === value ? null : value);
  };

  const { lang, language } = useLanguage();


  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === "ar" ? "معرض الصور" : "Photos Gallery"}
      />
      <div className="container my-10">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
            <div className="my-12 lg:mb-0">
                <SubTitle
                  titleAr="تسجيل الطبيب لغاية الإمتياز"
                  titleEn="Registration Doctors Until Emtyaz"
                />
                <Parag
                  textAr="على كل طبيب أنهى دراسته في كلية الطب، التقدم بطلب التسجيل المؤقت لغايات الأمتياز (التدريب)."
                  textEn="Every doctor who has completed his studies at the Faculty of Medicine must apply for temporary registration for the purposes of internship (training)."
                />
                {registrationOptions.map((option) => (
                  <div key={option.value} className="mb-6">
                    <button
                      className="flex justify-between items-center w-full 
                        bg-gray-300 hover:bg-blue-400 px-4 rounded-md 
                        focus:outline-none focus:ring-2 focus:ring-blue-400"
                      onClick={() => toggleDetails(option.value)}
                    >
                      <SubTitle titleAr={option.labelAr} titleEn={option.labelEn} />
                      {visibleOption === option.value ? (
                        <SlArrowUp className="h-6 w-6 text-dark-700 font-extrabold" />
                      ) : (
                        <SlArrowDown className="h-6 w-6 text-dark-700 font-extrabold" />
                      )}
                    </button>

                    {visibleOption === option.value && (
                      <div
                        className="mt-4 p-4 bg-gray-100 rounded-md shadow-inner 
                        border border-gray-300 whitespace-pre-line"
                      >
                        <h3 className="font-semibold text-lg mb-2">التفاصيل:</h3>
                        <p className="leading-6">
                          <Parag textAr={option.detailsAr} textEn={option.detailsEn}/>
                        </p>
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
                      href="/test_option"
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
    </main>
        
  );
};

export default RegistrationDropdown;
