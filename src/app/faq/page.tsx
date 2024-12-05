import Breadcrumb from "../../components/Common/Breadcrumb";
import Faq from "../../components/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "FAQ Page",
  description: "This is FAQ page description",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Page" />
      <Faq />
    </>
  );
};

export default ContactPage;
