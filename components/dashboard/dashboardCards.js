import { InfoIcon } from 'lucide-react';
import React from 'react';
import { useState } from 'react';

const DashboardCards = ({ title, number, viewAll , toolTipText }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className={`shadow-md px-8 w-full ${viewAll ? 'pt-10 pb-4' : 'py-10'} rounded-lg`}>
      <div className="flex justify-between">
        <p className="text-sm">{title}</p>
        <div
        
          className="relative"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <InfoIcon className="h-5 w-5" />
          {/* tooltip */}
          {showTooltip && <div className="absolute -top-10 w-auto left-0 bg-gray-500 text-white text-xs rounded py-1 px-2 z-10">
            {toolTipText}
          </div>}
        </div>

      </div>
      <div className="mt-3">
        <h1 className="text-2xl lg:text-4xl font-bold">{number}</h1>
      </div>
      {viewAll && (
        <div className="flex mt-3 justify-end border-t-[1px] border-gray-900/10">
          <h1 className="text-primary-600 font-semibold mt-4 text-sm 2xl:text-md cursor-pointer">
            View All
          </h1>
        </div>
      )}
    </div>
  );
};

export default DashboardCards;
