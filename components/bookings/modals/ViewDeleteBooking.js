import React, { useState } from "react";
import { Dialog, DialogTitle } from "@mui/material";
import DriverDetails, { PassengerDetails } from "./DriverPassengerDetails";

const ViewDeleteBookingModal = ({ isOpen, onClose, data, userType }) => {


    return (
        <>
            <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md" className="rounded-2xl">
                <DialogTitle>
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">View Booking Details</h3>
                        <button onClick={onClose}>
                            <svg className="h-6 w-6 cursor-pointer text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </DialogTitle>

                <div className="p-6 space-y-3">
                    <div className="flex justify-between">

                        <div>
                            <h2 className="font-semibold">
                                Booking Status
                            </h2>
                            <div className="rounded-full  my-2 w-24 flex justify-center text-sm bg-red-100 text-red-500 py-1">
                                Deleted
                            </div>
                        </div>
                        <div>
                            <h2 className="font-semibold">
                                Reason for Deleting booking
                            </h2>
                            <p>
                                {data.reason}
                            </p>
                        </div>
                    </div>

                    {/* Driver's Details */}
                    {userType !== 'Requested' &&
                        <DriverDetails />
                    }
                    {/* passengers Detaiil */}
                    {userType !== 'Published' &&
                        <PassengerDetails userType={userType} />
                    }
                    {/* Ride Details */}
                    <div className="space-y-2 font-semibold text-base">
                        <div className="">
                            <p className="text-sm font-normal">Pickup Point:</p>
                            <p>{data.pickup_point}</p>
                        </div>
                        <div className="mt-3">
                            <p className="text-sm font-normal">Destination:</p>
                            <p>{data.destination}</p>
                        </div>

                        <div className="grid grid-cols-2 space-y-4">
                            <div className="">
                                <p className="text-sm font-normal">Seats:</p>
                                <p>{data.seats}</p>
                            </div>
                            <div>
                                <p className="text-sm font-normal">Price:</p>
                                <p>{data.price}</p>
                            </div>
                            <div>
                                <p className="text-sm font-normal">Date:</p>
                                <p>{data.date}</p>
                            </div>
                            <div>
                                <p className="text-sm font-normal">Time:</p>
                                <p>{data.time}</p>
                            </div>
                        </div>
                    </div>


                </div>
            </Dialog>


        </>
    );
};

export default ViewDeleteBookingModal;
