"use client";

import { SubTitle, Parag} from "../../components/Other/Other";
import Image from "next/image";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";

const MobilePhoneFund = () => {
  const { language } = useLanguage();

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === "ar" ? "صندوق الهواتف الخلوية" : "Mobile Phone Fund"}
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
              <div className="my-12 lg:mb-0">
                <SubTitle
                  titleAr="نظرة عامة حول صندوق الهواتف الخلوية:"
                  titleEn="Overview of the Mobile Phone Fund:"
                />
                <Parag
                  textAr="تأسس صندوق الهواتف الخلوية سنة 2002م تحت مظلة نقابة الأطباء الأردنية وفق تعليمات وشروط النقابة ، وهو صندوق خدماتي واستشاري."
                  textEn="The Cell Phone Fund was established in 2002 under the umbrella of the Jordanian Medical Association in accordance with the instructions and conditions of the Association. It is a service and advisory fund."
                />
                <Parag
                  textAr="يقوم الصندوق بتلبية احتياجات المشتركين لديه ، وتقديم أفضل الخدمات لهم ، وارشادهم حول ألية التعامل مع الخدمات المقدمة لهم من شركات الإتصالات، حيث يعمل على استدراج أفضل العروض من شركات الاتصال و باقل التكاليف ، ضمن إستراتيجية معينة لدعم صندوق النقابة وصندوق التقاعد والضمان الاجتماعي ، بالعمل على زيادة إيرادات الصندوق."
                  textEn="The Fund meets the needs of its subscribers, provides them with the best services, and guides them on the mechanism for dealing with the services provided to them by telecommunications companies. It works to attract the best offers from telecommunications companies at the lowest costs, within a specific strategy to support the Syndicate Fund and the Retirement and Social Security Fund, by working to increase the Fund's revenues."
                />
                <Parag
                  textAr="استمد صندوق الهواتف الخلوية نجاحه واستمراريته من التزام وحرص المشتركين والقائمين على إدارته بتطبيق التعليمات والشروط."
                  textEn="The Cell Phone Fund derived its success and continuity from the commitment and keenness of subscribers and those in charge of its management to implement the instructions and conditions."
                />
                
                <SubTitle
                  titleAr="الإشتراك في الصندوق وشروطه:"
                  titleEn="Subscription to the Fund and its Conditions:"
                />
                <Parag
                  textAr="1- الإشتراك في الصندوق اختياري."
                  textEn="1- Subscription to the Fund is optional."
                />
                <Parag
                  textAr="2- أن يكون الطبيب مسدداً لالتزاماته المالية للنقابة."
                  textEn="2- The doctor must have paid his financial obligations to the Syndicate."
                />

                <SubTitle
                  titleAr="الوثائق المطلوبة للإشتراك:"
                  titleEn="Documents required for subscription:"
                />
                <Parag
                  textAr="1- تعبنة طلبات الإشتراك من قبل الطبيب شخصيا لدى الصندوق."
                  textEn="1- The doctor must fill out the subscription requests personally at the Fund."
                />
                <Parag
                  textAr="2- الهوية الشخصية."
                  textEn="2- Personal ID."
                />
                <Parag
                  textAr="3- تنفيذ تعليمات وشروط الإشترااك."
                  textEn="3- Implementation of the subscription instructions and conditions."
                />

                <SubTitle
                  titleAr="مميزات الإشتراك:"
                  titleEn="Subscription features:"
                />
                <Parag
                  textAr="1- جميع الخطوط تحت مظلة النقابة ، وبذلك تقدم جميع الخدمات من خلالها."
                  textEn="1- All lines are under the umbrella of the Syndicate, thus providing all services through it."
                />
                <Parag
                  textAr="2- عروض حصرية لنقابة الأطباء 'عرض الجيش الأبيض' وغيرها من العروض."
                  textEn="2- Exclusive offers for the Doctors Syndicate 'White Army Offer' and other offers."
                />
                <Parag
                  textAr="3- إضافة حزم الاتصال الدولي والتجوال الدولي باسعار مخفضة بدون رسوم تأمين حتى لو كان الطبيب خارج البلاد."
                  textEn="3- Adding international calling and roaming packages at reduced prices without insurance fees, Even if the doctor is outside the country."
                />
                <Parag
                  textAr="4- توفر 500 دقيقة واكثر حسب التعرفة مجانا على شبكة جوال."
                  textEn="4- Providing 500 minutes and more according to the tariff for free on the Jawwal network."
                />
                <Parag
                  textAr="5- متابعة ملاحظات وشكاوى الأطباء مع شركات الإتصال."
                  textEn="5- Follow up on doctors' comments and complaints with telecommunications companies."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MobilePhoneFund;
