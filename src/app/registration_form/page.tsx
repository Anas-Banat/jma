"use client"

import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    universityName: '',
    degree: '',
    graduationYear: '',
    address: '',
    city: '',
    postalCode: '',
    nationality: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // You can add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>التسجيل الموقتي لغايات الامتحان</h2>
      
      <h3>البيانات الشخصية</h3>
      <label>
        الاسم الثلاثي:
        <input type="text" name="firstName" onChange={handleChange} required />
      </label>
      <label>
        اسم العائلة:
        <input type="text" name="lastName" onChange={handleChange} required />
      </label>
      <label>
        البريد الإلكتروني:
        <input type="email" name="email" onChange={handleChange} required />
      </label>
      <label>
        رقم الهاتف:
        <input type="tel" name="phone" onChange={handleChange} required />
      </label>

      <h3>بيانات الشهادة الجامعية</h3>
      <label>
        اسم الجامعة:
        <input type="text" name="universityName" onChange={handleChange} required />
      </label>
      <label>
        نوع الشهادة:
        <input type="text" name="degree" onChange={handleChange} required />
      </label>
      <label>
        سنة التخرج:
        <input type="text" name="graduationYear" onChange={handleChange} required />
      </label>

      <h3>العنوان</h3>
      <label>
        العنوان:
        <input type="text" name="address" onChange={handleChange} required />
      </label>
      <label>
        المدينة:
        <input type="text" name="city" onChange={handleChange} required />
      </label>
      <label>
        الرمز البريدي:
        <input type="text" name="postalCode" onChange={handleChange} required />
      </label>
      
      <label>
        الجنسية:
        <input type="text" name="nationality" onChange={handleChange} required />
      </label>

      <button type="submit">إرسال</button>
    </form>
  );
};

export default RegistrationForm;