'use client';

import { forwardRef } from 'react';
import Link from 'next/link';

const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'medium',
      href,
      className = '',
      fullWidth = false,
      isLoading = false,
      disabled = false,
      type = 'button',
      icon = null,
      iconPosition = 'left',
      onClick,
      ...props
    },
    ref
  ) => {
    // Base classes
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    // Size classes
    const sizeClasses = {
      small: 'text-sm px-3 py-1.5',
      medium: 'text-base px-4 py-2',
      large: 'text-lg px-6 py-3',
    };
    
    // Variant classes
    const variantClasses = {
      primary: 'bg-sports-primary hover:bg-blue-600 text-white focus:ring-blue-500 disabled:bg-blue-300',
      secondary: 'bg-sports-light hover:bg-gray-200 text-sports-dark focus:ring-gray-300 disabled:bg-gray-100 disabled:text-gray-400',
      accent: 'bg-sports-accent hover:bg-red-500 text-white focus:ring-red-400 disabled:bg-red-300',
      outline: 'bg-transparent border border-sports-primary text-sports-primary hover:bg-sports-primary/10 focus:ring-blue-500 disabled:border-gray-300 disabled:text-gray-400',
      ghost: 'bg-transparent text-sports-primary hover:bg-sports-primary/10 focus:ring-blue-500 disabled:text-gray-400',
      danger: 'bg-sports-error hover:bg-red-600 text-white focus:ring-red-500 disabled:bg-red-300',
    };
    
    // Loading and fullWidth classes
    const loadingClass = isLoading ? 'opacity-80 cursor-not-allowed' : '';
    const fullWidthClass = fullWidth ? 'w-full' : '';
    
    // Combine all classes
    const classes = `
      ${baseClasses}
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      ${loadingClass}
      ${fullWidthClass}
      ${className}
    `;
    
    // Loading spinner
    const LoadingSpinner = () => (
      <svg 
        className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );
    
    // Icon rendering
    const renderIcon = () => {
      if (!icon) return null;
      
      return (
        <span className={iconPosition === 'left' ? 'mr-2' : 'ml-2'}>
          {icon}
        </span>
      );
    };
    
    // Button content
    const content = (
      <>
        {isLoading && <LoadingSpinner />}
        {!isLoading && icon && iconPosition === 'left' && renderIcon()}
        {children}
        {!isLoading && icon && iconPosition === 'right' && renderIcon()}
      </>
    );
    
    // Render as link if href is provided
    if (href) {
      return (
        <Link 
          href={href} 
          className={classes}
          ref={ref}
          {...props}
        >
          {content}
        </Link>
      );
    }
    
    // Otherwise render as button
    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        disabled={disabled || isLoading}
        onClick={onClick}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;