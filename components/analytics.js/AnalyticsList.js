import React, { useState } from "react";
import Overview from "./AnalyticsOverview";
import UserInsights from "./UserInsights";
import TripAnalytics from "./TripAnalytics";
import GeographicAnalytics from "./GeographicAnalytics";
export default function AnalyticsList() {
    const [currentTopNavigationLink, setCurrentTopNavigationLink] = useState(0);
    const AnalyticsTypes = [
        {
            type: "Overview",

        },
        {
            type: "User Insights",

        },
        {
            type: "Trip Analytics",

        },
        {
            type: "Geographic Insights",

        },
    ];

   
    const renderContent = () => {
        switch (currentTopNavigationLink) {
            case 0: // Overview
                return <Overview/>;
            case 1: // User Insights
                return <UserInsights />;
            case 2: // Trip Analytics
                return <TripAnalytics />;
            case 3: // Geographic Insights
                return <GeographicAnalytics />;
            default:
                return null;
        }
    };
    return (
        <div>

            <div className="relative px-5 min-h-screen">

                <div className="flex space-y-1 w-full xl:w-[50%] space-x-4 px-4 py-2 ring-gray-900/10">
                    {AnalyticsTypes?.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentTopNavigationLink(index)}
                            className={`flex gap-2 ease-in-out duration-300 cursor-pointer ${currentTopNavigationLink === index
                                ? "shadow-lg text-black ring-1 ring-gray-900/10"
                                : "text-gray-500"
                                } rounded-md items-center py-2 px-4 text-xs lg:text-sm font-semibold`}
                        >
                            <p>{item?.type}</p>

                        </div>
                    ))}
                </div>
                <div className="py-6">
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}
