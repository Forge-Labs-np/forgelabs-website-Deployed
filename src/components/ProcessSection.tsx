
import { motion } from "framer-motion";
import { BrainCircuit, LayoutTemplate, GanttChart, Rocket } from "lucide-react";

const processSteps = [
  {
    icon: <BrainCircuit size={40} className="text-primary" />,
    title: "Discover & Define",
    description: "We start by understanding your goals, challenges, and requirements to define a clear roadmap.",
  },
  {
    icon: <LayoutTemplate size={40} className="text-primary" />,
    title: "Prototype & Design",
    description: "We transform ideas into interactive prototypes — allowing early feedback and real-time collaboration before development begins.",
  },
  {
    icon: <GanttChart size={40} className="text-primary" />,
    title: "Develop & Iterate",
    description: "Our developers build scalable solutions while continuously refining through feedback loops and testing.",
  },
  {
    icon: <Rocket size={40} className="text-primary" />,
    title: "Deliver & Support",
    description: "We ensure on-time delivery, smooth deployment, and continuous post-launch support for lasting performance.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

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
            <motion.div
              key={index}
              className="group relative bg-white p-8 rounded-3xl border border-border hover:border-primary/20 shadow-soft hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
            >
              {/* Step number badge */}
              <div className="absolute -top-4 -left-4 w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-primary">
                {index + 1}
              </div>
              
              <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
