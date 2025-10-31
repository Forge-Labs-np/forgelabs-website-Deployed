import React from 'react';

interface ServiceDetailProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ title, description, imageUrl, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between gap-12 py-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2 p-4" data-aos={`fade-${reverse ? 'left' : 'right'}`} data-aos-once="true" data-aos-offset="200">
        <div className="group relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
          <img 
            src={imageUrl} 
            alt={title} 
            className="relative w-full mx-auto mix-blend-multiply shadow-soft group-hover:shadow-xl rounded-xl transition-all duration-500" 
          />
        </div>
      </div>
      <div className="md:w-1/2 p-4 space-y-4" data-aos={`fade-${reverse ? 'right' : 'left'}`} data-aos-once="true" data-aos-offset="200">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceDetail;
