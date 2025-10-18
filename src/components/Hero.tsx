
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
  variant?: "default" | "compact";
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
  variant = "default",
}: HeroProps) => {
  const isCompact = variant === "compact";

  return (
    <section
      className={cn(
        "bg-[#eaf5ff] py-12 px-6",
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
                isCompact ? "text-xl md:text-2xl" : "text-3xl md:text-4xl"
              )}
            >
              {subtitle}
            </p>
          )}
          <p
            className={cn(
              "text-gray-600",
              isCompact
                ? "text-lg max-w-2xl mx-auto"
                : "text-lg md:text-xl max-w-2xl mx-auto md:mx-0"
            )}
          >
            {description}
          </p>
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 pt-4",
              isCompact ? "justify-center" : "justify-center md:justify-start"
            )}
          >
            <Button
              asChild
              size="lg"
              className="bg-transparent hover:bg-[#0067fc] text-[#0067fc] hover:text-white border border-[#0067fc] font-medium px-6 py-3 rounded-lg transition group"
            >
              <Link to={ctaLink}>
                {ctaText}{" "}
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
            </Button>
            {secondaryCtaText && secondaryCtaLink && !isCompact && (
              <Button asChild size="lg" variant="outline" className="font-medium px-6 py-3 rounded-lg">
                <Link to={secondaryCtaLink}>{secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </div>
        {!isCompact && imageSrc && (
          <div className="md:w-1/2 relative flex justify-center">
            <div className="absolute inset-x-0 top-0 bottom-[-20rem] rounded-lg opacity-20 -z-1 md:inset-0 md:rounded-full md:scale-110"></div>
            <img
              src={imageSrc}
              alt="Hero Illustration"
              className="relative z-10 w-full max-w-md"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
