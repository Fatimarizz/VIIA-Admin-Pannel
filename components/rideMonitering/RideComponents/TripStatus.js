import React from "react";

const TripStatus = ({ tripData ,userType }) => {
    
  console.log("status d",tripData)
    return (
        <div className="p-4 space-y-4">
            <div>
                <h4>Distance Covered:</h4>
                <p className="font-semibold">{tripData?.distanceCovered}</p>
            </div>
            <div>
                <h4>Start Point:</h4>
                <p className="font-semibold">{tripData?.startPoint}</p>
            </div>
            <div>
                <h4>Current Location:</h4>
                <p className={`font-semibold ${userType == 'ongoing' ? 'text-green-500 ' : 'text-black'}`}>{tripData?.currentLocation}</p>
            </div>
            <div>
                <h4>End Point:</h4>
                <p className='font-semibold'>{tripData?.endPoint}</p>
            </div>
            <div>
                <h4>Date:</h4>
                <p className="font-semibold">{tripData?.date}</p>
            </div>
            <div>
                <h4>Start Time:</h4>
                <p className="font-semibold">{tripData?.startTime}</p>
            </div>
            <div>
                <h4>Estimated End Time:</h4>
                <p className="font-semibold">{tripData?.estimatedEndTime}</p>
            </div>
            <div>
                <h4>Price:</h4>
                <p className="font-semibold">{tripData?.price}</p>
            </div>
        </div>
    );
};

export default TripStatus;
