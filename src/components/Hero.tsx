
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
  isCompact?: boolean;
}

const Hero = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc,
  isCompact = false,
}: HeroProps) => {
  return (
    <section
      className={cn(
        "relative gradient-hero py-12 px-6 overflow-hidden isolate",
        isCompact ? "md:py-20" : "md:py-24 lg:py-32 md:min-h-[85vh]"
      )}
    >
      {/* Decorative background elements */}
      {!isCompact && (
        <>
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </>
      )}
      
      <div
        className={cn(
          "container mx-auto flex items-center justify-between gap-12 h-full relative",
          isCompact ? "flex-col text-center" : "flex-col-reverse md:flex-row"
        )}
      >
        <div
          className={cn(
            "space-y-6",
            isCompact ? "md:w-3/4 text-center" : "md:w-1/2 text-center md:text-left"
          )}
        >
          {title && (
            <h1
              className={cn(
                "font-bold text-foreground leading-tight tracking-tight",
                isCompact
                  ? "text-4xl md:text-5xl lg:text-6xl"
                  : "text-5xl md:text-6xl lg:text-7xl"
              )}
            >
              {title}
            </h1>
          )}
          {subtitle && (
            <p
              className={cn(
                "font-semibold text-foreground/80",
                isCompact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
              )}
            >
              {subtitle}
            </p>
          )}
          {description && (
            <p
              className={cn(
                "text-muted-foreground leading-relaxed",
                isCompact ? "text-base md:text-lg" : "text-lg md:text-xl max-w-2xl mx-auto md:mx-0"
              )}
            >
              {description}
            </p>
          )}
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 pt-4",
              isCompact ? "justify-center" : "justify-center md:justify-start"
            )}
          >
            {ctaLink && ctaText && (
              <Button variant="hero" size="lg" asChild>
                <Link to={ctaLink}>{ctaText}</Link>
              </Button>
            )}
            {secondaryCtaLink && secondaryCtaText && (
              <Button
                variant="outline"
                size="lg"
                asChild
                className="group bg-transparent"
              >
                <Link to={secondaryCtaLink}>
                  {secondaryCtaText}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            )}
          </div>
        </div>
        {!isCompact && imageSrc && (
          <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
            <div className="relative">
              <img
                src={imageSrc}
                alt="Hero Image"
                className="relative w-full h-auto max-w-lg mx-auto mix-blend-multiply"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
