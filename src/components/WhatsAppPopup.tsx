
import React from 'react';

const WhatsAppPopup = () => {
  const openWhatsApp = () => {
    // Replace with your WhatsApp number and a pre-filled message
    const phoneNumber = '9765142241'; // TODO: Replace with a valid phone number
    const message = "Hello! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
        <button
          onClick={openWhatsApp}
          className="relative bg-[#0067fc] text-white p-4 rounded-full shadow-lg"
          aria-label="Open WhatsApp Chat"
        >
          <span className="absolute top-0 right-0 h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0067fc] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#0067fc]"></span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-1.11z" />
          </svg>
        </button>
    </div>
  );
};

export default WhatsAppPopup;
