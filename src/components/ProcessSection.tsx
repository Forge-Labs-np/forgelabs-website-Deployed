import step1 from "@/assets/images/step-1.png";
import step2 from "@/assets/images/step-2.png";
import step3 from "@/assets/images/step-3.png";
import step4 from "@/assets/images/step-4.png";

const processSteps = [
  {
    icon: <img src={step1} alt="Discover & Define" className="h-24 w-auto mix-blend-multiply" />,
    title: "Discover & Define",
    description: "We start by understanding your goals, challenges, and requirements to define a clear roadmap.",
  },
  {
    icon: <img src={step2} alt="Prototype & Design" className="h-24 w-auto mix-blend-multiply" />,
    title: "Prototype & Design",
    description: "We transform ideas into interactive prototypes — allowing early feedback and real-time collaboration before development begins.",
  },
  {
    icon: <img src={step3} alt="Develop & Iterate" className="h-24 w-auto mix-blend-multiply" />,
    title: "Develop & Iterate",
    description: "Our developers build scalable solutions while continuously refining through feedback loops and testing.",
  },
  {
    icon: <img src={step4} alt="Deliver & Support" className="h-24 w-auto mix-blend-multiply" />,
    title: "Deliver & Support",
    description: "We ensure on-time delivery, smooth deployment, and continuous post-launch support for lasting performance.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="section-label inline-block">How We Work</span>
          <h2 className="section-title">Our <span className="text-primary">Process</span></h2>
          <p className="section-description mx-auto">
            From concept to prototype — our approach ensures precision, creativity, and reliable delivery.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white p-8 rounded-3xl border border-border shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left"
            >
              <div className="absolute top-0 right-0 h-full w-full bg-primary/25 origin-right transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
              
              <div className="relative mb-6">
                {step.icon}
              </div>
              <h3 className="relative text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
              <p className="relative text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
