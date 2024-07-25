import React, { useState } from "react";
import Table from "../ui/Table";
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns'; // for formatting dates
import Button from '../ui/buttonComponent';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { CalendarIcon, DownloadIcon, PlusCircleIcon } from 'lucide-react';
import DashboardCards from "../dashboard/dashboardCards";
import { transactionOverviewColumns, walletManagementColumns, paymentGatewayIntegrationColumns } from "../ui/contants";
import { SearchIcon, ListFilter } from "lucide-react";
import NewPaymentGatewayModal from "./Modals/AddNewPaymentGateway";
import TripPaymentTable from "./TripPaymentTable";
import EditFuelCost from "./Modals/EditFuelCost";

const PaymentList = () => {
    const [currentTopNavigationLink, setCurrentTopNavigationLink] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [showNewPaymentGatewayModal, setShowNewPaymentGatewayMoal] = useState(false)
    const [showEditFuel,setShowEditFuel]=useState(false)
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date('2022-01-06'),
            endDate: new Date('2022-01-13'),
            key: 'selection'
        }
    ]);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const [filters, setFilters] = useState({
        paymentMethod: null,
        status: null,
    });

    const transactionOverviewRows = [
        {
            id: 1,
            TripCodeID: "T12345",
            Passenger: "Arya Stark",
            Driver: "Sandor Clegane",
            Date: "2023-07-22",
            Time: "14:30",
            PaymentMethod: "MasterCard",
            Amount: 25.00,
            Status: "Successful",
        },
        {
            id: 2,
            TripCodeID: "T12346",
            Passenger: "Bran Stark",
            Driver: "Hodor",
            Date: "2023-07-22",
            Time: "15:00",
            PaymentMethod: "Visa",
            Amount: 30.00,
            Status: "Pending",
        },
        // Add more rows as needed
    ];
    const walletManagementRows = [
        {
            id: 1,
            UserName: "Arya Stark",
            Type: "Credit",
            Date: "2023-07-22",
            Time: "8:00 am",
            Amount: 50.00,
            Revenue: 5.00,
            PaymentMethod: "MasterCard",
            Status: "Successful",
        },
        {
            id: 2,
            UserName: "Bran Stark",
            Type: "Debit",
            Date: "2023-07-22",
            Time: "8:00 am",
            Amount: 20.00,
            Revenue: 2.00,
            PaymentMethod: "Stripe",
            Status: "Pending",
        },
        {
            id: 3,
            UserName: "Bran Stark",
            Type: "Debit",
            Date: "2023-07-22",
            Amount: 20.00,
            Time: "8:00 am",
            Revenue: 2.00,
            PaymentMethod: "Stripe",
            Status: "Declined",
        },
        // Add more rows as needed
    ];
    const paymentGatewayIntegrationRows = [
        {
            id: 1,
            PaymentMethod: "Stripe",
            ConfigurationDetail: "API Key: sk_test_4eC39HqLyjWDarjtT1zdp7dc",
            DateConnected: "2023-07-22",
            Status: "Connected",
        },
        {
            id: 2,
            PaymentMethod: "Visa",
            ConfigurationDetail: "Client ID: A21AAHbkxxxxx",
            DateConnected: "2023-07-22",
            Status: "Disconnected",
        },
        {
            id: 3,
            PaymentMethod: "GPay",
            ConfigurationDetail: "Client ID: A21AAHbkxxxxx",
            DateConnected: "2023-07-22",
            Status: "Disconnected",
        },
        {
            id: 4,
            PaymentMethod: "ApplePay",
            ConfigurationDetail: "Client ID: A21AAHbkxxxxx",
            DateConnected: "2023-07-22",
            Status: "Disconnected",
        }
        // Add more rows as needed
    ];
  

    const PaymentCard = [
        {
            name: "VIIA’s revenue",
            number: "£120k",
        },
        {
            name: "Today’s revenue",
            number: "£800",
        },
        {
            name: "Driver’s revenue",
            number: "£800",
        },
        {
            name: "Average fare per ride",
            number: "£5",
        },
    ];

    const PaymentTypes = [
        {
            type: "Transactions Overview",
            number: 2,
        },
        {
            type: "Wallet management",
            number: 1,
        },
        {
            type: "Payment Gateway Integration",
            number: 1,
        },

    ];

    const tableConfigurations = [
        { rows: transactionOverviewRows, columns: transactionOverviewColumns },
        { rows: walletManagementRows, columns: walletManagementColumns },
        { rows: paymentGatewayIntegrationRows, columns: paymentGatewayIntegrationColumns },

    ];

    const currentConfig = tableConfigurations[currentTopNavigationLink];

    const applyFilters = () => {
        let filtered = currentConfig.rows;
        if (filters.paymentMethod) {
            filtered = filtered.filter(row => row.PaymentMethod === filters.paymentMethod);
        }
        if (filters.status) {
            filtered = filtered.filter(row => row.Status === filters.status);
        }
        return filtered;
    };
    const filteredAndSearchedRows = applyFilters().filter((row) =>
        Object.values(row).some(
            (value) =>
                value &&
                value
                    .toString()
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
        )
    );

    const handleFilterChange = (category, value) => {
        setFilters({
            ...filters,
            [category]: value,
        });
    };

    const clearFilter = (category) => {
        setFilters({
            ...filters,
            [category]: null,
        });
    };;

    const handleDateRangeChange = (ranges) => {
        setDateRange([ranges.selection]);
        // Format the selected date range
        const startDate = format(ranges.selection.startDate, 'MMM d, yyyy');
        const endDate = format(ranges.selection.endDate, 'MMM d, yyyy');
        console.log(`Selected date range: ${startDate} – ${endDate}`);
    };

    const handleShowPaymentModal=()=>{
        setShowNewPaymentGatewayMoal(true)
    }
    const handleEditFuel=()=>{
        setShowEditFuel(true)
    }
    const formattedDateRange = `${format(dateRange[0].startDate, 'MMM d, yyyy')} – ${format(dateRange[0].endDate, 'MMM d, yyyy')}`;

    return (
        <div className="relative px-5 min-h-screen">
            <div className="flex justify-between items-center">
                <div className="ml-4">
                    <h2 className="font-semibold text-lg">
                        Payments
                    </h2>
                    <p className="text-sm">View and manage all payments, revenue, trip cost.
                    </p>
                </div>
                {currentTopNavigationLink == 0 || currentTopNavigationLink == 1 ?
                    <div className="flex justify-end space-x-3">

                        <div>
                            <Button
                                buttonClass="bg-green-500 text-white px-4 py-2 flex items-center"
                                onClick={() => setShowDatePicker(!showDatePicker)}
                                label={<><CalendarIcon className="mr-2" /> {formattedDateRange || 'Select Date Range'}</>}
                            />
                        </div>
                        <div>
                            <button className="rounded-lg border text-black px-4 py-2 items-center flex">
                                <DownloadIcon className="mr-2 h-5 w-5" />
                                Download
                            </button>
                        </div>
                        {currentTopNavigationLink == 0 &&
                        <div>
                            <button onClick={handleEditFuel} className="rounded-lg border bg-green-500 text-white px-4 py-2 items-center flex">
                               
                                Edit Fuel Cost
                            </button>
                        </div>
}
                        {showDatePicker && (
                            <div className="mt-4 bg-white p-4 rounded shadow-lg absolute z-20 top-4">
                                <DateRangePicker
                                    ranges={dateRange}
                                    onChange={handleDateRangeChange}
                                    showSelectionPreview={false}
                                    editableDateInputs={true}
                                    moveRangeOnFirstSelection={false}
                                    rangeColors={['#3b82f6']}
                                />
                            </div>
                        )}

                    </div>
                    :
                    <div>
                        <button  onClick={handleShowPaymentModal} className="bg-green-500 text-white rounded-md px-2 py-2 flex">
                            <PlusCircleIcon className="mr-2" />
                            Add New Payment Gateway
                        </button>
                    </div>
                }

            </div>

            <div className="space-y-1 mt-4 w-full xl:w-[60%] flex space-x-2 px-4 py-2 ring-gray-900/10">
                {PaymentTypes?.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentTopNavigationLink(index)}
                        className={`flex gap-2 ease-in-out duration-300 cursor-pointer ${currentTopNavigationLink === index
                            ? "shadow-lg text-black ring-1 ring-gray-900/10"
                            : "text-gray-500"
                            } rounded-md items-center py-2 px-2 text-xs lg:text-sm font-semibold`}
                    >
                        <p className="">{item?.type}</p>

                    </div>
                ))}
            </div>
            {currentTopNavigationLink == 0 &&
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-6 w-full xl:w-[90%]">
                    {PaymentCard?.map((item, index) => (
                        <div key={index} className="w-full">
                            <DashboardCards
                                title={item?.name}
                                number={item?.number}
                                toolTipText={`Total number of ${item.name} on the platform.`}
                                toolTipheading={item.name}
                            />
                        </div>
                    ))}
                </div>
            }
            <div className="mt-4 ">
                <div className="flex justify-between relative">

                    <div className="flex space-x-2">
                        {!isFilterOpen &&
                            <div className="flex gap-2 ">
                                {Object.keys(filters).map((category) => {
                                    if (filters[category]) {
                                        return (
                                            <div key={category} className="flex items-center gap-2 bg-white border-gray-300 font-semibold text-black border px-2 py-1 rounded-lg">
                                                <span>{`${filters[category]}`}</span>
                                                <button onClick={() => clearFilter(category)} className="text-gray-600 hover:text-gray-800">
                                                    &times;
                                                </button>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        }
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="px-4 py-1 flex space-x-1 bg-white text-black font-semibold border rounded-lg "
                        >
                            <ListFilter className="h-6 w-6 mt-1 mr-3" />
                            More Filters
                        </button>

                    </div>

                    {isFilterOpen && (
                        <div className="border p-4 rounded-lg bg-white shadow-lg mb-4 absolute top-10 left-6 w-[30%] z-50">
                            <h2 className="font-semibold text-2xl mb-3">
                                Filters
                            </h2>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="mb-2">
                                    <h4 className="font-semibold">Payment Method</h4>
                                    <div className="flex flex-col space-y-1">
                                        {["Visa", "GPay", "Stripe", "ApplePay", "MasterCard"].map(method => (
                                            <label key={method}>
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value={method}
                                                    checked={filters.paymentMethod === method}
                                                    onChange={(e) => handleFilterChange("paymentMethod", e.target.value)}
                                                />{" "}
                                                {method}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <h4 className="font-semibold">Status</h4>
                                    {currentTopNavigationLink == 2 ?

                                    <div className="flex flex-col space-y-1">
                                        {["Connected", "Disconnected"].map(status => (
                                            <label key={status}>
                                                <input
                                                    type="radio"
                                                    name="status"
                                                    value={status}
                                                    checked={filters.status === status}
                                                    onChange={(e) => handleFilterChange("status", e.target.value)}
                                                />{" "}
                                                {status}
                                            </label>
                                        ))}
                                    </div>
                                    :
                                    <div className="flex flex-col space-y-1">
                                        {["Successful", "Declined", "Pending"].map(status => (
                                            <label key={status}>
                                                <input
                                                    type="radio"
                                                    name="status"
                                                    value={status}
                                                    checked={filters.status === status}
                                                    onChange={(e) => handleFilterChange("status", e.target.value)}
                                                />{" "}
                                                {status}
                                            </label>
                                        ))}
                                    </div>
}
                                </div>
                            </div>
                            <div className="flex gap-2 my-4">
                                {Object.keys(filters).map(category => {
                                    if (filters[category]) {
                                        return (
                                            <div key={category} className="flex items-center gap-2 bg-white border-gray-300 border px-2 py-1 rounded-lg">
                                                <span>{`${filters[category]}`}</span>
                                                <button onClick={() => clearFilter(category)} className="text-red-600 hover:text-red-800">
                                                    &times;
                                                </button>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                            <div className="flex space-x-3 items-center justify-end">
                                <button
                                    onClick={() => setIsFilterOpen(false)}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    Apply Filters
                                </button>
                                <button
                                    onClick={() => setIsFilterOpen(false)}
                                    className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                    <div className="flex w-60 mr-6 relative border rounded-lg">
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

                <Table rows={filteredAndSearchedRows} columns={currentConfig.columns} />

            </div>
            {currentTopNavigationLink == 0 &&
            <TripPaymentTable/>
            }
            <EditFuelCost isOpen={showEditFuel} onClose={()=>setShowEditFuel(false)}/>
            <NewPaymentGatewayModal isOpen={showNewPaymentGatewayModal} onClose={()=>setShowNewPaymentGatewayMoal(false)} />
        </div>
    );
};

export default PaymentList;
