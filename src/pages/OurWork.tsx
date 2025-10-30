import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CTASection from "@/components/CTASection";

const OurWork = () => {
  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>Our Work - ForgeLabs</title>
        <meta name="description" content="A showcase of our in-progress projects and experiments at ForgeLabs. See what we're building and get a glimpse of our capabilities." />
        <meta name="keywords" content="ForgeLabs projects, our work, portfolio, web development projects, software development examples" />
        <meta property="og:title" content="Our Work - ForgeLabs" />
        <meta property="og:description" content="A showcase of our in-progress projects and experiments at ForgeLabs. See what we're building and get a glimpse of our capabilities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forgelabs.tech/our-work" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Our Work - ForgeLabs" />
        <meta name="twitter:description" content="A showcase of our in-progress projects and experiments at ForgeLabs." />
      </Helmet>
      {/* Hero Section */}
      <div data-aos="fade-in">
        <Hero
          title="Our Work Is in Progress 🚀"
          description="We’re experimenting, building, and forging digital solutions from the ground up. Take a look at what’s cooking inside ForgeLabs."
          ctaText="Join Our Journey"
          ctaLink="/contact"
          isCompact={true}
        />
      </div>

      {/* Demo Works Grid */}
      <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Demo Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <Card className="rounded-2xl hover:shadow-primary/20 hover:border-primary flex flex-col">
              <CardHeader>
                <CardTitle>React + Spring Boot Template</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p>Boilerplate for rapid full-stack development.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['React', 'Spring Boot', 'MySQL'].map(tag => (
                    <div key={tag} className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</div>
                  ))}
                </div>
                <div className="mt-auto pt-4">
                  <Button variant="outline" size="sm" className="w-full" disabled>Preview</Button>
                </div>
              </CardContent>
            </Card>
            {/* Card 2 */}
            <Card className="rounded-2xl hover:shadow-primary/20 hover:border-primary flex flex-col">
              <CardHeader>
                <CardTitle>Forge Dashboard Prototype</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p>A minimal internal tool for managing projects.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['React', 'Tailwind', 'JWT'].map(tag => (
                    <div key={tag} className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</div>
                  ))}
                </div>
                <div className="mt-auto pt-4">
                  <Button variant="outline" size="sm" className="w-full" disabled>Preview</Button>
                </div>
              </CardContent>
            </Card>
            {/* Card 3 */}
            <Card className="rounded-2xl hover:shadow-primary/20 hover:border-primary flex flex-col">
              <CardHeader>
                <CardTitle>E-commerce Microservice Concept</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p>Testing scalable API communication between services.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['REST', 'Docker'].map(tag => (
                    <div key={tag} className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</div>
                  ))}
                </div>
                <div className="mt-auto pt-4">
                  <Button variant="outline" size="sm" className="w-full" disabled>Preview</Button>
                </div>
              </CardContent>
            </Card>
            {/* Card 4 */}
            <Card className="rounded-2xl hover:shadow-primary/20 hover:border-primary flex flex-col">
              <CardHeader>
                <CardTitle>AI-Assistant (Concept)</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p>Experimenting with AI-based workflow automation.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['OpenAI', 'Node.js'].map(tag => (
                    <div key={tag} className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</div>
                  ))}
                </div>
                <div className="mt-auto pt-4">
                  <Button variant="outline" size="sm" className="w-full" disabled>Preview</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Progress / Timeline */}
      <section className="py-20 bg-muted" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Journey Has Just Begun</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12">
            <div className="flex flex-col items-center">
              <div className="text-4xl">💡</div>
              <p className="mt-2 font-semibold">Idea</p>
            </div>
            <div className="text-gray-400">➡️</div>
            <div className="flex flex-col items-center">
              <div className="text-4xl">⚙️</div>
              <p className="mt-2 font-semibold">Building</p>
            </div>
            <div className="text-gray-400">➡️</div>
            <div className="flex flex-col items-center">
              <div className="text-4xl">🧪</div>
              <p className="mt-2 font-semibold">Testing</p>
            </div>
            <div className="text-gray-400">➡️</div>
            <div className="flex flex-col items-center">
              <div className="text-4xl">🚀</div>
              <p className="mt-2 font-semibold">Launch Soon</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to collaborate or see what’s next?"
        ctaText="Let's Collaborate"
        ctaLink="/contact"
        variant="gradient"
      />
    </div>
  );
};

export default OurWork;
