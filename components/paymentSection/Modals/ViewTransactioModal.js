
import React from "react";
import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { Dialog, DialogTitle } from "@mui/material";
import { getPaymentLogo } from "@/components/ui/contants";
import RetryPaymentModal from "./RetryPaymentModal";
import { handleDownload } from "../PaymentMenu";

const ViewTransactionModal = ({ isOpen, onClose, data }) => {
  // Formik form validation schema using Yup
  const [showRetryModal, setShowRetryModal] = useState()
  // Initialize Formik form

  const handleCloseModal = () => {
    setShowRetryModal(false);
    onClose();
  };
  const handleRetryModal = () => {
    setShowRetryModal(true);
  };
 
  return (
    <>
      <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm" className="rounded-xl ">
        <DialogTitle>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Trip Transaction details</h3>
            <button onClick={onClose}>
              <svg className="h-6 w-6 cursor-pointer text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </DialogTitle>

        <>
          <div className="grid grid-cols-2 gap-x-40 gap-y-3 w-full p-4 px-6">
            {data?.TripCodeID ?
              <div>
                <p className="font-semibold">Trip Id:</p>
                <p>{data.TripCodeID}</p>
              </div>
              :
              <div>
                <p className="font-semibold">Type:</p>
                <p>{data?.Type}</p>
              </div>
            }
            <div>
              <p className="font-semibold">Status:</p>
              <p className=" rounded-full  w-24 pl-2" style={{
                backgroundColor: data.Status === "Successful" ? "#ECFDF3" : data.Status === "Declined" ? "#FEF3F2" : "#EFF8FF",
                color: data.Status === "Successful" ? "#027A48" : data.Status === "Declined" ? "#B42318" : "#175CD3",
              }}>{data.Status}</p>
            </div>
            <div>
              <p className="font-semibold">Date :</p>
              <p>{data.Date}</p>
            </div>
            <div>
              <p className="font-semibold">Time:</p>
              <p>{data.Time}</p>
            </div>

            <div>
              <p className="font-semibold">Amount:</p>
              <p>£{data.Amount}</p>
            </div>
            <div>
              <p className="font-semibold">VIIA Revenue:</p>
              <p>{data.Revenue}</p>
            </div>
            <div>
              <p className="font-semibold">Passenger Name</p>
              <p>{data?.Passenger || data?.UserName}</p>
            </div>
            {data.Driver &&
              <div>
                <p className="font-semibold">Driver Name:</p>
                <p>{data.Driver}</p>
              </div>
            }
            <div className="">
              <p className="font-semibold">Payment Method:</p>
              <p className="flex items-center space-x-2">
                {getPaymentLogo(data.PaymentMethod)}
                {data.PaymentMethod}
              </p>
            </div>

          </div>
          <div className=" space-x-2 flex justify-end gap-3 m-8">
            {data?.Type &&
              <button
                type="button"
                className="text-sm text-green-700 font-semibold bg-white  rounded-md"
                onClick={handleRetryModal}
              >
                Retry Payment
              </button>
            }
            
            <button
              type="button"
              onClick={()=>handleDownload(data)}
              className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"

            >
              Download
            </button>
          </div>
        </>
        <RetryPaymentModal data={data} onClose={() => setShowRetryModal(false)} isOpen={showRetryModal} />
      </Dialog>
    </>
  );
};

export default ViewTransactionModal;
