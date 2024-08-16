import React from 'react'
import AnalyticsBarChart from './AnalyticsBarCard';
export default function TripAnalytics() {
  const xAxisData = {
    '12 months': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    '30 days': ['Day 3', 'Day 11', 'Day 19', 'Day 27'],
    '7 days': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  };

  const yAxisData = {
    '12 months': [10000, 12000, 9000, 11000, 13000, 8000, 14000, 15000, 16000, 17000, 18000, 19000],
    '30 days': [1000, 1500, 1300, 1700],
    '7 days': [3000, 3200, 2900, 3100, 3050, 2950, 3150],
  };
  const colors = ['#7F56D9', '#E9D7FE', '#9E77ED'];
  const ratingData = {
    '12 months': [4.2, 4.4, 4.1, 4.5, 4.6, 4.3, 4.7, 4.8, 4.9, 5.0, 4.8, 4.9],
    '30 days': [4.2, 4.4, 4.1, 4.5],
    '7 days': [4.3, 4.4, 4.2, 4.3, 4.4, 4.1, 4.5],
  };
  const ratingColors = ['#06AED4', '#67E3F9'];

  return (
    <div>

      <div className='container mx-auto px-4 '>
        <AnalyticsBarChart
          title="Revenue Distribution"
          xAxisData={xAxisData}
          Xtitle={'Month'}
          Ytitle={'revenue generated from trip'}
          yAxisData={yAxisData}
          colors={colors}
          height={80}
        />
        <div className="relative">
          <AnalyticsBarChart
            title="Average Rating"
            xAxisData={xAxisData}
            yAxisData={ratingData}
            Xtitle={'Month'}
            Ytitle={'Active ratings (STARS)'}
            colors={ratingColors}
            height={80}
          />
          <div className="absolute top-0 right-0 flex items-center space-x-4 mt-4 mr-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-[#06AED4] rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Driver</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-[#67E3F9] rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Passenger</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
