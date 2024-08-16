import React from 'react'
import AnalyticsBarChart from './AnalyticsBarCard';

export default function GeographicAnalytics() {
  const dummyData = {
    // Trip Volume by City
    tripVolumeByCity: {
      xAxisData: {
        '12 months': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix','Houston', 'Phoenix'],
        '30 days': ['New York', 'Los Angeles', 'Chicago'],
        '7 days': ['New York', 'Los Angeles'],
      },
      yAxisData: {
        '12 months': [800, 900, 700, 800, 500,600,700],
        '30 days': [300, 250, 200],
        '7 days': [100, 90],
      },
      colors: ['#FFB6C1'], // Baby Pink
    },
    // User Engagement by City
    userEngagementByCity: {
      xAxisData: {
        '12 months': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
        '30 days': ['New York', 'Los Angeles', 'Chicago'],
        '7 days': ['New York', 'Los Angeles'],
      },
      yAxisData: {
        '12 months': [75, 65, 55, 45, 35],
        '30 days': [30, 25, 20],
        '7 days': [10, 8],
      },
      colors: ['#EAAA08', '#CA8504', '#FEEE95'], // Yellow gradient
    },
    // Revenue by City
    revenueByCity: {
      xAxisData: {
        '12 months': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
        '30 days': ['New York', 'Los Angeles', 'Chicago'],
        '7 days': ['New York', 'Los Angeles'],
      },
      yAxisData: {
        '12 months': [12000, 9000, 7000, 5000, 3000],
        '30 days': [3000, 2500, 2000],
        '7 days': [1000, 900],
      },
      colors: ['#03C548'], // Green
    },
  };
  return (
    <div className='space-y-4 p-3'>

      <div>
        <AnalyticsBarChart
          title="Trip Volume by City"
          Xtitle="City"
          Ytitle="Volume of Trips"
          xAxisData={dummyData.tripVolumeByCity.xAxisData}
          yAxisData={dummyData.tripVolumeByCity.yAxisData}
          colors={dummyData.tripVolumeByCity.colors}
          height={80}
        />
      </div>
      <div>
        <AnalyticsBarChart
          title="User Engagement by City"
          Xtitle="City"
          Ytitle="User Engagement"
          xAxisData={dummyData.userEngagementByCity.xAxisData}
          yAxisData={dummyData.userEngagementByCity.yAxisData}
          colors={dummyData.userEngagementByCity.colors}
          height={80}
        />
      </div>
      <div>
        <AnalyticsBarChart
          title="Revenue by City"
          Xtitle="City"
          Ytitle="Revenue (£)"
          xAxisData={dummyData.revenueByCity.xAxisData}
          yAxisData={dummyData.revenueByCity.yAxisData}
          colors={dummyData.revenueByCity.colors}
          height={80}
        />

      </div>
    </div>
  )
}
