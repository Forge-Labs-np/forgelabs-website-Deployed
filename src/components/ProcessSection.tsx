
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Process</h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            From concept to prototype — our approach ensures precision, creativity, and reliable delivery.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
