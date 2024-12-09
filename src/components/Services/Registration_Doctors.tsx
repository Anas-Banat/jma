"use client";

import Image from "next/image";
import JordanianDoctors from "./Jordanian_Doctors";
import NonJordanianDoctors from "./Non_Jordanian_Doctors";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const RegistrationDoctorsPage = () => {
  const { language } = useLanguage();

  return (
    <div className="dark:bg-dark" >
      <div className="container py-10 dark:bg-dark">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="w-full ">
                <Image
                  src="/images/blog/bannder-ad.png"
                  alt="Registration Doctors Until Emtyaz"
                  width={2000}
                  height={2000}
                  className="h-[400px] w-full object-cover object-center"
                />
              </div>

              <JordanianDoctors />

              <p className="my-20 text-center text-2xl text-red font-bold">
                ********************
              </p>

              <NonJordanianDoctors />

              <div className="text-center">
                <Link
                  href="/registration_form"
                  className={`inline-flex items-center justify-center rounded-md bg-primary mt-10 px-16 py-3 text-center text-base font-medium text-white duration-300 hover:bg-primary/90 dark:bg-white/10 dark:hover:bg-white/20
                    ${
                      language === "ar"
                    ? "font-semibold text-xl"
                      : "font-medium text-base"
                    }`}
                  >
                  {language === "en" ? "Register" : "تسجيل"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default RegistrationDoctorsPage;
