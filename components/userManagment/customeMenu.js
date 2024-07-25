import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { EllipsisVertical } from "lucide-react";
import VerfiyUserModal from "./Modals/VerifyUserModal";
import DeactivateUserModal from "./Modals/DeactivatingUser";
import FlagUserModal from "./Modals/FlaggingUser";
import PermenantRemovalModal from "./Modals/PermenantRemoval";
import UnFlaggingUserModal from "./Modals/UnFlaggingUser";
import ReActivatingUserModal from "./Modals/ReactiveUserModal";
import VerficationReminderModal from "./Modals/VerficationReminder";
import ViewProfileModal from "./Modals/ViewProfileModal";
import EditUserModal from "./Modals/EditUserModal";

export default function UserCustomFilterMenu({ data, userType }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeOption, setActiveOption] = useState(null);

  const [modalOpen, setModalOpen] = useState(false)
  const handleOpenMenu = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setActiveOption(null); // Clear active option when closing menu
  };

  const handleViewProfile = () => {
    setActiveOption("View profile");
    setModalOpen(true)
    handleCloseMenu();
  };

  const handleEdit = () => {
    // Logic for editing
    setActiveOption('Edit')
    setModalOpen(true)
   
    handleCloseMenu();
  };

  const handleVerify = () => {
    // Logic for verifying
    setActiveOption("Verify");
    setModalOpen(true)
    handleCloseMenu();
  };

  const handleFlag = () => {
    // Logic for flagging
    setActiveOption("Flag");
    setModalOpen(true)

    handleCloseMenu();
  };

  const handleDeactivate = () => {
    // Logic for deactivating
    setActiveOption('Deactivate')
    setModalOpen(true)
    handleCloseMenu();
  };

  const handleReactivate = () => {
    // Logic for reactivating
    setActiveOption("Re-activate")
    setModalOpen(true)
    handleCloseMenu();
  };

  const handlePermanentRemoval = () => {
    // Logic for permanent removal
    setActiveOption('Permanent Removal')
    setModalOpen(true)

    handleCloseMenu();
  };

  const handleUnflag = () => {

    setActiveOption("Unflag")
    setModalOpen(true)
    handleCloseMenu();
  };

  const handleVerifyReminder = () => {
    // Logic for verification reminder
    setActiveOption("Verification Reminder")
    setModalOpen(true)

    handleCloseMenu();
  };

  // Determine menu options based on user type
  let filterMenuOptions = [];
  let modalComponents = {};
  switch (userType) {
    case "all":
      filterMenuOptions = ["View profile", "Edit", "Verify", "Flag", "Deactivate"];
      modalComponents = {
        "View profile": handleViewProfile,
        Edit: handleEdit,
        Verify: handleVerify,
        Flag: handleFlag,
        Deactivate: handleDeactivate,
      };
      break;
    case "unverified":
      filterMenuOptions = ["View profile", "Edit", "Verify", "Flag", "Verification Reminder", "Deactivate"];
      modalComponents = {
        "View profile": handleViewProfile,
        Edit: handleEdit,
        Verify: handleVerify,
        Flag: handleFlag,
        "Verification Reminder": handleVerifyReminder,
        Deactivate: handleDeactivate,
      };
      break;
    case "deactivated":
      filterMenuOptions = ["View profile", "Edit", "Re-activate", "Permanent Removal"];
      modalComponents = {
        "View profile": handleViewProfile,
        Edit: handleEdit,
        "Re-activate": handleReactivate,
        "Permanent Removal": handlePermanentRemoval,
      };
      break;
    case "flagged":
      filterMenuOptions = ["View profile", "Edit", "Unflag", "Deactivate"];
      modalComponents = {
        "View profile": handleViewProfile,
        Edit: handleEdit,
        Unflag: handleUnflag,
        Deactivate: handleDeactivate,
      };
      break;
    default:
      break;
  }

  const handleMenuItemClick = (menuItem) => {
    modalComponents[menuItem]();
    setActiveOption(menuItem); // Set active option for conditional rendering
  };

  return (
    <div>
      <EllipsisVertical onClick={handleOpenMenu} className="cursor-pointer" />
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
        {filterMenuOptions.map((item) => (
          <MenuItem key={item} onClick={() => handleMenuItemClick(item)}>
            {item}
          </MenuItem>
        ))}
      </Menu>
      {/* Conditional rendering of modals based on activeOption */}
      {activeOption === "View profile" && <ViewProfileModal data={data} isOpen={modalOpen} onClose={() => setModalOpen(false)} />}
      {activeOption === "Verify" && <VerfiyUserModal data={data} isOpen={modalOpen} onClose={() => setModalOpen(false)} />}
      {activeOption === "Deactivate" && <DeactivateUserModal data={data} isOpen={modalOpen} onClose={() => setModalOpen(false)} />}
      {activeOption === "Flag" && <FlagUserModal data={data} isOpen={modalOpen} onClose={() => setModalOpen(false)} />}
      {activeOption === "Permanent Removal" && <PermenantRemovalModal data={data} isOpen={modalOpen} onClose={() => setModalOpen(false)} />}
      {activeOption === "Unflag" && <UnFlaggingUserModal data={data} isOpen={modalOpen} onClose={() => setModalOpen(false)} />}
      {activeOption === "Re-activate" && <ReActivatingUserModal data={data} isOpen={modalOpen} onClose={() => setModalOpen(false)} />}
      {activeOption === "Verification Reminder" && <VerficationReminderModal data={data} isOpen={modalOpen} onClose={() => setModalOpen(false)} />}
        {activeOption === 'Edit' && <EditUserModal data={data} isOpen={modalOpen} onClose={() => setModalOpen(false)} />}
    </div>
  );
}
