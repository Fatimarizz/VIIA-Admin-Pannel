import React from 'react'
import AnalyticsScoreCard from "./AnalyticsScoreCard";
import AnalyticsWavesChart from "./AnalyticsWavesCard";
import AnalyticsBarChart from "./AnalyticsBarCard";
import DonutChart from "./AnalyticsDonutCard";
export default function Overview() {
    const analyticsData = {
        '12 months': [1000, 1200, 1100, 1400, 1300, 1250, 1350, 1450, 1400, 1500, 1600, 1700],
        '30 days': [300, 500, 700, 900],
        '7 days': [100, 200, 300, 400, 500, 600, 700],
    };

    const xAxisData = {
        '12 months': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        '30 days': ['Day 3', 'Day 11', 'Day 19', 'Day 27'],
        '7 days': ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    };

    const yAxisData = {
        '12 months': [150, 200, 180, 220, 210, 250, 270, 300, 290, 320, 310, 340],
        '30 days': [100, 150, 130, 170],
        '7 days': [90, 110, 120, 140, 130, 150, 160],
    };

    const genderData = [
        { label: 'Male', value: 50 },
        { label: 'Female', value: 45 },
        { label: 'Other', value: 5 },
    ];

    const genderColors = ['#EAAA08', '#CA8504', '#FEEE95'];
    const ageData = [
        { label: '<18 yrs', value: 10 },
        { label: '18-24 yrs', value: 25 },
        { label: '25-35 yrs', value: 30 },
        { label: '36-45 yrs', value: 20 },
        { label: '>46 yrs', value: 15 },
    ];
    const ageColors = ['#03C548', '#04F65A', '#63FD9A', '#B9FED1', '#D7FEE5'];
    const colors = ['#029235', '#04F65A', '#B9FED1'];
    return (
        <div>
            <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnalyticsScoreCard
                    title="Driver Performance Score"

                    stars={[true, true, true, true, false]} // Example: 4 out of 5 stars

                />
                <AnalyticsScoreCard
                    title="Customer Satisfaction Index"

                    stars={[true, true, true, true, false]} // Example: 5 out of 5 stars

                />
                <AnalyticsScoreCard
                    title="Trip Completion Rate"

                    percentage={78.5} // Example: 85%

                />
            </div>
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnalyticsWavesChart title="Total Users" data={analyticsData} />
                <AnalyticsWavesChart title="Total Trips" data={analyticsData} />
                <AnalyticsWavesChart title="Total Revenue" data={analyticsData} />
            </div>
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <DonutChart title="Demographic data (gender)" data={genderData} colors={genderColors} height={100} />
                <DonutChart title="Demographic data (age)" data={ageData} colors={ageColors} height={100} />
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnalyticsBarChart title="Average Trip Details"
                    xAxisData={xAxisData}
                    yAxisData={yAxisData}
                    colors={colors}
                    Xtitle={'Month'}
                    Ytitle={'Distance (m)'}
                    height={150}
                />
                <AnalyticsBarChart title="User Engagement Rate"
                    xAxisData={xAxisData}
                    yAxisData={yAxisData}
                    Xtitle={'Time spent on app'}
                    Ytitle={'User engagement rate (%)'}
                    colors={colors}
                    height={150} />
            </div>
        </div>
    )
}
