import About from "../../components/About";
import Breadcrumb from "../../components/Common/Breadcrumb";
import Team from "../../components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our company and team.",
};


const AboutPage = () => {
  return (
    <main >
      <Breadcrumb pageName="About Us Page" />
      <About />
      <Team />
    </main>
  );
};

export default AboutPage;