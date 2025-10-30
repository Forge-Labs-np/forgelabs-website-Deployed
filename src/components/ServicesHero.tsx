
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
    <section className="relative min-h-[85vh] flex items-center gradient-hero py-20 px-6 md:px-10 overflow-hidden isolate">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative">
        {/* Left Side: Text Content */}
        <motion.div
          className="flex flex-col justify-center text-center md:text-left md:w-1/2 space-y-6"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="section-label">
            What We Provide
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Strategic Prototype-Based Solutions for <span className="text-primary">Modern Businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed">
            At ForgeLabs, we turn ideas into functional prototypes that evolve into powerful products. Our process is built around collaboration, innovation, and precision.
          </p>
        </motion.div>

        {/* Right Side: Illustration */}
        <motion.div
          className="relative md:w-1/2 mt-12 md:mt-0 flex justify-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative">
            <img 
              src={servicesImage} 
              alt="Strategic Prototype-Based Solutions" 
              className="relative w-full max-w-lg mix-blend-multiply" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
