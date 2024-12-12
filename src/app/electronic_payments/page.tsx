"use client";

import { useLanguage } from "@/context/LanguageContext";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { ClickHere, Parag, SubTitle } from "../../components/Other/Other";
import Image from "next/image";

const AboutPage = () => {
  const { language } = useLanguage();

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === "ar" ? "الدفع الألكتروني" : "Electronic Payments"}
      />
      <div className="dark:bg-dark" >
            <div className="container py-10 dark:bg-dark">
              <div className="wow fadeInUp" data-wow-delay=".2s">
                <div className="-mx-4 flex flex-wrap items-center">
                  <div className="w-full px-4">
                    <div className="w-full ">
                      <Image
                        src="/images/services/eFawatercom2.png"
                        alt="eFawatercom"
                        width={2000}
                        height={2000}
                        className="h-[400px] w-full object-cover object-center"
                      />
                    </div>
                      <SubTitle
                        titleAr="خدمات الدفع الإلكتروني"
                        titleEn="Electronic Payment Services"
                      />
                      <Parag
                        textAr="تسعى النقابة إلى تسهيل عملية الدفع للأعضاء من خلال توفير خدمة الدفع الإلكتروني عبر منصة 'إي فواتيركم'. "
                        textEn="The association aims to simplify the payment process for its members by offering an electronic payment service through the 'eFawateercom' platform. "
                      />
                      <Parag
                        textAr="تهدف هذه الخدمة إلى توفير تجربة دفع سلسة وفعالة تسهم في تعزيز خدمات النقابة وتسهيل الوصول إليها."
                        textEn="This service aims to provide a smooth and efficient payment experience, enhancing the association's services and making them more accessible."
                      />
                      <Parag
                        textAr="تتيح هذه الخدمة للأعضاء دفع الرسوم المستحقة بكل سهولة وأمان باستخدام طرق الدفع المختلفة مثل البطاقات الائتمانية، والحوالات البنكية، وغيرها."
                        textEn="This service allows members to pay their fees easily and securely using various payment methods such as credit cards, bank transfers, and more."
                      />
                      <Parag
                        textAr="يمكن للأعضاء إتمام معاملاتهم المالية عبر تطبيقات الهواتف الذكية المتوافقة مع 'إي فواتيركم'، مما يوفر وقتهم وجهدهم."
                        textEn="Members can complete their financial transactions through the compatible mobile apps for eFawateercom, saving both time and effort. "
                      />

                      <SubTitle
                        titleAr="دليل استخدام اي-فواتيركم للدفع الألكتروني"
                        titleEn="eFawateercom Payment Guide"
                      />
                      <ClickHere
                        urlPathAr="/files/efawateercom/E-Fawateercom.pdf"
                        urlPathEn="/files/efawateercom/E-Fawateercom.pdf"
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
    </main>
  );
};

export default AboutPage;
