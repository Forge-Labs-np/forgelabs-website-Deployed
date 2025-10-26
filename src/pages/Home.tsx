import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import WhatsAppPopup from "@/components/WhatsAppPopup";
import {
  Code2,
  Wrench,
  Palette,
  Shield,
  Brush,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.png";
import ProcessSection from "@/components/ProcessSection";

const Home = () => {
  const technologies = [
    { name: "React", icon: "/react.svg" },
    { name: "Java", icon: "/java.svg" },
    { name: "Spring Boot", icon: "/springBoot.svg" },
    { name: "MongoDB", icon: "/mongoDB.svg" },
    { name: "PostgreSQL", icon: "/postgresql.svg" },
    { name: "TypeScript", icon: "/typescript.svg" },
    { name: "PHP", icon: "/php.svg" },
    { name: ".NET Technologies", icon: "/dotNet.svg" },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>ForgeLabs - Forging Ideas into Digital Realities</title>
        <meta name="description" content="ForgeLabs specializes in transforming concepts into scalable, secure, and efficient enterprise web applications. We offer web development, outsourcing support, UI/UX design, and more." />
        <meta name="keywords" content="ForgeLabs, web development, enterprise applications, software development, outsourcing, UI/UX design, Nepal, IT company" />
        <meta property="og:title" content="ForgeLabs - Forging Ideas into Digital Realities" />
        <meta property="og:description" content="Transforming concepts into scalable, secure, and efficient enterprise web applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forgelabs.tech" />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ForgeLabs - Forging Ideas into Digital Realities" />
        <meta name="twitter:description" content="Transforming concepts into scalable, secure, and efficient enterprise web applications." />
        <meta name="twitter:image" content={heroImage} />
      </Helmet>
      {/* Hero Section */}
      <div data-aos="fade-in">
        <Hero
          title="ForgeLabs"
          subtitle="Where ideas are forged into impactful digital realities"
          description="Transforming concepts into scalable, secure, and efficient enterprise web applications."
          ctaText="Let's Get Started"
          ctaLink="/contact"
          secondaryCtaText="Discover Our Work"
          secondaryCtaLink="/our-work"
          imageSrc={heroImage}
        />
      </div>

      {/* Services Preview Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We specialize in building enterprise-grade web applications
              tailored for your business needs.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div data-aos="fade-up" data-aos-delay="100">
              <ServiceCard
                icon={Code2}
                title="Web Development"
                description="Custom enterprise applications built with cutting-edge technologies"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <ServiceCard
                icon={Wrench}
                title="Outsourcing Support"
                description="Skilled developers who integrate seamlessly with your team"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <ServiceCard
                icon={Palette}
                title="UI/UX Design"
                description="Intuitive interfaces for the best user experience"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <ServiceCard
                icon={Shield}
                title="Maintenance"
                description="Keep your applications fast, secure, and reliable"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <ServiceCard
                icon={Brush}
                title="Graphics Design"
                description="Creative designs for branding and marketing materials"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <ServiceCard
                icon={Database}
                title="Backend Systems"
                description="High-quality backend systems and integrations"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Preview Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tools & Technologies We Excel In
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We work with modern, battle-tested technologies to deliver robust
              solutions
            </p>

            {/* Technology Pills */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 mb-8">
              {technologies.map((tech, index) => (
                <div 
                  key={tech.name} 
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                  className="animate-float"
                  style={{ animationDelay: `${(index % 5) * 150}ms` }}
                >
                  <span
                    className="flex items-center px-6 py-3 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-primary hover:text-primary-blue transition-all duration-300 cursor-default"
                  >
                    <img 
                      src={tech.icon} 
                      alt={`${tech.name} icon`} 
                      className="mr-2 h-5 w-5 animate-float"
                      style={{ animationDelay: `${(index % 5) * 250}ms` }}
                    />
                    <span 
                      className="animate-float"
                      style={{ animationDelay: `${((index % 5) * 250) + 400}ms` }}
                    >
                      {tech.name}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <div data-aos="fade-up" data-aos-delay="900">
              <Button variant="default" size="lg" asChild>
                <Link to="/services">See Our Expertise</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* About Us Teaser */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About ForgeLabs
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We\'re a Nepal-based IT company specializing in software and web
              development. We approach every project with precision, creativity,
              and collaboration, ensuring solutions that are effective,
              reliable, and high-quality.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div data-aos="fade-in">
        <CTASection
          title="Ready to Build Your Idea?"
          description="Together, we’ll transform your ideas into powerful digital solutions."
          ctaText="Start the Conversation"
          ctaLink="/contact"
          variant="gradient"
        />
      </div>

      {/* WhatsApp Popup */}
      <WhatsAppPopup />
    </div>
  );
};

export default Home;
