
import React from "react";
import { AlertTitle, Dialog, DialogTitle } from "@mui/material";
import { AlertTriangle, InfoIcon } from "lucide-react";
import { useRouter } from "next/router";

const RetryPaymentModal = ({ isOpen, onClose  ,data}) => {
    // Formik form validation schema using Yup

    const router= useRouter()
   
    const handleCloseModal = () => {
        onClose(); 
    };

     const handleRetryModal = () => {
   
  };
    return (
        <>
            <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="xs" className="rounded-lg">
                <DialogTitle>
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Retry </h3>
                        <button onClick={onClose}>
                            <svg className="h-6 w-6 cursor-pointer text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </DialogTitle>

                <div className="p-4">
                    <div className="flex justify-center -mt-4 mb-3">
                        <div className="rounded-full bg-green-100 p-1.5">
                            <div className="rounded-full bg-green-200 p-1.5">
                                <AlertTriangle className="h-5 w-5 text-green-500" />
                            </div>
                        </div>
                    </div>
                    <div className="px-3 flex flex-col justify-center items-center my-4">
                        <h3 className="text-lg text-green-700 text-center font-semibold leading-6">
                            Retry Payment 
                        </h3>
                        <p className="text-center text-sm mt-2">
                        You are about to retry this trip payment with <span className="font-semibold">ID {data.TripCodeID}</span>  


                            
                          
                            click on <span className="font-semibold"> Cancel</span> to go back and <span className="font-semibold"> Retry </span> to proceed.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-8">
                        <button
                            type="button"
                            className="text-sm text-gray-700 px-3 py-2 bg-white border border-gray-300 rounded-md"
                            onClick={handleCloseModal}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={handleRetryModal}
                            className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"

                        >
                           Retry
                        </button>
                    </div>

                </div>

            </Dialog>

        </>
    );
};

export default RetryPaymentModal;
