"use client";

import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";


const AssociationCouncil = () => {
  const { lang, language } = useLanguage();


  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === "ar" ? "مجلس النقابة" : "Association Council"}
      />
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
              <div className="my-12  lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Brilliant Toolkit to Build Next.js SaaS Websites.
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  The main thrust is to focus on educating attendees on how to
                  best protect highly vulnerable business applications with
                  interactive panel discussions and roundtables led by subject
                  matter experts.
                  <br /> <br />
                  The main thrust is to focus on educating attendees on how to
                  best protect highly vulnerable business applications with
                  interactive panel.
                </p>

                <Link
                  href="/#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white duration-300 hover:bg-primary/90"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AssociationCouncil;
