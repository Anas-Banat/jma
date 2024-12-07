"use client";

import { SubTitle, Parag} from "../../components/Other/Other";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";

const Welcome = () => {
  const { language } = useLanguage();

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === "ar" ? "اهلا بكم في نقابة الأطباء" : "Welcome to JMA"}
      />
      <div className="container my-10">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="my-12 lg:mb-0">
                <SubTitle
                  titleAr="نبذة عن نقابة الأطباء الأردنية:"
                  titleEn="Overview of the Jordanian Medical Association:"
                />
                <Parag
                  textAr="نقابة الأطباء الأردنية، تأسست عام 1944، وهي من أقدم النقابات المهنية في الأردن، وكان أول نقيب للنقابة الدكتور مصطفى خليفة، علماً بأن الهدف من تأسيس النقابة كما ينص القانون هو خدمة منتسبيها وتنظيم مهنة الطب بما يعزز من مستوى الخدمات الصحية المقدمة للمجتمع."
                  textEn="The Jordanian Medical Association, founded in 1944, is one of the oldest professional associations in Jordan. The first president of the association was Dr. Mustafa Khalifa. The aim of establishing the association, as stipulated by law, is to serve its members and organize the medical profession in a way that enhances the level of health services provided to the community."
                />
                <Parag
                  textAr="تقدم النقابة خدمات متعددة، منها التأمين الصحي، برامج التقاعد، إضافة إلى المساهمة في تحسين معايير الرعاية الصحية بالتعاون مع الجهات الرسمية والمؤسسات ذات الصلة. كما أن النقابة تُعرف بمشاركتها في وضع التشريعات الصحية وتطويرها."
                  textEn="The association provides various services, including health insurance, retirement programs, in addition to contributing to improving health care standards in cooperation with official bodies and relevant institutions. The association is also known for its participation in developing and developing health legislation."
                />
                <Parag
                  textAr="النقابة مقرها في عمان داخل مجمع النقابات المهنية، وهي تمثل مركزاً للتواصل بين الأطباء وتطوير المهنة، مع تركيز على العمل الجماعي والابتكار لضمان تحقيق أعلى معايير الكفاءة الطبية."
                  textEn="The association is headquartered in Amman within the Professional Associations Complex, and represents a center for communication between doctors and developing the profession, with a focus on teamwork and innovation to ensure the highest standards of medical efficiency."
                />

                <SubTitle
                  titleAr="المادة 7 من قانون النقابة : غايات النقابة طبية وصحية وعلمية واجتماعية ومهامها هي ما يلي:"
                  titleEn="Article 7 of the Syndicate Law: The objectives of the Syndicate are medical, health, scientific and social, and its tasks are as follows:"
                />
                <Parag
                  textAr="1 - رفع مستوى مهنة الطب وتنظيمها وحمايتها والدفاع عنها."
                  textEn="1- Raising the level of the medical profession, organizing, protecting and defending it."
                />
                <Parag
                  textAr="2- التعاون مع الوزارة وجميع المؤسسات والهيئات ذات العلاقة لرفع المستوى الصحي وتقديم افضل الخدمات الطبية الممكنة للمواطنين."
                  textEn="2- Cooperating with the Ministry and all relevant institutions and bodies to raise the health level and provide the best possible medical services to citizens."
                />
                <Parag
                  textAr="3- جمع كلمة الاطباء والمحافظة على حقوقهم وكرامتهم."
                  textEn="3- Unifying the word of doctors and preserving their rights and dignity."
                />
                <Parag
                  textAr="4- المحافظة على آداب المهنة."
                  textEn="4- Preserving the ethics of the profession."
                />
                <Parag
                  textAr="5 - تأمين الحياة الكريمة للاطباء وعائلاتهم في حالة العوز والشيخوخة."
                  textEn="5- Providing a decent life for doctors and their families in the event of poverty and old age."
                />
                <Parag
                  textAr="6- توثيق الصلات مع الاطباء الاردنيين الموجودين خارج المملكة ومع النقابات والهيئات الطبية العربية والاجنبية."
                  textEn="6- Strengthening relations with Jordanian doctors outside the Kingdom and with Arab and foreign medical unions and bodies."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Welcome;
