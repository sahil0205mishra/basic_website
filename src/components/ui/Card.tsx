import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export default function Card({ children, title, className = '' }: CardProps) {
  return (
    <div className={`bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 ${className}`}>
      {title && (
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
          <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        </div>
      )}
      {children}
    </div>
  );
}
