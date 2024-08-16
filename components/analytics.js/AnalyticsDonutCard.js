import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ title, data, colors}) => {
    const chartData = {
        labels: data.map(item => item.label),
        datasets: [
            {
                data: data.map(item => item.value),
                backgroundColor: colors,
                borderWidth: 0, // No border to give it a clean look
                cutout: '80%', // This makes the donut "thin"
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // We'll create a custom legend
            },
            tooltip: {
                enabled: true, // Show tooltips on hover
            },
        },
    };

    return (
        <div className=" space-x-4 p-4 rounded-xl border shadow-md ">
            <h1 className="text-xl font-semibold mb-4">{title}</h1>
            <div className='flex justify-between items-center'>
            <div className="w-1/2 px-6">
                <Doughnut data={chartData} options={options}  height={70} width={100}/>
            </div>
            <div className="w-1/2 flex justify-start">

                <ul className="space-y-2">
                    {data.map((item, index) => (
                        <li key={index} className="flex items-center">
                            <span
                                className="inline-block w-3 h-3 rounded-full mr-2"
                                style={{ backgroundColor: colors[index] }}
                            ></span>
                            <span className="text-gray-700">{item.label}</span>
                            <span className="text-gray-700 ml-3"> ({item.value}%)</span>
                           
                        </li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    );
};

export default DonutChart;
