'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  active?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  active = false,
  disabled = false,
  className = ''
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors';

  const variantStyles = {
    primary: active
      ? 'bg-blue-700 text-white hover:bg-blue-800'
      : 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: active
      ? 'bg-gray-800 text-white hover:bg-gray-900'
      : 'bg-gray-600 text-white hover:bg-gray-700',
    outline: active
      ? 'bg-blue-100 border-2 border-blue-600 text-blue-700'
      : 'bg-transparent border-2 border-blue-500 text-blue-600 hover:bg-blue-50'
  };

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
}
