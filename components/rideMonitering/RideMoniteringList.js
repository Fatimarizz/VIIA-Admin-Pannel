import { LockKeyhole } from "lucide-react";
import React, { useState, useMemo } from "react";
import { SearchIcon } from "lucide-react";
import { onGoingTripColumns, completedTripColumns } from "../ui/contants";
import Table from "../ui/Table";
import dynamic from 'next/dynamic';

// Dynamically load the MapComponent without SSR
const MapComponent = dynamic(() => import('@/components/rideMonitering/MapComponent'), {
  ssr: false,
});
export default function RideMonitoringList() {
    const [currentTopNavigationLink, setCurrentTopNavigationLink] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");

    const MonitoringTypes = [
        {
            type: "Ongoing Trips",
            number: 2,
        },
        {
            type: "Completed Trips",
            number: 1,
        },
    ];

    const onGoingTripRows = [
        {
            id: 1,
            tripCodeID: "TRP12345",
            driver_name: "John Doe",
            passengers: ["Alice", "Bob", "Charlie"],
            start_point: "Downtown",
            end_point: "Airport",
            start_time: "08:00 AM",
            eta: "09:00 AM",
            price: "$30.00",
            coordinates: [51.505, -0.09] 
        },
        {
            id: 2,
            tripCodeID: "TRP12346",
            driver_name: "Jane Smith",
            passengers: ["Eva", "Frank"],
            start_point: "City Center",
            end_point: "Train Station",
            start_time: "08:30 AM",
            eta: "09:15 AM",
            price: "$25.00",
            coordinates: [51.515, -0.1]
        },
        {
            id: 3,
            tripCodeID: "TRP12347",
            driver_name: "Mike Johnson",
            passengers: ["Eva", "Frank"],
            start_point: "University",
            end_point: "Mall",
            start_time: "09:00 AM",
            eta: "09:45 AM",
            price: "$20.00",
            coordinates: [51.515, -0.3]
        },
        {
            id: 4,
            tripCodeID: "TRP12348",
            driver_name: "Emily Davis",
            passengers: ["Eva", "Frank"],
            start_point: "Residential Area",
            end_point: "Office",
            start_time: "07:45 AM",
            eta: "08:30 AM",
            price: "$15.00",
            coordinates: [51.515, -0.12]
        },
    ];
    const completedTripRows = [
        {
            id: 1,
            tripCodeID: "TRP12349",
            driver_name: "David Brown",
            passengers: ["Eva", "Frank"],
            start_point: "Downtown",
            end_point: "Airport",
            start_time: "06:00 AM",
            end_time: "06:45 AM",
            status: "Completed",
            price: "$30.00",
            coordinates: [51.525, -0.12]
        },
        {
            id: 2,
            tripCodeID: "TRP12350",
            driver_name: "Sophia Wilson",
            passengers: ["Alice", "Bob", "Charlie"],
            start_point: "City Center",
            end_point: "Train Station",
            start_time: "07:00 AM",
            end_time: "07:40 AM",
            status: "Cancelled",
            price: "$25.00",
            coordinates: [51.525, -0.12]
        },
        {
            id: 3,
            tripCodeID: "TRP12351",
            driver_name: "Oliver Taylor",
            passengers: ["Alice", "Bob", "Charlie"],
            start_point: "University",
            end_point: "Mall",
            start_time: "08:00 AM",
            end_time: "08:45 AM",
            status: "Completed",
            price: "$20.00",
            coordinates: [51.525, -0.12]
        },
        {
            id: 4,
            tripCodeID: "TRP12352",
            driver_name: "Emma Anderson",
            passengers: ["Alice", "Bob", "Charlie"],
            start_point: "Residential Area",
            end_point: "Office",
            start_time: "09:00 AM",
            end_time: "09:30 AM",
            status: "Completed",
            price: "$15.00",
            coordinates: [51.525, -0.12]
        },
    ];

    const tableConfigurations = [
        { rows: onGoingTripRows, columns: onGoingTripColumns },
        { rows: completedTripRows, columns: completedTripColumns },
    ];

    const currentConfig = tableConfigurations[currentTopNavigationLink];

    const filteredAndSearchedRows = useMemo(() => {
        return currentConfig.rows.filter(row => {
            const passengersString = row.passengers.join(" ");
            return Object.values({ ...row, passengers: passengersString })
                .join(" ")
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
        });
    }, [searchQuery, currentConfig.rows]);

    const formattedRows = filteredAndSearchedRows.map(row => ({
        ...row,
        passengers:
            row.passengers.length > 1
                ? `${row.passengers[0]} + ${row.passengers.length - 1}+`
                : row.passengers[0],
    }));

    return (
        <div className="relative px-5 min-h-screen">
            <div className="flex justify-between items-center">
                <div className="ml-4">
                    <h2 className="font-semibold text-lg">Ongoing Trips</h2>
                    <p className="text-sm">View and manage all ongoing trips, live tracking.</p>
                </div>
                <div>
                    <button className="bg-[#4E5BA6] text-white rounded-md px-2 py-2 flex">
                        <LockKeyhole className="mr-2" />
                        Safety Button
                    </button>
                </div>
            </div>

            {/* Monitoring Type Navigation */}
            <div className="space-y-1 mt-4 w-full xl:w-[60%] flex space-x-2 px-4 py-2 ring-gray-900/10">
                {MonitoringTypes.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentTopNavigationLink(index)}
                        className={`flex gap-2 ease-in-out duration-300 cursor-pointer ${currentTopNavigationLink === index
                            ? "shadow-lg text-black ring-1 ring-gray-900/10"
                            : "text-gray-500"} rounded-md items-center py-2 px-2 text-xs lg:text-sm font-semibold`}
                    >
                        <p>{item.type}</p>
                    </div>
                ))}
            </div>

            {/* Map for Live Tracking */}
            <div className="my-6">
                <h2 className="font-semibold text-lg">Live Trip Tracking</h2>
                <MapComponent trips={onGoingTripRows} /> {/* Pass the ongoing trips to the map */}
            </div>

            {/* Search Bar */}
            <div className="flex justify-end">
                <div className="flex w-80 mr-6 relative border rounded-lg shadow-sm">
                    <SearchIcon className="absolute left-2 top-2 h-6 w-5 text-gray-400" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="px-4 py-2 w-full focus:outline-none ml-6"
                    />
                </div>
            </div>

            {/* Table */}
            <Table rows={formattedRows} columns={currentConfig.columns} hoverColor={'#FEE4E2'} />
        </div>
    );
}
