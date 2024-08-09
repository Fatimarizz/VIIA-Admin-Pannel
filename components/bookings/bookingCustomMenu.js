import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { EllipsisVertical } from "lucide-react";

import ViewBookingsModal from "./modals/ViewBookings";
import EditBookingModal from "./modals/EditBooking";
import DeleteBookingModal from "./modals/DeleteBookingModal";
import ViewDeleteBookingModal from "./modals/ViewDeleteBooking";


export default function BookingCustomeMenu({ data, userType }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeOption, setActiveOption] = useState("");

  const handleOpenMenu = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option) => {
    setActiveOption(option);
    setModalOpen(true);
    handleCloseMenu();
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveOption(""); // Reset the active option after closing the modal
  };

  const filterMenuOptions = ["View Booking", "Edit Booking", "Delete Booking"];

  return (
    <>
      {userType === "Deleted" ? (
        <>
          <button
            className="text-green-500"
            onClick={() => handleMenuItemClick("View Booking")}
          >
            View
          </button>
          {activeOption === "View Booking" && (
            <ViewDeleteBookingModal
              data={data}
              isOpen={modalOpen}
              onClose={handleCloseModal}
            />
          )}
        </>
      ) : (
        <>
          <EllipsisVertical
            onClick={handleOpenMenu}
            className="cursor-pointer"
          />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            {filterMenuOptions.map((option) => (
              <MenuItem
                key={option}
                onClick={() => handleMenuItemClick(option)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          {activeOption === "View Booking" && (
            <ViewBookingsModal
              data={data}
              isOpen={modalOpen}
              onClose={handleCloseModal}
              userType={userType}
            />
          )}
          {activeOption === "Edit Booking" && (
            <EditBookingModal
              data={data}
              isOpen={modalOpen}
              onClose={handleCloseModal}
              userType={userType}
            />
          )}
          {activeOption === "Delete Booking" && (
            <DeleteBookingModal
              data={data}
              isOpen={modalOpen}
              onClose={handleCloseModal}
              userType={userType}
            />
          )}
        </>
      )}
    </>
  );
}
