"use client";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">نموذج تقديم الطلب</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
        {/* Basic Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">البيانات الأساسية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label>
              الاسم بالعربية حسب الهوية:
              <input
                type="text"
                name="arabicName"
                onChange={handleChange}
                className="input-field"
              />
            </label>
            <label>
              الاسم بالانجليزية حسب الهوية:
              <input
                type="text"
                name="englishName"
                onChange={handleChange}
                className="input-field"
              />
            </label>
            <label>
              الجنسية:
              <select name="nationality" onChange={handleChange} className="input-field">
                <option value="">اختر</option>
                <option value="Jordanian">أردني</option>
                <option value="Other">غير ذلك</option>
              </select>
            </label>
            <label>
              الجنس:
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="ذكر"
                    onChange={handleChange}
                  />
                  ذكر
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="انثى"
                    onChange={handleChange}
                  />
                  انثى
                </label>
              </div>
            </label>
            <label>
              مكان الولادة:
              <input type="text" name="placeOfBirth" onChange={handleChange} className="input-field" />
            </label>
            <label>
              تاريخ الميلاد:
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
          <h2 className="text-2xl font-semibold mb-4">بيانات الوثيقة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label>
              نوع الوثيقة:
              <select name="documentType" onChange={handleChange} className="input-field">
                <option value="">يرجى الاختيار</option>
                <option value="National ID">الرقم الوطني</option>
                <option value="Passport">جواز السفر</option>
              </select>
            </label>
            <label>
              رقم الوثيقة:
              <input
                type="text"
                name="documentNumber"
                onChange={handleChange}
                className="input-field"
              />
            </label>
            <label>
              الرقم الوطني للأردني:
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
          <h2 className="text-2xl font-semibold mb-4">بيانات الشهادة الجامعية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label>
              بلد الشهادة:
              <select name="degreeCountry" onChange={handleChange} className="input-field">
                <option value="">اختر</option>
                <option value="Jordan">الأردن</option>
                <option value="Other">غير ذلك</option>
              </select>
            </label>
            <label>
              اسم الجامعة:
              <input
                type="text"
                name="universityName"
                onChange={handleChange}
                className="input-field"
              />
            </label>
            <label>
              تاريخ الالتحاق بالجامعة:
              <input
                type="date"
                name="universityStartDate"
                onChange={handleChange}
                className="input-field"
              />
            </label>
            <label>
              تاريخ التخرج من الجامعة:
              <input
                type="date"
                name="universityEndDate"
                onChange={handleChange}
                className="input-field"
              />
            </label>
            <label>
              تاريخ الشهادة:
              <input
                type="date"
                name="degreeDate"
                onChange={handleChange}
                className="input-field"
              />
            </label>
            <label>
              عدد سنوات الدراسة:
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
          <h2 className="text-2xl font-semibold mb-4">العناوين</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label>
              رقم الهاتف الخلوي:
              <input
                type="text"
                name="phoneNumber"
                onChange={handleChange}
                className="input-field"
              />
            </label>
            <label>
              البريد الإلكتروني:
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="input-field"
              />
            </label>
            <label>
              عنوان المنزل:
              <input
                type="text"
                name="homeAddress"
                onChange={handleChange}
                className="input-field"
              />
            </label>
          </div>
        </section>

        {/* Captcha */}
        <section>
          <label>
            يرجى إدخال رمز التحقق:
            <input
              type="text"
              name="captcha"
              onChange={handleChange}
              className="input-field"
            />
          </label>
        </section>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          ارسال
        </button>
      </form>
    </div>
  );
}
