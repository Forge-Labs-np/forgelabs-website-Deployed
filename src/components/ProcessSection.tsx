"use client";

import React, { useState, useRef, MouseEvent } from "react";
import step1 from "@/assets/images/step-1.png";
import step2 from "@/assets/images/step-2.png";
import step3 from "@/assets/images/step-3.png";
import step4 from "@/assets/images/step-4.png";

const processSteps = [
  {
    icon: <img src={step1} alt="Discover & Define" className="h-24 w-auto mix-blend-multiply" />,
    title: "Discover & Define",
    description: "We start by understanding your goals, challenges, and requirements to define a clear roadmap.",
  },
  {
    icon: <img src={step2} alt="Prototype & Design" className="h-24 w-auto mix-blend-multiply" />,
    title: "Prototype & Design",
    description: "We transform ideas into interactive prototypes — allowing early feedback and real-time collaboration before development begins.",
  },
  {
    icon: <img src={step3} alt="Develop & Iterate" className="h-24 w-auto mix-blend-multiply" />,
    title: "Develop & Iterate",
    description: "Our developers build scalable solutions while continuously refining through feedback loops and testing.",
  },
  {
    icon: <img src={step4} alt="Deliver & Support" className="h-24 w-auto mix-blend-multiply" />,
    title: "Deliver & Support",
    description: "We ensure on-time delivery, smooth deployment, and continuous post-launch support for lasting performance.",
  },
];

const ProcessStepCard = ({ step }: { step: typeof processSteps[0] }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [hoverDirection, setHoverDirection] = useState('left');
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const { width, height } = rect;

        const fromTop = y;
        const fromBottom = height - y;
        const fromLeft = x;
        const fromRight = width - x;

        const minDistance = Math.min(fromTop, fromBottom, fromLeft, fromRight);

        let direction = '';
        if (minDistance === fromTop) direction = 'top';
        else if (minDistance === fromBottom) direction = 'bottom';
        else if (minDistance === fromLeft) direction = 'left';
        else if (minDistance === fromRight) direction = 'right';
        
        setHoverDirection(direction);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const overlayStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'hsl(var(--primary) / 0.25)',
        zIndex: 0,
        transition: 'transform 0.4s ease-out',
        transform: 'scale(0)',
    };

    if (hoverDirection === 'top') {
        overlayStyle.transformOrigin = 'top';
        overlayStyle.transform = isHovered ? 'scaleY(1)' : 'scaleY(0)';
    } else if (hoverDirection === 'bottom') {
        overlayStyle.transformOrigin = 'bottom';
        overlayStyle.transform = isHovered ? 'scaleY(1)' : 'scaleY(0)';
    } else if (hoverDirection === 'left') {
        overlayStyle.transformOrigin = 'left';
        overlayStyle.transform = isHovered ? 'scaleX(1)' : 'scaleX(0)';
    } else if (hoverDirection === 'right') {
        overlayStyle.transformOrigin = 'right';
        overlayStyle.transform = isHovered ? 'scaleX(1)' : 'scaleX(0)';
    }

    return (
        <div
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative overflow-hidden bg-white p-8 rounded-3xl border border-border shadow-soft hover:shadow-xl transition-shadow duration-300 flex flex-col items-start text-left"
        >
            <div style={overlayStyle} />
            
            <div className="relative mb-6">
                {step.icon}
            </div>
            <h3 className={`relative text-xl font-bold mb-3 transition-colors duration-300 ${isHovered ? 'text-primary' : ''}`}>{step.title}</h3>
            <p className={`relative transition-colors duration-300 leading-relaxed ${isHovered ? 'text-foreground' : 'text-muted-foreground'}`}>{step.description}</p>
        </div>
    );
};

const ProcessSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="section-label inline-block">How We Work</span>
          <h2 className="section-title">Our <span className="text-primary">Process</span></h2>
          <p className="section-description mx-auto">
            From concept to prototype — our approach ensures precision, creativity, and reliable delivery.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStepCard key={index} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
