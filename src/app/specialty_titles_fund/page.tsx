"use client";

import Image from "next/image";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";
import { SubTitle, Parag, ClickHere } from "../../components/Other/Other";


const SpecialtyTitlesFund = () => {
  const { language } = useLanguage();

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === "ar" ? "صندوق القاب المهنة والأختصاص" : "Specialty Titles Fund"}
      />
      <div className="container my-10">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="w-full ">
                <Image
                  src="/images/blog/bannder-ad.png"
                  alt="About The Specialty Titles Fund"
                  width={2000}
                  height={2000}
                  className="h-[400px] w-full object-cover object-center"
                />
              </div>
              <div className="my-12  lg:mb-0">
                <SubTitle
                  titleAr="نظرة عامة حول صندوق القاب المهنة والأختصاص:"
                  titleEn="Overview of The Specialty Titles Fund:"
                />
                <Parag
                  textAr="صندوق الألقاب المهنية والاختصاص هو إحدى الصناديق الرائدة التي تهدف إلى تعزيز الممارسات المهنية والارتقاء بمعايير الكفاءة والاحتراف."
                  textEn="The Specialty Titles Fund is one of the unique funds that aims to promote professional activities and improve the standards of competence and professionalism."
                />
                <Parag
                  textAr="يعمل الصندوق على منح الألقاب المهنية المعتمدة بناءً على مؤهلات المتقدمين وخبراتهم، وفق معايير مهنية دقيقة. كما يهدف إلى تنظيم المهن المختلفة وتعزيز التنافسية، مما يدعم تنمية سوق العمل وتطوير الكفاءات الوطنية."
                  textEn="The Fund works to grant accredited professional titles based on the qualifications and experiences of applicants, according to precise professional standards. It also aims to regulate various professions and enhance competitiveness, which supports the development of the labor market and the development of national competencies."
                />

                <SubTitle
                  titleAr="تحدد القاب المهنة والإختصاص للطبيب على النحو التالي :"
                  titleEn="Definition of the Specialty Titles for Doctors:"
                />
                <Parag
                  textAr="1- طبيب عام."
                  textEn="1- General physician."
                />
                <Parag
                  textAr="2- طبيب اختصاصي."
                  textEn="2- Special physician."
                />
                <Parag
                  textAr="3- طبيب استشاري."
                  textEn="3- Consultant physician."
                />

                <SubTitle
                  titleAr="شروط حصول الطبيب على اللقب أو الانتقال من لقب الى لقب أعلى :"
                  titleEn="Conditions for Doctors to obtain a title or transfer from a lower title to a higher title:"
                />
                <Parag
                  textAr="1- إن يكون غير محكوم عليه بجناية أو بجنحة مخلة بالشرف."
                  textEn="1- If not to have been convicted of a felony or misdemeanor involving moral turpitude."
                />
                <Parag
                  textAr="2- لم توقع عليه عقوبة تأديبية تزيد على عقوبة التنبيه بمقتضى قانون النقابة، ولا يعتد بهذه العقوبة التأديبية اذا تم تنفيذها بحقه ومضى عليها سنتان ما لم تتخذ بحقه أي عقوبة أخرى على أي مخالفة مسلكية."
                  textEn="2- No disciplinary penalty greater than a warning penalty has been imposed on him in accordance with the Syndicate Law. This disciplinary penalty shall not be taken into account if it has been implemented against him and two years have passed since it was imposed, unless any other penalty has been imposed against him for any disciplinary violation."
                />
                <Parag
                  textAr="3- ان يكون حاصلا على عدد ساعات تعليم طبي مستمر وفق تعليمات تصدر لهذه الغاية."
                  textEn="3- If the doctor has been in continuous practice for a number of hours according to the instructions issued to this purpose."
                />
                <Parag
                  textAr="4- يشترط لمنح لقب اختصاصي ان يكون الطبيب قد حصل على شهادة الإختصاص وفق احكام التشريعات النافذة."
                  textEn="4- It is required to grant a specialty title to a doctor if he has obtained a specialty certificate in accordance with the provisions of the legislation."
                />
                <Parag
                  textAr="5- شترط لمنح لقب استشاري ان يكون الطبيب قد مارس اختصاصه ممارسه فعلية مدة لا تقل عن عشر سنوات بعد حصوله على لقب اختصاصي."
                  textEn="5- It is required to grant a consultant title to a doctor if he has practiced his specialty for a period of at least ten years after obtaining a specialty title."
                />
                <SubTitle
                  titleAr="تستوفي النقابة من الطبيب بدل منح اللقب على النحو التالي:"
                  titleEn="The Syndicate will receive the doctor from granting the title in the following way:"
                />
                <Parag
                  textAr="1- (100) دينار عن منح لقب اختصاصي."
                  textEn="1- (100) dinars for granting a specialty title."
                />
                <Parag
                  textAr="2- (200) دينار عن منح لقب استشاري."
                  textEn="2- (200) dinars for granting a consultant title."
                />

                <ClickHere 
                  urlPathAr="/files/funds/social_solidarity_fund.pdf"
                  urlPathEn="/files/funds/social_solidarity_fund.pdf"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SpecialtyTitlesFund;
