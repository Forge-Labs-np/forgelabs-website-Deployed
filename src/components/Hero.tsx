
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
        "gradient-hero py-12 px-6",
        isCompact ? "md:py-16" : "md:py-20 md:min-h-screen"
      )}
    >
      <div
        className={cn(
          "container mx-auto flex items-center justify-between gap-8 h-full",
          isCompact ? "flex-col text-center" : "flex-col-reverse md:flex-row"
        )}
      >
        <div
          className={cn(
            "space-y-5",
            isCompact ? "md:w-3/4 text-center" : "md:w-1/2 text-center md:text-left"
          )}
        >
          {title && (
            <h1
              className={cn(
                "font-bold text-gray-800",
                isCompact
                  ? "text-4xl md:text-5xl"
                  : "text-5xl md:text-6xl"
              )}
            >
              {title}
            </h1>
          )}
          {subtitle && (
            <p
              className={cn(
                "font-bold text-gray-800",
                isCompact ? "text-lg md:text-xl" : "text-xl md:text-2xl"
              )}
            >
              {subtitle}
            </p>
          )}
          {description && (
            <p
              className={cn(
                "text-muted-foreground",
                isCompact ? "text-md" : "text-lg"
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
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={imageSrc}
              alt="Hero Image"
              className="rounded-lg w-full h-auto max-w-md mx-auto"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
