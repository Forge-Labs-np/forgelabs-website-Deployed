import FAQSection from "@/components/FAQSection";
import { Helmet } from "react-helmet-async";

const FAQPage = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - ForgeLabs</title>
        <meta name="description" content="Frequently asked questions about ForgeLabs services." />
      </Helmet>
      <FAQSection />
    </>
  );
};

export default FAQPage;
