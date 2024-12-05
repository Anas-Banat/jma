"use client";


import { SubTitle, Parag } from "../../components/Other/Other";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";
import Team from "../../components/Team";


const AssociationCouncil = () => {
  const { language } = useLanguage();


  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === "ar" ? "مجلس النقابة" : "Association Council"}
      />
      <div className="container my-10">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="my-12  lg:mb-0">
                <SubTitle
                  titleAr="نبذة عامة عن مجلس النقابة:"
                  titleEn="General Overview of the Association Council:"
                />
                <Parag
                  textAr="يُعد مجلس نقابة الأطباء الأردنية الجهة المسؤولة عن قيادة وتنظيم شؤون المهنة في المملكة. يتألف المجلس من نخبة من الأطباء المنتخبين لتمثيل زملائهم، ويهدف إلى تعزيز مكانة مهنة الطب، وحماية حقوق الأطباء، وتحقيق تطلعاتهم المهنية والاجتماعية. يعمل المجلس على تحقيق الشفافية والعدالة، ومواكبة التطورات العلمية والعملية، بما يضمن تقديم أفضل الخدمات الطبية للمجتمع الأردني"
                  textEn="The Jordan Medical Association Council serves as the governing body responsible for leading and organizing the medical profession's affairs in the Kingdom. The council is composed of a distinguished group of elected physicians representing their peers. Its mission is to enhance the status of the medical profession, safeguard the rights of doctors, and fulfill their professional and social aspirations. The council is committed to transparency, fairness, and keeping pace with scientific and practical advancements to ensure the best medical services for the Jordanian community."
                />
                <Team />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AssociationCouncil;
