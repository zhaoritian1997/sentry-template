import React from 'react';

interface CheckMarkSvgProps {
  className?: string;
}

const CheckMarkSvg: React.FC<CheckMarkSvgProps> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" height="14px" width="14px"><path d="M6.19,14.51a.77.77,0,0,1-.57-.25l-4.2-4.8a.75.75,0,0,1,1.13-1l3.56,4.06L13.36,1.82a.75.75,0,0,1,1-.21.76.76,0,0,1,.21,1.05L6.81,14.18a.73.73,0,0,1-.58.33Z"></path></svg>
  );
};

export default CheckMarkSvg;