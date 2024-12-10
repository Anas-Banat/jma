"use client";

import { TeamType } from "@/types/team";
import SingleTeam from "./SingleTeam";
import { useLanguage } from "@/context/LanguageContext";

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
      className="overflow-hidden bg-gray-1 pb-5 pt-20 dark:bg-dark-2 lg:pb-[30px] lg:pt-[60px]"
    >
      <div className="container">
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
