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
      className={`relative py-12 md:py-16 overflow-hidden ${
        variant === "gradient" ? "gradient-cta" : "bg-gradient-to-b from-muted/50 to-muted"
      }`}
    >
      {variant === "gradient" && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
              variant === "gradient" ? "text-white" : "text-foreground"
            }`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`text-lg md:text-xl max-w-2xl mx-auto ${
                variant === "gradient" ? "text-white/90" : "text-muted-foreground"
              }`}
            >
              {description}
            </p>
          )}
          <Button
            variant={variant === "gradient" ? "secondary" : "hero"}
            size="lg"
            asChild
            className={`group shadow-xl hover:shadow-2xl ${variant === "gradient" ? "bg-white text-primary hover:bg-white/95 hover:scale-105" : ""}`}
          >
            <Link to={ctaLink}>
              {ctaText}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
