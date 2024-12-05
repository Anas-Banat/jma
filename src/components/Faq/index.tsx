
import { SubTitle, Parag } from "../Other/Other";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-10 dark:bg-dark lg:pb-[50px] lg:pt-[60px]">
      <div className="container">
        <SubTitle
          titleAr="الأسئلة الأكثر تكراراً:"
          titleEn="Frequently Asked Questions:"
        />
        <Parag
          textAr="يُعد مجلس نقابة الأطباء الأردنية الجهة المسؤولة عن قيادة وتنظيم شؤون المهنة في المملكة. يتألف المجلس من نخبة من الأطباء المنتخبين لتمثيل زملائهم، ويهدف إلى تعزيز مكانة مهنة الطب، وحماية حقوق الأطباء، وتحقيق تطلعاتهم المهنية والاجتماعية. يعمل المجلس على تحقيق الشفافية والعدالة، ومواكبة التطورات العلمية والعملية، بما يضمن تقديم أفضل الخدمات الطبية للمجتمع الأردني"
          textEn="The Jordan Medical Association Council serves as the governing body responsible for leading and organizing the medical profession's affairs in the Kingdom. The council is composed of a distinguished group of elected physicians representing their peers. Its mission is to enhance the status of the medical profession, safeguard the rights of doctors, and fulfill their professional and social aspirations. The council is committed to transparency, fairness, and keeping pace with scientific and practical advancements to ensure the best medical services for the Jordanian community."
        />

        <div className="-mx-4 mt-[60px] flex flex-wrap lg:mt-20">
          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="Lorem Ipsum is simply formal text?"
              answer="Lorem Ipsum is simply formal text (meaning the end is the form, not the content) in the printing and publishing industries."
            />
            <SingleFaq
              question="Lorem Ipsum is simply formal text?"
              answer="Lorem Ipsum is simply formal text (meaning the end is the form, not the content) in the printing and publishing industries."
            />
            <SingleFaq
              question="Lorem Ipsum is simply formal text?"
              answer="Lorem Ipsum is simply formal text (meaning the end is the form, not the content) in the printing and publishing industries."
            />
          </div>

          <div className="w-full px-4 lg:w-1/2">
          <SingleFaq
              question="Lorem Ipsum is simply formal text?"
              answer="Lorem Ipsum is simply formal text (meaning the end is the form, not the content) in the printing and publishing industries."
            />
            <SingleFaq
              question="Lorem Ipsum is simply formal text?"
              answer="Lorem Ipsum is simply formal text (meaning the end is the form, not the content) in the printing and publishing industries."
            />
            <SingleFaq
              question="Lorem Ipsum is simply formal text?"
              answer="Lorem Ipsum is simply formal text (meaning the end is the form, not the content) in the printing and publishing industries."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
