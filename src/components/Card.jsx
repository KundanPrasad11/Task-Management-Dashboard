import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div 
      className={`bg-[#FFFFFF] rounded-[16px] p-6 shadow-[0px_4px_12px_rgba(59,66,84,0.03),0px_1px_2px_rgba(59,66,84,0.06)] hover:shadow-[0px_12px_24px_rgba(59,66,84,0.08)] transition-all duration-300 flex flex-col justify-between min-h-[120px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;