import React, { useState } from 'react';
import Table from '../ui/Table';
import { allRatingColumns, allReportColumns } from '../ui/contants';

import { SearchIcon, ListFilter } from "lucide-react";
export default function RatingList() {
  const [currentTopNavigationLink, setCurrentTopNavigationLink] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    rating: null,
  });

  const transactionTableRow = [
    {
      id: 1,
      tripCodeID: '1020',
      Date: '14 Oct, 2023',
      Sender: 'Joseph Emmanuel',
      Receiver: 'Azaan Iqbal',
      Rating: 4.5,
      Comment: 'Azaan is a very good driver that is dedicated.',
    },
    {
      id: 2,
      tripCodeID: '1021',
      Date: '14 Oct, 2023',
      Sender: 'John Doe',
      Receiver: 'Jane Doe',
      Rating: 2.5,
      Comment: 'The ride was okay.',
    },
    {
      id: 3,
      tripCodeID: '1022',
      Date: '14 Oct, 2023',
      Sender: 'Alex Smith',
      Receiver: 'Bob Johnson',
      Rating: 1.5,
      Comment: 'The driver was late and rude.',
    },
  ];

  const allReportsRows = [
    {
      id: 1,
      tripCodeID: '1020',
      Date: '14 Oct, 2023',
      Reporter: 'Joseph Emmanuel',
      User: 'Azaan Iqbal',
      files: '',
      Details: 'Azaan is a very good driver that is dedicated.',
    },
    {
      id: 2,
      tripCodeID: '1021',
      Date: '14 Oct, 2023',
      Reporter: 'John Doe',
      User: 'Jane Doe',
      files: 2.5,
      Details: 'The ride was okay.',
    },
    {
      id: 3,
      tripCodeID: '1022',
      Date: '14 Oct, 2023',
      Reporter: 'Alex Smith',
      User: 'Bob Johnson',
      files: 1.5,
      Details: 'The driver was late and rude.',
    },
  ];
  const PaymentTypes = [
    {
      type: 'All Ratings',
      slug: '/all-ratings',
    },
    {
      type: 'All Reports',
      slug: '/all-reports',
    },
  ];
  const tableConfigurations = [
    { rows: transactionTableRow, columns: allRatingColumns },
    { rows: allReportsRows, columns: allReportColumns },

  ];

  const currentConfig = tableConfigurations[currentTopNavigationLink];
  const applyFilters = () => {
    let filtered = currentConfig.rows;

    if (filters.rating) {
      filtered = filtered.filter((row) => {
        const { Rating } = row;
        switch (filters.rating) {
          case 'positive':
            return Rating > 3;
          case 'neutral':
            return Rating === 2.5;
          case 'negative':
            return Rating < 2;
          default:
            return true;
        }
      });
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
        <h2 className="font-semibold text-lg">Ratings & Reports</h2>
        <p className="text-sm">View and manage all user ratings & feedback.</p>
      </div>
      <div className="space-y-1 mt-4 w-full xl:w-[80%] flex space-x-2 px-4 py-2 ring-gray-900/10">
        {PaymentTypes?.map((item, index) => (
          <div
            key={index}
            onClick={() => setCurrentTopNavigationLink(index)}
            className={`flex gap-2 ease-in-out duration-300 cursor-pointer ${currentTopNavigationLink === index
                ? 'shadow-lg text-black ring-1 ring-gray-900/10'
                : 'text-gray-500'
              } rounded-md items-center py-2 px-4 text-xs lg:text-sm font-semibold`}
          >
            <p className="">{item?.type}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 ">
        <div className="flex justify-between relative">
          <div className="flex space-x-2">
            {!isFilterOpen && (
              <div className="flex gap-2 ">
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
            {currentTopNavigationLink == 0 &&
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="px-4 py-1 flex space-x-1 bg-white text-black font-semibold border rounded-lg "
            >
              More Filters
            </button>
}
          </div>

          {isFilterOpen && (
            <div className="border p-4 rounded-lg bg-white shadow-lg mb-4 absolute top-10 left-6 w-[30%] z-50">
              <h2 className="font-semibold text-2xl mb-3">Filters</h2>
              <div className="grid grid-cols-1 gap-5">
                <div className="mb-2">
                  <h4 className="font-semibold">Rating</h4>
                  <div className="flex flex-col space-y-1">
                    {[
                      { label: 'Positive (> 3)', value: 'positive' },
                      { label: 'Neutral (2.5)', value: 'neutral' },
                      { label: 'Negative (< 2)', value: 'negative' },
                    ].map((ratingFilter) => (
                      <label key={ratingFilter.value}>
                        <input
                          type="radio"
                          name="rating"
                          value={ratingFilter.value}
                          checked={filters.rating === ratingFilter.value}
                          onChange={(e) =>
                            handleFilterChange('rating', e.target.value)
                          }
                        />{' '}
                        {ratingFilter.value}


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
