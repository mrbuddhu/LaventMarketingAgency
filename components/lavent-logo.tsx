import React from 'react';

interface LaventLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function LaventLogo({ className = '', size = 'md', showText = true }: LaventLogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Starburst/Compass Logo */}
      <div className={`relative ${sizeClasses[size]} flex-shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main starburst shape */}
          <path
            d="M50 10 L60 35 L85 35 L65 50 L75 75 L50 60 L25 75 L35 50 L15 35 L40 35 Z"
            fill="#05846F"
            stroke="#05846F"
            strokeWidth="2"
          />
          {/* Center dot */}
          <circle cx="50" cy="50" r="3" fill="#05846F" />
          {/* Small dots at the ends of main points */}
          <circle cx="50" cy="10" r="2" fill="#05846F" />
          <circle cx="85" cy="35" r="2" fill="#05846F" />
          <circle cx="75" cy="75" r="2" fill="#05846F" />
          <circle cx="25" cy="75" r="2" fill="#05846F" />
          <circle cx="15" cy="35" r="2" fill="#05846F" />
        </svg>
      </div>
      
      {/* Text Logo */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-playfair-bold text-[#05846F] ${textSizes[size]}`}>
            Lavent
          </span>
          <span className="text-[#19653F] text-xs font-medium">
            Marketing
          </span>
        </div>
      )}
    </div>
  );
}

export default LaventLogo;

