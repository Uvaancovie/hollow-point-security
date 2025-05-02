import React from 'react';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  title: string;
  onClick?: () => void;
  styles?: string;
};

const Button = ({ 
  type = 'button', 
  title, 
  onClick, 
  styles 
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`py-4 px-6 bg-red-600 text-white font-bold text-lg rounded-md hover:bg-red-700 transition-all duration-300 ${styles}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;