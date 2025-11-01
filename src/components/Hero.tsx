import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const Hero = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left z-10 order-2 lg:order-1">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl">
              ForgeLabs
            </h1>
            <p className="mt-4 text-lg text-gray-700 font-medium">
              Where ideas are forged into impactful digital realities
            </p>
            <p className="mt-6 text-base text-gray-500 max-w-lg mx-auto lg:mx-0">
              Transforming concepts into scalable, secure, and efficient
              enterprise web applications.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-3 font-semibold text-base shadow-lg transition-transform transform hover:scale-105"
              >
                <Link to="/contact">Let's Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border border-gray-300 text-gray-800 hover:bg-gray-50 rounded-full px-6 py-3 font-semibold group bg-transparent text-base transition-all"
              >
                <Link to="/our-work">
                  Discover Our Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Image and Shapes */}
          <div className="relative h-96 lg:h-[450px] order-1 lg:order-2">
            {/* Pink Banner */}
            <div
              className="absolute top-0 right-0 w-[120%] h-48 bg-pink-100/80 transform -skew-y-12 origin-top-right z-0"
            ></div>
            
            {/* Purple Blob */}
            <div
              className="absolute bottom-0 -right-20 w-[90%] h-[90%] bg-purple-200/90 rounded-t-full rounded-bl-full z-10"
            ></div>

            {/* Yellow Circle */}
            <div
              className="absolute top-1/4 left-1/4 -translate-x-1/2 w-20 h-20 bg-yellow-300 rounded-full z-20"
            ></div>

            {/* Image container */}
            <div className="absolute inset-0 flex items-center justify-center z-30 p-4 sm:p-8">
              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-2xl w-full max-w-md">
                <img
                  src={heroImage}
                  alt="ForgeLabs Team Illustration"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
