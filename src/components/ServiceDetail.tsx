
import React from 'react';

interface ServiceDetailProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ title, description, imageUrl, reverse }) => {
  return (
    <div
      className={`bg-white p-8 rounded-xl shadow-md my-12 transition-all duration-300 hover:shadow-lg hover:scale-105`}
      data-aos="fade-up"
    >
      <div className={`flex flex-col md:flex-row items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className="md:w-1/2 p-4">
          <img
            src={imageUrl}
            alt={title}
            className="rounded-lg w-full mix-blend-multiply"
          />
        </div>
        <div className={`md:w-1/2 p-4 ${reverse ? 'md:text-right' : ''}`}>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
