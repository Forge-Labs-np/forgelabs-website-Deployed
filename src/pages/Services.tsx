import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { Code2, Users, Palette, Wrench, Server } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Our Services - ForgeLabs</title>
        <meta name="description" content="Explore the services offered by ForgeLabs, including enterprise web application development, outsourcing, UI/UX design, and more." />
        <meta name="keywords" content="ForgeLabs services, web development, outsourcing, UI/UX design, software development, maintenance, graphics design" />
        <meta property="og:title" content="Our Services - ForgeLabs" />
        <meta property="og:description" content="Explore the services offered by ForgeLabs, including enterprise web application development, outsourcing, UI/UX design, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forgelabs.tech/services" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Our Services - ForgeLabs" />
        <meta name="twitter:description" content="Explore the services offered by ForgeLabs, including enterprise web application development, outsourcing, UI/UX design, and more." />
      </Helmet>
      {/* Hero Section */}
      <div data-aos="fade-in">
        <Hero
          title="Our Services"
          description="At ForgeLabs, we specialize in building enterprise-grade web applications that are scalable, secure, and efficient. Our services are designed to support businesses of all sizes."
          ctaText="Get Started"
          ctaLink="/contact"
          variant="compact"
        />
      </div>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Our Key Services
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              We offer comprehensive solutions tailored to meet your business needs and drive digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Enterprise Web Application Development */}
            <div data-aos="fade-up" data-aos-delay="100">
              <ServiceCard
                icon={Code2}
                title="Enterprise Web Application Development"
                description="Custom, scalable web apps tailored for your business operations and growth. Built with modern technologies and best practices to ensure reliability and performance."
              />
            </div>

            {/* Outsourcing & Dev Support */}
            <div data-aos="fade-up" data-aos-delay="200">
              <ServiceCard
                icon={Users}
                title="Outsourcing & Dev Support"
                description="Skilled developers who integrate seamlessly with your team to accelerate projects. We provide flexible support models to match your project requirements."
              />
            </div>

            {/* UI/UX Design */}
            <div data-aos="fade-up" data-aos-delay="300">
              <ServiceCard
                icon={Palette}
                title="UI/UX Design"
                description="Intuitive and modern interfaces for the best user experience and adoption. We create designs that are both beautiful and functional, ensuring user satisfaction."
              />
            </div>

            {/* Maintenance & Optimization */}
            <div data-aos="fade-up" data-aos-delay="400">
              <ServiceCard
                icon={Wrench}
                title="Maintenance & Optimization"
                description="Keep your applications fast, secure, and reliable, with regular updates and monitoring. We ensure your systems run smoothly 24/7 with proactive support."
              />
            </div>

            {/* Software Development */}
            <div data-aos="fade-up" data-aos-delay="500">
              <ServiceCard
                icon={Server}
                title="Software Development"
                description="High-quality backend systems and integrations for enterprise needs. We build robust, scalable solutions that power your business operations efficiently."
              />
            </div>

            {/* Graphics Designing */}
            <div data-aos="fade-up" data-aos-delay="600">
              <ServiceCard
                icon={Palette}
                title="Graphics Designing"
                description="Creative and professional graphic design services for your brand's visual identity. We create everything from logos to marketing materials that stand out."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Enterprise-Grade Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Why Enterprise-Grade Matters
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Our enterprise-level approach ensures your applications are built for success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6" data-aos="fade-right">
                <h3 className="text-xl font-bold text-foreground mb-3">Scalability</h3>
                <p className="text-muted-foreground">
                  Built to grow with your business, handling increased load and complexity without compromising performance
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6" data-aos="fade-left">
                <h3 className="text-xl font-bold text-foreground mb-3">Security</h3>
                <p className="text-muted-foreground">
                  Industry-standard security practices to protect your data and maintain compliance with regulations
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6" data-aos="fade-right">
                <h3 className="text-xl font-bold text-foreground mb-3">Reliability</h3>
                <p className="text-muted-foreground">
                  Robust architecture and comprehensive testing ensure your systems are always available when you need them
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6" data-aos="fade-left">
                <h3 className="text-xl font-bold text-foreground mb-3">Maintainability</h3>
                <p className="text-muted-foreground">
                  Clean, well-documented code that's easy to update and extend as your requirements evolve
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div data-aos="fade-in">
        <CTASection
          title="Ready to Get Started?"
          description="Let's discuss how we can help transform your business with our services"
          ctaText="Contact Us Today"
          ctaLink="/contact"
          variant="gradient"
        />
      </div>
    </div>
  );
};

export default Services;
