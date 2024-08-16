import React, { useState } from 'react';
import Table from '../ui/Table';
import { allTicketsColumn } from '../ui/contants';
import { SearchIcon } from "lucide-react";
import { ListFilter } from 'lucide-react';

export default function SupportListPage() {
  const [currentTopNavigationLink, setCurrentTopNavigationLink] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: null,
  });

  const allTicketsRows = [
    {
      id: 1,
      user_name: 'John Doe',
      ticket_id: '12345',
      date: '2023-07-28',
      time:'8:00 am',
      issue_category: 'Login Issue',
      description: 'Cannot log in to the account.',
      status: 'Resolved',
    },
    {
      id: 2,
      user_name: 'Jane Smith',
      ticket_id: '12346',
      date: '2023-07-29',
      time:'8:00 am',
      issue_category: 'Payment Issue',
      description: 'Payment failed during checkout.',
      status: 'In Progress',
    },
    {
      id: 3,
      user_name: 'Alice Johnson',
      ticket_id: '12347',
      date: '2023-07-30',
      time:'8:00 am',
      issue_category: 'Account Issue',
      description: 'Account got locked.',
      status: 'Pending',
    },
    {
      id: 4,
      user_name: 'Bob Brown',
      ticket_id: '12348',
      date: '2023-07-31',
      time:'8:00 am',
      issue_category: 'Technical Issue',
      description: 'App crashes on startup.',
      status: 'Resolved',
    },
    {
      id: 5,
      user_name: 'Charlie Davis',
      ticket_id: '12349',
      date: '2023-08-01',
      time:'8:00 am',
      issue_category: 'Other',
      description: 'Need assistance with the app.',
      status: 'Pending',
    },
  ];

  const allTicketsConfig = { rows: allTicketsRows, columns: allTicketsColumn };
  const resolvedTicketsConfig = {
    rows: allTicketsRows.filter((row) => row.status === 'Resolved'),
    columns: allTicketsColumn,
  };

  const tableConfigurations = [
    allTicketsConfig,
    resolvedTicketsConfig,
  ];

  const currentConfig = tableConfigurations[currentTopNavigationLink];

  const applyFilters = () => {
    let filtered = currentConfig.rows;

    if (filters.status) {
      filtered = filtered.filter((row) => row.status === filters.status);
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
  };

  return (
    <div className="relative px-5 min-h-screen">
      <div className="ml-4">
        <h2 className="font-semibold text-lg">Support Tickets</h2>
        <p className="text-sm">View and manage all support tickets.</p>
      </div>
      <div className="space-y-1 mt-4 w-full xl:w-[80%] flex space-x-2 px-4 py-2 ring-gray-900/10">
        {['All Tickets', 'Resolved Tickets'].map((item, index) => (
          <div
            key={index}
            onClick={() => setCurrentTopNavigationLink(index)}
            className={`flex gap-2 ease-in-out duration-300 cursor-pointer ${
              currentTopNavigationLink === index
                ? 'shadow-lg text-black ring-1 ring-gray-900/10'
                : 'text-gray-500'
            } rounded-md items-center py-2 px-4 text-xs lg:text-sm font-semibold`}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <div className="flex justify-between relative">
          <div className="flex space-x-2">
            {!isFilterOpen && (
              <div className="flex gap-2">
                {Object.keys(filters).map((category) => {
                  if (filters[category]) {
                    return (
                      <div
                        key={category}
                        className="flex items-center gap-2 bg-white border-gray-300 font-semibold text-black border px-2 py-1 rounded-lg"
                      >
                        <span>{`${filters[category]}`}</span>
                        <button
                          onClick={() => clearFilter(category)}
                          className="text-gray-600 hover:text-gray-800"
                        >
                          &times;
                        </button>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )}
            {currentTopNavigationLink === 0 &&
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="px-4 py-1 flex space-x-1 bg-white text-black font-semibold border rounded-lg"
            >
                <ListFilter className="h-6 w-6 mt-1 mr-3" />
              More Filters
            </button>
            }
          </div>
          
          {isFilterOpen && (
            <div className="border p-4 rounded-lg bg-white shadow-lg mb-4 absolute top-10 left-6 w-[30%] z-50">
              <h2 className="font-semibold text-2xl mb-3">Filters</h2>
              <div className="grid grid-cols-1 gap-5">
                <div className="mb-2">
                  <h4 className="font-semibold">Status</h4>
                  <div className="flex flex-col space-y-1">
                    {[
                      { label: 'Resolved', value: 'Resolved' },
                      { label: 'In Progress', value: 'In Progress' },
                      { label: 'Pending', value: 'Pending' },
                    ].map((statusFilter) => (
                      <label key={statusFilter.value}>
                        <input
                          type="radio"
                          name="status"
                          value={statusFilter.value}
                          checked={filters.status === statusFilter.value}
                          onChange={(e) =>
                            handleFilterChange('status', e.target.value)
                          }
                        />{' '}
                        {statusFilter.label}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 my-4">
                {Object.keys(filters).map((category) => {
                  if (filters[category]) {
                    return (
                      <div
                        key={category}
                        className="flex items-center gap-2 bg-white border-gray-300 border px-2 py-1 rounded-lg"
                      >
                        <span>{`${filters[category]}`}</span>
                        <button
                          onClick={() => clearFilter(category)}
                          className="text-red-600 hover:text-red-800"
                        >
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
    </div>
  );
}
