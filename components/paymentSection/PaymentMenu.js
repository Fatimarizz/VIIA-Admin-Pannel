import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { EllipsisVertical, PencilIcon, TrashIcon } from "lucide-react";
import jsPDF from "jspdf";  // Add this library for generating PDFs
import ViewTransactionModal from "./Modals/ViewTransactioModal";
import RetryPaymentModal from "./Modals/RetryPaymentModal";
import ViewPaymentGateway from "./Modals/ViewPaymentGateway";
import DeletePaymentGateway from "./Modals/DeletePaymentGateway";
import EditPaymentGatewayModal from "./Modals/EditPaymentGateway";

export function handleDownload(data) {
  const doc = new jsPDF();
  const formattedData = JSON.stringify(data, null, 2);
  doc.text(formattedData, 10, 10);
  doc.save(`transaction_${data.id}.pdf`);
}

export default function PaymentMenu({ data, userType }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeOption, setActiveOption] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [toggleChecked, setToggleChecked] = useState(false);

  const ToggleSwitch = ({ checked, onChange }) => {
    return (
      <label className="inline-flex items-center cursor-pointer">
       
        <div className="relative mt-2">
          <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
          <div className={`block w-10 h-6 rounded-full ${checked ? "bg-green-500" : "bg-gray-200"}`}></div>
          <div
            className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
              checked ? "transform translate-x-full" : ""
            }`}
          ></div>
        </div>
      </label>
    );
  };
  const handleOpenMenu = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleViewTransaction = () => {
    setActiveOption("View Transaction");
    setModalOpen(true);
  };

  const handleRetryPayment = () => {
    setActiveOption("Retry Payment");
    setModalOpen(true);
  };

  const handleViewPaymentGateway = () => {
    setActiveOption("View Payment Gateway");
    setModalOpen(true);
  };

  const handleEditPaymentGateway = () => {
    setActiveOption("Edit Payment Gateway");
    setModalOpen(true);
  };

  const handleDeletePaymentGateway = () => {
    setActiveOption("Delete Payment Gateway");
    setModalOpen(true);
  };

  let filterMenuOptions = [];
  let modalComponents = {};

  switch (userType) {

    case "transaction" :
      filterMenuOptions = ["View Transaction", "Download"];
      modalComponents = {
        "View Transaction": handleViewTransaction,
      };
      break;
    case  "tripPayment":
      filterMenuOptions = ["View Transaction", "Download"];
      modalComponents = {
        "View Transaction": handleViewTransaction,
      };
      break;
    case "wallet":
      filterMenuOptions = ["View Transaction", "Retry Payment"];
      modalComponents = {
        "View Transaction": handleViewTransaction,
        "Retry Payment": handleRetryPayment,
      };
      break;
    case "PaymentGateway":
      filterMenuOptions = ["View Payment Gateway", "Edit Payment Gateway", "Delete Payment Gateway"];
      modalComponents = {
        "View Payment Gateway": handleViewPaymentGateway,
        "Edit Payment Gateway": handleEditPaymentGateway,
        "Delete Payment Gateway": handleDeletePaymentGateway,
      };
      break;
    default:
      break;
  }

  const handleToggleChange = () => {
    setToggleChecked(!toggleChecked);
  };
  const handleMenuItemClick = (menuItem) => {
    if (menuItem === "Download") {
      handleDownload(data);
      handleCloseMenu();
    } else {
      modalComponents[menuItem]();
    }
  };

  return (
    <>
      {userType === "PaymentGateway" ? (
        <div className="flex justify-center mr-5 mt-2 items-center space-x-5">
          <button
            onClick={() => {
              handleViewPaymentGateway();
            }}
            className="border px-4 py-1 text-sm text-green-600 bg-slate-100 rounded-md"
          >
            View
          </button>
          <button
            onClick={() => {
              handleEditPaymentGateway();
            }}
            className="h-4 w-4"
          >
            <PencilIcon />
          </button>
          <button
            onClick={() => {
              handleDeletePaymentGateway();
            }}
            className="h-4 w-4"
          >
            <TrashIcon />
          </button>
       
            <ToggleSwitch checked={toggleChecked} onChange={handleToggleChange} />
    
        </div>
      ) : (
        <div>
          <EllipsisVertical onClick={handleOpenMenu} className="cursor-pointer" />
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
            {filterMenuOptions.map((item) => (
              <MenuItem key={item} onClick={() => handleMenuItemClick(item)}>
                {item}
              </MenuItem>
            ))}
          </Menu>
        </div>
      )}
      {/* Conditional rendering of modals based on activeOption */}
      {activeOption === "View Transaction" && (
        <ViewTransactionModal data={data} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      )}
      {activeOption === "Retry Payment" && (
        <RetryPaymentModal data={data} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      )}
      {activeOption === "View Payment Gateway" && (
        <ViewPaymentGateway data={data} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      )}
      {activeOption === "Edit Payment Gateway" && (
        <EditPaymentGatewayModal data={data} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      )}
      {activeOption === "Delete Payment Gateway" && (
        <DeletePaymentGateway data={data} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
