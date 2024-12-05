import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-10 dark:bg-dark lg:pb-[50px] lg:pt-[60px]">
      <div className="container">
        <SectionTitle
          title="Any Questions? Answered"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          width="640px"
          center
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
