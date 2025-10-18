
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const OurWork = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-center py-20 bg-white dark:bg-gray-900"
      >
        <h1 className="text-5xl font-bold">Our Work Is in Progress 🚀</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We’re experimenting, building, and forging digital solutions from the ground up. Take a look at what’s cooking inside ForgeLabs.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link to="/contact">Join Our Journey</Link>
          </Button>
        </div>
      </motion.section>

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

      {/* Team / Community */}
      <section className="py-20" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <p className="text-lg">Built by passionate developers from Nepal 🇳🇵</p>
          <div className="flex justify-center space-x-8 mt-8">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>DV</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>DV</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>DV</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-muted" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold">Want to collaborate or see what’s next?</h2>
          <div className="mt-6">
            <Button asChild size="lg">
              <Link to="/contact">Let's Collaborate</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
