import React from 'react';
import Input from '../ui/Input';

interface SalesFilterInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SalesFilterInput({ value, onChange }: SalesFilterInputProps) {
  return (
    <div className="max-w-xs w-full">
      <Input
        type="number"
        value={value}
        onChange={onChange}
        label="💰 Sales Threshold Filter"
        placeholder="Enter minimum sales (e.g., 500000)"
      />
      <p className="text-xs text-gray-500 mt-1.5 ml-1">
        {value && !isNaN(parseFloat(value))
          ? `Showing sales ≥ $${parseFloat(value).toLocaleString()}`
          : 'Filter years by minimum sales amount'}
      </p>
    </div>
  );
}
