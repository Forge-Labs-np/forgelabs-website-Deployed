import React from 'react';
import Image from 'next/image';
import myImageLoader from '../../loader'; // Assuming loader is in the root

interface ServiceDetailProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ title, description, imageUrl, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between py-4 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2 p-4" data-aos={`fade-${reverse ? 'left' : 'right'}`} data-aos-once="true">
        <Image loader={myImageLoader} src={imageUrl} alt={title} width={500} height={300} className="rounded-lg max-w-sm mx-auto mix-blend-multiply" />
      </div>
      <div className="md:w-1/2 p-4" data-aos={`fade-${reverse ? 'right' : 'left'}`} data-aos-once="true">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default ServiceDetail;
