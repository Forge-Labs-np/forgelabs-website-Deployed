
import { motion, Variants } from "framer-motion";
import servicesImage from "../assets/images/services.png";

const fadeIn: Variants = {
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
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Side: Text Content */}
        <motion.div
          className="flex flex-col justify-center text-center md:text-left md:w-1/2"
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
          className="relative md:w-1/2 mt-12 md:mt-0"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={servicesImage} alt="Strategic Prototype-Based Solutions" className="w-full max-w-lg rounded-lg mix-blend-multiply md:-ml-12" />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
