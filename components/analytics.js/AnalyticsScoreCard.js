// components/AnalyticsScoreCard.js

import { ArrowUp } from 'lucide-react';
import React from 'react';

const AnalyticsScoreCard = ({ title, stars = [], percentage }) => {
    return (
        <div className="border rounded-lg shadow-md p-4 bg-white">
            <h2 className="text-lg font-semibold">{title}</h2>
            <div className='flex justify-between items-center mt-3'>
                <div>
                    {stars.length > 0 ? (
                        <div className="flex mb-2">
                            {stars.map((filled, index) => (
                                <svg
                                    key={index}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill={filled ? "#03C548" : "none"}
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className={`w-6 h-6 ${filled ? "text-lightgreen" : "text-gray-300"}`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                    />
                                </svg>
                            ))}
                        </div>
                    ) : (
                        <div className="text-4xl font-bold mb-2">{percentage}%</div>
                    )}
                    <p className="text-sm text-gray-500 flex mt-1 font-semibold">
                        <span className='text-green-500 flex mr-1'>
                            <ArrowUp className='mr-1'/> 40% </span> vs Last month</p>
                </div>
                <img src={'/assets/graph.svg'} alt='graph' className="w-32 " />
            </div>
        </div>
    );
};

export default AnalyticsScoreCard;
