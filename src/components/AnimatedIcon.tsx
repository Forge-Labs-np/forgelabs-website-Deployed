import React, { FC, SVGProps } from "react";
import "./AnimatedIcon.css";

interface AnimatedIconProps {
  IconComponent: FC<SVGProps<SVGSVGElement>>;
}

const AnimatedIcon: FC<AnimatedIconProps> = ({ IconComponent }) => {
  return (
    <div className="animated-icon-container">
      <IconComponent className="animated-icon" />
    </div>
  );
};

export default AnimatedIcon;
