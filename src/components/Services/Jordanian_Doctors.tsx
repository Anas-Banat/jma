"use client";

import { SubTitle, Parag} from "../../components/Other/Other";
import Image from "next/image";

const JordanianDoctors = () => {

  return (
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
                  titleAr="الأوراق المطلوبة لتسجيل الأطباء الأردنيين تسجيلاً مؤقتاً لغايات عمل سنة الإمتياز:"
                  titleEn="Documents required for temporary registration of Jordanian doctors for the purposes of the internship year:"
                />
                <Parag
                  textAr="1- صور شخصية عدد (٢) (ترفق مع طلب التسجيل المدخل عن طريق النت من قبل الطبيب على موقع النقابه (www.jma.org.jo) .خدمات الكترونيه / تسجيل للامتياز."
                  textEn="1- Two personal photos (attached to the registration request entered online by the doctor on the Syndicate website (www.jma.org.jo). Electronic services / registration for internship."
                />
                <Parag
                  textAr="2- صورة عن هوية الأحوال المدنيه."
                  textEn="2- A copy of the civil status ID."
                />
                <Parag
                  textAr="3- صوره عن البطاقه التعريفيه لابناء الاردنيات."
                  textEn="3- A copy of the identification card for children of Jordanian women."
                />
                <Parag
                  textAr="4- صورة عن شهادة الميلاد."
                  textEn="4- A copy of the birth certificate."
                />
                <Parag
                  textAr="5- صورة مصدقة من وزاره التربيه/قسم التصديقات اللويبده عن كشف علامات التوجيهي."
                  textEn="5- A certified copy from the Ministry of Education/Luweibdeh Authentication Department of the Tawjihi transcript."
                />
                <Parag
                  textAr="6- صورة عن السنة التحضيرية لغير خريجي الجامعات الأردنيه."
                  textEn="6- A copy of the preparatory year for non-graduates of Jordanian universities."
                />
                <Parag
                  textAr="7- صورة مصدقة من وزاره التعليم العالي في الجبيهه عن كشف علامات الشهادة الجامعية."
                  textEn="7- A certified copy from the Ministry of Higher Education in Al-Jubaiha of the transcript of university degrees."
                />
                <Parag
                  textAr="8- صورة مصدقة من وزاره التعليم العالي في الجبيهه عن شهادة البكالوريوس."
                  textEn="8- A certified copy from the Ministry of Higher Education in Al-Jubaiha of the bachelor's degree."
                />
                <Parag
                  textAr="9- صورة مصدقة عن شهادة المعادلة لغير خريجي الجامعات الأردنية من وزاره التعليم العالي (مابعد ١٦-١١-١٩٩٣ + سنه التدريب الاضافيه (لخريجي الجامعه التي تكون مده الدراسه فيها ٥ سنوات) من وزاره التعليم العالي."
                  textEn="9- A certified copy of the equivalency certificate for non-graduates of Jordanian universities from the Ministry of Higher Education (after 16-11-1993 + the additional training year (for graduates of the university whose study period is 5 years) from Ministry of Higher Education."
                />
                <Parag
                  textAr="10- رسوم الامتياز ٦٠ دينار."
                  textEn="10- Internship fees 60 dinars."
                />
                <Parag
                  textAr="11- يتم استقبال طلبات اطباء الامتياز وتسجيلهم في المركز الرنسي في عمان وفي مراكز اللجان الفرعيه في كل من محافظات الكرك واربد والزرقاء."
                  textEn="11- Applications for internship doctors are received and registered at the main center in Amman and at the sub-committee centers in each of the governorates of Karak, Irbid and Zarqa."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default JordanianDoctors;
