import { forwardRef } from 'react';

const Card = forwardRef(
  ({ 
    children, 
    className = '', 
    padding = true, 
    shadow = true,
    hover = false,
    ...props 
  }, ref) => {
    const baseClasses = 'bg-white dark:bg-sports-secondary rounded-2xl overflow-hidden transition-all duration-200';
    const paddingClass = padding ? 'p-4 sm:p-6' : '';
    const shadowClass = shadow ? 'shadow-sports hover:shadow-sports-lg' : '';
    const hoverClass = hover ? 'hover:translate-y-[-4px]' : '';

    return (
      <div 
        ref={ref}
        className={`${baseClasses} ${paddingClass} ${shadowClass} ${hoverClass} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;