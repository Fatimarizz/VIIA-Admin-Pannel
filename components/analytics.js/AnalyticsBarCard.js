
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AnalyticsBarChart = ({ Xtitle, Ytitle, title, xAxisData, yAxisData, colors, height }) => {
  const [selectedRange, setSelectedRange] = useState('12 months');

  const ranges = {
    '12 months': {
      labels: xAxisData['12 months'],
      values: yAxisData['12 months'],
    },
    '30 days': {
      labels: xAxisData['30 days'],
      values: yAxisData['30 days'],
    },
    '7 days': {
      labels: xAxisData['7 days'],
      values: yAxisData['7 days'],
    },
  };

  // Splitting the yAxisData into segments for each bar based on the number of colors provided
  const splitData = (data) => {
    return data.map(value => {
      const segment = value / colors?.length;
      return Array(colors.length).fill(segment);
    });
  };

  const data = {
    labels: ranges[selectedRange].labels,
    datasets: colors?.map((color, index) => ({
      label: `${title}`,
      data: splitData(ranges[selectedRange].values).map(item => item[index]),
      backgroundColor: color,
      borderRadius: 4,
      borderSkipped: false,
    })),
  };

  const options = {



    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
      },
      devicePixelRatio: 10,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: Xtitle,
        },
        grid: {
          display: false, 
        },
        stacked: true, 
      },
      y: {
        title: {
          display: true,
          text: Ytitle,
        },
        grid: {
          display: false, 
        },
        stacked: true, 
      },
    },
    barThickness: 22, // Adjust this value to make the bars thinner
  };

  return (
    <div className="container mx-auto p-6 rounded-xl border shadow-md my-2">
      <h1 className="text-xl font-semibold mb-4">{title}</h1>
      <div className="flex mb-4 w-fit text-sm border-2 rounded-md">
        <button
          className={`px-4 py-2 border-r-2 ${selectedRange === '12 months' ? 'text-gray-600 font-semibold bg-slate-50' : 'text-gray-400'}`}
          onClick={() => setSelectedRange('12 months')}
        >
          12 Months
        </button>
        <button
          className={`px-4 py-2 border-r-2 ${selectedRange === '30 days' ? 'text-gray-600 font-semibold bg-slate-50' : 'text-gray-400'}`}
          onClick={() => setSelectedRange('30 days')}
        >
          30 Days
        </button>
        <button
          className={`px-4 py-2 ${selectedRange === '7 days' ? 'text-gray-600 font-semibold bg-slate-50' : 'text-gray-400'}`}
          onClick={() => setSelectedRange('7 days')}
        >
          7 Days
        </button>
      </div>
      <Bar data={data} options={options} height={height} />
    </div>
  );
};

export default AnalyticsBarChart;
