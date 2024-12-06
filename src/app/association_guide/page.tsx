"use client";

import Breadcrumb from "../../components/Common/Breadcrumb";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { SubTitle, Parag, ClickHere } from "../../components/Other/Other";

const AssociationGuide = () => {
  const { language } = useLanguage();

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
      pageName={language === "ar" ? "دليل ضبط المهنة لنقابة الأطباء الأردنية" : "Medical Profession Conduct Guide"}
       />
       <div className="container my-10">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="w-full ">
                <Image
                  src="/images/blog/bannder-ad.png"
                  alt="About Medical Profession Conduct Guide"
                  width={2000}
                  height={2000}
                  className="h-[400px] w-full object-cover object-center"
                />
              </div>
              <div className="my-12  lg:mb-0">
                <SubTitle
                  titleAr="نبذة عامة عن دليل ضبط المهنة لنقابة الأطباء الأردنية:"
                  titleEn="General Overview of the Medical Profession Conduct Guide:"
                />
                <Parag
                  textAr="صدر دليل ضبط المهنة عن لجنة ضبط المهنة في نقابة الأطباء الأردنية، بهدف وضع إطار عام لتنظيم سلوكيات وأخلاقيات ممارسة مهنة الطب. يشتمل الدليل على مجموعة من المبادئ والضوابط الأخلاقية والقانونية التي تحكم علاقة الطبيب بمهنته، ومرضاه، وزملائه، والمجتمع، بما يضمن الارتقاء بمستوى المهنة وحماية حقوق المرضى."
                  textEn="The Medical Profession Conduct Guide was issued by the Professional Conduct Committee of the Jordan Medical Association. It aims to provide a general framework for regulating the ethical and professional behavior of physicians, ensuring the development of the profession while safeguarding patient rights. The guide includes a set of principles and guidelines that govern a physician's relationship with their profession, patients, colleagues, and society. These principles aim to uphold the standards of medical practice and ethical conduct."
                />


                <SubTitle
                  titleAr="يتناول الدليل عدة محاور رئيسية، منها:"
                  titleEn="Key Highlights of the Guide:"
                />
                <Parag
                  textAr="1-	أهمية الطب كمهنة إنسانية: يشدد على البعد الإنساني والعلمي للطب وضرورة الالتزام بالتقاليد المهنية."
                  textEn="1-	Medicine as a Humanitarian Profession: Emphasizes the humanitarian and scientific aspects of medicine and the importance of adhering to professional traditions."
                />
                <Parag
                  textAr="2-	صفات الطبيب: يركز على ضرورة التزام الطبيب بالأخلاق الفاضلة، مثل الصدق والتواضع، مع الحرص على التطور العلمي المستمر."
                  textEn="2-	Qualities of a Physician: Focuses on virtues like honesty, humility, and the commitment to lifelong learning."
                />
                <Parag
                  textAr="3-	العلاقات المهنية بين الأطباء: يتناول قواعد التعاون والتكافل بين الأطباء، مع الالتزام بحقوق الزمالة المهنية."
                  textEn="3-	Professional Relationships among Physicians: Details principles of collaboration and mutual respect among medical colleagues."
                />
                <Parag
                  textAr="4-	مسؤولية الطبيب: يوضح الالتزامات الطبية والقانونية الواقعة على الطبيب تجاه المرضى والمجتمع."
                  textEn="4-	Physician’s Responsibility: Outlines the medical and legal obligations of physicians toward their patients and society."
                />
                <Parag
                  textAr="5-	سر المهنة: يؤكد على أهمية الحفاظ على خصوصية المرضى، ويحدد الحالات التي يجوز فيها إفشاء الأسرار."
                  textEn="5-	Confidentiality: Stresses the importance of protecting patient privacy while specifying scenarios where disclosure may be warranted."
                />
                <Parag
                  textAr="6-	أخلاقيات الممارسة في السلم والحرب: يحدد دور الطبيب الإنساني في جميع الظروف، بما في ذلك أوقات النزاع."
                  textEn="6-	Ethics in Peace and Conflict: Defines the humanitarian role of physicians in all circumstances, including during conflicts and emergencies."
                />
                <Parag
                  textAr="7-	التعليم الطبي المستمر: يشدد على أهمية التعلم المستمر لمواكبة التطورات الطبية."
                  textEn="7-	Continuous Medical Education: Highlights the necessity of staying updated with advancements in medical science."
                />

                <Parag
                  textAr="الدليل يمثل مرجعًا هامًا للأطباء، كما يمكن للمهتمين من أفراد المجتمع الاطلاع عليه لفهم طبيعة المهنة ومتطلباتها."
                  textEn="This guide serves as an essential reference for physicians and offers valuable insights for anyone interested in understanding the medical profession and its ethical framework."
                />

                <ClickHere
                  urlPathAr="/files/test.pdf"
                  urlPathEn="/files/test.pdf"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AssociationGuide;
