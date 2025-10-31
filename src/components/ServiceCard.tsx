import { LucideIcon } from "lucide-react";
import AnimatedIcon from "./AnimatedIcon";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group relative bg-white border border-border rounded-2xl p-8 hover:shadow-xl hover:bg-primary/5 transition-all duration-500 overflow-hidden">
      <div className="relative z-10">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500">
          <AnimatedIcon IconComponent={Icon} />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
