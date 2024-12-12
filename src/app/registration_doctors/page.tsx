"use client";

import Breadcrumb from "../../components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";
import RegistrationDr from "../../components/Services/Registration_Doctors";

const RegistrationDoctors = () => {
  const { language } = useLanguage();

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === "ar" ? "تسجيل الطبيب لغاية الإمتياز" : "Registration Doctors Until Emtyaz"}
      />
      <RegistrationDr />

    </main>
  );
};

export default RegistrationDoctors;
