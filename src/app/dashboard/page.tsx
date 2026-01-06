'use client';

import { useState, useMemo } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import Card from '@/components/ui/Card';
import SalesFilterInput from '@/components/features/SalesFilterInput';
import ChartTypeToggle from '@/components/features/ChartTypeToggle';
import SalesChart from '@/components/features/SalesChart';
import { salesData } from '@/data/salesData';
import { ChartType } from '@/types';

export default function DashboardPage() {
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [filterValue, setFilterValue] = useState('');

  const filteredData = salesData.filter((item) => {
    if (!filterValue || filterValue === '') return true;
    const threshold = parseFloat(filterValue);
    if (isNaN(threshold)) return true;
    return item.totalSales >= threshold;
  });

  // Calculate statistics
  const stats = useMemo(() => {
    const total = filteredData.reduce((sum, item) => sum + item.totalSales, 0);
    const average = filteredData.length > 0 ? total / filteredData.length : 0;
    const highest = filteredData.length > 0 ? Math.max(...filteredData.map(d => d.totalSales)) : 0;
    const growth = filteredData.length >= 2
      ? ((filteredData[filteredData.length - 1].totalSales - filteredData[0].totalSales) / filteredData[0].totalSales) * 100
      : 0;
    return { total, average, highest, growth };
  }, [filteredData]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium mb-1">Total Sales</p>
                <p className="text-2xl font-bold">{formatCurrency(stats.total)}</p>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-indigo-100 text-sm font-medium mb-1">Average Sales</p>
                <p className="text-2xl font-bold">{formatCurrency(stats.average)}</p>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium mb-1">Highest Sale</p>
                <p className="text-2xl font-bold">{formatCurrency(stats.highest)}</p>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pink-100 text-sm font-medium mb-1">Growth Rate</p>
                <p className="text-2xl font-bold">{stats.growth.toFixed(1)}%</p>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chart Card */}
        <Card title="Sales Overview">
          <div className="space-y-6">
            {/* Controls Section */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end justify-between bg-gray-50 p-4 rounded-lg">
              <SalesFilterInput
                value={filterValue}
                onChange={setFilterValue}
              />
              <ChartTypeToggle
                activeChart={chartType}
                onChartChange={setChartType}
              />
            </div>

            {/* Chart Section */}
            <div className="bg-gray-50 rounded-lg p-4">
              <SalesChart
                data={filteredData}
                chartType={chartType}
              />
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
