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
      Email: "Snow",
      FullName: "Jon",
      PhoneNumber: "347324893",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      UserType: "Driver",
      ActiveStatus: "Active",
      RidesCount: 10,
      Flagged: "flag",
      VerificationStatus: "verified",
    },
    {
      id: 2,
      Email: "Snow",
      FullName: "Jon",
      PhoneNumber: "347324893",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      UserType: "Driver",
      ActiveStatus: "Active",
      RidesCount: 10,
      Flagged: "flag",
      VerificationStatus: "verified",
    },
    {
      id: 3,
      Email: "Snow",
      FullName: "Jon",
      PhoneNumber: "347324893",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      UserType: "Driver",
      ActiveStatus: "Active",
      RidesCount: 10,
      Flagged: "flag",
      VerificationStatus: "verified",
    },
    {
      id: 4,
      Email: "Snow",
      FullName: "Jon",
      PhoneNumber: "347324893",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      UserType: "Driver",
      ActiveStatus: "Active",
      RidesCount: 10,
      Flagged: "flag",
      VerificationStatus: "verified",
    },
    {
      id: 5,
      Email: "Snow",
      FullName: "Jon",
      PhoneNumber: "347324893",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      UserType: "Driver",
      ActiveStatus: "Active",
      RidesCount: 10,
      Flagged: "flag",
      VerificationStatus: "verified",
    },
    {
      id: 6,
      Email: "Snow",
      FullName: "Jon",
      PhoneNumber: "347324893",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      UserType: "Driver",
      ActiveStatus: "Active",
      RidesCount: 10,
      Flagged: "flag",
      VerificationStatus: "verified",
    },
    {
      id: 7,
      Email: "Snow",
      FullName: "Jon",
      PhoneNumber: "347324893",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      UserType: "Driver",
      ActiveStatus: "Active",
      RidesCount: 10,
      Flagged: "flag",
      VerificationStatus: "verified",
    },
    {
      id: 8,
      Email: "Snow",
      FullName: "Jon",
      PhoneNumber: "347324893",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      UserType: "Driver",
      ActiveStatus: "Active",
      RidesCount: 10,
      Flagged: "flag",
      VerificationStatus: "verified",
    },
    {
      id: 9,
      Email: "Snow",
      FullName: "Jon",
      PhoneNumber: "347324893",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      UserType: "Driver",
      ActiveStatus: "Active",
      RidesCount: 10,
      Flagged: "flag",
      VerificationStatus: "verified",
    },
    {
      id: 10,
      Email: "Snow",
      FullName: "Jon",
      PhoneNumber: "347324893",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      UserType: "Driver",
      ActiveStatus: "Active",
      RidesCount: 10,
      Flagged: "flag",
      VerificationStatus: "verified",
    },
  ];
  const unVerifiedUserRows = [
    {
      id: 1,
      Email: "Snow",
      FullName: "Jon",
      PhoneNumber: "347324893",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      RegDate: "20 October 2021",
      UserType: "Driver",
      ActiveStatus: "Active",
      RidesCount: 10,
      VerificationStatus: "unverified",
    },
    {
      id: 2,
      Email: "Snow",
      FullName: "Jon",
      PhoneNumber: "347324893",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      RegDate: "20 October 2021",
      UserType: "Driver",
      ActiveStatus: "Active",
      RidesCount: 10,
      VerificationStatus: "verified",
    },
    {
      id: 3,
      Email: "Snow",
      FullName: "Jon",
      PhoneNumber: "347324893",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      RegDate: "20 October 2021",
      UserType: "Driver",
      ActiveStatus: "Active",
      RidesCount: 10,
      VerificationStatus: "verified",
    },
    {
      id: 4,
      Email: "Snow",
      FullName: "Jon",
      PhoneNumber: "347324893",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      RegDate: "20 October 2021",
      UserType: "Driver",
      ActiveStatus: "Active",
      RidesCount: 10,
      VerificationStatus: "verified",
    },
    {
      id: 5,
      Email: "Snow",
      FullName: "Jon",
      PhoneNumber: "347324893",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      RegDate: "20 October 2021",
      UserType: "Driver",
      ActiveStatus: "Active",
      RidesCount: 10,
      VerificationStatus: "verified",
    },
    {
      id: 6,
      Email: "Snow",
      FullName: "Jon",
      PhoneNumber: "347324893",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      RegDate: "20 October 2021",
      UserType: "Driver",
      ActiveStatus: "Active",
      RidesCount: 10,
      VerificationStatus: "verified",
    },
    {
      id: 7,
      Email: "Snow",
      FullName: "Jon",
      PhoneNumber: "347324893",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      RegDate: "20 October 2021",
      UserType: "Driver",
      ActiveStatus: "Active",
      RidesCount: 10,
      VerificationStatus: "verified",
    },
    {
      id: 8,
      Email: "Snow",
      FullName: "Jon",
      PhoneNumber: "347324893",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      RegDate: "20 October 2021",
      UserType: "Driver",
      ActiveStatus: "Active",
      RidesCount: 10,
      VerificationStatus: "verified",
    },
    {
      id: 9,
      Email: "Snow",
      FullName: "Jon",
      PhoneNumber: "347324893",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      RegDate: "20 October 2021",
      UserType: "Driver",
      ActiveStatus: "Active",
      RidesCount: 10,
      VerificationStatus: "verified",
    },
    {
      id: 10,
      Email: "Snow",
      FullName: "Jon",
      PhoneNumber: "347324893",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      RegDate: "20 October 2021",
      UserType: "Driver",
      ActiveStatus: "Active",
      RidesCount: 10,
      VerificationStatus: "verified",
    },
  ];

  const deactivatedUserRows = [
    {
      id: 1,
      Email: "Snow",
      FullName: "Jon",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      Flagged: "flag",
      RegDate: "20 October 2021",
      VerificationStatus: "verified",
      UserType: "Driver",
      deactivated:'true',
      ReasonForDeactivation: "Dangerous driving",
      DateDeactivated: "2 June 2023",
    },
    {
      id: 2,
      Email: "Snow",
      FullName: "Jon",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      Flagged: "flag",
      VerificationStatus: "verified",
      RegDate: "20 October 2021",
      UserType: "Driver",
      deactivated:'true',
      ReasonForDeactivation: "Dangerous driving",
      DateDeactivated: "2 June 2023",
    },
    {
      id: 3,
      Email: "Snow",
      FullName: "Jon",
      DateRegistered: "2 June 2023",
      Gender: "Male",
      Flagged: "flag",
      VerificationStatus: "verified",
      RegDate: "20 October 2021",
      UserType: "Driver",
      deactivated:'true',
      ReasonForDeactivation: "Dangerous driving",
      DateDeactivated: "2 June 2023",
    },
   
  ];

  const flaggedUserRows = [
    {
      id: 1,
      Email: "Snow",
      FullName: "Jon",
      DateFlagged: "2 June 2023",
      ReasonForFlagging: "Dangerous driving",
      Flagged: "flagged",
      VerificationStatus: "verified",
      UserType: "Driver",
    },
    {
      id: 2,
      Email: "Snow",
      FullName: "Jon",
      DateFlagged: "2 June 2023",
      ReasonForFlagging: "Dangerous driving",
      Flagged: "flag",
      VerificationStatus: "verified",
      UserType: "Driver",
    },
    {
      id: 3,
      Email: "Snow",
      FullName: "Jon",
      DateFlagged: "2 June 2023",
      ReasonForFlagging: "Dangerous driving",
      Flagged: "flag",
      VerificationStatus: "verified",
      UserType: "Driver",
    },
    {
      id: 4,
      Email: "Snow",
      FullName: "Jon",
      DateFlagged: "2 June 2023",
      ReasonForFlagging: "Dangerous driving",
      Flagged: "flag",
      VerificationStatus: "verified",
      UserType: "Driver",
    },
    {
      id: 5,
      Email: "Snow",
      FullName: "Jon",
      DateFlagged: "2 June 2023",
      ReasonForFlagging: "Dangerous driving",
      Flagged: "flag",
      VerificationStatus: "verified",
      UserType: "Driver",
    },
   
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
      number: 2,
    },
    {
      type: "Unverified",
      number: 1,
    },
    {
      type: "Deactivated Users",
      number: 1,
    },
    {
      type: "Flagged Users",
      number: 1,
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
    <div className="relative px-5 min-h-screen">
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
