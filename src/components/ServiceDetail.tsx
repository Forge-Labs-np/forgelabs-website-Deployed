import React from 'react';

interface ServiceDetailProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ title, description, imageUrl, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between py-4 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2 p-4" data-aos={`fade-${reverse ? 'left' : 'right'}`}>
        <img src={imageUrl} alt={title} className="rounded-lg max-w-sm mx-auto mix-blend-multiply" />
      </div>
      <div className="md:w-1/2 p-4" data-aos={`fade-${reverse ? 'right' : 'left'}`}>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default ServiceDetail;
