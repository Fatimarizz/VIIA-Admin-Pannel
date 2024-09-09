import { PassengerDetails } from "@/components/bookings/modals/DriverPassengerDetails";
import React from "react";

const PassengerInfo = ({ passengers }) => {
    return (
        <div className="p-4 rounded-lg shadow-sm border">
          <p className="mb-4 font-semibold">Total Passengers  : {passengers.length}</p>
            <PassengerDetails userType={'hell'}/>
        </div>
    );
};

export default PassengerInfo;
