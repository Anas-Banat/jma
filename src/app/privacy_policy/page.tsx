"use client";

import { SubTitle, Parag} from "../../components/Other/Other";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
      />
      <div className="container my-10">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="my-12 lg:mb-0">
                <SubTitle
                  titleAr="سياسة الخصوصية"
                  titleEn="Privacy Policy"
                />
                <Parag
                  textAr="لا تقوم 'نقابة الأطباء' والموقع الإلكتروني الخاص بها بجمع معلومات شخصية عن زوار الموقع الإلكتروني الا إذا اختار زائر الموقع مشاركة هذه المعلومات. أن معلومات التصفح على سبيل المثال ولا الحصر مثل أوقات الزيارة وزيارة الصفحات وبلد الزيارة لا تعتبر معلومات شخصية ويحق ل 'نقابة الأطباء' استخدام هذه المعلومات لغايات تقييم استخدام الموقع وتحسينها. وباستخدام هذا الموقع الإلكتروني فإنك توافق على الشروط سياسة الخصوصية هذه."
                  textEn="The 'Medical Association' and its website do not collect personal information about visitors to the website unless the visitor chooses to share this information. Browsing information, for example, but not limited to, visit times, pages visited, and country of visit, is not considered personal information, and the 'Medical Association' has the right to use this information for the purposes of evaluating and improving the use of the website. By using this website, you agree to the terms of this privacy policy. "
                />
                <Parag
                  textAr="يتم التعامل مع جميع البيانات المزودة للموقع بخصوصيه تامة ولا يتم مشاركتها الا الأفراد والجهات المصرح لهم فقط لغايات تقديم الخدمات وإجراء الإحصائيات والدراسات والمسوحات ولن يتم مشاطرة و\ او بيع و\او نقل هذه المعلومات إلى أي طرف ثالث بدون موافقة وزوار الموقع المسبقة. "
                  textEn="All data provided to the website is treated with complete privacy and is only shared with authorized individuals and entities for the purposes of providing services and conducting statistics, studies, and surveys. This information will not be shared and/or sold and/or transferred to any third party without the prior consent of the site visitors."
                />
                <Parag
                  textAr="يحتوي هذا الموقع على روابط لمواقع خارجية وعليه فإن 'نقابة الأطباء' تخلي مسؤوليتها عن ممارسات خصوصية خارجة عن موقعها الإلكتروني. "
                  textEn="This website contains links to external websites, and accordingly, the 'Medical Association' disclaims responsibility for privacy practices outside its website. "
                />
                <Parag
                  textAr="تحتفظ نقابة الأطباء بحق إجراء أي تغيير على سياسة الخصوصية دون تقديم أي اشعار مسبق وباستمرار استخدام الزائر للموقع الإلكتروني فإنه قد وافق على هذه التغيرات وما يترتب عليها."
                  textEn="The Medical Association reserves the right to make any changes to the privacy policy without providing any prior notice. By continuing to use the website, the visitor is deemed to have accepted and agreed to these changes and their consequences."
                />
                <Parag
                  textAr="تكون قوانين المملكة الأردنية الهاشمية وحدها هي قوانين واجبة التطبيق في كل ما يتعلق بالنزاعات التي تنشأ من جراء استخدام هذا الموقع الإلكتروني كما تختص محاكم المملكة الأردنية الهاشمية حصريا بالنظر في تلك النزاعات والبت فيها."
                  textEn="The laws of the Hashemite Kingdom of Jordan alone are the applicable laws in all matters related to disputes arising from the use of this website. The courts of the Hashemite Kingdom of Jordan are exclusively competent to consider and adjudicate such disputes."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
