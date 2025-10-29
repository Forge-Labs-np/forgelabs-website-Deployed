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
      className={`py-16 md:py-20 ${
        variant === "gradient" ? "gradient-primary" : "bg-muted"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              variant === "gradient" ? "text-primary" : "text-foreground"
            }`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`text-lg mb-8 ${
                variant === "gradient" ? "text-primary/90" : "text-muted-foreground"
              }`}
            >
              {description}
            </p>
          )}
          <Button
            variant={variant === "gradient" ? "default" : "hero"}
            size="lg"
            asChild
            className={`group ${variant === "gradient" ? "bg-primary text-white hover:bg-primary/90" : ""}`}
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
