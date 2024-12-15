"use client";

import Image from "next/image";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";
import { SubTitle, Parag, ClickHere } from "../../components/Other/Other";


const AssociationCouncil = () => {
  const { language } = useLanguage();


  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === "ar" ? "الصندوق التعاوني للأطباء" : "Doctors Collaboration Fund"}
      />
      <div className="container my-10">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="w-full ">
                <Image
                  src="/images/blog/bannder-ad.png"
                  alt="About Doctors Collaboration Fund"
                  width={2000}
                  height={2000}
                  className="h-[400px] w-full object-cover object-center"
                />
              </div>
              <div className="my-12  lg:mb-0">
                <SubTitle
                  titleAr="نظرة عامة حول الصندوق التعاوني للأطباء:"
                  titleEn="Overview of The Doctors Collaboration Fund:"
                />
                <Parag
                  textAr="يعد صندوق التعاوني للأطباء أحد الركائز الأساسية في نقابة الأطباء الأردنية، حيث يُساهم في تنظيم ممارسة مهنة الطب وحمايتها ورفع مستوى الخدمات الطبية المقدمة للعاملين في المؤسسات بالأضافة الى تنظيم عملية التقاعد بين المؤسسات."
                  textEn="The Doctors Collaboration Fund is one of the main pillars of the Jordanian Medical Association, as it contributes to organizing and protecting the practice of the medical profession and raising the level of medical services provided to employees in institutions, in addition to organizing the retirement process between institutions."
                />
                <SubTitle
                  titleAr="أهداف الصندوق التعاوني للأطباء:"
                  titleEn="Benefits of The Doctors Collaboration Fund:"
                />
                <Parag
                  textAr="1- المساهمة في تنظيم ممارسة المهنة وحمايتها."
                  textEn="1- Participation in organizing the profession and protecting it."
                />
                <Parag
                  textAr="2- تنظيم عملية التعاقد بين المؤسسات واللجنة بما في ذلك ضبط وسائل تحصيل المطالبات المالية من هذه المؤسسات."
                  textEn="2- Organizing the contract between institutions and the council, including setting up and collecting fees from these institutions."
                />
                <Parag
                  textAr="3- المساهمة في رفع مستوى الخدمات الصحية والوقائية والعلاجية المقدمة للعاملين في المؤسسات."
                  textEn="3- Participation in raising the level of health, hygiene, and surgical services provided to employees in institutions."
                />
                <Parag
                  textAr="4- الإشراف على تقديم الخدمات الصحية المقدمة من الأطباء."
                  textEn="4- Supervision of the delivery of health services provided by doctors."
                />
                <Parag
                  textAr="5- المساهمة في دعم الصناديق المنشأة وفقا لأحكام قانون النقابة والأنظمة الصادرة بمقتضاه."
                  textEn="5- Participation in supporting the funds established and in accordance with the laws of the Association and the systems issued in accordance with them."
                />
                <SubTitle
                  titleAr="مهام لجنة إدارة الصندوق وصلاحياتها:"
                  titleEn="Management of The Doctors Collaboration Fund and its privileges:"
                />
                <Parag
                  textAr="1- الإشراف على إدارة الصندوق ومتابعة أعماله."
                  textEn="1- Supervision of the management of the Fund and its activities."
                />
                <Parag
                  textAr="2- إبرام العقود بين المؤسسات واللجنة ووضع أسس هذه العقود."
                  textEn="2- Establishing contracts between institutions and the council and setting up these contracts."
                />
                <Parag
                  textAr="3- دعوة الهيئة العامة للاجتماع ومتابعة تنفيذ قراراتها."
                  textEn="3- Inviting the General Assembly to hold meetings and monitoring the implementation of its decisions."
                />
                <Parag
                  textAr="4- إعداد مشروع الموازنة السنوية للصندوق والميزانية العمومية والتقرير السنوي عن أعماله وبياناته المالية الختامية ورفعها إلى المجلس لإقرارها."
                  textEn="4- Preparing the annual balance project for the Fund, the general fund, the annual report on its activities, financial data at the end of the year, and raising it to the Council to approve it."
                />
                <Parag
                  textAr="5- يتولى التوقيع على المعاملات المالية الخاصة بالصندوق كل من رئيس اللجنة ونائبه وأمين سر اللجنة شريطة التوقيع على أي معاملة من اثنين منهم مجتمعين على الأقل."
                  textEn="5- The Council president and vice-president and the secretary of the Council sign off on any financial transaction in the Fund, as long as at least two of them are joint."
                />
                <Parag
                  textAr="6- تحديد أسس استثمار اموال الصندوق."
                  textEn="6- Determining the basis for investing the Fund's money."
                />
                <Parag
                  textAr="7- تعيين محاسب قانوني لتدقيق حسابات الصندوق وتحديد أتعابه."
                  textEn="7- Designating a legal accountant to audit the Fund's accounts and determine their value."
                />
                <SubTitle
                  titleAr="اقتباسات من قانون النقابة:"
                  titleEn="Extracts from the Association Law:"
                />
                <Parag
                  textAr="المادة 4- يكون الاشتراك في الصندوق الزامياً للأطباء."
                  textEn="Article 4- The subscription to the Fund is mandatory for doctors."
                />
                <Parag
                  textAr="المادة 6- تجتمع اللجنة بدعوة من الرئيس أو نائبه عند غيابه مرة كل شهر وكلما دعت الحاجة ويكون اجتماعها قانونياً بحضور أغلبية أعضائها، وتتخذ قراراتها بأغلبية أصوات أعضائها، وإذا تساوت الأصوات يرجح الجانب الذي صوت معه رئيس الاجتماع."
                  textEn="Article 6- The Committee shall meet upon the invitation of the Chairman or his Deputy in his absence once a month and whenever necessary. Its meeting shall be legal with the attendance of the majority of its members, and its decisions shall be taken by a majority vote of its members. If the votes are equal, the side with which the Chairman of the meeting voted shall prevail."
                />
                <Parag
                  textAr="المادة 10- تعوّم عقود التأمين الصحي الخاصة بالمؤسسات على الأطباء جميعهم."
                  textEn="Article 10- Establishing insurance contracts for the health insurance of all institutions for doctors."
                />
                <Parag
                  textAr="المادة 11- لا يجوز للأطباء غير المزاولين وغير المسددين لالتزاماتهم المالية الاستفادة من العقود مع المؤسسات."
                  textEn="Article 11- Doctors who are not employees and not employees are not allowed to take advantage of the contracts with the institutions."
                />
                <Parag
                  textAr="المادة 20- يحيل المجلس أي شكوى ناشئة عن تطبيق أحكام هذا النظام الى اللجنة للنظر فيها ورفع توصياتها بشأنها إلى المجلس."
                  textEn="Article 20- The Council shall refer any complaint against the application of the laws of this system to the Committee and raise its recommendations to the Council."
                />
                <ClickHere
                  urlPathAr="/files/funds/doctors_collaboration_fund.pdf"
                  urlPathEn="/files/funds/doctors_collaboration_fund.pdf"
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
