
import React from "react";
import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { Dialog, DialogTitle } from "@mui/material";
import { getPaymentLogo } from "@/components/ui/contants";
import RetryPaymentModal from "./RetryPaymentModal";
import { handleDownload } from "../PaymentMenu";
import DeletePaymentGateway from "./DeletePaymentGateway";
import EditPaymentGatewayModal from "./EditPaymentGateway";

const ViewPaymentGateway = ({ isOpen, onClose, data }) => {
  // Formik form validation schema using Yup
  const [showDeleteModal, setShowDeleteModal] = useState()
  const [showEditModal, setShowEditModal] = useState()

  const handleCloseModal = () => {
    setShowDeleteModal(false);
    onClose();
  };
  const handleDelete = () => {
    setShowDeleteModal(true);
  };
  const handleEdit = () => {
    setShowEditModal(true);
  };


  return (
    <>
      <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm" className="rounded-xl ">
        <DialogTitle>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">View Payment Gateway Details</h3>
            <button onClick={onClose}>
              <svg className="h-6 w-6 cursor-pointer text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </DialogTitle>

        <>
          <div className="grid grid-cols-2 gap-x-7 gap-y-4  w-full p-4 px-6">
            <div className="">
              <p className="font-semibold">Payment Method:</p>
              <p className="flex items-center space-x-2">
                {getPaymentLogo(data.PaymentMethod)}
                {data.PaymentMethod}
              </p>
            </div>

            <div>
              <p className="font-semibold">Configuration:</p>
              <p>{data.ConfigurationDetail}</p>
            </div>
            <div>
              <p className="font-semibold">Date:</p>
              <p>{data.DateConnected}</p>
            </div>
            <div>
              <p className="font-semibold">Status:</p>
              <p className=" rounded-full  w-24 pl-2" style={{
                backgroundColor: data.Status === "Successful" ? "#ECFDF3" : data.Status === "Declined" ? "#FEF3F2" : "#EFF8FF",
                color: data.Status === "Successful" ? "#027A48" : data.Status === "Declined" ? "#B42318" : "#175CD3",
              }}>{data.Status}</p>
            </div>






          </div>
          <div className=" space-x-2 flex justify-end gap-3 m-8">

            <button
              type="button"
              className="text-sm text-red-700 px-3 py-2 bg-white border border-gray-300 rounded-md"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              type="button"
              onClick={handleEdit}
              className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"

            >
              Edit Details
            </button>
          </div>
        </>
        <EditPaymentGatewayModal data={data} onClose={() => setShowEditModal(false)} isOpen={showEditModal} />
        <DeletePaymentGateway data={data} onClose={() => setShowDeleteModal(false)} isOpen={showDeleteModal} />
      </Dialog>
    </>
  );
};

export default ViewPaymentGateway;
