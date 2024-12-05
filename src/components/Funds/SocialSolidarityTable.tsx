import { useLanguage } from "@/context/LanguageContext";
import doctorsOfSocialSolidarity from "./SocialSolidarityDoctors";

export default function DoctorsTable() {
  
  const { language } = useLanguage();

  return (
    <div className="p-8 font-sans">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">#</th> 
            {language === "ar" 
              ?<>
              <th className="text-xl border border-gray-300 px-4 py-2">الاسم</th>
              <th className="text-xl border border-gray-300 px-4 py-2">المنصب</th>
              </>
              :
              <>
              <th className="text-base border border-gray-300 px-4 py-2">Name</th>
              <th className="text-base border border-gray-300 px-4 py-2">Role</th>
              </>
            }
          </tr>
        </thead>
        <tbody>
          {doctorsOfSocialSolidarity.map((doctor) => (
            <tr key={doctor.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 text-center">{doctor.id}</td>
              {language === "ar" 
              ?<>
              <td className="text-xl border border-gray-300 px-4 py-2">{doctor.nameAr}</td>
              <td className="text-xl border border-gray-300 px-4 py-2">{doctor.roleAr}</td>              </>
              :
              <>
              <td className="text-base border border-gray-300 px-4 py-2">{doctor.nameEn}</td>
              <td className="text-base border border-gray-300 px-4 py-2">{doctor.roleEn}</td>
              </>
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}