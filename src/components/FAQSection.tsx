
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What services does ForgeLabs provide?",
    answer:
      "ForgeLabs specializes in enterprise-grade web application development, UI/UX design, and custom software solutions. We help businesses transform their ideas into scalable, secure, and efficient digital products.",
  },
  {
    question: "How long does it take to complete a typical project?",
    answer:
      "Project timelines vary depending on the scope and complexity. A typical project can take anywhere from 3 to 6 months. We provide a detailed timeline after the initial discovery phase.",
  },
  {
    question: "Do you offer post-launch support or maintenance?",
    answer:
      "Yes, we offer comprehensive post-launch support and maintenance packages to ensure your application remains up-to-date, secure, and performs optimally.",
  },
  {
    question: "Can I request a custom backend or API integration?",
    answer:
      "Absolutely. We have extensive experience in building custom backends and integrating with third-party APIs to meet your specific business requirements.",
  },
  {
    question: "How do I start working with ForgeLabs?",
    answer:
      "The first step is to schedule a free consultation with us through our contact page. We'll discuss your project requirements, goals, and how we can help you achieve them.",
  },
  {
    question: "What is your technology stack?",
    answer: "We primarily use the MERN stack (MongoDB, Express, React, Node.js) for most projects, but we are flexible and can adapt to other technologies based on project needs.",
  },
  {
    question: "How do you handle project management?",
    answer: "We use Agile methodologies and tools like Jira or Trello to manage projects. We provide regular updates and hold sprint meetings to ensure transparency and keep the project on track.",
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky top-24">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md">
              Find answers to the most common questions about our services and
              process.
            </p>
            <div className="hidden lg:block mt-8">
              <img
                src="/src/assets/hero-image.png"
                alt="FAQ Illustration"
                className="max-w-sm mx-auto"
              />
            </div>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-muted/50 border border-border/50 rounded-lg mb-4"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold p-6">
                    {faq.question}
                  </AccordionTrigger>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <AccordionContent className="p-6 pt-0 text-muted-foreground text-base">
                      {faq.answer}
                    </AccordionContent>
                  </motion.div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="mt-20 text-center bg-muted p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground">
            Let’s connect and turn your vision into reality.
          </h3>
          <p className="text-muted-foreground mt-2">
            We’re available from 9:00 AM to 6:00 PM, Monday to Friday.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="text-lg font-semibold text-foreground">
              Reach out now!{" "}
              <a
                href="tel:+9779765142241"
                className="text-primary-blue hover:underline"
              >
                +977 9765142241
              </a>
            </div>
            <Button asChild variant="hero">
              <a href="/contact">Let’s Start Conversation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
