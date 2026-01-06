import React from 'react';
import Button from '../ui/Button';
import { ChartType } from '@/types';

interface ChartTypeToggleProps {
  activeChart: ChartType;
  onChartChange: (chartType: ChartType) => void;
}

export default function ChartTypeToggle({ activeChart, onChartChange }: ChartTypeToggleProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        active={activeChart === 'bar'}
        onClick={() => onChartChange('bar')}
        className="flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
        Bar
      </Button>
      <Button
        variant="outline"
        active={activeChart === 'line'}
        onClick={() => onChartChange('line')}
        className="flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
        Line
      </Button>
      <Button
        variant="outline"
        active={activeChart === 'pie'}
        onClick={() => onChartChange('pie')}
        className="flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
        </svg>
        Pie
      </Button>
    </div>
  );
}
