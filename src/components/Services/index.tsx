import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";

const serviceLink = (href: string, text: string ) => {
  return (
    <Link href={href} className="mb-3 inline-block font-medium text-base text-dark dark:text-white hover:text-primary">
      {text}
    </Link>
  );    
};
const Services = () => {
  const { language } = useLanguage();

  return (
    <section
      id="Services"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[60px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            
            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
              <Image
                      src="/images/news/services.jpg"
                      alt= {language === "ar" ? "خدمات النقابة" : "Our Services"}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover object-center"
                    />
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0 md:ml-20">
                <h2 className="mb-5 pt-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                {language === "ar" ? "خدمات النقابة" : "Our Services"}
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6 pt-">
                {language === "ar" ? "تقدم نقابة الأطباء الأردنية خدمات شاملة مثل تسجيل الأطباء وإصدار التراخيص، التي تساهم في تعزيز الممارسات الطبية المهنية."
                :
                "The Jordanian Medical Association provides comprehensive services such as physician registration and licensing, which contribute to enhancing professional medical practices."}
                </p>
                <div className="mb-10 w-full">
                  <ul>
                    <li>
                      {serviceLink("/registration_doctors", language === "ar" ? "تسجيل الأطباء لغايات الأمتياز" : "Registration of Doctors")}
                    </li>
                    <li>
                      {serviceLink("/electronic_payments", language === "ar" ? "الدفع الالكتروني" : "Electronic Payments")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
