import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

const CustomPagination = ({ page, pageCount, onPageChange }) => {
  return (
    <div className="flex items-center justify-between p-3 border  border-t-0 rounded-tl-none rounded-tr-none  rounded-xl">
      {/* Left Arrow Button */}
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 0}
        className="p-2 items-center flex rounded-md border border-gray-300 disabled:opacity-50"
      >
         <ArrowLeftIcon className="h-5 w-5 mr-2 text-gray-600" />
        Previous
       
      </button>

      {/* Page Numbers */}
      <div className="flex space-x-2">
        {Array.from({ length: pageCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index)}
            className={`px-3 py-1 rounded ${page === index ? 'text-black bg-gray-100' : ' text-gray-600'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page >= pageCount - 1}
        className="p-2 items-center flex rounded-md border  border-gray-300 disabled:opacity-50"
      >
        Next
        <ArrowRightIcon className="h-5 w-5 ml-2 text-gray-800" />
      </button>
    </div>
  );
};

export default CustomPagination;
