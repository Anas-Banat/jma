"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { SubTitle, Parag, DownloadFile } from "../../components/Other/Other";
import Breadcrumb from "../../components/Common/Breadcrumb";



const Legislations = () => {
  const { language } = useLanguage();

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
      pageName={language === "ar" ? "التشريعات والانظمة" : "Legislations"}
       />
       <div className="container my-10">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="w-full ">
                <Image
                  src="/images/blog/bannder-ad.png"
                  alt="About Legislations"
                  width={2000}
                  height={2000}
                  className="h-[400px] w-full object-cover object-center"
                />
              </div>
              <div className="my-12  lg:mb-0">
                <SubTitle
                  titleAr="نبذة عامة عن التشريعات:"
                  titleEn="General Overview of the Legislations:"
                />
                <Parag
                  textAr="تمثل التشريعات الخاصة بنقابة الأطباء الأردنية الإطار القانوني الذي يُحدد أهداف النقابة وصلاحياتها ومسؤولياتها. تُوضع هذه التشريعات بالتنسيق مع الجهات المختصة لضمان تنظيم مهنة الطب بما يحقق مصلحة الأطباء ويحمي حقوقهم المهنية، ويخدم المجتمع الأردني بأفضل صورة."
                  textEn="The legislations of the Jordan Medical Association define the legal framework that outlines the association's objectives, powers, and responsibilities. These legislations are developed in coordination with relevant authorities to regulate the medical profession, safeguard doctors' rights, and serve the Jordanian community effectively."
                />

                <SubTitle
                  titleAr="القوانين:"
                  titleEn="Laws:"
                />
                <Parag
                  textAr="تعد قوانين النقابة المرجع الأساسي لتنظيم الممارسات المهنية للأطباء. تعمل القوانين على تحديد المعايير المهنية والأخلاقية الواجب الالتزام بها من قبل الأطباء، وتساهم في تحقيق العدالة وضمان تقديم خدمات طبية متميزة للمجتمع."
                  textEn="The association's laws serve as the primary reference for regulating professional practices among doctors. These laws establish the professional and ethical standards that physicians must adhere to, ensuring fairness and the provision of high-quality medical services to the community."
                />
                <DownloadFile
                  urlPathAr="/files/legislations/قانون_رقم14_لسنة_2015_قانون_معدل_لقانون_نقابة_الأطباء_الأردنية.pdf"
                  urlPathEn="/files/legislations/قانون_رقم14_لسنة_2015_قانون_معدل_لقانون_نقابة_الأطباء_الأردنية.pdf"
                  textAr="قانون رقم 14 لسنة 2015 قانون معدل لقانون نقابة الأطباء الأردنية"
                  textEn="Law No. 14 of 2015 amending the Jordanian Medical Association Law"
                />

                <SubTitle
                  titleAr="الأنظمة:"
                  titleEn="Regulations:"
                />
                <Parag
                  textAr="تشمل أنظمة النقابة اللوائح الداخلية والإجراءات التنفيذية التي تُنظم عمل النقابة وأعضائها. تهدف هذه الأنظمة إلى تحسين الكفاءة الإدارية، وضمان سير العمليات اليومية بسلاسة، وتعزيز التنسيق بين مختلف لجان النقابة لتحقيق أهدافها الاستراتيجية."
                  textEn="The association's regulations encompass internal bylaws and operational procedures that govern its functions and membership. These regulations aim to enhance administrative efficiency, ensure smooth daily operations, and foster coordination among the association's various committees to achieve its strategic objectives."
                />
                <DownloadFile
                  urlPathAr="/files/legislations/نظام_رقم_5_لسنة_2011_نظام_صندوق_التكافل_الاجتماعي_للاطباء.pdf"
                  urlPathEn="/files/legislations/نظام_رقم_5_لسنة_2011_نظام_صندوق_التكافل_الاجتماعي_للاطباء.pdf"
                  textAr="نظام رقم 5 لسنة 2011 نظام صندوق التكافل الاجتماعي للاطباء"
                  textEn="Regulation No. 5 of 2011 Social Solidarity Fund for Doctors Regulation"
                />
                <DownloadFile
                  urlPathAr="/files/legislations/نظام_رقم_79_لسنة_2013_نظام_ألقاب_المهنة_والاختصاص_للأطباء.pdf"
                  urlPathEn="/files/legislations/نظام_رقم_79_لسنة_2013_نظام_ألقاب_المهنة_والاختصاص_للأطباء.pdf"
                  textAr="نظام رقم 79 لسنة 2013 نظام ألقاب المهنة والاختصاص للأطباء"
                  textEn="Regulation No. 79 of 2013 Regulation of Professional Titles and Specializations for Doctors"
                />
                <DownloadFile
                  urlPathAr="/files/legislations/نظام_رقم_157_لسنة_2018_نظام_معدل_لنظام_التقاعد_والضمان_الاجتماعي_للأطباء.pdf"
                  urlPathEn="/files/legislations/نظام_رقم_157_لسنة_2018_نظام_معدل_لنظام_التقاعد_والضمان_الاجتماعي_للأطباء.pdf"
                  textAr="نظام رقم 157 لسنة 2018 نظام معدل لنظام التقاعد والضمان الاجتماعي للأطباء"
                  textEn="Regulation No. 157 of 2018 Amending the Retirement and Social Security System for Doctors"
                />
                <DownloadFile
                  urlPathAr="/files/legislations/نظام_رقم_158_لسنة_2018_نظام_الصندوق_التعاوني_للأطباء.pdf"
                  urlPathEn="/files/legislations/نظام_رقم_158_لسنة_2018_نظام_الصندوق_التعاوني_للأطباء.pdf"
                  textAr="نظام رقم 158 لسنة 2018 نظام الصندوق التعاوني للأطباء"
                  textEn="Regulation No. 158 of 2018 Doctors Cooperative Fund Regulation"
                />
                <DownloadFile
                  urlPathAr="/files/legislations/نظام_رقم_68_لسنة_2019_نظام_معدل_للنظام_الداخلي_لنقابة_الأطباء.pdf"
                  urlPathEn="/files/legislations/نظام_رقم_68_لسنة_2019_نظام_معدل_للنظام_الداخلي_لنقابة_الأطباء.pdf"
                  textAr="نظام رقم 68 لسنة 2019 نظام معدل للنظام الداخلي لنقابة الأطباء"
                  textEn="Regulation No. 68 of 2019 Amending the Internal Regulations of the Doctors Syndicate"
                />

                <SubTitle
                  titleAr="لائحة الأجور الطبية:"
                  titleEn="Medical Fees Schedule:"
                />
                <Parag
                  textAr="تُعد لائحة الأجور الطبية وثيقة رسمية تنظم العلاقة المالية بين الأطباء والمرضى، وتحدد الحدود الدنيا والقصوى للتكاليف الطبية بما يضمن التوازن بين تقديم خدمات طبية ذات جودة عالية وحماية حقوق المرضى والأطباء على حد سواء. تهدف اللائحة إلى تعزيز الشفافية في التعاملات المالية، وضمان توفير رعاية صحية عادلة ومناسبة لجميع أفراد المجتمع."
                  textEn="The Medical Fees Schedule is an official document that regulates the financial relationship between doctors and patients. It outlines the minimum and maximum limits for medical costs, ensuring a balance between providing high-quality healthcare services and protecting the rights of both patients and physicians. The schedule aims to promote transparency in financial transactions and ensure fair and accessible healthcare for all members of the community."
                />
                <DownloadFile
                  urlPathAr="/files/legislations/لائحة_الأجور_الطبية_لعام_2021.pdf"
                  urlPathEn="/files/legislations/لائحة_الأجور_الطبية_لعام_2021.pdf"
                  textAr="لائحة الأجور الطبية لعام 2021"
                  textEn="Medical Fees List 2021"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Legislations;
