import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { EllipsisVertical } from "lucide-react";

import FlagUserModal from "../userManagment/Modals/FlaggingUser";
import DeleteRatings from "./Modals/DeleteRating";
import { useRouter } from "next/router";

export default function RatingMenu({ data, userType }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeOption, setActiveOption] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const router=useRouter()

    const handleOpenMenu = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleViewRating = () => {
        router.push(`/ratings/${data.id}/view-rating`); // Navigate to the rating page
    };

    const handleViewReport = () => {
        router.push(`/ratings/${data.id}/view-report`); // Navigate to the report page
    };

    const handleFlagReceiver = () => {
        setActiveOption("Flag receiver");
        setModalOpen(true);
    };

    const handleDeleteRating = () => {
        setActiveOption("Delete user rating");
        setModalOpen(true);
    };

    let filterMenuOptions = [];
    let modalComponents = {};

    switch (userType) {
        case "rating":
            filterMenuOptions = ["View Rating Detail", "Flag receiver", "Delete user rating"];
            modalComponents = {
                "View Rating Detail": handleViewRating,
                "Flag receiver": handleFlagReceiver,
                "Delete user rating": handleDeleteRating,
            };
            break;
        case "report":
            filterMenuOptions = ["View Report Detail", "Flag receiver"];
            modalComponents = {
                "View Report Detail": handleViewReport,
                "Flag receiver": handleFlagReceiver,
            };
            break;
        default:
            break;
    }

    const handleMenuItemClick = (menuItem) => {
        modalComponents[menuItem]();
        handleCloseMenu(); // Close the menu after selecting an option
    };

    return (
        <>
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

            {/* Conditional rendering of modals based on activeOption */}
            {activeOption === "Flag receiver" && (
                <FlagUserModal data={data} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            )}
            {activeOption === "Delete user rating" && (
                <DeleteRatings data={data} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            )}
        </>
    );
}
