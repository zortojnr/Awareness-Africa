
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'pink' | 'blue';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  noCaps?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button',
  noCaps = false
}) => {
  const baseStyles = "px-8 py-4 font-medium transition-all duration-300 border-2";
  
  const variants = {
    primary: "bg-black text-white border-black hover:bg-brand-primary hover:border-brand-primary",
    secondary: "bg-white text-black border-white hover:bg-black hover:text-white",
    outline: "bg-transparent text-black border-black hover:bg-black hover:text-white",
    pink: "bg-[#E91E63] text-white border-[#E91E63] hover:bg-white hover:text-[#E91E63]",
    blue: "bg-[#1976D2] text-white border-[#1976D2] hover:bg-white hover:text-[#1976D2]"
  };

  const typography = noCaps ? "text-base tracking-normal" : "uppercase tracking-widest text-sm";

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      className={`${baseStyles} ${variants[variant]} ${typography} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
