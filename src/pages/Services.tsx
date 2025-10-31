import { Helmet } from "react-helmet-async";
import ServicesHero from "@/components/ServicesHero";
import ServiceDetail from "@/components/ServiceDetail";
import CTASection from "@/components/CTASection";
import service1 from "@/assets/images/service1.png";
import service2 from "@/assets/images/service2.png";
import service3 from "@/assets/images/service3.png";
import service4 from "@/assets/images/service4.png";
import service5 from "@/assets/images/service5.png";
import service6 from "@/assets/images/service6.png";

const Services = () => {
  const services = [
    {
      title: "Enterprise Web Application Development",
      description: "Custom, scalable web apps tailored for your business operations and growth. Built with modern technologies and best practices to ensure reliability and performance.",
      imageUrl: service1,
    },
    {
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns to boost your online presence. We cover SEO, content marketing, and social media to grow your audience.",
      imageUrl: service2,
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and modern interfaces for the best user experience and adoption. We create designs that are both beautiful and functional, ensuring user satisfaction.",
      imageUrl: service3,
    },
    {
      title: "Maintenance & Optimization",
      description: "Keep your applications fast, secure, and reliable, with regular updates and monitoring. We ensure your systems run smoothly 24/7 with proactive support.",
      imageUrl: service4,
    },
    {
      title: "Software Development",
      description: "High-quality backend systems and integrations for enterprise needs. We build robust, scalable solutions that power your business operations efficiently.",
      imageUrl: service5,
    },
    {
      title: "Graphics Designing",
      description: "Creative and professional graphic design services for your brand\'s visual identity. We create everything from logos to marketing materials that stand out.",
      imageUrl: service6,
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <Helmet>
        <title>Our Services - ForgeLabs</title>
        <meta name="description" content="Explore the services offered by ForgeLabs, including enterprise web application development, digital marketing, UI/UX design, and more." />
        <meta name="keywords" content="ForgeLabs services, web development, digital marketing, UI/UX design, software development, maintenance, graphics design" />
        <meta property="og:title" content="Our Services - ForgeLabs" />
        <meta property="og:description" content="Explore the services offered by ForgeLabs, including enterprise web application development, digital marketing, UI/UX design, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forgelabs.tech/services" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Our Services - ForgeLabs" />
        <meta name="twitter:description" content="Explore the services offered by ForgeLabs, including enterprise web application development, digital marketing, UI/UX design, and more." />
      </Helmet>
      
      <ServicesHero />

      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-16 space-y-4">
            <span className="section-label inline-block">What We Offer</span>
            <h2 className="section-title">
              Our Key <span className="text-primary">Services</span>
            </h2>
            <p className="section-description mx-auto">
              We offer comprehensive solutions tailored to meet your business needs and drive digital transformation
            </p>
          </div>

          <div>
            {services.map((service, index) => (
              <ServiceDetail
                key={index}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      <div data-aos="fade-in">
        <CTASection
          title="Ready to Get Started?"
          description="Let\'s discuss how we can help transform your business with our services"
          ctaText="Contact Us Today"
          ctaLink="/contact"
          variant="gradient"
        />
      </div>
    </div>
  );
};

export default Services;
