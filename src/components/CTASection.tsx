import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description?: string;
  ctaText: string;
  ctaLink: string;
  variant?: "default" | "gradient";
}

const CTASection = ({
  title,
  description,
  ctaText,
  ctaLink,
  variant = "default",
}: CTASectionProps) => {
  return (
    <section
      className={`relative py-16 md:py-20 overflow-hidden ${
        variant === "gradient" ? "bg-primary" : "bg-gradient-to-b from-muted/50 to-muted"
      }`}
    >
      {variant === "gradient" && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-50" />
        </>
      )}
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
              variant === "gradient" ? "text-white" : "text-foreground"
            }`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto ${
                variant === "gradient" ? "text-white/80" : "text-muted-foreground"
              }`}
            >
              {description}
            </p>
          )}
          <div className="mt-8 sm:mt-10">
            <Button
              variant={variant === "gradient" ? "secondary" : "hero"}
              size="lg"
              asChild
              className={`group shadow-xl hover:shadow-2xl w-full sm:w-auto ${variant === "gradient" ? "bg-white text-primary hover:bg-white/95 hover:scale-105" : ""}`}
            >
              <Link to={ctaLink} className="flex items-center justify-center">
                {ctaText}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
