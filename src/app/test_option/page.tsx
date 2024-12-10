"use client";

import React, { useState } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

interface RegistrationOption {
  label: string;
  value: string;
  details: string;
}

const registrationOptions: RegistrationOption[] = [
  {
    label: "التسجيل المؤقت لغايات الامتياز - الأردنيين",
    value: "temp-jordanian",
    details: `الأوراق المطلوبة:
      - صور شخصية عدد (2)
      - صورة عن هوية الأحوال المدنية
      - صورة عن شهادة الميلاد
      - صورة عن كشف علامات التوجيهي (الفرع العلمي) مصدق من وزارة التربية
      - رسوم مقدارها (60) دينار أردني`,
  },
  {
    label: "التسجيل المؤقت لغايات الامتياز - غير الأردنيين",
    value: "temp-non-jordanian",
    details: `الأوراق المطلوبة:
      - صور شخصية عدد (2)
      - صورة عن جواز السفر
      - شهادة عدم محكومية من وزارة العدل
      - إذن إقامة من وزارة الداخلية
      - رسوم مقدارها (100) دينار لغير الأردنيين و(60) دينار لأبناء الأردنيات`,
  },
  {
    label: "التسجيل على قائمة الفحص الإجمالي",
    value: "exam-list",
    details: `المتطلبات:
      - شهادة إنهاء فترة الامتياز من المستشفى
      - رسوم مقدارها (31) دينار للأردنيين وأبناء الأردنيات (في حالة التسجيل السابق)
      - رسوم مقدارها (90) دينار للأردنيين وأبناء الأردنيات (بدون تسجيل سابق)`,
  },
  {
    label: "التسجيل الدائم بعد اجتياز الفحص الإجمالي - الأردنيين",
    value: "permanent-exam-jordanian",
    details: `المتطلبات:
      - صورة مصدقة عن كشف علامات الفحص الإجمالي
      - رسوم مقدارها (35) دينار`,
  },
  {
    label: "التسجيل الدائم للأردنيين خريجي الجامعات الأردنية",
    value: "permanent-jordanian",
    details: `المتطلبات:
      - شهادة إنهاء فترة الامتياز من المستشفى
      - شهادة تأكيد من المجلس الطبي الأردني بإنهاء فترة الامتياز
      - رسوم مقدارها (35) دينار`,
  },
];

const RegistrationDropdown: React.FC = () => {
  const [visibleOption, setVisibleOption] = useState<string | null>(null);

  const toggleDetails = (value: string) => {
    setVisibleOption(visibleOption === value ? null : value);
  };

  return (
    <div className="container my-10">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
            <div className="my-36">
                <h2 className="text-2xl font-bold mb-6">أنواع التسجيل</h2>
                {registrationOptions.map((option) => (
                  <div key={option.value} className="mb-6">
                    <button
                      className="flex justify-between items-center w-full text-white 
                        bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-md 
                        focus:outline-none focus:ring-2 focus:ring-blue-400"
                      onClick={() => toggleDetails(option.value)}
                    >
                      <span className="text-left">{option.label}</span>
                      {visibleOption === option.value ? (
                        <SlArrowUp className="h-6 w-6 text-white" />
                      ) : (
                        <SlArrowDown className="h-6 w-6 text-white" />
                      )}
                    </button>

                    {visibleOption === option.value && (
                      <div
                        className="mt-4 p-4 bg-gray-100 rounded-md shadow-inner 
                        border border-gray-300 text-right whitespace-pre-line"
                      >
                        <h3 className="font-semibold text-lg mb-2">التفاصيل:</h3>
                        <p className="leading-6">{option.details}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>    
  );
};

export default RegistrationDropdown;
