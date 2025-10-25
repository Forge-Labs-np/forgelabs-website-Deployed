import FAQSection from "@/components/FAQSection";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
