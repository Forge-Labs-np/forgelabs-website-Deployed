
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const ServicesHero = () => {
  return (
    <section className="min-h-screen flex items-center bg-primary/5 py-20 px-6 md:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <motion.div
          className="flex flex-col justify-center text-center md:text-left"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold mb-2 uppercase tracking-wider">
            What We Provide
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Strategic Prototype-Based Solutions for Modern Businesses
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            At ForgeLabs, we turn ideas into functional prototypes that evolve into powerful products. Our process is built around collaboration, innovation, and precision — ensuring your business moves from concept to deployment with speed and confidence.
          </p>
        </motion.div>

        {/* Right Side: Illustration */}
        <motion.div
          className="relative flex items-center justify-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {
            /* 
            Developer's Note: 
            Please replace this placeholder with a tech-inspired vector illustration 
            that aligns with the ForgeLabs brand. The illustration should represent 
            collaboration, prototyping, or product planning.
            Example: A team around a whiteboard, UI wireframes turning into a product, etc.
          */
          }
          <div className="w-full max-w-md h-80 rounded-lg bg-white/50 flex items-center justify-center border border-dashed border-primary/20">
            <p className="text-gray-500">Illustration Placeholder</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
