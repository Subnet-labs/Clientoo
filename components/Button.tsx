import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = true, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary group";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primaryHover shadow-[0_4px_14px_0_rgba(249,80,0,0.39)] hover:shadow-[0_6px_20px_rgba(249,80,0,0.23)] hover:-translate-y-0.5",
    secondary: "bg-white text-textMain border border-gray-200 hover:border-primary hover:text-primary shadow-sm hover:shadow-md",
    outline: "bg-transparent border border-textMain/20 text-textMain hover:border-textMain hover:bg-textMain hover:text-white",
    ghost: "bg-transparent text-textMain hover:bg-gray-100"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && (
        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
};

export default Button;