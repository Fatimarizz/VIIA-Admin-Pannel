import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const AnalyticsWavesChart = ({ title, data }) => {
    
  const [selectedRange, setSelectedRange] = useState('12 months');

  const ranges = {
    '12 months': {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      values: data['12 months'],
    },
    '30 days': {
      labels: ['Day 3', 'Day 11', 'Day 19', 'Day 27'],
      values: data['30 days'],
    },
    '7 days': {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
      values: data['7 days'],
    },
  };

  const options = {
    chart: {
      id: 'custom-analytics-chart',
      type: 'line',
      toolbar: {
        show: false, // Hides the zoom and other options
      },
    },
    xaxis: {
      categories: ranges[selectedRange].labels,
      
    },
    yaxis: {
      show: false, // Hides the y-axis title and labels
    },
    
    stroke: {
      curve: 'smooth',
      width: 3,
      colors: ['#03C548'],
    },
    markers: {
      size: 0,
    },
    title: {
      text: undefined, // Removes the chart title
    },
  };


  const series = [
    {
      name: title,
      data: ranges[selectedRange].values,
    },
  ];

  return (
    <div className="container mx-auto p-6 rounded-xl border shadow-md my-2">
      <h1 className="text-xl font-semibold mb-4">{title}</h1>
      <div className="flex mb-4 w-fit text-sm border-2 rounded-md">
        <button
          className={`px-4 py-2  border-r-2 ${selectedRange === '12 months' ? 'text-gray-600 font-semibold bg-slate-50' : 'text-gray-400'}`}
          onClick={() => setSelectedRange('12 months')}
        >
          12 Months
        </button>
        <button
          className={`px-4 py-2  border-r-2 ${selectedRange === '30 days' ? 'text-gray-600 font-semibold bg-slate-50' : 'text-gray-400'}`}
          onClick={() => setSelectedRange('30 days')}
        >
          30 Days
        </button>
        <button
          className={`px-4 py-2  ${selectedRange === '7 days' ? 'text-gray-600 font-semibold bg-slate-50' : 'text-gray-400'}`}
          onClick={() => setSelectedRange('7 days')}
        >
          7 Days
        </button>
      </div>
      <Chart options={options} series={series} type="line" height={250} />
    </div>
  );
};

export default AnalyticsWavesChart;
