import Image from "next/image";
import Link from "next/link";

const serviceLink = (href: string, text: string ) => {
  return (
    <Link href={href} className="mb-3 inline-block font-medium text-base text-dark dark:text-white hover:text-primary">
      {text}
    </Link>
  );    
};

const Funds = () => {
  return (
    <section
      id="funds"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[60px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
              <h2 className="mb-5 pt-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Our Funds
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6 pt-">
                Lorem Ipsum is simply formal text (meaning the end is the form, not the content) in the printing and publishing industries.
                </p>
                <div className="mb-10 w-full">
                  <ul>
                    <li>
                      {serviceLink("/authority_fund", "Authority Fund")}
                    </li>
                    <li>
                    {serviceLink("/social_solidarity_fund", "Social Solidarity Fund")}
                    </li>
                    <li>
                    {serviceLink("/mobile_phone-fund", "Mobile Phone Fund")}
                    </li>
                    <li>
                    {serviceLink("/doctors _collaboration_fund", "Doctors Collaboration Fund")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <Image
                        src="/images/news/health_support.jpg"
                        alt="about image"
                        width={500}
                        height={500}
                        className="h-full w-full object-cover object-center"
                      />
                </div>
            </div> 
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funds;
