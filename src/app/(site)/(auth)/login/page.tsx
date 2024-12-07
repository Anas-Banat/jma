"use client";

import { SubTitle, Parag} from "../../../../components/Other/Other";
import Breadcrumb from "../../../../components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";
import AuthLogin from "../../../../components/Auth/Login";

const Login = () => {
  const { language } = useLanguage();

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === "ar" ? "تسجيل الدخول" : "Login"}
      />
      <div className="container ">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
                <AuthLogin />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
