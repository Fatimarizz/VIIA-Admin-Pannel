import React, { useState } from "react";
import Table from "../ui/Table";
import DashboardCards from "../dashboard/dashboardCards";
import { allUsersColumns, unVerifiedUserColumns, deactivatedUserColumns, flaggedUserColumns } from "./contants";
import { SearchIcon } from "lucide-react";

const UserManagementList = () => {
  const [currentTopNavigationLink, setCurrentTopNavigationLink] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const allUserRows = [
    {
      id: 1,
      fullName: "Jon Snow",
      email: "jon.snow@example.com",
      phoneNumber: "347324893",
      dateRegistered: "2 June 2023",
      gender: "Male",
      userType: "Driver",
      activeStatus: "Active",
      ridesCount: 10,
      flagged: "unflag",
      verificationStatus: "verified",
    },
    {
      id: 2,
      fullName: "Jane Doe",
      email: "jane.doe@example.com",
      phoneNumber: "123456789",
      dateRegistered: "5 June 2023",
      gender: "Female",
      userType: "Passenger",
      activeStatus: "Inactive",
      ridesCount: 5,
      flagged: "unflag",
      verificationStatus: "unverified",
    },
  ];

  const unVerifiedUserRows = [
    {
      id: 1,
      fullName: "Jon Snow",
      email: "jon.snow@example.com",
      phoneNumber: "347324893",
      dateRegistered: "2 June 2023",
      gender: "Male",
      regDate: "20 October 2021",
      userType: "Driver",
      activeStatus: "Active",
      ridesCount: 10,
      verificationStatus: "Unverified",
    },
    // Add more objects as needed
  ];

  const deactivatedUserRows = [
    {
      id: 1,
      fullName: "Jon Snow",
      email: "jon.snow@example.com",
      dateRegistered: "2 June 2023",
      gender: "Male",
      deactivated: true,
      flagged: "flagged",
      regDate: "20 October 2021",
      userType: "Driver",
      verificationStatus: "verified",
      reasonForDeactivation: "Dangerous driving",
      dateDeactivated: "2 June 2023",
    },
    // Add more objects as needed
  ];

  const flaggedUserRows = [
    {
      id: 1,
      fullName: "Jon Snow",
      email: "jon.snow@example.com",
      dateFlagged: "2 June 2023",
      reasonForFlagging: "Dangerous driving",
      flagged: "flagged",
      verificationStatus: "verified",
      userType: "Driver",
    },
    // Add more objects as needed
  ];

  const userCards = [
    {
      name: "Registered Users",
      number: "8.8k",
    },
    {
      name: "Drivers",
      number: "900",
    },
    {
      name: "Passengers",
      number: "7.9k",
    },
    {
      name: "Active Users",
      number: "8.8k",
    },
  ];

  const usersTypes = [
    {
      type: "All Users",
      number: 400,
    },
    {
      type: "Unverified",
      number: 2,
    },
    {
      type: "Deactivated Users",
      number: 2,
    },
    {
      type: "Flagged Users",
      number: 2,
    },
  ];

  const tableConfigurations = [
    { rows: allUserRows, columns: allUsersColumns },
    { rows: unVerifiedUserRows, columns: unVerifiedUserColumns },
    { rows: deactivatedUserRows, columns: deactivatedUserColumns },
    { rows: flaggedUserRows, columns: flaggedUserColumns },
  ];

  const currentConfig = tableConfigurations[currentTopNavigationLink];

  const filteredRows = currentConfig.rows.filter((row) =>
    Object.values(row).some(
      (value) =>
        value &&
        value
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="relative px-5">
      <div className="flex gap-4 w-full xl:w-[60%] justify-between px-4 py-2 ring-gray-900/10">
        {usersTypes?.map((item, index) => (
          <div
            key={index}
            onClick={() => setCurrentTopNavigationLink(index)}
            className={`flex gap-2 ease-in-out duration-300 cursor-pointer ${
              currentTopNavigationLink === index
                ? "shadow-lg text-black ring-1 ring-gray-900/10"
                : "text-gray-500"
            } rounded-md items-center py-2 px-2 text-xs lg:text-sm font-semibold`}
          >
            <p>{item?.type}</p>
            <p className="w-12 h-7 flex relative items-center justify-center bg-[#F2F4F7] rounded-full">
              {item?.number}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-6 w-full xl:w-[90%]">
        {userCards?.map((item, index) => (
          <div key={index} className="w-full">
            <DashboardCards
              title={item?.name}
              number={item?.number}
              toolTipText={`Total Count of ${item?.name}`}
            />
          </div>
        ))}
      </div>
      <div className="mt-4">
      <div className=" mb-2 relative border rounded-lg flex">
        <SearchIcon className="absolute left-2 top-2 h-6 w-5 text-gray-400"/>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="px-4 py-2 w-full focus:outline-none ml-6"
          />
        </div>
        <Table rows={filteredRows} columns={currentConfig.columns} />
      </div>
    </div>
  );
};

export default UserManagementList;
