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
    { name: "Angular", icon: "/angular.svg" },
    { name: "Java", icon: "/java.svg" },
    { name: "Spring Boot", icon: "/springBoot.svg" },
    { name: "MongoDB", icon: "/mongoDB.svg" },
    { name: "PostgreSQL", icon: "/postgresql.svg" },
    { name: "TypeScript", icon: "/typescript.svg" },
    { name: "PHP", icon: "/php.svg" },
    { name: ".NET Technology", icon: "/dotNet.svg" },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>ForgeLabs - Forging Ideas into Digital Realities</title>
        <meta name="description" content="ForgeLabs specializes in transforming concepts into scalable, secure, and efficient enterprise web applications. We offer web development, digital marketing, UI/UX design, and more." />
        <meta name="keywords" content="ForgeLabs, web development, enterprise applications, software development, digital marketing, UI/UX design, Nepal, IT company" />
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
        <Hero />
      </div>

      {/* Services Preview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -left-24 -top-24 w-80 h-80 bg-blue-600 rounded-full opacity-20"></div>
        <div className="absolute left-24 top-24 w-24 h-24 bg-green-400 rounded-full opacity-20"></div>
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-pink-500 rounded-full opacity-20"></div>
        <div className="absolute right-24 bottom-24 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Our Services</p>
            <h2 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Exceptional Services For Your<br />
              <span className="text-blue-600">Business Growth</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              We specialize in building enterprise-grade web applications tailored for your business needs.
            </p>
            <Button asChild className="mt-8 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
                title="Digital Marketing"
                description="Strategic campaigns to boost your online presence and grow your audience"
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

      {/* Section Divider */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Expertise Preview Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4" data-aos="fade-up">
            <span className="section-label inline-block">Technologies</span>
            <h2 className="section-title mb-4">
              Tools & Technologies We <span className="text-primary">Excel In</span>
            </h2>
            <p className="section-description mx-auto mb-12">
              We work with modern, battle-tested technologies to deliver robust
              solutions
            </p>

            {/* Technology Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <span
                    className="group flex items-center px-6 py-4 bg-white border-2 border-border rounded-2xl text-sm font-semibold text-foreground hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    <img
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform"
                    />
                    <span className="group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <div data-aos="fade-up" data-aos-delay="900">
              <Button variant="hero" size="lg" asChild className="shadow-primary">
                <Link to="/services">See Our Expertise</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* About Us Teaser */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6" data-aos="fade-up">
            <span className="section-label inline-block">About Us</span>
            <h2 className="section-title">
              About <span className="text-primary">ForgeLabs</span>
            </h2>
            <p className="section-description mx-auto">
              We're a Nepal-based IT company specializing in software and web
              development. We approach every project with precision, creativity,
              and collaboration, ensuring solutions that are effective,
              reliable, and high-quality.
            </p>
            <Button variant="hero" size="lg" asChild className="shadow-primary mt-8">
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
