"use client";

import { SubTitle, Parag, ClickHere} from "../../components/Other/Other";
import Image from "next/image";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { useLanguage } from "@/context/LanguageContext";


const AuthorityFund = () => {
  const { language } = useLanguage();

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === "ar" ? "صندوق التقاعد" : "Authority Fund"}
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
                <SubTitle
                  titleAr="نظرة عامة حول صندوق التقاعد:"
                  titleEn="Overview of The Authority Fund:"
                />
                <Parag
                  textAr="يُعدُّ صندوق التقاعد أحد الركائز الأساسية في نقابة الأطباء الأردنية، حيث يُساهم في تأمين حياة كريمة للأطباء وأسرهم بعد انتهاء مسيرتهم المهنية. يهدف الصندوق إلى تقديم دعم مالي منتظم للأطباء المتقاعدين وضمان استقرارهم المادي، بالإضافة إلى دعم أسر الأطباء المتوفين."
                  textEn="The Authority Fund is a cornerstone of the Jordan Medical Association, dedicated to ensuring a dignified life for doctors and their families after the conclusion of their professional careers. The fund aims to provide regular financial support to retired doctors and ensure their financial stability, in addition to supporting the families of deceased members."
                />
                <Parag
                  textAr="ويعمل الصندوق وفق أسس تنظيمية ومالية مدروسة تضمن الاستدامة والعدالة، مما يعزز الشعور بالأمان الاجتماعي والاقتصادي بين أعضاء النقابة."
                  textEn="Operated under well-structured financial and organizational principles, the fund ensures sustainability and fairness, fostering a sense of social and economic security among association members."
                />
                <SubTitle
                  titleAr="مهام ادارة شؤون الصندوق :"
                  titleEn="Authority Fund Management Responsibilities:"
                />
                <Parag
                  textAr="1- إدارة الشؤون المالية للصندوق وتحصيل أمواله وحفظها واستثمارها واقرار صرف النفقات اللازمة ."
                  textEn="1- Management of the financial affairs of the fund and collection of money, saving and investing it, and approval of the necessary expenses."
                />
                <Parag
                  textAr="2- تنسيب احالة الطبيب على التقاعد وتحديد مقدار راتبه التقاعدي وصرفه وايقافه وفق احكام هذا النظام."
                  textEn="2- Establishing a doctor's retirement and determining the amount of his retirement salary, payment and cessation, in accordance with the provisions of this system."
                />
                <Parag
                  textAr="3- تنسيب دفع المبالغ المستحقة للطبيب أو اصحاب الحقوق المستفيدين من الضمان وفق أحكام هذا النظام وصرفها وإيقافها."
                  textEn="3- Establishing the payment of the amounts due to the doctor or beneficiaries of the social security and in accordance with the provisions of this system, and their cessation."
                />
                <Parag
                  textAr="4- تقرير دفع الرواتب التقاعدية المستحقة في حالات العجز عن العمل أو الوفاة ."
                  textEn="4- Reporting the payment of retirement salaries in cases of unemployment or death."
                />
                <Parag
                  textAr="5- تحديد مقدار النفقات العلاجية لاصحاب الحقوق وصرفها وايقافها وفق احكام هذا النظام."
                  textEn="5- Determining the amount of medical expenses for beneficiaries and their payment and cessation, in accordance with the provisions of this system."
                />
                <Parag
                  textAr="6- تنسيب تعيين موظفي الصندوق وانهاء خدماتهم وتقرير رواتبهم وزيادتها وفق التعليمات التي يضعها لهذا الغرض."
                  textEn="6- Establishing the assignment of employees to the fund and ending their services and reporting their salaries and increases, in accordance with the instructions given for this purpose."
                />
                <Parag
                  textAr="7- أية أمور أخرى يتطلب تنفيذ أحكام هذا النظام."
                  textEn="7- Other matters that require the implementation of the provisions of this system."
                />
                <Parag
                  textAr="8- إصدار التعليمات الإدارية اللازمة لتنفيذ احكام هذا النظام."
                  textEn="8- Issuing the necessary administrative instructions for the implementation of the provisions of this system."
                />
                <SubTitle
                  titleAr="الأشتراك في الصندوق والإحالة على التقاعد:"
                  titleEn="Joining the Authority Fund and Retirement:"
                />
                <Parag
                  textAr="جميع الأطباء المسجلين في النقابة ملزمون بالاشتراك كأعضاء في صندوق التقاعد والضمان الاجتماعي مع مراعاة ما يلي :"
                  textEn="All registered doctors must be members of the Authority Fund and ensure social security with the following:"
                />
                <Parag
                  textAr="1- يحق للطبيب خلال السنوات الأربع الأولى من تسجيله الدائم عدم الاشتراك في الصندوق لأغراض التقاعد ولكنه ملزم بدفع عائدات الضمان ويمنح حق اضافة تلك المدة لسنوات خدمته الخاضعة للتقاعد خلال السنة الخامسة على أن يسدد عائدات التقاعد المستحق عنها خلال تلك السنة."
                  textEn="1- During the first four years of his permanent registration, the doctor has the right not to participate in the fund for retirement purposes, but he is obligated to pay the insurance proceeds and is granted the right to add that period to his years of service subject to retirement during the fifth year, provided that he pays the retirement proceeds due for it during that year."
                />
                <Parag
                  textAr="2- لا يحق للطبيب الذي يسجل في النقابة لأول مرة وتجاوز الخمسين من عمره الاشتراك في الصندوق لاغراض التقاعد، ولكنه يبقى ملزما بالاشتراك في الضمان على أن يدفع مثلي العائدات المقررة للضمان."
                  textEn="2- A doctor who registers with the union for the first time and is over fifty years old is not entitled to participate in the fund for retirement purposes, but he remains obligated to participate in the insurance, provided that he pays twice the returns set for the insurance."
                />
                <Parag
                  textAr="3- كل طبيب يسجل لأول مرة في النقابة وتجاوز الأربعين من عمره ولكنه لم يبلغ الخمسين يلزم بالاشتراك في الصندوق على أن يدفع مرة ونصف العائدات المقررة للضمان."
                  textEn="3- Every doctor who registers for the first time with the union and is over forty years old but not fifty years old is required to participate in the fund, paying one and a half times the returns set for the insurance."
                />
                <ClickHere 
                  urlPathAr="/files/funds/authority_fund.pdf"
                  urlPathEn="/files/funds/authority_fund.pdf"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthorityFund;
