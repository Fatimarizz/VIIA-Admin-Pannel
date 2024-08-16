// components/FareCollectionGraph.js

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import jsPDF from 'jspdf';

const FareCollectionGraph = () => {
    const [selectedRange, setSelectedRange] = useState('12 months');

    // Dummy data
    const data = {
      '12 months': {
        activeUsers: [100, 300, 400, 500, 600, 800, 900, 1000, 950, 850, 700, 600],
        fareCollection: [150, 350, 450, 550, 650, 850, 950, 1050, 1000, 900, 750, 650],
      },
      '3 months': {
        activeUsers: [900, 950, 1000],
        fareCollection: [950, 1050, 1100],
      },
      '30 days': {
        activeUsers: Array.from({ length: 30 }, (_, i) => Math.floor(Math.random() * 1000) + 200),
        fareCollection: Array.from({ length: 30 }, (_, i) => Math.floor(Math.random() * 1000) + 300),
      },
      '7 days': {
        activeUsers: [600, 800, 900, 1000, 950, 850, 700],
        fareCollection: [650, 850, 950, 1050, 1000, 900, 750],
      },
      '24 hours': {
        activeUsers: [100, 200, 400, 600, 800, 900, 950, 1000],
        fareCollection: [150, 250, 450, 650, 850, 950, 1000, 1050],
      },
    };
  
    const options = {
      chart: {
        id: 'fare-collection-chart',
        type: 'line',
        toolbar: {
          show: false, // Hides the zoom and other options
        },
      },
      xaxis: {
        categories: selectedRange === '12 months'
          ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          : selectedRange === '3 months'
          ? ['Oct', 'Nov', 'Dec']
          : selectedRange === '30 days'
          ? Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`)
          : selectedRange === '7 days'
          ? ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']
          : Array.from({ length: 8 }, (_, i) => `${3 * i}h`),
        title: {
          text: 'Time',
        },
      },
      yaxis: {
        title: {
          text: 'Active Users',
        },
      },
      stroke: {
        curve: 'smooth', // Makes the graph wavy
        width: 3,
        colors: ['#03C548', '#63FD9A'], // Dark green and light green
      },
      markers: {
        size: 0, // Removes the dots from the graph
      },
    };
  
    const series = [
      {
        name: 'Active Users',
        data: data[selectedRange].activeUsers,
      },
      {
        name: 'Fare Collection',
        data: data[selectedRange].fareCollection,
      },
    ];
  
    const handleDownloadPDF = () => {
      const doc = new jsPDF();
      doc.text('Fare Collection Report', 20, 10);
      doc.text(`Selected Range: ${selectedRange}`, 20, 20);
  
      doc.text('Active Users:', 20, 30);
      data[selectedRange].activeUsers.forEach((user, index) => {
        doc.text(`${index + 1}: ${user}`, 20, 40 + index * 10);
      });
  
      doc.text('Fare Collection:', 100, 30);
      data[selectedRange].fareCollection.forEach((fare, index) => {
        doc.text(`${index + 1}: ${fare}`, 100, 40 + index * 10);
      });
  
      doc.save('fare-collection-report.pdf');
    };

  return (
    <div className="container mx-auto p-6 rounded-xl border shadow-md my-4">
        <div className='flex justify-between mb-4'>
        <h1 className="text-2xl font-semibold">Trends in fare collections over time</h1>
        <button onClick={handleDownloadPDF} className="px-6 py-2 border text-black rounded-lg">
          View Report
        </button>
        </div>
      <div className="flex mb-4">
        <button
          className={`px-4 py-2 rounded-lg ${selectedRange === '12 months' ? 'text-gray-600 font-semibold bg-slate-50' : 'text-gray-400'}`}
          onClick={() => setSelectedRange('12 months')}
        >
          12 Months
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${selectedRange === '3 months' ? 'text-gray-600 font-semibold bg-slate-50' : 'text-gray-400'}`}
          onClick={() => setSelectedRange('3 months')}
        >
          3 Months
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${selectedRange === '30 days' ? 'text-gray-600 font-semibold bg-slate-50' : 'text-gray-400'}`}
          onClick={() => setSelectedRange('30 days')}
        >
          30 Days
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${selectedRange === '7 days' ? 'text-gray-600 font-semibold bg-slate-50' : 'text-gray-400'}`}
          onClick={() => setSelectedRange('7 days')}
        >
          7 Days
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${selectedRange === '24 hours' ? 'text-gray-600 font-semibold bg-slate-50' : 'text-gray-400'}`}
          onClick={() => setSelectedRange('24 hours')}
        >
          24 Hours
        </button>
      </div>
      <Chart options={options} series={series} type="line" height={300} />
      
    </div>
  );
};

export default FareCollectionGraph;
