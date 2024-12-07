"use client";

import { SubTitle, Parag} from "../../components/Other/Other";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";

const TermsAndConditions = () => {
  const { language } = useLanguage();

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === "ar" ? "الشروط والأحكام" : "Terms And Conditions"}
      />
      <div className="container my-10">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="my-12 lg:mb-0">
                <SubTitle
                  titleAr="الشروط والأحكام"
                  titleEn="Terms And Conditions"
                />
                <Parag
                  textAr="تعتبر جميع محتويات الموقع الالكتروني على سبيل المثال لا الحصر النصوص والرسومات والصور والملفات والروابط وملفات الصوت ملكا ل نقابة الأطباء  ومحمية بموجب قانون حماية حق المؤلف في الأردن رقم 22 لعام 1992 وتعديلاته وبموجب الاتفاقيات الدولية."
                  textEn="All contents of the website, including but not limited to texts, graphics, images, files, links and audio files, are the property of the Medical Association and are protected by the Jordanian Copyright Law No. 22 of 1992 and its amendments and by international agreements."
                />
                <Parag
                  textAr="تسمح نقابة الأطباء للغير القيام بما يلي  :-"
                  textEn="The Medical Association allows others to do the following:-"
                />
                <Parag
                  textAr="1.	لتنزيل و/أو الإطلاع و/أو الطباعة لأي معلومات منشورة للاستخدام الشخصي أو للاستخدام داخل المؤسسة ولإغراض غير تجارية."
                  textEn="1.	To download and/or view and/or print any published information for personal use or for use within the institution and for non-commercial purposes."
                />
                <Parag
                  textAr="2.	وضع روابط على موقعهم تؤشر على أماكن وجود المعلومات على الموقع."
                  textEn="2.	Place links on their site indicating where the information is located on the site."
                />
                <Parag
                  textAr="3.	إعادة نشر أجزاء بسيطة من المعلومات شرط أن يتم النشر دون التعديل وبالشكل الأصلي له مع ضرورة الإشارة بشكل واضح إلى مصدر هذه المعلومات نقابة الأطباء ."
                  textEn="3.	Republish small parts of the information provided that the publication is without modification and in its original form, with the necessity of clearly indicating the source of this information, the Medical Association."
                />
                <Parag
                  textAr="في حالة وجود حاجة للاستخدام لغير الغايات الموضحة أعلاه يرجى مخاطبة نقابة الأطباء من خلال العنوان الوارد أدناه مع مراعاة ضرورة تحديد المعلومات المطلوبة وتوضيح الهدف من الاستخدام."
                  textEn="In the event of a need for use for purposes other than those stated above, please contact the Medical Association through the address below, taking into account the necessity of specifying the required information and clarifying the purpose of use."
                />
                <Parag
                  textAr="info@jma.org.jo"
                  textEn="info@jma.org.jo"
                />
                <SubTitle
                  titleAr="إخلاء المسؤولية"
                  titleEn="Disclaimer"
                />
                <Parag
                  textAr="على الرغم من قيام نقابة الأطباء ببذل الجهد اللازم لمراعاة دقة المعلومات المنشورة وسرعة تحديثها على الموقع الإلكتروني  إلا انه لا تضمن ولا تتحمل أي مساءلة قانونية تعتمد على دقة و/أو شمولية و/أو شكل المعلومات المنشورة ولا تتحمل أي تبعات لأي خسائر ناتجة عن الاعتماد على هذه المعلومات."
                  textEn="Although the medical association makes the necessary effort to ensure the accuracy of the information published and the speed of updating it on the website, it does not guarantee or bear any legal liability based on the accuracy and/or comprehensiveness and/or form of the published information and does not bear any consequences for any losses resulting from relying on this information."
                />
                <Parag
                  textAr="بالرغم من أن الجهة   تبذل الجهد اللازم لاستمرار عمل موقعها على شبكة الانترنت ، إلا انه قد يحصل في بعض الأحيان انقطاع و/أو بطئ لخدمات الموقع لأسباب خارجة عن إرادة نقابة الأطباء ، وفي هذه الحالة فان نقابة الأطباء لا تتحمل أي مساءلة قانونيه و/أو خسائر ناتجة عن ذلك."
                  textEn="Although the Entity makes the necessary effort to keep its website running on the Internet, the website's services may sometimes be interrupted and/or slow for reasons beyond the control of the Medical Association, in which case the Medical Association does not bear any legal liability and/or losses resulting from that."
                />
                <Parag
                  textAr="إن الروابط الموجودة على الموقع والتي تنقل المستخدم إلى مواقع أخرى غير مشمولة بهذه السياسة ولا تتحمل نقابة الأطباء أي مسؤولية قانونية ناتجة عن الانتقال إلى هذه المواقع."
                  textEn="The links on the website that transfer the user to other sites are not covered by this policy and the Medical Association does not bear any legal responsibility resulting from moving to these sites."
                />
                <SubTitle
                  titleAr="شروط الاستخدام"
                  titleEn="Terms of Use"
                />
                <Parag
                  textAr="تنطبق قواعد استخدام الموقع الالكتروني على جميع الزوار. ويحق  لنقابة الأطباء  إيقاف و/أو منع و/أو إنهاء استخدام الموقع عن أحد المستخدمين في حال حدوث انتهاك من قبله لتلك القواعد، أو في حال توفرت أسباب تدعو للاعتقاد بأن أحد المستخدمين قد انتهك وخالف شروط وقواعد الاستخدام."
                  textEn="The rules for using the website apply to all visitors. The Medical Association has the right to suspend and/or prevent and/or terminate the use of the site by any user in the event of a violation by him of these rules, or in the event there are reasons to believe that any user has violated and breached the terms and rules of use."
                />
                <Parag
                  textAr="ويُحظر على زوار الموقع انتهاك أو محاولة انتهاك الإجراءات والقواعد المعمول بها لحماية الموقع، ويشمل ذلك على سبيل المثال، لا الحصر الأعمال التالية:"
                  textEn="Visitors to the site are prohibited from violating or attempting to violate the procedures and rules in force to protect the site, including, but not limited to, the following actions:"
                />
                <Parag
                  textAr="1- الوصول إلى البيانات التي لا يقصد تقديمها لهذا المستخدم، أو الدخول على خادم أو حساب لا يصرح للمستخدم بالدخول عليه."
                  textEn="1-  Accessing data that is not intended to be provided to this user, or entering a server or account that the user is not authorized to enter."
                />
                <Parag
                  textAr="2- محاولة إجراء اختبار أو مسح أو فحص لإمكانية إصابة نقاط الضعف في نظام أو شبكة البوابة، أو انتهاك سلامة الإجراءات أو توثيقها دون تصريح رسمي منها."
                  textEn="2- Attempting to conduct a test, survey or examination for the possibility of infecting weak points in the portal system or network, or violating the integrity of procedures or documenting them without official permission from it."
                />
                <Parag
                  textAr="3- محاولة التدخل في الخدمة المقدمة لأي مستخدم، أو مستضيف، أو شبكة، بما في ذلك على سبيل المثال وليس الحصر، عن طريق وضع فيروس على الموقع، أو زيادة الحمل عليه، أو إرسال رسائل دعائية إليه، أو إغراقه بالرسائل الإلكترونية، أو محاولة تعطيله."
                  textEn="3- Attempting to interfere with the service provided to any user, host or network, including, but not limited to, by placing a virus on the site, increasing the load on it, sending promotional messages to it, flooding it with e-mails, or attempting to disable it."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditions;
