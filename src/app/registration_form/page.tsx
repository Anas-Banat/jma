"use client";

import Breadcrumb from "../../components/Common/Breadcrumb";
import { FormParag, Parag, SubTitle } from "../../components/Other/Other";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    arabicName: "",
    englishName: "",
    nationality: "",
    gender: "",
    placeOfBirth: "",
    dateOfBirth: "",
    documentType: "",
    documentNumber: "",
    nationalID: "",
    highSchoolBranch: "",
    highSchoolDate: "",
    residencePlace: "",
    city: "",
    degreeCountry: "",
    universityName: "",
    universityStartDate: "",
    universityEndDate: "",
    degreeDate: "",
    yearsOfStudy: "",
    equivalenceDate: "",
    phoneNumber: "",
    homePhone: "",
    email: "",
    homeAddress: "",
    captcha: "",
  });

  const { language } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    <Parag textAr="تم تقديم الطلب بنجاح" textEn="Form Submitted Successfully!"/>
    alert(language === "ar" ? "تم تقديم الطلب بنجاح!" : "Form Submitted Successfully!");
  };

  return (
    <main 
      dir={language === "ar" ? "rtl" : "ltr"}
      className="bg-gray-1 dark:bg-dark ">
      <Breadcrumb 
        pageName={language === "ar" ? "نموذج التسجيل" : "Registration Form"}
      />
    <div className="container mx-auto lg:py-6 lg:px-40 ">
          
            <form onSubmit={handleSubmit} className="w-auto space-y-6 bg-white p-6 rounded-lg shadow-lg">
              {/* Basic Information */}
              <section>
                <SubTitle titleAr={"البيانات الاساسية"} titleEn={"Basic Information"} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label>
                    <FormParag textAr="الاسم بالعربية حسب الهوية:" textEn="Arabic Name according to the ID:" />
                    <input
                      type="text"
                      name="arabicName"
                      onChange={handleChange}
                      className="input-field"
                    />
                  </label>
                  <label>
                    <FormParag textAr="الاسم بالنجليزية حسب الهوية:" textEn="ُEnglish Name according to the ID:" />
                    <input
                      type="text"
                      name="englishName"
                      onChange={handleChange}
                      className="input-field"
                    />
                  </label>
                  <label>
                    <FormParag textAr="الجنسية:" textEn="Nationality:" />
                    <select name="nationality" onChange={handleChange} className="input-field">
                      <option value="">اختر</option>
                      <option value="Jordanian">أردني</option>
                      <option value="Other">غير ذلك</option>
                    </select>
                  </label>
                  <label>
                    <FormParag textAr="الجنس:" textEn="Gender:" />
                    <div className="flex gap-4">
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value= {language === "ar" ? "ذكر" : "Male"}
                          onChange={handleChange}
                        />
                        <FormParag textAr="ذكر" textEn= "Male" />
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value= {language === "ar" ? "انثى" : "Male"}
                          onChange={handleChange}
                        />
                        <FormParag textAr="انثى" textEn= "Female" />
                      </label>
                    </div>
                  </label>
                  <label>
                    <FormParag textAr="مكان الميلاد:" textEn="Place of Birth:" />
                    <input 
                    type="text" 
                    name="placeOfBirth" 
                    onChange={handleChange} 
                    className="input-field" />
                  </label>
                  <label>
                    <FormParag textAr="تاريخ الميلاد:" textEn="Date of Birth:" />
                    <input
                      type="date"
                      name="dateOfBirth"
                      onChange={handleChange}
                      className="input-field"
                    />
                  </label>
                </div>
              </section>

              {/* Document Information */}
              <section>
                <SubTitle titleAr={"بيانات الوثيقة"} titleEn={"Document Information"} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label>
                    <FormParag textAr="نوع الوثيقة:" textEn="Document Type:" />
                    <select name="documentType" onChange={handleChange} className="input-field">
                      <option value=""><Parag textAr="اختر" textEn="Choose" /></option>
                      <option value="1"><Parag textAr="جواز سفر" textEn="Passport" /></option>
                      <option value="2"><Parag textAr="بطاقة مدنية / عسكرية" textEn="National ID / Military ID" /></option>
                      <option value="3"><Parag textAr="دفتر عائلة" textEn="Family Card" /></option>
                      <option value="4"><Parag textAr="بطاقة ابناء اردنيات" textEn="Jordanian Children Card" /></option>
                    </select>
                  </label>
                  <label>
                    <FormParag textAr="رقم الوثيقة:" textEn="Document Number:" />
                    <input
                      type="text"
                      name="documentNumber"
                      onChange={handleChange}
                      className="input-field"
                    />
                  </label>
                  <label>
                    <FormParag textAr="الرقم الوطني للأردني:" textEn="Jordanian National ID:" />
                    <input
                      type="text"
                      name="nationalID"
                      onChange={handleChange}
                      className="input-field"
                    />
                  </label>
                </div>
              </section>

              {/* University Information */}
              <section>
                <SubTitle titleAr={"بيانات الشهادة الجامعية"} titleEn={"University Information"} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label>
                    <FormParag textAr="بلد الشهادة:" textEn="Degree Country:" />
                    <select name="degreeCountry" onChange={handleChange} className="input-field">
                      <option value="">اختر</option>
                      <option value="Jordan">الأردن</option>
                      <option value="Other">غير ذلك</option>
                    </select>
                  </label>
                  <label>
                    <FormParag textAr="اسم الجامعة:" textEn="University Name:" />
                    <select name="degreeCountry" onChange={handleChange} className="input-field">
                      <option value="">اختر</option>
                      <option value="Jordan">الجامعة الأردنية</option>
                      <option value="Other">الجامعة الهاشمية</option>
                    </select>
                  </label>
                  <label>
                    <FormParag textAr="تاريخ الالتحاق بالجامعة:" textEn="Date of Enrollment:" />
                    <input
                      type="date"
                      name="universityStartDate"
                      onChange={handleChange}
                      className="input-field"
                    />
                  </label>
                  <label>
                    <FormParag textAr="تاريخ التخرج من الجامعة:" textEn="Graduation Date:" />
                    <input
                      type="date"
                      name="universityEndDate"
                      onChange={handleChange}
                      className="input-field"
                    />
                  </label>
                  <label>
                    <FormParag textAr="تاريخ الشهادة:" textEn="Degree Date:" />
                    <input
                      type="date"
                      name="degreeDate"
                      onChange={handleChange}
                      className="input-field"
                    />
                  </label>
                  <label>
                    <FormParag textAr="عدد سنوات الدراسة:" textEn="Years of Study:" />
                    <input
                      type="number"
                      name="yearsOfStudy"
                      onChange={handleChange}
                      className="input-field"
                    />
                  </label>
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <SubTitle titleAr={"العناوين"} titleEn={"Contact Information"} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label>
                    <FormParag textAr="رقم الهاتف الخلوي:" textEn="Mobile Number:" />
                    <input
                      type="text"
                      name="phoneNumber"
                      onChange={handleChange}
                      className="input-field"
                    />
                  </label>
                  <label>
                    <FormParag textAr="البريد الإلكتروني:" textEn="Email:" />
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      className="input-field"
                    />
                  </label>
                  <label>
                    <FormParag textAr="عنوان المنزل:" textEn="Home Address:" />
                    <input
                      type="text"
                      name="homeAddress"
                      onChange={handleChange}
                      className="input-field"
                    />
                  </label>
                </div>
              </section>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className={`inline-flex items-center justify-center rounded-md bg-primary mt-10 px-16 py-3 text-center text-white duration-300 hover:bg-primary/90 dark:bg-white/10 dark:hover:bg-white/20
                    ${
                      language === "ar"
                    ? "font-semibold text-xl"
                      : "font-medium text-base"
                    }`}
                  >
                  {language === "en" ? "Submit" : "ارسال"}
                </button>
              </div>
            </form>
          </div>
    </main>
  );
}


