import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Anas Banat",
    designation: "Software Engineer",
    image: "/images/team/team-01.png",
  },
  {
    id: 2,
    name: "Anas Banat",
    designation: "Software Engineer",
    image: "/images/team/team-02.png",
  },
  {
    id: 3,
    name: "Anas Banat",
    designation: "Software Engineer",
    image: "/images/team/team-03.png",
  },
  {
    id: 4,
    name: "Anas Banat",
    designation: "Software Engineer",
    image: "/images/team/team-04.png",
  },
  {
    id: 5,
    name: "Anas Banat",
    designation: "Software Engineer",
    image: "/images/team/team-05.png",
  },
  {
    id: 6,
    name: "Anas Banat",
    designation: "Software Engineer",
    image: "/images/team/team-06.png",
  },
  {
    id: 7,
    name: "Anas Banat",
    designation: "Software Engineer",
    image: "/images/team/team-07.png",
  },
  {
    id: 8,
    name: "Anas Banat",
    designation: "Software Engineer",
    image: "/images/team/team-08.png",
  },
  {
    id: 9,
    name: "Anas Banat",
    designation: "Software Engineer",
    image: "/images/team/team-09.png",
  },
  {
    id: 10,
    name: "Anas Banat",
    designation: "Software Engineer",
    image: "/images/team/team-10.png",
  },
  {
    id: 11,
    name: "Anas Banat",
    designation: "Software Engineer",
    image: "/images/team/team-11.png",
  },
  {
    id: 12,
    name: "Anas Banat",
    designation: "Software Engineer",
    image: "/images/team/team-12.png",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[60px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
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
