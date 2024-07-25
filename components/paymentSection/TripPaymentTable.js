import React, { useState } from "react";
import Table from "../ui/Table";
import { tripPaymentColumns } from "../ui/contants";
import { SearchIcon, ListFilter } from "lucide-react";

const TripPaymentTable = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState({
        paymentMethod: null,
        status: null,
    });

    const tripPaymentRows = [
        { id: 1, TripCodeID: "TC123456", Date: "2023-07-21", Time: "10:00 AM", Amount: "£100.00", Revenue: "£10.00", PaymentMethod: "Visa", Status: "Successful" },
        { id: 2, TripCodeID: "TC654321", Date: "2023-07-20", Time: "02:30 PM", Amount: "£150.00", Revenue: "£15.00", PaymentMethod: "GPay", Status: "Declined" },
        { id: 3, TripCodeID: "TC987654", Date: "2023-07-19", Time: "01:45 PM", Amount: "£200.00", Revenue: "£20.00", PaymentMethod: "Stripe", Status: "Successful" },
        { id: 4, TripCodeID: "TC456789", Date: "2023-07-18", Time: "11:15 AM", Amount: "£80.00", Revenue: "£8.00", PaymentMethod: "ApplePay", Status: "Pending" },
        { id: 5, TripCodeID: "TC112233", Date: "2023-07-17", Time: "03:00 PM", Amount: "£120.00", Revenue: "£12.00", PaymentMethod: "MasterCard", Status: "Successful" },
    ];

    const applyFilters = () => {
        let filtered = tripPaymentRows;
        if (filters.paymentMethod) {
            filtered = filtered.filter(row => row.PaymentMethod === filters.paymentMethod);
        }
        if (filters.status) {
            filtered = filtered.filter(row => row.Status === filters.status);
        }
        return filtered;
    };

    const filteredAndSearchedRows = applyFilters().filter(row =>
        Object.values(row).some(
            value =>
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
    };

    return (
        <div className="relative min-h-screen">
            <div className="mt-4 ">
                <div className="flex justify-between relative">
                    <div className="flex space-x-2">
                        {!isFilterOpen &&
                            <div className="flex gap-2 ">
                                {Object.keys(filters).map(category => {
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
                <Table rows={filteredAndSearchedRows} columns={tripPaymentColumns} />
            </div>
        </div>
    );
};

export default TripPaymentTable;
