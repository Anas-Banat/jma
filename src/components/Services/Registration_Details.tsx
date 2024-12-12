import { RegistrationType } from "@/types/registration_details";

const registration_details: RegistrationType[] = [
  {
    labelAr: "التسجيل المؤقت لغايات الامتياز - الأردنيين",
    labelEn: "Temporary registration for franchise purposes - Jordanians",
    value: "temp-jordanian",
    detailsAr: `المتطلبات:
      1- صور شخصية عدد (٢) (ترفق مع طلب التسجيل المدخل عن طريق النت من قبل الطبيب على موقع النقابه (www.jma.org.jo) .خدمات الكترونيه / تسجيل للامتياز.
      2- صورة عن هوية الأحوال المدنيه.
      3- صوره عن البطاقه التعريفيه لابناء الاردنيات.
      4- صورة عن شهادة الميلاد.
      5- صورة مصدقة من وزاره التربيه/قسم التصديقات اللويبده عن كشف علامات التوجيهي.
      6- صورة عن السنة التحضيرية لغير خريجي الجامعات الأردنيه.
      7- صورة مصدقة من وزاره التعليم العالي في الجبيهه عن كشف علامات الشهادة الجامعية.
      8- صورة مصدقة من وزاره التعليم العالي في الجبيهه عن شهادة البكالوريوس.
      9- صورة مصدقة عن شهادة المعادلة لغير خريجي الجامعات الأردنية من وزاره التعليم العالي (مابعد ١٦-١١-١٩٩٣ + سنه التدريب الاضافيه (لخريجي الجامعه التي تكون مده الدراسه فيها ٥ سنوات) من وزاره التعليم العالي.
      10- رسوم الامتياز ٦٠ دينار.
      11- يتم استقبال طلبات اطباء الامتياز وتسجيلهم في المركز الرنسي في عمان وفي مراكز اللجان الفرعيه في كل من محافظات الكرك واربد والزرقاء.
      `,
    detailsEn: `The Requirments:
      1- Two personal photos (attached to the registration request entered online by the doctor on the Syndicate website (www.jma.org.jo). Electronic services / registration for internship.
      2- A copy of the civil status ID.
      3- A copy of the identification card for children of Jordanian women.
      4- A copy of the birth certificate.
      5- A certified copy from the Ministry of Education/Luweibdeh Authentication Department of the Tawjihi transcript.
      6- A copy of the preparatory year for non-graduates of Jordanian universities.
      7- A certified copy from the Ministry of Higher Education in Al-Jubaiha of the transcript of university degrees.
      8- A certified copy from the Ministry of Higher Education in Al-Jubaiha of the bachelor's degree.
      9- A certified copy of the equivalency certificate for non-graduates of Jordanian universities from the Ministry of Higher Education (after 16-11-1993 + the additional training year (for graduates of the university whose study period is 5 years) from Ministry of Higher Education.
      10- Internship fees 60 dinars.
      11- Applications for internship doctors are received and registered at the main center in Amman and at the sub-committee centers in each of the governorates of Karak, Irbid and Zarqa.
      `,
  },
  {
    labelAr: "التسجيل المؤقت لغايات الامتياز - غير الأردنيين",
    labelEn: "Temporary registration for franchise purposes - Non Jordanians",
    value: "temp-non-jordanian",
    detailsAr: `الأوراق المطلوبة:
      1- صور شخصية عدد (٢) (ترفق مع طلب التسجيل المدخل عن طريق النت من قبل الطبيب على موقع النقابه www.ima.org.jo) خدمات الكترونيه / تسجيل الأطباء للإمتاز.
      2- صورة عن جواز السفر.
      3- شهادة عدم محكومية.
      4- إذن إقامة من وزارة الداخلية ان وجدت او لاحقا.
      5- صورة مصدقة من وزاره التربيه / اللويبده عن كشف علامات التوجيهي.
      6- صورة مصدقة من وزاره التعليم العالي / الجبيهه عن شهادة البكالوريوس في الطب العام+السنه التحضيريه.
      7- صورة مصدقة من وزاره التعليم العالي / الجبيهه عن كشف علامات الجامعة.
      8- صورة مصدقة من وزاره التعليم العالي / الجبيهه عن معادلة الشهادة لخريجي الجامعات غير الأردنية.
      9- رسوم الامتياز ١٠٠ دينار.
      ** وللحصول على برنامج الاقامه او الاختصاص او الزماله يتم اضافه المتطلبات التالية (من 1 - 13 ):
      10- سنة التدريب (الامتياز) او ٣ سنوات خبره أو شهاده البورد لمن يرغب بالزماله.
      11- تصريح مزاوله المهنه وعضويه انتساب لاي نقابه او جمعيه طبيه عربيه لخريجي الجامعات غير الاردنيه للاطباء العرب وترخيص مزاوله للاجانب من اجل الاعفاء من الفحص الاجمالي.
      12- كتاب موافقه المستشفى على برنامج الاقامه ونسبه قبول غير الاردنيين الى الاردنيين وبشرط عدم تجاوزها ٣٠% بالنسبه للمستشفيات الخاصه فقط.
      13- شهاده البورد لمن يرغب باستكمال الزماله.
      ** وللعمل الاختصاصي يتم اضافه المتطلبات التالية (من 1 - 16 ):
      14- الاعلان عن طريق النقابة عن الوظيفة الشاغرة في الجهة التي ينوي العمل بها ودفع رسوم مقدارها ١٠٠ دينار واذا لم يتقدم اي طبيب اردني تتم الموافقة.
      15- رسوم الاقامه ١٠٠ دينار.
      16- رسوم الزماله او الاختصاص ٣٠٠ دينار.
      `,
    detailsEn: `The Requirments:
      1- Two personal photos (attached to the registration request entered online by the doctor on the Association website (www.jma.org.jo). Services / registration of Doctors.
      2- A copy of the passport.
      3- A certificate of non judgement or good behavior from the court inside.
      4- A residence permit from the Ministry of Interior if any or later.
      5- A certified copy from the Ministry of Education / Al-Luweibdeh of the Tawjihi transcript.
      6- A certified copy from the Ministry of Higher Education / Al-Jubaiha of the Bachelor's degree in General Medicine + the preparatory year.
      7- A certified copy from the Ministry of Higher Education / Al-Jubaiha of the university transcript.
      8- A certified copy from the Ministry of Higher Education / Al-Jubaiha of the equivalency of the certificate for graduates of non-Jordanian universities.
      9- Excellence fees 100 dinars.
      ** To obtain a residency, specialty or fellowship program, the following requirements are added (from 13-1):
      10- One year of training (internship) or 3 years of experience or a board certificate for those wishing to obtain a fellowship.
      11- A permit to practice the profession and membership in any Arab medical union or association for graduates of non-Jordanian universities for Arab doctors and a license to practice for foreigners in order to be exempt from the comprehensive examination.
      12- A letter of approval from the hospital for the residency program and the percentage of acceptance of non-Jordanians to Jordanians, provided that it does not exceed 30% for private hospitals only.
      13- A board certificate for those wishing to complete the fellowship.
      ** For specialist work, add the following requirements (from 16-1):
      14- Announcement through the union about the vacant position in the entity in which he intends to work and payment of a fee of 100 dinars, and if no Jordanian doctor applies, approval will be granted.
      15- Residency fees 100 dinars.
      16- Fellowship or specialization fees 300 dinars.
      `,
  },
  {
    labelAr: "التسجيل على قائمة الفحص الإجمالي",
    labelEn: "Registration on the Comprehensive Examination List",
    value: "exam-list",
    detailsAr: `المتطلبات:
      1- شهادة إنهاء فترة الامتياز من المستشفى
      2- في حال وجود تسجيل سابق في النقابة تكون الرسوم بمقدار (31) دينار للأردنيين وأبناء الأردنيات و(101) دينار لغير الأردنيين 
      3- في حال عدم وجود تسجيل سابق في النقابة تكون الرسوم بمقدار (90) دينار للأردنيين وأبناء الأردنيات و(106) دينار لغير الأردنيين
      `,
    detailsEn: `The Requirments:
      1- A certificate of completion of the internship period from the hospital.
      2- If there is a previous registration in the Association, the fee will be (31) dinars for Jordanians and (101) dinars for non-Jordanians.
      3- If there is no previous registration in the Association, the fee will be (90) dinars for Jordanians and (106) dinars for non-Jordanians.
      `,
  },
  {
    labelAr: "التسجيل الدائم بعد اجتياز الفحص الإجمالي - الأردنيين",
    labelEn: "Permanent registration after passing the comprehensive examination - Jordanians",
    value: "permanent-exam-jordanian",
    detailsAr: `المتطلبات:
      1- صورة مصدقة عن كشف علامات الفحص الإجمالي
      2- رسوم مقدارها (36) دينار`,
    detailsEn: `The Requirments:
      1- A certified copy of the results of the comprehensive examination
      2- A fee of (36) dinars
      `,
  },
  {
    value: "permanent-jordanian",
    labelAr: "التسجيل الدائم للأردنيين خريجي الجامعات الأردنية",
    labelEn: "Permanent registration for graduates of Jordanian universities",
    detailsAr: `المتطلبات:
      1- شهادة إنهاء فترة الامتياز من المستشفى.
      2- شهادة تأكيد من المجلس الطبي الأردني بإنهاء فترة الامتياز.
      3- رسوم مقدارها (36) دينار.
      `,
    detailsEn: `The Requirments:
      1- Certificate of completion of fellowship from the hospital.
      2- Certificate of completion of fellowship from the Jordanian Medical Council.
      3- A fee of (36) dinars
      `,
  },    
];

export default registration_details;
