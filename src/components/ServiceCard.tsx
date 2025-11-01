import { LucideIcon } from "lucide-react";
import AnimatedIcon from "./AnimatedIcon";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100">
        <div className="flex items-center justify-start mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
                <AnimatedIcon IconComponent={Icon} />
            </div>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
