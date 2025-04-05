const Loading = ({ 
    size = 'medium', 
    color = 'primary',
    fullScreen = false,
    text = 'Loading...',
    showText = true
  }) => {
    // Size classes
    const sizeClasses = {
      small: 'w-5 h-5',
      medium: 'w-8 h-8',
      large: 'w-12 h-12',
      xl: 'w-16 h-16'
    };
    
    // Color classes
    const colorClasses = {
      primary: 'text-sports-primary',
      white: 'text-white',
      gray: 'text-sports-gray',
      accent: 'text-sports-accent'
    };
    
    // Full screen styling
    const containerClasses = fullScreen 
      ? 'fixed inset-0 flex flex-col items-center justify-center bg-white/80 dark:bg-sports-dark/80 backdrop-blur-sm z-50' 
      : 'flex flex-col items-center justify-center py-4';
    
    return (
      <div className={containerClasses} role="status">
        <svg 
          className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]}`} 
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
        
        {showText && (
          <span className={`mt-2 ${colorClasses[color]} font-medium`}>
            {text}
          </span>
        )}
        
        <span className="sr-only">Loading</span>
      </div>
    );
  };
  
  export default Loading;