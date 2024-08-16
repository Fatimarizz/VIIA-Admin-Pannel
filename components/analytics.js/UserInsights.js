import React from 'react'
import AnalyticsWavesChart from './AnalyticsWavesCard';
import DonutChart from './AnalyticsDonutCard';
import FareCollectionGraph from '../dashboard/FareGraph';

export default function UserInsights() {
    const analyticsData = {
        '12 months': [1000, 1200, 1100, 1400, 1300, 1250, 1350, 1450, 1400, 1500, 1600, 1700],
        '30 days': [300, 500, 700, 900],
        '7 days': [100, 200, 300, 400, 500, 600, 700],
    };
    const verificationData = [
        { label: 'Verified Users', value: 70 },
        { label: 'Unverified Users', value: 30 },
    ];

    const verificationColors = ['#04F65A', '#029235'];
    const userRoleData = [
        { label: 'Drivers', value: 60 },
        { label: 'Passengers', value: 40 },
    ];

    const userRoleColors = ['#7F56D9', '#E9D7FE'];
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
    const locationData = [
        { label: 'London', value: 10 },
        { label: 'Manchester', value: 25 },
        { label: 'Liverpool', value: 30 },
        { label: 'New Castle', value: 20 },
        { label: 'North London', value: 15 },
    ];
    const locationColors = ['#1570EF', '#4E5BA6', '#53B1FD', '#84CAFF', '#B2DDFF'];

    return (
        <div className='space-y-4'>
            <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
                <DonutChart title="User Verification Status" data={verificationData} colors={verificationColors} />
                <DonutChart title="User Roles Distribution" data={userRoleData} colors={userRoleColors} />
            </div>
            <div className='px-3'>
                <FareCollectionGraph/>

            </div>
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <DonutChart title="Gender Distribution" data={genderData} colors={genderColors} height={100} />
                <DonutChart title="Age Distribution" data={ageData} colors={ageColors} height={100} />
            </div>
            <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
                <DonutChart title="Location Distribution" data={locationData} colors={locationColors} height={100} />
                <AnalyticsWavesChart title="Deactivated User Trends" data={analyticsData} />
            </div>

        </div>
    )
}
