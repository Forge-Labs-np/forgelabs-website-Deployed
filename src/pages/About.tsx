import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import { Target, Eye, Users, Award, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
       <Helmet>
        <title>About ForgeLabs - Our Mission, Vision, and Team</title>
        <meta name="description" content="Learn about ForgeLabs, a Nepal-based IT company specializing in software and web development. Discover our mission to deliver effective, reliable, and high-quality digital solutions." />
        <meta name="keywords" content="About ForgeLabs, IT company Nepal, software development, web development, our mission, our vision, who we are" />
        <meta property="og:title" content="About ForgeLabs - Our Mission, Vision, and Team" />
        <meta property="og:description" content="Discover our mission to deliver effective, reliable, and high-quality digital solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forgelabs.tech/about" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About ForgeLabs - Our Mission, Vision, and Team" />
        <meta name="twitter:description" content="Learn about ForgeLabs, a Nepal-based IT company specializing in software and web development." />
      </Helmet>
      {/* Hero Section */}
      <div data-aos="fade-in">
        <Hero
          title="About ForgeLabs"
          description="A place where ideas are forged into impactful digital realities"
          ctaText="Get in Touch"
          ctaLink="/contact"
          isCompact={true}
        />
      </div>

      {/* Welcome Message */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6" data-aos="fade-up">
            <span className="section-label inline-block mx-auto text-center w-full">Who We Are</span>
            <h2 className="section-title text-center">
              Welcome to <span className="text-primary">ForgeLabs</span>
            </h2>
            <p className="section-description text-center mx-auto">
              Welcome to ForgeLabs — a place where ideas are forged into impactful digital realities. 
              We're here to help businesses and individuals bring their digital visions to life through 
              innovative solutions and expert craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div data-aos="fade-up" className="text-center mb-16 space-y-4">
              <span className="section-label inline-block">Why Choose Us</span>
              <h2 className="section-title">
                What Makes Us <span className="text-primary">Different</span>
              </h2>
              <p className="section-description mx-auto">
                At ForgeLabs, we don't just develop websites—we craft solutions that make a difference. 
                Every project is approached with precision, creativity, and collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div data-aos="fade-up" data-aos-delay="100">
                <div className="group relative bg-white border-2 border-border rounded-3xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <Target className="text-primary-blue" size={36} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Effective</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Solving real problems for your business or project
                    </p>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <div className="group relative bg-white border-2 border-border rounded-3xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <Shield className="text-primary-blue" size={36} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Reliable</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Developed with clean, maintainable, and scalable code
                    </p>
                  </div>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <div className="group relative bg-white border-2 border-border rounded-3xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <Award className="text-primary-blue" size={36} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">High-Quality</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Polished, tested, and user-friendly for the best experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <div className="flex items-center justify-center mb-6">
              <Users className="text-primary-blue mr-3" size={40} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Who We Are</h2>
            </div>
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              ForgeLabs Pvt Ltd is a Nepal-based IT company specializing in software and web development. 
              We are a team of passionate professionals committed to creating digital solutions that truly 
              make a difference. Our diverse expertise and collaborative approach enable us to tackle 
              complex challenges and deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-right">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Target className="text-primary-blue" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to empower businesses and teams by delivering digital solutions that 
                  are effective, efficient, and crafted with care. Beyond software, we aim to build 
                  trust, foster collaboration, and create lasting relationships with clients and partners. 
                  We believe in the power of technology to transform ideas into reality.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-left">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="text-primary-blue" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our vision is to make ForgeLabs a trusted name in IT and software development, known 
                  for quality, reliability, and innovation. We aspire to solve real-world problems 
                  digitally, helping businesses grow and individuals achieve their goals through smart 
                  technology. We envision a future where our solutions become integral to our clients' success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
