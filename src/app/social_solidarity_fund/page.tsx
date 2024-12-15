"use client";

import Image from "next/image";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";
import { SubTitle, Parag, ClickHere } from "../../components/Other/Other";
import DoctorsTable from "../../components/Funds/SocialSolidarityTable";


const SocialSolidarityFund = () => {
  const { language } = useLanguage();

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === "ar" ? "صندوق التكافل الأجتماعي" : "Social Solidarity Fund"}
      />
      <div className="container my-10">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="w-full ">
                <Image
                  src="/images/blog/bannder-ad.png"
                  alt="About Social Solidarity Fund"
                  width={2000}
                  height={2000}
                  className="h-[400px] w-full object-cover object-center"
                />
              </div>
              <div className="my-12  lg:mb-0">
                <SubTitle
                  titleAr="نظرة عامة حول صندوق التكافل الاجتماعي للأطباء:"
                  titleEn="Overview of The Social Solidarity Fund for Doctors:"
                />
                <Parag
                  textAr="تأسس في المملكة الأردنية الهاشمية في تموز 1995 بنقابة الأطباء الأردنية وفق الأهداف المنصوص عليها في التعليمات الأساسية للنقابة. صندوق التكافل له ميزانية مستقلة ولجنة إدارة منتخبة من الهيئة العامة للصندوق يسمى هذا النظام (نظام صندوق التكافل الاجتماعي لسنة 2011 ويعمل به من تاريخ نشره في الجريدة الرسمية عدد (5085 بتاريخ 26 ربيع الثاني 1432هـ الموافق 31/آذار سنة 2011) ."
                  textEn="Established in the Hashemite Kingdom of Jordan in July 1995 by the Jordanian Medical Association in accordance with the objectives stipulated in the basic instructions of the Association. The Solidarity Fund has an independent budget and an elected management committee from the Fund’s General Assembly. This system is called (Social Solidarity Fund System for the year 2011) and shall be effective from the date of its publication in the Official Gazette No. (5085) dated 26 Rabi’ al-Thani 1432 AH corresponding to 31/March 2011)."
                />
                <Parag
                  textAr="ملاحظة نص نظام الصندوق منشور بالجريدة الرسمية عدد (5085) تاريخ 31/آذار/2011 و على موقع ديوان التشريع على الانترنت www.lob.gov.jo نظام صندوق التكافل الاجتماعي للأطباء، وعلى موقع نقابة الأطباء www.jma.org.jo أو على صفحة الصندوق بالفيسبوك تحت اسم (نقابة الأطباء الأردنية – صندوق التكافل الاجتماعي للأطباء) والى من يرغب الحصول على نسخة من النظام مراسلتنا من خلال بريدنا الالكتروني takafulbox@yahoo.com ومن مقر الصندوق."
                  textEn="Note: The text of the Fund’s system is published in the Official Gazette No. (5085) dated 31/March/2011 and on the Legislation Bureau’s website www.lob.gov.jo Social Solidarity Fund System for Doctors, and on the Doctors’ Syndicate website www.jma.org.jo or on the Fund’s Facebook page under the name (Jordanian Doctors’ Syndicate – Social Solidarity Fund for Doctors). Anyone who wishes to obtain a copy of the system may contact us via our email takafulbox@yahoo.com and from the Fund’s headquarters."
                />
                <Parag
                  textAr="يهدف الصندوق الى تحقيق التكافل الاجتماعي للأطباء المشتركين فيه وبما يساعد في تأمين الرعاية الاجتماعية اللازمة لهم ولأسرهم من بعدهم في حالة العجز الكلي أو الوفاة."
                  textEn="The Fund aims to achieve social solidarity for participating doctors and to help secure the necessary social care for them and their families after them in the event of total disability or death."
                />
                <Parag
                  textAr="ان جوهر فكرة التكافل الاجتماعي للأطباء ان يقوم الزميل المشترك في الصندوق وهو بكامل صحته بتقديم المساعدة المالية لزميل له عضو في الصندوق أصيب بالعجز الكلي الدائم أو المستفيدين من ورثته بعد وفاته."
                  textEn="The essence of the idea of social solidarity for doctors is that The fund's member who is in full health to provide financial assistance to a fellow member of the fund who has suffered permanent total disability or the beneficiaries of his heirs after his death."
                />
                <Parag
                  textAr="المستفيد من الصندوق هو: الشخص أو الأشخاص من الورثة الشرعيين الذين يسميهم المشترك إثناء حياته ويسجلهم في نموذج الاشتراك في الصندوق للاستفادة من أحكام هذا النظام."
                  textEn="The beneficiary of the fund is: the person or persons from the legal heirs whom the member names during his lifetime and registers them in the fund's subscription form to benefit from the provisions of this system."
                />
                <Parag
                  textAr="مقر الصندوق: نقابة الأطباء او المقر الذي تراه اللجنة مناسباً يهدف الصندوق الى تحقيق التكافل بين الأعضاء المشتركين فيه بما يكفل توفير الرعاية الاجتماعية اللائقة لهم ولأسرهم من بعدهم عند حدوث العجز الكامل او الوفاة لأحد أعضائه."
                  textEn="The fund's headquarters: the Doctors' Syndicate or the headquarters that the committee deems appropriate. The fund aims to achieve solidarity among the members participating in it in a way that ensures the provision of appropriate social care for them and their families after them in the event of total disability or death of one of its members."
                />

                <SubTitle
                  titleAr="الإشتراك في الصندوق وشروطه:"
                  titleEn="Subscription to the fund and its conditions:"
                />
                <Parag
                  textAr="1- جميع الخطوط تحت مظلة النقابة ، وبذلك تقدم جميع الخدمات من خلالها."
                  textEn="1- Subscription to the fund is optional for members of the Jordanian Doctors' Syndicate who are working and have paid all financial obligations according to the laws and regulations of the syndicate in effect."
                />
                <Parag
                  textAr="2- عروض حصرية لنقابة الأطباء 'عرض الجيش الأبيض' وغيرها من العروض."
                  textEn="2- A doctor who is over (55 years old) is currently entitled to subscribe to the fund for the first time unless the law is amended again by the General Assembly."
                />
                <Parag
                  textAr="3- إضافة حزم الاتصال الدولي والتجوال الدولي باسعار مخفضة بدون رسوم تأمين حتى لو كان الطبيب خارج البلاد."
                  textEn="3- Anyone who wishes to subscribe to the fund must personally submit an application on the form prepared for this purpose to the fund's secretary. If he is an expatriate, he must submit the application according to the rules before the embassy in the country in which he is an expatriate."
                />
                <Parag
                  textAr="4- توفر 500 دقيقة واكثر حسب التعرفة مجانا على شبكة جوال."
                  textEn="4- No changes, modifications or cancellations of any of the contents of the application may be made except by a written letter from the participating member addressed to the Fund Management Committee. Amendments shall not be effective unless approved by the Fund Management Committee. If the member is an expatriate, the application shall be submitted in accordance with the rules before the embassy in the country in which he is an expatriate."
                />

                <SubTitle
                  titleAr="لجنة إدارة الصندوق للدورة التاسعة من (2022-2025):"
                  titleEn="Fund Management Committee for the 9th Cycle (2022-2025):"
                />
                <DoctorsTable />
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

export default SocialSolidarityFund;
