import React, { useState, useEffect } from 'react';
import Button from '../ui/buttonComponent';
import DashboardCards from './dashboardCards';

const DashboardComponent = () => {
    const [currentNavigationIndex, setCurrentNavigationIndex] = useState(0);
    const [dashboardData, setDashboardData] = useState({
        usersEntitiesCardData: [],
        rideDetailsCard: [],
        dashboardRevenueCard: [],
        driverListingcard: []
    });

    const navigationButtons = [
        { name: 'Today' },
        { name: 'Yesterday' },
        { name: 'Last week' },
        { name: 'Last 3 months' },
        { name: 'Last 6 months' },
        { name: 'Jan 6, 2022 – Jan 13, 2022' },
    ];

    const dummyData = {
        usersEntitiesCardData: [
            { name: 'Registered Users', number: '8.8k' },
            { name: 'Drivers', number: '900' },
            { name: 'Passengers', number: '7.9k' },
            { name: 'Active Users', number: '8.8k' },
        ],
        rideDetailsCard: [
            { name: 'Total rides', number: '200' },
            { name: 'Active Drivers', number: '80' },
            { name: 'Active Passengers', number: '40' },
            { name: 'Ongoing Rides', number: '20' },
            { name: 'Completed Rides', number: '25' },
            { name: 'Upcoming Rides', number: '40' },
        ],
        dashboardRevenueCard: [
            { name: 'VIIA’s revenue', number: '£120k' },
            { name: 'Today’s revenue', number: '£800' },
            { name: 'Driver’s revenue', number: '£800' },
            { name: 'Average fare per ride', number: '£5' },
        ],
        driverListingcard: [
            { name: 'Drives listed without passengers', number: '20' },
            { name: 'Requests without drivers', number: '20' },
            { name: 'Recent Bookings', number: '40' },
        ]
    };

    const fetchData = (index) => {
        // Simulate fetching data from backend
        setDashboardData(dummyData);
    };

    useEffect(() => {
        fetchData(currentNavigationIndex);
    }, [currentNavigationIndex]);

    const handleChangeData = (index) => {
        setCurrentNavigationIndex(index);
    };

    return (
        <div className=" pb-10">
            <div className=" px-6 ">
                <div className="mt-6">
                    <div className="grid grid-cols-4 lg:flex lg:justify-end gap-4">
                        {navigationButtons.map((item, index) => (
                            <div key={index}>
                                <Button
                                    buttonClass={`px-4 text-xs lg:text-sm ${currentNavigationIndex === index ? "bg-primary-500 text-white" : "!bg-transparent !text-black "} border-[1px] border-gray-900/20`}
                                    onClick={() => handleChangeData(index)}
                                    label={item.name}
                                />


                            </div>
                        ))}
                    </div>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 gap-6">
                        {dashboardData.usersEntitiesCardData.map((item, index) => (
                            <div key={index} className="w-full">
                                <DashboardCards title={item.name} number={item.number} toolTipText={`Total Count of  ${item.name}`}/>
                            </div>
                        ))}
                    </div>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-10">
                        {dashboardData.rideDetailsCard.map((item, index) => (
                            <div key={index} className="w-full">
                                <DashboardCards viewAll={true} title={item.name} number={item.number} toolTipText={`Total Count of ${item.name}`} />
                            </div>
                        ))}
                    </div>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
                        {dashboardData.driverListingcard.map((item, index) => (
                            <div key={index} className="w-full">
                                <DashboardCards title={item.name} number={item.number}  toolTipText={`Total  ${item.name}`} />
                            </div>
                        ))}
                    </div>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 gap-6">
                        {dashboardData.dashboardRevenueCard.map((item, index) => (
                            <div key={index} className="w-full">
                                <DashboardCards title={item.name} number={item.number}  toolTipText={`Total Cost of ${item.name}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardComponent;
