import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg className={`fill-current ${className}`} width="63" height="45" viewBox="0 0 63 45" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.3691 3.00049L13.0026 3.00049L0.000483462 36.3054L10.367 36.3054L23.3691 3.00049Z"/>
      <path d="M52.7305 3.00049L42.3639 3.00049L29.3618 36.3054L39.7284 36.3054L52.7305 3.00049Z"/>
      <path d="M34.623 11.2969L24.2565 11.2969L11.2544 44.6018L21.6209 44.6018L34.623 11.2969Z"/>
    </svg>
  );
};

export default Logo;