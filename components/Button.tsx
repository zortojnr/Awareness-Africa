
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'pink' | 'blue' | 'whatsapp';
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
  // Standardized refined padding for a professional institutional look
  const baseStyles = "px-5 py-2.5 sm:px-6 sm:py-3 font-semibold transition-all duration-300 border-2 flex items-center justify-center text-center";
  
  const variants = {
    primary: "bg-black text-white border-black hover:bg-brand-primary hover:border-brand-primary",
    secondary: "bg-white text-black border-white hover:bg-black hover:text-white",
    outline: "bg-transparent text-black border-black hover:bg-black hover:text-white",
    pink: "bg-[#E91E63] text-white border-[#E91E63] hover:bg-white hover:text-[#E91E63]",
    blue: "bg-[#1976D2] text-white border-[#1976D2] hover:bg-white hover:text-[#1976D2]",
    whatsapp: "bg-[#25D366] text-white border-[#25D366] hover:bg-[#128C7E] hover:border-[#128C7E]"
  };

  const typography = noCaps ? "text-sm tracking-normal" : "uppercase tracking-[0.2em] text-[10px] sm:text-[11px]";

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