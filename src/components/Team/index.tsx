"use client";

import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";
import { useLanguage } from "@/context/LanguageContext";
import ar from "../../../public/locales/ar/common.json";
import en from "../../../public/locales/en/common.json";

const teamData: TeamType[] = [
  {
    id: 1,
    ar_name: "د. زياد الزعبي",
    en_name: "Anas Banat",
    ar_designation: "عطوفة النقيب",
    en_designation: "Software Engineer",
    image: "/images/team/team-01.png",
  },
  {
    id: 2,
    ar_name: "د. صدام شناق",
    en_name: "Anas Banat",
    ar_designation: "نائب النقيب",
    en_designation: "Software Engineer",
    image: "/images/team/team-02.png",
  },
  {
    id: 3,
    ar_name: "د. طارق التميمي",
    en_name: "Anas Banat",
    ar_designation: "أمين السر",
    en_designation: "Software Engineer",
    image: "/images/team/team-03.png",
  },
  {
    id: 4,
    ar_name: "د. ماجد نصير",
    en_name: "Anas Banat",
    ar_designation: "أمين الصندوق",
    en_designation: "Software Engineer",
    image: "/images/team/team-04.png",
  },
  {
    id: 5,
    ar_name: "د. حازم القرالة",
    en_name: "Anas Banat",
    ar_designation: "رئيس لجنة الأعلام",
    en_designation: "Software Engineer",
    image: "/images/team/team-05.png",
  },
  {
    id: 6,
    ar_name: "د. مظفر الجلامدة",
    en_name: "Anas Banat",
    ar_designation: "مقرر اللجنة الفرعية",
    en_designation: "Software Engineer",
    image: "/images/team/team-06.png",
  },
  {
    id: 7,
    ar_name: "د. طارق الخطيب",
    en_name: "Anas Banat",
    ar_designation: "لجنة الأطباء الشباب والأمتياز والمقيمين",
    en_designation: "Software Engineer",
    image: "/images/team/team-07.png",
  },
  {
    id: 8,
    ar_name: "د. مها الفاخوري",
    en_name: "Anas Banat",
    ar_designation: "لجنة ضبط المهنة ولجنة الطبيبات والأعتداء على الأطباء والأغاثة والطوارئ",
    en_designation: "Software Engineer",
    image: "/images/team/team-08.png",
  },
  {
    id: 9,
    ar_name: "د. مروان عياصرة",
    en_name: "Anas Banat",
    ar_designation: "رئيس اللجنة الأجتماعية",
    en_designation: "Software Engineer",
    image: "/images/team/team-09.png",
  },
  {
    id: 10,
    ar_name: "د. بلال عزام",
    en_name: "Anas Banat",
    ar_designation: "رئيس لجنة الشكاوي",
    en_designation: "Software Engineer",
    image: "/images/team/team-10.png",
  },
  {
    id: 11,
    ar_name: "د. رشيد ابداح",
    en_name: "Anas Banat",
    ar_designation: "رئيس اللجنة العلمية",
    en_designation: "Software Engineer",
    image: "/images/team/team-11.png",
  },
  {
    id: 12,
    ar_name: "د. علاء الفروخ",
    en_name: "Anas Banat",
    ar_designation: "عضو",
    en_designation: "Software Engineer",
    image: "/images/team/team-12.png",
  },
];

const Team = () => {
  const { language } = useLanguage();

  return (
    <section
      dir={language === "ar" ? "rtl" : "ltr"}
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[60px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            title={language === "ar" ? "مجلس النقابة" : "Association Council"}
            paragraph={language === "ar" ? 
              "يُعد مجلس نقابة الأطباء الأردنية الجهة المسؤولة عن قيادة وتنظيم شؤون المهنة في المملكة. يتألف المجلس من نخبة من الأطباء المنتخبين لتمثيل زملائهم، ويهدف إلى تعزيز مكانة مهنة الطب، وحماية حقوق الأطباء، وتحقيق تطلعاتهم المهنية والاجتماعية. يعمل المجلس على تحقيق الشفافية والعدالة، ومواكبة التطورات العلمية والعملية، بما يضمن تقديم أفضل الخدمات الطبية للمجتمع الأردني." 
              : 
              "The Jordan Medical Association Council serves as the governing body responsible for leading and organizing the medical profession's affairs in the Kingdom. The council is composed of a distinguished group of elected physicians representing their peers. Its mission is to enhance the status of the medical profession, safeguard the rights of doctors, and fulfill their professional and social aspirations. The council is committed to transparency, fairness, and keeping pace with scientific and practical advancements to ensure the best medical services for the Jordanian community."}
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
