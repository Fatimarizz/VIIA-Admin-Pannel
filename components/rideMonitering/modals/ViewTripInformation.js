import React, { useState } from "react";
import { Dialog, DialogTitle } from "@mui/material";
import TripStatus from "../RideComponents/TripStatus";
import CarDetails from "../RideComponents/CarDetails";
import DriverInfo from "../RideComponents/DriverInfo";
import PassengerInfo from "../RideComponents/PassengerInfo";
import Safety from "../RideComponents/Safety";
import { useRouter } from "next/router";

const ViewTripInformation = ({ isOpen, onClose, data, userType }) => {
    const [currentTab, setCurrentTab] = useState(0);
    const router = useRouter()
    const handleTabChange = (index) => {
        setCurrentTab(index);
    };

    const tripData = {
        tripStatus: {
            distanceCovered: "25 miles",
            startPoint: "Downtown",
            currentLocation: "Hamilton Road, Manchester, England.",
            endPoint: "Airport",
            date: "August 19, 2024",
            startTime: "08:00 AM",
            estimatedEndTime: "09:00 AM",
            price: "$30.00",
        },
        carDetails: {
            model: "Tesla Model S",
            color: "Red",
            price: "$70,000",
            licenseNumber: "ABC1234",
            imageUrl: "https://example.com/car.jpg",
        },
        driverInfo: {
            phone: "09-000-3333-4444",
            email: "john@example.com",
            dob: "20 /04/ 2001",
            gender: 'Male',
        },
        passengerInfo: [
            { name: "Alice", email: "alice@example.com" },
            { name: "Bob", email: "bob@example.com" },
        ],
        safetyInfo: {
            phone: "09-000-3333-4444",
            email: "john@example.com",
        },
    };

    const tabList = ["Trip Status", "Car Details", "Driver Info", "Passenger Info", "Safety"];

    return (
        <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md" className="rounded-xl">
            <DialogTitle>
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Trip Information</h3>
                    <button onClick={onClose}>
                        <svg className="h-6 w-6 cursor-pointer text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </DialogTitle>
            <div className="p-5 text-lg">
                <h2>
                    <span className="font-semibold">Trip Code: </span>
                    {data.tripCodeID}
                </h2>
                <div className="flex space-x-3 mt-3 pb-2 border-b">
                    <h2>Trip Status</h2>
                    <div
                        className={`px-4 py-1 rounded-lg text-sm font-semibold ${userType === "ongoing" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                            }`}
                    >
                        {userType === "ongoing" ? "In-progress" : "Completed"}
                    </div>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-5 gap-4 mx-5 border-b bg-gray-100  border-gray-300">
                    {tabList.map((tab, index) => (
                        <div
                            key={index}
                            onClick={() => handleTabChange(index)}
                            className={`cursor-pointer text-center py-2 px-4  ${currentTab === index ? "bg-white border rounded-lg text-black shadow-md" : "bg-gray-100 text-[#667085]"
                                }`}
                        >
                            {tab}
                        </div>
                    ))}
                </div>
                <div className="p-4">
                    {currentTab === 0 && <TripStatus tripData={tripData.tripStatus} userType={userType} />}
                    {currentTab === 1 && <CarDetails carData={tripData.carDetails} />}
                    {currentTab === 2 && <DriverInfo driverData={tripData.driverInfo} />}
                    {currentTab === 3 && <PassengerInfo passengers={tripData.passengerInfo} />}
                    {currentTab === 4 && <Safety safetyInfo={tripData.safetyInfo} />}
                </div>
                <div className="flex space-x-5 justify-end border-gray-200 p-4 text-base font-semibold ">
                    <button className="text-black border px-3 py-1 rounded-md" onClick={onClose}>
                        Back
                    </button>
                    <button className="bg-green-500 text-white px-3 py-1 rounded-md" onClick={() => router.push("/ride-monitering/live-tracking")}>
                        Live Tracking
                    </button>

                </div>
            </div>
        </Dialog>
    );
};

export default ViewTripInformation;
