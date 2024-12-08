"use client";

import { SubTitle, Parag, ClickHere} from "../../components/Other/Other";
import Image from "next/image";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";

const MobilePhoneFund = () => {
  const { language } = useLanguage();

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === "ar" ? "صندوق التأمين الصحي الأختياري" : "Optional Health Insurance Fund"}
      />
      <div className="container my-10">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="w-full ">
                <Image
                  src="/images/blog/bannder-ad.png"
                  alt="About Optional Health Insurance Fund"
                  width={2000}
                  height={2000}
                  className="h-[400px] w-full object-cover object-center"
                />
              </div>
              <div className="my-12 lg:mb-0">
                <SubTitle
                  titleAr="نظرة عامة حول صندوق التأمين الصحي الأختياري:"
                  titleEn="Overview of the Optional Health Insurance Fund:"
                />
                <Parag
                  textAr="صندوق تكافلي انشا عام 2002  تحت مظلة نقابة الاطباء  يهدف الى تامين الاطباء وعائلاتهم  و يدار ذاتيا  من قبل هيئة ادارة منتخبة من الجمعية العمومية لمشتركي  الصندوق، استمد نجاحه و استمراريته  من التزام و حرص المشتركين و كذلك  القائمين على ادارته  على  تطبيق التعليمات و الشروط بعدالة و مساواة بين الزملاء."
                  textEn="A mutual fund established in 2002 under the umbrella of the Doctors Syndicate, aiming to provide insurance for doctors and their families. It is self-managed by an elected board of directors from the general assembly of the fund’s subscribers. Its success and continuity are derived from the commitment and keenness of the subscribers and those in charge of its management to implement the instructions and conditions with justice and equality among colleagues."
                />
                
                <SubTitle
                  titleAr="الإشتراك في الصندوق:"
                  titleEn="Subscription to the Fund:"
                />
                <Parag
                  textAr="1- يصبح التامين الزاميا بعد الاشتراك للمرة الاولى ."
                  textEn="1- Insurance becomes mandatory after subscribing for the first time."
                />
                <Parag
                  textAr="2- يشترط للاستفادة من التامين ان يكون الطبيب مسددا لالتزاماته المالية للصندوق و النقابة نشرة إرشادية مختصرة."
                  textEn="2- To benefit from insurance, the doctor must have paid his financial obligations to the fund and the union. Brief guidance leaflet."
                />
                <Parag
                  textAr="3- تامين الاسرة ( الزوجة/ الزوج + الابناء ) الزامي ."
                  textEn="3- Family insurance (wife/husband + children) is mandatory."
                />
                <Parag
                  textAr="4- الابناء الذكور حتى سن 20 و تمدد الاهلية  لمن هم على مقاعد الدراسة  الى سن 25  ايهما اولا."
                  textEn="4- 4- Male children up to the age of 20 and eligibility is extended for those in school until the age of 25, whichever comes first."
                />
                <Parag
                  textAr="5- البنات العازبات بغض النظر عن العمر."
                  textEn="5- 5- Single girls regardless of age."
                />
                <Parag
                  textAr="6- ممكن استثناء اي فرد  من الاسرة  اذا كان يملك  تامين صحي اخر ساري المفعول لسنة  و يدفع رسم استثناء سنوي مقداره 10 دنانير عن هذا الفرد."
                  textEn="6- Any family member can be exempted if he has another valid health insurance for a year and pays an annual exemption fee of 10 dinars for this individual."
                />
                <Parag
                  textAr="7- يصدر بطاقة تامين صحي لكل مؤمن حسب المدة المسددة القسط ."
                  textEn="7- A health insurance card is issued for each insured person according to the period for which the premium was paid."
                />
                <Parag
                  textAr="8- لغايات احتساب القسط  يعتمد سنة الميلاد  لتحديد الفئة العمرية دون اعتبار لشهر ويوم الميلاد  كما يحتسب كامل قسط شهر الاشتراك دون اعتبار لكسور ايام شهر الاشتراك."
                  textEn="8- For the purposes of calculating the premium, the year of birth is used to determine the age group without regard to the month and day of birth, and the full premium for the subscription month is calculated without regard to fractions of days in the subscription month."
                />

                <SubTitle
                  titleAr="الوثائق المطلوبة للإشتراك(تعبئة طلب الاشتراك من قبل الطبيب شخصيا لدى الصندوق):"
                  titleEn="Documents required for subscription(Filling out the subscription application by the doctor personally at the fund):"
                />
                <Parag
                  textAr="1- دفتر العائلة."
                  textEn="1- Family book."
                />
                <Parag
                  textAr="2- صور شخصية عدد 1 لكل فرد مؤهل للاشتراك."
                  textEn="2- One personal photo for each eligible member."
                />
                <Parag
                  textAr="3- للاطفال بعمر سنتين فما دون – ما يفيد بان الطفل بصحة جيدة و خال من الامراض و التشوهات الخلقية."
                  textEn="3- For children aged two years and under - proof that the child is in good health and free from diseases and congenital deformities."
                />
                <Parag
                  textAr="4- ان يكون الطبيب  مسددا للالتزامات المالية للنقابة."
                  textEn="4- The doctor must have paid the financial obligations to the union."
                />

                <SubTitle
                  titleAr="تجديد التأمين و دفع الأقساط:"
                  titleEn="Renew insurance and pay premiums:"
                />
                <Parag
                  textAr="1- تسديد  القسط  قبل انتهاء صلاحية التامين  المثبت على البطاقة او الوصل  تجديد التأمين و دفع الأقساط."
                  textEn="1- Paying the installment before the expiry of the insurance proven on the card or receipt Renewing the insurance and paying the installments."
                />
                <Parag
                  textAr="2- على المشترك  تقديم الوثائق المطلوبة لاثبات اهلية الانتفاع بالتامين او الاستثناء منه بشكل سنوي."
                  textEn="2- The subscriber must submit the required documents to prove eligibility to benefit from the insurance or exemption from it on an annual basis."
                />
                <Parag
                  textAr="3- يمنح فترة امهال لتسديد القسط مدتها 30 يوم من تاريخ انتهاء صلاحية التامين ."
                  textEn="3- A grace period of 30 days is granted to pay the installment from the date of expiry of the insurance."
                />
                <Parag
                  textAr="4- اذا لم يتم دفع القسط  ضمن المدة القانونية و قبل انتهاء فترة الامهال يخضع المشترك لشروط اعادة العضوية."
                  textEn="4- If the installment is not paid within the legal period and before the expiry of the grace period, the subscriber is subject to the conditions for reinstatement of membership."
                />

                <SubTitle
                  titleAr="شروط إعادة العضوية:"
                  titleEn="Renew insurance and pay premiums:"
                />
                <Parag
                  textAr="1- ان يسدد الاقساط من تاريخ الانقطاع والى تاريخ سنة قادمة من تاريخ تقديم الطلب ( يستثنى من ذلك من انقطع مدة اطول من 5 سنوات )."
                  textEn="1- To pay the installments from the date of interruption until the next year from the date of submitting the application (except for those who have been interrupted for a period longer than 5 years)."
                />
                <Parag
                  textAr="2- يخضع لفترة انتظار مدتها 60 يوم  من تاريخ طلب اعادة العضوية."
                  textEn="2- Subject to a waiting period of 60 days from the date of the request to restore membership."
                />
                <Parag
                  textAr="3- ان يسدد كافة الالتزامات المالية المترتبة للنقابة."
                  textEn="3- To pay all financial obligations due to the union."
                />
                <Parag
                  textAr="4- يكون غير مؤمن خلال فترة الانقطاع."
                  textEn="4- To be uninsured during the interruption period."
                />

                <SubTitle
                  titleAr="تجميد العضوية:"
                  titleEn="Freezing Membership:"
                />
                <Parag
                  textAr="1- في حال الاقامة خارج الاردن لمدة سنة بحد ادنى."
                  textEn="1- In case of residing outside Jordan for a minimum of one year."
                />
                <Parag
                  textAr="2- الحصول على تامين صحي جديد مع جهة اخرى  للمرة الاولى بعد الاشتراك بالصندوق."
                  textEn="2- Obtaining new health insurance with another party for the first time after joining the Fund."
                />
                <Parag
                  textAr="3- لا يترتب على الطبيب دفع اقساط عن مدة تجميد العضوية الموافق عليها ."
                  textEn="3- The doctor is not required to pay installments for the approved membership freeze period."
                />
                <Parag
                  textAr="4- يكون تجميد العضوية لمدة سنة واحدة قابل للتجديد بعد تقديم الوثائق اللازمة.."
                  textEn="4- Freezing membership for one year is renewable after submitting the necessary documents."
                />
                <Parag
                  textAr="5- تقديم الطلب و الاوراق الثبوتية قبل انتهاء صلاحية التامين (او صلاحية التجميد في حال طلب تمديد التجميد) ."
                  textEn="5- Submitting the application and supporting documents before the expiration of the insurance (or the validity of the freeze in the event of a request to extend the freeze)."
                />
                <Parag
                  textAr="6- موافقة ادارة الصندوق على الطلب."
                  textEn="6- Approval of the Fund's management of the application."
                />

                <SubTitle
                  titleAr="التغطيات داخل الأردن حصريا:"
                  titleEn="Coverage inside Jordan exclusively:"
                />
                <Parag
                  textAr="1- الحالات  المرضية المشمولة بموجب التعليمات و التي تستدعي الضرورة الطبية الاقامة  بالمستشفى."
                  textEn="1- Medical cases covered by the instructions and which require medical necessity to stay in the hospital."
                />
                <Parag
                  textAr="2- اجراءت  تنظير الجهاز الهضمي و القصبات الهوائية و قسطرة القلب  حتى لو تمت كمريض خارجي بالمستشفى ( دون منامة)."
                  textEn="2- Procedures for gastrointestinal endoscopy, bronchoscopy and cardiac catheterization even if performed as an outpatient in the hospital (without hospitalization)."
                />
                <Parag
                  textAr="3- تغطى بعض  الاجراءات  كمريض خارجي و بنسبة 80% و هي:"
                  textEn="3- Some procedures are covered as an outpatient at a rate of 80%, which are:"
                />
                <Parag
                  textAr="•	{CT-Scan} { MRI } Mammogram}- {Echocardiogram}- {Treadmill } - { EEG}."
                  textEn="• {CT-Scan} {MRI} Mammogram}- {Echocardiogram}- {Treadmill} - {EEG}."
                />
                <Parag
                  textAr="•	 تفتيت الحصى."
                  textEn="•  Lithotripsy"
                />
                <Parag
                  textAr="•	 الإصابات والكسور الناجمة عن الحوادث غير القضائية."
                  textEn="• Injuries and fractures resulting from non-judicial accidents."
                />
                <Parag
                  textAr="•	 الاجراءات الجراحية المشمولة بموجب هذه التعليمات."
                  textEn="• Surgical procedures covered by these instructions."
                />
                <Parag
                  textAr="4- الاقامة بالدرجة الاولى."
                  textEn="4- First class accommodation."
                />
                <Parag
                  textAr="5- السقف السنوي لكل فرد مؤمن هو 14000 على ان لا يتجاوز  سقف الادخال الواحد 7000 دينار ."
                  textEn="5- The annual ceiling for each insured person is 14,000, provided that the ceiling for a single admission does not exceed 7,000 dinars."
                />
                <Parag
                  textAr="6- يتحمل الطبيب مبلغ  10 دنانير من فاتورة ادخال المشترك للمستشفى  و 50 دينار من فاتورة ادخال المنتفع للمستشفى و15 دينار لكل من    اجراءات  قسطرة الشرايين و تنظيرالجهاز الهضمي العلوي و السفلي والتي تتم  للمنتفع كحالة يومية فقط (دون المبيت بالمستشفى)."
                  textEn="6- The doctor bears 10 dinars from the subscriber's hospital admission bill, 50 dinars from the beneficiary's hospital admission bill, and 15 dinars for each of the arterial catheterization procedures and upper and lower gastrointestinal endoscopy procedures that are performed for the beneficiary as a daily case only (without an overnight stay in the hospital)."
                />
                <Parag
                  textAr="7- الوصفة الطبية عند الخروج على نفقة المريض."
                  textEn="7- Medical prescription upon discharge at the patient's expense."
                />
                <Parag
                  textAr="8- يتحمل المؤمن عند بلوغ سن 65 سنة  مانسبته 20% من فاتورة المستشفى بالاضافة لما ورد اعلاه."
                  textEn="8- The insured bears 20% of the hospital bill upon reaching the age of 65 in addition to the above."
                />
                <Parag
                  textAr="9- يتحمل الطبيب المشترك مساهمة ضمان الاطباء في بدل المعالجات  في حال استنفاذه للمبلغ المقرر او جزأ منه او لم يعد مؤهلا للاستفادة من تلك المساهمة."
                  textEn="9- The subscriber's doctor bears the contribution of the doctors' insurance in the treatment allowance in the event that he exhausts the prescribed amount or part of it or is no longer eligible to benefit from that contribution."
                />

                <SubTitle
                  titleAr="حق الطبيب على المجتمع منافع الحمل والولادة الطبيعية بعد 280 يوم من اشتراك السيدة بالصندوق:"
                  titleEn="The doctor's right to society: Benefits of pregnancy and natural childbirth after 280 days of the woman's subscription to the fund:"
                />
                <Parag
                  textAr="1- القيصرية 900 دينار."
                  textEn="1- Caesarean section 900 dinars."
                />
                <Parag
                  textAr="2- الولادة الطبيعية 550 دينار."
                  textEn="2- Natural childbirth 550 dinars."
                />
                <Parag
                  textAr="3- الاجهاض القانوني  350 دينار."
                  textEn="3- Legal abortion 350 dinars."
                />

                <SubTitle
                  titleAr="الوثائق المطلوبة في حال تقديم مطالبة نقدية:"
                  titleEn="Documents required in case of submitting a cash claim:"
                />
                <Parag
                  textAr="( نشجع المؤمن باستخدام البطاقة للحصول على نسبة التغطية الافضل حسب التعليمات )."
                  textEn="(We encourage the insured to use the card to obtain the best coverage rate according to the instructions)."
                />
                <Parag
                  textAr="اذا قام المؤمن  بتسديد بدل معالجة مشمولة مباشرة للجهة الطبية يتوجب علية ابلاغ الصندوق خلال 24 ساعة من الادخال/ الاجراء."
                  textEn="If the insured pays the covered treatment allowance directly to the medical entity, he must notify the fund within 24 hours of admission/procedure."
                />
                <Parag
                  textAr="تقديم الوثائق التالية للمطالبة باعادة النفقات خلال مدة لا تزيد عن  يوم 30 من تاريخ  الخروج من المستشفى / او  الاجراء:"
                  textEn="Submit the following documents to claim reimbursement within a period not exceeding 30 days from the date of discharge from the hospital/or procedure:"
                />
                <Parag
                  textAr="1- فاتورة مالية رسمية اصلية  مختومة و موقعة حسب الاصول."
                  textEn="1- Original official financial invoice stamped and signed according to the rules."
                />
                <Parag
                  textAr="2- تفاصيل  الفاتورة."
                  textEn="2- Invoice details."
                />
                <Parag
                  textAr="3- سند القبض الاصلي مختوم و موقع حسب الاصول   (الوصل)."
                  textEn="3- Original receipt stamped and signed according to the rules (receipt)."
                />
                <Parag
                  textAr="4- تقرير طبي  مختوم و موقع حسب الاصول."
                  textEn="4- Medical report stamped and signed according to the rules."
                />
                <Parag
                  textAr="5- نتائج فحص الانسجة + كافة تقارير صور الاشعة و الالتراساوند و الرنين و الطبقية لا تقبل المطالبات المقدمة بعد 30 يوم من الاجراء ."
                  textEn="5- Tissue examination results + all X-ray, ultrasound, MRI and CT scan reports. Claims submitted after 30 days from the procedure are not accepted."
                />

                <SubTitle
                  titleAr="يستثنى من التغطيات بموجب هذه التعليمات الحالات الواردة أدناه:"
                  titleEn="The following cases are excluded from coverage under these instructions:"
                />
                <Parag
                  textAr="1- عمليات التجميل ما لم تكن ناتجة عن حادث مشمول وقع خلال سريان التأميــن."
                  textEn="1- Cosmetic surgeries unless they result from a covered accident that occurred during the insurance period."
                />
                <Parag
                  textAr="2- عمليات تشطيب القرنية وتصحيح النظر والنظارات ومعالجة نقص السمع والمعينات السمعية والبصرية."
                  textEn="2- Corneal finishing, vision correction, glasses, hearing loss treatment, hearing and visual aids."
                />
                <Parag
                  textAr="3- الأمراض العقلية والنفسية للمنتفعين."
                  textEn="3- Mental and psychological illnesses of beneficiaries."
                />
                <Parag
                  textAr="4- مرض نقص هرمون النمو."
                  textEn="4- Growth hormone deficiency disease."
                />
                <Parag
                  textAr="5- عمليات تطويل الأطراف وتصحيح حالات انحراف العمود الفقري."
                  textEn="5- Lip lengthening surgeries and correction of spinal curvature cases."
                />
                <Parag
                  textAr="6- حالات العقم والضعف الجنسي لكلا الجنسين."
                  textEn="6- Cases of infertility and sexual weakness for both sexes."
                />
                <Parag
                  textAr="7- وسائل منع الحمل، والمستحضرات الصيدلانية غير المسجلة لدى وزارة الصحة كأدوية والأعشاب، وأدوية إنقاص الوزن وفقدان الشهية، الصلع، الأغذية المساعدة والمطاعيم."
                  textEn="7- Contraceptives, pharmaceutical preparations not registered with the Ministry of Health such as medicines and herbs, weight loss and appetite loss medications, baldness, auxiliary foods and vaccines."
                />
                <Parag
                  textAr="8- الإصابات الناجمة عن حوادث قضائية."
                  textEn="8- Injuries resulting from judicial accidents."
                />
                <Parag
                  textAr="9- الإصابات الناجمة عن تعاطي الكحول والمخدرات وإيذاء النفس ومحاولات الانتحار."
                  textEn="9- Injuries resulting from alcohol and drug abuse, self-harm and suicide attempts."
                />
                <Parag
                  textAr="10- مرض نقص المناعة المكتسب ( الأيدز) والمركب المرتبط بالأيدز."
                  textEn="10- Acquired immunodeficiency syndrome (AIDS) and AIDS-related complex."
                />
                <Parag
                  textAr="11- علاج اللثة والأسنان."
                  textEn="11- Treatment of gums and teeth."
                />
                <Parag
                  textAr="12- الإصابات الناتجة عن الزلازل والفيضانات والكوارث الطبيعية الاخرى والحروب والرياضات الخطرة."
                  textEn="12- Injuries resulting from earthquakes, floods, other natural disasters, wars and dangerous sports."
                />
                <Parag
                  textAr="13- التشوهات والأمراض الخلقية."
                  textEn="13- Congenital deformities and diseases."
                />
                <Parag
                  textAr="14- حالات نقل الأعضاء وغسيل الكلى والسرطان بعد اثبات التشخيص نسيجيا."
                  textEn="14- Organ transplantation, dialysis and cancer cases after confirming the diagnosis by tissue."
                />
                <Parag
                  textAr="15- تستثنى الحالات المرضية المشخصة السابقة لتاريخ التأمين وغير المعلن عنها في طلب الاشتراك أما الحالات المرضية السابقة لتاريخ التأمين والمعلن عنها في طلب الاشتراك تخضع لفترة انتظار مدتها سنة واحدة من تاريخ الاشتراك."
                  textEn="15- Diseases diagnosed prior to the date of insurance and not declared in the subscription application are excluded. However, cases prior to the date of insurance and declared in the subscription application are subject to a waiting period of one year from the date of subscription."
                />
                <Parag
                  textAr="16- العمليات الجراحية لانقاص الوزن."
                  textEn="16- Weight loss surgeries."
                />
                <Parag
                  textAr="17- معالجة هشاشة العظام بالعقاقير و الادوية."
                  textEn="17- Treatment of osteoporosis with drugs and medications."
                />
                <ClickHere
                  urlPathAr="/files/funds/health_insurance_fund.pdf"
                  urlPathEn="/files/funds/health_insurance_fund.pdf"
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
