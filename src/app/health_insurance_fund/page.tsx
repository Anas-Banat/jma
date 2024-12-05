"use client";

import Image from "next/image";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";
import { SubTitle, Parag } from "../../components/Other/Other";


const AssociationCouncil = () => {
  const { language } = useLanguage();


  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === "ar" ? "صندوق التقاعد" : "Authority Fund"}
      />
      <div className="container my-10">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="w-full ">
                <Image
                  src="/images/blog/bannder-ad.png"
                  alt="About Association Council"
                  width={2000}
                  height={2000}
                  className="h-[400px] w-full object-cover object-center"
                />
              </div>
              <div className="my-12  lg:mb-0">
              <SubTitle
                  titleAr="نظرة عامة حول صندوق التقاعد:"
                  titleEn="Overview of The Authority Fund:"
                />
                <Parag
                  textAr="يُعدُّ صندوق التقاعد أحد الركائز الأساسية في نقابة الأطباء الأردنية، حيث يُساهم في تأمين حياة كريمة للأطباء وأسرهم بعد انتهاء مسيرتهم المهنية. يهدف الصندوق إلى تقديم دعم مالي منتظم للأطباء المتقاعدين وضمان استقرارهم المادي، بالإضافة إلى دعم أسر الأطباء المتوفين"
                  textEn="The Authority Fund is a cornerstone of the Jordan Medical Association, dedicated to ensuring a dignified life for doctors and their families after the conclusion of their professional careers. The fund aims to provide regular financial support to retired doctors and ensure their financial stability, in addition to supporting the families of deceased members."
                />
                <Parag
                  textAr="ويعمل الصندوق وفق أسس تنظيمية ومالية مدروسة تضمن الاستدامة والعدالة، مما يعزز الشعور بالأمان الاجتماعي والاقتصادي بين أعضاء النقابة"
                  textEn="Operated under well-structured financial and organizational principles, the fund ensures sustainability and fairness, fostering a sense of social and economic security among association members."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AssociationCouncil;
